import { initialUsers, initialUnits } from "./seed_data";
import { User, Unit, UserProgress, IncorrectQuestion } from "../types";

const DB_KEY = "gami_db";

interface DatabaseSchema {
  users: User[];
  units: Unit[];
  progress: UserProgress[];
  incorrectQuestions: IncorrectQuestion[];
}

function loadDb(): DatabaseSchema {
  try {
    const data = localStorage.getItem(DB_KEY);
    if (data) {
      const db = JSON.parse(data) as DatabaseSchema;
      // Always sync the latest units from initialUnits so code-based unit/exercise updates apply immediately
      db.units = initialUnits;
      return db;
    }
  } catch (error) {
    console.error("Error reading from localStorage, resetting to defaults", error);
  }

  // Seeding default database
  const defaultDb: DatabaseSchema = {
    users: initialUsers,
    units: initialUnits,
    progress: initialUnits.map((u) => ({
      userId: "student-gacon", // Example default user from seed_data
      unitId: u.id,
      status: "chua_hoc",
      score: 0,
      theoryRead: [],
      exercisesCompleted: []
    })),
    incorrectQuestions: []
  };
  saveDb(defaultDb);
  return defaultDb;
}

function saveDb(db: DatabaseSchema) {
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  } catch (error) {
    console.error("Error writing to localStorage", error);
  }
}

export const store = {
  getUsers: (): User[] => {
    return loadDb().users;
  },

  getUnits: (): Unit[] => {
    return loadDb().units;
  },

  getUserProgress: (userId: string): UserProgress[] => {
    const db = loadDb();
    return db.progress.filter((p) => p.userId === userId);
  },

  updateProgress: (
    userId: string,
    unitId: string,
    updates: Partial<UserProgress>
  ): UserProgress => {
    const db = loadDb();
    let pIndex = db.progress.findIndex((p) => p.userId === userId && p.unitId === unitId);

    if (pIndex === -1) {
      const newProgress: UserProgress = {
        userId,
        unitId,
        status: "dang_hoc",
        score: 0,
        theoryRead: [],
        exercisesCompleted: [],
        ...updates
      };
      db.progress.push(newProgress);
      saveDb(db);
      return newProgress;
    } else {
      db.progress[pIndex] = {
        ...db.progress[pIndex],
        ...updates
      };
      saveDb(db);
      return db.progress[pIndex];
    }
  },

  getIncorrectQuestions: (userId: string): IncorrectQuestion[] => {
    const db = loadDb();
    return db.incorrectQuestions.filter((q) => q.userId === userId);
  },

  addIncorrectQuestion: (
    userId: string,
    unitId: string,
    unitName: string,
    exerciseId: string,
    questionText: string,
    type: IncorrectQuestion["type"],
    userAnswer: string,
    correctAnswer: string,
    explanation: string
  ): IncorrectQuestion => {
    const db = loadDb();
    const newQ: IncorrectQuestion = {
      id: "iq_" + Math.random().toString(36).substring(2, 9),
      userId,
      unitId,
      unitName,
      exerciseId,
      questionText,
      type,
      userAnswer,
      correctAnswer,
      explanation
    };
    db.incorrectQuestions.push(newQ);
    saveDb(db);
    return newQ;
  },

  removeIncorrectQuestion: (id: string) => {
    const db = loadDb();
    db.incorrectQuestions = db.incorrectQuestions.filter((q) => q.id !== id);
    saveDb(db);
  },

  addUser: (user: Omit<User, "score" | "points" | "badges">): User => {
    const db = loadDb();
    const newUser: User = {
      ...user,
      score: 0,
      points: 0,
      badges: ["Trứng Mới Nở"]
    };
    db.users.push(newUser);

    // Also populate default progress for all existing units
    db.units.forEach((unit) => {
      db.progress.push({
        userId: newUser.id,
        unitId: unit.id,
        status: "chua_hoc",
        score: 0,
        theoryRead: [],
        exercisesCompleted: []
      });
    });

    saveDb(db);
    return newUser;
  },

  toggleUserLock: (id: string): User | null => {
    const db = loadDb();
    const uIndex = db.users.findIndex((u) => u.id === id);
    if (uIndex === -1) return null;

    const currentStatus = db.users[uIndex].status;
    db.users[uIndex].status = currentStatus === "active" ? "locked" : "active";
    saveDb(db);
    return db.users[uIndex];
  },

  resetUserPassword: (id: string): boolean => {
    return true;
  },

  updateUnit: (updatedUnit: Unit): Unit => {
    const db = loadDb();
    const uIndex = db.units.findIndex((u) => u.id === updatedUnit.id);
    if (uIndex !== -1) {
      db.units[uIndex] = updatedUnit;
    } else {
      db.units.push(updatedUnit);
    }
    saveDb(db);
    return updatedUnit;
  },

  rewardStudent: (userId: string, points: number, scoreIncrement: number): User | null => {
    const db = loadDb();
    const uIndex = db.users.findIndex((u) => u.id === userId);
    if (uIndex === -1) return null;

    db.users[uIndex].points += points;
    db.users[uIndex].score = Math.min(100, db.users[uIndex].score + scoreIncrement);

    // Check for badges
    if (db.users[uIndex].points >= 200 && !db.users[uIndex].badges.includes("Gà Con Khá Giả")) {
      db.users[uIndex].badges.push("Gà Con Khá Giả");
    }
    if (db.users[uIndex].points >= 500 && !db.users[uIndex].badges.includes("Chiến Binh Ngữ Pháp")) {
      db.users[uIndex].badges.push("Chiến Binh Ngữ Pháp");
    }
    if (db.users[uIndex].points >= 800 && !db.users[uIndex].badges.includes("Trạng Nguyên Gà Con")) {
      db.users[uIndex].badges.push("Trạng Nguyên Gà Con");
    }

    saveDb(db);
    return db.users[uIndex];
  }
};
