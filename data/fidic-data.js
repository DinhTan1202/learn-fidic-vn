export const I18N = {
  vi: {
    brand: 'Học FIDIC',
    navHome: 'Trang chủ',
    navBooks: 'Các bộ sách',
    navLearn: 'Học FIDIC',
    navModels: 'Biểu mẫu',
    navProject: 'Ví dụ dự án',
    navSaved: 'Đã lưu',
    tocTitle: 'Mục lục (21 Điều khoản)',
    searchPh: 'Tìm theo số điều khoản hoặc từ khóa...',
    allBooks: 'Tất cả sách',
    hasTimelimits: 'Có thời hạn',
    results: (n) => `${n} kết quả`,
    timeLimitsTag: (n) => `${n} thời hạn`,
    eq1999: 'Tương ứng 1999:',
    copy: 'Sao chép',
    pdf: 'PDF / In',
    save: 'Lưu',
    savedBtn: 'Đã lưu',
    note: 'Ghi chú',
    copyLink: 'Sao chép link',
    present: 'Trình chiếu',
    compare3: 'So sánh 3 sách',
    compareMode: 'So sánh',
    openBook: 'Mở sách →',
    close: 'Đóng',
    prev: '← Trước',
    next: 'Sau →',
    copiedText: 'Đã sao chép nội dung điều khoản',
    copiedLink: 'Đã sao chép đường dẫn',
    copiedTpl: 'Đã sao chép biểu mẫu',
    savedToast: 'Đã lưu vào mục Đã lưu',
    removedToast: 'Đã xóa khỏi mục Đã lưu',
    noteSavedToast: 'Đã lưu ghi chú cá nhân',
    noResults: 'Không tìm thấy điều khoản phù hợp.',
    compareModalTitle: (id) => `Điều khoản ${id} trong 3 bộ sách (2017)`,
    notePlaceholder: 'Nhập ghi chú dự án, bài học kinh nghiệm hoặc lưu ý áp dụng cho điều khoản này...',
    saveNote: 'Lưu ghi chú',
    deleteNote: 'Xóa ghi chú',
    books: {
      red: { name: 'Sách Đỏ (Red Book)', short: 'Sách Đỏ', desc: 'Hợp đồng Thi công Xây dựng (Thiết kế do Chủ đầu tư cung cấp)' },
      yel: { name: 'Sách Vàng (Yellow Book)', short: 'Sách Vàng', desc: 'Hợp đồng Thiết bị & Thiết kế - Thi công (Design & Build)' },
      sil: { name: 'Sách Bạc (Silver Book)', short: 'Sách Bạc', desc: 'Hợp đồng EPC / Chìa khóa trao tay (Turnkey)' }
    }
  },
  en: {
    brand: 'Learn FIDIC',
    navHome: 'Home',
    navBooks: 'Books',
    navLearn: 'Learn FIDIC',
    navModels: 'Templates',
    navProject: 'Project Example',
    navSaved: 'Saved',
    tocTitle: 'Table of Contents (21 Clauses)',
    searchPh: 'Search by clause number or keyword...',
    allBooks: 'All Books',
    hasTimelimits: 'Has Time Limits',
    results: (n) => `${n} results`,
    timeLimitsTag: (n) => `${n} time limits`,
    eq1999: '1999 Equivalent:',
    copy: 'Copy',
    pdf: 'PDF / Print',
    save: 'Save',
    savedBtn: 'Saved',
    note: 'Note',
    copyLink: 'Copy Link',
    present: 'Present',
    compare3: 'Compare 3 Books',
    compareMode: 'Compare',
    openBook: 'Open Book →',
    close: 'Close',
    prev: '← Prev',
    next: 'Next →',
    copiedText: 'Clause summary copied to clipboard',
    copiedLink: 'Deep link copied to clipboard',
    copiedTpl: 'Template copied to clipboard',
    savedToast: 'Saved to bookmarks',
    removedToast: 'Removed from bookmarks',
    noteSavedToast: 'Personal note saved',
    noResults: 'No matching sub-clauses found.',
    compareModalTitle: (id) => `Sub-Clause ${id} across the 3 Books (2017)`,
    notePlaceholder: 'Add project notes, lessons learned, or contract administration reminders...',
    saveNote: 'Save Note',
    deleteNote: 'Delete Note',
    books: {
      red: { name: 'Red Book', short: 'Red', desc: 'Conditions of Contract for Construction (Employer-designed)' },
      yel: { name: 'Yellow Book', short: 'Yellow', desc: 'Conditions of Contract for Plant & Design-Build' },
      sil: { name: 'Silver Book', short: 'Silver', desc: 'Conditions of Contract for EPC / Turnkey Projects' }
    }
  }
};

export const CLAUSES_2017 = [
  { num: 1, vi: 'Quy định chung', en: 'General Provisions' },
  { num: 2, vi: 'Chủ đầu tư', en: 'The Employer' },
  { num: 3, vi: 'Nhà tư vấn (Kỹ sư)', en: 'The Engineer' },
  { num: 4, vi: 'Nhà thầu', en: 'The Contractor' },
  { num: 5, vi: 'Thầu phụ / Thiết kế', en: 'Subcontracting / Design' },
  { num: 6, vi: 'Nhân sự và Lao động', en: 'Staff and Labour' },
  { num: 7, vi: 'Thiết bị, Vật tư và Tay nghề', en: 'Plant, Materials and Workmanship' },
  { num: 8, vi: 'Khởi công, Chậm trễ và Tạm ngừng', en: 'Commencement, Delays and Suspension' },
  { num: 9, vi: 'Kiểm định khi Hoàn thành', en: 'Tests on Completion' },
  { num: 10, vi: 'Chủ đầu tư Tiếp nhận Công trình', en: "Employer's Taking Over" },
  { num: 11, vi: 'Trách nhiệm đối với Sai sót', en: 'Defects after Taking Over' },
  { num: 12, vi: 'Đo lường và Xác định giá trị', en: 'Measurement and Valuation' },
  { num: 13, vi: 'Thay đổi và Điều chỉnh', en: 'Variations and Adjustments' },
  { num: 14, vi: 'Giá Hợp đồng và Thanh toán', en: 'Contract Price and Payment' },
  { num: 15, vi: 'Chấm dứt Hợp đồng bởi Chủ đầu tư', en: 'Termination by Employer' },
  { num: 16, vi: 'Tạm ngừng và Chấm dứt bởi Nhà thầu', en: 'Suspension and Termination by Contractor' },
  { num: 17, vi: 'Trách nhiệm Bảo quản và Bồi thường', en: 'Care of the Works and Indemnities' },
  { num: 18, vi: 'Sự kiện Ngoại lệ', en: 'Exceptional Events' },
  { num: 19, vi: 'Bảo hiểm', en: 'Insurance' },
  { num: 20, vi: 'Khiếu nại của Chủ đầu tư và Nhà thầu', en: "Employer's and Contractor's Claims" },
  { num: 21, vi: 'Tranh chấp và Trọng tài', en: 'Disputes and Arbitration' }
];

export const SUBCLAUSES = [
  // ================= RED BOOK 2017 (All 21 Clauses covered) =================
  {
    book: 'red', ed: '17', clause: 1, id: '1.1',
    viTitle: 'Định nghĩa', enTitle: 'Definitions',
    viBody: 'Giải thích các thuật ngữ cốt lõi dùng xuyên suốt hợp đồng như Chủ đầu tư, Nhà thầu, Nhà tư vấn, Giá Hợp đồng được chấp nhận, Thời gian hoàn thành, Khiếu nại và Tranh chấp. Phiên bản 2017 bổ sung nhiều định nghĩa mới (như "Notice", "Claim", "Dispute", "DAAB") để tăng tính rõ ràng.',
    enBody: 'Defines core terms used throughout the Contract such as Employer, Contractor, Engineer, Accepted Contract Amount, Time for Completion, Claim, and Dispute. The 2017 edition expands definitions (e.g., Notice, Claim, Dispute, DAAB) for greater precision.',
    timelimits: [], eq99: ['1.1']
  },
  {
    book: 'red', ed: '17', clause: 1, id: '1.3',
    viTitle: 'Thông báo và các Trao đổi khác', enTitle: 'Notices and Other Communications',
    viBody: 'Mọi Thông báo (Notice) theo hợp đồng phải được lập thành văn bản, ghi rõ là "Notice" và gửi đúng địa chỉ quy định. Việc gửi qua hệ thống điện tử chỉ có hiệu lực nếu được nêu trong Dữ liệu Hợp đồng.',
    enBody: 'Every contractual Notice must be in writing, explicitly identified as a Notice, and delivered to the specified address. Electronic transmission is valid only if stated in the Contract Data.',
    timelimits: [], eq99: ['1.3']
  },
  {
    book: 'red', ed: '17', clause: 1, id: '1.9',
    viTitle: 'Chậm trễ Bản vẽ hoặc Chỉ dẫn', enTitle: 'Delayed Drawings or Instructions',
    viBody: 'Nhà thầu phải thông báo cho Nhà tư vấn nếu công trình có nguy cơ bị chậm do bản vẽ hoặc chỉ dẫn chưa được cấp kịp thời. Nếu Nhà tư vấn chậm cấp sau thời hạn hợp lý trong thông báo, Nhà thầu có quyền khiếu nại gia hạn thời gian và chi phí theo Điều khoản 20.2.',
    enBody: 'The Contractor must notify the Engineer whenever the Works are likely to be delayed if a drawing or instruction is not issued within a reasonable time. If delay occurs despite Notice, the Contractor may claim EOT and Cost Plus Profit under Sub-Clause 20.2.',
    timelimits: [
      { badge: 'Hợp lý', badgeEn: 'Reasonable', vi: 'Thông báo trước cho Nhà tư vấn về bản vẽ/chỉ dẫn còn thiếu và thời điểm cần cấp', en: 'Prior Notice to Engineer specifying missing drawing/instruction and when needed' }
    ], eq99: ['1.9']
  },
  {
    book: 'red', ed: '17', clause: 2, id: '2.1',
    viTitle: 'Quyền tiếp cận Công trường', enTitle: 'Right of Access to the Site',
    viBody: 'Chủ đầu tư phải trao quyền tiếp cận và chiếm hữu công trường cho Nhà thầu đúng thời hạn nêu trong Dữ liệu Hợp đồng. Nếu chậm trễ gây phát sinh chi phí hoặc chậm tiến độ, Nhà thầu được quyền khiếu nại theo Điều khoản 20.2.',
    enBody: 'The Employer must give the Contractor right of access to and possession of the Site within the times stated in the Contract Data. Delay entitles the Contractor to EOT and Cost Plus Profit under Sub-Clause 20.2.',
    timelimits: [
      { badge: 'Theo HĐ', badgeEn: 'Contract', vi: 'Trao quyền tiếp cận công trường theo mốc thời gian trong Dữ liệu Hợp đồng', en: 'Access granted by the time(s) stated in the Contract Data' }
    ], eq99: ['2.1']
  },
  {
    book: 'red', ed: '17', clause: 2, id: '2.4',
    viTitle: 'Thu xếp Tài chính của Chủ đầu tư', enTitle: "Employer's Financial Arrangements",
    viBody: 'Chủ đầu tư phải nêu rõ thu xếp tài chính trong Dữ liệu Hợp đồng và cung cấp bằng chứng hợp lý trong vòng 28 ngày khi Nhà thầu yêu cầu (trong các trường hợp thay đổi giá trị hợp đồng đáng kể hoặc chậm thanh toán).',
    enBody: 'The Employer must set out financial arrangements in the Contract Data and provide reasonable evidence within 28 days of a Contractor request following material Variations or payment delays.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Chủ đầu tư cung cấp bằng chứng thu xếp tài chính kể từ khi nhận yêu cầu của Nhà thầu', en: 'Employer submits reasonable evidence within 28 days of receiving Contractor request' }
    ], eq99: ['2.4']
  },
  {
    book: 'red', ed: '17', clause: 3, id: '3.7',
    viTitle: 'Thỏa thuận hoặc Quyết định của Nhà tư vấn', enTitle: 'Agreement or Determination',
    viBody: 'Quy trình bắt buộc khi Nhà tư vấn giải quyết một vấn đề hoặc Khiếu nại: (1) Tham vấn hai bên trong 42 ngày để đạt thỏa thuận; (2) Nếu không thỏa thuận được, Nhà tư vấn ra Quyết định công bằng trong 42 ngày tiếp theo. Nếu một bên không đồng ý, phải gửi Thông báo Không hài lòng (NOD) trong 28 ngày.',
    enBody: 'Structured two-stage procedure for resolving matters or Claims: (1) Consultation with both Parties for 42 days to reach agreement; (2) Failing agreement, fair Determination within a further 42 days. A dissatisfied Party must issue a Notice of Dissatisfaction (NOD) within 28 days.',
    timelimits: [
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Giai đoạn tham vấn hai bên để tìm kiếm thỏa thuận chung', en: 'Consultation period to encourage agreement between the Parties' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Nhà tư vấn ban hành Quyết định nếu không đạt được thỏa thuận', en: 'Engineer issues Determination if no agreement is reached' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thời hạn gửi Thông báo Không hài lòng (NOD) trước khi đưa ra DAAB', en: 'Notice of Dissatisfaction (NOD) within 28 days; otherwise Determination becomes final' }
    ], eq99: ['3.5']
  },
  {
    book: 'red', ed: '17', clause: 4, id: '4.2',
    viTitle: 'Bảo lãnh Thực hiện Hợp đồng', enTitle: 'Performance Security',
    viBody: 'Nhà thầu phải nộp Bảo lãnh Thực hiện Hợp đồng trong vòng 28 ngày kể từ ngày nhận Thư Chấp thuận và duy trì hiệu lực cho đến khi được cấp Chứng chỉ Thực hiện (Performance Certificate).',
    enBody: 'The Contractor must deliver the Performance Security within 28 days after receiving the Letter of Acceptance and keep it valid until the Performance Certificate is issued.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Bảo lãnh Thực hiện Hợp đồng sau khi nhận Thư Chấp thuận', en: 'Deliver Performance Security within 28 days of Letter of Acceptance' },
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Chủ đầu tư hoàn trả Bảo lãnh sau khi cấp Chứng chỉ Thực hiện', en: 'Employer returns Performance Security within 21 days after Performance Certificate' }
    ], eq99: ['4.2']
  },
  {
    book: 'red', ed: '17', clause: 4, id: '4.12',
    viTitle: 'Điều kiện Vật chất Không lường trước', enTitle: 'Unforeseeable Physical Conditions',
    viBody: 'Nếu Nhà thầu gặp điều kiện địa chất/vật chất bất lợi không thể lường trước bởi một nhà thầu có kinh nghiệm, phải gửi Thông báo ngay cho Nhà tư vấn để kiểm tra hiện trường, và có thể khiếu nại theo Điều khoản 20.2.',
    enBody: 'If the Contractor encounters adverse physical conditions unforeseeable by an experienced contractor, it must give immediate Notice to the Engineer for inspection and may claim EOT/Cost under Sub-Clause 20.2.',
    timelimits: [
      { badge: 'Ngay lập tức', badgeEn: 'Promptly', vi: 'Gửi Thông báo cho Nhà tư vấn trước khi hiện trạng bị xáo trộn', en: 'Give Notice promptly before physical conditions are disturbed' }
    ], eq99: ['4.12']
  },
  {
    book: 'red', ed: '17', clause: 5, id: '5.1',
    viTitle: 'Nhà thầu phụ', enTitle: 'Subcontractors',
    viBody: 'Nhà thầu không được giao toàn bộ công trình cho thầu phụ và phải chịu trách nhiệm hoàn toàn về hành vi, sai sót của thầu phụ. Khi thuê thầu phụ cho phần việc vượt ngưỡng quy định, phải gửi Thông báo trước tối thiểu 28 ngày để Nhà tư vấn chấp thuận.',
    enBody: 'The Contractor shall not subcontract the whole of the Works and remains fully responsible for all Subcontractors. Prior Notice of at least 28 days is required for proposed Subcontractors unless exempted.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo trước cho Nhà tư vấn về tên, năng lực và ngày dự kiến khởi công của thầu phụ', en: 'Not less than 28 days’ Notice to Engineer before Subcontractor commences work' }
    ], eq99: ['4.4']
  },
  {
    book: 'red', ed: '17', clause: 6, id: '6.7',
    viTitle: 'An toàn và Sức khỏe Lao động', enTitle: 'Health and Safety of Personnel',
    viBody: 'Nhà thầu phải luôn tuân thủ các quy định an toàn lao động, cử cán bộ phụ trách an toàn chuyên trách tại công trường và thông báo ngay lập tức cho Nhà tư vấn nếu xảy ra tai nạn nghiêm trọng.',
    enBody: 'The Contractor must maintain health and safety precautions, appoint a qualified safety officer on Site, and notify the Engineer immediately of any serious accident.',
    timelimits: [
      { badge: 'Ngay lập tức', badgeEn: 'Immediately', vi: 'Thông báo cho Nhà tư vấn ngay khi xảy ra tai nạn trên công trường', en: 'Notify the Engineer immediately after any accident occurs on Site' }
    ], eq99: ['6.7']
  },
  {
    book: 'red', ed: '17', clause: 7, id: '7.4',
    viTitle: 'Thử nghiệm bởi Nhà thầu', enTitle: 'Testing by the Contractor',
    viBody: 'Nhà thầu cung cấp thiết bị, nhân lực và vật tư để thực hiện các thí nghiệm quy định. Nhà thầu phải thông báo cho Nhà tư vấn trước khi tiến hành thử nghiệm; Nhà tư vấn thông báo trong vòng 24 giờ nếu muốn tham gia chứng kiến.',
    enBody: 'The Contractor provides apparatus, staff, and materials for specified tests and gives Notice of readiness. The Engineer must give at least 24 hours’ Notice if intending to attend.',
    timelimits: [
      { badge: '24 giờ', badgeEn: '24 hours', vi: 'Nhà tư vấn thông báo trước ít nhất 24 giờ nếu tham dự chứng kiến thử nghiệm', en: 'Engineer gives at least 24 hours’ Notice of intention to attend tests' }
    ], eq99: ['7.4']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.1',
    viTitle: 'Khởi công Công trình', enTitle: 'Commencement of Works',
    viBody: 'Nhà tư vấn phải thông báo Ngày Khởi công cho Nhà thầu trước ít nhất 14 ngày. Nếu không có quy định khác, Ngày Khởi công phải nằm trong vòng 42 ngày kể từ khi Nhà thầu nhận Thư Chấp thuận.',
    enBody: 'The Engineer must give at least 14 days’ Notice of the Commencement Date. Unless otherwise stated, the Commencement Date must be within 42 days after the Contractor receives the Letter of Acceptance.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Nhà tư vấn thông báo trước Ngày Khởi công tối thiểu 14 ngày', en: 'Engineer gives at least 14 days’ prior Notice of Commencement Date' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Ngày Khởi công tối đa sau 42 ngày kể từ Thư Chấp thuận', en: 'Commencement Date within 42 days after Letter of Acceptance' }
    ], eq99: ['8.1']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.3',
    viTitle: 'Tiến độ Thi công', enTitle: 'Programme',
    viBody: 'Nhà thầu nộp Bảng tiến độ chi tiết ban đầu trong 28 ngày kể từ Ngày Khởi công. Nhà tư vấn có 21 ngày để phản hồi; nếu không phản hồi, tiến độ được coi là chấp thuận.',
    enBody: 'The Contractor submits the initial Programme within 28 days of the Commencement Date. The Engineer has 21 days to give Notice of non-compliance; otherwise it is deemed accepted.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Bảng tiến độ ban đầu kể từ Ngày Khởi công', en: 'Submit initial Programme within 28 days of Commencement Date' },
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Nhà tư vấn xem xét và thông báo nếu không phù hợp; quá hạn được coi là chấp nhận', en: 'Engineer review period; deemed accepted if no Notice of non-compliance within 21 days' }
    ], eq99: ['8.3']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.5',
    viTitle: 'Gia hạn Thời gian Hoàn thành (EOT)', enTitle: 'Extension of Time for Completion',
    viBody: 'Quy định 5 nhóm nguyên nhân cho phép Nhà thầu được gia hạn thời gian hoàn thành (Thay đổi, nguyên nhân chậm trễ theo hợp đồng, thời tiết bất lợi đặc biệt, thiếu hụt nhân lực/vật tư bất khả kháng, chậm trễ do Chủ đầu tư), áp dụng thủ tục tại Điều khoản 20.2.',
    enBody: 'Lists the grounds entitling the Contractor to an Extension of Time (Variations, contractual delay clauses, exceptionally adverse climatic conditions, unforeseeable shortages, Employer delays), subject to Sub-Clause 20.2.',
    timelimits: [], eq99: ['8.4']
  },
  {
    book: 'red', ed: '17', clause: 9, id: '9.1',
    viTitle: 'Nghĩa vụ của Nhà thầu về Kiểm định khi Hoàn thành', enTitle: "Contractor's Obligations (Tests on Completion)",
    viBody: 'Nhà thầu phải thông báo cho Nhà tư vấn trước tối thiểu 21 ngày về ngày sẵn sàng thực hiện Kiểm định khi Hoàn thành. Các thử nghiệm phải được tiến hành trong vòng 14 ngày sau ngày nêu trong thông báo.',
    enBody: 'The Contractor must give at least 21 days’ Notice to the Engineer of the date after which it will be ready to carry out Tests on Completion, conducted within 14 days after that date.',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Thông báo trước ít nhất 21 ngày về ngày sẵn sàng kiểm định hoàn thành', en: 'Not less than 21 days’ Notice of readiness for Tests on Completion' }
    ], eq99: ['9.1']
  },
  {
    book: 'red', ed: '17', clause: 10, id: '10.1',
    viTitle: 'Bàn giao Công trình và Hạng mục', enTitle: 'Taking Over the Works and Sections',
    viBody: 'Khi công trình hoàn thành, Nhà thầu gửi Thông báo đề nghị cấp Chứng chỉ Bàn giao trong vòng 14 ngày trước khi sẵn sàng. Nhà tư vấn phải cấp chứng chỉ hoặc từ chối nêu rõ lý do trong vòng 28 ngày.',
    enBody: 'The Contractor applies by Notice for a Taking-Over Certificate not earlier than 14 days before the Works are ready. The Engineer must issue the Certificate or reject with reasons within 28 days.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Nhà thầu gửi đơn đề nghị bàn giao sớm nhất 14 ngày trước khi hoàn thành', en: 'Contractor applies not more than 14 days before Works are ready' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà tư vấn cấp Chứng chỉ Bàn giao hoặc thông báo các công việc còn thiếu', en: 'Engineer issues Taking-Over Certificate or rejects within 28 days' }
    ], eq99: ['10.1']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.9',
    viTitle: 'Chứng chỉ Thực hiện Hợp đồng', enTitle: 'Performance Certificate',
    viBody: 'Xác nhận Nhà thầu đã hoàn thành mọi nghĩa vụ. Nhà tư vấn phải cấp Chứng chỉ Thực hiện trong vòng 28 ngày sau ngày hết hạn Thông báo Sai sót (DNP) cuối cùng.',
    enBody: 'Confirms the Contractor has fulfilled all obligations. The Engineer must issue the Performance Certificate within 28 days after the latest Defects Notification Period expiry date.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Cấp Chứng chỉ Thực hiện sau khi kết thúc Thời hạn Thông báo Sai sót', en: 'Issue Performance Certificate within 28 days after DNP expiry' }
    ], eq99: ['11.9']
  },
  {
    book: 'red', ed: '17', clause: 12, id: '12.1',
    viTitle: 'Đo lường Công trình', enTitle: 'Works to be Measured',
    viBody: 'Đặc trưng riêng của Sách Đỏ: công trình được đo lường và xác định giá trị theo khối lượng thực tế thi công. Nhà tư vấn phải thông báo trước tối thiểu 7 ngày cho Đại diện Nhà thầu tham gia chứng kiến đo đạc.',
    enBody: 'Distinctive to the Red Book: Works are measured and valued on actual quantities executed. The Engineer gives at least 7 days’ Notice to the Contractor’s Representative to attend measurement.',
    timelimits: [
      { badge: '7 ngày', badgeEn: '7 days', vi: 'Nhà tư vấn thông báo trước tối thiểu 7 ngày để Nhà thầu cử người cùng đo đạc', en: 'Engineer gives at least 7 days’ Notice to attend measurement' }
    ], eq99: ['12.1']
  },
  {
    book: 'red', ed: '17', clause: 13, id: '13.3',
    viTitle: 'Quy trình Thay đổi (Variation)', enTitle: 'Variation Procedure',
    viBody: 'Nhà tư vấn có thể chỉ thị Thay đổi trực tiếp (13.3.1) hoặc yêu cầu Nhà thầu nộp Đề xuất trước khi thực hiện (13.3.2). Nhà thầu phải phản hồi sớm và nêu rõ ảnh hưởng đến giá và tiến độ.',
    enBody: 'The Engineer may instruct a Variation directly (13.3.1) or request a Proposal first (13.3.2). The Contractor responds promptly detailing price and programme impacts.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà thầu nộp chi tiết đơn giá/tiến độ sau khi nhận chỉ thị Thay đổi', en: 'Contractor submits particulars within 28 days of Variation instruction' }
    ], eq99: ['13.3']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.6',
    viTitle: 'Cấp Chứng chỉ Thanh toán Tạm (IPC)', enTitle: 'Issue of IPC',
    viBody: 'Sau khi nhận Hồ sơ thanh toán (Statement) đầy đủ của Nhà thầu, Nhà tư vấn phải kiểm tra và phát hành Chứng chỉ Thanh toán Tạm (IPC) cho Chủ đầu tư trong vòng 28 ngày.',
    enBody: 'Within 28 days after receiving the Contractor’s Statement and supporting documents, the Engineer must issue an Interim Payment Certificate (IPC) to the Employer.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà tư vấn phát hành IPC kể từ ngày nhận đủ Hồ sơ thanh toán', en: 'Engineer issues IPC within 28 days of receiving Statement' }
    ], eq99: ['14.6']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.7',
    viTitle: 'Thanh toán cho Nhà thầu', enTitle: 'Payment',
    viBody: 'Chủ đầu tư phải thanh toán số tiền ghi trong Tạm ứng (trong 42 ngày sau Thư Chấp thuận hoặc 21 ngày sau khi nhận bảo lãnh), IPC (trong 56 ngày kể từ khi Nhà tư vấn nhận hồ sơ), và Chứng chỉ Thanh toán Cuối cùng (trong 56 ngày).',
    enBody: 'The Employer must pay the Advance Payment (42 days from LOA / 21 days from security), each IPC (within 56 days after the Engineer receives the Statement), and the FPC (within 56 days).',
    timelimits: [
      { badge: '56 ngày', badgeEn: '56 days', vi: 'Chủ đầu tư thanh toán IPC kể từ ngày Nhà tư vấn nhận Hồ sơ thanh toán', en: 'Employer pays IPC within 56 days after Engineer receives Statement' }
    ], eq99: ['14.7']
  },
  {
    book: 'red', ed: '17', clause: 15, id: '15.2',
    viTitle: 'Chấm dứt Hợp đồng do Lỗi của Nhà thầu', enTitle: 'Termination for Contractor’s Default',
    viBody: 'Chủ đầu tư có quyền chấm dứt hợp đồng nếu Nhà thầu vi phạm nghiêm trọng (như bỏ dở công trình, không tuân thủ thông báo sửa chữa). Thông thường phải gửi Thông báo ý định chấm dứt trước 14 ngày (trừ trường hợp phá sản hoặc hối lộ có thể chấm dứt ngay).',
    enBody: 'The Employer may terminate for serious Contractor defaults (abandonment, failure to comply with Notice to Correct). Requires 14 days’ Notice of intention to terminate, except immediate termination for insolvency or bribery.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày về ý định chấm dứt hợp đồng', en: '14 days’ Notice before termination takes effect (for most defaults)' }
    ], eq99: ['15.2']
  },
  {
    book: 'red', ed: '17', clause: 16, id: '16.2',
    viTitle: 'Chấm dứt Hợp đồng bởi Nhà thầu', enTitle: 'Termination by Contractor',
    viBody: 'Nhà thầu có quyền chấm dứt hợp đồng khi Chủ đầu tư chậm thanh toán kéo dài, không cấp bằng chứng tài chính, hoặc tạm ngừng công trình quá hạn. Cần gửi Thông báo trước 14 ngày.',
    enBody: 'The Contractor may terminate for prolonged non-payment, failure to provide financial evidence, or prolonged Employer suspension, upon giving 14 days’ Notice.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Nhà thầu gửi Thông báo trước 14 ngày để chấm dứt hợp đồng', en: 'Contractor gives 14 days’ Notice to terminate' }
    ], eq99: ['16.2']
  },
  {
    book: 'red', ed: '17', clause: 17, id: '17.1',
    viTitle: 'Trách nhiệm Bảo quản Công trình', enTitle: 'Responsibility for Care of the Works',
    viBody: 'Nhà thầu chịu hoàn toàn trách nhiệm bảo quản Công trình và Vật tư từ Ngày Khởi công cho đến ngày cấp Chứng chỉ Bàn giao (Taking-Over Certificate), ngoại trừ các rủi ro thuộc trách nhiệm của Chủ đầu tư tại 17.2.',
    enBody: 'The Contractor takes full responsibility for care of the Works and Goods from the Commencement Date until the Taking-Over Certificate is issued, except for Employer’s risks under Sub-Clause 17.2.',
    timelimits: [], eq99: ['17.2']
  },
  {
    book: 'red', ed: '17', clause: 18, id: '18.2',
    viTitle: 'Thông báo Sự kiện Ngoại lệ', enTitle: 'Notice of Exceptional Event',
    viBody: 'Bên bị ảnh hưởng bởi Sự kiện Ngoại lệ (bất khả kháng) phải gửi Thông báo cho bên kia trong vòng 14 ngày kể từ khi biết hoặc lẽ ra phải biết về sự kiện đó để được miễn trừ nghĩa vụ thực hiện trong thời gian bị cản trở.',
    enBody: 'A Party prevented from performing by an Exceptional Event must give Notice within 14 days after becoming aware (or should have become aware) of the event.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Gửi Thông báo về Sự kiện Ngoại lệ kể từ khi biết sự việc', en: 'Give Notice of Exceptional Event within 14 days of awareness' }
    ], eq99: ['19.2']
  },
  {
    book: 'red', ed: '17', clause: 19, id: '19.1',
    viTitle: 'Yêu cầu chung về Bảo hiểm', enTitle: 'General Requirements (Insurance)',
    viBody: 'Bên chịu trách nhiệm mua bảo hiểm (thường là Nhà thầu) phải nộp bằng chứng và bản sao hợp đồng bảo hiểm trong thời hạn quy định kể từ Ngày Khởi công (hoặc theo Dữ liệu Hợp đồng) và duy trì liên tục.',
    enBody: 'The insuring Party (usually the Contractor) must submit evidence and copies of insurance policies within the period stated in the Contract Data from the Commencement Date.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước khi hủy hoặc thay đổi điều kiện bảo hiểm công trình', en: 'Prior Notice before cancellation or material change of insurance' }
    ], eq99: ['18.1']
  },
  {
    book: 'red', ed: '17', clause: 20, id: '20.1',
    viTitle: 'Các loại Khiếu nại', enTitle: 'Claims',
    viBody: 'Điều khoản 20 áp dụng bình đẳng cho cả Chủ đầu tư và Nhà thầu. Phân biệt 3 loại khiếu nại: (a) Thanh toán/giảm trừ và/hoặc gia hạn DNP của Chủ đầu tư; (b) Thanh toán bổ sung và/hoặc gia hạn EOT của Nhà thầu; (c) Quyền lợi khác không thuộc (a) hoặc (b) (giải quyết trực tiếp theo 3.7 không cần mốc 28/84 ngày).',
    enBody: 'Clause 20 applies symmetrically to both Employer and Contractor. Distinguishes 3 Claim types: (a) Employer payment/DNP extension; (b) Contractor additional payment/EOT; (c) Other entitlements (referred directly under 3.7 without 28/84-day time bars).',
    timelimits: [], eq99: ['2.5', '20.1']
  },
  {
    book: 'red', ed: '17', clause: 20, id: '20.2',
    viTitle: 'Khiếu nại Thanh toán và/hoặc Gia hạn Thời gian (EOT)', enTitle: 'Claims for Payment and/or EOT',
    viBody: 'Bên khiếu nại phải gửi Thông báo Khiếu nại (Notice of Claim) trong thời hạn nghiêm ngặt kể từ khi biết sự việc, nếu không sẽ mất quyền khiếu nại (time-barred). Bên khiếu nại phải lưu giữ hồ sơ hiện trường đồng thời (contemporary records) và nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ kèm cơ sở pháp lý/hợp đồng và số liệu chứng minh. Với sự việc kéo dài, phải nộp cập nhật hàng tháng và hồ sơ cuối cùng khi tác động chấm dứt. Sau đó Nhà tư vấn sẽ tham vấn thỏa thuận hoặc ra Quyết định theo Điều khoản 3.7.',
    enBody: 'A claiming Party must give a Notice of Claim within a strict period after becoming aware of the event, or lose the entitlement (time-barred). It must keep contemporary records and submit a Fully Detailed Claim with its contractual/legal basis and supporting particulars. For continuing events, monthly interim updates follow, with a final Claim after the effects end. The Engineer then agrees or determines the entitlement under Sub-Clause 3.7.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Gửi Thông báo Khiếu nại trong vòng 28 ngày kể từ khi biết (hoặc lẽ ra phải biết) sự việc; quá hạn sẽ mất quyền', en: 'Notice of Claim within 28 days after the claimant became aware (or should have become aware); otherwise time-barred' },
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Nếu Nhà tư vấn cho rằng Thông báo nộp trễ, phải thông báo lại trong 14 ngày; nếu không, Thông báo được coi là hợp lệ', en: 'If Engineer considers Notice late, must give Notice within 14 days; otherwise Notice of Claim is deemed valid' },
      { badge: '84 ngày', badgeEn: '84 days', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ trong 84 ngày kể từ khi biết sự việc (hoặc thời hạn khác được thỏa thuận)', en: 'Submit Fully Detailed Claim within 84 days after awareness of the event (or other agreed period)' },
      { badge: '—', badgeEn: '—', dashed: true, vi: 'Với tác động kéo dài, nộp Hồ sơ Khiếu nại Chi tiết tạm thời theo định kỳ hàng tháng', en: 'For continuing effects, submit interim Fully Detailed Claims at monthly intervals' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết cuối cùng trong vòng 28 ngày sau khi tác động của sự việc chấm dứt', en: 'Submit final Fully Detailed Claim within 28 days after the end of the effects' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Nhà tư vấn tham vấn/quyết định theo Điều khoản 3.7 sau khi nhận Hồ sơ Khiếu nại Chi tiết Đầy đủ', en: 'Engineer proceeds under Sub-Clause 3.7 (42 days consultation + 42 days determination) after receiving Fully Detailed Claim' }
    ], eq99: ['2.5', '20.1']
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.4',
    viTitle: 'Đưa Tranh chấp ra Ban Xử lý Tranh chấp (DAAB)', enTitle: 'Obtaining DAAB’s Decision',
    viBody: 'Sau khi có Thông báo Không hài lòng (NOD) với Quyết định của Nhà tư vấn theo 3.7, bên không hài lòng phải chuyển tranh chấp lên DAAB trong vòng 42 ngày (nếu không NOD sẽ mất hiệu lực). DAAB ra quyết định trong vòng 84 ngày.',
    enBody: 'Following a Notice of Dissatisfaction (NOD) under 3.7, the Dispute must be referred to the DAAB within 42 days (or the NOD lapses). The DAAB issues its binding decision within 84 days.',
    timelimits: [
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Chuyển Tranh chấp lên DAAB trong vòng 42 ngày kể từ ngày gửi NOD', en: 'Refer Dispute to DAAB within 42 days of NOD; otherwise NOD lapses' },
      { badge: '84 ngày', badgeEn: '84 days', vi: 'DAAB ban hành Quyết định bằng văn bản có nêu lý do', en: 'DAAB gives its reasoned decision within 84 days after reference' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Gửi NOD đối với quyết định của DAAB nếu muốn chuyển sang hòa giải/trọng tài', en: 'Give NOD against DAAB decision within 28 days before Amicable Settlement / Arbitration' }
    ], eq99: ['20.4']
  },

  // ================= RED BOOK 1999 (Key equivalents) =================
  {
    book: 'red', ed: '99', clause: 2, id: '2.5',
    viTitle: 'Khiếu nại của Chủ đầu tư (1999)', enTitle: "Employer's Claims (1999)",
    viBody: 'Trong phiên bản 1999, khiếu nại của Chủ đầu tư được tách riêng tại Điều khoản 2.5 (chỉ yêu cầu thông báo "càng sớm càng tốt", không có mốc cứng 28 ngày như Nhà thầu tại 20.1). Sang phiên bản 2017, quy trình của cả hai bên được hợp nhất bình đẳng vào Điều khoản 20.2.',
    enBody: 'In the 1999 edition, Employer claims were governed separately under Sub-Clause 2.5 (requiring Notice "as soon as practicable" without a strict 28-day bar). In 2017, both Parties follow the symmetrical procedure in Sub-Clause 20.2.',
    timelimits: [
      { badge: 'Sớm nhất', badgeEn: 'ASAP', vi: 'Chủ đầu tư gửi thông báo càng sớm càng tốt sau khi biết sự việc', en: 'Employer gives Notice as soon as practicable after becoming aware' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 3, id: '3.5',
    viTitle: 'Quyết định của Nhà tư vấn (1999)', enTitle: 'Determinations (1999)',
    viBody: 'Nhà tư vấn tham vấn mỗi bên để cố gắng đạt thỏa thuận; nếu không đạt được thỏa thuận, Nhà tư vấn ra quyết định công bằng. Bản 1999 không quy định mốc cứng 42+42 ngày và cơ chế NOD 28 ngày như Điều khoản 3.7 của bản 2017.',
    enBody: 'The Engineer consults with each Party in an endeavour to reach agreement; failing agreement, makes a fair determination. Unlike 2017 Sub-Clause 3.7, the 1999 edition lacks fixed 42+42 day periods and the 28-day NOD mechanism.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 20, id: '20.1',
    viTitle: 'Khiếu nại của Nhà thầu (1999)', enTitle: "Contractor's Claims (1999)",
    viBody: 'Quy định Nhà thầu phải gửi Thông báo trong 28 ngày và Hồ sơ chi tiết trong 42 ngày (bản 2017 tăng lên 84 ngày). Nhà tư vấn có 42 ngày để phản hồi về nguyên tắc hoặc chi tiết khiếu nại.',
    enBody: 'Requires the Contractor to give Notice within 28 days and a fully detailed claim within 42 days (extended to 84 days in 2017). The Engineer responds within 42 days with approval/disapproval and detailed comments.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo khiếu nại trong 28 ngày kể từ khi biết sự việc', en: 'Notice of claim within 28 days of awareness' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Nộp Hồ sơ khiếu nại chi tiết đầy đủ trong 42 ngày (2017 là 84 ngày)', en: 'Fully detailed claim within 42 days (84 days in 2017)' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Nhà tư vấn phản hồi trong vòng 42 ngày kể từ khi nhận hồ sơ', en: 'Engineer responds within 42 days after receiving claim' }
    ], eq99: []
  },

  // ================= YELLOW BOOK 2017 =================
  {
    book: 'yel', ed: '17', clause: 1, id: '1.1',
    viTitle: 'Định nghĩa (Sách Vàng)', enTitle: 'Definitions (Yellow Book)',
    viBody: 'Bổ sung các định nghĩa đặc thù cho hợp đồng Thiết kế - Thi công như "Employer’s Requirements" (Yêu cầu của Chủ đầu tư), "Contractor’s Proposal" (Đề xuất của Nhà thầu) và "Schedules".',
    enBody: 'Adds Design-Build specific definitions including "Employer’s Requirements", "Contractor’s Proposal", and "Schedules".',
    timelimits: [], eq99: ['1.1']
  },
  {
    book: 'yel', ed: '17', clause: 3, id: '3.7',
    viTitle: 'Thỏa thuận hoặc Quyết định của Nhà tư vấn (Sách Vàng)', enTitle: 'Agreement or Determination (Yellow Book)',
    viBody: 'Tương tự Sách Đỏ 2017: Nhà tư vấn đóng vai trò trung lập khi thực hiện Điều khoản 3.7 (42 ngày tham vấn + 42 ngày ra Quyết định + 28 ngày gửi NOD).',
    enBody: 'Mirrors Red Book 2017: the Engineer acts neutrally under Sub-Clause 3.7 (42 days consultation + 42 days determination + 28 days NOD).',
    timelimits: [
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Tham vấn hai bên', en: 'Consultation period' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Ra Quyết định', en: 'Determination period' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo Không hài lòng (NOD)', en: 'Notice of Dissatisfaction (NOD)' }
    ], eq99: ['3.5']
  },
  {
    book: 'yel', ed: '17', clause: 5, id: '5.2',
    viTitle: 'Tài liệu của Nhà thầu - Thẩm tra Thiết kế', enTitle: "Contractor's Documents (Design Review)",
    viBody: 'Đặc trưng của Sách Vàng (Design & Build): Nhà thầu chịu trách nhiệm thiết kế và nộp Tài liệu thiết kế cho Nhà tư vấn xem xét. Thời hạn xem xét thông thường là 21 ngày; nếu quá hạn không có thông báo phản đối, Nhà tư vấn được coi là không phản đối.',
    enBody: 'Core to Yellow Book (Design & Build): The Contractor designs the Works and submits Contractor’s Documents to the Engineer for review within 21 days (deemed no-objection if no Notice given).',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Thời hạn Nhà tư vấn xem xét Tài liệu thiết kế của Nhà thầu', en: 'Engineer Review Period for Contractor’s Documents' }
    ], eq99: ['5.2']
  },
  {
    book: 'yel', ed: '17', clause: 8, id: '8.5',
    viTitle: 'Gia hạn Thời gian Hoàn thành (Sách Vàng)', enTitle: 'Extension of Time for Completion (Yellow Book)',
    viBody: 'Nhà thầu được gia hạn EOT đối với các nguyên nhân chậm trễ do Thay đổi, thời tiết bất lợi đặc biệt, thiếu hụt bất khả kháng hoặc chậm trễ từ phía Chủ đầu tư (bao gồm chậm phê duyệt tài liệu thiết kế quá hạn 21 ngày).',
    enBody: 'Entitles the Contractor to EOT for Variations, exceptionally adverse climate, unforeseeable shortages, or Employer delays (including late design review beyond 21 days).',
    timelimits: [], eq99: ['8.4']
  },
  {
    book: 'yel', ed: '17', clause: 13, id: '13.3',
    viTitle: 'Quy trình Thay đổi (Sách Vàng)', enTitle: 'Variation Procedure (Yellow Book)',
    viBody: 'Thay đổi trong Sách Vàng thường là thay đổi đối với "Yêu cầu của Chủ đầu tư" (Employer’s Requirements). Nhà thầu nộp đề xuất điều chỉnh giá trọn gói và tiến độ trong 28 ngày.',
    enBody: 'Variations in Yellow Book modify the Employer’s Requirements. The Contractor submits lump-sum price and programme proposals within 28 days.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà thầu nộp đề xuất chi tiết khi có chỉ thị Thay đổi', en: 'Contractor submits proposal within 28 days of Variation' }
    ], eq99: ['13.3']
  },
  {
    book: 'yel', ed: '17', clause: 14, id: '14.6',
    viTitle: 'Cấp Chứng chỉ Thanh toán Tạm (Sách Vàng)', enTitle: 'Issue of IPC (Yellow Book)',
    viBody: 'Thanh toán trong Sách Vàng thường căn cứ theo Bảng tiến độ thanh toán (Schedule of Payments) hoặc mốc hoàn thành (milestones). Nhà tư vấn cấp IPC trong vòng 28 ngày.',
    enBody: 'Payment in Yellow Book is typically based on a Schedule of Payments or milestones. The Engineer issues each IPC within 28 days.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà tư vấn phát hành IPC kể từ khi nhận Hồ sơ thanh toán', en: 'Engineer issues IPC within 28 days of Statement' }
    ], eq99: ['14.6']
  },
  {
    book: 'yel', ed: '17', clause: 20, id: '20.2',
    viTitle: 'Khiếu nại Thanh toán và/hoặc Gia hạn Thời gian (Sách Vàng)', enTitle: 'Claims for Payment and/or EOT (Yellow Book)',
    viBody: 'Cấu trúc thủ tục Điều khoản 20.2 trong Sách Vàng 2017 giống hệt Sách Đỏ 2017: quy trình đối xứng cho cả Chủ đầu tư và Nhà thầu, mốc 28 ngày thông báo, 14 ngày phản hồi trễ, 84 ngày hồ sơ chi tiết, cập nhật hàng tháng và tham vấn/quyết định theo Điều khoản 3.7.',
    enBody: 'Sub-Clause 20.2 in Yellow Book 2017 mirrors Red Book 2017 identically: symmetrical 28-day Notice, 14-day late-Notice check, 84-day Fully Detailed Claim, monthly interim updates, and Engineer determination under 3.7.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo Khiếu nại trong 28 ngày (quá hạn mất quyền)', en: 'Notice of Claim within 28 days; otherwise time-barred' },
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Nhà tư vấn thông báo nếu coi là nộp trễ', en: 'Engineer Notice within 14 days if considered late' },
      { badge: '84 ngày', badgeEn: '84 days', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ', en: 'Submit Fully Detailed Claim within 84 days' }
    ], eq99: ['2.5', '20.1']
  },
  {
    book: 'yel', ed: '17', clause: 21, id: '21.4',
    viTitle: 'Đưa Tranh chấp ra DAAB (Sách Vàng)', enTitle: "Obtaining DAAB's Decision (Yellow Book)",
    viBody: 'Áp dụng DAAB thường trực (Standing DAAB) xuyên suốt thời gian thực hiện hợp đồng: 42 ngày chuyển tranh chấp sau NOD, 84 ngày DAAB ra quyết định.',
    enBody: 'Uses a Standing DAAB throughout the Contract: 42 days to refer after NOD, 84 days for DAAB decision.',
    timelimits: [
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Chuyển tranh chấp lên DAAB sau khi gửi NOD', en: 'Refer Dispute to DAAB within 42 days of NOD' },
      { badge: '84 ngày', badgeEn: '84 days', vi: 'DAAB ban hành quyết định', en: 'DAAB issues reasoned decision within 84 days' }
    ], eq99: ['20.4']
  },

  // ================= SILVER BOOK 2017 =================
  {
    book: 'sil', ed: '17', clause: 1, id: '1.1',
    viTitle: 'Định nghĩa (Sách Bạc EPC)', enTitle: 'Definitions (Silver Book)',
    viBody: 'Không có khái niệm "Engineer" (Nhà tư vấn); thay vào đó là "Employer’s Representative" (Đại diện Chủ đầu tư). Hợp đồng hướng tới mức độ chắc chắn cao về giá trọn gói và thời gian hoàn thành.',
    enBody: 'No "Engineer"; uses "Employer’s Representative" instead. Designed for high certainty of lump-sum Contract Price and Time for Completion.',
    timelimits: [], eq99: ['1.1']
  },
  {
    book: 'sil', ed: '17', clause: 3, id: '3.5',
    viTitle: 'Thỏa thuận hoặc Quyết định của Đại diện Chủ đầu tư', enTitle: "Agreement or Determination (Employer's Representative)",
    viBody: 'Khác biệt cốt lõi của Sách Bạc (EPC/Turnkey): Không có "Nhà tư vấn" (Engineer) độc lập mà sử dụng "Đại diện Chủ đầu tư" (Employer’s Representative). Quy trình 42 ngày tham vấn + 42 ngày quyết định + 28 ngày NOD được quy định tại Điều khoản 3.5 (thay vì 3.7).',
    enBody: 'Key distinction of Silver Book (EPC/Turnkey): No independent Engineer; the Employer’s Representative administers the 42-day consultation + 42-day determination + 28-day NOD procedure under Sub-Clause 3.5.',
    timelimits: [
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Tham vấn hai bên', en: 'Consultation period' },
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Ra Quyết định', en: 'Determination period' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo Không hài lòng (NOD)', en: 'Notice of Dissatisfaction (NOD)' }
    ], eq99: ['3.5']
  },
  {
    book: 'sil', ed: '17', clause: 4, id: '4.12',
    viTitle: 'Điều kiện Khó lường trước (Rủi ro thuộc Nhà thầu EPC)', enTitle: 'Unforeseeable Difficulties (Silver Book)',
    viBody: 'Điểm rủi ro lớn nhất của Sách Bạc: Nhà thầu EPC được coi là đã lường trước mọi khó khăn và chi phí (bao gồm điều kiện địa chất/ngầm) để hoàn thành công trình; Giá Hợp đồng trọn gói không được điều chỉnh do gặp điều kiện bất lợi, trừ khi hợp đồng có quy định khác.',
    enBody: 'Major risk allocation in Silver Book: The Contractor is deemed to have foreseen all difficulties and costs (including subsurface conditions) to complete the Works; the Contract Price is not adjusted for unforeseen difficulties.',
    timelimits: [], eq99: ['4.12']
  },
  {
    book: 'sil', ed: '17', clause: 8, id: '8.5',
    viTitle: 'Gia hạn Thời gian Hoàn thành (Sách Bạc)', enTitle: 'Extension of Time for Completion (Silver Book)',
    viBody: 'Phạm vi được gia hạn EOT hẹp hơn Sách Đỏ/Vàng (ví dụ: không bao gồm điều kiện thời tiết bất lợi đặc biệt hoặc thiếu hụt vật tư thông thường), chủ yếu chỉ áp dụng cho Thay đổi hoặc chậm trễ do Chủ đầu tư.',
    enBody: 'Narrower EOT grounds than Red/Yellow Books (excludes exceptionally adverse climate and general shortages), mainly covering Variations and Employer-caused delays.',
    timelimits: [], eq99: ['8.4']
  },
  {
    book: 'sil', ed: '17', clause: 14, id: '14.6',
    viTitle: 'Thanh toán Tạm (Sách Bạc - không có IPC)', enTitle: 'Interim Payments (Silver Book)',
    viBody: 'Trong Sách Bạc không phát hành "Chứng chỉ Thanh toán Tạm" (IPC) do không có Nhà tư vấn; Chủ đầu tư thông báo số tiền thanh toán dự kiến trong 28 ngày và thanh toán trong 56 ngày kể từ khi nhận Hồ sơ thanh toán.',
    enBody: 'Silver Book has no IPC (no Engineer); the Employer gives Notice of the amount due within 28 days and pays within 56 days after receiving the Contractor’s Statement.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Chủ đầu tư thông báo số tiền được chấp thuận thanh toán', en: 'Employer gives Notice of interim payment amount within 28 days' },
      { badge: '56 ngày', badgeEn: '56 days', vi: 'Chủ đầu tư thực hiện thanh toán', en: 'Employer makes payment within 56 days' }
    ], eq99: ['14.6']
  },
  {
    book: 'sil', ed: '17', clause: 20, id: '20.2',
    viTitle: 'Khiếu nại Thanh toán và/hoặc Gia hạn Thời gian (Sách Bạc)', enTitle: 'Claims for Payment and/or EOT (Silver Book)',
    viBody: 'Trong Sách Bạc 2017 (EPC/Turnkey), không có vai trò "Nhà tư vấn" (Engineer) độc lập mà là "Đại diện Chủ đầu tư" (Employer’s Representative). Tuy nhiên, toàn bộ mốc thời hạn 28 ngày – 14 ngày – 84 ngày – hàng tháng – 28 ngày – 42 ngày theo 3.5 vẫn giữ nguyên tương tự.',
    enBody: 'In Silver Book 2017 (EPC/Turnkey), the Employer’s Representative administers Sub-Clause 3.5 instead of an Engineer. The same 28 / 14 / 84 / monthly / 28 / 42-day deadlines apply.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo Khiếu nại gửi cho Bên kia / Đại diện Chủ đầu tư', en: 'Notice of Claim within 28 days; otherwise time-barred' },
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Đại diện Chủ đầu tư thông báo nếu coi là nộp trễ', en: 'Employer’s Representative Notice within 14 days if late' },
      { badge: '84 ngày', badgeEn: '84 days', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ', en: 'Submit Fully Detailed Claim within 84 days' }
    ], eq99: ['2.5', '20.1']
  },
  {
    book: 'sil', ed: '17', clause: 21, id: '21.4',
    viTitle: 'Đưa Tranh chấp ra DAAB (Sách Bạc)', enTitle: "Obtaining DAAB's Decision (Silver Book)",
    viBody: 'Áp dụng DAAB thường trực tương tự Sách Đỏ/Vàng 2017: 42 ngày chuyển tranh chấp sau NOD, 84 ngày DAAB ra quyết định.',
    enBody: 'Uses a Standing DAAB like Red/Yellow 2017: 42 days to refer after NOD, 84 days for DAAB decision.',
    timelimits: [
      { badge: '42 ngày', badgeEn: '42 days', vi: 'Chuyển tranh chấp lên DAAB sau khi gửi NOD', en: 'Refer Dispute to DAAB within 42 days of NOD' },
      { badge: '84 ngày', badgeEn: '84 days', vi: 'DAAB ban hành quyết định', en: 'DAAB issues reasoned decision within 84 days' }
    ], eq99: ['20.4']
  }
];

export const LEARN_ITEMS = [
  {
    step: 1,
    viTitle: 'Phân biệt 3 bộ sách FIDIC 2017',
    enTitle: 'Distinguishing the 3 FIDIC 2017 Books',
    viDesc: 'Sách Đỏ (Chủ đầu tư thiết kế, thanh toán theo đo lường), Sách Vàng (Nhà thầu thiết kế & thi công, trọn gói), Sách Bạc (EPC chìa khóa trao tay, rủi ro cao cho Nhà thầu, không có Nhà tư vấn độc lập).',
    enDesc: 'Red Book (Employer-designed, remeasurement), Yellow Book (Contractor Design-Build, lump sum), Silver Book (EPC/Turnkey, higher Contractor risk, Employer’s Representative instead of Engineer).'
  },
  {
    step: 2,
    viTitle: 'Làm chủ quy trình Điều khoản 3.7 & 20.2',
    enTitle: 'Mastering Sub-Clauses 3.7 & 20.2',
    viDesc: 'Mọi khiếu nại tài chính hoặc gia hạn thời gian đều đi qua chuỗi: Thông báo 28 ngày → Kiểm tra trễ 14 ngày → Hồ sơ chi tiết 84 ngày → Tham vấn 42 ngày → Quyết định 42 ngày.',
    enDesc: 'Every payment/EOT Claim follows: 28-day Notice → 14-day late check → 84-day Fully Detailed Claim → 42-day Consultation → 42-day Determination.'
  }
];

export const TIME_CHEATSHEET = [
  { days: '7 ngày / 7 days', vi: 'Thông báo đo đạc khối lượng (12.1)', en: 'Notice of measurement (12.1)', hash: '#red-17-12-1' },
  { days: '14 ngày / 14 days', vi: 'Thông báo khởi công (8.1) · Kiểm tra trễ 20.2 · Sự kiện ngoại lệ (18.2)', en: 'Commencement (8.1) · Late Notice check (20.2) · Exceptional Event (18.2)', hash: '#red-17-20-2' },
  { days: '21 ngày / 21 days', vi: 'Xem xét tiến độ (8.3) · Kiểm định hoàn thành (9.1) · Thẩm tra thiết kế Sách Vàng (5.2)', en: 'Programme review (8.3) · Tests on Completion (9.1) · Yellow Design Review (5.2)', hash: '#red-17-8-3' },
  { days: '28 ngày / 28 days', vi: 'Thông báo Khiếu nại (20.2) · Cấp IPC (14.6) · Gửi NOD (3.7) · Bảo lãnh (4.2)', en: 'Notice of Claim (20.2) · Issue IPC (14.6) · NOD (3.7) · Performance Security (4.2)', hash: '#red-17-20-2' },
  { days: '42 ngày / 42 days', vi: 'Tham vấn (3.7) · Quyết định (3.7) · Đưa lên DAAB sau NOD (21.4)', en: 'Consultation (3.7) · Determination (3.7) · Refer to DAAB after NOD (21.4)', hash: '#red-17-3-7' },
  { days: '56 ngày / 56 days', vi: 'Chủ đầu tư thanh toán IPC/FPC (14.7)', en: 'Employer payment of IPC/FPC (14.7)', hash: '#red-17-14-7' },
  { days: '84 ngày / 84 days', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ (20.2) · Quyết định của DAAB (21.4)', en: 'Fully Detailed Claim (20.2) · DAAB Decision (21.4)', hash: '#red-17-20-2' }
];

export const QUIZ = [
  {
    qVi: 'Theo Điều khoản 20.2 (FIDIC Red Book 2017), thời hạn tối đa để gửi Thông báo Khiếu nại (Notice of Claim) là bao nhiêu ngày?',
    qEn: 'Under Sub-Clause 20.2 (FIDIC Red Book 2017), what is the strict deadline to issue a Notice of Claim?',
    options: ['14 ngày / 14 days', '28 ngày / 28 days', '42 ngày / 42 days', '84 ngày / 84 days'],
    answer: 1
  },
  {
    qVi: 'Nếu Nhà tư vấn cho rằng Thông báo Khiếu nại nộp muộn hơn 28 ngày, Nhà tư vấn phải thông báo lại trong bao nhiêu ngày để không bị coi là mặc nhiên hợp lệ?',
    qEn: 'If the Engineer considers the Notice of Claim late, within how many days must they give Notice before it is deemed valid?',
    options: ['7 ngày / 7 days', '14 ngày / 14 days', '21 ngày / 21 days', '28 ngày / 28 days'],
    answer: 1
  },
  {
    qVi: 'Trong Sách Bạc (Silver Book 2017), rủi ro về điều kiện địa chất ngầm không lường trước (4.12) thường thuộc về ai?',
    qEn: 'In Silver Book 2017, who generally bears the risk of unforeseeable subsurface difficulties (Sub-Clause 4.12)?',
    options: ['Chủ đầu tư / The Employer', 'Nhà thầu EPC / The EPC Contractor', 'Nhà tư vấn / The Engineer', 'Chia đều 50/50 / Shared 50/50'],
    answer: 1
  }
];

export const CONTRACT_MODELS = [
  {
    id: 'notice-claim',
    viTitle: 'Mẫu 01: Thông báo Khiếu nại (Điều khoản 20.2)',
    enTitle: 'Template 01: Notice of Claim (Sub-Clause 20.2)',
    viBody: 'Kính gửi: Nhà tư vấn / Chủ đầu tư\nTiêu đề: THÔNG BÁO KHIẾU NẠI THEO ĐIỀU KHOẢN 20.2\nNội dung: Căn cứ Điều khoản 1.3 và 20.2 của Hợp đồng, Nhà thầu xin trân trọng thông báo về sự kiện [Mô tả sự kiện] phát sinh vào ngày [Ngày], ảnh hưởng đến tiến độ/chi phí thi công. Nhà thầu đang lưu giữ hồ sơ hiện trường đồng thời và sẽ nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ trong vòng 84 ngày.',
    enBody: 'To: The Engineer / The Employer\nSubject: NOTICE OF CLAIM PURSUANT TO SUB-CLAUSE 20.2\nDear Sirs, Pursuant to Sub-Clauses 1.3 and 20.2 of the Contract, the Contractor hereby gives Notice of [Describe Event] occurring on [Date], which entitles the Contractor to EOT and/or Additional Payment. Contemporary records are being maintained and a Fully Detailed Claim will follow within 84 days.'
  },
  {
    id: 'nod-3-7',
    viTitle: 'Mẫu 02: Thông báo Không hài lòng (Điều khoản 3.7.5)',
    enTitle: 'Template 02: Notice of Dissatisfaction (Sub-Clause 3.7.5)',
    viBody: 'Kính gửi: Nhà tư vấn và Chủ đầu tư\nTiêu đề: THÔNG BÁO KHÔNG HÀI LÒNG (NOD)\nNội dung: Trong thời hạn 28 ngày kể từ khi nhận Quyết định số [...] ngày [...], Nhà thầu thông báo không hài lòng với phần/toàn bộ Quyết định nêu trên và bảo lưu quyền đưa tranh chấp ra DAAB theo Điều khoản 21.4.',
    enBody: 'To: The Engineer and The Employer\nSubject: NOTICE OF DISSATISFACTION (NOD)\nDear Sirs, Within 28 days of receiving the Engineer’s Determination dated [Date], the Contractor hereby gives Notice of Dissatisfaction with [part/whole] of the Determination and reserves its right to refer the Dispute to the DAAB under Sub-Clause 21.4.'
  },
  {
    id: 'taking-over-10-1',
    viTitle: 'Mẫu 03: Đề nghị Cấp Chứng chỉ Bàn giao (Điều khoản 10.1)',
    enTitle: 'Template 03: Application for Taking-Over Certificate (Sub-Clause 10.1)',
    viBody: 'Kính gửi: Nhà tư vấn\nTiêu đề: ĐỀ NGHỊ CẤP CHỨNG CHỈ BÀN GIAO CÔNG TRÌNH\nNội dung: Căn cứ Điều khoản 10.1, Nhà thầu thông báo Công trình / Hạng mục [...] đã hoàn thành các Kiểm định khi Hoàn thành và sẵn sàng bàn giao vào ngày [...]. Kính đề nghị Nhà tư vấn xem xét và cấp Chứng chỉ Bàn giao trong vòng 28 ngày.',
    enBody: 'To: The Engineer\nSubject: APPLICATION FOR TAKING-OVER CERTIFICATE (SUB-CLAUSE 10.1)\nDear Sirs, Pursuant to Sub-Clause 10.1, the Contractor gives Notice that the Works / Section [...] have passed Tests on Completion and will be ready for taking over on [Date]. We request the Taking-Over Certificate within 28 days.'
  }
];

export const PROJECT_CASE = {
  viTitle: 'Ví dụ Dự án: Cầu vượt Nút giao Quốc lộ (Sách Đỏ 2017)',
  enTitle: 'Project Case Study: Highway Interchange Bridge (Red Book 2017)',
  viSummary: 'Khi thi công cọc khoan nhồi trụ P4, Nhà thầu gặp tầng đá ngầm bất thường không có trong hồ sơ khảo sát địa chất (Điều khoản 4.12). Dưới đây là chuỗi mốc thời gian thực tế áp dụng Điều khoản 20.2:',
  enSummary: 'During bored piling at Pier P4, the Contractor encountered an unexpected rock stratum absent from geotechnical data (Sub-Clause 4.12). Below is the real-world timeline under Sub-Clause 20.2:',
  steps: [
    { day: 'Ngày 0', dayEn: 'Day 0', vi: 'Phát hiện tầng đá ngầm khi khoan cọc P4; gửi Thông báo 4.12 để Nhà tư vấn kiểm tra hiện trường.', en: 'Rock stratum encountered at Pier P4; prompt Notice under 4.12 for Engineer inspection.' },
    { day: 'Ngày 12', dayEn: 'Day 12', vi: 'Nộp Thông báo Khiếu nại (Notice of Claim) theo Điều khoản 20.2 (trong hạn 28 ngày).', en: 'Issued Notice of Claim under Sub-Clause 20.2 (well within 28 days).' },
    { day: 'Ngày 68', dayEn: 'Day 68', vi: 'Nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ gồm nhật ký khoan, hóa đơn mũi khoan đá và phân tích đường găng tiến độ (trong hạn 84 ngày).', en: 'Submitted Fully Detailed Claim with drilling logs, bit invoices, and CPM delay analysis (within 84 days).' },
    { day: 'Ngày 105', dayEn: 'Day 105', vi: 'Nhà tư vấn tham vấn hai bên theo 3.7.1 và đạt thỏa thuận EOT +14 ngày và chi phí phát sinh.', en: 'Engineer consulted both Parties under 3.7.1 and agreed +14 days EOT and Cost.' }
  ]
};
