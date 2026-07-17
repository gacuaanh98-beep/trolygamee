import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckSquare, Star, Trash2, ArrowRight, Check, X, ShieldAlert, Award } from "lucide-react";
import { IncorrectQuestion, User } from "../types";
import { store } from "../lib/store";
import "./ReviewTab.css";

interface ReviewTabProps {
  userId: string;
  onProgressRefetched: (user: User) => void;
}

export default function ReviewTab({ userId, onProgressRefetched }: ReviewTabProps) {
  const [incorrectList, setIncorrectList] = useState<IncorrectQuestion[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<IncorrectQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [retryResult, setRetryResult] = useState<{ isCorrect: boolean; show: boolean } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setShowExplanation(false);
  }, [activeQuestion]);

  const fetchIncorrectList = async () => {
    try {
      const data = store.getIncorrectQuestions(userId);
      setIncorrectList(data);
    } catch (err) {
      console.error("Error fetching incorrect list:", err);
    }
  };

  useEffect(() => {
    fetchIncorrectList();
  }, [userId]);

  const handleRetrySubmit = async () => {
    if (!activeQuestion) return;
    if (!userAnswer.trim()) {
      alert("Hãy nhập câu trả lời của con nhé!");
      return;
    }

    const isCorrect = userAnswer.trim().toLowerCase() === activeQuestion.correctAnswer.trim().toLowerCase();

    try {
      let updatedUser = null;
      if (isCorrect) {
        store.removeIncorrectQuestion(activeQuestion.id);
        store.rewardStudent(userId, 20, 2);
        const users = store.getUsers();
        updatedUser = users.find((u) => u.id === userId);
      }

      if (isCorrect && updatedUser) {
        setRetryResult({ isCorrect: true, show: true });
        onProgressRefetched(updatedUser);
        // Refresh local list
        setTimeout(() => {
          setIncorrectList((prev) => prev.filter((q) => q.id !== activeQuestion.id));
          setActiveQuestion(null);
          setRetryResult(null);
          setUserAnswer("");
        }, 3000);
      } else {
        setRetryResult({ isCorrect: false, show: true });
      }
    } catch (err) {
      console.error("Error submitting retry:", err);
    }
  };

  return (
    <div className="review-tab-container">
      <div className="review-header">
        <div className="review-title-box">
          <h2>
            <span>🛡️ Ôn Tập & Sửa Lỗi Sai</span>
          </h2>
          <p>
            Gà Mẹ đã lưu giữ những câu hỏi mà con vô tình trả lời chưa đúng. Hãy làm lại để xóa lỗi và rinh thêm thóc vàng nhé!
          </p>
        </div>
        <div className="review-stats-box">
          <span className="stats-label">Thử thách tồn đọng</span>
          <span className="stats-value">{incorrectList.length} Câu sai</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeQuestion ? (
          <motion.div
            key="active-retry"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="retry-card"
          >
            <div className="retry-header">
              <span className="retry-badge">ÔN TẬP: {activeQuestion.unitName}</span>
              <button
                onClick={() => {
                  setActiveQuestion(null);
                  setRetryResult(null);
                  setUserAnswer("");
                }}
                className="retry-close-btn"
              >
                Đóng lại
              </button>
            </div>

            <div className="retry-question">
              <h3>{activeQuestion.questionText}</h3>
            </div>

            <div className="retry-old-answer">
              <label className="retry-label">Câu trả lời cũ của con:</label>
              <p className="old-answer-text">{activeQuestion.userAnswer}</p>
            </div>

            <div className="retry-new-answer">
              <label className="retry-label">Nhập câu trả lời mới:</label>
              <input
                type="text"
                disabled={retryResult?.isCorrect}
                placeholder="Nhập câu trả lời đã chỉnh sửa..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="retry-input"
              />
            </div>

            {/* Collapsible detailed explanation card */}
            <div className="explanation-toggle-area">
              <button
                type="button"
                onClick={() => setShowExplanation(!showExplanation)}
                className="explanation-toggle-btn"
              >
                <span>{showExplanation ? "🙈 Ẩn giải thích chi tiết" : "🐔 Xem Gà Mẹ giải thích chi tiết"}</span>
              </button>
              
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="explanation-box"
                >
                  {activeQuestion.explanation}
                </motion.div>
              )}
            </div>

            {retryResult?.show && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`retry-result-card ${retryResult.isCorrect ? "correct" : "incorrect"}`}
              >
                <div className="result-header">
                  {retryResult.isCorrect ? (
                    <>
                      <Check size={16} />
                      <span>Thành công! Con đã làm đúng và được xóa lỗi khỏi danh sách ôn tập. (+20 Thóc 🌾)</span>
                    </>
                  ) : (
                    <>
                      <X size={16} />
                      <span>Vẫn chưa đúng rồi con yêu. Hãy kiểm tra lại công thức và thử lại nhé!</span>
                    </>
                  )}
                </div>
                {retryResult.isCorrect && (
                  <p className="result-explanation">
                    {activeQuestion.explanation}
                  </p>
                )}
              </motion.div>
            )}

            {!retryResult?.isCorrect && (
              <div className="retry-actions">
                <button
                  onClick={() => {
                    setActiveQuestion(null);
                    setRetryResult(null);
                    setUserAnswer("");
                  }}
                  className="retry-skip-btn"
                >
                  Bỏ qua
                </button>
                <button
                  onClick={handleRetrySubmit}
                  className="retry-submit-btn"
                >
                  Xác nhận nộp 🐔
                </button>
              </div>
            )}
          </motion.div>
        ) : incorrectList.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="empty-state"
          >
            <div className="empty-icon">🌱 ✨ 🌾</div>
            <h3 className="empty-title">Tuyệt vời! Không có câu sai nào cả!</h3>
            <p className="empty-desc">
              Con đang học bài rất tốt và không bị tồn đọng câu hỏi lỗi nào. Hãy tiếp tục phát huy tinh thần tự tin học tập này nhé!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="incorrect-list"
          >
            {incorrectList.map((item) => (
              <div
                key={item.id}
                className="incorrect-item"
              >
                <div className="incorrect-content">
                  <div className="incorrect-meta">
                    <span className="incorrect-badge">
                      Lỗi Sai
                    </span>
                    <span className="incorrect-unit-name">{item.unitName}</span>
                  </div>
                  <h4 className="incorrect-question-text">{item.questionText}</h4>
                  <p className="incorrect-old-answer">
                    Câu trả lời cũ: <span>{item.userAnswer}</span>
                  </p>
                </div>

                <button
                  onClick={() => setActiveQuestion(item)}
                  className="incorrect-retry-btn"
                >
                  <span>Làm lại ngay</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
