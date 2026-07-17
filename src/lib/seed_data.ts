import { Unit, User } from "../src/types";
import { unit4Exercises } from "./exercises_unit4";
import { unit5Exercises } from "./exercises_unit5";
import { unit6Exercises } from "./exercises_unit6";
import { unit7Exercises } from "./exercises_unit7";
import { unit8Exercises, unit8Flashcards } from "./exercises_unit8";
import { unit9Exercises, unit9Flashcards } from "./exercises_unit9";
import { unit10Exercises, unit10Flashcards } from "./exercises_unit10";
import { unit11Exercises, unit11Flashcards } from "./exercises_unit11";
import { unit12Exercises, unit12Flashcards } from "./exercises_unit12";

export const initialUsers: User[] = [
  {
    id: "student-gacon",
    email: "gacon@gmai.com",
    name: "Gà Con Chăm Chỉ",
    role: "student",
    status: "active",
    score: 80,
    points: 800,
    badges: ["Trứng Mới Nở", "Gà Con Chăm Chỉ", "Dũng Sĩ Từ Vựng"]
  },
  {
    id: "student-gathuong",
    email: "gathuong@gmai.com",
    name: "Gà Con Lười Biếng",
    role: "student",
    status: "locked",
    score: 0,
    points: 0,
    badges: []
  }
];

export const initialUnits: Unit[] = [
  {
    id: "unit-1",
    number: 1,
    name: "Your World",
    title: "Thế Giới Của Con",
    description: "Hiện tại Đơn, Hiện tại Tiếp diễn, Động từ trạng thái & Mạo từ (A, An, The).",
    intro: "Chào mừng con đến với thế giới rực rỡ sắc màu! Gà Mẹ sẽ hướng dẫn con cách diễn đạt thói quen, những hành động đang diễn ra và cách dùng mạo từ chính xác nhé!",
    theoryParts: [
      {
        subtitle: "1. Thì Hiện Tại Đơn (Present Simple) & Hiện Tại Tiếp Diễn (Present Continuous)",
        content: `• **Hiện Tại Đơn (Present Simple):** Diễn tả sự thật hiển nhiên, thói quen lặp lại hoặc lịch trình cố định.\n• **Hiện Tại Tiếp Diễn (Present Continuous):** Diễn tả hành động đang xảy ra tại thời điểm nói hoặc tình huống tạm thời.`,
        formula: `**HIỆN TẠI ĐƠN:**\n- (+) S + V(s/es) | S + am/is/are\n- (-) S + do/does + not + V | S + am/is/are + not\n\n**HIỆN TẠI TIẾP DIỄN:**\n- (+) S + am/is/are + V-ing\n- (-) S + am/is/are + not + V-ing`,
        examples: [
          { english: "I usually visit my cousins in the summer.", vietnamese: "Tớ thường đi thăm anh em họ vào mùa hè (Thói quen)." },
          { english: "Tina is feeding the cat at the moment.", vietnamese: "Tina đang cho mèo ăn vào lúc này (Đang diễn ra)." }
        ],
        chickenTip: "Động từ trạng thái (Stative Verbs) như: love, like, need, want, know, understand, believe, remember... KHÔNG được chia ở các thì tiếp diễn (-ing) nhé con!"
      },
      {
        subtitle: "2. Mạo Từ: A, An, The & Không mạo từ (Zero Article)",
        content: `• **A/An:** Dùng trước danh từ đếm được số ít, nhắc đến lần đầu tiên.\n• **The:** Dùng trước danh từ đã xác định (người nghe biết rõ), vật duy nhất, nhạc cụ.\n• **Không mạo từ (Zero Article):** Dùng trước danh từ số nhiều nói chung, môn thể thao, ngôn ngữ, quốc gia số ít (Vietnam, France).`,
        formula: `- **An** + nguyên âm (u, e, o, a, i - uể oải).\n- **A** + phụ âm.\n- **The** + danh từ đặc biệt/duy nhất.`,
        examples: [
          { english: "A child should grow up in a loving family.", vietnamese: "Một đứa trẻ nên lớn lên trong gia đình ngập tràn yêu thương." },
          { english: "London is the capital of England.", vietnamese: "Luân Đôn là thủ đô của nước Anh." }
        ],
        chickenTip: "Chúng ta không dùng 'the' trước England, France nhưng bắt buộc phải có 'the' trước 'the United States' hay 'the United Kingdom' nha!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KỲ DIỆU - UNIT 1</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Present Simple -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">🕒 Thì Hiện Tại Đơn (Present Simple)</span>
                <p class="text-[10px] text-slate-600 mt-1">Dùng cho thói quen, lịch trình, sự thật hiển nhiên.</p>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li>Công thức: S + V(s/es)</li>
                  <li>Trạng từ: usually, often, always, every day...</li>
                  <li>Đặc biệt: Không chia tiếp diễn với động từ trạng thái (know, like, want, belong...).</li>
                </ul>
              </div>

              <!-- Present Continuous -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">⏳ Thì Hiện Tại Tiếp Diễn (Present Continuous)</span>
                <p class="text-[10px] text-slate-600 mt-1">Hành động đang diễn ra lúc nói, hoặc kế hoạch tương lai gần.</p>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li>Công thức: S + am/is/are + V-ing</li>
                  <li>Trạng từ: now, at the moment, currently, next weekend...</li>
                </ul>
              </div>

              <!-- Articles -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">✨ Mạo Từ (Articles)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>A/An:</strong> Danh từ đếm được số ít, chưa xác định.</li>
                  <li><strong>The:</strong> Đã xác định, so sánh nhất, duy nhất, sông/biển (The Amazon, The Atlantic).</li>
                  <li><strong>Không dùng:</strong> Trước nước đơn lẻ (France), châu lục (Europe), danh từ số nhiều nói chung.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Personalities -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">👤 Tính cách & Ngoại hình (Adjectives)</span>
                <div class="grid grid-cols-2 gap-2 mt-1">
                  <div>
                    <strong class="text-amber-800 text-[9px]">Tích cực:</strong>
                    <ul class="list-disc pl-3 mt-0.5 space-y-0.5 text-[9px] text-slate-500">
                      <li>Generous (Hào phóng)</li>
                      <li>Trustworthy (Đáng tin)</li>
                      <li>Calm (Bình tĩnh)</li>
                      <li>Fit / Pretty (Cân đối / Xinh đẹp)</li>
                      <li>Athletic / Peaceful (Khỏe khoắn / Yên bình)</li>
                    </ul>
                  </div>
                  <div>
                    <strong class="text-amber-800 text-[9px]">U sầu / Tiêu cực:</strong>
                    <ul class="list-disc pl-3 mt-0.5 space-y-0.5 text-[9px] text-slate-500">
                      <li>Aggressive (Hung hăng)</li>
                      <li>Depressed (Trầm cảm, u sầu)</li>
                      <li>Plump (Phúng phính, mũm mĩm)</li>
                      <li>Skinny (Gầy gò, khẳng khiu)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Relationship & People -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">👥 Mối quan hệ (Nouns)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Peers:</strong> Bạn bè đồng trang lứa.</li>
                  <li><strong>Classmate / Flatmate / Colleague:</strong> Bạn cùng lớp / cùng phòng / đồng nghiệp.</li>
                  <li><strong>Idol / Enemy:</strong> Thần tượng / Kẻ thù.</li>
                  <li><strong>Stranger / Foreigner:</strong> Người lạ / Người nước ngoài.</li>
                </ul>
              </div>

              <!-- Verbs & Confusing Words -->
              <div class="p-3 bg-teal-50/50 rounded-2xl border border-teal-100">
                <span class="font-bold text-[11px] text-teal-700 block">🔄 Từ dễ nhầm lẫn & Cảm xúc</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Remind:</strong> Nhắc nhở | <strong>Remember:</strong> Nhớ | <strong>Belief:</strong> Niềm tin.</li>
                  <li><strong>Embarrassing:</strong> Xấu hổ | <strong>Amused:</strong> Thích thú.</li>
                  <li><strong>Stimulant:</strong> Chất kích thích | <strong>Depression:</strong> Chứng trầm cảm.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
     flashcards: [
      { id: "fc1-1", front: "Generous", back: "Rộng lượng, hào phóng (giving to others)", partOfSpeech: "adjective" },
      { id: "fc1-2", front: "Trustworthy", back: "Đáng tin cậy, trung thực (reliable, honest)", partOfSpeech: "adjective" },
      { id: "fc1-3", front: "Plump", back: "Mũm mĩm, phúng phính, tròn trịa (chubby)", partOfSpeech: "adjective" },
      { id: "fc1-4", front: "Handsome", back: "Đẹp trai, bảnh bao (attractive - for men)", partOfSpeech: "adjective" },
      { id: "fc1-5", front: "Calm", back: "Điềm tĩnh, bình tĩnh (not easily upset or excited)", partOfSpeech: "adjective" },
      { id: "fc1-6", front: "Depressed", back: "U sầu, trầm cảm, rất buồn (extremely sad)", partOfSpeech: "adjective" },
      { id: "fc1-7", front: "Fit", back: "Cân đối, khỏe mạnh (healthy and in good shape)", partOfSpeech: "adjective" },
      { id: "fc1-8", front: "Aggressive", back: "Hung hăng, hiếu chiến (ready to attack or argue)", partOfSpeech: "adjective" },
      { id: "fc1-9", front: "Peers", back: "Bạn bè cùng trang lứa, đồng lứa", partOfSpeech: "noun" },
      { id: "fc1-10", front: "Classmate", back: "Bạn cùng lớp", partOfSpeech: "noun" },
      { id: "fc1-11", front: "Flatmate", back: "Bạn cùng căn hộ / cùng phòng", partOfSpeech: "noun" },
      { id: "fc1-12", front: "Colleague", back: "Đồng nghiệp, cộng sự ở cơ quan", partOfSpeech: "noun" },
      { id: "fc1-13", front: "Enemy", back: "Kẻ thù, đối thủ", partOfSpeech: "noun" },
      { id: "fc1-14", front: "Idol", back: "Thần tượng, người được ngưỡng mộ", partOfSpeech: "noun" },
      { id: "fc1-15", front: "Stranger", back: "Người lạ, người chưa từng quen biết", partOfSpeech: "noun" },
      { id: "fc1-16", front: "Foreigner", back: "Người nước ngoài", partOfSpeech: "noun" },
      { id: "fc1-17", front: "Skinny", back: "Gầy gò, khẳng khiu (very thin)", partOfSpeech: "adjective" },
      { id: "fc1-18", front: "Pretty", back: "Xinh đẹp, dễ thương (attractive - usually for girls)", partOfSpeech: "adjective" },
      { id: "fc1-19", front: "Embarrassing", back: "Xấu hổ, ngượng ngùng, gây bối rối", partOfSpeech: "adjective" },
      { id: "fc1-20", front: "Amused", back: "Thích thú, vui vẻ (finding something funny)", partOfSpeech: "adjective" },
      { id: "fc1-21", front: "Stimulant", back: "Chất kích thích (giúp tỉnh táo, năng động hơn)", partOfSpeech: "noun" },
      { id: "fc1-22", front: "Athletic", back: "Khỏe khoắn, có tinh thần thể thao", partOfSpeech: "adjective" },
      { id: "fc1-23", front: "Peaceful", back: "Hòa bình, yên bình, yên tĩnh", partOfSpeech: "adjective" },
      { id: "fc1-24", front: "Belief", back: "Niềm tin, sự tin tưởng, tín ngưỡng", partOfSpeech: "noun" },
      { id: "fc1-25", front: "Depression", back: "Sự u sầu, chứng trầm cảm", partOfSpeech: "noun" }
    ],
    exercises: [
      // Present Simple vs Continuous
      {
        id: "ex1-g1",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: I usually ______ my cousins in the summer.",
        options: ["visit", "am visiting"],
        correctAnswer: "visit",
        explanation: "Từ 'usually' chỉ thói quen lặp đi lặp lại ở hiện tại, do đó ta dùng thì Hiện Tại Đơn."
      },
      {
        id: "ex1-g2",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: No, don't tell me! I ______ the answer.",
        options: ["know", "am knowing"],
        correctAnswer: "know",
        explanation: "'Know' là động từ trạng thái (stative verb), biểu thị nhận thức, nên không được dùng ở thì Tiếp Diễn."
      },
      {
        id: "ex1-g3",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Tina ______ the cat at the moment.",
        options: ["feeds", "is feeding"],
        correctAnswer: "is feeding",
        explanation: "Có cụm từ 'at the moment' (ngay lúc này) chỉ hành động đang diễn ra nên ta dùng thì Hiện Tại Tiếp Diễn."
      },
      {
        id: "ex1-g4",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Teenagers ______ being told what to do.",
        options: ["don't like", "aren't liking"],
        correctAnswer: "don't like",
        explanation: "'Like' là động từ trạng thái chỉ sở thích, cảm xúc, không chia ở thì Tiếp Diễn."
      },
      {
        id: "ex1-g5",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: About once a month, my brother ______ to the cinema.",
        options: ["goes", "is going"],
        correctAnswer: "goes",
        explanation: "Tần suất 'About once a month' chỉ một thói quen/lịch trình cố định, nên ta dùng thì Hiện Tại Đơn."
      },
      {
        id: "ex1-g6",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: ______ this article?",
        options: ["Do you understand", "Are you understanding"],
        correctAnswer: "Do you understand",
        explanation: "Động từ 'understand' (hiểu) là động từ trạng thái chỉ nhận thức, không dùng ở tiếp diễn."
      },
      {
        id: "ex1-g7",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Jim ______ to watch a comedy.",
        options: ["doesn't want", "isn't wanting"],
        correctAnswer: "doesn't want",
        explanation: "'Want' là động từ trạng thái chỉ ý muốn, mong ước nên luôn dùng thì Hiện Tại Đơn."
      },
      {
        id: "ex1-g8",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: ______ tennis next weekend?",
        options: ["Are they playing", "Do they play"],
        correctAnswer: "Are they playing",
        explanation: "Hỏi về kế hoạch đã được sắp xếp trước trong tương lai gần ('next weekend') nên dùng Hiện Tại Tiếp Diễn."
      },

      // Verb conjugation
      {
        id: "ex1-b1",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Miranda is shy. She ______ to go to the party tonight.",
        options: ["doesn't want", "isn't wanting"],
        correctAnswer: "doesn't want",
        explanation: "'Want' là động từ trạng thái, không dùng ở thì tiếp diễn."
      },
      {
        id: "ex1-b2",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: The big house on the corner ______ to the Smiths.",
        options: ["belongs", "is belonging"],
        correctAnswer: "belongs",
        explanation: "'Belong' (thuộc về) là động từ trạng thái chỉ sự sở hữu, luôn dùng thì Hiện Tại Đơn."
      },
      {
        id: "ex1-b3",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Mike ______ at home today because he's ill.",
        options: ["is staying", "stays"],
        correctAnswer: "is staying",
        explanation: "Dùng Hiện Tại Tiếp Diễn với 'today' chỉ tình huống tạm thời khác với thói quen hằng ngày."
      },
      {
        id: "ex1-b4",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: I'm excited because I ______ my best friend at the weekend.",
        options: ["am seeing", "see"],
        correctAnswer: "am seeing",
        explanation: "'See' ở đây mang nghĩa gặp gỡ (meet) theo lịch trình/kế hoạch cụ thể nên dùng thì tiếp diễn."
      },
      {
        id: "ex1-b5",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: This coffee ______ strange. Is yours OK?",
        options: ["tastes", "is tasting"],
        correctAnswer: "tastes",
        explanation: "'Taste' ở đây chỉ đặc điểm/trạng thái (có vị lạ) nên ta chia thì Hiện Tại Đơn."
      },
      {
        id: "ex1-b6",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Grandma ______ to enjoy living alone. I think she's lonely.",
        options: ["doesn't seem", "isn't seeming"],
        correctAnswer: "doesn't seem",
        explanation: "'Seem' (có vẻ) là động từ trạng thái, không chia tiếp diễn."
      },
      {
        id: "ex1-b7",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Lucy ______ to Italy at one o'clock tomorrow.",
        options: ["is flying", "flies"],
        correctAnswer: "is flying",
        explanation: "Dùng để diễn tả một kế hoạch/sắp xếp đã chuẩn bị xong xuôi trong tương lai gần có thời gian cụ thể."
      },
      {
        id: "ex1-b8",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: My brother Billy ______ around the house again. It's so annoying!",
        options: ["is running", "runs"],
        correctAnswer: "is running",
        explanation: "Sử dụng 'is/are/am always/again + V-ing' để diễn đạt sự phàn nàn về một hành động gây bực bội."
      },

      // Grammar C
      {
        id: "ex1-c1",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: This quiz on personality you're doing ______ interesting.",
        options: ["sounds", "is sounding"],
        correctAnswer: "sounds",
        explanation: "'Sound' (nghe có vẻ) là động từ trạng thái (stative verb), nên ta dùng Hiện Tại Đơn."
      },
      {
        id: "ex1-c2",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: He ______ a short nap in the afternoons to reduce stress.",
        options: ["takes", "is taking"],
        correctAnswer: "takes",
        explanation: "Có trạng từ 'in the afternoons' chỉ thói quen lặp đi lặp lại vào mỗi buổi chiều."
      },
      {
        id: "ex1-c3",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: He ______ the 12 o'clock bus to the city.",
        options: ["often doesn't catch", "is often not catching"],
        correctAnswer: "often doesn't catch",
        explanation: "Mô tả một thực tế lặp lại, trạng từ chỉ tần suất 'often' đứng trước động từ thường dạng phủ định 'doesn't catch'."
      },
      {
        id: "ex1-c4",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: The students ______ tired at the moment.",
        options: ["seem", "are seeming"],
        correctAnswer: "seem",
        explanation: "'Seem' là động từ chỉ trạng thái, không chia thì tiếp diễn."
      },
      {
        id: "ex1-c5",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: My dad ______ my mum's birthday! It really annoys her.",
        options: ["is always forgetting", "always forgets"],
        correctAnswer: "is always forgetting",
        explanation: "Dùng 'always' với thì tiếp diễn để phàn nàn về thói xấu thường xuyên xảy ra làm người khác khó chịu."
      },
      {
        id: "ex1-c6",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: ______ our emotions?",
        options: ["Do colours influence", "Are colours influencing"],
        correctAnswer: "Do colours influence",
        explanation: "Hỏi về một sự thật chung, quy luật khoa học nên dùng thì Hiện Tại Đơn."
      },
      {
        id: "ex1-c7",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: The number of people studying psychology ______ these days.",
        options: ["is increasing", "increases"],
        correctAnswer: "is increasing",
        explanation: "Dùng Hiện Tại Tiếp Diễn để biểu thị xu hướng, quá trình thay đổi hoặc phát triển ('these days')."
      },
      {
        id: "ex1-c8",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: This year I ______ on my university studies.",
        options: ["am focusing", "focus"],
        correctAnswer: "am focusing",
        explanation: "Diễn tả một hoạt động/tình huống đang kéo dài tạm thời trong năm nay."
      },
      {
        id: "ex1-c9",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: We ______ a meeting with the school director next week.",
        options: ["are not having", "do not have"],
        correctAnswer: "are not having",
        explanation: "Kế hoạch đã được định sẵn hoặc thỏa thuận từ trước trong tương lai ('next week')."
      },
      {
        id: "ex1-c10",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: I think James ______ quite calmly, even though he is under pressure at the moment.",
        options: ["is behaving", "behaves"],
        correctAnswer: "is behaving",
        explanation: "James đang có thái độ cư xử bình tĩnh mang tính chất tạm thời ở hiện tại ('at the moment') nên dùng tiếp diễn."
      },

      // Grammar D
      {
        id: "ex1-d1",
        type: "multiple-choice",
        question: "Chọn từ đúng: According to many psychologists, your favourite colour ______ something about your personality.",
        options: ["shows", "is showing"],
        correctAnswer: "shows",
        explanation: "'Show' diễn tả một sự thật hiển nhiên hoặc lý thuyết chung nên dùng Hiện Tại Đơn."
      },
      {
        id: "ex1-d2",
        type: "multiple-choice",
        question: "Chọn từ đúng: ______ with the conclusions they came to?",
        options: ["Do you agree", "Are you agreeing"],
        correctAnswer: "Do you agree",
        explanation: "'Agree' là động từ trạng thái chỉ ý kiến/quan điểm, không chia tiếp diễn."
      },
      {
        id: "ex1-d3",
        type: "multiple-choice",
        question: "Chọn từ đúng: Black: People who ______ black want everything to be perfect all the time.",
        options: ["like", "are liking"],
        correctAnswer: "like",
        explanation: "'Like' diễn tả cảm xúc/sở thích lâu dài, không chia tiếp diễn."
      },
      {
        id: "ex1-d4",
        type: "multiple-choice",
        question: "Chọn từ đúng: ______ difficulties with something? Then these are the people to help you.",
        options: ["Are you having", "Have you"],
        correctAnswer: "Are you having",
        explanation: "Cấu trúc 'have difficulties' (gặp khó khăn tạm thời) chia ở thì tiếp diễn."
      },
      {
        id: "ex1-d5",
        type: "multiple-choice",
        question: "Chọn từ đúng: Blue: People who like blue are emotional. These people ______ trust other people very much.",
        options: ["do not usually", "do usually not"],
        correctAnswer: "do not usually",
        explanation: "Trạng từ tần suất 'usually' đứng sau trợ động từ phủ định 'do not'."
      },
      {
        id: "ex1-d6",
        type: "multiple-choice",
        question: "Chọn từ đúng: They are calm and ______ their feelings.",
        options: ["don't express", "aren't expressing"],
        correctAnswer: "don't express",
        explanation: "Mô tả nét tính cách lâu dài của người thích màu xanh lam, dùng Hiện Tại Đơn."
      },
      {
        id: "ex1-d7",
        type: "multiple-choice",
        question: "Chọn từ đúng: Yellow: ______ a good friend to share your secrets?",
        options: ["Do you need", "Are you needing"],
        correctAnswer: "Do you need",
        explanation: "'Need' là động từ trạng thái, không chia tiếp diễn."
      },
      {
        id: "ex1-d8",
        type: "multiple-choice",
        question: "Chọn từ đúng: Green: They ______ peace during arguments.",
        options: ["often bring", "bring often"],
        correctAnswer: "often bring",
        explanation: "Trạng từ chỉ tần suất 'often' đứng trước động từ thường 'bring'."
      },
      {
        id: "ex1-d9",
        type: "multiple-choice",
        question: "Chọn từ đúng: Red: ______ to have fun? These are the people to go out with.",
        options: ["Do you want", "Are you wanting"],
        correctAnswer: "Do you want",
        explanation: "'Want' là động từ trạng thái không chia ở thì Tiếp Diễn."
      },
      {
        id: "ex1-d10",
        type: "multiple-choice",
        question: "Chọn từ đúng: They ______ very sociable and energetic people.",
        options: ["are", "are being"],
        correctAnswer: "are",
        explanation: "Diễn tả tính cách cố định lâu dài, dùng động từ 'be' chia ở hiện tại đơn."
      },

      // Articles A
      {
        id: "ex1-art1",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: 'The people love visiting foreign countries.'",
        options: [
          "People love visiting foreign countries.",
          "The peoples love visiting foreign countries."
        ],
        correctAnswer: "People love visiting foreign countries.",
        explanation: "Không dùng mạo từ 'The' trước danh từ số nhiều chỉ chung chung ('people')."
      },
      {
        id: "ex1-art2",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: 'A most popular destination was the France...'",
        options: [
          "The most popular destination was France.",
          "A most popular destination was France."
        ],
        correctAnswer: "The most popular destination was France.",
        explanation: "Sử dụng 'The' trước so sánh nhất 'most popular' và KHÔNG dùng 'the' trước tên quốc gia số ít như 'France'."
      },
      {
        id: "ex1-art3",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: 'Second was United States.'",
        options: [
          "Second was the United States.",
          "Second was United States."
        ],
        correctAnswer: "Second was the United States.",
        explanation: "Phải sử dụng mạo từ 'the' trước các quốc gia có cấu trúc ghép như 'the United States'."
      },
      {
        id: "ex1-art4",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: 'Five of the top destinations were in the Europe.'",
        options: [
          "Five of the top destinations were in Europe.",
          "Five of the top destinations were in the Europe."
        ],
        correctAnswer: "Five of the top destinations were in Europe.",
        explanation: "Không dùng mạo từ 'the' trước tên các châu lục (như Europe, Asia)."
      },
      {
        id: "ex1-art5",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: '...making it the most visited continent in world.'",
        options: [
          "...making it the most visited continent in the world.",
          "...making it the most visited continent in world."
        ],
        correctAnswer: "...making it the most visited continent in the world.",
        explanation: "Cụm danh từ chỉ vật thể duy nhất 'the world' bắt buộc phải có mạo từ 'the'."
      },
      {
        id: "ex1-art6",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: 'A United Nations World Tourism Organisation releases figures...'",
        options: [
          "The United Nations World Tourism Organisation releases figures...",
          "United Nations World Tourism Organisation releases figures..."
        ],
        correctAnswer: "The United Nations World Tourism Organisation releases figures...",
        explanation: "Dùng mạo từ 'The' trước tên các tổ chức quốc tế nổi tiếng."
      },
      {
        id: "ex1-art7",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: '...three times the year.'",
        options: [
          "...three times a year.",
          "...three times the year."
        ],
        correctAnswer: "...three times a year.",
        explanation: "Sử dụng cấu trúc 'times a + danh từ thời gian' (a year, a month, a week) để chỉ số lần trong một chu kỳ."
      },
      {
        id: "ex1-art8",
        type: "multiple-choice",
        question: "Chọn câu viết đúng: 'The figures are important source of information.'",
        options: [
          "The figures are an important source of information.",
          "The figures are important source of information."
        ],
        correctAnswer: "The figures are an important source of information.",
        explanation: "Danh từ số ít đếm được 'source' cần đi kèm mạo từ 'an' đứng trước tính từ bắt đầu bằng nguyên âm 'important'."
      },

      // Articles B
      {
        id: "ex1-artb1",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: I don't like ______ shade of blue you've chosen to paint ______ bedroom.",
        options: ["the / the", "a / a", "the / a", "a / the"],
        correctAnswer: "the / the",
        explanation: "'shade of blue' đã được xác định nhờ mệnh đề làm rõ ở phía sau, và 'bedroom' là căn phòng ngủ cụ thể được người nói nhắc tới, nên cả hai đều dùng 'the'."
      },
      {
        id: "ex1-artb2",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: My cousin works as ______ doctor and ______ patients really like her.",
        options: ["a / the", "the / a", "a / a", "the / the"],
        correctAnswer: "a / the",
        explanation: "Dùng 'a' trước nghề nghiệp 'doctor', và dùng 'the' trước 'patients' của vị bác sĩ cụ thể này."
      },
      {
        id: "ex1-artb3",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: That was ______ amazing dish! May I have ______ recipe, please?",
        options: ["an / the", "a / the", "an / a"],
        correctAnswer: "an / the",
        explanation: "Amazing bắt đầu bằng nguyên âm nên dùng 'an', còn 'recipe' là công thức của món ăn vừa ăn nên đã xác định, dùng 'the'."
      },
      {
        id: "ex1-artb4",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: ______ Amazon River flows into ______ Atlantic Ocean.",
        options: ["The / the", "A / standard", "The / a"],
        correctAnswer: "The / the",
        explanation: "Bắt buộc dùng 'the' trước tên sông ngòi (The Amazon River) và tên đại dương (The Atlantic Ocean)."
      },
      {
        id: "ex1-artb5",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: We had ______ relaxing day at ______ beach yesterday.",
        options: ["a / the", "standard / the", "the / the"],
        correctAnswer: "a / the",
        explanation: "Có 'a relaxing day' (một ngày thư giãn), và 'at the beach' là địa điểm cụ thể quen thuộc."
      },
      {
        id: "ex1-artb6",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: Let's go to ______ cinema in South Street; I'd like to watch ______ comedy.",
        options: ["the / a", "a / the", "standard / a"],
        correctAnswer: "the / a",
        explanation: "Dùng 'the cinema' vì là rạp chiếu phim ở South Street cụ thể, xem một bộ phim hài chung chung dùng 'a comedy'."
      },
      {
        id: "ex1-artb7",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: ______ most experienced musician in that group is also ______ youngest member.",
        options: ["The / the", "A / a", "The / a"],
        correctAnswer: "The / the",
        explanation: "Cả hai đều đi kèm tính từ so sánh nhất 'most experienced' và 'youngest' nên bắt buộc phải dùng 'the'."
      },
      {
        id: "ex1-artb8",
        type: "multiple-choice",
        question: "Điền mạo từ thích hợp: Tom is ______ very good friend of mine. In fact, he's ______ best friend I've ever had!",
        options: ["a / the", "the / the", "a / a"],
        correctAnswer: "a / the",
        explanation: "'a very good friend' (một người bạn tốt), 'the best friend' (người bạn tốt nhất - so sánh nhất)."
      },

      // Vocabulary A - complete words
      {
        id: "ex1-va1",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: Anna is a g_ _ _ _ _ _ _ (rộng lượng, hào phóng) person who would give you her last euro.",
        correctAnswer: "generous",
        explanation: "Từ 'generous' có nghĩa là rộng lượng, hào phóng, luôn sẵn lòng cho đi."
      },
      {
        id: "ex1-va2",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: If Jim says he'll help you, he will; he's very t_ _ _ _ _ _ _ _ _ _ (đáng tin cậy, giữ lời).",
        correctAnswer: "trustworthy",
        explanation: "Từ 'trustworthy' có nghĩa là đáng tin cậy, trung thực, giữ đúng lời hứa."
      },
      {
        id: "ex1-va3",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: Eva is thin now, but she was a very p_ _ _ _ (phúng phính, mũm mĩm) baby!",
        correctAnswer: "plump",
        explanation: "Từ 'plump' có nghĩa là phúng phính, tròn trịa, mũm mĩm dễ thương."
      },
      {
        id: "ex1-va4",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: That actor isn't talented, but he's popular because he's h_ _ _ _ _ _ _ _ (đẹp trai, bảnh bao).",
        correctAnswer: "handsome",
        explanation: "Từ 'handsome' có nghĩa là bảnh bao, đẹp trai (thường mô tả nam giới)."
      },
      {
        id: "ex1-va5",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: Don't panic in a crisis. It's best to stay c_ _ _ (bình tĩnh, điềm tĩnh).",
        correctAnswer: "calm",
        explanation: "Từ 'calm' có nghĩa là điềm tĩnh, bình tĩnh, không hoảng sợ."
      },
      {
        id: "ex1-va6",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: She felt very d_ _ _ _ _ _ _ _ (buồn bã, trầm cảm) when she lost her job.",
        correctAnswer: "depressed",
        explanation: "Từ 'depressed' mang nghĩa buồn bã, u sầu, tuyệt vọng."
      },
      {
        id: "ex1-va7",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: Matthew is quite f_ _ (khỏe khoắn, cân đối) because he jogs every morning.",
        correctAnswer: "fit",
        explanation: "Từ 'fit' có nghĩa là cân đối, khỏe mạnh nhờ luyện tập thể thao."
      },
      {
        id: "ex1-va8",
        type: "fill-in-the-blank",
        question: "Điền từ tiếng Anh tương thích: He became angry and a_ _ _ _ _ _ _ _ _ (hung hăng, hiếu chiến) when the policeman questioned him.",
        correctAnswer: "aggressive",
        explanation: "Từ 'aggressive' mang nghĩa hung hăng, hiếu chiến, sẵn sàng tranh cãi."
      },

      // Vocabulary C - Napoleon Dynamite
      {
        id: "ex1-vc1",
        type: "multiple-choice",
        question: "Chọn từ đúng: Napoleon tries to fit in with his ______.",
        options: ["peers", "idols"],
        correctAnswer: "peers",
        explanation: "Napoleon cố gắng hòa nhập với bạn bè đồng lứa ('peers')."
      },
      {
        id: "ex1-vc2",
        type: "multiple-choice",
        question: "Chọn từ đúng: But he isn't confident and isn't popular with his ______ at high school.",
        options: ["classmates", "flatmates"],
        correctAnswer: "classmates",
        explanation: "Anh ấy không được lòng bạn cùng lớp ở trường cấp ba ('classmates')."
      },
      {
        id: "ex1-vc3",
        type: "multiple-choice",
        question: "Chọn từ đúng: He lives with his grandmother and his ______ computer-crazy brother.",
        options: ["skinny", "pretty"],
        correctAnswer: "skinny",
        explanation: "Anh ấy sống cùng với người em trai gầy gò ('skinny') và cuồng máy tính."
      },
      {
        id: "ex1-vc4",
        type: "multiple-choice",
        question: "Chọn từ đúng: Uncle Rico is totally ______ and Napoleon doesn't want to be associated with him.",
        options: ["embarrassing", "amused"],
        correctAnswer: "embarrassing",
        explanation: "Người chú Rico của cậu vô cùng lập dị và đáng xấu hổ, gây bối rối ('embarrassing')."
      },
      {
        id: "ex1-vc5",
        type: "multiple-choice",
        question: "Chọn từ đúng: Pedro is Napoleon's ______ (from Mexico) and they are both outsiders.",
        options: ["classmate", "colleague"],
        correctAnswer: "classmate",
        explanation: "Pedro là một người bạn cùng lớp ('classmate') ở trường học."
      },
      {
        id: "ex1-vc6",
        type: "multiple-choice",
        question: "Chọn từ đúng: When Pedro runs for class president, Napoleon uses his unique ______ to help him win.",
        options: ["skill", "signal"],
        correctAnswer: "skill",
        explanation: "Napoleon dùng kỹ năng nhảy đặc biệt, độc đáo ('unique skill') để giúp bạn đắc cử."
      },

      // Vocabulary B
      {
        id: "ex1-vb1",
        type: "multiple-choice",
        question: "Chọn từ đúng: My ______ and I have been living together for six months. We get along really well.",
        options: ["flatmate", "classmate", "colleague", "foreigner"],
        correctAnswer: "flatmate",
        explanation: "Sống cùng nhau trong một căn hộ thì gọi là bạn cùng phòng / cùng nhà ('flatmate')."
      },
      {
        id: "ex1-vb2",
        type: "multiple-choice",
        question: "Chọn từ đúng: Unfortunately, teenagers often give in to pressure from their ______.",
        options: ["peers", "idols", "stranger", "flatmate"],
        correctAnswer: "peers",
        explanation: "'peer pressure' là áp lực từ phía bạn bè đồng trang lứa."
      },
      {
        id: "ex1-vb3",
        type: "multiple-choice",
        question: "Chọn từ đúng: A(n) ______ in the office can sometimes also be a good friend.",
        options: ["colleague", "classmate", "foreigner", "stranger"],
        correctAnswer: "colleague",
        explanation: "Người làm việc cùng một văn phòng, cơ quan được gọi là đồng nghiệp ('colleague')."
      },
      {
        id: "ex1-vb4",
        type: "multiple-choice",
        question: "Chọn từ đúng: I hate it when a thoughtless ______ misbehaves in class - I'm here to learn!",
        options: ["classmate", "colleague", "flatmate", "stranger"],
        correctAnswer: "classmate",
        explanation: "Người cùng học chung trong một lớp học là bạn cùng lớp ('classmate')."
      },
      {
        id: "ex1-vb5",
        type: "multiple-choice",
        question: "Chọn từ đúng: Jane doesn't like you after you lied to her. I think she's become your worst ______.",
        options: ["enemy", "peer", "stranger", "flatmate"],
        correctAnswer: "enemy",
        explanation: "Người ghét bạn hoặc chống lại bạn được gọi là kẻ thù, đối thủ ('enemy')."
      },
      {
        id: "ex1-vb6",
        type: "multiple-choice",
        question: "Chọn từ đúng: My ______ is the guitarist Tom Morello. He's super-talented and very cool!",
        options: ["idol", "colleague", "stranger", "classmate"],
        correctAnswer: "idol",
        explanation: "Người mà bạn vô cùng ngưỡng mộ và tôn sùng được gọi là thần tượng ('idol')."
      },
      {
        id: "ex1-vb7",
        type: "multiple-choice",
        question: "Chọn từ đúng: We can't invite that man to the party. He's a complete ______.",
        options: ["stranger", "peer", "flatmate", "classmate"],
        correctAnswer: "stranger",
        explanation: "Người hoàn toàn xa lạ, chưa từng quen biết hay nói chuyện bao giờ là 'stranger'."
      },
      {
        id: "ex1-vb8",
        type: "multiple-choice",
        question: "Chọn từ đúng: Mr Boyd is a(n) ______ who has been living in our country for years.",
        options: ["foreigner", "classmate", "colleague", "stranger"],
        correctAnswer: "foreigner",
        explanation: "Người đến từ quốc gia khác sinh sống ở đất nước chúng ta gọi là người nước ngoài ('foreigner')."
      },

      // Vocabulary Choose
      {
        id: "ex1-vcm1",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Whenever I'm feeling blue, my friends always ______ me that things will get better.",
        options: ["remind", "recall", "remember"],
        correctAnswer: "remind",
        explanation: "Cấu trúc 'remind someone that...' có nghĩa là nhắc nhở ai đó rằng..."
      },
      {
        id: "ex1-vcm2",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: ______ is nice, but money can't buy health or happiness.",
        options: ["Wealth", "Luck", "Stability"],
        correctAnswer: "Wealth",
        explanation: "Từ 'Wealth' nghĩa là sự giàu có, của cải. Câu này có nghĩa: Giàu sang thì tốt, nhưng tiền bạc không thể mua được sức khỏe và hạnh phúc."
      },
      {
        id: "ex1-vcm3",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: The comedian was ______ and went bright red when nobody laughed at his jokes.",
        options: ["embarrassed", "entertained", "amused"],
        correctAnswer: "embarrassed",
        explanation: "Đỏ mặt khi không ai cười đùa với câu nói của mình thể hiện sự xấu hổ, ngượng ngùng ('embarrassed')."
      },
      {
        id: "ex1-vcm4",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: I often ask my parents to ______ me how to do things.",
        options: ["show", "signal", "highlight"],
        correctAnswer: "show",
        explanation: "'show someone how to do things' nghĩa là chỉ bảo, hướng dẫn ai đó cách làm việc."
      },
      {
        id: "ex1-vcm5",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: For me, learning something new is a ______ in itself.",
        options: ["reward", "punishment", "aggression"],
        correctAnswer: "reward",
        explanation: "Việc học tập được coi là một phần thưởng, niềm vui bổ ích ('reward')."
      },
      {
        id: "ex1-vcm6",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: The ______ I wear say a lot about my personality.",
        options: ["clothes", "uniforms", "objects"],
        correctAnswer: "clothes",
        explanation: "'clothes' mang nghĩa là trang phục nói chung, thể hiện phong cách cá tính."
      },
      {
        id: "ex1-vcm7",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Playing on a baseball ______ has taught me how to work with others to achieve a goal.",
        options: ["team", "group", "class"],
        correctAnswer: "team",
        explanation: "Chơi trong một đội tuyển thể thao sử dụng từ 'team' (đội bóng chày)."
      },
      {
        id: "ex1-vcm8",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Coffee is the most popular ______ for people working or studying. It helps them stay awake.",
        options: ["stimulant", "dominance", "stability"],
        correctAnswer: "stimulant",
        explanation: "'stimulant' là chất kích thích giúp não bộ tỉnh táo, tập trung hơn."
      }
    ]
  },
  {
    id: "unit-2",
    number: 2,
    name: "World Mysteries",
    title: "Những Bí Ẩn Trên Thế Giới",
    description: "Quá khứ Đơn, Quá khứ Tiếp diễn & Thói quen quá khứ (Used to / Would).",
    intro: "Cùng Gà Mẹ phiêu lưu khám phá những bí ẩn cổ xưa và học cách kể chuyện bằng thì Quá khứ thật lôi cuốn nhé!",
    theoryParts: [
      {
        subtitle: "1. Thì Quá Khứ Đơn (Past Simple) & Quá Khứ Tiếp Diễn (Past Continuous)",
        content: `• **Quá Khứ Đơn (Past Simple):** Diễn tả hành động đã chấm dứt hoàn toàn trong quá khứ.\n• **Quá Khứ Tiếp Diễn (Past Continuous):** Diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ, hoặc đang xảy ra thì có hành động khác xen vào.`,
        formula: `**QUÁ KHỨ ĐƠN:**\n- (+) S + V2/ed | S + was/were\n- (-) S + did + not + V\n\n**QUÁ KHỨ TIẾP DIỄN:**\n- (+) S + was/were + V-ing\n- (-) S + was/were + not + V-ing`,
        examples: [
          { english: "We watched a documentary on the Maya yesterday.", vietnamese: "Hôm qua chúng tớ đã xem một bộ phim tài liệu về người Maya." },
          { english: "We were exploring the cave when suddenly we heard a loud noise.", vietnamese: "Chúng tớ đang thám hiểm hang động thì bỗng nhiên nghe thấy tiếng động lớn." }
        ],
        chickenTip: "Hành động đang diễn ra liên tục dùng Quá khứ Tiếp diễn (was/were V-ing), hành động xen ngang bất ngờ dùng Quá khứ Đơn (V2/ed) con nhé!"
      },
      {
        subtitle: "2. Thói quen quá khứ & Thích nghi: Used to, Would & Get/Be used to",
        content: `• **Used to + V:** Thói quen hoặc trạng thái cũ trong quá khứ, giờ không còn nữa.\n• **Would + V:** Thói quen hành động cũ trong quá khứ (không dùng cho trạng thái như be, have, like).\n• **Be/Get used to + V-ing:** Đã quen hoặc đang dần thích nghi với việc gì ở hiện tại.`,
        formula: `- S + used to + V-inf\n- S + is/are/am + used to + V-ing\n- S + get/gets + used to + V-ing`,
        examples: [
          { english: "My dad used to be an archaeologist.", vietnamese: "Bố tớ từng là một nhà khảo cổ học." },
          { english: "I am getting used to living in the hot jungle.", vietnamese: "Tớ đang quen dần với việc sống trong rừng rậm nóng nực." }
        ],
        chickenTip: "'Used to + V' là thói quen cũ đã chấm dứt. Còn 'Be/Get used to + V-ing' là đã thích nghi với cuộc sống hiện tại. Đừng nhầm lẫn nhé!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KỲ DIỆU - UNIT 2</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Past Tenses -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">🕰️ Thì Quá Khứ (Past Simple vs Past Continuous)</span>
                <p class="text-[10px] text-slate-600 mt-1">Sự việc đã chấm dứt hoặc đang xảy ra tại thời điểm cụ thể trong quá khứ.</p>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Quá khứ đơn:</strong> S + V2/ed. Diễn tả hành động đã kết thúc hoàn toàn (yesterday, ago, in 1999).</li>
                  <li><strong>Quá khứ tiếp diễn:</strong> S + was/were + V-ing. Diễn tả hành động đang xảy ra tại thời điểm cụ thể hoặc hành động đang xảy ra thì hành động khác cắt ngang.</li>
                </ul>
              </div>

              <!-- Habits and Adaptations -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">🔄 Thói Quen & Thích Nghi (Habits vs Adaptations)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Used to + V:</strong> Đã từng làm gì (thói quen hay trạng thái cũ trong quá khứ nay không còn nữa).</li>
                  <li><strong>Be/Get used to + V-ing:</strong> Đã quen/Đang quen dần với việc gì ở hiện tại (thích nghi môi trường/cuộc sống).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Science & Archaeology -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">🔍 Khoa học & Tìm kiếm (Science & Exploration)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Archaeologist:</strong> Nhà khảo cổ học nghiên cứu di tích cổ.</li>
                  <li><strong>Investigate / Solve / Conclude:</strong> Điều tra / Phá án, tìm lời giải / Kết luận sau xem xét.</li>
                  <li><strong>Evidence / Clue / Theory:</strong> Bằng chứng / Manh mối gợi ý / Giả thuyết khoa học.</li>
                  <li><strong>Incident / Abandon:</strong> Sự cố bất ngờ / Bỏ hoang, từ bỏ.</li>
                </ul>
              </div>

              <!-- Mysteries & Oddities -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">👻 Bí ẩn & Kỳ lạ (Mysteries & Legends)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Disappearance / Hoax:</strong> Sự biến mất bí ẩn / Trò lừa bịp ác ý.</li>
                  <li><strong>Tomb / Cemetery:</strong> Hầm mộ cổ trang nghiêm / Nghĩa trang công cộng.</li>
                  <li><strong>Phenomenon / Legend / Aliens:</strong> Hiện tượng kỳ lạ / Truyền thuyết dân gian / Sinh vật ngoài hành tinh.</li>
                  <li><strong>Myth:</strong> Thần thoại, chuyện hoang đường không có thực.</li>
                </ul>
              </div>

              <!-- Phrasal Verbs -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">⚙️ Cụm Động Từ Bí Ẩn (Phrasal Verbs)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Make out:</strong> Nhìn ra, đọc ra, nghe ra (vật mờ nhạt).</li>
                  <li><strong>Look into / Stick to:</strong> Điều tra, xem xét / Bám sát vào (không đổi đề tài).</li>
                  <li><strong>Take in / Let out:</strong> Lừa dối, lừa gạt / Phát ra âm thanh (kêu lên).</li>
                  <li><strong>Believe in:</strong> Tin tưởng vào sự tồn tại của cái gì (ví dụ: ma quỷ, tâm linh).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: [
      { id: "fc2-1", front: "Archaeologist", back: "Nhà khảo cổ học (người nghiên cứu cổ vật, di tích lịch sử)", partOfSpeech: "noun" },
      { id: "fc2-2", front: "Disappearance", back: "Sự biến mất (việc ai đó/cái gì đột nhiên không còn thấy nữa)", partOfSpeech: "noun" },
      { id: "fc2-3", front: "Hoax", back: "Trò lừa bịp, tin đồn nhảm (một lời nói dối hoặc lừa gạt ác ý)", partOfSpeech: "noun" },
      { id: "fc2-4", front: "Tomb", back: "Hầm mộ, ngôi mộ (nơi an táng trang trọng)", partOfSpeech: "noun" },
      { id: "fc2-5", front: "Evidence", back: "Bằng chứng (thông tin, vật chứng chứng minh sự thật)", partOfSpeech: "noun" },
      { id: "fc2-6", front: "Clue", back: "Manh mối, gợi ý (thông tin giúp giải quyết vụ án hoặc bí ẩn)", partOfSpeech: "noun" },
      { id: "fc2-7", front: "Conclude", back: "Kết luận (đưa ra quyết định cuối cùng sau khi xem xét)", partOfSpeech: "verb" },
      { id: "fc2-8", front: "Investigate", back: "Điều tra, nghiên cứu kỹ lưỡng (tìm kiếm sự thật về vụ việc)", partOfSpeech: "verb" },
      { id: "fc2-9", front: "Phenomenon", back: "Hiện tượng (sự việc kỳ lạ xảy ra gây chú ý)", partOfSpeech: "noun" },
      { id: "fc2-10", front: "Solve", back: "Giải quyết, phá án (tìm ra câu trả lời cho bài toán/vụ án)", partOfSpeech: "verb" },
      { id: "fc2-11", front: "Incident", back: "Sự cố, vụ việc bất ngờ xảy ra (thường là chuyện xấu)", partOfSpeech: "noun" },
      { id: "fc2-12", front: "Cemetery", back: "Nghĩa trang, nghĩa địa (nơi chôn cất nhiều người)", partOfSpeech: "noun" },
      { id: "fc2-13", front: "Legend", back: "Truyền thuyết (câu chuyện dân gian cổ xưa đầy ly kỳ)", partOfSpeech: "noun" },
      { id: "fc2-14", front: "Theory", back: "Thuyết, giả thuyết (một hệ thống ý kiến để giải thích cái gì)", partOfSpeech: "noun" },
      { id: "fc2-15", front: "Aliens", back: "Người ngoài hành tinh (sinh vật ngoài Trái Đất)", partOfSpeech: "noun" },
      { id: "fc2-16", front: "Abandon", back: "Từ bỏ, ruồng bỏ, bỏ hoang (rời đi không bao giờ quay lại)", partOfSpeech: "verb" },
      { id: "fc2-17", front: "Myth", back: "Thần thoại, chuyện hoang đường (niềm tin không có thực)", partOfSpeech: "noun" },
      { id: "fc2-18", front: "Make out", back: "Nhìn ra, đọc ra, nghe ra (hiểu được cái gì đó mờ nhạt)", partOfSpeech: "phrasal verb" },
      { id: "fc2-19", front: "Look into", back: "Xem xét, nghiên cứu, điều tra (khảo sát kỹ các sự thật)", partOfSpeech: "phrasal verb" },
      { id: "fc2-20", front: "Stick to", back: "Bám sát vào, chỉ tập trung vào (không thay đổi đề tài)", partOfSpeech: "phrasal verb" },
      { id: "fc2-21", front: "Take in", back: "Lừa dối, lừa gạt ai đó (trick, deceive)", partOfSpeech: "phrasal verb" },
      { id: "fc2-22", front: "Let out", back: "Phát ra âm thanh (ví dụ như hét lên, kêu lên)", partOfSpeech: "phrasal verb" },
      { id: "fc2-23", front: "Believe in", back: "Tin tưởng vào sự tồn tại của cái gì (ví dụ: tin vào ma)", partOfSpeech: "phrasal verb" }
    ],
    exercises: [
      {
        id: "ex2-1",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: There have been many (1) ______ of people seeing the Sasquatch.",
        options: ["reports", "clues", "evidence", "hoaxes"],
        correctAnswer: "reports",
        explanation: "Từ vựng: 'reports' (báo cáo, tin đồn). Theo văn cảnh truyện Sasquatch: 'There have been many reports of people seeing the creature'."
      },
      {
        id: "ex2-2",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: Researchers have attempted to (2) ______ these sightings, but no one has yet managed to solve the mystery.",
        options: ["investigate", "conclude", "solve", "hoax"],
        correctAnswer: "investigate",
        explanation: "Từ vựng: 'investigate' (điều tra, nghiên cứu kỹ lưỡng)."
      },
      {
        id: "ex2-3",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: ...but no one has yet managed to (3) ______ the mystery.",
        options: ["solve", "conclude", "investigate", "reports"],
        correctAnswer: "solve",
        explanation: "Cụm động từ đi kèm: 'solve the mystery' (giải quyết, phá án, giải mã bí ẩn)."
      },
      {
        id: "ex2-4",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: Does the creature really exist at all, or is it just a(n) (4) ______?",
        options: ["hoax", "clue", "evidence", "phenomenon"],
        correctAnswer: "hoax",
        explanation: "Từ vựng: 'hoax' (trò lừa bịp, tin đồn nhảm)."
      },
      {
        id: "ex2-5",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: Investigators have very little (5) ______ to go on.",
        options: ["evidence", "clue", "reports", "conclude"],
        correctAnswer: "evidence",
        explanation: "Từ vựng: 'evidence' (bằng chứng, chứng cứ). Cụm từ 'evidence to go on' là bằng chứng để tiến hành điều tra."
      },
      {
        id: "ex2-6",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: There is one interesting (6) ______ in the form of a famous blurry photo of the creature.",
        options: ["clue", "phenomenon", "hoax", "evidence"],
        correctAnswer: "clue",
        explanation: "Từ vựng: 'clue' (manh mối, gợi ý) - bức ảnh mờ là một manh mối thú vị."
      },
      {
        id: "ex2-7",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: None of the evidence is very convincing, which has led most researchers to (7) ______ that the Sasquatch...",
        options: ["conclude", "solve", "investigate", "reports"],
        correctAnswer: "conclude",
        explanation: "Từ vựng: 'conclude' (kết luận)."
      },
      {
        id: "ex2-8",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: ...conclude that the Sasquatch (8) ______ is just someone's idea of a joke!",
        options: ["phenomenon", "evidence", "hoax", "clue"],
        correctAnswer: "phenomenon",
        explanation: "Từ vựng: 'phenomenon' (hiện tượng kỳ lạ)."
      },
      {
        id: "ex2-9",
        type: "multiple-choice",
        question: "Circle the correct word: How do you explain this very strange incident / resident?",
        options: ["incident", "resident"],
        correctAnswer: "incident",
        explanation: "incident: sự cố, vụ việc kỳ lạ xảy ra; resident: cư dân."
      },
      {
        id: "ex2-10",
        type: "multiple-choice",
        question: "Circle the correct word: The cemetery / tomb is actually a peaceful and beautiful place to walk.",
        options: ["cemetery", "tomb"],
        correctAnswer: "cemetery",
        explanation: "cemetery: nghĩa trang (nơi rộng rãi thanh bình); tomb: hầm mộ, ngôi mộ xây cất."
      },
      {
        id: "ex2-11",
        type: "multiple-choice",
        question: "Circle the correct word: The trick / legend of Robin Hood still interests filmmakers.",
        options: ["legend", "trick"],
        correctAnswer: "legend",
        explanation: "legend: truyền thuyết (truyền thuyết về Robin Hood)."
      },
      {
        id: "ex2-12",
        type: "multiple-choice",
        question: "Circle the correct word: The detective's illusion / theory was proved to be correct.",
        options: ["theory", "illusion"],
        correctAnswer: "theory",
        explanation: "theory: giả thuyết (của thám tử); illusion: ảo ảnh, ảo giác."
      },
      {
        id: "ex2-13",
        type: "multiple-choice",
        question: "Circle the correct word: A lot of people still believe there are aliens / detectives living on Mars.",
        options: ["aliens", "detectives"],
        correctAnswer: "aliens",
        explanation: "aliens: người ngoài hành tinh (sống ở sao Hỏa); detectives: thám tử."
      },
      {
        id: "ex2-14",
        type: "multiple-choice",
        question: "Circle the correct word: They had to abandon / weaken the ship because it was sinking.",
        options: ["abandon", "weaken"],
        correctAnswer: "abandon",
        explanation: "abandon: rời bỏ, bỏ hoang (rời khỏi tàu vì sắp chìm)."
      },
      {
        id: "ex2-15",
        type: "multiple-choice",
        question: "Circle the correct word: The witness / archaeologist uncovered an ancient statue in the ruins.",
        options: ["archaeologist", "witness"],
        correctAnswer: "archaeologist",
        explanation: "archaeologist: nhà khảo cổ học (khai quật di tích cổ)."
      },
      {
        id: "ex2-16",
        type: "multiple-choice",
        question: "Circle the correct word: Most people believe that the existence of the Loch Ness Monster is a report / myth.",
        options: ["myth", "report"],
        correctAnswer: "myth",
        explanation: "myth: thần thoại, chuyện hoang đường hoang dã."
      },
      {
        id: "ex2-17",
        type: "multiple-choice",
        question: "Complete the sentence: A(n) ______ will question all of the witnesses later today.",
        options: ["detective", "magician", "odd", "reason"],
        correctAnswer: "detective",
        explanation: "detective (thám tử) sẽ thẩm vấn các nhân chứng."
      },
      {
        id: "ex2-18",
        type: "multiple-choice",
        question: "Complete the sentence: There is no logical explanation for the ______ of the old man.",
        options: ["disappearance", "abandoned", "cave", "practical"],
        correctAnswer: "disappearance",
        explanation: "disappearance (sự biến mất): Không có lời giải thích hợp lý nào cho sự biến mất của ông cụ."
      },
      {
        id: "ex2-19",
        type: "multiple-choice",
        question: "Complete the sentence: A(n) ______ should never reveal how he does his tricks.",
        options: ["magician", "detective", "practical", "odd"],
        correctAnswer: "magician",
        explanation: "magician (ảo thuật gia) không bao giờ nên tiết lộ bí mật chiêu trò của mình."
      },
      {
        id: "ex2-20",
        type: "multiple-choice",
        question: "Complete the sentence: The ______ was dark, cold and very frightening.",
        options: ["cave", "abandoned", "reason", "disappearance"],
        correctAnswer: "cave",
        explanation: "cave (hang động) tối tăm, lạnh lẽo và đáng sợ."
      },
      {
        id: "ex2-21",
        type: "multiple-choice",
        question: "Complete the sentence: People are too scared to visit the ______ house; they say it's haunted.",
        options: ["abandoned", "cave", "odd", "practical"],
        correctAnswer: "abandoned",
        explanation: "abandoned house (ngôi nhà hoang, bị bỏ rơi)."
      },
      {
        id: "ex2-22",
        type: "multiple-choice",
        question: "Complete the sentence: The professor couldn't understand the ______ why his experiment didn't work.",
        options: ["reason", "disappearance", "magician", "practical"],
        correctAnswer: "reason",
        explanation: "reason (lý do) - Cấu trúc 'the reason why'."
      },
      {
        id: "ex2-23",
        type: "multiple-choice",
        question: "Complete the sentence: The children decided to play a(n) ______ joke on their friend.",
        options: ["practical", "odd", "abandoned", "detective"],
        correctAnswer: "practical",
        explanation: "Cụm từ cố định: 'play a practical joke on someone' (chơi khăm ai đó)."
      },
      {
        id: "ex2-24",
        type: "multiple-choice",
        question: "Complete the sentence: The man's story was so ______ that the policeman was puzzled.",
        options: ["odd", "practical", "abandoned", "reason"],
        correctAnswer: "odd",
        explanation: "odd (kỳ quặc, lạ lùng) khiến người cảnh sát bối rối."
      },
      {
        id: "ex2-25",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Harry ______ (scream) when the ghost appeared.",
        options: ["screamed", "was screaming", "screams", "is screaming"],
        correctAnswer: "screamed",
        explanation: "Thì Quá khứ Đơn (screamed) diễn tả hành động bất ngờ xảy ra trọn vẹn tại thời điểm quá khứ."
      },
      {
        id: "ex2-26",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Then, I ______ (lock) the door and left.",
        options: ["locked", "was locking", "locks", "is locking"],
        correctAnswer: "locked",
        explanation: "Thì Quá khứ Đơn (locked) chỉ các hành động xảy ra tuần tự nối tiếp nhau trong quá khứ."
      },
      {
        id: "ex2-27",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: The window suddenly ______ (break) while I was watching a horror film!",
        options: ["broke", "was breaking", "breaks", "is breaking"],
        correctAnswer: "broke",
        explanation: "Sử dụng Quá khứ Đơn (broke) cho hành động xen ngang khi một hành động khác đang diễn ra liên tục (was watching)."
      },
      {
        id: "ex2-28",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Ian ______ (read) a detective novel when the storm started.",
        options: ["was reading", "read", "is reading", "reads"],
        correctAnswer: "was reading",
        explanation: "Sử dụng Quá khứ Tiếp diễn (was reading) cho hành động đang xảy ra liên tục thì hành động khác cắt ngang (started)."
      },
      {
        id: "ex2-29",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Meanwhile, Jessica ______ (explore) the haunted house.",
        options: ["was exploring", "explored", "is exploring", "explores"],
        correctAnswer: "was exploring",
        explanation: "Meanwhile (trong khi đó) dùng để diễn tả hành động đang xảy ra liên tục tại thời điểm quá khứ (was exploring)."
      },
      {
        id: "ex2-30",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Suddenly, we ______ (hear) a loud crash and the ceiling collapsed!",
        options: ["heard", "were hearing", "hear", "hears"],
        correctAnswer: "heard",
        explanation: "Hành động bất chợt (đột nhiên nghe thấy - heard) chia Quá khứ Đơn."
      },
      {
        id: "ex2-31",
        type: "multiple-choice",
        question: "Circle the correct word: I would / used to believe in ghosts, but I don't anymore.",
        options: ["used to", "would"],
        correctAnswer: "used to",
        explanation: "'used to' dùng được cho cả trạng thái lẫn thói quen cũ; còn 'would' chỉ dùng cho thói quen hành động, KHÔNG dùng với động từ trạng thái (believe)."
      },
      {
        id: "ex2-32",
        type: "multiple-choice",
        question: "Circle the correct word: He isn't used to / didn't use to be so adventurous, you know.",
        options: ["didn't use to", "isn't used to"],
        correctAnswer: "didn't use to",
        explanation: "'didn't use to + V-inf' chỉ trạng thái không có trong quá khứ (trước đây không phiêu lưu mạo hiểm)."
      },
      {
        id: "ex2-33",
        type: "multiple-choice",
        question: "Circle the correct word: Grandpa got used to / would tell us all about the mysterious Druids.",
        options: ["would", "got used to"],
        correctAnswer: "would",
        explanation: "'would + V-inf' chỉ hành động thói quen lặp đi lặp lại nhiều lần ở quá khứ."
      },
      {
        id: "ex2-34",
        type: "multiple-choice",
        question: "Circle the correct word: The detective is used to / gets used to people telling him lies!",
        options: ["is used to", "gets used to"],
        correctAnswer: "is used to",
        explanation: "is used to: đã quen thuộc với điều gì ở hiện tại (theo sau bởi danh từ/cụm danh từ)."
      },
      {
        id: "ex2-35",
        type: "multiple-choice",
        question: "Circle the correct word: The children didn't use to / aren't used to staying up so late.",
        options: ["aren't used to", "didn't use to"],
        correctAnswer: "aren't used to",
        explanation: "Theo sau là V-ing (staying) nên dùng 'aren't used to' (không quen với việc gì ở hiện tại)."
      },
      {
        id: "ex2-36",
        type: "multiple-choice",
        question: "Circle the correct word: Didn't you use to / Weren't you used to read a lot of mystery novels?",
        options: ["Didn't you use to", "Weren't you used to"],
        correctAnswer: "Didn't you use to",
        explanation: "Theo sau là động từ nguyên mẫu (read), cấu trúc câu hỏi thói quen quá khứ: 'Didn't you use to + V-inf?'"
      },
      {
        id: "ex2-37",
        type: "multiple-choice",
        question: "Chọn từ điền vào câu chuyện Bạch tuộc Paul (1): The world's most famous octopus, Paul, who ______ to live in a tank at the Sea Life Centre...",
        options: ["used", "would", "got used", "was used"],
        correctAnswer: "used",
        explanation: "Dùng 'used' để tạo cấu trúc 'used to live' (đã từng sống)."
      },
      {
        id: "ex2-38",
        type: "multiple-choice",
        question: "Chọn từ điền vào câu chuyện Bạch tuộc Paul (2): How did he do it? ______ Paul's success just a matter of luck?",
        options: ["Was", "Did", "Had", "Were"],
        correctAnswer: "Was",
        explanation: "Chia động từ To Be 'Was' quá khứ đơn cho chủ ngữ số ít 'success'."
      },
      {
        id: "ex2-39",
        type: "multiple-choice",
        question: "Chọn từ điền vào câu chuyện Bạch tuộc Paul (3): For the selection process, Paul's keepers ______ mark two glass boxes with the flags...",
        options: ["would", "used", "got used", "were"],
        correctAnswer: "would",
        explanation: "Dùng 'would' + động từ nguyên mẫu (mark) chỉ hành động thường xuyên được lặp đi lặp lại trong quá khứ."
      },
      {
        id: "ex2-40",
        type: "multiple-choice",
        question: "Chọn từ điền vào câu chuyện Bạch tuộc Paul (4): ...whichever country Paul chose ______ win the game.",
        options: ["would", "used", "got used", "was"],
        correctAnswer: "would",
        explanation: "Dùng 'would' chỉ thói quen kết quả lặp đi lặp lại ở quá khứ (mỗi khi chọn thì nước đó sẽ thắng)."
      },
      {
        id: "ex2-41",
        type: "multiple-choice",
        question: "Chọn từ điền vào câu chuyện Bạch tuộc Paul (5): His chances of predicting all seven of Germany's matches as well as the outcome of the final ______ 256-1.",
        options: ["were", "was", "would", "did"],
        correctAnswer: "were",
        explanation: "Chủ ngữ số nhiều 'chances' đi với động từ to be quá khứ 'were'."
      },
      {
        id: "ex2-42",
        type: "multiple-choice",
        question: "Chọn từ điền vào câu chuyện Bạch tuộc Paul (6): Or ______ he have special psychic powers?",
        options: ["did", "was", "had", "would"],
        correctAnswer: "did",
        explanation: "Trợ động từ 'did' dùng cho câu hỏi nghi vấn quá khứ với động từ thường (have)."
      },
      {
        id: "ex2-43",
        type: "multiple-choice",
        question: "Choose the correct answer: The referee sent the football player off the pitch for ______ behaviour.",
        options: ["aggressive", "attractive", "adventurous", "ambitious"],
        correctAnswer: "aggressive",
        explanation: "aggressive behaviour: hành vi hung hăng, bạo lực (bị trọng tài truất quyền thi đấu)."
      },
      {
        id: "ex2-44",
        type: "multiple-choice",
        question: "Choose the correct answer: Patricia felt very ______ when her classmates read her diary.",
        options: ["embarrassed", "shy", "amusing", "jealous"],
        correctAnswer: "embarrassed",
        explanation: "embarrassed: ngượng ngùng, xấu hổ, bối rối."
      },
      {
        id: "ex2-45",
        type: "multiple-choice",
        question: "Choose the correct answer: 'What's wrong? Why are you so ______?' - 'Everything is going wrong for me at the moment.'",
        options: ["depressed", "ashamed", "imaginative", "easy-going"],
        correctAnswer: "depressed",
        explanation: "depressed: trầm cảm, tuyệt vọng, buồn bã cực độ."
      },
      {
        id: "ex2-46",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Who is looking after your baby?' - 'My elder daughter; she's totally ______.'",
        options: ["trustworthy", "emotional", "thoughtless", "suspicious"],
        correctAnswer: "trustworthy",
        explanation: "trustworthy: đáng tin cậy (để giao trông em bé)."
      },
      {
        id: "ex2-47",
        type: "multiple-choice",
        question: "Choose the correct answer: It's essential for a doctor to remain ______ during an emergency.",
        options: ["calm", "stable", "peaceful", "odd"],
        correctAnswer: "calm",
        explanation: "remain calm: giữ bình tĩnh (trong các tình huống khẩn cấp)."
      },
      {
        id: "ex2-48",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Little Mandy is getting quite ______.' - 'Yes, her parents are forever feeding her snacks.'",
        options: ["plump", "fit", "thin", "skinny"],
        correctAnswer: "plump",
        explanation: "plump: phúng phính, mũm mĩm, tròn trịa dễ thương."
      },
      {
        id: "ex2-49",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Tom really hurt my feelings.' - 'I know, he's never tactful or ______.'",
        options: ["considerate", "sociable", "generous", "healthy"],
        correctAnswer: "considerate",
        explanation: "considerate: biết quan tâm, chu đáo (đối lập với việc làm tổn thương tình cảm người khác)."
      },
      {
        id: "ex2-50",
        type: "multiple-choice",
        question: "Choose the correct answer: A strong ______ in his own abilities helped Mike become successful.",
        options: ["belief", "talent", "stability", "luck"],
        correctAnswer: "belief",
        explanation: "belief in his own abilities: niềm tin mãnh liệt vào năng lực bản thân."
      },
      {
        id: "ex2-51",
        type: "multiple-choice",
        question: "Choose the correct answer: My memory is terrible; I'm afraid I don't ______ your name.",
        options: ["recall", "forget", "remind", "reward"],
        correctAnswer: "recall",
        explanation: "recall: nhớ lại, gợi lại được thông tin."
      },
      {
        id: "ex2-52",
        type: "multiple-choice",
        question: "Choose the correct answer: It was with great ______ that we said goodbye to our favourite pet.",
        options: ["sadness", "punishment", "aggression", "depression"],
        correctAnswer: "sadness",
        explanation: "with great sadness: với nỗi buồn rầu, thương tiếc vô vàn."
      },
      {
        id: "ex2-53",
        type: "multiple-choice",
        question: "Choose the correct answer: The writing was very old and unclear, but you could just ______ the words 'Victory to the King'.",
        options: ["make out", "look into", "let out", "take in"],
        correctAnswer: "make out",
        explanation: "make out: nhìn ra được, đọc ra được (dù chữ mờ nhạt)."
      },
      {
        id: "ex2-54",
        type: "multiple-choice",
        question: "Choose the correct answer: Religious objects from the site are ______ that this monument was once a temple.",
        options: ["evidence", "incidence", "occurrence", "witness"],
        correctAnswer: "evidence",
        explanation: "evidence: chứng cứ, bằng chứng rõ ràng."
      },
      {
        id: "ex2-55",
        type: "multiple-choice",
        question: "Choose the correct answer: The ancient coins were found in an unusual place, and experts are still trying to find an ______.",
        options: ["explanation", "investigation", "appearance", "illusion"],
        correctAnswer: "explanation",
        explanation: "find an explanation: tìm ra lời giải thích thoả đáng."
      },
      {
        id: "ex2-56",
        type: "multiple-choice",
        question: "Choose the correct answer: In the objects that they find, archaeologists look for ______ about the mysteries of the past.",
        options: ["clues", "reports", "hoaxes", "legends"],
        correctAnswer: "clues",
        explanation: "look for clues: tìm các gợi ý, manh mối lịch sử."
      },
      {
        id: "ex2-57",
        type: "multiple-choice",
        question: "Choose the correct answer: The teachers were discussing their lessons with their ______ in the staffroom.",
        options: ["colleagues", "colleges", "flatmates", "classmates"],
        correctAnswer: "colleagues",
        explanation: "colleagues: đồng nghiệp (cùng làm việc trong môi trường học thuật)."
      },
      {
        id: "ex2-58",
        type: "multiple-choice",
        question: "Choose the correct answer: The defeated army fled from the ______.",
        options: ["enemy", "peers", "athlete", "stranger"],
        correctAnswer: "enemy",
        explanation: "fled from the enemy: trốn chạy khỏi kẻ thù/quân địch."
      },
      {
        id: "ex2-59",
        type: "multiple-choice",
        question: "Circle the correct word: We're having / have a party on Friday.",
        options: ["having", "have"],
        correctAnswer: "having",
        explanation: "Dùng thì Hiện tại Tiếp diễn ('having') để chỉ một kế hoạch tương lai chắc chắn có sẵn lịch trình."
      },
      {
        id: "ex2-60",
        type: "multiple-choice",
        question: "Circle the correct word: This coffee is smelling / smells delicious.",
        options: ["smells", "is smelling"],
        correctAnswer: "smells",
        explanation: "'smell' là động từ giác quan trạng thái (stative verb), dùng Hiện tại Đơn để miêu tả đặc tính."
      },
      {
        id: "ex2-61",
        type: "multiple-choice",
        question: "Circle the correct word: Did you enjoy the / - food they gave you?",
        options: ["the", "-"],
        correctAnswer: "the",
        explanation: "Dùng mạo từ xác định 'the' vì món ăn đã được xác định cụ thể bởi mệnh đề 'they gave you'."
      },
      {
        id: "ex2-62",
        type: "multiple-choice",
        question: "Circle the correct word: I'm going to be a / the firefighter when I grow up.",
        options: ["a", "the"],
        correctAnswer: "a",
        explanation: "Dùng mạo từ bất định 'a' đứng trước danh từ chỉ nghề nghiệp nói chung khi chưa được xác định cụ thể."
      },
      {
        id: "ex2-63",
        type: "multiple-choice",
        question: "Circle the correct word: Steve never was / got used to having a cat in the house.",
        options: ["got", "was"],
        correctAnswer: "got",
        explanation: "Cấu trúc 'get used to + V-ing' (having) chỉ việc thích nghi quen dần với một hoàn cảnh mới."
      },
      {
        id: "ex2-64",
        type: "multiple-choice",
        question: "Circle the correct word: What did you do / were you doing when the earthquake happened?",
        options: ["were you doing", "did you do"],
        correctAnswer: "were you doing",
        explanation: "Dùng Quá khứ Tiếp diễn ('were you doing') hỏi về hành động đang diễn ra tại một thời điểm quá khứ thì bị thiên tai xen ngang."
      },
      {
        id: "ex2-65",
        type: "multiple-choice",
        question: "Circle the correct word: I used to prefer / preferring basketball to football.",
        options: ["prefer", "preferring"],
        correctAnswer: "prefer",
        explanation: "Cấu trúc 'used to + V-inf' (động từ nguyên mẫu prefer)."
      },
      {
        id: "ex2-66",
        type: "multiple-choice",
        question: "Circle the correct word: John was reading during / while the kids were playing.",
        options: ["while", "during"],
        correctAnswer: "while",
        explanation: "Dùng 'while' liên kết hai mệnh đề xảy ra song song; còn 'during' phải đi sau bởi cụm danh từ."
      },
      {
        id: "ex2-67",
        type: "multiple-choice",
        question: "Choose the correct answer: When Dad was young, he ______ go fishing every weekend.",
        options: ["would", "was", "used", "was used"],
        correctAnswer: "would",
        explanation: "'would + V-inf' dùng để chỉ thói quen lặp đi lặp lại thường xuyên ở quá khứ."
      },
      {
        id: "ex2-68",
        type: "multiple-choice",
        question: "Choose the correct answer: 'What ______ of my new car?' - 'I really like the colour.'",
        options: ["do you think", "are you thinking", "were you thinking", "would you think"],
        correctAnswer: "do you think",
        explanation: "Động từ 'think' mang nghĩa 'có ý kiến, cho rằng' là động từ trạng thái, chia Hiện tại Đơn."
      },
      {
        id: "ex2-69",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Do you believe that opposites attract?' - 'No, I ______ people who are similar to me.'",
        options: ["usually like", "am usually liking", "usually liked", "like usually"],
        correctAnswer: "usually like",
        explanation: "Hiện tại Đơn diễn tả sở thích thói quen thông thường, trạng từ tần suất 'usually' đứng trước động từ thường 'like'."
      },
      {
        id: "ex2-70",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Why are you studying the Pyramids?' - 'I ______ Egypt in a few weeks.'",
        options: ["am visiting", "visited", "was visiting", "would visit"],
        correctAnswer: "am visiting",
        explanation: "Hiện tại Tiếp diễn ('am visiting') diễn tả kế hoạch tương lai chắc chắn sẽ thực hiện."
      },
      {
        id: "ex2-71",
        type: "multiple-choice",
        question: "Choose the correct answer: All ______ amazing treasures in this museum date back to the 7th century.",
        options: ["the", "-", "an", "a"],
        correctAnswer: "the",
        explanation: "Dùng mạo từ xác định 'the' vì nhóm báu vật đã được xác định cụ thể trong bảo tàng này."
      },
      {
        id: "ex2-72",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Goodness, this area next to the airport is very noisy!' - 'We live here, so we ______ it.'",
        options: ["are used to", "were used to", "get used", "used to"],
        correctAnswer: "are used to",
        explanation: "Cấu trúc 'be used to + N' chỉ trạng thái hiện tại đã thích nghi quen thuộc với cái gì."
      },
      {
        id: "ex2-73",
        type: "multiple-choice",
        question: "Choose the correct answer: Chris is very excited because he ______ his new job next Monday.",
        options: ["is starting", "started", "would start", "was starting"],
        correctAnswer: "is starting",
        explanation: "Lịch trình/Kế hoạch công việc tuần tới cụ thể dùng Hiện tại Tiếp diễn."
      },
      {
        id: "ex2-74",
        type: "multiple-choice",
        question: "Choose the correct answer: It still remains a mystery; nobody ______ what really happened.",
        options: ["knows", "is knowing", "know", "dnew"],
        correctAnswer: "knows",
        explanation: "'know' là động từ trạng thái chỉ tri thức, chia Hiện tại Đơn; chủ ngữ đại từ bất định 'nobody' đi với động từ số ít."
      },
      {
        id: "ex2-75",
        type: "multiple-choice",
        question: "Choose the correct answer: When the archaeologists ______ the remains of the ancient city, they were really thrilled.",
        options: ["found", "find", "were finding", "used to find"],
        correctAnswer: "found",
        explanation: "Sự việc tìm thấy trong quá khứ đã hoàn thành, dùng Quá khứ Đơn ('found')."
      },
      {
        id: "ex2-76",
        type: "multiple-choice",
        question: "Choose the correct answer: The detective ______ the man's car when he noticed something odd.",
        options: ["was searching", "searched", "used to search", "would search"],
        correctAnswer: "was searching",
        explanation: "Hành động đang diễn ra liên tục (was searching) thì bị hành động khác đột ngột xen vào cắt ngang (noticed)."
      },
      {
        id: "ex2-77",
        type: "multiple-choice",
        question: "Choose the correct answer: 'The girl seemed nervous.' - 'That's because she ______ talking to the police.'",
        options: ["wasn't used to", "didn't use to", "wouldn't", "got used"],
        correctAnswer: "wasn't used to",
        explanation: "Cấu trúc 'be not used to + V-ing' chỉ trạng thái chưa quen làm việc gì ở quá khứ/hiện tại."
      },
      {
        id: "ex2-78",
        type: "multiple-choice",
        question: "Choose the correct answer: 'Your colleague looks very calm.' - 'He's ______ experienced detective, so he's used to dealing with mysteries.'",
        options: ["an", "a", "the", "-"],
        correctAnswer: "an",
        explanation: "Dùng mạo từ bất định 'an' trước tính từ bắt đầu bằng một nguyên âm u, e, o, a, i ('experienced')."
      },
      {
        id: "ex2-79",
        type: "multiple-choice",
        question: "Choose the correct answer: We ______ this theory is true because there's no evidence to support it.",
        options: ["don't believe", "believe", "aren't believing", "used to believe"],
        correctAnswer: "don't believe",
        explanation: "'believe' là động từ trạng thái nhận thức, chia Hiện tại Đơn phủ định ('don't believe')."
      },
      {
        id: "ex2-80",
        type: "multiple-choice",
        question: "Choose the correct answer: The man ______ the treasure while he was walking on the beach.",
        options: ["found", "was finding", "is finding", "finds"],
        correctAnswer: "found",
        explanation: "Hành động bất ngờ xen ngang (found) chia Quá khứ Đơn khi hành động đi bộ dạo mát đang diễn ra (was walking)."
      },
      {
        id: "ex2-81",
        type: "multiple-choice",
        question: "Choose the correct answer: 'The psychology course has record numbers of students this term.' - 'Yes, it ______ more popular every year.'",
        options: ["is becoming", "becomes", "was becoming", "is used to becoming"],
        correctAnswer: "is becoming",
        explanation: "Hiện tại Tiếp diễn ('is becoming') dùng chỉ các xu hướng, sự thay đổi phát triển dần dần ở hiện tại."
      },
      {
        id: "ex2-82",
        type: "multiple-choice",
        question: "Choose the correct answer: At first I hated the colour of this room, but ______ it now.",
        options: ["I'm getting used to", "I'm liking", "I'm being used to", "I get used to"],
        correctAnswer: "I'm getting used to",
        explanation: "'get used to + V-ing' diễn tả quá trình đang thích ứng quen dần với điều gì đó."
      },
      {
        id: "ex2-83",
        type: "multiple-choice",
        question: "Choose the correct answer: It was difficult, but I slowly got used ______ in the sun at archaeological sites.",
        options: ["to working", "to work", "working"],
        correctAnswer: "to working",
        explanation: "Cụm cấu trúc: 'get used to + V-ing' (to working) nghĩa là thích nghi quen dần với việc làm gì."
      },
      {
        id: "ex2-84",
        type: "multiple-choice",
        question: "Choose the correct answer: My history teacher ______ go on and on about the Mayan civilization.",
        options: ["would", "was getting used to", "was used to"],
        correctAnswer: "would",
        explanation: "'would + V-inf' (go) chỉ hành động lặp lại như thói quen cũ trong quá khứ."
      },
      {
        id: "ex2-85",
        type: "multiple-choice",
        question: "Choose the correct answer: Were ______ answering questions about the exhibits when you worked at the museum?",
        options: ["you used to", "you get used to", "you use to"],
        correctAnswer: "you used to",
        explanation: "Theo sau là V-ing (answering), câu hỏi quá khứ dùng 'Were you used to V-ing?' (Bạn có quen với việc...)."
      },
      {
        id: "ex2-86",
        type: "multiple-choice",
        question: "Choose the correct answer: I ______ archaeology before I became a teacher.",
        options: ["used to study", "used to studying", "use to study"],
        correctAnswer: "used to study",
        explanation: "Cấu trúc 'used to + V-inf' chỉ thói quen/trạng thái cũ đã chấm dứt."
      },
      {
        id: "ex2-87",
        type: "multiple-choice",
        question: "Choose the correct answer: John ______ hearing about amazing places because his father is an explorer.",
        options: ["is used to", "would", "used to"],
        correctAnswer: "is used to",
        explanation: "'be used to + V-ing' (hearing) chỉ thói quen quen thuộc ở hiện tại."
      },
      {
        id: "ex2-88",
        type: "multiple-choice",
        question: "Choose the correct answer: ______ live in Cairo when you were doing your research?",
        options: ["Did you use to", "Did you get used to", "Would you"],
        correctAnswer: "Did you use to",
        explanation: "Câu hỏi thói quen quá khứ với động từ nguyên mẫu (live): 'Did you use to...?'"
      },
      {
        id: "ex2-89",
        type: "multiple-choice",
        question: "Match the phrasal verb: 'make out' means to ______.",
        options: ["manage to see something", "examine facts and information", "only talk about one subject", "trick, deceive"],
        correctAnswer: "manage to see something",
        explanation: "make out: nỗ lực để nhìn ra, nghe thấy hoặc hiểu được điều gì mờ nhạt."
      },
      {
        id: "ex2-90",
        type: "multiple-choice",
        question: "Match the phrasal verb: 'look into' means to ______.",
        options: ["examine facts and information", "only talk about one subject", "trick, deceive", "make a certain sound"],
        correctAnswer: "examine facts and information",
        explanation: "look into: xem xét, điều tra sự thật kỹ lưỡng."
      },
      {
        id: "ex2-91",
        type: "multiple-choice",
        question: "Match the phrasal verb: 'stick to' means to ______.",
        options: ["only talk about one subject", "trick, deceive", "make a certain sound", "be sure that something exists"],
        correctAnswer: "only talk about one subject",
        explanation: "stick to: bám sát vào, chỉ thảo luận tập trung một đề tài nhất định."
      },
      {
        id: "ex2-92",
        type: "multiple-choice",
        question: "Match the phrasal verb: 'take in' means to ______.",
        options: ["trick, deceive", "make a certain sound", "be sure that something exists", "examine facts and information"],
        correctAnswer: "trick, deceive",
        explanation: "take in: đánh lừa, lừa gạt, lừa dối ai đó."
      },
      {
        id: "ex2-93",
        type: "multiple-choice",
        question: "Match the phrasal verb: 'let out' means to ______.",
        options: ["make a certain sound", "be sure that something exists", "only talk about one subject", "trick, deceive"],
        correctAnswer: "let out",
        explanation: "let out: phát ra âm thanh (ví dụ tiếng kêu, hét lớn)."
      },
      {
        id: "ex2-94",
        type: "multiple-choice",
        question: "Match the phrasal verb: 'believe in' means to ______.",
        options: ["be sure that something exists", "examine facts and information", "only talk about one subject", "trick, deceive"],
        correctAnswer: "be sure that something exists",
        explanation: "believe in: tin tưởng vào sự tồn tại thực tế của cái gì (như ma, phép thuật)."
      },
      {
        id: "ex2-95",
        type: "multiple-choice",
        question: "Complete with the correct word: Don't feel ______ about your appearance. You look fine.",
        options: ["embarrassed", "amused"],
        correctAnswer: "embarrassed",
        explanation: "embarrassed: ngượng ngùng, tự ti, xấu hổ."
      },
      {
        id: "ex2-96",
        type: "multiple-choice",
        question: "Complete with the correct word: Why are you so ______? I don't think it's at all funny.",
        options: ["amused", "embarrassed"],
        correctAnswer: "amused",
        explanation: "amused: cảm thấy vui vẻ, buồn cười, thích thú."
      },
      {
        id: "ex2-97",
        type: "multiple-choice",
        question: "Complete with the correct word: Neil Armstrong's achievement was absolutely ______.",
        options: ["remarkable", "generous"],
        correctAnswer: "remarkable",
        explanation: "remarkable: phi thường, đáng chú ý, xuất sắc."
      },
      {
        id: "ex2-98",
        type: "multiple-choice",
        question: "Complete with the correct word: Dad is both kind and ______ with others.",
        options: ["generous", "remarkable"],
        correctAnswer: "generous",
        explanation: "generous: rộng lượng, hào phóng với mọi người xung quanh."
      },
      {
        id: "ex2-99",
        type: "multiple-choice",
        question: "Complete with the correct word: It is my ______ that everyone needs friends.",
        options: ["belief", "legend"],
        correctAnswer: "belief",
        explanation: "belief: niềm tin vững chắc, quan niệm cá nhân."
      },
      {
        id: "ex2-100",
        type: "multiple-choice",
        question: "Complete with the correct word: Have you heard the ______ of the ghost rider?",
        options: ["legend", "belief"],
        correctAnswer: "legend",
        explanation: "legend: truyền thuyết kỳ bí từ xưa truyền lại."
      },
      {
        id: "ex2-101",
        type: "multiple-choice",
        question: "Complete with the correct word: Please calm down. You shouldn't be so ______.",
        options: ["aggressive", "ridiculous"],
        correctAnswer: "aggressive",
        explanation: "aggressive: hung hăng, thô lỗ, hiếu chiến."
      },
      {
        id: "ex2-102",
        type: "multiple-choice",
        question: "Complete with the correct word: It's absolutely ______ to believe that the house is haunted.",
        options: ["ridiculous", "aggressive"],
        correctAnswer: "ridiculous",
        explanation: "ridiculous: lố bịch, nực cười, vô lý."
      },
      {
        id: "ex2-103",
        type: "multiple-choice",
        question: "Complete with the correct word: I know it looks like a pool of water, but it's only an ______.",
        options: ["illusion", "explanation"],
        correctAnswer: "illusion",
        explanation: "illusion: ảo giác, ảo ảnh đánh lừa thị giác."
      },
      {
        id: "ex2-104",
        type: "multiple-choice",
        question: "Complete with the correct word: If there is an ______ for this mystery, I'd like to know what it is.",
        options: ["explanation", "illusion"],
        correctAnswer: "explanation",
        explanation: "explanation: lời giải thích thích đáng."
      },
      {
        id: "ex2-105",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: There have been many cases of strange (1) ______ in the world, but one of the strangest is the case of David Lang.",
        options: ["disappearances", "clue", "evidence", "hoax"],
        correctAnswer: "disappearances",
        explanation: "disappearances: những sự biến mất kỳ lạ."
      },
      {
        id: "ex2-106",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: ...while walking through a field in Tennessee near his home and being watched by several (2) ______",
        options: ["witnesses", "researchers", "clue", "hoax"],
        correctAnswer: "witnesses",
        explanation: "witnesses: nhân chứng (những người tận mắt chứng kiến vụ việc)."
      },
      {
        id: "ex2-107",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: ...but they didn't find even one (3) ______ to help them solve the mystery.",
        options: ["clue", "evidence", "hoax", "researchers"],
        correctAnswer: "clue",
        explanation: "clue: manh mối, dấu vết."
      },
      {
        id: "ex2-108",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: While the case of David Lang has become well-known, most (4) ______ who have studied this case...",
        options: ["researchers", "witnesses", "disappearances", "evidence"],
        correctAnswer: "researchers",
        explanation: "researchers: các nhà nghiên cứu, tìm tòi khảo sát."
      },
      {
        id: "ex2-109",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: ...believe that it is a(n) (5) ______.",
        options: ["hoax", "clue", "evidence", "disappearances"],
        correctAnswer: "hoax",
        explanation: "hoax: trò lừa bịp, một câu chuyện tự dựng lên."
      },
      {
        id: "ex2-110",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: They point out that, despite lengthy investigations, no (6) ______ has been found that Lang even existed.",
        options: ["evidence", "clue", "hoax", "witnesses"],
        correctAnswer: "evidence",
        explanation: "evidence: bằng chứng, chứng từ chứng minh sự tồn tại thực tế."
      },
      {
        id: "ex2-111",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: I ______ (play) tennis three times a week.",
        options: ["play", "am playing", "plays", "is playing"],
        correctAnswer: "play",
        explanation: "Sở thích hoặc thói quen lặp đi lặp lại thường xuyên ở hiện tại dùng Hiện tại Đơn."
      },
      {
        id: "ex2-112",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Mum, why ______ (shout) at me?",
        options: ["are you forever shouting", "do you forever shout", "have you forever shouted", "are you forever shout"],
        correctAnswer: "are you forever shouting",
        explanation: "Dùng thì Hiện tại Tiếp diễn đi kèm trạng từ 'forever' (hoặc 'always') để phàn nàn về hành động gây bực bội xảy ra lặp đi lặp lại liên tục."
      },
      {
        id: "ex2-113",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: ______ you ______ (believe) in the Loch Ness Monster?",
        options: ["Do / believe", "Are / believing", "Did / believe", "Do / believing"],
        correctAnswer: "Do / believe",
        explanation: "'believe' là động từ trạng thái nhận thức, chia Hiện tại Đơn."
      },
      {
        id: "ex2-114",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: We ______ (go) on the mystery tour tomorrow.",
        options: ["are going", "go", "will go", "went"],
        correctAnswer: "are going",
        explanation: "Hiện tại Tiếp diễn ('are going') dùng để chỉ kế hoạch, lịch trình chắc chắn trong tương lai gần."
      },
      {
        id: "ex2-115",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: The meeting ______ (not be) at 9am today.",
        options: ["is not", "is not being", "not be", "are not"],
        correctAnswer: "is not",
        explanation: "Mốc sự việc thời gian biểu hôm nay dùng Hiện tại Đơn phủ định cho To Be 'is not'."
      },
      {
        id: "ex2-116",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: ______ Grandma ______ (come) to visit again on Sunday?",
        options: ["Is / coming", "Does / come", "Will / coming", "Is / come"],
        correctAnswer: "Is / coming",
        explanation: "Sắp xếp chắc chắn có lịch trình dùng Hiện tại Tiếp diễn ('Is... coming?')."
      },
      {
        id: "ex2-117",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: In this picture, the boy ______ (not cry).",
        options: ["is not crying", "does not cry", "not crying", "is not cry"],
        correctAnswer: "is not crying",
        explanation: "Miêu tả trạng thái hành động đang diễn ra tại thời điểm trong một bức tranh dùng Hiện tại Tiếp diễn."
      },
      {
        id: "ex2-118",
        type: "multiple-choice",
        question: "Chọn dạng đúng của động từ: Light ______ (travel) at almost 300,000km per second.",
        options: ["travels", "is travelling", "travel", "travelled"],
        correctAnswer: "travels",
        explanation: "Chân lý khoa học, sự thật hiển nhiên luôn đúng dùng Hiện tại Đơn."
      },
      {
        id: "ex2-119",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: Is ______ girl next door very pretty?",
        options: ["the", "a", "an", "-"],
        correctAnswer: "the",
        explanation: "Dùng mạo từ 'the' vì cô gái đã được xác định cụ thể bởi cụm 'next door' (ở bên cạnh nhà)."
      },
      {
        id: "ex2-120",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: There's ______ free table here. Or shall we sit at ______ one over there?",
        options: ["a / the", "- / the", "the / a", "a / a"],
        correctAnswer: "a / the",
        explanation: "Lần đầu đề cập một chiếc bàn trống dùng 'a'; vế sau đề cập cụ thể cái bàn ở vị trí kia kìa dùng 'the'."
      },
      {
        id: "ex2-121",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: Is ______ physics ______ only subject you ever found difficult?",
        options: ["- / the", "the / the", "a / the", "- / -"],
        correctAnswer: "- / the",
        explanation: "Không dùng mạo từ trước tên các môn học (physics); 'only subject' là danh từ duy nhất xác định nên dùng 'the'."
      },
      {
        id: "ex2-122",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: I want to buy ______ umbrella and other things, but I only have ______ hour to shop.",
        options: ["an / an", "a / an", "an / a", "the / the"],
        correctAnswer: "an / an",
        explanation: "'umbrella' bắt đầu bằng một nguyên âm; 'hour' có âm 'h' câm nên cũng dùng mạo từ 'an'."
      },
      {
        id: "ex2-123",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: Nowadays, ______ children mostly do their homework on computers.",
        options: ["-", "the", "a", "an"],
        correctAnswer: "-",
        explanation: "Không dùng mạo từ khi nhắc đến một danh từ số nhiều nói chung (children - trẻ em nói chung)."
      },
      {
        id: "ex2-124",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: I enjoy learning ______ English, but I don't like ______ German language.",
        options: ["- / the", "the / -", "the / the", "- / -"],
        correctAnswer: "- / the",
        explanation: "Không dùng mạo từ trước tên ngôn ngữ đơn thuần (English); nhưng có từ 'language' phía sau thì bắt buộc dùng 'the German language'."
      },
      {
        id: "ex2-125",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: Is Kelly ______ British citizen or is she from ______ Canada?",
        options: ["a / -", "the / -", "a / the", "- / -"],
        correctAnswer: "a / -",
        explanation: "British citizen: một công dân Anh (danh từ đếm được số ít dùng 'a'); không dùng mạo từ trước tên quốc gia (Canada)."
      },
      {
        id: "ex2-126",
        type: "multiple-choice",
        question: "Chọn mạo từ thích hợp: 'Is there ______ cinema near here?' 'Yes, ______ Rex Cinema is across the road.'",
        options: ["a / the", "the / the", "a / a", "- / the"],
        correctAnswer: "a / the",
        explanation: "Lần đầu hỏi về rạp phim chung chung dùng 'a'; vế sau trả lời tên cụ thể của rạp phim Rex dùng 'the'."
      },
      {
        id: "ex2-127",
        type: "multiple-choice",
        question: "Tìm và sửa lỗi sai trong câu: I was wearing my red dress only twice last year.",
        options: [
          "I wore my red dress only twice last year.",
          "I was wear my red dress only twice last year.",
          "I would wear my red dress only twice last year."
        ],
        correctAnswer: "I wore my red dress only twice last year.",
        explanation: "Khi diễn tả số lần một hành động xảy ra cụ thể trong quá khứ (twice), ta dùng thì Quá khứ Đơn (wore) chứ không dùng Quá khứ Tiếp diễn."
      },
      {
        id: "ex2-128",
        type: "multiple-choice",
        question: "Tìm và sửa lỗi sai trong câu: Helen was talking on the phone while Julie was being in bed.",
        options: [
          "Helen was talking on the phone while Julie was in bed.",
          "Helen talked on the phone while Julie was being in bed.",
          "Helen was talking on the phone while Julie had been in bed."
        ],
        correctAnswer: "Helen was talking on the phone while Julie was in bed.",
        explanation: "Động từ trạng thái 'be' không chia ở thể tiếp diễn (was being) trong ngữ cảnh này."
      },
      {
        id: "ex2-129",
        type: "multiple-choice",
        question: "Tìm và sửa lỗi sai trong câu: I would like the colour red when I was young.",
        options: [
          "I liked the colour red when I was young.",
          "I would be liking the colour red when I was young.",
          "I was liking the colour red when I was young."
        ],
        correctAnswer: "I liked the colour red when I was young.",
        explanation: "liked: 'like' là động từ trạng thái, không dùng cấu trúc 'would' để diễn tả một trạng thái kéo dài ở quá khứ."
      },
      {
        id: "ex2-130",
        type: "multiple-choice",
        question: "Tìm và sửa lỗi sai trong câu: Jason is used to wear jeans when he was at university.",
        options: [
          "Jason used to wear jeans when he was at university.",
          "Jason was used to wear jeans when he was at university.",
          "Jason got used to wear jeans when he was at university."
        ],
        correctAnswer: "Jason used to wear jeans when he was at university.",
        explanation: "Để chỉ thói quen cũ đã chấm dứt trong quá khứ dùng 'used to + V-inf' (used to wear)."
      },
      {
        id: "ex2-131",
        type: "multiple-choice",
        question: "Circle the correct word: It started / was starting raining frogs while I was walking.",
        options: ["started", "was starting"],
        correctAnswer: "started",
        explanation: "Hành động thình lình bắt đầu xảy ra xen ngang hành động đang tiếp diễn trong quá khứ."
      },
      {
        id: "ex2-132",
        type: "multiple-choice",
        question: "Circle the correct word: You aren't used / use to studying in a library.",
        options: ["used", "use"],
        correctAnswer: "used",
        explanation: "Cấu trúc 'be used to + V-ing' (studying) nghĩa là quen với điều gì ở hiện tại."
      },
      {
        id: "ex2-133",
        type: "multiple-choice",
        question: "Circle the correct word: Napoleon died / was dying mysteriously in 1821.",
        options: ["died", "was dying"],
        correctAnswer: "died",
        explanation: "Sự kiện lịch sử đã xảy ra trọn vẹn tại một năm xác định chia Quá khứ Đơn."
      },
      {
        id: "ex2-134",
        type: "multiple-choice",
        question: "Circle the correct word: Detectives got used to / are used to solving mysteries these days.",
        options: ["are used to", "got used to"],
        correctAnswer: "are used to",
        explanation: "'these days' biểu thị mốc thời gian hiện tại, dùng 'are used to + V-ing' (đã quen với việc làm gì hiện nay)."
      },
      {
        id: "ex2-135",
        type: "multiple-choice",
        question: "Circle the correct word: I didn't use to go / wasn't going fishing last year.",
        options: ["didn't use to go", "wasn't going"],
        correctAnswer: "didn't use to go",
        explanation: "Diễn tả thói quen lặp đi lặp lại hoặc tình trạng trong quá khứ dùng 'didn't use to go'."
      },
      {
        id: "ex2-136",
        type: "multiple-choice",
        question: "Circle the correct word: Would your cousin visit / visiting you often when you lived in Yorkshire?",
        options: ["visit", "visiting"],
        correctAnswer: "visit",
        explanation: "Cấu trúc câu hỏi thói quen quá khứ: 'Would + S + V-inf?' (visit)."
      },
      {
        id: "ex2-137",
        type: "multiple-choice",
        question: "Circle the correct word: They would love / loved swimming in the lake when they were young.",
        options: ["loved", "would love"],
        correctAnswer: "loved",
        explanation: "'love' là động từ chỉ cảm xúc trạng thái nên không được chia với 'would' để chỉ một trạng thái quá khứ."
      },
      {
        id: "ex2-138",
        type: "multiple-choice",
        question: "Circle the correct word: Did / Are you use to live in a cottage?",
        options: ["Did", "Are"],
        correctAnswer: "Did",
        explanation: "Cấu trúc câu hỏi thói quen quá khứ: 'Did you use to + V-inf?'."
      }
    ]
  },
  {
    id: "unit-3",
    number: 3,
    name: "Fit as a Fiddle",
    title: "Sức Khỏe Là Vàng",
    description: "Hiện tại Hoàn thành & Tiếp diễn, Danh từ đếm được/không đếm được, Lượng từ.",
    intro: "Cùng Gà Mẹ tìm hiểu bí quyết sống khỏe và làm chủ các thì Hoàn thành cũng như các lượng từ Much, Many, Few, Little nhé!",
    theoryParts: [
      {
        subtitle: "1. Thì Hiện Tại Hoàn Thành & Hiện Tại Hoàn Thành Tiếp Diễn",
        content: `• **Hiện Tại Hoàn Thành (Present Perfect Simple):** Nhấn mạnh vào kết quả, số lượng hoặc trải nghiệm đến nay.\n• **Hiện Tại Hoàn Thành Tiếp Diễn (Present Perfect Continuous):** Nhấn mạnh tính liên tục, độ dài thời gian của hành động bắt đầu ở quá khứ và vẫn đang tiếp diễn.`,
        formula: `**HOÀN THÀNH:** S + have/has + V3/ed\n**HOÀN THÀNH TIẾP DIỄN:** S + have/has + been + V-ing`,
        examples: [
          { english: "She has run three miles today.", vietnamese: "Hôm nay cô ấy đã chạy được 3 dặm rồi (Kết quả)." },
          { english: "She has been running for two hours.", vietnamese: "Cô ấy đã chạy liên tục suốt 2 tiếng đồng hồ rồi (Quá trình)." }
        ],
        chickenTip: "Con dùng 'since' cho mốc thời gian (since 2010) và 'for' cho khoảng thời gian (for 5 years) nhé!"
      },
      {
        subtitle: "2. Lượng Từ: Much, Many, Little, Few, A Little, A Few",
        content: `• **Many, A Few, Few:** Đi với danh từ đếm được số nhiều (people, apples).\n• **Much, A Little, Little:** Đi với danh từ không đếm được (water, money, advice).\n• **A few / A little:** Có một ít (đủ dùng).\n• **Few / Little:** Rất ít, hầu như không có (không đủ dùng).`,
        formula: `- Many/Few + Danh từ đếm được số nhiều\n- Much/Little + Danh từ không đếm được`,
        examples: [
          { english: "There isn't much equipment at the gym.", vietnamese: "Không có nhiều thiết bị ở phòng tập (equipment không đếm được)." },
          { english: "There are a few apples left.", vietnamese: "Còn lại một vài quả táo (đủ ăn)." }
        ],
        chickenTip: "Lưu ý cực kỳ quan trọng: 'Advice' (lời khuyên), 'information' (thông tin) và 'equipment' (thiết bị) là danh từ KHÔNG ĐẾM ĐƯỢC nha con!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KỲ DIỆU - UNIT 3</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Perfect Tenses -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">⏳ Hiện Tại Hoàn Thành Đơn & Tiếp Diễn</span>
                <p class="text-[10px] text-slate-600 mt-1">Diễn tả hành động bắt đầu ở quá khứ kéo dài đến hiện tại.</p>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Hoàn thành đơn (S + have/has + V3):</strong> Nhấn mạnh kết quả hoặc số lần thực hiện hành động.</li>
                  <li><strong>Hoàn thành tiếp diễn (S + have/has + been + V-ing):</strong> Nhấn mạnh tính liên tục kéo dài suốt một khoảng thời gian.</li>
                </ul>
              </div>

              <!-- Quantifiers -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">⚖️ Danh Từ & Lượng Từ (Quantifiers)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Đếm được số nhiều:</strong> many, a few (đủ xài), few (hầu như không có).</li>
                  <li><strong>Không đếm được:</strong> much, a little (đủ dùng), little (hầu như không có).</li>
                  <li><strong>Lưu ý từ không đếm được:</strong> <em>advice</em> (lời khuyên), <em>information</em> (thông tin), <em>equipment</em> (thiết bị).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Diet and Nutrition -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">🍎 Dinh Dưỡng & Sức Khỏe (Nutrition & Diet)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Nutrition / Nourishing / Dietician:</strong> Dinh dưỡng / Rất bổ dưỡng / Chuyên gia dinh dưỡng.</li>
                  <li><strong>Consumption / Fast:</strong> Sự tiêu thụ / Nhịn ăn, cuộc ăn chay.</li>
                  <li><strong>Proteins / Vitamins / Minerals:</strong> Chất đạm / Các vitamin / Chất khoáng bổ dưỡng.</li>
                  <li><strong>Additives / Poison:</strong> Chất phụ gia hóa chất bảo quản / Chất độc, đầu độc.</li>
                  <li><strong>Life expectancy / Dementia / Trait:</strong> Tuổi thọ trung bình / Chứng sa sút trí tuệ / Đặc tính nổi bật.</li>
                </ul>
              </div>

              <!-- Medical and Health -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">🏥 Y Tế & Chăm Sóc Sức Khỏe (Medical Care)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Nurse / Surgeon / Optician:</strong> Y tá / Bác sĩ phẫu thuật / Chuyên viên đo mắt kính.</li>
                  <li><strong>Ward / Operation / Diagnose / Examine:</strong> Phòng bệnh / Ca mổ / Chẩn đoán bệnh / Khám bệnh kỹ lưỡng.</li>
                  <li><strong>Prescription / Tablet / Injection:</strong> Đơn thuốc bác sĩ kê / Viên thuốc nén / Mũi tiêm thuốc.</li>
                  <li><strong>Crutch / Bandage / Vaccination:</strong> Nạng gỗ nâng đỡ / Băng gạc / Sự tiêm chủng vắc-xin.</li>
                </ul>
              </div>

              <!-- Fitness and Exercises -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">🧘 Thể Thao & Thiết Bị (Fitness & Equipment)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Yoga / Meditation / Cycling:</strong> Môn thiền Yoga / Sự thiền định / Đạp xe thể thao.</li>
                  <li><strong>Weights / Treadmill / Equipment:</strong> Tạ tập thể hình / Máy chạy bộ / Trang thiết bị phòng gym (không đếm được).</li>
                  <li><strong>Trainer:</strong> Huấn luyện viên thể hình hướng dẫn kỹ thuật.</li>
                  <li><strong>Device / Appliance / Portable / Innovation:</strong> Thiết bị thông minh / Thiết bị gia dụng / Tiện mang theo / Sự đổi mới.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: [
      { id: "fc3-1", front: "Nutrition", back: "Dinh dưỡng, chế độ ăn uống", partOfSpeech: "noun" },
      { id: "fc3-2", front: "Life expectancy", back: "Tuổi thọ trung bình, thời gian sống dự kiến", partOfSpeech: "noun" },
      { id: "fc3-3", front: "Vitamins", back: "Các loại vitamin, sinh tố", partOfSpeech: "noun" },
      { id: "fc3-4", front: "Nourishing", back: "Bổ dưỡng, chứa nhiều chất tốt cho sức khỏe", partOfSpeech: "adjective" },
      { id: "fc3-5", front: "Equipment", back: "Trang thiết bị (Lưu ý: Không đếm được!)", partOfSpeech: "noun" },
      { id: "fc3-6", front: "Trait", back: "Đặc điểm, đặc tính, nét tính cách nổi bật", partOfSpeech: "noun" },
      { id: "fc3-7", front: "Consumption", back: "Sự tiêu thụ, việc ăn uống hoặc sử dụng", partOfSpeech: "noun" },
      { id: "fc3-8", front: "Dementia", back: "Chứng sa sút trí tuệ, suy giảm trí nhớ ở người già", partOfSpeech: "noun" },
      { id: "fc3-9", front: "Fast", back: "Sự nhịn ăn, cuộc ăn chay / nhịn ăn uống", partOfSpeech: "noun/verb" },
      { id: "fc3-10", front: "Nurse", back: "Y tá, điều dưỡng viên", partOfSpeech: "noun" },
      { id: "fc3-11", front: "Ward", back: "Phòng bệnh, khu bệnh xá trong bệnh viện", partOfSpeech: "noun" },
      { id: "fc3-12", front: "Surgeon", back: "Bác sĩ phẫu thuật", partOfSpeech: "noun" },
      { id: "fc3-13", front: "Yoga", back: "Môn thiền Yoga giúp dẻo dai và tĩnh tâm", partOfSpeech: "noun" },
      { id: "fc3-14", front: "Meditation", back: "Sự thiền định, sự suy ngẫm", partOfSpeech: "noun" },
      { id: "fc3-15", front: "Cycling", back: "Môn đạp xe thể thao", partOfSpeech: "noun" },
      { id: "fc3-16", front: "Proteins", back: "Chất đạm, protein giúp phát triển cơ bắp", partOfSpeech: "noun" },
      { id: "fc3-17", front: "Additives", back: "Chất phụ gia (hóa chất thêm vào thực phẩm)", partOfSpeech: "noun" },
      { id: "fc3-18", front: "Minerals", back: "Chất khoáng, khoáng chất", partOfSpeech: "noun" },
      { id: "fc3-19", front: "Trainer", back: "Huấn luyện viên, người hướng dẫn thể chất", partOfSpeech: "noun" },
      { id: "fc3-20", front: "Optician", back: "Chuyên viên đo mắt, bác sĩ khúc xạ kính mắt", partOfSpeech: "noun" },
      { id: "fc3-21", front: "Dietician", back: "Chuyên gia dinh dưỡng, người lên thực đơn", partOfSpeech: "noun" },
      { id: "fc3-22", front: "Vaccination", back: "Sự tiêm chủng vắc-xin phòng bệnh", partOfSpeech: "noun" },
      { id: "fc3-23", front: "Operation", back: "Ca phẫu thuật, ca mổ", partOfSpeech: "noun" },
      { id: "fc3-24", front: "Injection", back: "Mũi tiêm thuốc, sự tiêm chủng", partOfSpeech: "noun" },
      { id: "fc3-25", front: "Prescription", back: "Đơn thuốc, toa thuốc do bác sĩ kê", partOfSpeech: "noun" },
      { id: "fc3-26", front: "Weights", back: "Tạ tập, bài tập tạ thể hình", partOfSpeech: "noun" },
      { id: "fc3-27", front: "Treadmill", back: "Máy chạy bộ trong phòng tập gym", partOfSpeech: "noun" },
      { id: "fc3-28", front: "Bandage", back: "Băng cá nhân, băng gạc vết thương", partOfSpeech: "noun" },
      { id: "fc3-29", front: "Tablet", back: "Viên thuốc nén", partOfSpeech: "noun" },
      { id: "fc3-30", front: "Crutch", back: "Cái nạng gỗ để nâng đỡ người đau chân", partOfSpeech: "noun" },
      { id: "fc3-31", front: "Poison", back: "Chất độc / Đầu độc", partOfSpeech: "noun/verb" },
      { id: "fc3-32", front: "Diagnose", back: "Chẩn đoán bệnh trạng", partOfSpeech: "verb" },
      { id: "fc3-33", front: "Examine", back: "Khám bệnh, kiểm tra kỹ lưỡng", partOfSpeech: "verb" },
      { id: "fc3-34", front: "Innovation", back: "Sự đổi mới, sáng kiến cải tiến công nghệ", partOfSpeech: "noun" },
      { id: "fc3-35", front: "Portable", back: "Có thể xách tay, di động, dễ dàng mang theo", partOfSpeech: "adjective" },
      { id: "fc3-36", front: "Device", back: "Thiết bị, dụng cụ nhỏ thông minh", partOfSpeech: "noun" },
      { id: "fc3-37", front: "Appliance", back: "Thiết bị gia dụng điện tử", partOfSpeech: "noun" }
    ],
    exercises: [
      // odd one out
      {
        id: "ex3-odd1",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): nurse - ward - surgeon",
        options: ["nurse", "ward", "surgeon"],
        correctAnswer: "ward",
        explanation: "'ward' là phòng bệnh trong bệnh viện, còn 'nurse' (y tá) và 'surgeon' (bác sĩ phẫu thuật) là danh từ chỉ người/nghề nghiệp y tế."
      },
      {
        id: "ex3-odd2",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): yoga - meditation - cycling",
        options: ["yoga", "meditation", "cycling"],
        correctAnswer: "cycling",
        explanation: "'cycling' là hoạt động đạp xe thể chất năng động ngoài trời, còn 'yoga' và 'meditation' (thiền định) là phương pháp rèn luyện tâm trí, tĩnh tâm trong nhà."
      },
      {
        id: "ex3-odd3",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): proteins - additives - minerals",
        options: ["proteins", "additives", "minerals"],
        correctAnswer: "additives",
        explanation: "'proteins' (chất đạm) và 'minerals' (khoáng chất) là chất dinh dưỡng có lợi tự nhiên cho sức khỏe, còn 'additives' (chất phụ gia thực phẩm) là các hóa chất công nghiệp thêm vào thực phẩm."
      },
      {
        id: "ex3-odd4",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): trainer - optician - dietician",
        options: ["trainer", "optician", "dietician"],
        correctAnswer: "trainer",
        explanation: "'optician' (chuyên viên đo mắt kính) và 'dietician' (chuyên gia dinh dưỡng) là những nghề nghiệp y khoa, chuyên khoa y tế, còn 'trainer' (huấn luyện viên phòng gym) là người hướng dẫn thể dục."
      },
      {
        id: "ex3-odd5",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): vaccination - operation - injection",
        options: ["vaccination", "operation", "injection"],
        correctAnswer: "operation",
        explanation: "'vaccination' (tiêm vắc-xin) và 'injection' (tiêm thuốc) là thủ thuật tiêm thuốc đơn giản bằng kim tiêm, còn 'operation' là một ca mổ phẫu thuật lớn phức tạp."
      },
      {
        id: "ex3-odd6",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): prescription - weights - treadmill",
        options: ["prescription", "weights", "treadmill"],
        correctAnswer: "prescription",
        explanation: "'weights' (tạ tay) và 'treadmill' (máy chạy bộ) là dụng cụ rèn luyện thể chất ở phòng gym, còn 'prescription' là đơn thuốc của bác sĩ."
      },
      {
        id: "ex3-odd7",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): bandage - tablet - crutch",
        options: ["bandage", "tablet", "crutch"],
        correctAnswer: "tablet",
        explanation: "'bandage' (băng gạc sơ cứu) và 'crutch' (cái nạng đi lại) là trang bị y tế cơ học bên ngoài cơ thể, còn 'tablet' là viên thuốc nén dùng để uống vào trong cơ thể."
      },
      {
        id: "ex3-odd8",
        type: "multiple-choice",
        question: "Tìm từ khác nhóm (Odd one out): poison - diagnose - examine",
        options: ["poison", "diagnose", "examine"],
        correctAnswer: "poison",
        explanation: "'poison' (chất độc) là danh từ, còn 'diagnose' (chẩn đoán) và 'examine' (khám bệnh) là các động từ y khoa chỉ hành động."
      },

      // Fill in the blanks from text
      {
        id: "ex3-text1",
        type: "multiple-choice",
        question: "Chọn từ đúng: Apples are full of (1) ______ that keep us healthy.",
        options: ["additives", "vitamins"],
        correctAnswer: "vitamins",
        explanation: "Táo chứa nhiều 'vitamins' tự nhiên có lợi cho sức khỏe chứ không phải chứa 'additives' (chất phụ gia)."
      },
      {
        id: "ex3-text2",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...and in good (2) ______ physically.",
        options: ["shape", "figure"],
        correctAnswer: "shape",
        explanation: "Thành ngữ 'in good shape' có nghĩa là có thể hình cân đối, khỏe mạnh, thể lực tốt."
      },
      {
        id: "ex3-text3",
        type: "multiple-choice",
        question: "Chọn từ đúng: Many researchers say that a person with a high (3) ______ should limit what they eat.",
        options: ["illness", "temperature"],
        correctAnswer: "temperature",
        explanation: "Cụm từ 'high temperature' chỉ tình trạng sốt cao (nhiệt độ cơ thể cao). 'High illness' không có nghĩa."
      },
      {
        id: "ex3-text4",
        type: "multiple-choice",
        question: "Chọn từ đúng: On the other hand, they (4) ______ patients who are suffering from a cold to eat nourishing food.",
        options: ["diagnose", "advise"],
        correctAnswer: "advise",
        explanation: "Cấu trúc 'advise someone to do something' (khuyên ai đó làm gì). Ở đây các nhà nghiên cứu khuyên bệnh nhân ăn đồ bổ dưỡng."
      },
      {
        id: "ex3-text5",
        type: "multiple-choice",
        question: "Chọn từ đúng: On the other hand, they advise patients who are suffering from a cold to eat (5) ______ food.",
        options: ["well-balanced", "nourishing"],
        correctAnswer: "nourishing",
        explanation: "Trong ngữ cảnh bị cảm lạnh, người ta khuyên ăn thức ăn bổ dưỡng ('nourishing food') như súp gà nóng để bồi bổ sức khỏe."
      },
      {
        id: "ex3-text6",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...another old wives' tale (6) ______ dear old mum's homemade chicken soup as a quick remedy.",
        options: ["prescribes", "treats"],
        correctAnswer: "prescribes",
        explanation: "Cấu trúc 'prescribe something as a remedy' có nghĩa là coi/kê một món gì đó làm phương thuốc chữa trị."
      },
      {
        id: "ex3-text7",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...chicken soup as a quick and simple (7) ______ for runny noses.",
        options: ["remedy", "medication"],
        correctAnswer: "remedy",
        explanation: "'remedy' là phương thuốc/biện pháp chữa trị dân gian, tại nhà, rất phù hợp với súp gà."
      },
      {
        id: "ex3-text8",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...remedy for runny noses, sniffles and even (8) ______ throats.",
        options: ["sore", "tender"],
        correctAnswer: "sore",
        explanation: "Cụm từ cố định 'sore throat' có nghĩa là đau họng."
      },

      // Grammar Present Perfect Simple & Present Perfect Continuous
      {
        id: "ex3-gram1",
        type: "multiple-choice",
        question: "Chia động từ: Her aunt ______ (use) natural remedies for many years.",
        options: ["has been using", "has used", "uses", "is using"],
        correctAnswer: "has been using",
        explanation: "Nhấn mạnh tính liên tục của hành động kéo dài suốt nhiều năm (for many years) từ quá khứ đến hiện tại."
      },
      {
        id: "ex3-gram2",
        type: "multiple-choice",
        question: "Chia động từ: ______ (you / book) an appointment with the doctor?",
        options: ["Have you booked", "Have you been booking", "Did you book", "Do you book"],
        correctAnswer: "Have you booked",
        explanation: "Hỏi về kết quả xem hành động đã hoàn tất hay chưa (con đã đặt lịch hẹn bác sĩ chưa) nên dùng Hiện tại hoàn thành."
      },
      {
        id: "ex3-gram3",
        type: "multiple-choice",
        question: "Chia động từ: The old man ______ (not catch) a cold since he was young.",
        options: ["has not caught", "has not been catching", "didn't catch", "doesn't catch"],
        correctAnswer: "has not caught",
        explanation: "Hành động 'catch a cold' (bị cảm) là hành động nhất thời, không thể kéo dài liên tục, do đó dùng Hiện tại hoàn thành ở thể phủ định."
      },
      {
        id: "ex3-gram4",
        type: "multiple-choice",
        question: "Chia động từ: Why ______ (you / sneeze) for the last hour? Do you have an allergy?",
        options: ["have you been sneezing", "have you sneezed", "are you sneezing", "did you sneeze"],
        correctAnswer: "have you been sneezing",
        explanation: "Diễn tả hành động hắt hơi diễn ra liên tục, kéo dài suốt một tiếng qua (for the last hour) và hiện tại vẫn tiếp tục."
      },
      {
        id: "ex3-gram5",
        type: "multiple-choice",
        question: "Chia động từ: The Mediterranean diet ______ (become) very popular in the last decade.",
        options: ["has become", "has been becoming", "became", "becomes"],
        correctAnswer: "has become",
        explanation: "'Become' là động từ chuyển đổi trạng thái, dùng Hiện tại hoàn thành để nhấn mạnh kết quả hiện tại."
      },
      {
        id: "ex3-gram6",
        type: "multiple-choice",
        question: "Chia động từ: The doctors at this hospital ______ (develop) new treatments for cancer since 2004.",
        options: ["have been developing", "have developed", "are developing", "developed"],
        correctAnswer: "have been developing",
        explanation: "Nhấn mạnh quá trình nghiên cứu và phát triển liên tục không ngừng từ mốc 2004 đến nay (since 2004)."
      },
      {
        id: "ex3-gram7",
        type: "multiple-choice",
        question: "Chia động từ: Tess ______ (break) her arm and she needs to go to hospital!",
        options: ["has broken", "has been breaking", "broke", "breaks"],
        correctAnswer: "has broken",
        explanation: "Hành động gãy tay xảy ra đột ngột và để lại kết quả rõ rệt ở hiện tại (phải đi viện ngay)."
      },
      {
        id: "ex3-gram8",
        type: "multiple-choice",
        question: "Chia động từ: How many times ______ (I / tell) you not to spend so much time on your mobile?",
        options: ["have I told", "have I been telling", "did I tell", "do I tell"],
        correctAnswer: "have I told",
        explanation: "Hỏi về số lần thực hiện hành động ('How many times') luôn dùng thì Hiện tại hoàn thành."
      },

      // Time words: already, for, lately, since, still, yet
      {
        id: "ex3-time1",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: He's been walking on crutches ______ the accident.",
        options: ["since", "for", "lately", "already"],
        correctAnswer: "since",
        explanation: "'The accident' (vụ tai nạn) là một mốc thời gian cụ thể trong quá khứ nên đi với 'since'."
      },
      {
        id: "ex3-time2",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: She's been training with weights ______ a month.",
        options: ["for", "since", "yet", "still"],
        correctAnswer: "for",
        explanation: "'A month' là một khoảng thời gian dài nên đi với 'for'."
      },
      {
        id: "ex3-time3",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: Tom's ______ had his operation.",
        options: ["already", "yet", "still", "since"],
        correctAnswer: "already",
        explanation: "'Already' (đã... rồi) đứng giữa trợ động từ has ('s) và V3 để chỉ việc đã hoàn tất."
      },
      {
        id: "ex3-time4",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: I haven't been cycling as much as usual ______.",
        options: ["lately", "already", "still", "yet"],
        correctAnswer: "lately",
        explanation: "'Lately' (dạo gần đây) đứng cuối câu phủ định của thì Hiện tại hoàn thành."
      },
      {
        id: "ex3-time5",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: Has the doctor examined the patient ______?",
        options: ["yet", "already", "still", "since"],
        correctAnswer: "yet",
        explanation: "'Yet' đứng cuối câu hỏi để hỏi xem một sự việc đã được hoàn thành hay chưa."
      },
      {
        id: "ex3-time6",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: He ______ hasn't made an appointment with the optician.",
        options: ["still", "yet", "already", "for"],
        correctAnswer: "still",
        explanation: "'Still' đứng trước trợ động từ dạng phủ định ('hasn't') để chỉ sự việc vẫn chưa xảy ra dù đã mong đợi."
      },

      // Countable vs Uncountable Nouns
      {
        id: "ex3-count1",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: You should drink plenty of ______ every day.",
        options: ["water", "waters"],
        correctAnswer: "water",
        explanation: "'Water' (nước) là danh từ không đếm được nên không dùng số nhiều."
      },
      {
        id: "ex3-count2",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: The news ______ very encouraging.",
        options: ["is", "are"],
        correctAnswer: "is",
        explanation: "'News' (tin tức) là danh từ không đếm được đặc biệt có đuôi s, luôn đi với động từ số ít 'is'."
      },
      {
        id: "ex3-count3",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: If you're feeling dizzy, go outside for ______ fresh air.",
        options: ["some", "a few"],
        correctAnswer: "some",
        explanation: "'Air' (không khí) là danh từ không đếm được nên không thể đi với 'a few'."
      },
      {
        id: "ex3-count4",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: We had some memorable ______ during our trip.",
        options: ["experiences", "experience"],
        correctAnswer: "experiences",
        explanation: "Khi nói về các trải nghiệm cụ thể hoặc kỷ niệm chuyến đi, 'experience' là danh từ đếm được nên dùng dạng số nhiều."
      },
      {
        id: "ex3-count5",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Children and old people should stay inside in ______ cold weather.",
        options: ["- (không dùng mạo từ)", "a"],
        correctAnswer: "- (không dùng mạo từ)",
        explanation: "'Weather' (thời tiết) là danh từ không đếm được nên không dùng mạo từ 'a' đứng trước."
      },
      {
        id: "ex3-count6",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: People of all ages should take regular ______ to keep fit.",
        options: ["exercise", "exercises"],
        correctAnswer: "exercise",
        explanation: "Cụm từ cố định 'take exercise' nghĩa là tập thể dục thể thao chung chung (không đếm được)."
      },
      {
        id: "ex3-count7",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: I think a box of ______ is a great present.",
        options: ["chocolates", "chocolate"],
        correctAnswer: "chocolates",
        explanation: "'A box of chocolates' nghĩa là một hộp kẹo sô-cô-la nhiều viên nhỏ đếm được, phân biệt với chất sô-cô-la nguyên liệu không đếm được."
      },
      {
        id: "ex3-count8",
        type: "multiple-choice",
        question: "Chọn đáp án đúng: Containers made of ______ shouldn't be used for food.",
        options: ["plastic", "plastics"],
        correctAnswer: "plastic",
        explanation: "Khi nói về chất liệu nhựa, 'plastic' là danh từ không đếm được số ít."
      },

      // Quantifiers
      {
        id: "ex3-quant2",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: You don't need ______ money to stay healthy and fit.",
        options: ["much", "many", "a few", "a little"],
        correctAnswer: "much",
        explanation: "'Money' là danh từ không đếm được, trong câu phủ định dùng 'much'."
      },
      {
        id: "ex3-quant3",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: The patient was given ______ injection for the pain.",
        options: ["an", "a", "some", "any"],
        correctAnswer: "an",
        explanation: "'Injection' (mũi tiêm) là danh từ đếm được số ít bắt đầu bằng nguyên âm 'i' nên dùng 'an'."
      },
      {
        id: "ex3-quant4",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: ______ sugar won't harm you, but a lot can cause dental problems.",
        options: ["A little", "A few", "Many", "Much"],
        correctAnswer: "A little",
        explanation: "'Sugar' (đường) là danh từ không đếm được, dùng 'a little' để chỉ một lượng nhỏ vừa đủ."
      },
      {
        id: "ex3-quant5",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: I'd like ______ cheese in my sandwich.",
        options: ["a slice of", "a few", "many", "an"],
        correctAnswer: "a slice of",
        explanation: "'Cheese' (phô-mai) là danh từ không đếm được, ta dùng từ định lượng 'a slice of' (một lát phô-mai)."
      },
      {
        id: "ex3-quant6",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: There aren't ______ calories in this cereal bar.",
        options: ["many", "much", "a little", "piece of"],
        correctAnswer: "many",
        explanation: "'Calories' là danh từ đếm được số nhiều, dùng 'many' trong câu phủ định."
      },
      {
        id: "ex3-quant7",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: We need ______ soap in the bathroom.",
        options: ["a bar of", "a little", "many", "much"],
        correctAnswer: "a bar of",
        explanation: "'Soap' (xà phòng) đo bằng bánh/bánh xà phòng nên dùng 'a bar of'."
      },
      {
        id: "ex3-quant8",
        type: "multiple-choice",
        question: "Chọn từ điền vào chỗ trống: My grandma gave me a very good ______ advice that I have followed all my life.",
        options: ["piece of", "a few", "an", "bar of"],
        correctAnswer: "piece of",
        explanation: "'Advice' (lời khuyên) không đếm được nên lượng hóa bằng cụm 'a piece of advice'."
      },

      // Prepositions
      {
        id: "ex3-prep1",
        type: "multiple-choice",
        question: "Điền giới từ: If you consume too many calories, you are at risk ______ becoming overweight.",
        options: ["of", "against", "to", "over"],
        correctAnswer: "of",
        explanation: "Cấu trúc cố định 'at risk of something/doing something' (có nguy cơ bị làm sao)."
      },
      {
        id: "ex3-prep2",
        type: "multiple-choice",
        question: "Điền giới từ: Penny needs to work ______ her fitness if she wants to run a marathon.",
        options: ["on", "of", "to", "against"],
        correctAnswer: "on",
        explanation: "Cụm động từ 'work on something' nghĩa là cải thiện, rèn luyện cái gì."
      },
      {
        id: "ex3-prep3",
        type: "multiple-choice",
        question: "Điền giới từ: Food that is high in cholesterol can contribute ______ heart disease.",
        options: ["to", "on", "of", "against"],
        correctAnswer: "to",
        explanation: "Cụm động từ 'contribute to something' (góp phần dẫn đến, gây ra điều gì)."
      },
      {
        id: "ex3-prep4",
        type: "multiple-choice",
        question: "Điền giới từ: Eve's personal trainer told her to focus ______ strength-building exercises for now.",
        options: ["on", "of", "to", "over"],
        correctAnswer: "on",
        explanation: "Cụm động từ 'focus on something' (tập trung vào cái gì)."
      },
      {
        id: "ex3-prep5",
        type: "multiple-choice",
        question: "Điền giới từ: If you want to get in shape, why not become a member ______ a gym?",
        options: ["of", "on", "to", "against"],
        correctAnswer: "of",
        explanation: "Cấu trúc 'a member of a gym' (thành viên của phòng tập gym)."
      },
      {
        id: "ex3-prep6",
        type: "multiple-choice",
        question: "Điền giới từ: All children should be vaccinated ______ diseases.",
        options: ["against", "of", "on", "to"],
        correctAnswer: "against",
        explanation: "Cụm động từ 'vaccinate against something' (tiêm vắc-xin phòng ngừa cái gì)."
      },
      {
        id: "ex3-prep7",
        type: "multiple-choice",
        question: "Điền giới từ: If you eat well and look after yourself, you could live to ______ 100 years old!",
        options: ["over", "of", "on", "to"],
        correctAnswer: "over",
        explanation: "Dùng giới từ 'over' để biểu thị số lượng lớn hơn ('live to over 100' tức sống thọ hơn 100 tuổi)."
      },
      {
        id: "ex3-prep8",
        type: "multiple-choice",
        question: "Điền giới từ: Your chances of success in the race depend ______ how hard you train.",
        options: ["on", "of", "to", "against"],
        correctAnswer: "on",
        explanation: "Cụm động từ 'depend on something/someone' (phụ thuộc vào cái gì/ai)."
      },

      // Workbook Page 1: Verb Collocations
      {
        id: "ex3-wb1-a1",
        type: "multiple-choice",
        question: "Điền động từ đúng: Albert is very unhealthy and needs to ______ weight.",
        options: ["lose", "twist", "have", "examine"],
        correctAnswer: "lose",
        explanation: "Cụm từ 'lose weight' có nghĩa là giảm cân."
      },
      {
        id: "ex3-wb1-a2",
        type: "multiple-choice",
        question: "Điền động từ đúng: Samantha ______ her ankle while she was playing tennis.",
        options: ["twisted", "lost", "treated", "prescribed"],
        correctAnswer: "twisted",
        explanation: "Cụm từ 'twist one's ankle' có nghĩa là bị bong gân/trẹo cổ chân."
      },
      {
        id: "ex3-wb1-a3",
        type: "multiple-choice",
        question: "Điền động từ đúng: You may have to ______ an X-ray to see if the bone is broken.",
        options: ["have", "make", "take", "do"],
        correctAnswer: "have",
        explanation: "Cụm từ 'have an X-ray' có nghĩa là chụp phim X-quang."
      },
      {
        id: "ex3-wb1-a4",
        type: "multiple-choice",
        question: "Điền động từ đúng: You can ______ some illnesses with natural remedies such as herbs.",
        options: ["treat", "forbid", "prescribe", "recover"],
        correctAnswer: "treat",
        explanation: "Cụm từ 'treat an illness' có nghĩa là điều trị bệnh trạng bằng các biện pháp chữa trị."
      },
      {
        id: "ex3-wb1-a5",
        type: "multiple-choice",
        question: "Điền động từ đúng: Mary is still ______ from her cold; even after two weeks.",
        options: ["recovering", "treating", "examining", "forbidding"],
        correctAnswer: "recovering",
        explanation: "Cấu trúc 'recover from something' có nghĩa là bình phục/hồi phục khỏi bệnh."
      },
      {
        id: "ex3-wb1-a6",
        type: "multiple-choice",
        question: "Điền động từ đúng: The doctor decided to ______ antibiotics for my chest infection.",
        options: ["prescribe", "examine", "forbid", "twist"],
        correctAnswer: "prescribe",
        explanation: "Cụm từ 'prescribe antibiotics' có nghĩa là kê đơn thuốc kháng sinh."
      },
      {
        id: "ex3-wb1-a7",
        type: "multiple-choice",
        question: "Điền động từ đúng: The law ______ smoking anywhere in the hospital.",
        options: ["forbids", "prescribes", "examines", "treats"],
        correctAnswer: "forbids",
        explanation: "Động từ 'forbid' có nghĩa là cấm/ngăn cấm (Luật pháp cấm hút thuốc)."
      },
      {
        id: "ex3-wb1-a8",
        type: "multiple-choice",
        question: "Điền động từ đúng: The nurse will ______ me today, but I can't start the treatment until next week.",
        options: ["examine", "forbid", "recover", "twist"],
        correctAnswer: "examine",
        explanation: "Động từ 'examine' trong y khoa có nghĩa là thăm khám/kiểm tra sức khỏe bệnh nhân."
      },

      // Workbook Page 1: Sentence Completions with Given Words
      {
        id: "ex3-wb1-b1",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: The ______ was in the ______ talking to his patient.",
        options: ["surgeon / ward", "ward / surgeon", "doctor / prescription", "patient / operation"],
        correctAnswer: "surgeon / ward",
        explanation: "'Surgeon' (bác sĩ phẫu thuật) ở trong 'ward' (phòng bệnh) để nói chuyện với bệnh nhân của mình."
      },
      {
        id: "ex3-wb1-b2",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: Fresh food is high in ______ and usually contains no ______.",
        options: ["vitamins / additives", "additives / vitamins", "proteins / minerals", "minerals / proteins"],
        correctAnswer: "vitamins / additives",
        explanation: "Thực phẩm tươi có hàm lượng vitamin ('vitamins') cao và thường không chứa chất phụ gia hóa học ('additives')."
      },
      {
        id: "ex3-wb1-b3",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: Before the ______, I was given an ______.",
        options: ["operation / injection", "injection / operation", "prescription / tablet", "tablet / prescription"],
        correctAnswer: "operation / injection",
        explanation: "Trước ca phẫu thuật ('operation'), tôi đã được tiêm một mũi thuốc giảm đau/gây tê ('injection')."
      },
      {
        id: "ex3-wb1-b4",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: The ______ checked my eyes and then the ______ gave me an eating plan.",
        options: ["optician / dietician", "dietician / optician", "surgeon / trainer", "trainer / surgeon"],
        correctAnswer: "optician / dietician",
        explanation: "'Optician' (chuyên viên khúc xạ/đo mắt kính) kiểm tra mắt tôi, và sau đó 'dietician' (chuyên gia dinh dưỡng) lên thực đơn ăn uống cho tôi."
      },
      {
        id: "ex3-wb1-b5",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: After the accident, Toby had a ______ around his head and had to walk with a ______.",
        options: ["bandage / crutch", "crutch / bandage", "tablet / bandage", "bandage / tablet"],
        correctAnswer: "bandage / crutch",
        explanation: "Toby quấn một chiếc băng gạc ('bandage') quanh đầu và phải đi lại bằng cặp nạng ('crutch')."
      },
      {
        id: "ex3-wb1-b6",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: ______ helps to relax the mind, while ______ is very good for improving fitness.",
        options: ["meditation / gymnastics", "gymnastics / meditation", "yoga / cycling", "cycling / yoga"],
        correctAnswer: "meditation / gymnastics",
        explanation: "Thiền định ('meditation') giúp thư giãn tinh thần, trong khi môn thể dục dụng cụ ('gymnastics') rất tốt để nâng cao thể chất."
      },
      {
        id: "ex3-wb1-b7",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: The pharmacist couldn't read the doctor's writing on the ______ for my ______.",
        options: ["prescription / medication", "medication / prescription", "remedy / tablet", "tablet / remedy"],
        correctAnswer: "prescription / medication",
        explanation: "Dược sĩ không thể đọc được chữ viết của bác sĩ trên đơn thuốc ('prescription') kê dược phẩm điều trị ('medication') của tôi."
      },
      {
        id: "ex3-wb1-b8",
        type: "multiple-choice",
        question: "Chọn cặp từ phù hợp: My homemade flu ______ works well, but my daughter says I should have a ______ to protect myself in the future.",
        options: ["remedy / vaccination", "vaccination / remedy", "injection / operation", "operation / injection"],
        correctAnswer: "remedy / vaccination",
        explanation: "Phương thuốc chữa cúm tự chế tại nhà ('remedy') hiệu quả tốt, nhưng con gái khuyên tôi nên tiêm chủng vắc-xin ngừa cúm ('vaccination') để tự bảo vệ trong tương lai."
      },

      // Workbook Page 2: Present Perfect Simple & Present Perfect Continuous
      {
        id: "ex3-wb2-a1",
        type: "multiple-choice",
        question: "Chia động từ: I ______ all morning, and I ______ over one hundred pages so far! (read)",
        options: [
          "have been reading / have read",
          "have read / have been reading",
          "am reading / read",
          "have been reading / read"
        ],
        correctAnswer: "have been reading / have read",
        explanation: "Hành động đọc sách kéo dài cả buổi sáng ('all morning') dùng thì Hiện tại hoàn thành tiếp diễn. Số lượng trang sách đọc được đến nay ('so far') dùng thì Hiện tại hoàn thành."
      },
      {
        id: "ex3-wb2-a2",
        type: "multiple-choice",
        question: "Chia động từ: Sheila ______ nearly 20 kms because she ______ for hours. (walk)",
        options: [
          "has walked / has been walking",
          "has been walking / has walked",
          "walked / is walking",
          "has walked / walked"
        ],
        correctAnswer: "has walked / has been walking",
        explanation: "Khoảng cách đi được nhấn mạnh kết quả ('nearly 20 kms') chia Hiện tại hoàn thành, còn lý do giải thích kéo dài hàng giờ ('for hours') chia Hiện tại hoàn thành tiếp diễn."
      },
      {
        id: "ex3-wb2-a3",
        type: "multiple-choice",
        question: "Chia động từ: Francis ______ TV since nine o'clock this morning; he ______ four films. (watch)",
        options: [
          "has been watching / has watched",
          "has watched / has been watching",
          "is watching / watched",
          "watches / watch"
        ],
        correctAnswer: "has been watching / has watched",
        explanation: "Hành động xem tivi kéo dài liên tục từ sáng đến nay chia Hiện tại hoàn thành tiếp diễn, còn số lượng phim đã xem xong ('four films') chia Hiện tại hoàn thành."
      },
      {
        id: "ex3-wb2-a4",
        type: "multiple-choice",
        question: "Chia động từ: Betty ______ to the gym for a few months; in fact, she ______ there now. (go)",
        options: [
          "has been going / has gone",
          "has gone / has been going",
          "is going / goes",
          "has been going / goes"
        ],
        correctAnswer: "has been going / has gone",
        explanation: "Quá trình đi tập gym kéo dài vài tháng nay dùng Hiện tại hoàn thành tiếp diễn. Việc đã đến đó rồi và hiện vẫn đang ở đó dùng Hiện tại hoàn thành 'has gone'."
      },
      {
        id: "ex3-wb2-a5",
        type: "multiple-choice",
        question: "Chia động từ: Gordon ______ his new cooking show for weeks; he ______ five episodes. (film)",
        options: [
          "has been filming / has already filmed",
          "has already filmed / has been filming",
          "is filming / already filmed",
          "films / will film"
        ],
        correctAnswer: "has been filming / has already filmed",
        explanation: "Quá trình quay phim kéo dài nhiều tuần ('for weeks') chia Hiện tại hoàn thành tiếp diễn, kết quả đã quay xong 5 tập ('five episodes already') chia Hiện tại hoàn thành."
      },
      {
        id: "ex3-wb2-a6",
        type: "multiple-choice",
        question: "Chia động từ: The children ______ the entire cake; they ______ very unhealthily lately. (eat)",
        options: [
          "have eaten / have been eating",
          "have been eating / have eaten",
          "ate / are eating",
          "eat / ate"
        ],
        correctAnswer: "have eaten / have been eating",
        explanation: "Nhấn mạnh kết quả ăn sạch cả chiếc bánh ('the entire cake') chia Hiện tại hoàn thành, thói quen ăn uống không tốt gần đây ('lately') chia Hiện tại hoàn thành tiếp diễn."
      },
      {
        id: "ex3-wb2-a7",
        type: "multiple-choice",
        question: "Chia động từ: I ______ to make this recipe four times; in fact, I ______ all week, but it's still terrible! (try)",
        options: [
          "have tried / have been trying",
          "have been trying / have tried",
          "tried / am trying",
          "try / tried"
        ],
        correctAnswer: "have tried / have been trying",
        explanation: "Số lần thử làm công thức này ('four times') chia Hiện tại hoàn thành, còn hành động nỗ lực kéo dài suốt cả tuần ('all week') chia Hiện tại hoàn thành tiếp diễn."
      },
      {
        id: "ex3-wb2-a8",
        type: "multiple-choice",
        question: "Chia động từ: Ian ______ since he was six, and he ______ in three Olympic Games. (swim)",
        options: [
          "has been swimming / has swum",
          "has swum / has been swimming",
          "is swimming / swam",
          "swims / has been swimming"
        ],
        correctAnswer: "has been swimming / has swum",
        explanation: "Hoạt động bơi lội rèn luyện từ năm 6 tuổi đến nay chia Hiện tại hoàn thành tiếp diễn, còn số lần/thành tựu tham gia Olympic ('in three Olympic Games') chia Hiện tại hoàn thành."
      },

      // Workbook Page 2: Grammar Word Completions
      {
        id: "ex3-wb2-b1",
        type: "multiple-choice",
        question: "Điền trạng từ đúng: Have you been going to the gym ______ two months?",
        options: ["for", "since", "yet", "already"],
        correctAnswer: "for",
        explanation: "Đi sau là một khoảng thời gian dài ('two months') nên ta dùng giới từ 'for'."
      },
      {
        id: "ex3-wb2-b2",
        type: "multiple-choice",
        question: "Điền trạng từ đúng: Bruce has been watching his weight ______ August.",
        options: ["since", "for", "lately", "still"],
        correctAnswer: "since",
        explanation: "Tháng Tám ('August') là một mốc thời gian cụ thể trong quá khứ nên đi kèm với 'since'."
      },
      {
        id: "ex3-wb2-b3",
        type: "multiple-choice",
        question: "Điền trạng từ đúng: Timmy and I haven't been eating much chocolate ______.",
        options: ["lately", "already", "still", "since"],
        correctAnswer: "lately",
        explanation: "'Lately' (gần đây) thường đứng cuối câu phủ định của thì Hiện tại hoàn thành."
      },
      {
        id: "ex3-wb2-b4",
        type: "multiple-choice",
        question: "Điền trạng từ đúng: Daisy has ______ finished her project on healthy food.",
        options: ["already", "yet", "still", "for"],
        correctAnswer: "already",
        explanation: "'Already' (đã... rồi) đứng giữa trợ động từ và động từ chính biểu thị hành động đã hoàn tất sớm."
      },
      {
        id: "ex3-wb2-b5",
        type: "multiple-choice",
        question: "Điền trạng từ đúng: Winnie hasn't seen the doctor about her cough ______.",
        options: ["yet", "already", "still", "since"],
        correctAnswer: "yet",
        explanation: "'Yet' đứng cuối câu phủ định diễn tả việc chưa xảy ra tính đến thời điểm hiện tại."
      },
      {
        id: "ex3-wb2-b6",
        type: "multiple-choice",
        question: "Điền trạng từ đúng: We ______ haven't had our vaccinations for our trip!",
        options: ["still", "yet", "already", "for"],
        correctAnswer: "still",
        explanation: "'Still' (vẫn chưa) đứng trước trợ động từ phủ định 'haven't' để diễn tả sự chậm trễ đầy mong đợi."
      },

      // Workbook Page 3: Countable & Uncountable Nouns Error Correction
      {
        id: "ex3-wb3-a1",
        type: "multiple-choice",
        question: "Sửa lỗi sai: Do you have any informations on local dairy farms?",
        options: [
          "informations -> information",
          "informations -> details",
          "dairy -> daily",
          "any -> some"
        ],
        correctAnswer: "informations -> information",
        explanation: "'Information' là danh từ không đếm được, không thêm s."
      },
      {
        id: "ex3-wb3-a2",
        type: "multiple-choice",
        question: "Sửa lỗi sai: We haven't got many money left to buy new gym equipment.",
        options: [
          "many -> much",
          "equipment -> equipments",
          "got -> get",
          "new -> news"
        ],
        correctAnswer: "many -> much",
        explanation: "'Money' (tiền) là danh từ không đếm được, nên trong câu phủ định dùng 'much' thay vì 'many'."
      },
      {
        id: "ex3-wb3-a3",
        type: "multiple-choice",
        question: "Sửa lỗi sai: There is a few medicine in this bottle.",
        options: [
          "a few -> a little",
          "is -> are",
          "medicine -> medicines",
          "this -> these"
        ],
        correctAnswer: "a few -> a little",
        explanation: "'Medicine' (thuốc uống dạng nước) ở đây không đếm được, nên phải sửa 'a few' thành 'a little' (một chút)."
      },
      {
        id: "ex3-wb3-a4",
        type: "multiple-choice",
        question: "Sửa lỗi sai: We really ought to get new furnitures for the clinic.",
        options: [
          "furnitures -> furniture",
          "new -> news",
          "get -> have",
          "to -> for"
        ],
        correctAnswer: "furnitures -> furniture",
        explanation: "'Furniture' (đồ nội thất) là danh từ không đếm được, không bao giờ ở dạng số nhiều 'furnitures'."
      },
      {
        id: "ex3-wb3-a5",
        type: "multiple-choice",
        question: "Sửa lỗi sai: How many flour do I need for this cake recipe?",
        options: [
          "many -> much",
          "flour -> flours",
          "do -> does",
          "for -> to"
        ],
        correctAnswer: "many -> much",
        explanation: "'Flour' (bột mì) là danh từ không đếm được, câu hỏi lượng bao nhiêu phải dùng 'How much'."
      },
      {
        id: "ex3-wb3-a6",
        type: "multiple-choice",
        question: "Sửa lỗi sai: Thanks to healthy eating, my hair are really shiny now.",
        options: [
          "are -> is",
          "eating -> eat",
          "hair -> hairs",
          "now -> then"
        ],
        correctAnswer: "are -> is",
        explanation: "Khi nói về mái tóc nói chung, 'hair' là danh từ không đếm được số ít, đi kèm động từ số ít 'is'."
      },
      {
        id: "ex3-wb3-a7",
        type: "multiple-choice",
        question: "Sửa lỗi sai: I know you like lemonade, but you should only drink a few.",
        options: [
          "a few -> a little",
          "drink -> drinking",
          "lemonade -> lemonades",
          "like -> liking"
        ],
        correctAnswer: "a few -> a little",
        explanation: "'Lemonade' (nước chanh) là chất lỏng, không đếm được, nên chỉ uống 'a little' chứ không dùng 'a few'."
      },
      {
        id: "ex3-wb3-a8",
        type: "multiple-choice",
        question: "Sửa lỗi sai: The doctor's advice have been very helpful.",
        options: [
          "have -> has",
          "advice -> advices",
          "doctor's -> doctors",
          "very -> much"
        ],
        correctAnswer: "have -> has",
        explanation: "'Advice' (lời khuyên) là danh từ không đếm được số ít, nên động từ phải chia số ít là 'has'."
      },

      // Workbook Page 3: Pancake Recipe Fill-In-The-Blanks
      {
        id: "ex3-wb3-b1",
        type: "multiple-choice",
        question: "Chọn từ đúng: (1) ______ people enjoy pancakes for breakfast.",
        options: ["Many", "Much", "A little", "A slice of"],
        correctAnswer: "Many",
        explanation: "'People' là danh từ đếm được số nhiều nên dùng 'Many'."
      },
      {
        id: "ex3-wb3-b2",
        type: "multiple-choice",
        question: "Chọn từ đúng: They are very filling and give you (2) ______ energy.",
        options: ["lots of", "many", "a few", "a slice"],
        correctAnswer: "lots of",
        explanation: "'Energy' là danh từ không đếm được. 'Lots of' dùng được cho cả danh từ đếm được và không đếm được."
      },
      {
        id: "ex3-wb3-b3",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...you have to add a (3) ______ of cottage cheese to the mixture...",
        options: ["lot", "many", "few", "slice"],
        correctAnswer: "lot",
        explanation: "Cấu trúc cố định 'a lot of' (rất nhiều)."
      },
      {
        id: "ex3-wb3-b4",
        type: "multiple-choice",
        question: "Chọn từ đúng: You only need cottage cheese, (4) ______ eggs...",
        options: ["a few", "a little", "much", "a bar of"],
        correctAnswer: "a few",
        explanation: "'Eggs' là danh từ đếm được số nhiều nên dùng 'a few'."
      },
      {
        id: "ex3-wb3-b5",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...some milk, a bit of oil, a (5) ______ flour...",
        options: ["little", "few", "many", "slice of"],
        correctAnswer: "little",
        explanation: "'Flour' là danh từ không đếm được nên dùng 'a little'."
      },
      {
        id: "ex3-wb3-b6",
        type: "multiple-choice",
        question: "Chọn từ đúng: ...and then pour a (6) ______ of the mixture at a time into a pan and cook.",
        options: ["little", "few", "many", "bar"],
        correctAnswer: "little",
        explanation: "Hỗn hợp bột lỏng ('mixture') không đếm được nên dùng 'a little'."
      },
      {
        id: "ex3-wb3-b7",
        type: "multiple-choice",
        question: "Chọn từ đúng: You can serve the pancakes with a (7) ______ fresh strawberries...",
        options: ["few", "little", "much", "slice"],
        correctAnswer: "few",
        explanation: "'Strawberries' là danh từ đếm được số nhiều nên dùng 'a few'."
      },
      {
        id: "ex3-wb3-b8",
        type: "multiple-choice",
        question: "Chọn từ đúng: They're certainly better than a boring (8) ______ of toast for breakfast!",
        options: ["slice", "bar", "little", "few"],
        correctAnswer: "slice",
        explanation: "Cụm danh từ định lượng 'a slice of toast' (một lát bánh mì gối nướng)."
      }
    ]
  },
  {
    id: "unit-4",
    number: 4,
    name: "Technological Marvels",
    title: "Kỳ Quan Công Nghệ",
    description: "Thì Tương lai (will, be going to, tiếp diễn, hoàn thành) & Liên từ thời gian.",
    intro: "Chào mừng con đến với kỷ nguyên robot thông minh! Gà Mẹ sẽ dạy con cách lên kế hoạch và dự báo tương lai cực chuẩn nhé!",
    theoryParts: [
      {
        subtitle: "1. Các Thì Tương Lai (Future Forms)",
        content: `• **Will:** Quyết định tức thì, dự đoán chủ quan, hứa hẹn, đề nghị.\n• **Be going to:** Kế hoạch có trước, dự đoán dựa trên bằng chứng hiện tại.\n• **Tương lai Tiếp diễn (Future Continuous):** Hành động đang xảy ra tại thời điểm cụ thể ở tương lai.\n• **Tương lai Hoàn thành (Future Perfect):** Hành động hoàn tất trước một mốc thời gian tương lai (thường có 'by' / 'by the time').`,
        formula: `**TIẾP DIỄN:** S + will be + V-ing\n**HOÀN THÀNH:** S + will have + V3/ed`,
        examples: [
          { english: "At 10:00 tomorrow, we will be flying to Paris.", vietnamese: "Vào 10 giờ sáng mai, chúng tớ sẽ đang trên chuyến bay tới Paris." },
          { english: "By next week, I will have finished my science project.", vietnamese: "Trước tuần sau, tớ sẽ hoàn thành xong dự án khoa học." }
        ],
        chickenTip: "Hễ con thấy từ 'By' hoặc 'By the time...' ở tương lai thì ưu tiên chia Tương lai Hoàn thành (will have V3) nhé!"
      },
      {
        subtitle: "2. Liên Từ Chỉ Thời Gian Ở Tương Lai (Time Expressions)",
        content: `• Khi nói về tương lai, mệnh đề đứng sau liên từ chỉ thời gian (**when, as soon as, before, after, until, by the time...**) phải chia ở **thì Hiện tại Đơn** (hoặc Hiện tại Hoàn thành), KHÔNG được dùng 'will'.`,
        formula: `Mệnh đề chính (Tương lai) + Liên từ + S + V(s/es) (Hiện tại đơn)`,
        examples: [
          { english: "I will call you as soon as I arrive at the hotel.", vietnamese: "Tớ sẽ gọi cho cậu ngay khi tớ tới khách sạn (arrive chia hiện tại đơn)." }
        ],
        chickenTip: "Tuyệt đối không dùng WILL ngay sau các liên từ thời gian như when, until, as soon as con nha!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 4</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Future Tenses -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">🔮 Các Thì Tương Lai (Future Tenses)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Tương lai tiếp diễn (will be + V-ing):</strong> Diễn tả hành động đang diễn ra tại thời điểm xác định trong tương lai.</li>
                  <li><strong>Tương lai hoàn thành (will have + V3/ed):</strong> Diễn tả hành động sẽ hoàn tất trước một thời điểm hoặc một hành động khác trong tương lai (thường có <em>by, by the time, by then</em>).</li>
                </ul>
              </div>

              <!-- Time Conjunctions -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">⏳ Liên Từ Chỉ Thời Gian (Time Conjunctions)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li>Sau các liên từ chỉ thời gian (<em>when, as soon as, until, before, after</em>), dùng thì <strong>Hiện tại đơn</strong> để diễn tả tương lai.</li>
                  <li><strong>Tuyệt đối không</strong> dùng <em>will</em> ngay sau liên từ chỉ thời gian.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Technology & Inventions -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">⚙️ Công Nghệ & Sáng Chế (Technology)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Innovation:</strong> Sự đổi mới, sáng kiến cải tiến đột phá.</li>
                  <li><strong>Invention / Development:</strong> Phát minh độc quyền / Sự phát triển tiến trình.</li>
                  <li><strong>Process / Improvement:</strong> Quy trình diễn biến / Sự nâng cấp cải tiến tốt hơn.</li>
                  <li><strong>Manufacture:</strong> Sản xuất chế tạo quy mô công nghiệp lớn.</li>
                </ul>
              </div>

              <!-- Devices & Appliances -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">📱 Thiết Bị Điện Tử & Gia Dụng (Devices)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Device:</strong> Thiết bị điện tử nhỏ (điện thoại, máy tính bảng).</li>
                  <li><strong>Appliance:</strong> Thiết bị gia dụng lớn trong nhà (tủ lạnh, máy giặt).</li>
                  <li><strong>Portable:</strong> Nhẹ nhàng, gọn, có thể mang đi khắp nơi.</li>
                  <li><strong>As soon as:</strong> Liên từ thời gian - Ngay sau khi (dùng với hiện tại đơn để nói về tương lai).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: [
      { id: "fc4-1", front: "Innovation", back: "Sự đổi mới, sáng kiến cải tiến đột phá", pronunciation: "/ˌɪnəˈveɪʃn/", partOfSpeech: "noun" },
      { id: "fc4-2", front: "Portable", back: "Có thể xách tay, gọn nhẹ, dễ mang theo", pronunciation: "/ˈpɔːtəbl/", partOfSpeech: "adjective" },
      { id: "fc4-3", front: "Device", back: "Thiết bị điện tử nhỏ (điện thoại, máy tính bảng...)", pronunciation: "/dɪˈvaɪs/", partOfSpeech: "noun" },
      { id: "fc4-4", front: "Appliance", back: "Thiết bị gia dụng lớn (máy giặt, tủ lạnh...)", pronunciation: "/əˈplaɪəns/", partOfSpeech: "noun" },
      { id: "fc4-5", front: "As soon as", back: "Ngay sau khi (liên từ chỉ thời gian)", pronunciation: "/əz suːn əz/", partOfSpeech: "phrase" },
      { id: "fc4-6", front: "Invention", back: "Phát minh, sáng chế độc quyền", pronunciation: "/ɪnˈvenʃn/", partOfSpeech: "noun" },
      { id: "fc4-7", front: "Development", back: "Sự phát triển, tiến trình mở rộng", pronunciation: "/dɪˈveləpmənt/", partOfSpeech: "noun" },
      { id: "fc4-8", front: "Process", back: "Quá trình, quy trình diễn biến", pronunciation: "/ˈprəʊses/", partOfSpeech: "noun" },
      { id: "fc4-9", front: "Improvement", back: "Sự cải tiến, nâng cấp tốt hơn", pronunciation: "/ɪmˈpruːvmənt/", partOfSpeech: "noun" },
      { id: "fc4-10", front: "Manufacture", back: "Sản xuất, chế tạo quy mô công nghiệp", pronunciation: "/ˌmænjuˈfæktʃə(r)/", partOfSpeech: "verb" }
    ],
    exercises: unit4Exercises
  },
  {
    id: "unit-5",
    number: 5,
    name: "High-Flyers",
    title: "Những Nhân Tài Vượt Trội",
    description: "Động từ khuyết thiếu (Modals) & Động từ khuyết thiếu hoàn thành (Perfect Modals).",
    intro: "Gặp gỡ những tấm gương thành công, học cách dùng động từ khuyết thiếu để diễn tả khả năng, nghĩa vụ và suy đoán quá khứ cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Động Từ Khuyết Thiếu Cơ Bản (Modals & Semi-modals)",
        content: `• **Can/Could:** Khả năng, sự cho phép.\n• **Must / Have to:** Bắt buộc (Must là chủ quan/quy tắc, Have to là khách quan do hoàn cảnh).\n• **Should / Ought to:** Khuyên bảo, nên làm.\n• **Mustn't:** Cấm đoán. **Don't have to:** Không bắt buộc (không cần làm).`,
        formula: `- S + Modal + V-inf\n- Phủ định: S + Modal + not + V-inf`,
        examples: [
          { english: "You must arrive on time for the exam.", vietnamese: "Con bắt buộc phải đến đúng giờ thi (Quy định bắt buộc)." },
          { english: "You don't have to wear a suit, it's casual.", vietnamese: "Cậu không cần phải mặc vest đâu, đây là bữa tiệc thân mật thôi." }
        ],
        chickenTip: "Đừng nhầm lẫn nhé! 'Mustn't' nghĩa là CẤM LÀM. Còn 'Don't have to' nghĩa là KHÔNG BẮT BUỘC (làm cũng được không làm cũng không sao)."
      },
      {
        subtitle: "2. Động Từ Khuyết Thiếu Hoàn Thành (Perfect Modals)",
        content: `Dùng để suy đoán hoặc thể hiện sự tiếc nuối về những sự việc đã xảy ra trong quá khứ:\n• **Must have + V3/ed:** Chắc hẳn đã xảy ra (suy đoán chắc chắn 90% ở quá khứ).\n• **Should have + V3/ed:** Lẽ ra nên làm gì trong quá khứ (nhưng thực tế đã không làm).\n• **Might/Could have + V3/ed:** Có thể đã xảy ra (suy đoán không chắc chắn lắm).\n• **Can't have + V3/ed:** Chắc chắn đã không xảy ra.`,
        formula: `S + Modal + have + V3/ed`,
        examples: [
          { english: "She got a perfect score! She must have studied very hard.", vietnamese: "Cô ấy đạt điểm tuyệt đối! Chắc hẳn cô ấy đã học hành cực kỳ chăm chỉ." },
          { english: "I failed. I should have listened to my mother.", vietnamese: "Tớ trượt rồi. Lẽ ra tớ nên nghe lời mẹ khuyên." }
        ],
        chickenTip: "'Should have V3' dùng để diễn tả sự hối hận hoặc trách móc về một việc lẽ ra nên làm mà đã bỏ lỡ trong quá khứ đó con!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 5</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Present Modals -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">📌 Động Từ Khuyết Thiếu Ở Hiện Tại (Modals)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Must:</strong> Bắt buộc làm gì (nghĩa vụ/quy định).</li>
                  <li><strong>Mustn't:</strong> Không được phép làm (lệnh cấm nghiêm ngặt).</li>
                  <li><strong>Don't have to:</strong> Không bắt buộc phải làm (không cần thiết).</li>
                </ul>
              </div>

              <!-- Past Modals -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">🕰️ Động Từ Khuyết Thiếu Ở Quá Khứ (Perfect Modals)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Must have V3/ed:</strong> Chắc chắn đã xảy ra trong quá khứ (suy đoán logic cao).</li>
                  <li><strong>Should have V3/ed:</strong> Lẽ ra nên làm trong quá khứ nhưng thực tế đã không làm (thể hiện sự nuối tiếc).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Career & Professionals -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">👤 Nghề Nghiệp & Nhân Sự (Careers)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Employee / Employer:</strong> Người làm thuê, nhân viên / Chủ sử dụng lao động.</li>
                  <li><strong>Manager / Assistant:</strong> Người quản lý điều hành / Trợ lý, phụ tá.</li>
                  <li><strong>Ambitious / Qualification:</strong> Nhiều tham vọng hoài bão / Bằng cấp, trình độ chuyên môn.</li>
                  <li><strong>Profession:</strong> Nghề nghiệp đòi hỏi chuyên môn cao.</li>
                  <li><strong>Determine / Obstacle / Achievement:</strong> Quyết định / Trở ngại, vấp ngã / Thành tựu nổi bật.</li>
                </ul>
              </div>

              <!-- Income & Work Shifts -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">💰 Thu Nhập & Sự Nghiệp (Income & Career Shifts)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Salary / Wage:</strong> Lương tháng cố định / Tiền công theo giờ, ngày.</li>
                  <li><strong>Perk / Bonus / Get a promotion:</strong> Đặc quyền ngoài lương / Tiền thưởng nóng / Được thăng chức.</li>
                  <li><strong>Redundant / Fired:</strong> Bị dư thừa giảm biên chế / Bị đuổi việc sa thải.</li>
                  <li><strong>Resign / Retire:</strong> Đơn xin từ chức / Nghỉ hưu khi lớn tuổi.</li>
                </ul>
              </div>

              <!-- Phrasal Verbs & Phrases -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">⚙️ Cụm Động Từ & Thành Ngữ Công Việc (Phrases & Phrasal Verbs)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Burn out / Get ahead / Keep up with:</strong> Kiệt sức quá tải / Tiến bộ vươn lên / Theo kịp giữ vững tốc độ.</li>
                  <li><strong>Take over / Take on / Set up:</strong> Tiếp quản kiểm soát / Tuyển dụng, đảm nhận việc / Thành lập khởi nghiệp.</li>
                  <li><strong>Under pressure / Work long hours:</strong> Chịu áp lực, sức ép lớn / Làm việc nhiều giờ, tăng ca.</li>
                  <li><strong>Run a business / Make a fortune / Earn a living:</strong> Điều hành doanh nghiệp / Kiếm bộn tiền / Kiếm sống mưu sinh.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: [
      { id: "fc5-1", front: "Ambitious", back: "Có tham vọng, hoài bão lớn", pronunciation: "/æmˈbɪʃəs/", partOfSpeech: "adjective" },
      { id: "fc5-2", front: "Qualification", back: "Bằng cấp, trình độ chuyên môn", pronunciation: "/ˌkwɒlɪfɪˈkeɪʃn/", partOfSpeech: "noun" },
      { id: "fc5-3", front: "Employee", back: "Người lao động, nhân viên", pronunciation: "/ɪmˈplɔɪiː/", partOfSpeech: "noun" },
      { id: "fc5-4", front: "Employer", back: "Người sử dụng lao động, chủ doanh nghiệp", pronunciation: "/ɪmˈplɔɪə(r)/", partOfSpeech: "noun" },
      { id: "fc5-5", front: "Profession", back: "Nghề nghiệp đòi hỏi chuyên môn cao", pronunciation: "/prəˈfeʃn/", partOfSpeech: "noun" },
      { id: "fc5-6", front: "Salary", back: "Tiền lương trả định kỳ cố định", pronunciation: "/ˈsæləri/", partOfSpeech: "noun" },
      { id: "fc5-7", front: "Wage", back: "Tiền công trả theo giờ/ngày/tuần", pronunciation: "/weɪdʒ/", partOfSpeech: "noun" },
      { id: "fc5-8", front: "Perk", back: "Đặc quyền, lợi ích bổ sung ngoài lương", pronunciation: "/pɜːk/", partOfSpeech: "noun" },
      { id: "fc5-9", front: "Bonus", back: "Tiền thưởng nóng, thưởng thành tích", pronunciation: "/ˈbəʊnəs/", partOfSpeech: "noun" },
      { id: "fc5-10", front: "Redundant", back: "Dư thừa, bị sa thải do thu hẹp quy mô", pronunciation: "/rɪˈdʌndənt/", partOfSpeech: "adjective" },
      { id: "fc5-11", front: "Resign", back: "Từ chức, xin thôi việc", pronunciation: "/rɪˈzaɪn/", partOfSpeech: "verb" },
      { id: "fc5-12", front: "Retire", back: "Nghỉ hưu, ngừng làm việc khi lớn tuổi", pronunciation: "/rɪˈtaɪə(r)/", partOfSpeech: "verb" },
      { id: "fc5-13", front: "Fired", back: "Bị sa thải, bị đuổi việc do vi phạm", pronunciation: "/ˈfaɪəd/", partOfSpeech: "adjective" },
      { id: "fc5-14", front: "Assistant", back: "Trợ lý, người phụ tá", pronunciation: "/əˈsɪstənt/", partOfSpeech: "noun" },
      { id: "fc5-15", front: "Manager", back: "Người quản lý, trưởng ban", pronunciation: "/ˈmænɪdʒə(r)/", partOfSpeech: "noun" },
      { id: "fc5-16", front: "Burn out", back: "Kiệt sức, mệt lử do làm việc quá tải", pronunciation: "/bɜːn aʊt/", partOfSpeech: "phrase" },
      { id: "fc5-17", front: "Get ahead", back: "Tiến bộ, vượt lên, gặt hái thành công", pronunciation: "/ɡet əˈhed/", partOfSpeech: "phrase" },
      { id: "fc5-18", front: "Keep up with", back: "Theo kịp, giữ vững tốc độ với", pronunciation: "/kiːp ʌp wɪð/", partOfSpeech: "phrase" },
      { id: "fc5-19", front: "Take over", back: "Tiếp quản, nhận quyền kiểm soát", pronunciation: "/teɪk ˈəʊvə(r)/", partOfSpeech: "phrase" },
      { id: "fc5-20", front: "Take on", back: "Tuyển dụng nhân sự; đảm nhận công việc", pronunciation: "/teɪk ɒn/", partOfSpeech: "phrase" },
      { id: "fc5-21", front: "Set up", back: "Thành lập, khởi sự doanh nghiệp", pronunciation: "/set ʌp/", partOfSpeech: "phrase" },
      { id: "fc5-22", front: "Under pressure", back: "Chịu áp lực, sức ép lớn", pronunciation: "/ˈʌndə(r) ˈpreʃə(r)/", partOfSpeech: "phrase" },
      { id: "fc5-23", front: "Run a business", back: "Điều hành, quản lý một doanh nghiệp", pronunciation: "/rʌn ə ˈbɪznəs/", partOfSpeech: "phrase" },
      { id: "fc5-24", front: "Make a fortune", back: "Kiếm bộn tiền, trở nên giàu sụ", pronunciation: "/meɪk ə ˈfɔːtʃuːn/", partOfSpeech: "phrase" },
      { id: "fc5-25", front: "Earn a living", back: "Kiếm tiền sinh sống, mưu sinh", pronunciation: "/ɜːn ə ˈlɪvɪŋ/", partOfSpeech: "phrase" },
      { id: "fc5-26", front: "Work long hours", back: "Làm việc nhiều giờ, làm việc tăng ca", pronunciation: "/wɜːk lɒŋ ˈaʊəz/", partOfSpeech: "phrase" },
      { id: "fc5-27", front: "Get a promotion", back: "Được thăng chức, nâng đỡ vị trí", pronunciation: "/ɡet ə prəˈməʊʃn/", partOfSpeech: "phrase" },
      { id: "fc5-28", front: "Determine", back: "Quyết định, xác định mục tiêu", pronunciation: "/dɪˈtɜːmɪn/", partOfSpeech: "verb" },
      { id: "fc5-29", front: "Obstacle", back: "Trở ngại, chướng ngại vật cản đường", pronunciation: "/ˈɒbstəkl/", partOfSpeech: "noun" },
      { id: "fc5-30", front: "Achievement", back: "Thành tựu, thành tích nổi bật", pronunciation: "/əˈtʃiːvmənt/", partOfSpeech: "noun" }
    ],
    exercises: unit5Exercises
  },
  {
    id: "unit-6",
    number: 6,
    name: "Living History",
    title: "Lịch Sử Sống Động",
    description: "Quá khứ Hoàn thành & Tiếp diễn, Câu hỏi đuôi (Question Tags).",
    intro: "Ngược dòng thời gian về các triều đại cổ xưa để học cách dùng thì Quá khứ Hoàn thành và cách đặt câu hỏi đuôi cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Thì Quá Khứ Hoàn Thành (Past Perfect Simple & Continuous)",
        content: `• **Quá Khứ Hoàn Thành:** Diễn tả hành động xảy ra và hoàn tất TRƯỚC một hành động khác trong quá khứ.\n• **Quá Khứ Hoàn Thành Tiếp Diễn:** Diễn tả hành động xảy ra liên tục kéo dài trước một mốc thời gian hoặc một hành động khác trong quá khứ.`,
        formula: `**QUÁ KHỨ HOÀN THÀNH:** S + had + V3/ed\n**QUÁ KHỨ HOÀN THÀNH TIẾP DIỄN:** S + had + been + V-ing`,
        examples: [
          { english: "When the archaeologists arrived, the tomb robbers had already escaped.", vietnamese: "Khi các nhà khảo cổ đến nơi, những kẻ trộm mộ đã trốn thoát mất rồi (trốn trước - đến sau)." },
          { english: "They had been searching for the lost temple for ten years before they found it.", vietnamese: "Họ đã tìm kiếm ngôi đền bị mất suốt 10 năm trời trước khi họ tìm thấy nó." }
        ],
        chickenTip: "Hành động nào xảy ra trước chia Quá khứ Hoàn thành (had V3), hành động nào xảy ra sau chia Quá khứ Đơn (V2/ed) nha con!"
      },
      {
        subtitle: "2. Câu Hỏi Đuôi (Question Tags)",
        content: `• Dùng để xác nhận thông tin xem có đúng hay không. Mệnh đề chính khẳng định thì đuôi phủ định, mệnh đề chính phủ định thì đuôi khẳng định.\n• **Quy tắc đặc biệt:**\n- I am -> aren't I?\n- Let's -> shall we?\n- Everyone/Someone -> dùng đại từ 'they'\n- Mệnh đề có từ phủ định (never, rarely, barely) -> đuôi khẳng định.`,
        formula: `- S + V, trợ động từ + not + S?\n- S + trợ động từ phủ định, trợ động từ + S?`,
        examples: [
          { english: "You visited the museum yesterday, didn't you?", vietnamese: "Hôm qua cậu đã đi bảo tàng đúng không?" },
          { english: "They had never seen a mummy before, had they?", vietnamese: "Họ chưa bao giờ thấy xác ướp trước đây phải không? (Never mang nghĩa phủ định nên đuôi dùng khẳng định)." }
        ],
        chickenTip: "Cẩn thận với 'never', 'hardly' hay 'rarely' nha! Dù câu không có 'not' nhưng có các từ này thì phần đuôi vẫn phải ở dạng khẳng định đó!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 6</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Past Perfect -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">⏳ Thì Quá Khứ Hoàn Thành (Past Perfect)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Công thức:</strong> S + had + V3/ed.</li>
                  <li><strong>Cách dùng:</strong> Diễn tả một hành động xảy ra trước một thời điểm hoặc trước một hành động khác trong quá khứ.</li>
                  <li>Hành động xảy ra trước dùng <em>Quá khứ hoàn thành</em>, hành động sau dùng <em>Quá khứ đơn</em>.</li>
                </ul>
              </div>

              <!-- Question Tags -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">❓ Câu Hỏi Đuôi (Question Tags)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li>Khẳng định đi với đuôi phủ định; Phủ định đi với đuôi khẳng định.</li>
                  <li><strong>Trường hợp đặc biệt:</strong> <em>I am</em> -> aren't I?, <em>Let's</em> -> shall we?, <em>Everyone/Somebody</em> -> use 'they' in tag.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Success & Fame -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">🏆 Thành Tựu & Sự Nổi Tiếng (Success & Fame)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Accomplished / Celebrated / Renowned:</strong> Tài ba xuất chúng / Lừng danh lừng lẫy / Nổi tiếng có danh tiếng lớn.</li>
                  <li><strong>Infamous:</strong> Tai tiếng, khét tiếng (nổi tiếng xấu).</li>
                  <li><strong>Accomplishment / Goal / Gift:</strong> Thành tựu đạt được / Mục tiêu hướng tới / Tài năng thiên bẩm, năng khiếu.</li>
                  <li><strong>Best-selling / Blockbuster:</strong> Sách bán chạy nhất / Phim bom tấn, sách bán siêu chạy.</li>
                  <li><strong>Failure / Flop / Record-breaker:</strong> Sự thất bại / Sự thất bại thảm hại / Người phá kỷ lục.</li>
                  <li><strong>Ladder (of success) / Boost:</strong> Nấc thang thành công / Thúc đẩy, nâng cao.</li>
                </ul>
              </div>

              <!-- Possessions & Wealth -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">💎 Tài Sản & Trạng Thái (Wealth & Possessions)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Fortune / Riches / Poverty:</strong> Tài sản khổng lồ, vận may / Sự giàu có, của cải / Sự nghèo đói.</li>
                  <li><strong>Possessions / Valuable / Profit:</strong> Tài sản vật sở hữu / Quý giá có giá trị / Lợi nhuận tiền lãi.</li>
                  <li><strong>Land / Jewellery:</strong> Đất đai bất động sản / Trang sức, nữ trang đắt tiền.</li>
                  <li><strong>Medal / Cup:</strong> Huy chương / Chiếc cúp vô địch.</li>
                </ul>
              </div>

              <!-- Personality & Qualities -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">👤 Phẩm Chất & Thái Độ (Personality & Qualities)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Devoted / Determined / Tireless:</strong> Tận tụy cống hiến / Quyết tâm kiên định / Không mệt mỏi bền bỉ.</li>
                  <li><strong>Self-confident / Arrogant / Modest:</strong> Tự tin vào bản thân / Kiêu ngạo ngạo mạn / Khiêm tốn nhún nhường.</li>
                  <li><strong>Flawless / Perfect / Faulty:</strong> Hoàn hảo không tì vết / Hoàn hảo / Bị lỗi có khuyết điểm.</li>
                  <li><strong>Worship / Idolise / Envy:</strong> Tôn thờ thờ phụng / Thần tượng hóa / Ghen tị đố kỵ.</li>
                  <li><strong>Stubborn / Influential / Drive:</strong> Bướng bỉnh ngoan cố / Có tầm ảnh hưởng lớn / Nghị lực, động lực thúc đẩy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: [
      { id: "fc6-1", front: "Accomplished", back: "Tài ba, có tài năng xuất chúng, thành thục", pronunciation: "/əˈkʌmplɪʃt/", partOfSpeech: "adjective" },
      { id: "fc6-2", front: "Best-selling", back: "Bán chạy nhất (tiểu thuyết, sách)", pronunciation: "/ˌbestˈselɪŋ/", partOfSpeech: "adjective" },
      { id: "fc6-3", front: "Devoted", back: "Tận tụy, hết lòng vì, cống hiến", pronunciation: "/dɪˈvəʊtɪd/", partOfSpeech: "adjective" },
      { id: "fc6-4", front: "Failure", back: "Sự thất bại, thất bại", pronunciation: "/ˈfeɪljə(r)/", partOfSpeech: "noun" },
      { id: "fc6-5", front: "Goal", back: "Mục tiêu, mục đích hướng tới", pronunciation: "/ɡəʊl/", partOfSpeech: "noun" },
      { id: "fc6-6", front: "Accomplishment", back: "Thành tựu, thành tích đã đạt được", pronunciation: "/əˈkʌmplɪʃmənt/", partOfSpeech: "noun" },
      { id: "fc6-7", front: "Medal", back: "Huy chương", pronunciation: "/ˈmedl/", partOfSpeech: "noun" },
      { id: "fc6-8", front: "Cup", back: "Chiếc cúp vô địch", pronunciation: "/kʌp/", partOfSpeech: "noun" },
      { id: "fc6-9", front: "Fortune", back: "Gia sản lớn, vận may, sự giàu có", pronunciation: "/ˈfɔːtʃuːn/", partOfSpeech: "noun" },
      { id: "fc6-10", front: "Profit", back: "Lợi nhuận, tiền lãi", pronunciation: "/ˈprɒfɪt/", partOfSpeech: "noun" },
      { id: "fc6-11", front: "Land", back: "Đất đai, bất động sản", pronunciation: "/lænd/", partOfSpeech: "noun" },
      { id: "fc6-12", front: "Jewellery", back: "Đồ trang sức, nữ trang", pronunciation: "/ˈdʒuːəlri/", partOfSpeech: "noun" },
      { id: "fc6-13", front: "Possessions", back: "Tài sản, vật sở hữu, của cải", pronunciation: "/pəˈzeʃnz/", partOfSpeech: "noun" },
      { id: "fc6-14", front: "Determined", back: "Quyết tâm, kiên quyết, kiên định", pronunciation: "/dɪˈtɜːmɪnd/", partOfSpeech: "adjective" },
      { id: "fc6-15", front: "Valuable", back: "Quý giá, có giá trị cao, bổ ích", pronunciation: "/ˈvæljuəbl/", partOfSpeech: "adjective" },
      { id: "fc6-16", front: "Stubborn", back: "Bướng bỉnh, ngoan cố, cứng đầu", pronunciation: "/ˈstʌbən/", partOfSpeech: "adjective" },
      { id: "fc6-17", front: "Blockbuster", back: "Phim bom tấn, sách bán siêu chạy", pronunciation: "/ˈblɒkbʌstə(r)/", partOfSpeech: "noun" },
      { id: "fc6-18", front: "Flop", back: "Sự thất bại thảm hại (phim, kịch, dự án)", pronunciation: "/flɒp/", partOfSpeech: "noun" },
      { id: "fc6-19", front: "Record-breaker", back: "Người hoặc sự việc phá kỷ lục", pronunciation: "/ˈrekɔːd ˌbreɪkə(r)/", partOfSpeech: "noun" },
      { id: "fc6-20", front: "Worship", back: "Tôn thờ, thờ phụng", pronunciation: "/ˈwɜːʃɪp/", partOfSpeech: "verb" },
      { id: "fc6-21", front: "Idolise", back: "Thần tượng hóa, sùng bái", pronunciation: "/ˈaɪdəlaɪz/", partOfSpeech: "verb" },
      { id: "fc6-22", front: "Envy", back: "Ghen tị, đố kỵ, ao ước được như ai", pronunciation: "/ˈenvi/", partOfSpeech: "verb" },
      { id: "fc6-23", front: "Self-confident", back: "Tự tin vào bản thân", pronunciation: "/ˌself ˈkɒnfɪdənt/", partOfSpeech: "adjective" },
      { id: "fc6-24", front: "Arrogant", back: "Kiêu ngạo, ngạo mạn", pronunciation: "/ˈærəɡənt/", partOfSpeech: "adjective" },
      { id: "fc6-25", front: "Modest", back: "Khiêm tốn, nhún nhường", pronunciation: "/ˈmɒdɪst/", partOfSpeech: "adjective" },
      { id: "fc6-26", front: "Flawless", back: "Hoàn hảo, không tì vết, hoàn mỹ", pronunciation: "/ˈflɔːləs/", partOfSpeech: "adjective" },
      { id: "fc6-27", front: "Perfect", back: "Hoàn hảo, tối ưu", pronunciation: "/ˈpɜːfekt/", partOfSpeech: "adjective" },
      { id: "fc6-28", front: "Faulty", back: "Bị lỗi, bị hỏng, có khuyết điểm", pronunciation: "/ˈfɔːlti/", partOfSpeech: "adjective" },
      { id: "fc6-29", front: "Infamous", back: "Khét tiếng, tai tiếng (nổi tiếng xấu)", pronunciation: "/ˈinfəməs/", partOfSpeech: "adjective" },
      { id: "fc6-30", front: "Celebrated", back: "Nổi tiếng, lừng danh, lừng lẫy (được ca tụng)", pronunciation: "/ˈselɪbreɪtɪd/", partOfSpeech: "adjective" },
      { id: "fc6-31", front: "Renowned", back: "Nổi tiếng, có danh tiếng lớn", pronunciation: "/rɪˈnaʊnd/", partOfSpeech: "adjective" },
      { id: "fc6-32", front: "Tireless", back: "Không biết mệt mỏi, bền bỉ", pronunciation: "/ˈtaɪələs/", partOfSpeech: "adjective" },
      { id: "fc6-33", front: "Riches", back: "Sự giàu có, tài sản phong phú, của cải", pronunciation: "/ˈrɪtʃɪz/", partOfSpeech: "noun" },
      { id: "fc6-34", front: "Poverty", back: "Sự nghèo đói, cảnh nghèo nàn", pronunciation: "/ˈpɒvəti/", partOfSpeech: "noun" },
      { id: "fc6-35", front: "Influential", back: "Có tầm ảnh hưởng, có thế lực lớn", pronunciation: "/ˌɪnfluˈenʃl/", partOfSpeech: "adjective" },
      { id: "fc6-36", front: "Gift", back: "Tài năng thiên bẩm, năng khiếu, món quà", pronunciation: "/ɡɪft/", partOfSpeech: "noun" },
      { id: "fc6-37", front: "Ladder", back: "Cái thang (ladder of success: nấc thang thành công)", pronunciation: "/ˈlædə(r)/", partOfSpeech: "noun" },
      { id: "fc6-38", front: "Boost", back: "Thúc đẩy, tăng cường, nâng cao", pronunciation: "/buːst/", partOfSpeech: "verb" },
      { id: "fc6-39", front: "Drive", back: "Nghị lực, động lực thúc đẩy tinh thần", pronunciation: "/draɪv/", partOfSpeech: "noun" },
      { id: "fc6-40", front: "Daring", back: "Táo bạo, liều lĩnh, dũng cảm", pronunciation: "/ˈdeərɪŋ/", partOfSpeech: "adjective" },
      { id: "fc6-41", front: "Historian", back: "Nhà viết sử, nhà sử học", pronunciation: "/hɪˈstɔːriən/", partOfSpeech: "noun" },
      { id: "fc6-42", front: "Miracle", back: "Phép màu, điều kỳ diệu", pronunciation: "/ˈmɪrəkl/", partOfSpeech: "noun" },
      { id: "fc6-43", front: "Decade", back: "Thập kỷ (10 năm)", pronunciation: "/ˈdekeɪd/", partOfSpeech: "noun" },
      { id: "fc6-44", front: "Plot", back: "Âm mưu (ám sát, lật đổ); cốt truyện", pronunciation: "/plɒt/", partOfSpeech: "noun" },
      { id: "fc6-45", front: "Authentic", back: "Đích thực, đích thực, xác thực", pronunciation: "/ɔːˈθentɪk/", partOfSpeech: "adjective" },
      { id: "fc6-46", front: "Inaccurate", back: "Không chính xác, sai lệch", pronunciation: "/ɪnˈækjərət/", partOfSpeech: "adjective" },
      { id: "fc6-47", front: "Dig up", back: "Khai quật, đào lên", pronunciation: "/dɪɡ ʌp/", partOfSpeech: "phrase" },
      { id: "fc6-48", front: "Revolution", back: "Cuộc cách mạng", pronunciation: "/ˌrevəˈluːʃn/", partOfSpeech: "noun" },
      { id: "fc6-49", front: "Infection", back: "Sự nhiễm trùng, sự lây nhiễm", pronunciation: "/ɪnˈfekʃn/", partOfSpeech: "noun" },
      { id: "fc6-50", front: "Throw in the towel", back: "Chấp nhận thất bại, đầu hàng, bỏ cuộc", pronunciation: "/θrəʊ ɪn ðə ˈtaʊəl/", partOfSpeech: "phrase" },
      { id: "fc6-51", front: "Artificial", back: "Nhân tạo (không phải tự nhiên)", pronunciation: "/ˌɑːtɪˈfɪʃl/", partOfSpeech: "adjective" },
      { id: "fc6-52", front: "Take over", back: "Tiếp quản, đảm nhận (công ty, công việc)", pronunciation: "/teɪk ˈəʊvə(r)/", partOfSpeech: "phrase" },
      { id: "fc6-53", front: "Put off", back: "Làm nản chí, trì hoãn", pronunciation: "/pʊt ɒf/", partOfSpeech: "phrase" },
      { id: "fc6-54", front: "Hold onto", back: "Giữ lại, giữ chặt lấy, bám lấy", pronunciation: "/həʊld ˈɒntuː/", partOfSpeech: "phrase" },
      { id: "fc6-55", front: "Dream of", back: "Mơ ước, ao ước về điều gì", pronunciation: "/driːm ɒv/", partOfSpeech: "phrase" }
    ],
    exercises: unit6Exercises
  },
  {
    id: "unit-7",
    number: 7,
    name: "Wild World",
    title: "Thế Giới Hoang Dã",
    description: "Danh động từ & Động từ nguyên mẫu (Gerunds & Infinitives), Cấu trúc So/Such, Too/Enough.",
    intro: "Khám phá thiên nhiên hoang dã kỳ vĩ và chinh phục cấu trúc To-V / V-ing cùng các trạng từ chỉ mức độ cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Danh Động Từ & Động Từ Nguyên Mẫu (Gerunds & Infinitives)",
        content: `• **Gerund (V-ing):** Làm chủ ngữ, đứng sau giới từ hoặc một số động từ như *avoid, enjoy, fancy, keep, mind, suggest, admit...*\n• **To-Infinitive (To V):** Diễn tả mục đích, đứng sau tính từ hoặc một số động từ như *decide, hope, plan, refuse, want, agree...*\n• **Bare-Infinitive (V nguyên mẫu):** Đứng sau động từ khuyết thiếu, động từ chỉ giác quan (see, hear) hoặc cấu trúc *make/let sb do sth*.`,
        formula: `- S + avoid/spend/enjoy + V-ing\n- S + decide/manage/promise + To-V\n- make/let + O + V (nguyên mẫu)`,
        examples: [
          { english: "We should avoid cutting down trees.", vietnamese: "Chúng ta nên tránh việc chặt phá cây cối (avoid + V-ing)." },
          { english: "The national park plan to protect endangered tigers.", vietnamese: "Công viên quốc gia lên kế hoạch bảo vệ những chú hổ có nguy cơ tuyệt chủng." }
        ],
        chickenTip: "Lưu ý cấu trúc 'make sb do sth' là bắt ai làm gì, còn 'let sb do sth' là cho phép ai làm gì. Cả hai đều dùng động từ nguyên mẫu không có 'to' nhé!"
      },
      {
        subtitle: "2. Cấu trúc: Too, Enough, So & Such",
        content: `• **Too (quá... đến nỗi không thể):** Đứng trước tính từ/trạng từ. Cấu trúc: *too + adj/adv (+ for sb) + to V.*\n• **Enough (đủ để làm gì):** Đứng SAU tính từ/trạng từ nhưng đứng TRƯỚC danh từ. Cấu trúc: *adj/adv + enough + to V* hoặc *enough + noun.*\n• **So ... that / Such ... that (quá... đến nỗi mà):**\n- *So + adj/adv + that + mệnh đề.*\n- *Such + (a/an) + adj + noun + that + mệnh đề.*`,
        formula: `- too + Adj + to-V\n- Adj + enough + to-V\n- so + Adj + that...\n- such + a/an + Adj + N + that...`,
        examples: [
          { english: "It was such a cold day that we stayed indoors.", vietnamese: "Đó là một ngày lạnh đến nỗi chúng tớ đã ở trong nhà." },
          { english: "He is not strong enough to climb the mountain.", vietnamese: "Anh ấy không đủ khỏe để leo ngọn núi đó (enough đứng sau tính từ strong)." }
        ],
        chickenTip: "Nhớ vị trí của 'enough' nhé con: Tính từ + enough (old enough, warm enough) nhưng enough + Danh từ (enough water, enough trees)!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KỲ DIỆU - UNIT 7</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Gerunds vs Infinitives -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">📝 Động Từ Nguyên Mẫu & Danh Động Từ</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>V-ing (Gerund):</strong> Dùng sau các động từ như <em>avoid, enjoy, spend, mind, suggest</em> và sau giới từ.</li>
                  <li><strong>To-V (Infinitive):</strong> Dùng sau các động từ như <em>decide, hope, want, refuse, plan</em> và sau tính từ.</li>
                  <li><strong>Bare V (Động từ nguyên mẫu không 'to'):</strong> Dùng sau <em>make, let, hear, watch</em> và các động từ khuyết thiếu.</li>
                </ul>
              </div>

              <!-- Modifiers of Degree -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">🔥 Cấu Trúc Chỉ Mức Độ (Too / Enough / So / Such)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Too:</strong> Quá (đứng trước tính từ: <em>too + adj + to V</em>).</li>
                  <li><strong>Enough:</strong> Đủ (đứng sau tính từ nhưng đứng trước danh từ: <em>adj + enough</em>, <em>enough + noun</em>).</li>
                  <li><strong>So... that / Such... that:</strong> Quá... đến nỗi mà (<em>so + adj + that</em>, <em>such + a/an + adj + noun + that</em>).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Natural Disasters -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">🌋 Thiên Tai & Thảm Họa Tự Nhiên (Natural Disasters)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Hurricane / Tornado / Tsunami:</strong> Bão lớn, cuồng phong / Lốc xoáy, vòi rồng / Cơn sóng thần khổng lồ.</li>
                  <li><strong>Earthquake / Aftershocks / Magnitude / Richter scale:</strong> Động đất / Dư chấn / Cường độ động đất / Thang đo Richter.</li>
                  <li><strong>Fault lines / Crust:</strong> Đường đứt gãy / Lớp vỏ Trái Đất (Earth's crust).</li>
                  <li><strong>Wildfire / Landslide / Avalanche:</strong> Đám cháy rừng tự nhiên / Lở đất / Lở tuyết.</li>
                  <li><strong>Drought / Famine / Flash floods / Tidal wave:</strong> Hạn hán / Nạn đói / Lũ quét / Sóng triều khổng lồ.</li>
                  <li><strong>Volcanic eruption:</strong> Sự phun trào núi lửa dữ dội.</li>
                  <li><strong>Havoc / Casualties / Hail stones:</strong> Sự tàn phá, hỗn loạn / Thương vong lớn / Những viên mưa đá.</li>
                </ul>
              </div>

              <!-- Organizations & Protection -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">🌲 Tổ Chức & Bảo Vệ Môi Trường (Protection)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Organisations / Rangers:</strong> Các tổ chức, đoàn thể / Kiểm lâm viên bảo vệ rừng.</li>
                  <li><strong>Warning:</strong> Sự cảnh báo, lời cảnh báo trước thiên tai.</li>
                </ul>
              </div>

              <!-- Idioms & Nature Phrases -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">☀️ Thành Ngữ Về Thiên Nhiên (Nature Idioms)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Throw caution to the wind:</strong> Liều lĩnh làm gì mà không bận tâm hậu quả.</li>
                  <li><strong>Down to earth:</strong> Thực tế, bình dị, mộc mạc.</li>
                  <li><strong>As fast as lightning / A ray of sunshine:</strong> Nhanh như chớp / Người mang lại niềm vui, tia nắng hy vọng.</li>
                  <li><strong>In deep water / Feel under the weather:</strong> Gặp rắc rối lớn / Cảm thấy mệt mỏi, không khỏe trong người.</li>
                  <li><strong>Go down a storm / Head in the clouds:</strong> Thành công rực rỡ, được chào đón / Đầu óc trên mây, viển vông.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: [
      { id: "fc7-1", front: "Hurricane", back: "Cơn bão lớn, cuồng phong", pronunciation: "/ˈhʌrɪkən/", partOfSpeech: "noun" },
      { id: "fc7-2", front: "Earthquake", back: "Trận động đất, sự rung chuyển địa chất", pronunciation: "/ˈɜːθkweɪk/", partOfSpeech: "noun" },
      { id: "fc7-3", front: "Richter scale", back: "Thang đo Richter (độ lớn động đất)", pronunciation: "/ˈrɪktə skeɪl/", partOfSpeech: "noun" },
      { id: "fc7-4", front: "Hail stones", back: "Những viên mưa đá", pronunciation: "/ˈheɪlstəʊnz/", partOfSpeech: "noun" },
      { id: "fc7-5", front: "Fault lines", back: "Đường đứt gãy trong vỏ Trái Đất", pronunciation: "/ˈfɔːlt laɪnz/", partOfSpeech: "noun" },
      { id: "fc7-6", front: "Magnitude", back: "Cường độ, độ lớn (của động đất/thảm họa)", pronunciation: "/ˈmæɡnɪtjuːd/", partOfSpeech: "noun" },
      { id: "fc7-7", front: "Aftershocks", back: "Các dư chấn sau động đất", pronunciation: "/ˈɑːftəʃɒks/", partOfSpeech: "noun" },
      { id: "fc7-8", front: "Casualties", back: "Thương vong, số người chết và bị thương", pronunciation: "/ˈkæʒuəltiz/", partOfSpeech: "noun" },
      { id: "fc7-9", front: "Crust", back: "Lớp vỏ (vỏ Trái Đất: Earth's crust)", pronunciation: "/krʌst/", partOfSpeech: "noun" },
      { id: "fc7-10", front: "Havoc", back: "Sự tàn phá, cảnh hỗn loạn", pronunciation: "/ˈhævək/", partOfSpeech: "noun" },
      { id: "fc7-11", front: "Organisations", back: "Các tổ chức, đoàn thể", pronunciation: "/ˌɔːɡənaɪˈzeɪʃnz/", partOfSpeech: "noun" },
      { id: "fc7-12", front: "Rangers", back: "Kiểm lâm, nhân viên bảo vệ rừng", pronunciation: "/ˈreɪndʒəz/", partOfSpeech: "noun" },
      { id: "fc7-13", front: "Warning", back: "Sự cảnh báo, lời cảnh báo", pronunciation: "/ˈwɔːnɪŋ/", partOfSpeech: "noun" },
      { id: "fc7-14", front: "Wildfire", back: "Đám cháy rừng tự nhiên", pronunciation: "/ˈwaɪldfaɪə(r)/", partOfSpeech: "noun" },
      { id: "fc7-15", front: "Tornado", back: "Cơn lốc xoáy, vòi rồng", pronunciation: "/tɔːˈneɪdəʊ/", partOfSpeech: "noun" },
      { id: "fc7-16", front: "Landslide", back: "Vụ sạt lở đất", pronunciation: "/ˈlændslaɪd/", partOfSpeech: "noun" },
      { id: "fc7-17", front: "Drought", back: "Trận hạn hán, sự khô hạn kéo dài", pronunciation: "/draʊt/", partOfSpeech: "noun" },
      { id: "fc7-18", front: "Avalanche", back: "Vụ lở tuyết, tuyết lở", pronunciation: "/ˈævəlɑːnʃ/", partOfSpeech: "noun" },
      { id: "fc7-19", front: "Famine", back: "Nạn đói khủng khiếp", pronunciation: "/ˈfæmɪn/", partOfSpeech: "noun" },
      { id: "fc7-20", front: "Tsunami", back: "Cơn sóng thần", pronunciation: "/tsuːˈnɑːmi/", partOfSpeech: "noun" },
      { id: "fc7-21", front: "Flash floods", back: "Lũ quét (xảy ra đột ngột)", pronunciation: "/flæʃ flʌdz/", partOfSpeech: "noun" },
      { id: "fc7-22", front: "Tidal wave", back: "Sóng triều khổng lồ", pronunciation: "/ˈtaɪdl weɪv/", partOfSpeech: "noun" },
      { id: "fc7-23", front: "Volcanic eruption", back: "Sự phun trào núi lửa", pronunciation: "/vɒlˈkænɪk ɪˈrʌpʃn/", partOfSpeech: "noun" },
      { id: "fc7-24", front: "Throw caution to the wind", back: "Liều lĩnh làm gì mà không bận tâm hậu quả", pronunciation: "/θrəʊ ˈkɔːʃn tuː ðə wɪnd/", partOfSpeech: "phrase" },
      { id: "fc7-25", front: "Down to earth", back: "Thực tế, thực tế, bình dị", pronunciation: "/daʊn tuː ɜːθ/", partOfSpeech: "phrase" },
      { id: "fc7-26", front: "As fast as lightning", back: "Nhanh như chớp, nhanh thoăn thoắt", pronunciation: "/æz fɑːst æz ˈlaɪtnɪŋ/", partOfSpeech: "phrase" },
      { id: "fc7-27", front: "A ray of sunshine", back: "Một tia nắng ấm áp, niềm vui mang lại hy vọng", pronunciation: "/ə reɪ ɒv ˈsʌnʃaɪn/", partOfSpeech: "phrase" },
      { id: "fc7-28", front: "In deep water", back: "Gặp rắc rối lớn, ngập đầu trong khó khăn", pronunciation: "/ɪn diːp ˈwɔːtə(r)/", partOfSpeech: "phrase" },
      { id: "fc7-29", front: "Go down a storm", back: "Được đón nhận cực kỳ nồng nhiệt, thành công lớn", pronunciation: "/ɡəʊ daʊn ə stɔːm/", partOfSpeech: "phrase" },
      { id: "fc7-30", front: "Feel under the weather", back: "Cảm thấy không khỏe, mệt mỏi trong người", pronunciation: "/fiːl ˈʌndə(r) ðə ˈweðə(r)/", partOfSpeech: "phrase" },
      { id: "fc7-31", front: "Head in the clouds", back: "Đầu óc trên mây, không thực tế, viển vông", pronunciation: "/hed ɪn ðə klaʊdz/", partOfSpeech: "phrase" }
    ],
    exercises: unit7Exercises
  },
  {
    id: "unit-8",
    number: 8,
    name: "Media Matters",
    title: "Sức Mạnh Truyền Thông",
    description: "Thể bị động (Passive Voice), Bị động khách quan/cá nhân (Impersonal & Personal Passive).",
    intro: "Chào mừng con đến với thế giới thông tấn, báo chí! Gà Mẹ sẽ hướng dẫn con cách biến đổi câu chủ động thành câu bị động thật chính xác nhé!",
    theoryParts: [
      {
        subtitle: "1. Thể Bị Động Cơ Bản (Passive Voice)",
        content: `• Thể bị động được dùng khi ta muốn nhấn mạnh vào hành động hoặc đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n• **Công thức chung:** **be + V3/ed** (động từ 'be' được chia theo thì của câu gốc).`,
        formula: `**CÁC THÌ BỊ ĐỘNG PHỔ BIẾN:**\n- Hiện tại đơn: am/is/are + V3/ed\n- Quá khứ đơn: was/were + V3/ed\n- Tương lai đơn: will be + V3/ed\n- Hiện tại hoàn thành: have/has been + V3/ed`,
        examples: [
          { english: "Millions of newspapers are sold every day.", vietnamese: "Hàng triệu tờ báo được bán ra mỗi ngày (Bị động Hiện tại đơn)." },
          { english: "The article was written by a famous journalist.", vietnamese: "Bài báo được viết bởi một nhà báo nổi tiếng (Bị động Quá khứ đơn)." }
        ],
        chickenTip: "Nếu trong câu chủ động có trạng từ chỉ nơi chốn và thời gian thì nơi chốn đứng TRƯỚC 'by + tác nhân', còn thời gian đứng SAU 'by + tác nhân' con nhé!"
      },
      {
        subtitle: "2. Thể Bị Động Khách Quan & Cá Nhân (Impersonal & Personal Passive)",
        content: `Dùng để truyền đạt ý kiến dư luận hoặc tin đồn với các động từ báo cáo như *say, believe, think, report, rumor, claim...*\n• **Cấu trúc 1 (Impersonal):** **It is/was + V3/ed (said/believed...) + that + S + V.**\n• **Cấu trúc 2 (Personal):** **S (mệnh đề sau) + is/are/was/were + V3/ed (said...) + to-V / to have V3.** (Dùng 'to have V3' nếu hành động ở mệnh đề sau xảy ra trước hành động ở mệnh đề báo cáo).`,
        formula: `- It is said that S + V...\n- S + is said to + V-inf (cùng thì)\n- S + is said to have + V3/ed (khác thì - quá khứ)`,
        examples: [
          { english: "It is reported that the criminal has escaped.", vietnamese: "Người ta báo cáo rằng tên tội phạm đã trốn thoát." },
          { english: "He is believed to have stolen the diamond.", vietnamese: "Anh ta được tin là đã lấy trộm viên kim cương (hành động trộm xảy ra trước)." }
        ],
        chickenTip: "Cực kỳ chú ý khi viết câu bị động cá nhân: Nếu hành động trong mệnh đề 'that' xảy ra trước hành động ở mệnh đề 'say/believe' thì con phải chuyển thành 'to have + V3/ed' chứ không dùng 'to V' đâu nhé!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 8</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Basic Passive -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">⚙️ Câu Bị Động Cơ Bản (Passive Voice)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Công thức chung:</strong> Be + V3/ed (chia 'be' theo thì của câu).</li>
                  <li>Dùng khi muốn nhấn mạnh vào đối tượng chịu tác động hơn là người thực hiện hành động.</li>
                  <li>Tác nhân đứng sau <em>by + O</em>. Nếu là vật dụng/chất liệu dùng <em>with</em>.</li>
                </ul>
              </div>

              <!-- Special Passive -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">🗣️ Câu Bị Động Đặc Biệt (Impersonal Passive)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li>Thường dùng với động từ tường thuật như <em>say, think, believe, report</em>.</li>
                  <li><strong>Dạng vô nhân xưng:</strong> It + is/was + V3 + that + S + V.</li>
                  <li><strong>Dạng cá nhân:</strong> S + is/was + V3 + to V (nếu cùng thì) / to have V3 (nếu lệch thì quá khứ).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Journalism & Media -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">📰 Truyền Thông & Báo Chí (Media & Journalism)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Journalist / Editor / Press / Newsagent's:</strong> Nhà báo / Nhà biên tập / Giới báo chí / Sạp bán báo.</li>
                  <li><strong>Presenter / Sound engineer:</strong> Người dẫn chương trình / Kỹ sư âm thanh.</li>
                  <li><strong>War correspondent:</strong> Phóng viên đưa tin chiến trường nguy hiểm.</li>
                  <li><strong>Commentary / Supplement / Issue:</strong> Lời bình luận / Phụ bản kèm theo / Số phát hành.</li>
                  <li><strong>Readership / Sales figures / Adaptation:</strong> Độc giả / Số liệu doanh thu / Tác phẩm chuyển thể.</li>
                  <li><strong>Censorship / Soap opera:</strong> Sự kiểm duyệt nội dung / Phim truyền hình dài tập.</li>
                </ul>
              </div>

              <!-- Natural Phenomena -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">🌋 Hiện Tượng Thiên Nhiên (Phenomena)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Magnitude / Fault line:</strong> Cường độ lớn / Đường đứt gãy địa chất.</li>
                  <li><strong>Avalanche / Famine:</strong> Trận lở tuyết / Nạn đói khủng khiếp.</li>
                </ul>
              </div>

              <!-- Idioms & Phrasal Verbs -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">✨ Thành Ngữ & Cụm Động Từ (Idioms & Phrasal Verbs)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>In deep water / Under the weather:</strong> Gặp rắc rối lớn / Cảm thấy mệt mỏi không khỏe.</li>
                  <li><strong>Head in the clouds / Down to earth:</strong> Trên mây viễn vông / Rất thực tế, bình dị.</li>
                  <li><strong>Bring out / Bring round:</strong> Xuất bản, phát hành / Thuyết phục ai đồng ý.</li>
                  <li><strong>Pick out / Pick up:</strong> Lựa chọn ra / Đón ai đó.</li>
                  <li><strong>Ring back / Ring in:</strong> Gọi điện thoại lại / Gọi điện đến đài phát thanh.</li>
                  <li><strong>Tune in / Tune out:</strong> Đón xem chương trình / Lờ đi vì tẻ nhạt chán.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: unit8Flashcards,
    exercises: unit8Exercises
  },
  {
    id: "unit-9",
    number: 9,
    name: "Making a Living",
    title: "Lập Nghiệp Thành Công",
    description: "Câu gián tiếp (Reported Speech) & Động từ tường thuật (Reporting Verbs).",
    intro: "Khám phá thế giới việc làm, công sở và học cách tường thuật lại lời nói của người khác thật tự nhiên, chính xác cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Câu Gián Tiếp Cơ Bản (Reported Speech)",
        content: `Khi chuyển từ câu trực tiếp sang câu gián tiếp, con cần thực hiện 3 bước thay đổi:\n• **Lùi thì (Tense shift):** Hiện tại đơn -> Quá khứ đơn, Hiện tại hoàn thành -> Quá khứ hoàn thành, Will -> Would...\n• **Đổi đại từ:** Đổi ngôi của chủ ngữ, tân ngữ và tính từ sở hữu sao cho phù hợp ngữ cảnh.\n• **Đổi trạng từ chỉ thời gian/nơi chốn:** *now -> then, here -> there, yesterday -> the day before, tomorrow -> the next day...*`,
        formula: `**CÂU HỎI GIÁN TIẾP:**\n- Yes/No: S + asked + (O) + if/whether + S + V (lùi thì, không đảo trợ động từ).\n- Wh-questions: S + asked + (O) + Wh-word + S + V (lùi thì).`,
        examples: [
          { english: "He said, 'I am looking for a job.'", vietnamese: "-> He said he was looking for a job (Lùi thì am thành was)." },
          { english: "She asked me, 'Do you want to work here?'", vietnamese: "-> She asked me if I wanted to work there (Đổi Do you thành if I, lùi thì, đổi here thành there)." }
        ],
        chickenTip: "Trong câu hỏi gián tiếp, con tuyệt đối KHÔNG ĐƯỢC đảo trợ động từ lên trước chủ ngữ và không dùng dấu hỏi chấm cuối câu nha!"
      },
      {
        subtitle: "2. Động Từ Tường Thuật Đặc Biệt (Reporting Verbs)",
        content: `Thay vì chỉ dùng *say* hoặc *tell*, chúng ta sử dụng các động từ tường thuật sinh động để thể hiện rõ sắc thái tình cảm:\n• **Verb + To-V:** *agree, demand, offer, promise, refuse, threaten...*\n• **Verb + O + To-V:** *advise, ask, invite, order, remind, warn...*\n• **Verb + V-ing:** *admit, deny, recommend, suggest...*\n• **Verb + preposition + V-ing:** *apologize for, congratulate on, insist on, accuse sb of...*`,
        formula: `- S + suggest / deny + V-ing\n- S + advise / remind + O + to-V\n- S + apologize to sb for + V-ing`,
        examples: [
          { english: "The manager offered to increase my salary.", vietnamese: "Người quản lý đề nghị tăng lương cho tớ (offer + to V)." },
          { english: "She accused him of leaking the company's secret.", vietnamese: "Cô ấy cáo buộc anh ta làm rò rỉ bí mật công ty (accuse sb of + V-ing)." }
        ],
        chickenTip: "Học thuộc lòng nhé con: 'Suggest' (gợi ý) và 'Deny' (phủ nhận) luôn đi với V-ing chứ không đi với 'to V' đâu nha!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 9</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Basic Reported Speech -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">🗣️ Câu Tường Thuật Cơ Bản (Reported Speech)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Lùi 1 thì về quá khứ:</strong> am/is/are -> was/were, will -> would, V1 -> V2/ed.</li>
                  <li><strong>Thay đổi đại từ & trạng từ:</strong> here -> there, now -> then, this -> that, today -> that day.</li>
                  <li><strong>Câu hỏi gián tiếp:</strong> Dùng từ hỏi hoặc <em>if / whether</em>, trật tự từ như câu khẳng định (không đảo trợ động từ lên trước chủ ngữ!).</li>
                </ul>
              </div>

              <!-- Reporting Verbs -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">✨ Động Từ Tường Thuật Đặc Biệt (Reporting Verbs)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>+ To-V:</strong> agree (đồng ý), promise (hứa), refuse (từ chối).</li>
                  <li><strong>+ V-ing:</strong> suggest (gợi ý), deny (phủ nhận), admit (thừa nhận).</li>
                  <li><strong>+ O + To-V:</strong> advise (khuyên), remind (nhắc nhở), warn (cảnh báo).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Work & Recruitment -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">💼 Tuyển Dụng & Công Việc (Work & Hiring)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Unemployed / Out of work:</strong> Thất nghiệp, không có việc làm.</li>
                  <li><strong>Vacancy / Work shifts:</strong> Vị trí trống tuyển dụng / Ca làm việc luân phiên.</li>
                  <li><strong>Lay off / Fire / Get the sack / Take on:</strong> Cắt giảm nhân sự do kinh tế / Sa thải đuổi việc / Bị đuổi việc / Tuyển dụng.</li>
                  <li><strong>Launch / Reject / Assignment:</strong> Ra mắt giới thiệu sản phẩm / Từ chối bác bỏ / Nhiệm vụ được giao.</li>
                  <li><strong>Interview / Application / Reference:</strong> Cuộc phỏng vấn xin việc / Đơn ứng tuyển / Thư giới thiệu sếp cũ.</li>
                  <li><strong>Colleague / Volunteer / Worker / Assistant:</strong> Đồng nghiệp / Tình nguyện viên / Người lao động / Trợ lý phụ tá.</li>
                </ul>
              </div>

              <!-- Income & Benefits -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">💰 Quyền Lợi & Tính Chất Công Việc</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Perk / Pension / Bonus:</strong> Quyền lợi phụ bổng lộc / Lương hưu trí / Tiền thưởng nóng ngoài lương.</li>
                  <li><strong>Stressful / Rewarding / Obsessed / Boring:</strong> Gây căng thẳng áp lực / Bổ ích đáng làm / Bị ám ảnh say mê / Nhàm chán.</li>
                  <li><strong>In debt / By surprise / In fact:</strong> Mắc nợ nần / Đột ngột gây bất ngờ / Thực tế là, thực sự thì.</li>
                  <li><strong>On behalf of / On time:</strong> Thay mặt cho, nhân danh ai / Đúng giờ (không bị muộn).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: unit9Flashcards,
    exercises: unit9Exercises
  },
  {
    id: "unit-10",
    number: 10,
    name: "See the World",
    title: "Khám Phá Thế Giới",
    description: "Câu điều kiện (0, 1, 2, 3), Điều kiện hỗn hợp (Mixed Conditionals) & Cấu trúc Wish / If only.",
    intro: "Du lịch vòng quanh trái đất, xách ba lô lên và đi để học cách giả định mọi điều bằng câu điều kiện và ước muốn cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Các Loại Câu Điều Kiện & Điều Kiện Hỗn Hợp",
        content: `• **Loại 0 (Sự thật):** If + S + V(hiện tại), S + V(hiện tại).\n• **Loại 1 (Có thể ở hiện tại/tương lai):** If + S + V(hiện tại), S + will + V.\n• **Loại 2 (Trái thực tế ở hiện tại):** If + S + V2/ed (động từ be dùng *were* cho mọi ngôi), S + would + V.\n• **Loại 3 (Trái thực tế ở quá khứ):** If + S + had + V3, S + would have + V3.\n• **Điều kiện hỗn hợp (Mixed):** Giả định quá khứ gây kết quả hiện tại. Công thức: *If + S + had + V3/ed, S + would + V-inf (now).*`,
        formula: `- L3: If S + had + V3, S + would have + V3\n- Mixed: If S + had + V3, S + would + V-inf`,
        examples: [
          { english: "If I had booked the flight earlier, I would be on the beach now.", vietnamese: "Nếu tớ đặt vé máy bay sớm hơn (quá khứ), giờ tớ đang ở trên bãi biển rồi (hiện tại - Hỗn hợp)." },
          { english: "If it rains, we will stay at the hotel.", vietnamese: "Nếu trời mưa, chúng tớ sẽ ở lại khách sạn (Có thể xảy ra - Loại 1)." }
        ],
        chickenTip: "Đặc biệt lưu ý câu điều kiện hỗn hợp: Vế giả định nói về quá khứ (had V3) nhưng vế kết quả lại có chữ 'now/today' thì phải dùng 'would + V-inf' chứ không dùng 'would have V3' con nha!"
      },
      {
        subtitle: "2. Cấu Trúc Wish & If Only (Ước muốn)",
        content: `• **Ước ở tương lai:** **S + wish + S + would/could + V-inf** (Thể hiện ước muốn điều gì thay đổi ở tương lai).\n• **Ước ở hiện tại:** **S + wish + S + V2/ed** (động từ *be* dùng *were*) (Ước điều trái ngược với hiện tại thực tế).\n• **Ước ở quá khứ:** **S + wish + S + had + V3/ed** (Thể hiện sự hối tiếc về điều đã làm hoặc không làm trong quá khứ).`,
        formula: `- Tương lai: S + wish + would/could + V\n- Hiện tại: S + wish + V2/ed (were)\n- Quá khứ: S + wish + had + V3`,
        examples: [
          { english: "I wish I were traveling in Europe right now.", vietnamese: "Ước gì tớ đang đi du lịch ở châu Âu ngay lúc này (Trái với hiện tại, dùng were)." },
          { english: "If only we hadn't lost our passport yesterday.", vietnamese: "Giá mà hôm qua chúng tớ không làm mất hộ chiếu (Hối tiếc quá khứ, dùng had not V3)." }
        ],
        chickenTip: "Cụm từ 'If only' mang ý nghĩa mạnh mẽ hơn 'wish' một chút nhưng cách chia động từ ở các thì hoàn toàn giống hệt nhau đó con!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 10</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Conditional Sentences -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">🌱 Các Loại Câu Điều Kiện (Conditional Sentences)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Loại 1 (Có thật ở hiện tại/tương lai):</strong> If + S + V1, S + will + V.</li>
                  <li><strong>Loại 2 (Trái thực tế ở hiện tại):</strong> If + S + V2/were, S + would + V.</li>
                  <li><strong>Loại 3 (Trái thực tế ở quá khứ):</strong> If + S + had + V3, S + would have + V3.</li>
                  <li><strong>Điều kiện hỗn hợp (Mixed):</strong> Trái thực tế quá khứ dẫn đến kết quả trái thực tế hiện tại (If + S + had + V3, S + would + V).</li>
                </ul>
              </div>

              <!-- Wish / If Only -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">🌠 Cấu Trúc Ước Muốn (Wish / If only)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Ước cho hiện tại:</strong> S + wish + S + V2/ed (động từ be dùng 'were' cho tất cả ngôi).</li>
                  <li><strong>Ước cho quá khứ:</strong> S + wish + S + had + V3/ed.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Destinations & Travel -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">✈️ Điểm Đến & Phương Tiện (Destinations & Travel)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Destination / Site / Resort / Accommodation:</strong> Điểm đến du lịch / Địa điểm di tích / Khu nghỉ dưỡng / Chỗ lưu trú.</li>
                  <li><strong>Caravan / Cruise / Voyage / Port of call:</strong> Xe nhà di động / Chuyến du thuyền / Hành trình trên biển / Cảng dừng chân.</li>
                  <li><strong>Travel agency:</strong> Đại lý du lịch lữ hành tổ chức các tour.</li>
                  <li><strong>Sightseeing / Track / Range / Mountainous:</strong> Đi tham quan ngắm cảnh / Đường mòn lối đi / Dãy núi / Trùng điệp núi non.</li>
                  <li><strong>Architecture / Column / Cuisine:</strong> Kiến trúc xây dựng / Cột trụ công trình / Ẩm thực vùng miền.</li>
                  <li><strong>Traveller / Visitor / Tourist:</strong> Khách du hành / Người ghé thăm / Du khách tham quan.</li>
                </ul>
              </div>

              <!-- Gear, Procedures & Phrasal Verbs -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">🎒 Trang Bị, Thủ Tục & Cụm Từ (Gear & Procedures)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Rucksack / Backpack / Currency:</strong> Ba lô dã ngoại đeo vai lớn / Ba lô thông thường / Đơn vị tiền tệ.</li>
                  <li><strong>Itinerary / Boarding pass / Departure / Landing:</strong> Lịch trình lộ trình / Thẻ lên máy bay / Sự khởi hành / Sự hạ cánh.</li>
                  <li><strong>Five-hour / Never-ending / One-way:</strong> Kéo dài 5 giờ / Bất tận vô hạn / Phố hoặc vé một chiều.</li>
                  <li><strong>Self-service / Tree-lined:</strong> Tự phục vụ / Được trồng rợp bóng cây hai bên đường.</li>
                  <li><strong>Set out / See off / Drop off:</strong> Khởi hành lên đường / Tiễn ai ra sân bay / Cho ai xuống xe dọc đường.</li>
                  <li><strong>Put up / Check in / At all costs:</strong> Dựng lều dã ngoại / Làm thủ tục nhận phòng / Bằng mọi giá.</li>
                </ul>
              </div>

              <!-- Work & Livelihood -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">💼 Nhân Sự & Việc Làm (Work & Career)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Staff / Income / Reference:</strong> Đội ngũ nhân viên / Thu nhập / Thư giới thiệu tiến cử sếp cũ.</li>
                  <li><strong>Application / Dead-end:</strong> Đơn xin ứng tuyển / Bế tắc không có lối thoát (công việc).</li>
                  <li><strong>Redundant / Lay off / Get the sack:</strong> Nhân sự dư thừa / Sa thải vì kinh tế khó khăn / Bị sa thải đuổi việc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: unit10Flashcards,
    exercises: unit10Exercises
  },
  {
    id: "unit-11",
    number: 11,
    name: "Crime Time",
    title: "Thử Tài Phá Án",
    description: "Mệnh đề quan hệ xác định & không xác định (Relative Clauses) & Mệnh đề phân từ (Participle Clauses).",
    intro: "Tham gia phá những vụ án hóc búa, đóng vai thám tử nhí để rèn luyện tư duy logic và làm chủ mệnh đề quan hệ cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Mệnh Đề Quan Hệ (Defining & Non-Defining Relative Clauses)",
        content: `Dùng đại từ quan hệ để giải thích rõ hơn cho danh từ đứng trước:\n• **Defining (Xác định):** Cần thiết cho nghĩa của câu, không dùng dấu phẩy, có thể dùng 'that' thay thế.\n• **Non-defining (Không xác định):** Thêm thông tin bổ sung, bắt buộc phải có dấu phẩy ngăn cách, KHÔNG dùng 'that'.\n• **Đại từ quan hệ:** *Who* (chỉ người), *Whom* (tân ngữ chỉ người), *Which* (chỉ vật), *Whose* (sở hữu), *Where* (nơi chốn), *When* (thời gian).`,
        formula: `- Defining: N + who/which/that + S + V\n- Non-defining: N, who/which (không dùng that), + S + V`,
        examples: [
          { english: "The detective who solved the mystery was very smart.", vietnamese: "Người thám tử phá vụ án đó rất thông minh (Mệnh đề xác định)." },
          { english: "Sherlock Holmes, who was created by Conan Doyle, is famous.", vietnamese: "Sherlock Holmes, nhân vật được tạo ra bởi Conan Doyle, rất nổi tiếng (Có dấu phẩy, không dùng that)." }
        ],
        chickenTip: "Con nhớ nhé: Tuyệt đối không bao giờ dùng 'that' thay thế cho đại từ quan hệ trong mệnh đề có dấu phẩy (mệnh đề không xác định) nha!"
      },
      {
        subtitle: "2. Mệnh Đề Phân Từ (Participle Clauses)",
        content: `Dùng để rút gọn câu giúp câu văn ngắn gọn, súc tích hơn:\n• **Present Participle (V-ing):** Dùng khi rút gọn câu chủ động.\n• **Past Participle (V3/ed):** Dùng khi rút gọn câu bị động.\n• **Perfect Participle (Having + V3/ed):** Nhấn mạnh hành động này đã hoàn thành trước khi hành động kia bắt đầu.`,
        formula: `- Chủ động: V-ing ...\n- Bị động: V3/ed ...\n- Trước - Sau: Having + V3...`,
        examples: [
          { english: "The suspect running down the street was caught.", vietnamese: "Nghi phạm đang chạy trên phố đã bị bắt (rút gọn từ 'who was running')." },
          { english: "Having examined the fingerprints, the detective arrested the thief.", vietnamese: "Sau khi kiểm tra các dấu vân tay, thám tử đã bắt giữ tên trộm." }
        ],
        chickenTip: "Rút gọn mệnh đề phân từ chỉ áp dụng được khi hai mệnh đề trong câu có CÙNG CHỦ NGỮ thôi con yêu nhé!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 11</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Relative Clauses -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">📎 Mệnh Đề Quan Hệ (Relative Clauses)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Mệnh đề xác định (Defining):</strong> Xác định danh từ đứng trước, không có dấu phẩy, có thể dùng <em>that</em> thay thế cho <em>who, whom, which</em>.</li>
                  <li><strong>Mệnh đề không xác định (Non-defining):</strong> Bổ sung thông tin, bắt buộc phải ngăn cách bằng dấu phẩy, <strong>không bao giờ</strong> dùng <em>that</em>.</li>
                </ul>
              </div>

              <!-- Participle Clauses -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">✂️ Rút Gọn Mệnh Đề Bằng Phân Từ (Participle Clauses)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Hiện tại phân từ (V-ing):</strong> Rút gọn mệnh đề ở dạng chủ động (e.g., <em>the man standing over there</em> = the man who is standing).</li>
                  <li><strong>Quá khứ phân từ (V3/ed):</strong> Rút gọn mệnh đề ở dạng bị động (e.g., <em>the wallet stolen yesterday</em> = the wallet which was stolen).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Court & Personnel -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">⚖️ Tòa Án & Nhân Sự Tranh Tụng (Court & Legal Staff)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Prosecution / Defence:</strong> Bên khởi tố công tố / Bên bào chữa biện hộ.</li>
                  <li><strong>Lawyer / Defendant / Judge:</strong> Luật sư / Bị cáo trước tòa / Thẩm phán chủ tọa.</li>
                  <li><strong>Investigator / Detective / Witness:</strong> Điều tra viên / Thám tử / Nhân chứng trực tiếp chứng kiến.</li>
                  <li><strong>Burglar / Pickpocket / Arsonist:</strong> Kẻ trộm bẻ khóa / Kẻ móc túi / Kẻ phóng hỏa đốt tài sản.</li>
                </ul>
              </div>

              <!-- Crimes & Court Procedures -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">🕵️‍♂️ Tội Phạm & Thủ Tục Xét Xử (Crimes & Procedures)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Theft / Rob / Steal / Murder:</strong> Vụ trộm / Cướp dùng vũ lực / Lấy trộm lén lút / Sát hại.</li>
                  <li><strong>Shoplifting / Witness / Handcuffs:</strong> Trộm đồ siêu thị / Nhân chứng / Còng tay số 8.</li>
                  <li><strong>Evidence / Court / Proof / Weapon:</strong> Vật chứng / Phiên tòa / Bằng chứng đanh thép / Vũ khí gây án.</li>
                  <li><strong>Alibi / Excuse / Verdict / Sentence:</strong> Chứng cứ ngoại phạm / Lời bào chữa / Phán quyết / Bản án phạt tù.</li>
                  <li><strong>Complaint / Decision / Try / Convict / Find guilty:</strong> Đơn khiếu nại / Quyết định phán xét / Đưa ra xét xử / Kết án phạt / Tuyên bố có tội.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: unit11Flashcards,
    exercises: unit11Exercises
  },
  {
    id: "unit-12",
    number: 12,
    name: "You Are What You Wear",
    title: "Phong Cách Thời Trang",
    description: "Cấu trúc truyền khiến (Causative Form) & Đảo ngữ (Inversion) đầy ấn tượng.",
    intro: "Sải bước trên sàn diễn thời trang rực rỡ và chinh phục cấu trúc Nhờ vả (Causative) cùng nghệ thuật Đảo ngữ đầy cá tính cùng Gà Mẹ nhé!",
    theoryParts: [
      {
        subtitle: "1. Thể Truyền Khiến / Nhờ vả (Causative Forms)",
        content: `Dùng để diễn tả việc chúng ta không tự làm một hành động mà nhờ hoặc thuê người khác làm:\n• **Bị động (nhờ ai làm gì đó cho mình):** **Have / Get + something + V3/ed.**\n• **Chủ động (thuê, bảo ai làm gì):**\n- **Have + somebody + V (nguyên mẫu).**\n- **Get + somebody + To V.**`,
        formula: `- Chủ động: Have sb + V | Get sb + to V\n- Bị động: Have/Get sth + V3/ed`,
        examples: [
          { english: "I had the tailor design my dress.", vietnamese: "Tớ đã nhờ thợ may thiết kế chiếc váy cho tớ (Have + tailor + V)." },
          { english: "I had my hair cut yesterday.", vietnamese: "Tớ đã đi cắt tóc hôm qua (Tớ nhờ thợ cắt chứ không tự cắt - Have + hair + V3)." }
        ],
        chickenTip: "Coi chừng bẫy nhé con! 'Have' chủ động dùng động từ nguyên mẫu (Have sb V), còn 'Get' chủ động phải dùng động từ nguyên mẫu có 'to' (Get sb To V) đó!"
      },
      {
        subtitle: "2. Cấu Trúc Đảo Ngữ (Inversion)",
        content: `Dùng để nhấn mạnh câu bằng cách đưa trạng từ phủ định lên đầu câu và đảo trợ động từ lên trước chủ ngữ.\n• **Các trạng từ phủ định phổ biến:** *Never, Seldom, Rarely, Hardly ... when, No sooner ... than, Under no circumstances...*\n• **Not only ... but also (Không những ... mà còn):** Đảo ngữ ở vế đầu tiên.`,
        formula: `- Trạng từ phủ định + Trợ động từ + S + V?\n- Not only + Trợ động từ + S + V, but also S + V`,
        examples: [
          { english: "Never have I seen such a beautiful costume.", vietnamese: "Chưa bao giờ tớ được nhìn thấy một bộ trang phục đẹp như thế." },
          { english: "Not only is she a famous designer, but she is also very kind.", vietnamese: "Không những cô ấy là nhà thiết kế nổi tiếng mà còn cực kỳ tốt bụng." }
        ],
        chickenTip: "Hãy nhớ quy tắc vàng của đảo ngữ: Trật tự của chủ ngữ và động từ sau khi đảo sẽ giống hệt như trật tự của một câu hỏi nghi vấn vậy đó con!"
      }
    ],
    mindmap: `
      <div class="p-6 bg-[#FFFAF0] rounded-[32px] border-2 border-[#FFE8B6] space-y-6">
        <h3 class="font-bold text-center text-yellow-950 text-base font-display">🐔 SƠ ĐỒ TƯ DUY KÝ DIỆU - UNIT 12</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Grammatical Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#E8F1F2] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-sky-100 pb-2">
              <span class="text-xl">⚡</span>
              <h4 class="font-bold text-sky-800 text-xs font-display">SƠ ĐỒ NGỮ PHÁP (GRAMMAR)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Causative Structures -->
              <div class="p-3 bg-sky-50/50 rounded-2xl border border-sky-100">
                <span class="font-bold text-[11px] text-sky-700 block">💇‍♂️ Cấu Trúc Sai Khiến / Truyền Khiến (Causatives)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Dạng chủ động (Nhờ vả ai làm gì):</strong>
                    <ul class="list-circle pl-4">
                      <li>Have + somebody + V-bare (e.g., <em>have the barber cut my hair</em>).</li>
                      <li>Get + somebody + to-V (e.g., <em>get the mechanic to fix my car</em>).</li>
                    </ul>
                  </li>
                  <li><strong>Dạng bị động (Có cái gì được làm bởi ai):</strong>
                    <ul class="list-circle pl-4">
                      <li>Have / Get + something + V3/ed (e.g., <em>have my hair cut</em>, <em>get my car fixed</em>).</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <!-- Inversion -->
              <div class="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <span class="font-bold text-[11px] text-indigo-700 block">🔄 Cấu Trúc Đảo Ngữ (Inversion)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li>Đưa các phó từ/trạng từ phủ định lên đầu câu để nhấn mạnh (e.g., <em>Never, Rarely, Seldom, Hardly, Under no circumstances</em>).</li>
                  <li><strong>Quy tắc đảo:</strong> Phó từ phủ định + Trợ động từ + S + V (giống cấu trúc câu hỏi).</li>
                  <li>e.g., <em>Never have I seen such a beautiful view</em> (thay vì 'I have never seen').</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Vocabulary Mindmap -->
          <div class="bg-white p-5 rounded-3xl border-2 border-[#FFE8B6] space-y-4 shadow-xs">
            <div class="flex items-center gap-2 border-b border-amber-100 pb-2">
              <span class="text-xl">🌱</span>
              <h4 class="font-bold text-amber-800 text-xs font-display">SƠ ĐỒ TỪ VỰNG (VOCABULARY)</h4>
            </div>
            
            <div class="space-y-3">
              <!-- Fashion & Catwalk -->
              <div class="p-3 bg-amber-50/50 rounded-2xl border border-amber-100">
                <span class="font-bold text-[11px] text-amber-700 block">👗 Thời Trang & Sàn Diễn (Fashion & Styles)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Catwalk / Collection / Label:</strong> Sàn diễn thời trang / Bộ sưu tập / Nhãn mác sản phẩm.</li>
                  <li><strong>Mainstream / Smart / Ridiculous:</strong> Đại chúng, chính thống / Lịch sự, bảnh bao / Nực cười, lố bịch.</li>
                  <li><strong>Leggings / Heels / Dye:</strong> Quần thun ôm bó sát / Giày cao gót / Thuốc nhuộm, nhuộm màu.</li>
                  <li><strong>Suit / Fit:</strong> Phù hợp phong cách / Vừa vặn kích cỡ.</li>
                </ul>
              </div>

              <!-- Shopping & Transactions -->
              <div class="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <span class="font-bold text-[11px] text-emerald-700 block">🛍️ Mua Sắm & Giao Dịch (Shopping & Trading)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Purchase / Afford / Affordable:</strong> Mua sắm, món đồ mua / Có đủ tiền mua / Giá cả phải chăng.</li>
                  <li><strong>Bargain / Discount:</strong> Món hời, mặc cả / Sự giảm giá, chiết khấu.</li>
                  <li><strong>Receipt / Refund / Return / Exchange:</strong> Hóa đơn biên lai / Hoàn tiền / Trả lại hàng / Đổi hàng khác.</li>
                  <li><strong>Hire / Borrow:</strong> Trả tiền để thuê / Mượn tạm dùng.</li>
                  <li><strong>Shopaholic / Shoplifter:</strong> Người nghiện mua sắm / Kẻ trộm đồ trong cửa hàng.</li>
                  <li><strong>Catalogue / Brochure:</strong> Cuốn mục lục giới thiệu / Tờ thông tin sản phẩm quảng cáo.</li>
                </ul>
              </div>

              <!-- Action Phrasal Verbs -->
              <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100">
                <span class="font-bold text-[11px] text-pink-700 block">⚙️ Cụm Động Từ May Mặc (Clothing Phrasal Verbs)</span>
                <ul class="list-disc pl-4 text-[9px] text-slate-500 mt-1 space-y-0.5">
                  <li><strong>Put on / Take off / Dress up:</strong> Mặc đồ vào / Cởi đồ ra / Ăn diện lịch sự đẹp đẽ.</li>
                  <li><strong>Do up / Wear out:</strong> Kéo khóa, cài khuy / Sử dụng mòn rách hư hỏng.</li>
                  <li><strong>Take up / Take in:</strong> Cắt ngắn bớt gấu / Bóp nhỏ chật lại quần áo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    flashcards: unit12Flashcards,
    exercises: unit12Exercises
  }
];
