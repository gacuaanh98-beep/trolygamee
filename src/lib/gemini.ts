import { GoogleGenAI } from "@google/genai";
import { store } from "./store";

// Use environment variable if available, otherwise try localStorage
const getApiKey = () => {
  return import.meta.env.VITE_GEMINI_API_KEY || localStorage.getItem("GEMINI_API_KEY") || "";
};

export const checkQuiz = async (params: {
  userId: string;
  unitId: string;
  unitName: string;
  exerciseId: string;
  userAnswer: string;
  questionText: string;
  type: string;
  correctAnswer: string | string[];
  explanation: string;
  options?: string[];
}) => {
  const { userId, unitId, unitName, exerciseId, userAnswer, questionText, type, correctAnswer, explanation, options } = params;

  const isCorrect = Array.isArray(correctAnswer)
    ? JSON.stringify(correctAnswer) === JSON.stringify(userAnswer)
    : String(correctAnswer).trim().toLowerCase() === String(userAnswer).trim().toLowerCase();

  if (isCorrect) {
    store.rewardStudent(userId, 15, 2);
    const updatedUser = store.getUsers().find((u) => u.id === userId);
    return { correct: true, user: updatedUser };
  } else {
    let detailedExplanation = `📖 **Dịch nghĩa cả câu:**\n"${questionText}"\n👉 Dịch nghĩa: Câu này hỏi hoặc yêu cầu con điền từ phù hợp để hoàn thành ý nghĩa câu.\n\n` +
      `❌ **Tại sao đáp án "${userAnswer}" chưa đúng:**\nLựa chọn của con chưa hoàn toàn chính xác hoặc chưa đúng cấu trúc ngữ pháp/từ vựng trong ngữ cảnh câu này.\n\n` +
      `✅ **Tại sao đáp án "${correctAnswer}" là chính xác:**\nĐáp án chính xác nhất là **"${correctAnswer}"**. Quy tắc học tập: ${explanation || "Con hãy kiểm tra lại lý thuyết bài học để ghi nhớ thật kỹ nhé!"}\n\n` +
      `🐔 **Lời khuyên của Gà Mẹ:**\nKhông sao đâu con yêu ơi! Thất bại là mẹ thành công mà. Gà Mẹ tin chắc lần sau con sẽ chú ý hơn và làm cực kỳ xuất sắc luôn đó! Cố lên con ngoan nha! 🐔💛✨`;

    const apiKey = getApiKey();
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
Bạn là "🐔 GÀ MẸ", một trợ lý giáo dục tiếng Anh cực kỳ ngọt ngào, tận tâm và đáng yêu dành cho học sinh Việt Nam.
Hãy xưng hô là "Gà Mẹ" và gọi học sinh là "con", "con yêu" hoặc "con ngoan", sử dụng một số icon dễ thương như 🐔, 🐣, 💛, ✨.

Học sinh vừa làm SAI câu hỏi tiếng Anh sau:
- Câu hỏi gốc: "${questionText}"
- Loại câu hỏi: ${type}
${options && options.length > 0 ? `- Các phương án lựa chọn: ${JSON.stringify(options)}` : ""}
- Đáp án của học sinh đã chọn: "${userAnswer}"
- Đáp án ĐÚNG phải là: "${correctAnswer}"
- Giải thích ngắn gọn ban đầu: "${explanation}"

Nhiệm vụ: Viết một lời giải thích THẬT CHI TIẾT và cụ thể cho học sinh hiểu sâu sắc lỗi sai và học được từ câu hỏi này.
Lời giải thích PHẢI trình bày bằng tiếng Việt, chia thành các phần rõ ràng có tiêu đề:
1. 📖 **Dịch nghĩa câu hỏi sang tiếng Việt**: Dịch trọn vẹn cả câu hỏi gốc sang tiếng Việt tự nhiên và chuẩn nhất cho học sinh hiểu nghĩa toàn câu.
2. ❌ **Tại sao đáp án con chọn ("${userAnswer}") chưa đúng**: Phân tích ngắn gọn sự nhầm lẫn hoặc lỗi sai cụ thể của đáp án này trong ngữ cảnh câu hỏi.
3. ✅ **Tại sao đáp án đúng ("${correctAnswer}") mới chính xác**: Giải thích thật chi tiết quy tắc ngữ pháp, từ vựng hoặc nghĩa của từ để làm rõ lý do tại sao nó đúng nhất.
${options && options.length > 0 ? `4. 🔍 **Phân tích cụ thể các đáp án khác**: Phân tích ngắn gọn ý nghĩa hoặc cấu trúc của từng phương án khác trong danh sách: ${JSON.stringify(options)} để con hiểu rõ tại sao chúng không được chọn.` : ""}
5. 🐔 **Lời động viên ngọt ngào của Gà Mẹ**: Khích lệ tinh thần con yêu bằng lời lẽ truyền cảm hứng ấm áp để con cố gắng hơn.

Hãy viết trực tiếp nội dung lời giải thích bằng tiếng Việt, trình bày sạch sẽ, xuống dòng rõ ràng và dùng định dạng Markdown. Không trả về code block markdown, không giải thích dài dòng ở ngoài.
`;

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            temperature: 0.7,
          }
        });

        if (response.text?.trim()) {
          detailedExplanation = response.text.trim();
        }
      } catch (err) {
        console.error("Gemini failed to generate detailed explanation:", err);
      }
    }

    store.addIncorrectQuestion(
      userId,
      unitId,
      unitName,
      exerciseId,
      questionText,
      type as any,
      String(userAnswer),
      Array.isArray(correctAnswer) ? correctAnswer.join(", ") : String(correctAnswer),
      detailedExplanation
    );
    return { correct: false, detailedExplanation };
  }
};

export const chatWithGemini = async (message: string, history: any[]) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return {
      text: "🐔 Gà Mẹ ơi! Chưa có khóa bí mật (Gemini API Key) trong cài đặt ứng dụng. Hãy nhờ giáo viên cấu hình Secrets để Gà Mẹ có thể trò chuyện cùng con nhé!"
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `
      Bạn là "🐔 GÀ MẸ", trợ lý giáo dục ngữ pháp tiếng Anh cực kỳ đáng yêu, tận tâm và chu đáo của học sinh.
      Nhiệm vụ chính của bạn:
      1. Chỉ trả lời các câu hỏi liên quan đến tiếng Anh, đặc biệt là ngữ pháp tiếng Anh (Thì hiện tại đơn, hiện tại tiếp diễn, mạo từ, quá khứ đơn, quá khứ tiếp diễn, used to, would...).
      2. Nếu học sinh hỏi về các chủ đề ngoài tiếng Anh, hãy khéo léo và ngọt ngào hướng các con quay lại bài học (ví dụ: "Gà Mẹ chỉ biết dạy tiếng Anh thôi nè con yêu, hãy hỏi Gà Mẹ về ngữ pháp tiếng Anh nha!").
      3. Cách xưng hô cực kỳ ấm áp và tràn đầy tình cảm gia đình bằng tiếng Việt: Xưng "Gà Mẹ" hoặc "Mẹ", gọi học sinh là "Con yêu", "Con ngoan", "Gà con của mẹ".
      4. Giải thích ngữ pháp thật dễ hiểu bằng tiếng Việt, kèm theo ví dụ song ngữ Anh - Việt trực quan. Đưa ra các mẹo nhớ mẹo học siêu dễ thương.
      5. Luôn động viên khen ngợi học sinh (ví dụ: "Con ngoan giỏi quá!", "Đừng nản chí nhé gà con ơi!").
    `;

    const chatHistory = (history || []).map((msg: any) => ({
      role: msg.sender === "student" ? "user" : "model",
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...chatHistory,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return { text: response.text || "Gà Mẹ đang bận ấp trứng chút xíu, con hỏi lại mẹ câu này nhé!" };
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    return {
      text: `🐔 Ôi con yêu ơi, Gà Mẹ gặp chút trục trặc kỹ thuật khi kết nối với tinh tú rồi! (Lỗi: ${error.message}). Hãy thử hỏi lại mẹ nhé!`
    };
  }
};
