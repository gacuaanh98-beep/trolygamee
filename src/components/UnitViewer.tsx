import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Map, HelpCircle, ArrowLeft, ArrowRight, Eye, CheckCircle2, ChevronRight, Bookmark } from "lucide-react";
import { Unit, UserProgress, User } from "../types";
import { getPronunciation } from "../lib/pronunciations";
import ExercisesTab from "./ExercisesTab";
import "./UnitViewer.css";

interface UnitViewerProps {
  unit: Unit;
  user: User;
  progress: UserProgress | undefined;
  onBack: () => void;
  onProgressUpdate: (updates: Partial<UserProgress>) => void;
  onIncorrectLog: (iq: any) => void;
  onProgressRefetched: (user: User) => void;
}

export default function UnitViewer({ unit, user, progress, onBack, onProgressUpdate, onIncorrectLog, onProgressRefetched }: UnitViewerProps) {
  const [activeSubTab, setActiveTab] = useState<"theory" | "mindmap" | "flashcards" | "exercises">("theory");
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Active progress details
  const readTheoryParts = progress?.theoryRead || [];
  const completedExercises = progress?.exercisesCompleted || [];

  const handleMarkTheoryRead = (partTitle: string) => {
    if (readTheoryParts.includes(partTitle)) return;
    const newRead = [...readTheoryParts, partTitle];
    
    // Automatically transition unit status as student progress changes
    let newStatus = progress?.status || "dang_hoc";
    if (newRead.length === unit.theoryParts.length && completedExercises.length === unit.exercises.length) {
      newStatus = "da_hoan_thanh";
    } else if (newRead.length === unit.theoryParts.length) {
      newStatus = "da_hoc";
    }

    onProgressUpdate({
      theoryRead: newRead,
      status: newStatus as any
    });
  };

  const handleExerciseCompleted = (exId: string) => {
    if (completedExercises.includes(exId)) return;
    const newEx = [...completedExercises, exId];

    let newStatus = progress?.status || "dang_hoc";
    if (readTheoryParts.length === unit.theoryParts.length && newEx.length === unit.exercises.length) {
      newStatus = "da_hoan_thanh";
    } else if (newEx.length > 0) {
      newStatus = "da_lam_bai";
    }

    onProgressUpdate({
      exercisesCompleted: newEx,
      status: newStatus as any
    });
  };

  return (
    <div className="unit-viewer-container">
      {/* Back button */}
      <button
        onClick={onBack}
        className="back-btn"
      >
        <ArrowLeft size={14} />
        <span>Quay lại trang chủ</span>
      </button>

      {/* Header Banner */}
      <div className="unit-header-banner">
        <div>
          <span className="unit-header-number">UNIT {unit.number}</span>
          <h2 className="unit-header-title">
            <span>🐔 {unit.name}: {unit.title}</span>
            {progress && progress.status !== "chua_hoc" && (
              <span className="unit-header-badge">
                Đã làm: {Math.round(((progress.exercisesCompleted?.length || 0) / (unit.exercises?.length || 1)) * 100)}%
              </span>
            )}
          </h2>
          <p className="unit-header-desc">{unit.description}</p>
        </div>
        <div className="unit-status-box">
          <span className="unit-status-label">Trạng thái:</span>
          <span className="unit-status-value">
            {progress?.status === "chua_hoc" && "🥚 Chưa học"}
            {progress?.status === "dang_hoc" && "🐣 Đang học"}
            {progress?.status === "da_hoc" && "📖 Đã học lý thuyết"}
            {progress?.status === "da_lam_bai" && "📝 Đang làm bài"}
            {progress?.status === "da_hoan_thanh" && "🎉 Đã hoàn thành"}
            {progress?.status === "da_nam_chac" && "🏆 Đã nắm chắc!"}
          </span>
        </div>
      </div>

      {/* Course Navigation Tabs */}
      <div className="unit-nav-tabs">
        {(["theory", "mindmap", "flashcards", "exercises"] as const).map((tab) => {
          let label = "";
          if (tab === "theory") label = "📖 Lý Thuyết";
          if (mindmapUrlLabel(tab)) label = "🗺️ Sơ Đồ Tư Duy";
          if (tab === "flashcards") label = "🎴 Flashcards";
          if (tab === "exercises") label = "📝 Bài Tập Thử Sức";

          const isActive = activeSubTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-tab-btn ${isActive ? "active" : "inactive"}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="unit-content-area">
        <AnimatePresence mode="wait">
          {activeSubTab === "theory" && (
            <motion.div
              key="theory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="theory-container"
            >
              {/* Introduction section */}
              <div className="intro-box">
                <span className="intro-icon">🥚</span>
                <div>
                  <h4 className="intro-title">Gà Mẹ giới thiệu bài học:</h4>
                  <p className="intro-desc">{unit.intro}</p>
                </div>
              </div>

              {/* Theory Parts list */}
              {unit.theoryParts.map((part, idx) => {
                const isRead = readTheoryParts.includes(part.subtitle);
                return (
                  <div key={idx} className="theory-part">
                    <div className="part-header">
                      <h3 className="part-title">
                        <Bookmark className="bookmark-icon" />
                        {part.subtitle}
                      </h3>
                      <button
                        onClick={() => handleMarkTheoryRead(part.subtitle)}
                        className={`mark-read-btn ${isRead ? "read" : "unread"}`}
                        disabled={isRead}
                      >
                        {isRead ? (
                          <>
                            <CheckCircle2 size={14} />
                            <span>Đã học xong!</span>
                          </>
                        ) : (
                          <>
                            <Eye size={14} />
                            <span>Đánh dấu đã học</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="part-content">
                      {part.content}
                    </p>

                    {/* Formula table if provided */}
                    {part.formula && (
                      <div className="formula-box">
                        <span className="formula-title">📊 CÔNG THỨC GHI NHỚ:</span>
                        <pre className="formula-content">
                          {part.formula}
                        </pre>
                      </div>
                    )}

                    {/* Examples Anh - Viet */}
                    <div className="examples-section">
                      <span className="examples-title">💡 Ví dụ thực tế:</span>
                      <div className="examples-grid">
                        {part.examples.map((ex, eIdx) => (
                          <div key={eIdx} className="example-card">
                            <p className="example-en">🇬🇧 {ex.english}</p>
                            <p className="example-vi">🇻🇳 {ex.vietnamese}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gà Mẹ nhắc con advice warning */}
                    <div className="chicken-tip-box">
                      <span className="tip-icon">🐔</span>
                      <div>
                        <span className="tip-title">🐔 Gà Mẹ nhắc con nè:</span>
                        <p className="tip-content">
                          {part.chickenTip}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeSubTab === "mindmap" && (
            <motion.div
              key="mindmap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="tab-content-padding"
            >
              <div dangerouslySetInnerHTML={{ __html: unit.mindmap }} />
            </motion.div>
          )}

          {activeSubTab === "flashcards" && (() => {
            const currentFlashcard = unit.flashcards[currentFlashcardIndex];
            const pronunciation = currentFlashcard ? getPronunciation(currentFlashcard.front, currentFlashcard.pronunciation) : "";
            return (
              <motion.div
                key="flashcards"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flashcards-container"
              >
                <div className="fc-header">
                  <h4 className="fc-title">Thẻ từ vựng & ngữ pháp 🎴</h4>
                  <p className="fc-subtitle">Nhấp chuột vào thẻ để lật xem nghĩa của từ nhé con!</p>
                </div>

                {/* Animated Flippable Flashcard */}
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="fc-card-wrapper"
                >
                  <div
                    className="fc-card-inner"
                    style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                  >
                    {/* Front Face */}
                    <div className="fc-face fc-front">
                      <span className="fc-label">Từ vựng tiếng Anh</span>
                      <span className="fc-word">
                        {currentFlashcard?.front}
                        {currentFlashcard?.partOfSpeech && (
                          <span className="fc-pos">
                            ({currentFlashcard.partOfSpeech})
                          </span>
                        )}
                      </span>
                      {pronunciation && (
                        <span className="fc-pronunciation">
                          {pronunciation}
                        </span>
                      )}
                      <span className="fc-hint">Nhấp để xem nghĩa 🔄</span>
                    </div>

                    {/* Back Face */}
                    <div className="fc-face fc-back">
                      <span className="fc-label">Nghĩa tiếng Việt</span>
                      <p className="fc-meaning">
                        {currentFlashcard?.back}
                      </p>
                      <span className="fc-hint">Nhấp để xem từ gốc 🔄</span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="fc-controls">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setCurrentFlashcardIndex((prev) => (prev > 0 ? prev - 1 : unit.flashcards.length - 1));
                    }}
                    className="fc-btn"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="fc-counter">
                    {currentFlashcardIndex + 1} / {unit.flashcards.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setCurrentFlashcardIndex((prev) => (prev < unit.flashcards.length - 1 ? prev + 1 : 0));
                    }}
                    className="fc-btn"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })()}

          {activeSubTab === "exercises" && (
            <motion.div
              key="exercises"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="tab-content-padding"
            >
              <ExercisesTab
                unitId={unit.id}
                unitName={unit.title}
                exercises={unit.exercises}
                userId={user.id}
                completedExerciseIds={completedExercises}
                onExerciseCompleted={handleExerciseCompleted}
                onIncorrectLog={onIncorrectLog}
                onProgressRefetched={onProgressRefetched}
                isAllTheoryRead={readTheoryParts.length === unit.theoryParts.length}
                onCompleteAll={() => {
                  // Let the student know they finished the entire unit
                  // Set status as 'da_nam_chac'
                  onProgressUpdate({ status: "da_nam_chac" });
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function mindmapUrlLabel(tab: string): boolean {
  return tab === "mindmap";
}
