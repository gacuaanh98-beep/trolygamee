import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, MessageCircle, X, HelpCircle, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";
import "./ChatbotWidget.css";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "gami",
      text: "🐔 Ò ó o o! Gà Mẹ chào con yêu nhé! Hôm nay con học bài có chỗ nào chưa hiểu không nè? Con có thể hỏi Gà Mẹ về từ vựng, ngữ pháp tiếng Anh hoặc nhờ Gà Mẹ giải thích các bài tập khó nhé!",
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const studentMessage: ChatMessage = {
      id: "msg_" + Math.random().toString(36).substring(2, 9),
      sender: "student",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, studentMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const { chatWithGemini } = await import("../lib/gemini");
      const data = await chatWithGemini(studentMessage.text, messages.slice(-8));

      const gamiMessage: ChatMessage = {
        id: "msg_" + Math.random().toString(36).substring(2, 9),
        sender: "gami",
        text: data.text,
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, gamiMessage]);
    } catch (err) {
      console.error("Chat Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (q: string) => {
    setInputValue(q);
  };

  return (
    <div className="chatbot-widget-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  🐔
                </div>
                <div>
                  <h3 className="chatbot-title">
                    <span>Gà Mẹ Nhân Ái</span>
                    <Sparkles className="chatbot-sparkle" />
                  </h3>
                  <span className="chatbot-status">Đang sẵn sàng chỉ bài con yêu 🟢</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="chatbot-close-btn"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages body */}
            <div className="chatbot-body">
              {messages.map((msg) => {
                const isGami = msg.sender === "gami";
                return (
                  <div
                    key={msg.id}
                    className={`chat-msg-row ${isGami ? "gami" : "student"}`}
                  >
                    <div className={`chat-msg-avatar ${isGami ? "gami" : "student"}`}>
                      {isGami ? "🐔" : "🐥"}
                    </div>
                    <div className={`chat-msg-bubble ${isGami ? "gami" : "student"}`}>
                      <p className="chat-msg-text">{msg.text}</p>
                      <span className={`chat-msg-time ${isGami ? "gami" : "student"}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="chat-loading-row">
                  <div className="chat-msg-avatar gami">🐔</div>
                  <div className="chat-loading-bubble">
                    <span className="loading-dot"></span>
                    <span className="loading-dot"></span>
                    <span className="loading-dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick helper questions */}
            <div className="chatbot-quick-qs">
              {[
                "Phân biệt Thì hiện tại đơn và hiện tại tiếp diễn?",
                "Khi nào dùng mạo từ 'The' hả Gà Mẹ?",
                "Used to và Get used to khác nhau thế nào?",
                "Cho con ví dụ về Động từ trạng thái!"
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickQuestion(q)}
                  className="quick-q-btn"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="chatbot-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Hỏi Gà Mẹ về ngữ pháp tiếng Anh..."
                className="chatbot-input"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="chatbot-send-btn"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-launcher"
      >
        <span className="chatbot-launcher-icon">🐔</span>
        <span className="chatbot-ai-badge">AI</span>
      </button>
    </div>
  );
}
