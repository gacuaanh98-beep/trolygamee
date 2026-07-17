import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Award, AlertCircle, HelpCircle, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Exercise, User } from "../types";
import "./ExercisesTab.css";

interface ExercisesTabProps {
  unitId: string;
  unitName: string;
  exercises: Exercise[];
  userId: string;
  completedExerciseIds: string[];
  onExerciseCompleted: (exId: string) => void;
  onIncorrectLog: (iq: any) => void;
  onProgressRefetched: (user: User) => void;
  isAllTheoryRead: boolean;
  onCompleteAll: () => void;
}

export default function ExercisesTab({
  unitId,
  unitName,
  exercises,
  userId,
  completedExerciseIds,
  onExerciseCompleted,
  onIncorrectLog,
  onProgressRefetched,
  isAllTheoryRead,
  onCompleteAll
}: ExercisesTabProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; show: boolean; detailedExplanation?: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completedAllUnit, setCompletedAllUnit] = useState(false);

  const currentExercise = exercises[currentIndex];
  const isCurrentCompleted = completedExerciseIds.includes(currentExercise?.id);

  useEffect(() => {
    // Reset inputs when switching exercises
    setSelectedOption(null);
    setTextAnswer("");
    setFeedback(null);
    setIsSubmitted(false);
  }, [currentIndex]);

  if (exercises.length === 0) {
    return <div style={{ padding: "1.5rem", textAlign: "center", color: "#6b7280" }}>Chưa có bài tập nào cho Unit này.</div>;
  }

  const handleCheckAnswer = async () => {
    if (isSubmitted || isCurrentCompleted) return;

    let answerToCheck: string | string[] = "";
    if (currentExercise.type === "multiple-choice") {
      if (!selectedOption) {
        alert("Hãy chọn một đáp án nhé con ngoan!");
        return;
      }
      answerToCheck = selectedOption;
    } else {
      if (!textAnswer.trim()) {
        alert("Hãy điền câu trả lời nhé con ngoan!");
        return;
      }
      answerToCheck = textAnswer.trim();
    }

    try {
      const { checkQuiz } = await import("../lib/gemini");
      const data = await checkQuiz({
        userId,
        unitId,
        unitName,
        exerciseId: currentExercise.id,
        userAnswer: answerToCheck as string,
        questionText: currentExercise.question,
        type: currentExercise.type,
        correctAnswer: currentExercise.correctAnswer,
        explanation: currentExercise.explanation,
        options: currentExercise.options
      });

      setIsSubmitted(true);
      setFeedback({
        isCorrect: data.correct,
        show: true,
        detailedExplanation: data.detailedExplanation
      });

      if (data.correct) {
        onExerciseCompleted(currentExercise.id);
        if (data.user) {
          onProgressRefetched(data.user);
        }
      } else {
        // We log to incorrect log state in client instantly for display
        onIncorrectLog({
          unitId,
          unitName,
          exerciseId: currentExercise.id,
          questionText: currentExercise.question,
          type: currentExercise.type,
          userAnswer: String(answerToCheck),
          correctAnswer: Array.isArray(currentExercise.correctAnswer) ? currentExercise.correctAnswer.join(", ") : String(currentExercise.correctAnswer),
          explanation: data.detailedExplanation || currentExercise.explanation
        });
      }
    } catch (err) {
      console.error("Check Answer Error:", err);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Check if all exercises in unit are finished
      const isAllFinished = exercises.every(
        (ex) => completedExerciseIds.includes(ex.id) || ex.id === currentExercise.id
      );

      if (isAllFinished) {
        setCompletedAllUnit(true);
        onCompleteAll();
      } else {
        alert("Con ơi, vẫn còn câu hỏi chưa trả lời đúng kìa. Con hãy nhấn xem lý thuyết rồi vào trả lời lại các câu sai ở trang chủ nhé!");
      }
    }
  };

  return (
    <div className="exercises-tab-container">
      {/* Progress metrics */}
      <div className="ex-progress-bar">
        <span className="ex-progress-text">
          Tiến trình làm bài: <strong>{completedExerciseIds.length} / {exercises.length} câu đúng</strong>
        </span>
        <div className="ex-nav-dots">
          {exercises.map((ex, idx) => {
            const isCompleted = completedExerciseIds.includes(ex.id);
            const isCurrent = idx === currentIndex;
            
            let dotClass = "pending";
            if (isCompleted) dotClass = "completed";
            else if (isCurrent) dotClass = "current";

            return (
              <span
                key={ex.id}
                onClick={() => setCurrentIndex(idx)}
                className={`ex-nav-dot ${dotClass}`}
              >
                {idx + 1}
              </span>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {completedAllUnit ? (
          <motion.div
            key="congrats"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ex-congrats-card"
          >
            <div className="congrats-emoji">🎉 🐔 🏆</div>
            <h3 className="congrats-title">
              Chúc mừng gà con đã hoàn thành xuất sắc!
            </h3>
            <p className="congrats-desc">
              Con đã trả lời chính xác tất cả câu hỏi của bài học này. Gà Mẹ rất tự hào về con! Con vừa được thưởng thêm thóc vàng để đổi thưởng rồi đó.
            </p>
            {isAllTheoryRead ? (
              <div className="status-alert success">
                <CheckCircle2 size={16} />
                <span>Unit này đã đạt trạng thái ĐÃ NẮM CHẮC 🏆</span>
              </div>
            ) : (
              <div className="status-alert warning">
                <AlertCircle size={16} />
                <span>Để Unit đạt trạng thái <strong>ĐÃ NẮM CHẮC</strong>, con nhớ quay lại thẻ Lý Thuyết và nhấn nút <strong>Đánh dấu đã học</strong> cho tất cả các phần bài học nhé!</span>
              </div>
            )}
            <button
              onClick={() => {
                setCompletedAllUnit(false);
                setCurrentIndex(0);
              }}
              className="congrats-btn"
            >
              Làm lại bài tập
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentExercise.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Question card */}
            <div className="ex-question-card">
              <div className="ex-header-row">
                <span className="ex-type-badge">
                  {currentExercise.type.replace("-", " ")}
                </span>
                <span className="ex-counter">
                  Câu hỏi {currentIndex + 1} / {exercises.length}
                </span>
              </div>

              <h3 className="ex-question-text">
                {currentExercise.question}
              </h3>

              {/* Renders answer interface base on exercise type */}
              {currentExercise.type === "multiple-choice" && currentExercise.options ? (
                <div className="ex-options-grid">
                  {currentExercise.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const isCorrectOption = option === currentExercise.correctAnswer;
                    
                    let cardStyle = "default";
                    if (isSelected) cardStyle = "selected";
                    if ((isSubmitted || isCurrentCompleted) && isCorrectOption) {
                      cardStyle = "correct";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => {
                          if (!isSubmitted && !isCurrentCompleted) {
                            setSelectedOption(option);
                          }
                        }}
                        disabled={isSubmitted || isCurrentCompleted}
                        className={`ex-option-btn ${cardStyle}`}
                      >
                        <span>{option}</span>
                        {isSelected && <div className="radio-dot"></div>}
                        {(isSubmitted || isCurrentCompleted) && isCorrectOption && (
                          <Check className="correct-icon" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="ex-input-wrapper">
                  <input
                    type="text"
                    disabled={isSubmitted || isCurrentCompleted}
                    placeholder="Nhập câu trả lời của con vào đây..."
                    value={isCurrentCompleted ? String(currentExercise.correctAnswer) : textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    className="ex-text-input"
                  />
                  {isCurrentCompleted && (
                    <p className="ex-input-msg">
                      Con đã hoàn thành câu này rồi!
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Check answer button */}
            {!isSubmitted && !isCurrentCompleted && (
              <button
                onClick={handleCheckAnswer}
                className="ex-check-btn"
              >
                <span>Kiểm tra đáp án 🐔</span>
              </button>
            )}

            {/* Feedback / Explanations section */}
            {(feedback?.show || isCurrentCompleted) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`ex-feedback-card ${(feedback?.isCorrect || isCurrentCompleted) ? "correct" : "incorrect"}`}
              >
                <div className="feedback-header">
                  <div className={`feedback-icon-box ${(feedback?.isCorrect || isCurrentCompleted) ? "correct" : "incorrect"}`}>
                    {(feedback?.isCorrect || isCurrentCompleted) ? <Check size={20} /> : <X size={20} />}
                  </div>
                  <div>
                    <h4 className="feedback-title">
                      {(feedback?.isCorrect || isCurrentCompleted) ? "✅ Chính xác! Quá xuất sắc gà con ơi!" : "❌ Chưa đúng rồi con yêu ơi!"}
                    </h4>
                    <p className="feedback-msg">
                      {(feedback?.isCorrect || isCurrentCompleted)
                        ? "Con học bài rất giỏi. Gà mẹ thưởng con 15 Thóc vàng nhé!"
                        : "Đừng lo lắng nhé! Hãy đọc kỹ giải thích của Gà Mẹ bên dưới để hiểu bài hơn nè."}
                    </p>
                  </div>
                </div>

                <div className="feedback-explanation">
                  <span className="explanation-title">
                    <HelpCircle size={14} />
                    <span>Gà Mẹ Giải Thích Chi Tiết:</span>
                  </span>
                  <p className="explanation-content">
                    {feedback?.detailedExplanation || currentExercise.explanation}
                  </p>
                  <p className="explanation-answer">
                    Đáp án chuẩn xác là: <strong>{Array.isArray(currentExercise.correctAnswer) ? currentExercise.correctAnswer.join(", ") : String(currentExercise.correctAnswer)}</strong>
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="next-btn"
                >
                  <span>
                    {currentIndex < exercises.length - 1 ? "Câu tiếp theo" : "Hoàn thành bài tập 🏁"}
                  </span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
