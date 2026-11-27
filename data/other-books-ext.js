export const OTHER_BOOKS_EXT = [
  // ================= YELLOW BOOK 2017 EXTENDED =================
  {
    book: 'yel', ed: '17', clause: 1, id: '1.3',
    viTitle: 'Thông báo và Trao đổi (Sách Vàng)', enTitle: 'Notices and Other Communications (Yellow)',
    viBody: 'Mọi Notice phải lập thành văn bản, ghi rõ là "Notice" và gửi đúng địa chỉ trong Dữ liệu Hợp đồng.',
    enBody: 'Every Notice must be in writing, explicitly identified as a Notice, and delivered as stated in Contract Data.',
    timelimits: [], eq99: ['1.3']
  },
  {
    book: 'yel', ed: '17', clause: 1, id: '1.15',
    viTitle: 'Giới hạn Trách nhiệm (Sách Vàng)', enTitle: 'Limitation of Liability (Yellow)',
    viBody: 'Bao gồm cả trách nhiệm bồi thường lỗi thiết kế (17.4) trong mức trần trách nhiệm tổng thể, ngoại trừ gian lận, cố ý vi phạm, bất cẩn nghiêm trọng (gross negligence), IP (17.3) và LDs (8.8).',
    enBody: 'Includes 17.4 design indemnity within the overall cap, excluding fraud, deliberate default, gross negligence, IP (17.3), and LDs (8.8).',
    timelimits: [], eq99: ['17.6']
  },
  {
    book: 'yel', ed: '17', clause: 2, id: '2.4',
    viTitle: 'Thu xếp Tài chính của Chủ đầu tư (Sách Vàng)', enTitle: "Employer's Financial Arrangements (Yellow)",
    viBody: 'Chủ đầu tư phải chứng minh tài chính trong 28 ngày khi Nhà thầu yêu cầu sau Thay đổi lớn (>10% hoặc >30% lũy kế) hoặc chậm thanh toán.',
    enBody: 'Employer provides financial evidence within 28 days upon Contractor request after material Variations or payment delays.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Cung cấp bằng chứng tài chính trong 28 ngày', en: 'Provide financial evidence within 28 days' }], eq99: ['2.4']
  },
  {
    book: 'yel', ed: '17', clause: 5, id: '5.3',
    viTitle: 'Cam kết của Nhà thầu về Thiết kế', enTitle: "Contractor's Undertaking (Yellow)",
    viBody: 'Nhà thầu cam kết thiết kế, Tài liệu Nhà thầu và thi công tuân thủ pháp luật hiện hành và các tài liệu hợp đồng.',
    enBody: 'Contractor undertakes that design, Contractor’s Documents, and execution comply with applicable Laws and the Contract.',
    timelimits: [], eq99: ['5.3']
  },
  {
    book: 'yel', ed: '17', clause: 8, id: '8.3',
    viTitle: 'Tiến độ Thiết kế & Thi công (Sách Vàng)', enTitle: 'Programme (Yellow)',
    viBody: 'Nộp tiến độ chi tiết (gồm cả giai đoạn thiết kế, mua sắm thiết bị và lắp đặt) trong 28 ngày từ Ngày Khởi công; Nhà tư vấn có 21 ngày xem xét.',
    enBody: 'Submit detailed Programme (including design, procurement, and installation) within 28 days; Engineer has 21 days to review.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Bảng tiến độ ban đầu', en: 'Submit initial Programme' }], eq99: ['8.3']
  },
  {
    book: 'yel', ed: '17', clause: 8, id: '8.4',
    viTitle: 'Cảnh báo Sớm (Sách Vàng)', enTitle: 'Advance Warning (Yellow)',
    viBody: 'Hai bên phải cảnh báo sớm các rủi ro thiết kế, cung ứng thiết bị hoặc thi công có thể làm chậm tiến độ hoặc tăng Giá Hợp đồng.',
    enBody: 'Both Parties must give advance warning of probable future design, procurement, or construction issues.',
    timelimits: [], eq99: []
  },
  {
    book: 'yel', ed: '17', clause: 14, id: '14.2',
    viTitle: 'Thanh toán Tạm ứng (Sách Vàng)', enTitle: 'Advance Payment (Yellow)',
    viBody: 'Thanh toán sau khi nhận Bảo lãnh Tạm ứng & Bảo lãnh Thực hiện, thu hồi dần theo tỷ lệ qua các kỳ IPC.',
    enBody: 'Paid upon Advance Payment Guarantee & Performance Security, repaid via deductions in IPCs.',
    timelimits: [], eq99: ['14.2']
  },
  {
    book: 'yel', ed: '17', clause: 15, id: '15.5',
    viTitle: 'Chấm dứt vì Lợi ích Chủ đầu tư (Sách Vàng)', enTitle: "Termination for Employer's Convenience (Yellow)",
    viBody: 'Thông báo trước 28 ngày và phải bồi thường cả lợi nhuận bị mất cho Nhà thầu theo 15.6.',
    enBody: '28 days’ Notice and Employer must compensate Contractor’s loss of profit under 15.6.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo trước 28 ngày', en: '28 days’ Notice' }], eq99: ['15.5']
  },
  {
    book: 'yel', ed: '17', clause: 16, id: '16.1',
    viTitle: 'Tạm ngừng bởi Nhà thầu (Sách Vàng)', enTitle: 'Suspension by Contractor (Yellow)',
    viBody: 'Nhà thầu gửi Thông báo trước 21 ngày để tạm ngừng nếu không được cấp IPC hoặc không được thanh toán đúng hạn.',
    enBody: '21 days’ Notice to suspend if IPC or payment is overdue.',
    timelimits: [{ badge: '21 ngày', badgeEn: '21 days', vi: 'Thông báo trước 21 ngày', en: '21 days’ Notice' }], eq99: ['16.1']
  },
  {
    book: 'yel', ed: '17', clause: 20, id: '20.1',
    viTitle: 'Các loại Khiếu nại (Sách Vàng)', enTitle: 'Claims (Yellow)',
    viBody: 'Áp dụng đối xứng cho cả Chủ đầu tư và Nhà thầu với 3 nhóm (a), (b), (c).',
    enBody: 'Symmetrical Claims framework (a), (b), and (c) for both Parties.',
    timelimits: [], eq99: ['2.5', '20.1']
  },
  {
    book: 'yel', ed: '17', clause: 21, id: '21.1',
    viTitle: 'Thành lập DAAB (Sách Vàng)', enTitle: 'Constitution of the DAAB (Yellow)',
    viBody: 'Bổ nhiệm Standing DAAB trong 28 ngày kể từ Thư Chấp thuận.',
    enBody: 'Appoint Standing DAAB within 28 days of LOA.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Thành lập DAAB trong 28 ngày', en: 'Constitute DAAB within 28 days' }], eq99: ['20.2']
  },

  // ================= SILVER BOOK 2017 EXTENDED =================
  {
    book: 'sil', ed: '17', clause: 1, id: '1.3',
    viTitle: 'Thông báo và Trao đổi (Sách Bạc)', enTitle: 'Notices and Other Communications (Silver)',
    viBody: 'Mọi Notice phải lập thành văn bản, ghi rõ là "Notice" và gửi trực tiếp cho Bên kia (vì không có Nhà tư vấn độc lập).',
    enBody: 'Every Notice must be in writing, identified as a Notice, and delivered to the other Party (no Engineer).',
    timelimits: [], eq99: ['1.3']
  },
  {
    book: 'sil', ed: '17', clause: 1, id: '1.14',
    viTitle: 'Giới hạn Trách nhiệm (Sách Bạc)', enTitle: 'Limitation of Liability (Silver)',
    viBody: 'Lưu ý đánh số riêng của Sách Bạc: Giới hạn trách nhiệm nằm ở **1.14** (thay vì 1.15 như Sách Đỏ/Vàng), bao gồm cả lỗi thiết kế 17.4 và ngoại trừ gross negligence.',
    enBody: 'Note Silver Book numbering: Limitation of Liability is at **1.14** (instead of 1.15 in Red/Yellow), covering 17.4 and excluding gross negligence.',
    timelimits: [], eq99: ['17.6']
  },
  {
    book: 'sil', ed: '17', clause: 5, id: '5.2',
    viTitle: 'Tài liệu Nhà thầu (Sách Bạc EPC)', enTitle: "Contractor's Documents (Silver)",
    viBody: 'Nhà thầu EPC nộp Tài liệu thiết kế để Chủ đầu tư xem xét trong 21 ngày theo phạm vi quy định trong Yêu cầu của Chủ đầu tư.',
    enBody: 'EPC Contractor submits Contractor’s Documents for Employer review within 21 days where specified in Employer’s Requirements.',
    timelimits: [{ badge: '21 ngày', badgeEn: '21 days', vi: 'Thời hạn Chủ đầu tư xem xét tài liệu', en: 'Employer Review Period (21 days)' }], eq99: ['5.2']
  },
  {
    book: 'sil', ed: '17', clause: 8, id: '8.3',
    viTitle: 'Tiến độ EPC (Sách Bạc)', enTitle: 'Programme (Silver)',
    viBody: 'Nộp tiến độ tổng thể EPC trong 28 ngày kể từ Ngày Khởi công; Chủ đầu tư có 21 ngày thông báo nếu không phù hợp.',
    enBody: 'Submit EPC Programme within 28 days of Commencement; Employer has 21 days to give Notice of non-compliance.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp tiến độ EPC trong 28 ngày', en: 'Submit within 28 days' }], eq99: ['8.3']
  },
  {
    book: 'sil', ed: '17', clause: 8, id: '8.8',
    viTitle: 'Tiền Bồi thường Chậm trễ (Sách Bạc)', enTitle: 'Delay Damages (Silver)',
    viBody: 'Áp dụng mức LDs mỗi ngày chậm hoàn thành nhà máy/công trình; nếu chạm trần LDs, Chủ đầu tư có quyền chấm dứt theo 15.2.1(c).',
    enBody: 'Daily Delay Damages up to the cap; Employer gains termination right under 15.2.1(c) when cap is exceeded.',
    timelimits: [], eq99: ['8.7']
  },
  {
    book: 'sil', ed: '17', clause: 14, id: '14.2',
    viTitle: 'Thanh toán Tạm ứng (Sách Bạc)', enTitle: 'Advance Payment (Silver)',
    viBody: 'Thanh toán sau khi nhận Bảo lãnh Tạm ứng & Bảo lãnh Thực hiện, thu hồi qua các đợt thanh toán.',
    enBody: 'Paid against Advance Payment Guarantee & Performance Security.',
    timelimits: [], eq99: ['14.2']
  },
  {
    book: 'sil', ed: '17', clause: 15, id: '15.5',
    viTitle: 'Chấm dứt vì Lợi ích Chủ đầu tư (Sách Bạc)', enTitle: "Termination for Employer's Convenience (Silver)",
    viBody: 'Thông báo trước 28 ngày và bồi thường lợi nhuận bị mất theo 15.6.',
    enBody: '28 days’ Notice and compensation for loss of profit under 15.6.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo trước 28 ngày', en: '28 days’ Notice' }], eq99: ['15.5']
  },
  {
    book: 'sil', ed: '17', clause: 16, id: '16.1',
    viTitle: 'Tạm ngừng bởi Nhà thầu EPC (Sách Bạc)', enTitle: 'Suspension by Contractor (Silver)',
    viBody: 'Thông báo trước 21 ngày để tạm ngừng nếu Chủ đầu tư không thông báo thanh toán hoặc chậm thanh toán.',
    enBody: '21 days’ Notice to suspend for non-payment.',
    timelimits: [{ badge: '21 ngày', badgeEn: '21 days', vi: 'Thông báo trước 21 ngày', en: '21 days’ Notice' }], eq99: ['16.1']
  },
  {
    book: 'sil', ed: '17', clause: 20, id: '20.1',
    viTitle: 'Các loại Khiếu nại (Sách Bạc)', enTitle: 'Claims (Silver)',
    viBody: 'Áp dụng bình đẳng cho cả Chủ đầu tư và Nhà thầu EPC theo 20.1 & 20.2.',
    enBody: 'Symmetrical Claims procedure under 20.1 & 20.2.',
    timelimits: [], eq99: ['2.5', '20.1']
  },

  // ================= RED BOOK 1999 EXTENDED =================
  {
    book: 'red', ed: '99', clause: 1, id: '1.5',
    viTitle: 'Thứ tự Ưu tiên Tài liệu (1999)', enTitle: 'Priority of Documents (1999)',
    viBody: 'Thứ tự ưu tiên bản 1999 không tách Điều kiện Riêng thành Part A (Contract Data) và Part B (Special Provisions) như bản 2017.',
    enBody: '1999 priority does not split Particular Conditions into Part A (Contract Data) and Part B (Special Provisions) as in 2017.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 2, id: '2.1',
    viTitle: 'Quyền tiếp cận Công trường (1999)', enTitle: 'Right of Access to the Site (1999)',
    viBody: 'Chậm bàn giao mặt bằng cho phép Nhà thầu khiếu nại EOT + Cost + Reasonable Profit theo 20.1 (1999).',
    enBody: 'Delayed Site access entitles Contractor to EOT and Cost plus reasonable profit under 20.1 (1999).',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 8, id: '8.1',
    viTitle: 'Khởi công Công trình (1999)', enTitle: 'Commencement of Works (1999)',
    viBody: 'Nhà tư vấn thông báo Ngày Khởi công trước ít nhất 7 ngày (bản 2017 tăng lên 14 ngày), trong vòng 42 ngày sau Thư Chấp thuận.',
    enBody: 'Engineer gives at least 7 days’ Notice of Commencement Date (extended to 14 days in 2017), within 42 days of LOA.',
    timelimits: [{ badge: '7 ngày', badgeEn: '7 days', vi: 'Báo trước tối thiểu 7 ngày (2017 là 14 ngày)', en: 'At least 7 days’ Notice (14 days in 2017)' }], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 8, id: '8.7',
    viTitle: 'Tiền Bồi thường Chậm trễ (1999)', enTitle: 'Delay Damages (1999)',
    viBody: 'Trong bản 1999, Delay Damages nằm ở **8.7** (sang 2017 chuyển thành **8.8**). Chủ đầu tư khiếu nại theo 2.5 và bản 1999 chưa có quyền chấm dứt khi chạm trần LDs.',
    enBody: 'In 1999, Delay Damages is at **8.7** (moved to **8.8** in 2017). Claimed under 2.5 without a cap-triggered termination right.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 12, id: '12.3',
    viTitle: 'Xác định Giá trị BOQ (1999)', enTitle: 'Evaluation (1999)',
    viBody: 'Quy tắc đổi đơn giá khi khối lượng thay đổi >10% và tác động >0.01% Giá HĐ được giữ gần như tương đồng sang 2017.',
    enBody: 'The >10% quantity and >0.01% price thresholds for adjusting BOQ rates carry over similarly into 2017.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 14, id: '14.8',
    viTitle: 'Thanh toán Chậm trễ (1999)', enTitle: 'Delayed Payment (1999)',
    viBody: 'Lãi chậm trả tính gộp hàng tháng theo tỷ lệ cao hơn 3% so với lãi suất chiết khấu ngân hàng trung ương.',
    enBody: 'Financing charges compounded monthly at 3% above central bank discount rate.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 15, id: '15.2',
    viTitle: 'Chấm dứt bởi Chủ đầu tư (1999)', enTitle: 'Termination by Employer (1999)',
    viBody: 'Thông báo trước 14 ngày cho các vi phạm nghiêm trọng; bản 1999 chưa có căn cứ chấm dứt khi LDs chạm trần như 2017.',
    enBody: '14 days’ Notice for major defaults; lacks 2017’s LDs-cap termination trigger.',
    timelimits: [{ badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày', en: '14 days’ Notice' }], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 15, id: '15.5',
    viTitle: 'Chấm dứt vì Lợi ích Chủ đầu tư (1999)', enTitle: "Employer's Entitlement to Termination (1999)",
    viBody: 'Khác biệt lớn với 2017: Bản 1999 chấm dứt vì lợi ích riêng chỉ trả theo 19.6 (không bồi thường lợi nhuận bị mất cho Nhà thầu).',
    enBody: 'Major difference from 2017: 1999 convenience termination pays under 19.6 without compensating loss of profit.',
    timelimits: [{ badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo trước 28 ngày', en: '28 days’ Notice' }], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 16, id: '16.2',
    viTitle: 'Chấm dứt bởi Nhà thầu (1999)', enTitle: 'Termination by Contractor (1999)',
    viBody: 'Nhà thầu có quyền chấm dứt khi Chủ đầu tư chậm thanh toán hoặc vi phạm nghiêm trọng sau 14 ngày thông báo.',
    enBody: 'Contractor may terminate on 14 days’ Notice for prolonged non-payment or material Employer breach.',
    timelimits: [{ badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày', en: '14 days’ Notice' }], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 17, id: '17.6',
    viTitle: 'Giới hạn Trách nhiệm (1999)', enTitle: 'Limitation of Liability (1999)',
    viBody: 'Trong bản 1999, Giới hạn trách nhiệm nằm ở **17.6** (sang 2017 chuyển lên **1.15** và bổ sung ngoại lệ *gross negligence*).',
    enBody: 'In 1999, Limitation of Liability sits at **17.6** (moved to **1.15** in 2017 with gross negligence added).',
    timelimits: [], eq99: []
  }
];
