import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, Star, BookOpen, AlertCircle, Sparkles } from "lucide-react";
import { User, Unit, UserProgress, IncorrectQuestion } from "./types";
import LoginScreen from "./components/LoginScreen";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UnitViewer from "./components/UnitViewer";
import ReviewTab from "./components/ReviewTab";
import ChatbotWidget from "./components/ChatbotWidget";
import ConfettiEffect from "./components/ConfettiEffect";
import { store } from "./lib/store";
import "./App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentTab, setCurrentTab] = useState<string>("dashboard");
  const [units, setUnits] = useState<Unit[]>([]);
  const [progressList, setProgressList] = useState<UserProgress[]>([]);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [isNewUserLogin, setIsNewUserLogin] = useState(false);

  // Fetch Units catalog
  const fetchUnits = async () => {
    try {
      const data = store.getUnits();
      setUnits(data);
    } catch (err) {
      console.error("Error loading units:", err);
    }
  };

  // Fetch Progress for the authenticated student
  const fetchProgress = async (userId: string) => {
    try {
      const data = store.getUserProgress(userId);
      setProgressList(data);
    } catch (err) {
      console.error("Error loading progress:", err);
    }
  };

  const fetchIncorrectCount = async (userId: string) => {
    try {
      const data = store.getIncorrectQuestions(userId);
      setIncorrectCount(data.length || 0);
    } catch (err) {
      console.error("Error loading incorrect count:", err);
    }
  };

  useEffect(() => {
    fetchUnits();
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.role === "student") {
      fetchIncorrectCount(currentUser.id);
    }
  }, [currentUser]);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setIsNewUserLogin(user.score === 0);
    if (user.role === "student") {
      fetchProgress(user.id);
      fetchIncorrectCount(user.id);
      setCurrentTab("dashboard");
    } else {
      // Teachers go directly to student list tab
      setCurrentTab("dashboard");
    }
  };

  const handleProgressUpdate = async (updates: Partial<UserProgress>) => {
    if (!currentUser || !activeUnitId) return;

    try {
      store.updateProgress(currentUser.id, activeUnitId, updates);
      
      // Award bonus if completed
      if (updates.status === "da_nam_chac") {
        store.rewardStudent(currentUser.id, 100, 10);
      } else {
        store.rewardStudent(currentUser.id, 10, 1);
      }

      const users = store.getUsers();
      const updatedUser = users.find((u) => u.id === currentUser.id);
      
      if (updatedUser) {
        // Update local user points & badges
        setCurrentUser(updatedUser);
        // Refresh progress list
        fetchProgress(currentUser.id);

        // Trigger confetti celebration on unit masteries!
        if (updates.status === "da_nam_chac" || updates.status === "da_hoan_thanh") {
          setCelebrate(true);
          setTimeout(() => setCelebrate(false), 5000);
        }
      }
    } catch (err) {
      console.error("Update Progress Error:", err);
    }
  };

  const handleIncorrectLog = (iq: any) => {
    if (currentUser) {
      fetchIncorrectCount(currentUser.id);
    }
  };

  const handleProgressRefetched = (user?: User) => {
    if (user) {
      setCurrentUser(user);
      fetchProgress(user.id);
      fetchIncorrectCount(user.id);
    } else if (currentUser) {
      fetchProgress(currentUser.id);
      fetchIncorrectCount(currentUser.id);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentTab("dashboard");
    setActiveUnitId(null);
    setProgressList([]);
  };

  if (!currentUser) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  const activeUnit = units.find((u) => u.id === activeUnitId);

  return (
    <div className="app-container">
      {/* Sidebar Section */}
      <Sidebar
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          setActiveUnitId(null); // Close active unit view when tab shifts
        }}
        userRole={currentUser.role}
        userName={currentUser.name}
        onLogout={handleLogout}
        incorrectCount={incorrectCount}
      />

      {/* Main Workspace Section */}
      <main className="app-main">
        {/* Top Header Information Panel */}
        <div className="app-header">
          <div className="header-left">
            <span className="status-dot"></span>
            <span className="header-title">
              {currentUser.role === "admin" ? "Cổng thông tin Giáo viên" : "Đồng hành cùng Gà con"}
            </span>
          </div>

          <div className="header-right">
            {currentUser.role === "student" && (
              <>
                <div className="header-stat">
                  <span className="stat-icon">🌾</span>
                  <div>
                    <p className="stat-value thoc">
                      {currentUser.points} Thóc
                    </p>
                    <span className="stat-label">Kho thóc vàng</span>
                  </div>
                </div>

                <div className="header-stat">
                  <span className="stat-icon">🏆</span>
                  <div>
                    <p className="stat-value score">
                      {currentUser.score}%
                    </p>
                    <span className="stat-label">Tiến trình</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Dynamic Inner Tab View */}
        <div className="app-content">
          <AnimatePresence mode="wait">
            {/* If Student is actively studying a Unit */}
            {activeUnitId && activeUnit ? (
              <motion.div
                key="unit-viewer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="view-container"
              >
                <UnitViewer
                  unit={activeUnit}
                  user={currentUser}
                  progress={progressList.find((p) => p.unitId === activeUnit.id)}
                  onBack={() => setActiveUnitId(null)}
                  onProgressUpdate={handleProgressUpdate}
                  onIncorrectLog={handleIncorrectLog}
                  onProgressRefetched={handleProgressRefetched}
                />
              </motion.div>
            ) : (
              <motion.div
                key={currentTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="view-container"
              >
                {/* Dashboard View */}
                {currentTab === "dashboard" && (
                  <Dashboard
                    user={currentUser}
                    units={units}
                    progressList={progressList}
                    onStartLearning={(unitId) => setActiveUnitId(unitId)}
                    onNavigateToUnits={() => setCurrentTab("units")}
                  />
                )}

                {/* Units List View */}
                {currentTab === "units" && (
                  <div className="units-container">
                    <div className="units-header">
                      <h2>📚 Giáo trình tiếng Anh Close-up</h2>
                      <p>
                        Hãy chọn một bài học dưới đây để bắt đầu tìm hiểu lý thuyết ngữ pháp tinh gọn và làm bài tập thực hành.
                      </p>
                    </div>

                    <div className="units-grid">
                      {units.map((unit) => {
                        const progress = progressList.find((p) => p.unitId === unit.id);
                        const status = progress?.status || "chua_hoc";
                        const totalExCount = unit.exercises?.length || 0;
                        const completedExCount = progress?.exercisesCompleted?.length || 0;
                        const percent = totalExCount > 0 ? Math.round((completedExCount / totalExCount) * 100) : 0;

                        return (
                          <div key={unit.id} className="unit-card">
                            <div>
                              <span className="unit-card-number">UNIT {unit.number}</span>
                              <h3 className="unit-card-title">
                                <span>{unit.title}</span>
                                {status !== "chua_hoc" && (
                                  <span className="unit-card-badge">
                                    Đã làm {percent}%
                                  </span>
                                )}
                              </h3>
                              <p className="unit-card-desc">
                                {unit.description}
                              </p>
                            </div>
                            <button
                              onClick={() => setActiveUnitId(unit.id)}
                              className="unit-card-btn"
                            >
                              Bắt đầu học ngay 🚀
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Student Progress Chart */}
                {currentTab === "progress" && (
                  <div className="progress-container">
                    <div className="progress-header">
                      <h2>📈 Nhật Ký Tiến Độ Của Con</h2>
                      <p>
                        Ghi lại chi tiết tất cả các chặng đường, điểm số ngữ pháp con đã vượt qua cùng Cô Gà Mẹ!
                      </p>
                    </div>

                    <div className="progress-list">
                      {units.map((unit) => {
                        const progress = progressList.find((p) => p.unitId === unit.id);
                        const status = progress?.status || "chua_hoc";

                        const totalExCount = unit.exercises.length;
                        const completedExCount = progress?.exercisesCompleted?.length || 0;

                        return (
                          <div key={unit.id} className="progress-item">
                            <div>
                              <span className="progress-item-number">UNIT {unit.number}</span>
                              <h4 className="progress-item-title">{unit.title}</h4>
                              <p className="progress-item-desc">
                                Đã hoàn thành {completedExCount} / {totalExCount} bài tập mẫu.
                              </p>
                            </div>

                            <div className="progress-item-actions">
                              <span className="progress-status">
                                {status === "chua_hoc" && "Chưa học"}
                                {status === "dang_hoc" && "Đang học 🐣"}
                                {status === "da_hoc" && "Đã học lý thuyết"}
                                {status === "da_lam_bai" && "Đang làm bài 📝"}
                                {status === "da_hoan_thanh" && "Đã hoàn thành 🎉"}
                                {status === "da_nam_chac" && "Đã nắm chắc 🏆"}
                              </span>
                              <button
                                onClick={() => setActiveUnitId(unit.id)}
                                className="progress-btn"
                              >
                                Xem lại
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Review tab */}
                {currentTab === "review" && (
                  <ReviewTab
                    userId={currentUser.id}
                    onProgressRefetched={handleProgressRefetched}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Confetti celebration effect on course milestones */}
      <ConfettiEffect active={celebrate} />

      {/* Floating 🐔 Gà Mẹ AI chatbot */}
      <ChatbotWidget />
    </div>
  );
}
