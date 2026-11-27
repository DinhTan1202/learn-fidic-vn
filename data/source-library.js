export const GOLDEN_PRINCIPLES = [
  {
    gp: 'GP1',
    viTitle: 'Nghĩa vụ, quyền, vai trò và trách nhiệm không bị thay đổi bản chất',
    enTitle: 'Duties, rights, obligations, roles and responsibilities remain generally as implied',
    vi: 'Điều kiện Riêng (Particular Conditions) không được làm sai lệch vai trò cốt lõi của các bên (ví dụ: không biến Nhà tư vấn trung lập thành người thiên vị hoàn toàn trong 3.7).',
    en: 'Particular Conditions must not alter the fundamental balance of roles (e.g., preserving the Engineer’s neutrality under Sub-Clause 3.7).'
  },
  {
    gp: 'GP2',
    viTitle: 'Điều kiện Riêng phải được soạn thảo rõ ràng, không mập mờ',
    enTitle: 'Particular Conditions must be drafted clearly and unambiguously',
    vi: 'Mọi sửa đổi đối với Điều kiện Chung phải minh bạch, nhất quán với thuật ngữ định nghĩa và không tạo ra xung đột nội tại.',
    en: 'Any amendments to General Conditions must be clear, consistent with definitions, and free of ambiguity.'
  },
  {
    gp: 'GP3',
    viTitle: 'Không làm mất cân bằng phân bổ rủi ro hợp lý',
    enTitle: 'Particular Conditions must not change the balance of risk/reward allocation',
    vi: 'Không chuyển toàn bộ rủi ro bất khả kháng hoặc rủi ro của Chủ đầu tư sang Nhà thầu một cách bất hợp lý trong Sách Đỏ/Sách Vàng.',
    en: 'Must not unreasonably shift Employer risks onto the Contractor contrary to the chosen FIDIC Book.'
  },
  {
    gp: 'GP4',
    viTitle: 'Thời hạn thực hiện nghĩa vụ phải hợp lý',
    enTitle: 'All time periods specified in the Contract must be reasonable',
    vi: 'Không rút ngắn quá mức các mốc thời hạn (như 28 ngày thông báo, 56 ngày thanh toán) khiến một bên không thể thực hiện trên thực tế.',
    en: 'Contractual time periods for notices, reviews, and payments must remain reasonable and workable.'
  },
  {
    gp: 'GP5',
    viTitle: 'Mọi tranh chấp phải qua Ban Xử lý Tranh chấp (DAAB) trước Trọng tài',
    enTitle: 'All formal Disputes must be referred to a DAAB prior to Arbitration',
    vi: 'Không được xóa bỏ cơ chế DAAB (Điều khoản 21) để giữ kênh giải quyết tranh chấp nhanh, tiết kiệm trước khi khởi kiện trọng tài.',
    en: 'The DAAB mechanism (Clause 21) must be retained as a condition precedent to Arbitration.'
  }
];

export const CASE_LAW = [
  {
    id: 'gibraltar-20-1',
    book: 'yel',
    ref: '[2015] EWCA Civ 712 · Gibraltar Tunnel',
    parties: 'Obrascon Huarte Lain SA v HM Attorney General for Gibraltar',
    clauses: ['20.1', '20.2', '4.12', '15.2'],
    vi: 'Án lệ kinh điển về mốc 28 ngày (Điều khoản 20.1 / 20.2): Tòa phúc thẩm Anh xác định thời hạn 28 ngày chỉ bắt đầu chạy khi Nhà thầu thực tế nhận biết (hoặc lẽ ra phải nhận biết) về sự kiện gây chậm/chi phí, được diễn giải rộng rãi để tránh mất quyền oan cho Nhà thầu.',
    en: 'Landmark UK Court of Appeal ruling on 28-day Notice (20.1/20.2): The clock starts when the Contractor became aware (or should have become aware) of the event causing delay/cost, construed commercially rather than punitively.'
  },
  {
    id: 'vsh-thuong-kon-tum',
    book: 'sil',
    ref: '11/2019/QD-PQTT · TAND TP. Hà Nội',
    parties: 'Thủy điện Vĩnh Sơn - Sông Hinh (VSH) v HydroChina Huadong & China Railways 18th',
    clauses: ['4.12', '20.2', '21.6'],
    vi: 'Tranh chấp EPC Thủy điện Thượng Kon Tum theo Sách Bạc 1999: Hội đồng Trọng tài VIAC & Tòa án xem xét đơn phương chấm dứt hợp đồng EPC, điều kiện địa chất ngầm và hiệu lực phán quyết trọng tài tại Việt Nam.',
    en: 'Silver Book 1999 EPC dispute (Thuong Kon Tum Hydropower): VIAC arbitration & Hanoi Court review on EPC termination, subsurface conditions, and award enforcement in Vietnam.'
  },
  {
    id: 'muoi-mo-lao',
    book: 'sil',
    ref: '02/2020 & 09/2020/QD-PQTT · TAND TP. Hà Nội',
    parties: 'CECO - INCODEMIC - NGASON v Tập đoàn Hóa chất (Vinachem)',
    clauses: ['14.7', '15.2', '21.6'],
    vi: 'Tranh chấp hợp đồng EPC Dự án Muối mỏ Lào (Sách Bạc): Xác định thẩm quyền trọng tài và tính hợp pháp của việc chấm dứt hợp đồng, thanh toán khối lượng dở dang.',
    en: 'Silver Book EPC dispute (Laos Potash Mine): Court review of arbitral jurisdiction, termination validity, and valuation of work done.'
  },
  {
    id: 'dap2-lao-cai',
    book: 'sil',
    ref: '868/2023/QD-PQTT · TAND TP. HCM',
    parties: 'DAP2 Lào Cai v TTCL & TVC',
    clauses: ['8.8', '11.9', '21.6'],
    vi: 'Tranh chấp hợp đồng EPC nhà máy phân bón (Sách Bạc): Liên quan tới phạt chậm tiến độ (Delay Damages), bảo hành khiếm khuyết và yêu cầu hủy phán quyết trọng tài.',
    en: 'Silver Book EPC dispute (DAP2 Lao Cai): Addressed Delay Damages, defect liability, and setting-aside proceedings.'
  },
  {
    id: 'ree-bucg',
    book: 'red',
    ref: '15/2016 & 03/2022/KDTM-GDT · TAND Tối cao',
    parties: 'REE v BUCG (Dự án Golden Westlake)',
    clauses: ['14.6', '14.7', '15.2'],
    vi: 'Án lệ Giám đốc thẩm nổi tiếng tại Việt Nam về hợp đồng xây dựng theo mẫu FIDIC Red Book 1999: Xem xét nghĩa vụ thanh toán, nghiệm thu khối lượng và trách nhiệm bảo lãnh.',
    en: 'Supreme People’s Court cassation decision on Red Book 1999 (Golden Westlake): Examined interim payment certification, measurement, and security obligations.'
  },
  {
    id: 'posco-kid',
    book: 'red',
    ref: '09/2019/QD-PQTT · TAND TP. Hà Nội',
    parties: 'Posco E&C Việt Nam v KID',
    clauses: ['14.7', '14.8', '21.6'],
    vi: 'Tranh chấp theo Sách Đỏ 1999: Xử lý công nợ thanh toán, lãi chậm trả (14.8) và thẩm quyền giải quyết tranh chấp theo điều khoản trọng tài.',
    en: 'Red Book 1999 dispute: Addressed unpaid IPCs, financing charges for delayed payment (14.8), and arbitration clause validity.'
  },
  {
    id: 'acc-cam-ranh',
    book: 'red',
    ref: '578/2022/QD-PQTT · TAND TP. HCM',
    parties: 'ACC v TT Cam Ranh',
    clauses: ['10.1', '14.11', '21.6'],
    vi: 'Tranh chấp thi công theo mẫu Sách Đỏ tại Cam Ranh: Liên quan tới bàn giao công trình, quyết toán cuối cùng và thủ tục xem xét hủy phán quyết trọng tài.',
    en: 'Red Book construction dispute in Cam Ranh: Addressed taking over, final settlement, and arbitral award challenge.'
  },
  {
    id: 'long-giang-khomes',
    book: 'red',
    ref: '01/2021/KDTM-PT · TAND Khánh Hòa',
    parties: 'Long Giang & ACCCO v K-Homes',
    clauses: ['8.8', '14.7', '15.2'],
    vi: 'Bản án phúc thẩm về tranh chấp hợp đồng thi công Sách Đỏ 1999: Giải quyết phạt vi phạm chậm tiến độ và thanh toán khối lượng hoàn thành.',
    en: 'Appellate commercial judgment on Red Book 1999: Addressed Delay Damages and payment for completed works.'
  },
  {
    id: 'bg-bw-1230',
    book: 'red',
    ref: '1230/2022/QD-PQTT · TAND TP. HCM',
    parties: 'BG v BW',
    clauses: ['14.6', '14.7', '21.6'],
    vi: 'Quyết định không hủy phán quyết trọng tài liên quan tới hợp đồng thi công Sách Đỏ 1999: Thanh toán khối lượng, nghiệm thu và hiệu lực thỏa thuận trọng tài.',
    en: 'HCMC Court decision upholding arbitral award under Red Book 1999 on measurement, payment, and arbitration validity.'
  },
  {
    id: 'ab-nhatrang-agc',
    book: 'red',
    ref: '296/2020/KDTM-PT · TAND TP. HCM',
    parties: 'A&B Saigon Nha Trang v AGC',
    clauses: ['10.1', '11.9', '14.9'],
    vi: 'Bản án phúc thẩm về tranh chấp hợp đồng xây dựng Sách Đỏ 1999: Bàn giao công trình, bảo hành sai sót (DNP) và hoàn trả tiền giữ lại (Retention Money).',
    en: 'Appellate judgment on Red Book 1999: Addressed taking over, defects liability, and release of Retention Money.'
  },
  {
    id: 'mac-btc-66',
    book: 'red',
    ref: '66/2023/KDTM-PT · TAND TP. Hà Nội',
    parties: 'MAC v BTC',
    clauses: ['13.3', '14.7', '15.2'],
    vi: 'Bản án phúc thẩm về hợp đồng xây dựng Sách Đỏ: Xem xét khối lượng phát sinh (Variations), xác nhận thanh toán và quyền chấm dứt hợp đồng.',
    en: 'Hanoi appellate judgment on Red Book: Examined Variations valuation, payment certification, and termination rights.'
  },
  {
    id: 'bas-white-book',
    book: 'sil',
    ref: '08/2021/KDTM-PT · Quyển Trắng 1998',
    parties: 'Tranh chấp Hợp đồng Tư vấn (White Book 1998)',
    clauses: ['4.1', '16.2', '21.6'],
    vi: 'Bản án áp dụng FIDIC White Book 1998 (Hợp đồng Dịch vụ Tư vấn - Điều khoản 4 & 16): Nghĩa vụ cẩn trọng của Tư vấn, thanh toán phí tư vấn và chấm dứt hợp đồng.',
    en: 'Judgment applying FIDIC White Book 1998 (Client/Consultant Agreement - Clauses 4 & 16): Consultant standard of care, fee payment, and termination.'
  }
];

export const MAPPING_99_17 = [
  { c99: '2.5 + 20.1', c17: '20.1 + 20.2', vi: 'Hợp nhất Khiếu nại CĐT (2.5) và Nhà thầu (20.1) thành quy trình bình đẳng; tăng hạn hồ sơ chi tiết từ 42 lên 84 ngày.', en: 'Merges Employer (2.5) & Contractor (20.1) claims into symmetrical 20.2; extends detailed claim from 42 to 84 days.' },
  { c99: '3.5', c17: '3.7', vi: 'Bổ sung vai trò trung lập rõ ràng của NTV + mốc cứng 42 ngày tham vấn + 42 ngày quyết định + 28 ngày NOD.', en: 'Adds explicit Engineer neutrality + fixed 42d consultation + 42d determination + 28d NOD.' },
  { c99: 'Mới / New', c17: '8.4', vi: 'Thêm cơ chế Cảnh báo Sớm (Advance Warning) bắt buộc hai bên báo trước rủi ro chậm tiến độ/tăng chi phí.', en: 'Adds mandatory Advance Warning of probable future adverse events.' },
  { c99: '15.5', c17: '15.5 + 15.6', vi: 'Chấm dứt vì lợi ích CĐT: bản 2017 cho phép Nhà thầu được bồi thường lợi nhuận bị mất.', en: 'Termination for convenience: 2017 entitles Contractor to loss of profit.' },
  { c99: '17.6', c17: '1.15', vi: 'Chuyển Giới hạn Trách nhiệm từ 17.6 lên 1.15 trong Quy định chung.', en: 'Moves Limitation of Liability from 17.6 to 1.15.' },
  { c99: '19.1–19.7', c17: '18.1–18.6', vi: 'Đổi tên "Force Majeure" (Chương 19) thành "Exceptional Events" (Chương 18).', en: 'Renames Force Majeure (Clause 19) to Exceptional Events (Clause 18).' },
  { c99: '20.2–20.8', c17: '21.1–21.8', vi: 'Tách Tranh chấp & Trọng tài thành Chương 21 riêng; đổi DAB thành DAAB (thêm chức năng phòng ngừa 21.3).', en: 'Splits Disputes into Clause 21; renames DAB to Standing DAAB with Dispute Avoidance (21.3).' }
];

export const SOURCE_DOCS = [
  { cat: 'FIDIC Guide', name: '1- Contract Guide 2022 (FIDIC 2017).pdf', size: '440 MB', desc: 'Hướng dẫn chính thức của FIDIC cho Bộ sách 2017 (2nd Edition).' },
  { cat: 'FIDIC Guide', name: '2- Contract_Guide 2000 (FIDIC 1999).docx', size: '3.3 MB', desc: 'Hướng dẫn chính thức của FIDIC cho Bộ sách 1999.' },
  { cat: 'FIDIC Guide', name: '3- FIDIC procurement-procedures-guide 2011.pdf', size: '0.7 MB', desc: 'Hướng dẫn quy trình đấu thầu và lựa chọn nhà thầu theo FIDIC.' },
  { cat: 'Principles', name: '4- FIDIC Golden Principle 2019.pdf', size: '0.3 MB', desc: '5 Nguyên tắc Vàng không được vi phạm khi sửa Điều kiện Riêng.' },
  { cat: 'Diagrams', name: 'FIDIC Ultimate Diagram 1999.pdf / So do FIDIC 1999.pdf', size: '7.3 MB', desc: 'Sơ đồ tổng thể các mốc thời gian và quy trình FIDIC 1999.' },
  { cat: 'Books', name: '2023 The-FIDIC-Red-Book-Contract-an-International-Clause-By-Clause-Commentary.pdf', size: '6.2 MB', desc: 'Bình luận chi tiết từng điều khoản Red Book quốc tế (2023).' },
  { cat: 'Books', name: '2020 2017-fidic-contracts Godwin (Wiley, 2020).pdf', size: '1.6 MB', desc: 'Phân tích chuyên sâu Hợp đồng FIDIC 2017 (Godwin).' },
  { cat: 'Books', name: '2014 ICE-FIDIC-USER-S-GUIDE-3rd-edtion (Leo Grutters).pdf', size: '170 MB', desc: 'Cẩm nang thực hành FIDIC của ICE (Leo Grutters).' }
];

export const EXTRA_TEMPLATES = [
  {
    id: 'suspend-16-1',
    viTitle: 'Mẫu 04: Thông báo Tạm ngừng Thi công (Điều khoản 16.1)',
    enTitle: 'Template 04: Notice of Suspension by Contractor (Sub-Clause 16.1)',
    viBody: 'Kính gửi: Chủ đầu tư & Nhà tư vấn\nTiêu đề: THÔNG BÁO Ý ĐỊNH TẠM NGỪNG THI CÔNG THEO ĐIỀU KHOẢN 16.1\nNội dung: Căn cứ Điều khoản 14.7 và 16.1, khoản thanh toán theo IPC số [...] đã quá hạn 56 ngày kể từ ngày [...]. Nếu Chủ đầu tư không thanh toán đầy đủ trong vòng 21 ngày kể từ ngày nhận Thông báo này, Nhà thầu sẽ tạm ngừng (hoặc giảm tốc độ) thi công và bảo lưu quyền khiếu nại EOT + Chi phí + Lợi nhuận theo 20.2.',
    enBody: 'To: The Employer & The Engineer\nSubject: NOTICE OF INTENTION TO SUSPEND WORK (SUB-CLAUSE 16.1)\nDear Sirs, Pursuant to Sub-Clauses 14.7 and 16.1, payment under IPC No. [...] became overdue on [Date]. Unless full payment is received within 21 days of this Notice, the Contractor intends to suspend work (or reduce the rate of work) and reserves its right to EOT and Cost Plus Profit under Sub-Clause 20.2.'
  },
  {
    id: 'oral-3-5',
    viTitle: 'Mẫu 05: Xác nhận Chỉ dẫn bằng Miệng (Điều khoản 3.5)',
    enTitle: 'Template 05: Confirmation of Oral Instruction (Sub-Clause 3.5)',
    viBody: 'Kính gửi: Nhà tư vấn\nTiêu đề: XÁC NHẬN CHỈ DẪN BẰNG MIỆNG THEO ĐIỀU KHOẢN 3.5\nNội dung: Trong vòng 2 ngày làm việc kể từ cuộc kiểm tra hiện trường ngày [...], Nhà thầu xin xác nhận bằng văn bản chỉ dẫn bằng miệng của Ông/Bà về việc [...]. Nếu Nhà tư vấn không phản đối bằng văn bản trong 2 ngày làm việc, chỉ dẫn này sẽ có hiệu lực chính thức.',
    enBody: 'To: The Engineer\nSubject: CONFIRMATION OF ORAL INSTRUCTION (SUB-CLAUSE 3.5)\nDear Sirs, Within 2 working days of the Site inspection on [Date], the Contractor hereby confirms in writing your oral instruction to [...]. Unless rejected in writing within 2 working days, this confirmation shall constitute a binding written instruction.'
  }
];

export const EXTENDED_QUIZ = [
  {
    qVi: 'Theo 5 Nguyên tắc Vàng FIDIC 2019 (GP5), cơ chế nào bắt buộc phải giữ trước khi đưa tranh chấp ra Trọng tài?',
    qEn: 'Under FIDIC Golden Principle 5 (GP5), which mechanism must precede Arbitration?',
    options: ['Thương lượng trực tiếp / Direct negotiation', 'Ban Xử lý Tranh chấp (DAAB)', 'Hòa giải tòa án / Court mediation', 'Thanh tra xây dựng / Construction inspectorate'],
    answer: 1,
    exp: 'GP5 yêu cầu giữ nguyên cơ chế DAAB (Điều khoản 21) như bước tiền tố trước Trọng tài.'
  },
  {
    qVi: 'Theo Điều khoản 14.7 (Red Book 2017), Chủ đầu tư phải thanh toán Chứng chỉ Thanh toán Tạm (IPC) trong bao nhiêu ngày kể từ khi Nhà tư vấn nhận Hồ sơ thanh toán?',
    qEn: 'Under Sub-Clause 14.7 (Red Book 2017), within how many days after the Engineer receives the Statement must the Employer pay the IPC?',
    options: ['28 ngày / 28 days', '42 ngày / 42 days', '56 ngày / 56 days', '84 ngày / 84 days'],
    answer: 2,
    exp: 'Nhà tư vấn có 28 ngày cấp IPC (14.6), Chủ đầu tư thanh toán trong 56 ngày kể từ khi NTV nhận Statement (14.7).'
  },
  {
    qVi: 'Theo án lệ Obrascon v Gibraltar (20.1), thời hạn 28 ngày gửi Thông báo Khiếu nại bắt đầu tính từ khi nào?',
    qEn: 'Under Obrascon v Gibraltar (20.1), when does the 28-day Notice clock start?',
    options: ['Ngày ký hợp đồng / Contract signing', 'Khi Nhà thầu biết hoặc lẽ ra phải biết sự kiện gây chậm/chi phí', 'Khi hoàn thành công trình / Taking Over', 'Cuối mỗi tháng / End of month'],
    answer: 1,
    exp: 'Án lệ xác định mốc 28 ngày tính từ khi Nhà thầu nhận biết (hoặc lẽ ra phải nhận biết) sự kiện gây chậm trễ hoặc chi phí.'
  },
  {
    qVi: 'Trong Sách Đỏ 2017, nếu Chủ đầu tư chấm dứt hợp đồng vì lợi ích của mình (15.5), điểm mới quan trọng so với bản 1999 là gì?',
    qEn: 'In Red Book 2017, what is the key new protection for the Contractor upon Termination for Convenience (15.5)?',
    options: ['Không cần thông báo trước / No prior Notice', 'Được bồi thường lợi nhuận bị mất (loss of profit)', 'Không được thanh toán phần đã làm / No payment for work done', 'Chuyển ngay sang nhà thầu khác / Immediate re-award'],
    answer: 1,
    exp: 'Bản 2017 (15.5 & 15.6) bổ sung quyền được bồi thường lợi nhuận bị mất cho phần việc còn lại.'
  }
];
