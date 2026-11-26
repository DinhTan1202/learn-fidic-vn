export const SUBCLAUSE_META = {
  '1.1': { roles: ['all'], types: ['general'] },
  '1.3': { roles: ['employer', 'contractor', 'engineer'], types: ['notice'] },
  '1.5': { roles: ['all'], types: ['general'] },
  '1.6': { roles: ['employer', 'contractor'], types: ['time'] },
  '1.9': { roles: ['contractor', 'engineer'], types: ['notice', 'time'] },
  '2.1': { roles: ['employer', 'contractor'], types: ['time', 'payment'] },
  '2.4': { roles: ['employer'], types: ['payment'] },
  '2.5': { roles: ['employer', 'engineer'], types: ['notice', 'payment'] },
  '3.5': { roles: ['engineer', 'employer', 'contractor'], types: ['time', 'notice'] },
  '3.7': { roles: ['engineer'], types: ['time', 'notice'] },
  '4.1': { roles: ['contractor'], types: ['general'] },
  '4.2': { roles: ['contractor', 'employer'], types: ['security'] },
  '4.12': { roles: ['contractor', 'engineer'], types: ['notice', 'time', 'payment'] },
  '4.21': { roles: ['contractor'], types: ['notice', 'time'] },
  '5.1': { roles: ['contractor', 'engineer'], types: ['notice'] },
  '5.2': { roles: ['contractor', 'engineer'], types: ['time'] },
  '6.7': { roles: ['contractor', 'engineer'], types: ['notice'] },
  '7.4': { roles: ['contractor', 'engineer'], types: ['notice', 'time'] },
  '8.1': { roles: ['engineer', 'contractor'], types: ['notice', 'time'] },
  '8.3': { roles: ['contractor', 'engineer'], types: ['time'] },
  '8.5': { roles: ['contractor'], types: ['time'] },
  '8.7': { roles: ['contractor', 'employer'], types: ['payment', 'time'] },
  '9.1': { roles: ['contractor', 'engineer'], types: ['notice', 'time'] },
  '10.1': { roles: ['contractor', 'engineer'], types: ['notice', 'time'] },
  '11.9': { roles: ['engineer'], types: ['time'] },
  '12.1': { roles: ['engineer', 'contractor'], types: ['notice', 'payment'] },
  '13.2': { roles: ['contractor', 'engineer'], types: ['payment'] },
  '13.3': { roles: ['engineer', 'contractor'], types: ['payment', 'time'] },
  '13.7': { roles: ['employer', 'contractor'], types: ['payment'] },
  '14.2': { roles: ['employer', 'contractor'], types: ['payment', 'security', 'time'] },
  '14.6': { roles: ['engineer', 'employer'], types: ['payment', 'time'] },
  '14.7': { roles: ['employer'], types: ['payment', 'time'] },
  '14.8': { roles: ['employer', 'contractor'], types: ['payment'] },
  '14.9': { roles: ['employer', 'engineer'], types: ['payment', 'security'] },
  '15.2': { roles: ['employer'], types: ['notice', 'time'] },
  '15.5': { roles: ['employer'], types: ['notice', 'payment', 'time'] },
  '16.2': { roles: ['contractor'], types: ['notice', 'time'] },
  '17.1': { roles: ['contractor'], types: ['general'] },
  '18.2': { roles: ['employer', 'contractor'], types: ['notice', 'time'] },
  '19.1': { roles: ['contractor', 'employer'], types: ['security', 'notice'] },
  '20.1': { roles: ['employer', 'contractor'], types: ['notice', 'payment', 'time'] },
  '20.2': { roles: ['employer', 'contractor', 'engineer'], types: ['notice', 'payment', 'time'] },
  '20.4': { roles: ['employer', 'contractor'], types: ['time'] },
  '21.4': { roles: ['employer', 'contractor'], types: ['time', 'notice'] },
  '21.5': { roles: ['employer', 'contractor'], types: ['time'] },
  '21.6': { roles: ['employer', 'contractor'], types: ['general'] }
};

export const FLOWCHARTS = [
  {
    id: 'claim-20-2',
    viTitle: 'Sơ đồ Luồng Khiếu nại (20.2 → 3.7 → 21.4)',
    enTitle: 'Claim & Dispute Flow (20.2 → 3.7 → 21.4)',
    steps: [
      { badge: 'Ngày 0', vi: 'Biết sự việc', en: 'Event Awareness', hash: '#red-17-20-2' },
      { badge: '≤ 28 ngày', vi: 'Thông báo Khiếu nại', en: 'Notice of Claim', hash: '#red-17-20-2' },
      { badge: '≤ 14 ngày', vi: 'NTV kiểm tra trễ', en: 'Late Notice Check', hash: '#red-17-20-2' },
      { badge: '≤ 84 ngày', vi: 'Hồ sơ Chi tiết Đầy đủ', en: 'Fully Detailed Claim', hash: '#red-17-20-2' },
      { badge: '42 + 42 ngày', vi: 'Tham vấn & Quyết định 3.7', en: '3.7 Consultation & Det.', hash: '#red-17-3-7' },
      { badge: '≤ 28 ngày', vi: 'Gửi NOD (nếu phản đối)', en: 'Notice of Dissatisfaction', hash: '#red-17-3-7' },
      { badge: '≤ 42 ngày', vi: 'Chuyển lên DAAB (21.4)', en: 'Refer to DAAB (21.4)', hash: '#red-17-21-4' }
    ]
  },
  {
    id: 'payment-14',
    viTitle: 'Sơ đồ Luồng Thanh toán (14.6 → 14.7)',
    enTitle: 'Interim Payment Flow (14.6 → 14.7)',
    steps: [
      { badge: 'Hàng tháng', vi: 'Nhà thầu nộp Hồ sơ (Statement)', en: 'Contractor submits Statement', hash: '#red-17-14-6' },
      { badge: '≤ 28 ngày', vi: 'Nhà tư vấn phát hành IPC', en: 'Engineer issues IPC', hash: '#red-17-14-6' },
      { badge: '≤ 56 ngày', vi: 'Chủ đầu tư thanh toán IPC', en: 'Employer pays IPC', hash: '#red-17-14-7' }
    ]
  },
  {
    id: 'termination-15-16',
    viTitle: 'Sơ đồ Luồng Chấm dứt Hợp đồng (15.2 / 16.2)',
    enTitle: 'Termination Flow (15.2 / 16.2)',
    steps: [
      { badge: 'Vi phạm', vi: 'Thông báo Sửa chữa / Vi phạm', en: 'Notice to Correct / Default', hash: '#red-17-15-2' },
      { badge: '14 ngày', vi: 'Thông báo Ý định Chấm dứt', en: '14 Days’ Notice to Terminate', hash: '#red-17-15-2' },
      { badge: 'Hiệu lực', vi: 'Chấm dứt & Quyết toán', en: 'Termination & Valuation', hash: '#red-17-16-2' }
    ]
  }
];

export const CHECKLISTS = [
  {
    id: 'pre',
    viTitle: 'Giai đoạn Tiền Hợp đồng & Khởi công',
    enTitle: 'Pre-Contract & Commencement Phase',
    items: [
      { id: 'c1', vi: 'Nộp Bảo lãnh Thực hiện Hợp đồng (trong 28 ngày sau LOA - 4.2)', en: 'Submit Performance Security (within 28 days of LOA - 4.2)' },
      { id: 'c2', vi: 'Nộp Hợp đồng Bảo hiểm & chứng từ (19.1)', en: 'Submit Insurance Policies & evidence (19.1)' },
      { id: 'c3', vi: 'Nhận Thông báo Ngày Khởi công (trước ít nhất 14 ngày - 8.1)', en: 'Receive Commencement Date Notice (at least 14 days prior - 8.1)' },
      { id: 'c4', vi: 'Trao quyền Tiếp cận Công trường (2.1)', en: 'Employer grants Right of Access to Site (2.1)' },
      { id: 'c5', vi: 'Nộp Bảng Tiến độ Thi công ban đầu (trong 28 ngày - 8.3)', en: 'Submit initial Programme (within 28 days - 8.3)' }
    ]
  },
  {
    id: 'exec',
    viTitle: 'Giai đoạn Thi công & Quản lý Khiếu nại',
    enTitle: 'Construction & Claims Administration',
    items: [
      { id: 'e1', vi: 'Lưu giữ Hồ sơ hiện trường đồng thời (Contemporary Records - 20.2)', en: 'Maintain Contemporary Records daily (20.2)' },
      { id: 'e2', vi: 'Gửi Thông báo Khiếu nại đúng hạn 28 ngày (20.2)', en: 'Issue Notice of Claim within 28 days (20.2)' },
      { id: 'e3', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết trong 84 ngày (20.2)', en: 'Submit Fully Detailed Claim within 84 days (20.2)' },
      { id: 'e4', vi: 'Theo dõi phát hành IPC (28 ngày) & Thanh toán (56 ngày - 14.6/14.7)', en: 'Track IPC issuance (28d) & Payment (56d - 14.6/14.7)' },
      { id: 'e5', vi: 'Ghi nhận & Báo giá Thay đổi trong 28 ngày (13.3)', en: 'Submit Variation particulars within 28 days (13.3)' }
    ]
  },
  {
    id: 'close',
    viTitle: 'Giai đoạn Hoàn thành & Bàn giao',
    enTitle: 'Completion & Taking-Over Phase',
    items: [
      { id: 'f1', vi: 'Thông báo sẵn sàng Kiểm định khi Hoàn thành (trước 21 ngày - 9.1)', en: 'Notice of readiness for Tests on Completion (21 days prior - 9.1)' },
      { id: 'f2', vi: 'Nộp đơn đề nghị cấp Chứng chỉ Bàn giao (10.1)', en: 'Apply for Taking-Over Certificate (10.1)' },
      { id: 'f3', vi: 'Theo dõi Thời hạn Thông báo Sai sót (DNP) & Chứng chỉ Thực hiện (11.9)', en: 'Track Defects Notification Period & Performance Certificate (11.9)' },
      { id: 'f4', vi: 'Thu hồi Bảo lãnh Thực hiện Hợp đồng (trong 21 ngày sau 11.9 - 4.2)', en: 'Return of Performance Security (within 21 days of 11.9 - 4.2)' }
    ]
  }
];

export const GLOSSARY = [
  { term: 'EOT', full: 'Extension of Time', vi: 'Gia hạn Thời gian Hoàn thành công trình (Điều khoản 8.5).', en: 'Extension of Time for Completion (Sub-Clause 8.5).', hash: '#red-17-8-5' },
  { term: 'IPC', full: 'Interim Payment Certificate', vi: 'Chứng chỉ Thanh toán Tạm do Nhà tư vấn phát hành trong 28 ngày (14.6).', en: 'Interim Payment Certificate issued by the Engineer within 28 days (14.6).', hash: '#red-17-14-6' },
  { term: 'DAAB', full: 'Dispute Avoidance/Adjudication Board', vi: 'Ban Phòng ngừa và Xử lý Tranh chấp (thay thế DAB trong bản 2017 - Điều khoản 21).', en: 'Dispute Avoidance/Adjudication Board (replaces DAB in 2017 - Clause 21).', hash: '#red-17-21-4' },
  { term: 'NOD', full: 'Notice of Dissatisfaction', vi: 'Thông báo Không hài lòng gửi trong 28 ngày đối với Quyết định của Nhà tư vấn (3.7) hoặc DAAB (21.4).', en: 'Notice of Dissatisfaction issued within 28 days against an Engineer Determination (3.7) or DAAB Decision (21.4).', hash: '#red-17-3-7' },
  { term: 'Time Bar', full: 'Condition Precedent / Time-Barred', vi: 'Mất quyền khiếu nại nếu không gửi Thông báo trong 28 ngày (Điều khoản 20.2).', en: 'Loss of entitlement if Notice of Claim is not given within 28 days (Sub-Clause 20.2).', hash: '#red-17-20-2' },
  { term: 'DNP', full: 'Defects Notification Period', vi: 'Thời hạn Thông báo Sai sót (bảo hành) trước khi cấp Chứng chỉ Thực hiện (11.9).', en: 'Defects Notification Period prior to Performance Certificate (11.9).', hash: '#red-17-11-9' },
  { term: 'LOA', full: 'Letter of Acceptance', vi: 'Thư Chấp thuận của Chủ đầu tư chấp nhận Hồ sơ dự thầu.', en: 'Letter of Acceptance of the Tender issued by the Employer.', hash: '#red-17-4-2' },
  { term: 'Contemporary Records', full: 'Hồ sơ hiện trường đồng thời', vi: 'Nhật ký, biên bản, ảnh chụp, bảng chấm công lập ngay tại thời điểm xảy ra sự việc (20.2).', en: 'Records prepared or generated at the same time as the event (20.2).', hash: '#red-17-20-2' }
];

export const CROSS_REFS = [
  { from: '1.9', to: '20.2', vi: 'Chậm cấp bản vẽ → Khiếu nại EOT & Chi phí', en: 'Delayed Drawings → Claim EOT & Cost' },
  { from: '2.1', to: '20.2', vi: 'Chậm giao mặt bằng → Khiếu nại EOT & Chi phí', en: 'Delayed Site Access → Claim EOT & Cost' },
  { from: '4.12', to: '20.2', vi: 'Địa chất bất thường → Khiếu nại EOT & Chi phí', en: 'Unforeseeable Physical Conditions → Claim' },
  { from: '8.5', to: '20.2', vi: 'Các căn cứ EOT → Bắt buộc qua thủ tục 20.2', en: 'EOT Entitlements → Subject to 20.2' },
  { from: '13.3', to: '3.7', vi: 'Thay đổi (Variation) → Thỏa thuận/Quyết định 3.7', en: 'Variations → Valuation under 3.7' },
  { from: '20.2', to: '3.7', vi: 'Hồ sơ Khiếu nại → Nhà tư vấn giải quyết theo 3.7', en: 'Fully Detailed Claim → Engineer 3.7' },
  { from: '3.7', to: '21.4', vi: 'Không đồng ý Quyết định (NOD) → Đưa ra DAAB', en: 'Dissatisfied (NOD) → Refer to DAAB' }
];

export const BOOK_COMPARISON_ROWS = [
  { clause: '1.1', topicVi: 'Người quản lý HĐ', topicEn: 'Contract Admin', red: 'Engineer (Nhà tư vấn độc lập)', yel: 'Engineer (Nhà tư vấn độc lập)', sil: "Employer's Representative (Đại diện CĐT)" },
  { clause: '3.7 / 3.5', topicVi: 'Quyết định tranh chấp sơ bộ', topicEn: 'Determinations', red: 'Điều khoản 3.7 (42+42 ngày)', yel: 'Điều khoản 3.7 (42+42 ngày)', sil: 'Điều khoản 3.5 (42+42 ngày)' },
  { clause: '4.12', topicVi: 'Rủi ro địa chất ngầm', topicEn: 'Subsurface Risk', red: 'CĐT chịu rủi ro bất khả kháng', yel: 'CĐT chịu rủi ro bất khả kháng', sil: 'Nhà thầu EPC chịu gần như toàn bộ' },
  { clause: '5.x', topicVi: 'Trách nhiệm Thiết kế', topicEn: 'Design Scope', red: 'CĐT thiết kế (Clause 5 là Thầu phụ)', yel: 'Nhà thầu thiết kế (5.2 thẩm tra 21 ngày)', sil: 'Nhà thầu EPC thiết kế trọn gói' },
  { clause: '8.5', topicVi: 'Căn cứ gia hạn EOT', topicEn: 'EOT Grounds', red: 'Đầy đủ 5 nhóm (gồm thời tiết đặc biệt)', yel: 'Đầy đủ 5 nhóm (gồm thời tiết đặc biệt)', sil: 'Hẹp hơn (không gồm thời tiết thông thường)' },
  { clause: '12 / 14', topicVi: 'Cơ chế Thanh toán', topicEn: 'Payment Basis', red: 'Đo lường khối lượng thực tế (BOQ) + IPC', yel: 'Giá trọn gói theo mốc (Milestones) + IPC', sil: 'Giá trọn gói (Lump Sum), không có IPC' },
  { clause: '20.2', topicVi: 'Thủ tục Khiếu nại', topicEn: 'Claims Procedure', red: '28d Notice → 14d → 84d → 3.7', yel: '28d Notice → 14d → 84d → 3.7', sil: '28d Notice → 14d → 84d → 3.5' },
  { clause: '21.4', topicVi: 'Ban Xử lý Tranh chấp', topicEn: 'DAAB', red: 'Standing DAAB (42d / 84d)', yel: 'Standing DAAB (42d / 84d)', sil: 'Standing DAAB (42d / 84d)' }
];
