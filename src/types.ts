export type UserRole = "admin" | "student";
export type AccountStatus = "active" | "locked";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: AccountStatus;
  score: number;
  points: number;
  badges: string[];
  password?: string;
}

export interface TheoryPart {
  subtitle: string;
  content: string;
  formula?: string; // HTML or Markdown formatted formula table/text
  examples: { english: string; vietnamese: string }[];
  chickenTip: string; // "Gà mẹ nhắc con" warning
}

export interface Flashcard {
  id: string;
  front: string; // word or phrase
  back: string;  // meaning or explanation
  pronunciation?: string;
  partOfSpeech?: string; // e.g. "noun", "verb", "adjective"
}

export type ExerciseType =
  | "multiple-choice"
  | "fill-in-the-blank"
  | "matching"
  | "sentence-transformation"
  | "error-correction"
  | "reordering"
  | "writing";

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[]; // for multiple choice or matching
  correctAnswer: string | string[]; // string or matching key value pairs
  explanation: string; // Vietnamese explanation (why, rule, examples, tips)
  matchingPairs?: { left: string; right: string }[]; // for matching
  sentenceParts?: string[]; // for reordering
}

export interface Unit {
  id: string;
  number: number;
  name: string;
  title: string;
  description: string;
  intro: string;
  theoryParts: TheoryPart[];
  mindmap: string; // text or simple HTML representing a mindmap
  flashcards: Flashcard[];
  exercises: Exercise[];
}

export interface UserProgress {
  userId: string;
  unitId: string;
  status: "chua_hoc" | "dang_hoc" | "da_hoc" | "da_lam_bai" | "da_hoan_thanh" | "da_nam_chac";
  score: number; // percentage completed or max score achieved
  completedAt?: string;
  theoryRead: string[]; // subtitle list of read theory parts
  exercisesCompleted: string[]; // exercise ids completed
}

export interface IncorrectQuestion {
  id: string;
  userId: string;
  unitId: string;
  unitName: string;
  exerciseId: string;
  questionText: string;
  type: ExerciseType;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export interface ChatMessage {
  id: string;
  sender: "student" | "gami";
  text: string;
  timestamp: string;
}
