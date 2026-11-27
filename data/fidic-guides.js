// Structured insights from Source/2- So tay Hop dong FIDIC:
// - Contract Guide 2022 (FIDIC 2017) & Contract Guide 2000 (FIDIC 1999)
// - FIDIC Procurement Procedures Guide 2011
// - FIDIC Ultimate Diagram 1999 / So do FIDIC 1999

export const GUIDE_NOTES = {
  '1.5': {
    src: 'Contract Guide 2022',
    vi: 'Không nên đảo lộn thứ tự ưu tiên giữa Điều kiện Riêng và Điều kiện Chung. Mọi sửa đổi phải ghi rõ ở Điều kiện Riêng Phần B để tránh mâu thuẫn với Phần A (Dữ liệu Hợp đồng).',
    en: 'Do not invert the priority between Particular and General Conditions. Amendments belong in Part B so Part A (Contract Data) stays authoritative.'
  },
  '2.4': {
    src: 'Contract Guide 2022',
    vi: 'Mục đích của 2.4 là bảo đảm tính minh bạch tài chính của Chủ đầu tư trước khi Nhà thầu huy động nguồn lực lớn; bản 2017 siết chặt bằng cách cho phép yêu cầu bằng chứng khi có Thay đổi lớn (>10% hoặc >30% tổng cộng).',
    en: 'Ensures Employer financial transparency; 2017 strengthens Contractor rights to request evidence upon large Variations or payment delays.'
  },
  '3.7': {
    src: 'Contract Guide 2022',
    vi: 'Trọng tâm của bản 2017: Tách biệt rõ 2 giai đoạn 42 ngày Tham vấn và 42 ngày Quyết định. Trong giai đoạn 3.7, Nhà tư vấn hành động trung lập ("act neutrally"), không đại diện riêng cho Chủ đầu tư.',
    en: 'Core 2017 reform: Separates 42-day Consultation and 42-day Determination. Under 3.7, the Engineer acts neutrally rather than as Employer’s agent.'
  },
  '4.12': {
    src: 'Contract Guide 2022 & 2000',
    vi: 'Khái niệm "Unforeseeable" được đánh giá khách quan tại Ngày Cơ sở (Base Date = 28 ngày trước ngày nộp thầu), dựa trên tiêu chuẩn một nhà thầu có kinh nghiệm chứ không phải chủ quan của riêng Nhà thầu.',
    en: '"Unforeseeable" is tested objectively as of Base Date (28 days before tender submission) against an experienced contractor standard.'
  },
  '8.4': {
    src: 'Contract Guide 2022',
    vi: 'Cơ chế Cảnh báo Sớm (Advance Warning) mới trong bản 2017 khuyến khích hợp tác chủ động, giúp các bên xử lý rủi ro trước khi trở thành Khiếu nại hoặc Tranh chấp.',
    en: 'New 2017 Advance Warning encourages proactive risk mitigation before issues escalate into Claims or Disputes.'
  },
  '8.5': {
    src: 'Contract Guide 2022',
    vi: 'Hướng dẫn 2022 lưu ý vấn đề Chậm trễ Đồng thời (Concurrent Delay): nếu Hợp đồng không có quy định riêng trong Điều kiện Riêng, đánh giá theo nguyên tắc công bằng dựa trên đường găng tiến độ.',
    en: 'Guide 2022 highlights Concurrent Delay: unless Particular Conditions specify rules, entitlement is assessed fairly against the critical path.'
  },
  '13.3': {
    src: 'Contract Guide 2022',
    vi: 'Bản 2017 phân biệt rõ: Thay đổi theo Chỉ thị trực tiếp (13.3.1) bắt buộc thi công ngay, và Thay đổi qua Yêu cầu Đề xuất (13.3.2) chỉ thi công sau khi Nhà tư vấn phê duyệt đề xuất giá & tiến độ.',
    en: '2017 separates Variation by Instruction (13.3.1 — immediate execution) from Variation by Request for Proposal (13.3.2 — await approval).'
  },
  '14.6': {
    src: 'Contract Guide 2022 & 2000',
    vi: 'Nhà tư vấn không được giữ lại toàn bộ IPC chỉ vì tranh cãi một vài hạng mục nhỏ; phải chứng nhận thanh toán phần không tranh chấp trong hạn 28 ngày.',
    en: 'The Engineer must not withhold the entire IPC over minor disputed items; undisputed amounts must be certified within 28 days.'
  },
  '15.5': {
    src: 'Contract Guide 2022',
    vi: 'Điểm mới quan trọng của Contract Guide 2022: Chủ đầu tư chấm dứt vì lợi ích riêng (15.5) phải bồi thường cả lợi nhuận bị mất cho Nhà thầu và không được giao tiếp cho nhà thầu khác.',
    en: 'Key 2017 change: Termination for convenience requires compensating Contractor’s loss of profit and prohibits re-awarding to another contractor.'
  },
  '20.2': {
    src: 'Contract Guide 2022 & 2000',
    vi: 'Hướng dẫn FIDIC nhấn mạnh: Thông báo 20.2 không cần nêu số tiền hay chi tiết dài dòng, chỉ cần mô tả ngắn gọn sự kiện/hoàn cảnh làm phát sinh khiếu nại và ghi rõ là "Notice". Hồ sơ chi tiết sẽ nộp sau trong 84 ngày.',
    en: 'FIDIC Guide stresses: A 20.2 Notice need not state quantum or full particulars—only a concise description of the event/circumstance; full details follow within 84 days.'
  },
  '21.4': {
    src: 'Contract Guide 2022',
    vi: 'DAAB thường trực (Standing DAAB) giúp giải quyết vướng mắc theo thời gian thực ngay tại công trường. Quyết định của DAAB có hiệu lực ràng buộc ngay lập tức dù một bên có gửi NOD.',
    en: 'A Standing DAAB resolves issues in real time on Site. Its decision is immediately binding even if a Party issues a Notice of Dissatisfaction.'
  }
};

export const PROCUREMENT_STEPS = [
  { step: '1', badge: 'Chiến lược', viTitle: 'Xác định Chiến lược & Chọn Bộ sách', enTitle: 'Procurement Strategy & Book Selection', vi: 'Xác định phân bổ thiết kế và rủi ro (Sách Đỏ / Vàng / Bạc) theo Hướng dẫn Đấu thầu FIDIC 2011.', en: 'Define design & risk allocation (Red / Yellow / Silver) per FIDIC Procurement Guide 2011.' },
  { step: '2', badge: 'Sơ tuyển', viTitle: 'Sơ tuyển Nhà thầu (Prequalification)', enTitle: 'Prequalification of Tenderers', vi: 'Đánh giá năng lực tài chính, kinh nghiệm thi công tương tự, nhân sự chủ chốt và thiết bị.', en: 'Assess financial soundness, similar experience, key personnel, and equipment.' },
  { step: '3', badge: 'Hồ sơ mời thầu', viTitle: 'Chuẩn bị Hồ sơ Mời thầu & Điều kiện Riêng', enTitle: 'Tender Documents & Particular Conditions', vi: 'Soạn Yêu cầu Chủ đầu tư / Đặc tính kỹ thuật, Dữ liệu Hợp đồng (Part A) và Điều kiện Riêng (Part B) tuân thủ 5 Nguyên tắc Vàng.', en: 'Prepare Specification/ER, Contract Data (Part A), and Particular Conditions (Part B) respecting the 5 Golden Principles.' },
  { step: '4', badge: 'Đấu thầu', viTitle: 'Khảo sát Công trường & Giải đáp (Base Date -28d)', enTitle: 'Site Visit & Clarifications (Base Date -28d)', vi: 'Tổ chức khảo sát thực tế, phát hành văn bản làm rõ; mọi dữ liệu trước Base Date (28 ngày trước mở thầu) làm chuẩn đánh giá rủi ro.', en: 'Conduct Site visit and clarifications; data 28 days prior to tender submission forms the Base Date.' },
  { step: '5', badge: 'Đánh giá', viTitle: 'Đánh giá Hồ sơ Dự thầu (Kỹ thuật & Giá)', enTitle: 'Evaluation of Tenders', vi: 'Kiểm tra tính hợp lệ, sai lệch kỹ thuật, điều chỉnh sai số số học và đánh giá giá dự thầu quy đổi.', en: 'Check responsiveness, technical compliance, arithmetic corrections, and evaluated tender price.' },
  { step: '6', badge: 'Trao thầu', viTitle: 'Thư Chấp thuận (LOA) & Ký Hợp đồng', enTitle: 'Letter of Acceptance (LOA) & Agreement', vi: 'Phát hành LOA → Nhà thầu nộp Bảo lãnh Thực hiện (28d - 4.2) → Ký Thỏa thuận HĐ (35d - 1.6) → Khởi công (42d - 8.1).', en: 'Issue LOA → Performance Security (28d - 4.2) → Contract Agreement (35d - 1.6) → Commencement (42d - 8.1).' }
];

export const MASTER_LIFECYCLE = [
  { day: '-28d', titleVi: 'Ngày Cơ sở (Base Date)', titleEn: 'Base Date', hash: '#red-17-4-12' },
  { day: '0', titleVi: 'Thư Chấp thuận (LOA)', titleEn: 'Letter of Acceptance', hash: '#red-17-1-1' },
  { day: '+28d', titleVi: 'Bảo lãnh Thực hiện (4.2) & DAAB (21.1)', titleEn: 'Perf. Security & DAAB', hash: '#red-17-4-2' },
  { day: '+35d', titleVi: 'Ký Thỏa thuận HĐ (1.6)', titleEn: 'Contract Agreement', hash: '#red-17-1-6' },
  { day: '+42d', titleVi: 'Ngày Khởi công (8.1)', titleEn: 'Commencement Date', hash: '#red-17-8-1' },
  { day: '+70d', titleVi: 'Bảng Tiến độ đầu (8.3: +28d)', titleEn: 'Initial Programme', hash: '#red-17-8-3' },
  { day: 'Hàng tháng', titleVi: 'IPC (+28d) & Thanh toán (+56d)', titleEn: 'Monthly IPC & Payment', hash: '#red-17-14-6' },
  { day: '-21d', titleVi: 'Báo Kiểm định Hoàn thành (9.1)', titleEn: 'Tests on Completion', hash: '#red-17-9-1' },
  { day: 'Bàn giao', titleVi: 'Chứng chỉ Bàn giao (10.1)', titleEn: 'Taking-Over Certificate', hash: '#red-17-10-1' },
  { day: '+84d', titleVi: 'Hồ sơ TT Hoàn thành (14.10)', titleEn: 'Statement at Completion', hash: '#red-17-14-10' },
  { day: 'Hết DNP', titleVi: 'Chứng chỉ Thực hiện (+28d - 11.9)', titleEn: 'Performance Certificate', hash: '#red-17-11-9' },
  { day: '+56d / +28d', titleVi: 'Quyết toán (14.11) & FPC (14.13)', titleEn: 'Final Statement & FPC', hash: '#red-17-14-11' }
];
