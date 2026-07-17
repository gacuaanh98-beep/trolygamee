import { LayoutDashboard, BookOpen, GraduationCap, CheckSquare, User, LogOut, Award } from "lucide-react";
import { motion } from "motion/react";
import "./Sidebar.css";

interface SidebarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  userRole: "admin" | "student";
  userName: string;
  onLogout: () => void;
  incorrectCount?: number;
}

export default function Sidebar({ currentTab, onTabChange, userRole, userName, onLogout, incorrectCount = 0 }: SidebarProps) {
  const tabs = [
    { id: "dashboard", label: "Trang Chủ", icon: "🏠", color: "yellow" },
    { id: "units", label: "Các Unit Học", icon: "📚", color: "blue" },
    { id: "progress", label: "Tiến Độ Học", icon: "📈", color: "pink" },
    { id: "review", label: "Ôn Tập Lỗi Sai", icon: "🔄", color: "green" },
  ];

  return (
    <aside className="sidebar">
      {/* Sidebar Header Logo */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          🐔
        </div>
        <div>
          <h1 className="sidebar-title">
            Trợ Lý <br/> Gà Mẹ
          </h1>
          <span className="sidebar-subtitle">
            Gà Con Chăm Chỉ 🌾
          </span>
        </div>
      </div>

      {/* Navigation Tab Menu */}
      <nav className="sidebar-nav">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const statusClass = isActive ? "active" : "inactive";
          const colorClass = `color-${tab.color}`;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`sidebar-tab ${statusClass} ${colorClass}`}
            >
              <div className="tab-content">
                <span className="tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
              {tab.id === "review" && incorrectCount > 0 ? (
                <span className="tab-badge">
                  {incorrectCount}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>

      {/* User Information & Logout */}
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            {userName === "Bảo Nam" ? "🐣" : "🐤"}
          </div>
          <div className="user-details">
            <p className="user-name">{userName}</p>
            <span className="user-status">
              Học sinh tích cực 🌟
            </span>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="logout-btn"
        >
          <span className="logout-icon">🚪</span> <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
