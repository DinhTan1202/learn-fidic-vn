export const OTHER_BOOKS_SUBCLAUSES = [
  // ================= YELLOW BOOK 2017 (All 21 Clauses covered) =================
  {
    book: 'yel', ed: '17', clause: 1, id: '1.5',
    viTitle: 'Thứ tự Ưu tiên Tài liệu (Sách Vàng)', enTitle: 'Priority of Documents (Yellow)',
    viBody: 'Thứ tự ưu tiên đặc thù Sách Vàng: Hợp đồng → Thư Chấp thuận → Thư Dự thầu → Điều kiện Riêng → Điều kiện Chung → Yêu cầu của Chủ đầu tư (Employer’s Requirements) → Bảng biểu → Đề xuất của Nhà thầu (Contractor’s Proposal).',
    enBody: 'Yellow Book hierarchy: Contract Agreement → LOA → Letter of Tender → Particular Conditions → General Conditions → Employer’s Requirements → Schedules → Contractor’s Proposal.',
    timelimits: [], eq99: ['1.5']
  },
  {
    book: 'yel', ed: '17', clause: 1, id: '1.9',
    viTitle: 'Sai sót trong Yêu cầu của Chủ đầu tư', enTitle: "Errors in the Employer's Requirements",
    viBody: 'Nếu Nhà thầu phát hiện sai sót trong Yêu cầu của Chủ đầu tư mà một nhà thầu có kinh nghiệm không thể phát hiện khi kiểm tra hợp lý trước khi đấu thầu, Nhà thầu có quyền khiếu nại EOT và Chi phí + Lợi nhuận theo 20.2.',
    enBody: 'If the Contractor finds an error in the Employer’s Requirements not discoverable by an experienced contractor before tender, it may claim EOT and Cost Plus Profit under 20.2.',
    timelimits: [
      { badge: 'Theo HĐ', badgeEn: 'Contract', vi: 'Thông báo sai sót ngay khi phát hiện trong thời gian kiểm tra', en: 'Give Notice promptly upon discovering error' }
    ], eq99: ['1.9']
  },
  {
    book: 'yel', ed: '17', clause: 2, id: '2.1',
    viTitle: 'Quyền tiếp cận Công trường (Sách Vàng)', enTitle: 'Right of Access to the Site (Yellow)',
    viBody: 'Chủ đầu tư trao quyền tiếp cận công trường đúng thời hạn trong Dữ liệu Hợp đồng; chậm trễ cho phép Nhà thầu khiếu nại EOT và Chi phí + Lợi nhuận theo 20.2.',
    enBody: 'Employer grants Site access within Contract Data times; delay entitles Contractor to EOT and Cost Plus Profit under 20.2.',
    timelimits: [], eq99: ['2.1']
  },
  {
    book: 'yel', ed: '17', clause: 4, id: '4.1',
    viTitle: 'Nghĩa vụ Chung & Thiết kế (Sách Vàng)', enTitle: "Contractor's General Obligations (Yellow)",
    viBody: 'Nhà thầu chịu trách nhiệm thiết kế, sản xuất, lắp đặt và hoàn thành Công trình phù hợp với mục đích sử dụng (fit for purpose) nêu trong Yêu cầu của Chủ đầu tư.',
    enBody: 'The Contractor designs, executes, and completes the Works so they are fit for the purposes defined in the Employer’s Requirements.',
    timelimits: [], eq99: ['4.1']
  },
  {
    book: 'yel', ed: '17', clause: 4, id: '4.2',
    viTitle: 'Bảo lãnh Thực hiện Hợp đồng (Sách Vàng)', enTitle: 'Performance Security (Yellow)',
    viBody: 'Nộp trong 28 ngày kể từ Thư Chấp thuận; duy trì đến khi cấp Chứng chỉ Thực hiện và hoàn trả trong 21 ngày sau đó.',
    enBody: 'Deliver within 28 days of LOA; keep valid until Performance Certificate and returned within 21 days thereafter.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Bảo lãnh sau Thư Chấp thuận', en: 'Deliver within 28 days of LOA' }
    ], eq99: ['4.2']
  },
  {
    book: 'yel', ed: '17', clause: 4, id: '4.12',
    viTitle: 'Điều kiện Vật chất Không lường trước (Sách Vàng)', enTitle: 'Unforeseeable Physical Conditions (Yellow)',
    viBody: 'Tương tự Sách Đỏ: nếu gặp điều kiện địa chất/vật chất bất lợi không lường trước, Nhà thầu thông báo ngay để kiểm tra và khiếu nại theo 20.2.',
    enBody: 'Same as Red Book: prompt Notice for unforeseeable adverse physical conditions, with EOT/Cost claim under 20.2.',
    timelimits: [], eq99: ['4.12']
  },
  {
    book: 'yel', ed: '17', clause: 5, id: '5.1',
    viTitle: 'Nghĩa vụ Thiết kế Chung (Sách Vàng)', enTitle: 'General Design Obligations (Yellow)',
    viBody: 'Đặc trưng Sách Vàng: Nhà thầu tự lập thiết kế bởi các kỹ sư thiết kế đủ năng lực. Nhà thầu phải rà soát Yêu cầu của Chủ đầu tư trong thời hạn quy định kể từ Ngày Khởi công.',
    enBody: 'Core Yellow Book rule: Contractor carries out design using qualified designers and scrutinises Employer’s Requirements within the stated period after Commencement.',
    timelimits: [], eq99: ['5.1']
  },
  {
    book: 'yel', ed: '17', clause: 6, id: '6.7',
    viTitle: 'An toàn và Sức khỏe Lao động (Sách Vàng)', enTitle: 'Health and Safety (Yellow)',
    viBody: 'Nhà thầu tuân thủ đầy đủ quy định an toàn lao động tại công trường và thông báo ngay khi có tai nạn.',
    enBody: 'Contractor maintains health and safety precautions on Site and notifies accidents immediately.',
    timelimits: [], eq99: ['6.7']
  },
  {
    book: 'yel', ed: '17', clause: 7, id: '7.4',
    viTitle: 'Thử nghiệm bởi Nhà thầu (Sách Vàng)', enTitle: 'Testing by Contractor (Yellow)',
    viBody: 'Nhà thầu thực hiện các thử nghiệm thiết bị/vật tư tại nhà máy và công trường; Nhà tư vấn thông báo trước 24 giờ nếu tham dự.',
    enBody: 'Contractor conducts factory and Site tests; Engineer gives at least 24 hours’ Notice to attend.',
    timelimits: [
      { badge: '24 giờ', badgeEn: '24 hours', vi: 'Nhà tư vấn báo trước 24 giờ để chứng kiến thử nghiệm', en: 'Engineer gives 24h Notice to attend tests' }
    ], eq99: ['7.4']
  },
  {
    book: 'yel', ed: '17', clause: 8, id: '8.1',
    viTitle: 'Khởi công Công trình (Sách Vàng)', enTitle: 'Commencement of Works (Yellow)',
    viBody: 'Nhà tư vấn thông báo trước ít nhất 14 ngày; Ngày Khởi công trong vòng 42 ngày kể từ Thư Chấp thuận.',
    enBody: 'Engineer gives at least 14 days’ Notice; Commencement Date within 42 days of LOA.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Báo trước Ngày Khởi công', en: 'Prior Notice of Commencement' }
    ], eq99: ['8.1']
  },
  {
    book: 'yel', ed: '17', clause: 8, id: '8.7',
    viTitle: 'Tiền Bồi thường Chậm trễ (Sách Vàng)', enTitle: 'Delay Damages (Yellow)',
    viBody: 'Áp dụng tương tự Sách Đỏ: trả LDs cho mỗi ngày chậm hoàn thành, tối đa theo mức trần trong Dữ liệu Hợp đồng.',
    enBody: 'Same as Red Book: daily Delay Damages up to the cap in Contract Data.',
    timelimits: [], eq99: ['8.7']
  },
  {
    book: 'yel', ed: '17', clause: 9, id: '9.1',
    viTitle: 'Kiểm định khi Hoàn thành (Sách Vàng)', enTitle: 'Tests on Completion (Yellow)',
    viBody: 'Bao gồm kiểm tra chạy thử không tải, có tải và chạy thử nghiệm vận hành thiết bị; Nhà thầu báo trước ít nhất 21 ngày.',
    enBody: 'Includes pre-commissioning, commissioning, and trial operation tests; Contractor gives at least 21 days’ Notice.',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Thông báo trước 21 ngày về ngày sẵn sàng kiểm định', en: '21 days’ Notice of readiness for tests' }
    ], eq99: ['9.1']
  },
  {
    book: 'yel', ed: '17', clause: 10, id: '10.1',
    viTitle: 'Bàn giao Công trình (Sách Vàng)', enTitle: 'Taking Over the Works (Yellow)',
    viBody: 'Nhà thầu gửi đơn đề nghị trước tối đa 14 ngày; Nhà tư vấn cấp Chứng chỉ Bàn giao hoặc từ chối trong 28 ngày.',
    enBody: 'Contractor applies not earlier than 14 days before readiness; Engineer issues Certificate or rejects within 28 days.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà tư vấn cấp Chứng chỉ Bàn giao hoặc từ chối', en: 'Engineer issues TOC or rejects within 28 days' }
    ], eq99: ['10.1']
  },
  {
    book: 'yel', ed: '17', clause: 11, id: '11.9',
    viTitle: 'Chứng chỉ Thực hiện (Sách Vàng)', enTitle: 'Performance Certificate (Yellow)',
    viBody: 'Cấp trong vòng 28 ngày sau khi hết hạn Thời hạn Thông báo Sai sót (DNP) cuối cùng.',
    enBody: 'Issued within 28 days after the latest DNP expiry date.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Cấp Chứng chỉ Thực hiện sau hết hạn DNP', en: 'Issue Performance Certificate within 28 days of DNP expiry' }
    ], eq99: ['11.9']
  },
  {
    book: 'yel', ed: '17', clause: 12, id: '12.1',
    viTitle: 'Kiểm định sau Hoàn thành (Sách Vàng)', enTitle: 'Tests after Completion (Yellow)',
    viBody: 'Khác biệt lớn với Sách Đỏ: Điều khoản 12 trong Sách Vàng là "Kiểm định sau Hoàn thành" (thử nghiệm công suất/hiệu năng dây chuyền sau khi Chủ đầu tư đã tiếp nhận vận hành), không phải Đo lường khối lượng.',
    enBody: 'Major difference from Red Book: Clause 12 in Yellow Book covers Tests after Completion (performance/output tests after Taking Over), not Measurement.',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Chủ đầu tư thông báo trước 21 ngày ngày thực hiện kiểm định sau hoàn thành', en: 'Employer gives 21 days’ Notice of Tests after Completion' }
    ], eq99: ['12.1']
  },
  {
    book: 'yel', ed: '17', clause: 14, id: '14.7',
    viTitle: 'Thanh toán cho Nhà thầu (Sách Vàng)', enTitle: 'Payment (Yellow)',
    viBody: 'Chủ đầu tư thanh toán IPC trong vòng 56 ngày kể từ ngày Nhà tư vấn nhận được Hồ sơ thanh toán.',
    enBody: 'Employer pays each IPC within 56 days after the Engineer receives the Statement.',
    timelimits: [
      { badge: '56 ngày', badgeEn: '56 days', vi: 'Thanh toán IPC trong 56 ngày', en: 'Pay IPC within 56 days' }
    ], eq99: ['14.7']
  },
  {
    book: 'yel', ed: '17', clause: 15, id: '15.2',
    viTitle: 'Chấm dứt do Lỗi Nhà thầu (Sách Vàng)', enTitle: 'Termination for Contractor Default (Yellow)',
    viBody: 'Thông báo ý định chấm dứt trước 14 ngày cho các vi phạm nghiêm trọng (trừ phá sản/hối lộ).',
    enBody: '14 days’ Notice of intention to terminate for serious defaults (except insolvency/bribery).',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày ý định chấm dứt', en: '14 days’ Notice before termination' }
    ], eq99: ['15.2']
  },
  {
    book: 'yel', ed: '17', clause: 16, id: '16.2',
    viTitle: 'Chấm dứt bởi Nhà thầu (Sách Vàng)', enTitle: 'Termination by Contractor (Yellow)',
    viBody: 'Nhà thầu gửi Thông báo trước 14 ngày để chấm dứt khi Chủ đầu tư chậm thanh toán hoặc vi phạm nghiêm trọng.',
    enBody: 'Contractor gives 14 days’ Notice to terminate for prolonged non-payment or material Employer default.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày để chấm dứt', en: '14 days’ Notice to terminate' }
    ], eq99: ['16.2']
  },
  {
    book: 'yel', ed: '17', clause: 17, id: '17.1',
    viTitle: 'Trách nhiệm Bảo quản Công trình (Sách Vàng)', enTitle: 'Care of the Works (Yellow)',
    viBody: 'Nhà thầu bảo quản Công trình và Thiết bị từ Ngày Khởi công đến ngày cấp Chứng chỉ Bàn giao.',
    enBody: 'Contractor cares for Works and Goods from Commencement Date until Taking-Over Certificate.',
    timelimits: [], eq99: ['17.2']
  },
  {
    book: 'yel', ed: '17', clause: 18, id: '18.2',
    viTitle: 'Thông báo Sự kiện Ngoại lệ (Sách Vàng)', enTitle: 'Notice of Exceptional Event (Yellow)',
    viBody: 'Gửi Thông báo trong vòng 14 ngày kể từ khi biết về Sự kiện Ngoại lệ.',
    enBody: 'Give Notice within 14 days of becoming aware of an Exceptional Event.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo Sự kiện Ngoại lệ trong 14 ngày', en: 'Notice within 14 days' }
    ], eq99: ['19.2']
  },
  {
    book: 'yel', ed: '17', clause: 19, id: '19.1',
    viTitle: 'Yêu cầu chung về Bảo hiểm (Sách Vàng)', enTitle: 'Insurance Requirements (Yellow)',
    viBody: 'Nhà thầu mua bảo hiểm công trình, thiết bị, trách nhiệm bên thứ ba và bảo hiểm nghề nghiệp thiết kế (Professional Indemnity).',
    enBody: 'Contractor provides Works, Equipment, third-party liability, and design Professional Indemnity insurance.',
    timelimits: [], eq99: ['18.1']
  },

  // ================= SILVER BOOK 2017 (All 21 Clauses covered) =================
  {
    book: 'sil', ed: '17', clause: 2, id: '2.1',
    viTitle: 'Quyền tiếp cận Công trường (Sách Bạc)', enTitle: 'Right of Access to the Site (Silver)',
    viBody: 'Chủ đầu tư trao quyền tiếp cận công trường theo thời hạn trong Hợp đồng; nếu chậm, Nhà thầu có quyền khiếu nại theo 20.2.',
    enBody: 'Employer grants Site access per Contract; delay entitles Contractor to claim under 20.2.',
    timelimits: [], eq99: ['2.1']
  },
  {
    book: 'sil', ed: '17', clause: 4, id: '4.1',
    viTitle: 'Nghĩa vụ Chung & Chìa khóa trao tay (Sách Bạc)', enTitle: "Contractor's General Obligations (Silver)",
    viBody: 'Nhà thầu EPC chịu trách nhiệm toàn diện về thiết kế, mua sắm, thi công và chạy thử để công trình đạt đầy đủ công năng theo Yêu cầu Chủ đầu tư với giá trọn gói.',
    enBody: 'EPC Contractor takes single-point responsibility for design, procurement, construction, and commissioning on a lump-sum turnkey basis.',
    timelimits: [], eq99: ['4.1']
  },
  {
    book: 'sil', ed: '17', clause: 4, id: '4.2',
    viTitle: 'Bảo lãnh Thực hiện Hợp đồng (Sách Bạc)', enTitle: 'Performance Security (Silver)',
    viBody: 'Nộp trong 28 ngày kể từ ngày ký Hợp đồng (hoặc Thỏa thuận hợp đồng có hiệu lực) và hoàn trả trong 21 ngày sau Chứng chỉ Thực hiện.',
    enBody: 'Deliver within 28 days after Contract Agreement takes effect; returned within 21 days after Performance Certificate.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Bảo lãnh Thực hiện Hợp đồng', en: 'Deliver Performance Security within 28 days' }
    ], eq99: ['4.2']
  },
  {
    book: 'sil', ed: '17', clause: 5, id: '5.1',
    viTitle: 'Nghĩa vụ Thiết kế & Rủi ro Dữ liệu (Sách Bạc)', enTitle: 'General Design Obligations (Silver)',
    viBody: 'Nhà thầu EPC tự kiểm tra và chịu trách nhiệm về tính chính xác của mọi dữ liệu trong Yêu cầu của Chủ đầu tư (trừ 4 ngoại lệ cụ thể tại 5.1).',
    enBody: 'EPC Contractor verifies and assumes responsibility for accuracy of Employer’s Requirements (subject to 4 narrow exceptions in 5.1).',
    timelimits: [], eq99: ['5.1']
  },
  {
    book: 'sil', ed: '17', clause: 6, id: '6.7',
    viTitle: 'An toàn và Sức khỏe Lao động (Sách Bạc)', enTitle: 'Health and Safety (Silver)',
    viBody: 'Nhà thầu EPC chịu trách nhiệm toàn diện về an toàn lao động và báo cáo ngay khi xảy ra tai nạn.',
    enBody: 'EPC Contractor maintains Site safety and notifies accidents immediately.',
    timelimits: [], eq99: ['6.7']
  },
  {
    book: 'sil', ed: '17', clause: 7, id: '7.4',
    viTitle: 'Thử nghiệm bởi Nhà thầu (Sách Bạc)', enTitle: 'Testing by Contractor (Silver)',
    viBody: 'Nhà thầu EPC tự thực hiện các thử nghiệm theo hợp đồng và thông báo để Đại diện Chủ đầu tư chứng kiến.',
    enBody: 'EPC Contractor carries out specified tests and gives Notice for Employer’s Representative to attend.',
    timelimits: [], eq99: ['7.4']
  },
  {
    book: 'sil', ed: '17', clause: 8, id: '8.1',
    viTitle: 'Khởi công Công trình (Sách Bạc)', enTitle: 'Commencement of Works (Silver)',
    viBody: 'Ngày Khởi công được ghi rõ trong Thỏa thuận Hợp đồng hoặc do Chủ đầu tư thông báo trước ít nhất 14 ngày.',
    enBody: 'Commencement Date is stated in Contract Agreement or notified by Employer at least 14 days in advance.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày Ngày Khởi công', en: '14 days’ Notice of Commencement' }
    ], eq99: ['8.1']
  },
  {
    book: 'sil', ed: '17', clause: 9, id: '9.1',
    viTitle: 'Kiểm định khi Hoàn thành (Sách Bạc)', enTitle: 'Tests on Completion (Silver)',
    viBody: 'Nhà thầu EPC báo trước 21 ngày về ngày sẵn sàng chạy thử hoàn thành nhà máy/công trình.',
    enBody: 'EPC Contractor gives 21 days’ Notice of readiness for Tests on Completion.',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Thông báo trước 21 ngày sẵn sàng chạy thử', en: '21 days’ Notice of readiness' }
    ], eq99: ['9.1']
  },
  {
    book: 'sil', ed: '17', clause: 10, id: '10.1',
    viTitle: 'Bàn giao Công trình (Sách Bạc)', enTitle: 'Taking Over the Works (Silver)',
    viBody: 'Nhà thầu nộp đơn trước 14 ngày; Chủ đầu tư cấp Chứng chỉ Bàn giao hoặc từ chối trong 28 ngày.',
    enBody: 'Contractor applies within 14 days before readiness; Employer issues TOC or rejects within 28 days.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Chủ đầu tư cấp Chứng chỉ Bàn giao trong 28 ngày', en: 'Employer issues TOC within 28 days' }
    ], eq99: ['10.1']
  },
  {
    book: 'sil', ed: '17', clause: 11, id: '11.9',
    viTitle: 'Chứng chỉ Thực hiện (Sách Bạc)', enTitle: 'Performance Certificate (Silver)',
    viBody: 'Chủ đầu tư cấp Chứng chỉ Thực hiện trong 28 ngày sau khi hết hạn DNP cuối cùng.',
    enBody: 'Employer issues Performance Certificate within 28 days after latest DNP expiry.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Cấp Chứng chỉ Thực hiện sau hết hạn DNP', en: 'Issue Performance Certificate within 28 days' }
    ], eq99: ['11.9']
  },
  {
    book: 'sil', ed: '17', clause: 12, id: '12.1',
    viTitle: 'Kiểm định sau Hoàn thành (Sách Bạc)', enTitle: 'Tests after Completion (Silver)',
    viBody: 'Kiểm định hiệu năng vận hành thực tế sau khi bàn giao (tương tự Sách Vàng, khác với Đo lường của Sách Đỏ).',
    enBody: 'Performance tests after Taking Over (like Yellow Book, unlike Red Book Measurement).',
    timelimits: [], eq99: ['12.1']
  },
  {
    book: 'sil', ed: '17', clause: 13, id: '13.3',
    viTitle: 'Quy trình Thay đổi (Sách Bạc)', enTitle: 'Variation Procedure (Silver)',
    viBody: 'Chủ đầu tư chỉ thị Thay đổi đối với Yêu cầu của Chủ đầu tư; Nhà thầu nộp đề xuất điều chỉnh giá trọn gói và tiến độ trong 28 ngày.',
    enBody: 'Employer instructs Variation to Employer’s Requirements; Contractor submits lump-sum proposal within 28 days.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp đề xuất chi tiết Thay đổi trong 28 ngày', en: 'Submit Variation proposal within 28 days' }
    ], eq99: ['13.3']
  },
  {
    book: 'sil', ed: '17', clause: 14, id: '14.7',
    viTitle: 'Thanh toán (Sách Bạc)', enTitle: 'Payment (Silver)',
    viBody: 'Chủ đầu tư thanh toán trong vòng 56 ngày kể từ khi nhận được Hồ sơ thanh toán của Nhà thầu.',
    enBody: 'Employer pays within 56 days after receiving Contractor’s Statement.',
    timelimits: [
      { badge: '56 ngày', badgeEn: '56 days', vi: 'Thanh toán trong 56 ngày', en: 'Pay within 56 days' }
    ], eq99: ['14.7']
  },
  {
    book: 'sil', ed: '17', clause: 15, id: '15.2',
    viTitle: 'Chấm dứt do Lỗi Nhà thầu (Sách Bạc)', enTitle: 'Termination for Contractor Default (Silver)',
    viBody: 'Thông báo trước 14 ngày về ý định chấm dứt hợp đồng.',
    enBody: '14 days’ Notice of intention to terminate.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày', en: '14 days’ Notice' }
    ], eq99: ['15.2']
  },
  {
    book: 'sil', ed: '17', clause: 16, id: '16.2',
    viTitle: 'Chấm dứt bởi Nhà thầu (Sách Bạc)', enTitle: 'Termination by Contractor (Silver)',
    viBody: 'Nhà thầu gửi Thông báo trước 14 ngày để chấm dứt khi Chủ đầu tư không thanh toán.',
    enBody: 'Contractor gives 14 days’ Notice to terminate for non-payment.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trước 14 ngày', en: '14 days’ Notice' }
    ], eq99: ['16.2']
  },
  {
    book: 'sil', ed: '17', clause: 17, id: '17.1',
    viTitle: 'Trách nhiệm Bảo quản (Sách Bạc)', enTitle: 'Care of the Works (Silver)',
    viBody: 'Nhà thầu EPC chịu trách nhiệm bảo quản công trình đến ngày cấp Chứng chỉ Bàn giao.',
    enBody: 'EPC Contractor cares for Works until Taking-Over Certificate.',
    timelimits: [], eq99: ['17.2']
  },
  {
    book: 'sil', ed: '17', clause: 18, id: '18.2',
    viTitle: 'Thông báo Sự kiện Ngoại lệ (Sách Bạc)', enTitle: 'Notice of Exceptional Event (Silver)',
    viBody: 'Thông báo trong vòng 14 ngày kể từ khi biết Sự kiện Ngoại lệ.',
    enBody: 'Notice within 14 days of awareness.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo trong 14 ngày', en: 'Notice within 14 days' }
    ], eq99: ['19.2']
  },
  {
    book: 'sil', ed: '17', clause: 19, id: '19.1',
    viTitle: 'Yêu cầu chung về Bảo hiểm (Sách Bạc)', enTitle: 'Insurance (Silver)',
    viBody: 'Nhà thầu EPC mua bảo hiểm toàn bộ công trình, thiết bị và trách nhiệm nghề nghiệp thiết kế.',
    enBody: 'EPC Contractor provides Works, Equipment, and Professional Indemnity insurance.',
    timelimits: [], eq99: ['18.1']
  },

  // ================= RED BOOK 1999 (Key Clauses 1–20 for 1999 vs 2017 Comparison) =================
  {
    book: 'red', ed: '99', clause: 1, id: '1.1',
    viTitle: 'Định nghĩa (1999)', enTitle: 'Definitions (1999)',
    viBody: 'Bản 1999 có danh mục định nghĩa ngắn gọn hơn bản 2017, chưa tách rõ "Notice" khỏi các trao đổi thông thường và sử dụng thuật ngữ "DAB" (Dispute Adjudication Board) thay vì "DAAB".',
    enBody: '1999 edition has fewer definitions than 2017, does not strictly distinguish "Notice" from other communications, and uses "DAB" instead of "DAAB".',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 1, id: '1.9',
    viTitle: 'Chậm trễ Bản vẽ hoặc Chỉ dẫn (1999)', enTitle: 'Delayed Drawings or Instructions (1999)',
    viBody: 'Nhà thầu thông báo cho Nhà tư vấn về bản vẽ/chỉ dẫn cần cấp; nếu chậm gây thiệt hại, khiếu nại theo Điều khoản 20.1 (bản 1999).',
    enBody: 'Contractor notifies Engineer of missing drawings/instructions; delay entitles claim under Sub-Clause 20.1 (1999).',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 4, id: '4.2',
    viTitle: 'Bảo lãnh Thực hiện Hợp đồng (1999)', enTitle: 'Performance Security (1999)',
    viBody: 'Nộp trong 28 ngày sau Thư Chấp thuận; Chủ đầu tư chỉ được đòi tiền bảo lãnh trong 4 trường hợp liệt kê cụ thể và hoàn trả trong 21 ngày sau Chứng chỉ Thực hiện.',
    enBody: 'Deliver within 28 days of LOA; Employer may call security only under 4 specified grounds and returns it within 21 days after Performance Certificate.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp Bảo lãnh sau Thư Chấp thuận', en: 'Deliver within 28 days of LOA' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 4, id: '4.12',
    viTitle: 'Điều kiện Vật chất Không lường trước (1999)', enTitle: 'Unforeseeable Physical Conditions (1999)',
    viBody: 'Thông báo ngay khi gặp điều kiện địa chất bất thường và khiếu nại EOT/Chi phí theo 20.1 (1999) — lưu ý bản 1999 chỉ bồi hoàn Cost (không có Profit như một số trường hợp 2017).',
    enBody: 'Prompt Notice of unforeseeable physical conditions; claim EOT and Cost (without Profit) under Sub-Clause 20.1 (1999).',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 8, id: '8.3',
    viTitle: 'Tiến độ Thi công (1999)', enTitle: 'Programme (1999)',
    viBody: 'Nộp tiến độ trong 28 ngày kể từ Ngày Khởi công; Nhà tư vấn có 21 ngày để phản hồi. Bản 1999 yêu cầu ít chi tiết phần mềm/đường găng hơn bản 2017.',
    enBody: 'Submit Programme within 28 days of Commencement; Engineer has 21 days to comment. Less prescriptive than 2017.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nộp tiến độ trong 28 ngày', en: 'Submit within 28 days' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 8, id: '8.4',
    viTitle: 'Gia hạn Thời gian Hoàn thành (1999)', enTitle: 'Extension of Time for Completion (1999)',
    viBody: 'Tương đương Điều khoản 8.5 của bản 2017; Nhà thầu được gia hạn EOT theo thủ tục 20.1.',
    enBody: 'Equivalent to 2017 Sub-Clause 8.5; Contractor claims EOT under Sub-Clause 20.1.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 10, id: '10.1',
    viTitle: 'Bàn giao Công trình (1999)', enTitle: 'Taking Over the Works (1999)',
    viBody: 'Nộp đơn đề nghị trước tối đa 14 ngày; Nhà tư vấn cấp Chứng chỉ Bàn giao hoặc từ chối trong 28 ngày (nếu im lặng quá 28 ngày được coi là đã bàn giao).',
    enBody: 'Apply not more than 14 days before readiness; Engineer issues TOC or rejects within 28 days (deemed issued if silent).',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Cấp Chứng chỉ Bàn giao trong 28 ngày', en: 'Issue TOC within 28 days' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 13, id: '13.3',
    viTitle: 'Quy trình Thay đổi (1999)', enTitle: 'Variation Procedure (1999)',
    viBody: 'Nhà tư vấn yêu cầu đề xuất; Nhà thầu phản hồi càng sớm càng tốt (bản 1999 chưa ấn định mốc 28 ngày rõ như bản 2017).',
    enBody: 'Engineer requests proposal; Contractor responds as soon as practicable (no fixed 28-day period unlike 2017).',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 14, id: '14.6',
    viTitle: 'Cấp Chứng chỉ Thanh toán Tạm (1999)', enTitle: 'Issue of IPC (1999)',
    viBody: 'Nhà tư vấn phát hành IPC trong 28 ngày kể từ khi nhận Hồ sơ thanh toán của Nhà thầu.',
    enBody: 'Engineer issues IPC within 28 days of receiving Statement.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Phát hành IPC trong 28 ngày', en: 'Issue IPC within 28 days' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 14, id: '14.7',
    viTitle: 'Thanh toán (1999)', enTitle: 'Payment (1999)',
    viBody: 'Chủ đầu tư thanh toán IPC trong vòng 56 ngày kể từ ngày Nhà tư vấn nhận Hồ sơ thanh toán.',
    enBody: 'Employer pays IPC within 56 days after Engineer receives Statement.',
    timelimits: [
      { badge: '56 ngày', badgeEn: '56 days', vi: 'Thanh toán IPC trong 56 ngày', en: 'Pay IPC within 56 days' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 19, id: '19.2',
    viTitle: 'Thông báo Bất khả kháng (1999)', enTitle: 'Notice of Force Majeure (1999)',
    viBody: 'Bản 1999 dùng thuật ngữ "Force Majeure" tại Điều khoản 19 (thông báo trong 14 ngày); bản 2017 đổi thành "Exceptional Events" tại Điều khoản 18.',
    enBody: '1999 uses "Force Majeure" in Clause 19 (14-day Notice); 2017 renames it "Exceptional Events" in Clause 18.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Thông báo Bất khả kháng trong 14 ngày', en: 'Notice within 14 days' }
    ], eq99: []
  },
  {
    book: 'red', ed: '99', clause: 20, id: '20.4',
    viTitle: 'Quyết định của Ban Xử lý Tranh chấp DAB (1999)', enTitle: "Obtaining DAB's Decision (1999)",
    viBody: 'Tương đương Điều khoản 21.4 (DAAB) của bản 2017: DAB ra quyết định trong 84 ngày; bên không đồng ý gửi NOD trong 28 ngày.',
    enBody: 'Equivalent to 2017 Sub-Clause 21.4 (DAAB): DAB decides within 84 days; dissatisfied Party gives NOD within 28 days.',
    timelimits: [
      { badge: '84 ngày', badgeEn: '84 days', vi: 'DAB ra quyết định trong 84 ngày', en: 'DAB decision within 84 days' }
    ], eq99: []
  }
];
