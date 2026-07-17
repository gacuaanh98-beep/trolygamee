import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Trophy, Star, Target, Sparkles, AlertCircle } from "lucide-react";
import { User, Unit, UserProgress } from "../types";
import "./Dashboard.css";

interface DashboardProps {
  user: User;
  units: Unit[];
  progressList: UserProgress[];
  onStartLearning: (unitId: string) => void;
  onNavigateToUnits: () => void;
}

export default function Dashboard({ user, units, progressList, onStartLearning, onNavigateToUnits }: DashboardProps) {
  // Random English idiom from the book
  const [randomIdiom] = useState(() => {
    const idioms = [
      { text: "A friend in need is a friend indeed", translation: "Gian nan mới biết bạn hiền" },
      { text: "Fit as a fiddle", translation: "Khỏe như vạc / Cực kỳ khỏe mạnh" },
      { text: "Keep your chin up", translation: "Lạc quan lên, đừng nản chí" },
      { text: "Spill the beans", translation: "Bật mí bí mật" },
      { text: "Actions speak louder than words", translation: "Hành động thực tế có giá trị hơn lời nói" },
      { text: "A shoulder to cry on", translation: "Một bờ vai để sẻ chia tâm sự" },
      { text: "In the same boat", translation: "Cùng hội cùng thuyền, đồng cảnh ngộ" },
    ];
    const randomIndex = Math.floor(Math.random() * idioms.length);
    return idioms[randomIndex];
  });

  // Determine if it's the first time learning (if all units have status 'chua_hoc')
  const totalUnits = units.length;
  const learnedUnitsCount = progressList.filter(
    (p) => p.status === "da_hoc" || p.status === "da_lam_bai" || p.status === "da_hoan_thanh" || p.status === "da_nam_chac"
  ).length;

  const isFirstTime = learnedUnitsCount === 0;

  // Find next unit to continue (the first one that is NOT 'da_nam_chac' or 'da_hoan_thanh', or default to first unit)
  const nextUnitToLearn = progressList.find(
    (p) => p.status !== "da_nam_chac" && p.status !== "da_hoan_thanh"
  )?.unitId || (units[0]?.id || "");

  const activeUnit = units.find((u) => u.id === nextUnitToLearn) || units[0];

  // Calculate overall course progress (percentage of completed modules or total average points)
  const masterUnitsCount = progressList.filter((p) => p.status === "da_nam_chac").length;
  const courseCompletionPercent = totalUnits > 0 ? Math.round((masterUnitsCount / totalUnits) * 100) : 0;

  // Aesthetic border classes cycled for unit cards
  const borderColors = ["#E8F1F2", "#FFE5ED", "#E7F7ED", "#F3EDFF"];

  return (
    <div className="dashboard-container">
      {/* Welcome Greeting Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="welcome-banner"
      >
        <div className="banner-content">
          <div className="banner-badge">
            <Sparkles size={14} />
            <span>Khu Vườn Gà Mẹ 🌿</span>
          </div>

          {isFirstTime ? (
            <>
              <h2 className="banner-title">
                Xin chào {user.name} 👋
              </h2>
              <div className="banner-text">
                <p>Chào mừng con đến với <strong>TRỢ LÝ CỦA GÀ MẸ</strong>.</p>
                <p>Gà mẹ sẽ đồng hành cùng con trong suốt quá trình học ngữ pháp tiếng Anh.</p>
                <p>Chúc con học thật vui và tiến bộ mỗi ngày! ✨</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="banner-title">
                Chào mừng con quay trở lại, {user.name} ❤️
              </h2>
              <div className="banner-text">
                <p>Gà mẹ đã lưu tiến độ học của con.</p>
                <p>Hãy tiếp tục cố gắng nhé! 💪🌾</p>
              </div>
            </>
          )}

          <div className="banner-actions">
            <button
              onClick={() => onStartLearning(activeUnit.id)}
              className="btn-primary"
            >
              <span>Học tiếp Unit {activeUnit.number} 🚀</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onNavigateToUnits}
              className="btn-secondary"
            >
              Chọn Unit khác
            </button>
          </div>
        </div>

        {/* 3D-like cartoon chicken helper visual */}
        <div className="banner-illustration">
          <div className="illus-main">🐔</div>
          <div className="illus-sub1">🐣</div>
          <div className="illus-sub2">🐤</div>
        </div>
      </motion.div>

      {/* Progress Cards */}
      <div className="stats-grid">
        {/* Points indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="stat-card stat-card-blue"
        >
          <div className="stat-icon-wrapper blue">
            <Trophy size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-info-title">Hạt Thóc Vàng</span>
            <p className="stat-info-value">{user.points} Thóc</p>
            <span className="stat-idiom">
              💡 Idiom: "{randomIdiom.text}" ({randomIdiom.translation})
            </span>
          </div>
        </motion.div>

        {/* Overall Completion Percentage */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card stat-card-pink"
        >
          <div className="progress-header">
            <div className="stat-icon-wrapper pink">
              <Target size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-info-title">Tiến độ khóa học</span>
              <p className="stat-info-value">{courseCompletionPercent}%</p>
            </div>
          </div>
          {/* Custom progress bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${courseCompletionPercent}%` }}
            ></div>
          </div>
        </motion.div>

        {/* Active badges count */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="stat-card stat-card-purple"
        >
          <div className="stat-icon-wrapper purple">
            <Star size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-info-title">Huy Hiệu Gà Con</span>
            <p className="stat-info-value">{user.badges.length} Huy Hiệu</p>
            <div className="stat-badges">
              {user.badges.slice(0, 3).map((badge, idx) => (
                <span
                  key={idx}
                  title={badge}
                  className="stat-badge-item"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Badges Exhibition Shelf */}
      <div className="badges-section">
        <h3 className="badges-title">
          <span>🏆</span> Huy hiệu của con
        </h3>
        <div className="badges-grid">
          {[
            { name: "Trứng Mới Nở", icon: "🥚", desc: "Mở tài khoản học tập thành công cùng Cô Gà Mẹ." },
            { name: "Gà Con Khá Giả", icon: "🐥", desc: "Đạt từ 200 Hạt Thóc vàng trở lên." },
            { name: "Chiến Binh Ngữ Pháp", icon: "⚔️", desc: "Đạt từ 500 Hạt Thóc vàng trở lên." },
            { name: "Trạng Nguyên Gà Con", icon: "👑", desc: "Hoàn thành toàn bộ khóa học xuất sắc!" },
          ].map((item) => {
            const hasBadge = user.badges.includes(item.name);
            return (
              <div
                key={item.name}
                className={`badge-card ${hasBadge ? "earned" : "locked"}`}
              >
                <div className="badge-icon">{hasBadge ? item.icon : "🔒"}</div>
                <p className="badge-name" title={item.name}>{item.name}</p>
                <p className="badge-desc" title={item.desc}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Units Quick Cards */}
      <div className="units-section">
        <h3 className="units-title">
          <span>📚</span> Chương Trình Học Close-up
        </h3>
        <div className="units-grid">
          {units.map((unit, idx) => {
            const progress = progressList.find((p) => p.unitId === unit.id);
            const status = progress?.status || "chua_hoc";

            let statusLabel = "Chưa học";
            let statusColorBg = "#f1f5f9";
            let statusColorText = "#475569";
            
            if (status === "dang_hoc") {
              statusLabel = "Đang học 🐣";
              statusColorBg = "#fef3c7";
              statusColorText = "#92400e";
            } else if (status === "da_hoc") {
              statusLabel = "Đã học lý thuyết";
              statusColorBg = "#dbeafe";
              statusColorText = "#1e40af";
            } else if (status === "da_lam_bai") {
              statusLabel = "Đã làm bài tập 📝";
              statusColorBg = "#f3e8ff";
              statusColorText = "#6b21a8";
            } else if (status === "da_hoan_thanh") {
              statusLabel = "Đã hoàn thành 🎉";
              statusColorBg = "#d1fae5";
              statusColorText = "#065f46";
            } else if (status === "da_nam_chac") {
              statusLabel = "Đã nắm chắc 🏆";
              statusColorBg = "#facc15";
              statusColorText = "#422006";
            }

            const borderColor = borderColors[idx % borderColors.length];
            const totalExCount = unit.exercises?.length || 0;
            const completedExCount = progress?.exercisesCompleted?.length || 0;
            const percent = totalExCount > 0 ? Math.round((completedExCount / totalExCount) * 100) : 0;

            return (
              <div
                key={unit.id}
                className="unit-card"
                style={{ borderColor: borderColor }}
              >
                <div className="unit-card-header">
                  <div className="unit-card-meta">
                    <span className="unit-number">UNIT {unit.number}</span>
                    <span 
                      className="unit-status"
                      style={{ backgroundColor: statusColorBg, color: statusColorText }}
                    >
                      {statusLabel}
                    </span>
                  </div>
                  <h4 className="unit-title">
                    <span>{unit.name}: {unit.title}</span>
                    {status !== "chua_hoc" ? (
                      <span className="unit-percent">
                        Đã làm {percent}%
                      </span>
                    ) : null}
                  </h4>
                  <p className="unit-desc">
                    {unit.description}
                  </p>
                </div>

                <div className="unit-footer">
                  <span className="unit-questions">
                    {unit.exercises.length} câu hỏi Close-up
                  </span>
                  <button
                    onClick={() => onStartLearning(unit.id)}
                    className="unit-action"
                  >
                    <span>Vào học ngay</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
