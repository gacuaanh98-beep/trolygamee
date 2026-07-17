import React, { useState } from "react";
import { motion } from "motion/react";
import { Info, AlertCircle, HelpCircle, Sparkles, User as UserIcon } from "lucide-react";
import { User } from "../types";
import { store } from "../lib/store";
import "./LoginScreen.css";

interface LoginScreenProps {
  onLoginSuccess: (user: User) => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [studentName, setStudentName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHelper, setShowHelper] = useState(false);
  const [hideHelperPermanently, setHideHelperPermanently] = useState(() => {
    try {
      return localStorage.getItem("hide_demo_helper") === "true";
    } catch {
      return false;
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const nameValue = studentName.trim();
      if (!nameValue) {
        throw new Error("Vui lòng nhập họ và tên của con nhé!");
      }

      // Simulate network delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 500));

      const users = store.getUsers();
      const trimmedName = nameValue.trim();
      
      let student = users.find(
        (u) => u.role !== "admin" && u.name.toLowerCase().trim() === trimmedName.toLowerCase()
      );

      if (student) {
        if (student.status === "locked") {
          throw new Error("Tài khoản của con đang bị tạm khóa. Con hãy bảo Cô Giáo mở khóa cho con nha!");
        }
        onLoginSuccess(student);
        return;
      }

      // Auto-create a student with this name!
      const cleanNameForEmail = trimmedName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/[^a-z0-9]/g, "");      
      
      const randomSuffix = Math.random().toString(36).substring(2, 6);
      const generatedEmail = `${cleanNameForEmail || "gacon"}_${randomSuffix}@gami.com`;
      const id = "student_" + Math.random().toString(36).substring(2, 9);

      const newUser = store.addUser({
        id,
        email: generatedEmail,
        name: trimmedName,
        role: "student",
        status: "active"
      });

      onLoginSuccess(newUser);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Banner Section with stylized hen illustration */}
        <div className="login-banner">
          <div className="banner-circle-top"></div>
          <div className="banner-circle-bottom"></div>

          {/* Pure SVG Chicken and Chicks Illustration */}
          <div className="login-illustration">
            <svg
              viewBox="0 0 100 100"
              style={{ width: "100%", height: "100%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mother Hen Body */}
              <circle cx="50" cy="50" r="32" fill="#FFC107" />
              {/* Mother Hen Head Wing */}
              <path d="M50 18 C55 18, 58 10, 50 4 C42 10, 45 18, 50 18 Z" fill="#E53935" />
              {/* Hen Eye */}
              <circle cx="38" cy="45" r="4" fill="#000" />
              <circle cx="36" cy="43" r="1.5" fill="#FFF" />
              {/* Hen Beak */}
              <polygon points="26,48 18,52 26,56" fill="#FF5722" />
              {/* Hen Cheek blush */}
              <circle cx="38" cy="55" r="5" fill="#FF8A80" opacity="0.6" />
              {/* Tail feathers */}
              <path d="M78 40 C85 30, 85 50, 78 55 Z" fill="#FFA000" />
              <path d="M76 46 C81 38, 81 54, 76 58 Z" fill="#FF8F00" />
              {/* Wing */}
              <path d="M52 48 C62 48, 68 58, 52 68 C44 60, 44 52, 52 48 Z" fill="#FFE082" />

              {/* Little Chick 1 */}
              <circle cx="78" cy="74" r="14" fill="#FFF176" />
              <circle cx="74" cy="72" r="1.5" fill="#000" />
              <polygon points="68,74 64,76 68,78" fill="#FF5722" />

              {/* Little Chick 2 */}
              <circle cx="22" cy="74" r="12" fill="#FFF59D" />
              <circle cx="20" cy="72" r="1.2" fill="#000" />
              <polygon points="16,74 13,75 16,77" fill="#FF5722" />
            </svg>
          </div>

          <h2 className="login-title">
            🐔 TRỢ LÝ CỦA GÀ MẸ
          </h2>
          <p className="login-subtitle">
            Giúp gà con tập BAY
          </p>
        </div>

        {/* Form Section */}
        <div className="login-form-section">
          <div className="form-header">
            <h3 className="form-title">
              ĐĂNG NHẬP HỌC SINH
            </h3>
            <p className="form-desc">
              Con yêu chỉ cần nhập tên của mình để bắt đầu vào lớp học nhé! 👦👧
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="error-message"
            >
              <AlertCircle className="error-icon" />
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">
                Họ và tên của con là gì nhỉ?
              </label>
              <div className="input-wrapper">
                <span className="input-icon-left">
                  <UserIcon size={20} />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Minh Châu, Gia Bảo, Bảo Nam..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="login-input"
                />
              </div>
              <p className="input-hint">
                * Hãy nhập 1 tên không dấu và nhập chính xác cho những lần sau đó, ví dụ: ann
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="submit-btn"
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span className="submit-text">Vào học cùng Gà Mẹ thôi con! 🚀</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Help for Reviewer */}
          {!hideHelperPermanently && (
            <div className="helper-section">
              <button
                onClick={() => setShowHelper(!showHelper)}
                className="helper-toggle"
              >
                <HelpCircle size={14} />
                <span>Gợi ý tên học sinh mẫu</span>
              </button>

              {showHelper && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="helper-content"
                >
                  <p><strong>📋 Tên học sinh mẫu:</strong></p>
                  <div className="helper-group">
                    <strong>👦 Tài khoản đã có tiến trình:</strong>
                    <p>Nhập tên: <code>Gà Con Chăm Chỉ</code></p>
                  </div>
                  <div className="helper-group">
                    <strong>✨ Tạo tài khoản mới:</strong>
                    <p>Nhập bất kỳ tên nào khác (Ví dụ: <code>Minh Thư</code>, <code>Hùng Anh</code>) để hệ thống tự tạo tài khoản mới tinh cho con!</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Hộp gợi ý tài khoản này sẽ được ẩn vĩnh viễn để bảo đảm giao diện học sạch sẽ. Con có chắc chắn ẩn không?")) {
                        localStorage.setItem("hide_demo_helper", "true");
                        setHideHelperPermanently(true);
                      }
                    }}
                    className="helper-hide-btn"
                  >
                    Ẩn vĩnh viễn gợi ý này (Cho học sinh tự học) 🔒
                  </button>
                </motion.div>
              )}
            </div>
          )}

          <div className="footer-section">
            <span>Trợ Lý Gà Mẹ v2.0</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                alert("☎️ Số điện thoại Giáo Viên: 098.XXX.XXXX\n📧 Email: gacuaanh98@gmail.com\nChúc các con luôn học tốt cùng Gà Mẹ!");
              }}
              className="footer-link"
            >
              Liên hệ Giáo viên hỗ trợ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
