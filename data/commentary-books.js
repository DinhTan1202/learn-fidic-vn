// Verified Advisory & Commentary insights extracted from Source/3- Cac sach ve Hop dong FIDIC:
// 1. Christopher R. Seppälä, The FIDIC Red Book Contract: An International Clause-by-Clause Commentary (2023)
// 2. William Godwin, The 2017 FIDIC Contracts (Wiley, 2020)
// 3. Leo Grutters, ICE FIDIC Users' Guide (3rd Edition, 2014)

export const ADVISORY_BOOKS = [
  {
    id: 'commentary-2023',
    badge: 'Seppälä · 2023',
    title: 'The FIDIC Red Book Contract: An International Clause-by-Clause Commentary (Christopher R. Seppälä, 2023)',
    vi: 'Chuyên khảo giải thích từng điều khoản dưới góc nhìn Luật Quốc tế (đối chiếu Common Law vs Civil Law và Bộ nguyên tắc UNIDROIT 2016): Thiện chí (Good Faith), Thẩm quyền Nhà tư vấn, LDs vs Phạt, Hardship, Lãi gộp 14.8 và thực thi quyết định DAAB.',
    en: 'Clause-by-clause international commentary comparing Common Law, Civil Law, and UNIDROIT Principles (2016) across good faith, Engineer neutrality, LDs vs penalties, hardship, 14.8 interest, and DAAB enforcement.'
  },
  {
    id: 'godwin-2020',
    badge: 'Godwin · Wiley 2020',
    title: 'The 2017 FIDIC Contracts (William Godwin, Wiley 2020)',
    vi: 'Phân tích toàn diện bộ sách FIDIC 2017: nhận diện các rủi ro mới đối với Nhà thầu và Chủ đầu tư (Mục 1.4), cơ chế hành động trung lập ở 3.7, bảo lãnh 17.4 về fitness for purpose, cắt giảm khối lượng 13.1/13.3 và chấm dứt 15.5/15.6.',
    en: 'Comprehensive analysis of the 2017 suite: new Contractor/Employer risks (Sec. 1.4), Engineer neutrality (3.7), 17.4 fitness-for-purpose indemnity, omission rules (13.1/13.3), and convenience termination (15.5/15.6).'
  },
  {
    id: 'ice-grutters-2014',
    badge: 'ICE Guide · Grutters',
    title: "ICE FIDIC Users' Guide: A Practical Guide (3rd Ed., Leo Grutters)",
    vi: 'Cẩm nang thực hành quản lý hợp đồng tại công trường: kỷ luật gửi Notice bằng văn bản (1.3), lưu giữ hồ sơ hiện trường đồng thời (20.2.3 & 6.10), quản lý tiến độ đường găng (8.3) và thẩm định gia hạn thời gian EOT.',
    en: 'Practical Site contract administration guide covering written Notice discipline (1.3), contemporary records (20.2.3 & 6.10), critical-path programme control (8.3), and EOT evaluation.'
  }
];

export const COMMENTARY_NOTES = {
  '1.1': {
    src: 'Godwin 2020 (Sec. 1.5.1)',
    vi: 'Lưu ý giá trị mặc định quan trọng: "Cost Plus Profit" (1.1.20) mặc định cộng 5% lợi nhuận nếu Dữ liệu Hợp đồng không ghi khác; "Defects Notification Period" (1.1.27) mặc định 1 năm nếu bỏ trống.',
    en: 'Default traps: "Cost Plus Profit" (1.1.20) defaults to 5% profit and "DNP" (1.1.27) defaults to 1 year if left blank in Contract Data.'
  },
  '1.3': {
    src: 'Godwin 2020 & ICE Guide',
    vi: 'Cảnh báo thực hành: Rất nhiều khiếu nại bị bác chỉ vì chỉ gửi email thông thường hoặc ghi trong biên bản họp tuần mà không đáp ứng hình thức "Notice" bằng văn bản theo Điều khoản 1.3.',
    en: 'Practical warning: Claims often fail when sent only via casual email or meeting minutes without formal written "Notice" compliance under 1.3.'
  },
  '1.9': {
    src: 'Godwin 2020 (Sec. 1.3.2 & 2.5)',
    vi: 'Trong Sách Vàng, Nhà thầu được khiếu nại sai sót trong Yêu cầu Chủ đầu tư nếu một nhà thầu có kinh nghiệm không thể phát hiện khi kiểm tra hợp lý; ngược lại trong Sách Bạc (5.1), Nhà thầu chịu rủi ro sai sót trừ 4 ngoại lệ (a)–(d).',
    en: 'In Yellow Book, Contractor may claim for errors in Employer’s Requirements not discoverable by due care; in Silver Book (5.1), Contractor bears error risk except for items (a)–(d).'
  },
  '1.15': {
    src: 'Godwin 2020 (Sec. 1.4.1)',
    vi: 'Bản 2017 bổ sung "gross negligence" (lỗi bất cẩn nghiêm trọng) vào danh sách ngoại lệ không được giới hạn trách nhiệm (bên cạnh gian lận, cố ý vi phạm). Quyền sở hữu trí tuệ (17.3) và LDs (8.8) nằm ngoài miễn trừ thiệt hại gián tiếp.',
    en: '2017 adds "gross negligence" to exceptions from the liability cap (alongside fraud and deliberate default). IP indemnities (17.3) and Delay Damages (8.8) sit outside consequential loss exclusion.'
  },
  '1.16': {
    src: 'Seppälä 2023 (Sec. 4.3.5)',
    vi: 'Tại nhiều nước Civil Law, chấm dứt hợp đồng truyền thống đòi hỏi phán quyết của Tòa án. Điều khoản 1.16 (mới 2017) cố gắng cho phép chấm dứt theo thông báo hợp đồng mà không cần ra Tòa, nhưng vẫn phụ thuộc quy định bắt buộc của luật quốc gia.',
    en: 'Some Civil Law codes require court action to terminate. New 1.16 states contractual termination needs no court action, subject to mandatory governing law.'
  },
  '2.4': {
    src: 'Godwin 2020 (Sec. 3.1)',
    vi: 'Bản 2017 mở rộng quyền Nhà thầu được yêu cầu Chủ đầu tư chứng minh thu xếp tài chính khi có Thay đổi vượt ngưỡng (>10% một lần hoặc >30% lũy kế) hoặc khi chậm thanh toán.',
    en: '2017 expands Contractor’s right to request financial evidence upon single Variations >10% or cumulative Variations >30%.'
  },
  '3.7': {
    src: 'Godwin 2020 (Sec. 3.3)',
    vi: 'William Godwin nhấn mạnh: Cụm từ "act neutrally" ở 3.7.2 không biến Nhà tư vấn thành trọng tài, nhưng buộc Nhà tư vấn phải đánh giá khách quan, độc lập với chỉ đạo của Chủ đầu tư.',
    en: 'Godwin notes: "Act neutrally" under 3.7.2 does not make the Engineer an arbitrator, but requires objective assessment independent of Employer instructions.'
  },
  '4.1': {
    src: 'Godwin 2020 (Sec. 1.3 & 4.1)',
    vi: 'Nghĩa vụ "phù hợp với mục đích sử dụng" (fitness for purpose) trong bản 2017 neo vào Yêu cầu của Chủ đầu tư (hoặc mục đích thông thường nếu không mô tả rõ) và áp dụng cho phần việc Nhà thầu thiết kế trong Sách Đỏ.',
    en: 'Fitness for purpose in 2017 is anchored to Employer’s Requirements (or ordinary purposes by default), applying to any Contractor-designed part in Red Book.'
  },
  '4.2': {
    src: 'Godwin 2020 (Sec. 4.2)',
    vi: 'Nếu Nhà thầu chậm gia hạn Bảo lãnh Thực hiện khi Thời gian Hoàn thành được kéo dài, Chủ đầu tư có quyền yêu cầu thanh toán toàn bộ giá trị bảo lãnh trong vòng 28 ngày trước khi hết hạn.',
    en: 'If Contractor fails to extend Performance Security 28 days before expiry when works are incomplete, Employer may claim the full amount.'
  },
  '4.5': {
    src: 'Godwin 2020 (Sec. 1.4.1)',
    vi: 'Điểm mới Red Book 2017: Nếu Đặc tính kỹ thuật yêu cầu đào tạo nhân sự vận hành của Chủ đầu tư, Nhà thầu phải thực hiện và chịu trách nhiệm theo 11.2(c) nếu vận hành sai do thiếu đào tạo/tài liệu O&M/hoàn công.',
    en: 'New in 2017 Red Book: Contractor must train Employer staff where specified and bears 11.2(c) defect liability for improper operation caused by missing training/O&M/as-built records.'
  },
  '4.12': {
    src: 'Seppälä 2023 & ICE Guide',
    vi: 'Kinh nghiệm từ ICE Guide: Khi gặp điều kiện vật chất bất thường, Nhà thầu phải mời Nhà tư vấn kiểm tra hiện trường, đo đạc và chụp ảnh trước khi làm xáo trộn hiện trạng.',
    en: 'ICE Guide advice: Upon encountering adverse physical conditions, invite the Engineer to inspect and record measurements before disturbing site evidence.'
  },
  '4.15': {
    src: 'Godwin 2020 (Sec. 1.4.2)',
    vi: 'Cải tiến có lợi cho Nhà thầu năm 2017: Nếu tuyến đường tiếp cận bị thay đổi bởi bên thứ ba (không chỉ bởi Chủ đầu tư) sau Ngày Cơ sở gây chậm/tăng chi phí, Nhà thầu được quyền khiếu nại EOT/Cost.',
    en: '2017 Employer risk addition: If an access route is altered by a third party (as well as Employer) after Base Date, Contractor may claim EOT and Cost.'
  },
  '8.3': {
    src: 'ICE Guide (Grutters) & Godwin',
    vi: 'Bảng tiến độ (8.3) dù không phải là "tài liệu hợp đồng" nhưng là mốc chuẩn (baseline) bắt buộc để phân tích đường găng EOT; mọi file tiến độ gốc hàng tháng phải được lưu giữ nguyên vẹn.',
    en: 'Though not a Contract document, the Programme is the essential baseline for critical-path EOT analysis; always preserve monthly native schedule files.'
  },
  '8.5': {
    src: 'Seppälä 2023 & Godwin 2020',
    vi: 'Khoản cuối Điều khoản 8.5 yêu cầu các Bên tự quy định quy tắc Chậm trễ Đồng thời (Concurrent Delay) trong Điều kiện Riêng; nếu không quy định, giải quyết theo nguyên tắc hợp lý (Common Law thường cho EOT, không cho Cost; Civil Law có thể phân chia theo tỷ lệ lỗi).',
    en: 'Sub-Clause 8.5 invites Special Provisions on Concurrent Delay; absent provisions, Common Law tends to grant time without prolongation cost while Civil Law may apportion.'
  },
  '8.6': {
    src: 'Godwin 2020 (Sec. 1.4.2)',
    vi: 'Mở rộng quan trọng bản 2017: Cho phép Nhà thầu khiếu nại EOT đối với chậm trễ do các đơn vị hạ tầng tư nhân (private utilities — điện, nước, viễn thông tư nhân hóa), không chỉ giới hạn ở cơ quan công quyền nhà nước như bản 1999.',
    en: '2017 expands Sub-Clause 8.6 to cover delays caused by private utility entities, not only public authorities as in 1999.'
  },
  '8.8': {
    src: 'Seppälä 2023 (Sec. 4.4.5) & Godwin',
    vi: 'Khác biệt Common Law vs Civil Law: Tòa án Common Law không thể tự ý tăng/giảm mức Delay Damages đã thỏa thuận; ngược lại, luật Civil Law cho phép tòa/trọng tài giảm mức phạt nếu quá cao so với thiệt hại thực tế. Bản 2017 còn cho Chủ đầu tư quyền chấm dứt theo 15.2.1(c) nếu LDs chạm trần.',
    en: 'Common Law cannot adjust pre-agreed LDs, whereas Civil Law courts may reduce excessive sums. 2017 adds Employer right to terminate under 15.2.1(c) once LDs hit the cap.'
  },
  '10.2': {
    src: 'Godwin 2020 (Sec. 8.2)',
    vi: 'Cảnh báo cho Chủ đầu tư: Nếu đưa một phần công trình vào sử dụng trước khi cấp Chứng chỉ Bàn giao mà không thỏa thuận trước, phần đó mặc nhiên coi là đã bàn giao và làm giảm mức LDs tương ứng.',
    en: 'Employer warning: Using any part of the Permanent Works before Taking Over deems that part taken over and reduces Delay Damages proportionally.'
  },
  '13.1': {
    src: 'Godwin 2020 (Sec. 1.4.2)',
    vi: 'Bản 2017 cho phép Chủ đầu tư cắt giảm khối lượng (omission) để tự làm hoặc giao cho nhà thầu khác CHỈ KHI Nhà thầu đồng ý; khi đó Nhà thầu được tính cả lợi nhuận bị mất trong đề xuất giá 13.3.1(c).',
    en: '2017 allows omitting work for Employer/others to execute ONLY with Contractor’s agreement, entitling Contractor to claim loss of profit under 13.3.1(c).'
  },
  '13.3': {
    src: 'Godwin 2020 (Sec. 11.3)',
    vi: 'Godwin phân tích: Việc 2017 định giá Thay đổi trực tiếp theo 3.7 mà không cần Nhà thầu gửi Thông báo 20.2 giúp giảm rủi ro mất quyền do quên thủ tục hành chính đối với các chỉ thị Thay đổi.',
    en: 'Valuing Variations directly under 3.7 without a 20.2 Notice protects the Contractor from time-bar risks on instructed Variations.'
  },
  '13.6': {
    src: 'Godwin 2020 (Sec. 1.4.2)',
    vi: 'Bản 2017 mở rộng điều chỉnh giá/tiến độ khi thay đổi pháp luật (13.6) bao gồm cả sự thay đổi hoặc yêu cầu mới về giấy phép, phê duyệt, cấp phép xây dựng (permits, permissions, licences, approvals).',
    en: '2017 expands Change in Laws (13.6) to include changes in or new requirements for permits, permissions, licences, and approvals.'
  },
  '14.8': {
    src: 'Seppälä 2023 (Sec. 4.5.1)',
    vi: 'Seppälä lưu ý: Lãi chậm trả tại 14.8 được tính gộp hàng tháng (compounded monthly) tương đồng mức lãi suất UNIDROIT 7.4.9, nhưng cần kiểm tra xem luật áp dụng Civil Law tại nước sở tại có cấm tính lãi chồng lãi hay không.',
    en: 'Seppälä notes: 14.8 monthly compounding aligns with UNIDROIT 7.4.9 rate benchmarks, though some Civil Law statutes restrict compound interest.'
  },
  '15.2': {
    src: 'Godwin 2020 & Seppälä 2023',
    vi: 'Chấm dứt hợp đồng sai thủ tục (thiếu Notice to Correct 15.1 hoặc thiếu 14 ngày báo trước) có thể bị coi là chấm dứt trái pháp luật. Lưu ý tại 15.2.1(g): theo một số luật Civil Law, quản tài viên phá sản vẫn có quyền yêu cầu tiếp tục hợp đồng.',
    en: 'Defective termination risks repudiatory breach. Note under 15.2.1(g): some Civil Law insolvency trustees may compel contract continuation despite bankruptcy.'
  },
  '15.5': {
    src: 'Godwin 2020 (Sec. 1.4.2)',
    vi: 'Sửa đổi lớn so với bản 1999: Khi Chủ đầu tư chấm dứt vì lợi ích riêng (15.5), Nhà thầu được bồi thường cả khoản lợi nhuận bị mất và thiệt hại phát sinh theo Điều khoản 15.6.',
    en: 'Major 2017 reform: Upon Termination for Convenience (15.5), Contractor is now entitled to loss of profit and other loss/damage under 15.6.'
  },
  '17.4': {
    src: 'Godwin 2020 (Sec. 1.4.1)',
    vi: 'Trong Sách Vàng/Bạc (và phần Nhà thầu thiết kế ở Sách Đỏ), Điều khoản 17.4 tạo nghĩa vụ bồi thường mới nếu lỗi thiết kế khiến công trình không đạt mục đích sử dụng — nhưng đã được đưa vào trong giới hạn trách nhiệm chung 1.15.',
    en: 'New 2017 indemnity for design defects failing fitness for purpose (17.4), brought within the overall liability cap and consequential loss exclusion under 1.15.'
  },
  '20.2': {
    src: 'Seppälä 2023 & Godwin 2020',
    vi: 'Seppälä nhấn mạnh 7 phần của 20.2 (20.2.1–20.2.7): Tại hệ thống Civil Law, nguyên tắc thiện chí (Good Faith) đôi khi hạn chế việc lạm dụng bẫy time-bar 28 ngày nếu Chủ đầu tư đã biết rõ sự việc, nhưng Nhà thầu tuyệt đối không được chủ quan bỏ qua mốc 28 ngày.',
    en: 'Seppälä details 20.2.1–20.2.7: Civil Law good faith may temper abusive reliance on the 28-day time-bar where Employer had actual knowledge, yet Contractors must strictly comply.'
  },
  '21.4': {
    src: 'Godwin 2020 & Seppälä 2023',
    vi: 'Quyết định của DAAB dù mới có tính ràng buộc tạm thời (khi đã gửi NOD) vẫn có thể được cưỡng chế thi hành ngay qua phán quyết trọng tài từng phần (theo tiền lệ án lệ Persero).',
    en: 'Binding (though non-final) DAAB decisions after a Notice of Dissatisfaction can be summarily enforced via a partial arbitral award.'
  }
};

export const COMMON_CIVIL_LAW_MATRIX = [
  {
    topicVi: '1. Nguyên tắc Thiện chí (Good Faith)',
    topicEn: 'Duty of Good Faith (Sec. 4.3.1)',
    common: 'Luật Anh (Common Law) truyền thống không công nhận nghĩa vụ thiện chí chung (general duty of good faith) ngoài điều khoản hợp đồng.',
    civil: 'Luật Civil Law (Pháp, Đức, BLDS Việt Nam) bắt buộc các bên thực hiện hợp đồng thiện chí, trung thực và hợp tác (cơ sở xem xét lạm dụng time-bar 20.2).'
  },
  {
    topicVi: '2. Vai trò Nhà tư vấn (3.7)',
    topicEn: 'Engineer Role (Sec. 4.4.1)',
    common: 'Truyền thống FIDIC/Common Law coi Engineer có tư cách độc lập bán phần (act neutrally ở 3.7) dù được Chủ đầu tư trả lương.',
    civil: 'Tại nhiều nước Civil Law (và thực tế dự án công VN), Tư vấn giám sát thường bị xem là đại diện thuần túy của Chủ đầu tư, dễ gây xung đột với 3.7.'
  },
  {
    topicVi: '3. Tiền Bồi thường Chậm trễ (8.8)',
    topicEn: 'Liquidated Damages vs Penalties (Sec. 4.4.5)',
    common: 'Phân biệt rạch ròi: LDs hợp pháp được thực thi đúng số thỏa thuận; "Penalty" (tiền phạt răn đe) vô hiệu. Tòa không tự ý tăng/giảm mức LDs.',
    civil: 'Chấp nhận điều khoản phạt hợp đồng, nhưng Tòa án/Trọng tài có quyền giảm mức phạt nếu quá cao so với thiệt hại thực tế (VN Luật XD giới hạn 12% vốn NN).'
  },
  {
    topicVi: '4. Chấm dứt Hợp đồng (1.16 / 15.2)',
    topicEn: 'Termination Without Court Action (Sec. 4.3.5)',
    common: 'Cho phép đơn phương gửi thông báo chấm dứt theo hợp đồng mà không cần phán quyết trước của Tòa án.',
    civil: 'Một số luật Civil Law yêu cầu có phán quyết Tòa án hoặc thông báo vi phạm trước (mise en demeure). Bản 2017 thêm 1.16 để giảm xung đột này.'
  },
  {
    topicVi: '5. Hoàn cảnh Thay đổi Cơ bản (Hardship)',
    topicEn: 'Force Majeure & Hardship (Sec. 4.4.7)',
    common: 'Common Law không có học thuyết Hardship (chỉ có Frustration rất hẹp khi hợp đồng bất khả thi tuyệt đối).',
    civil: 'Nhiều bộ luật Civil Law (gồm Điều 420 BLDS Việt Nam) có quy định bắt buộc về thực hiện hợp đồng khi hoàn cảnh thay đổi cơ bản.'
  },
  {
    topicVi: '6. Lãi chậm trả gộp hàng tháng (14.8)',
    topicEn: 'Compound Interest (Sec. 4.5.1)',
    common: 'Chấp nhận thỏa thuận tính lãi suất gộp hàng tháng (compounded monthly) theo Điều khoản 14.8.',
    civil: 'Một số hệ thống Civil Law hạn chế hoặc cấm tính lãi chồng lãi (anatocism) trừ trường hợp ngoại lệ luật định.'
  },
  {
    topicVi: '7. Thời hiệu Khởi kiện vs Time-Bar 28 ngày',
    topicEn: 'Limitation Periods vs 20.2 (Sec. 4.5.3)',
    common: 'Phân biệt thời hạn thông báo hợp đồng (28 ngày ở 20.2) với thời hiệu khởi kiện luật định; time-bar được thực thi nghiêm ngặt.',
    civil: 'Một số luật Civil Law coi thời hiệu khởi kiện là quy phạm bắt buộc không thể rút ngắn bằng hợp đồng — dễ phát sinh tranh luận quanh 20.2.'
  }
];

export const CONTRACT_PITFALLS = [
  {
    id: 'pit-1',
    side: 'contractor',
    clause: '20.2',
    viTitle: 'Mất quyền Khiếu nại vì quên Notice 28 ngày hoặc gửi sai hình thức 1.3',
    enTitle: 'Time-barred for missing 28-day Notice or informal 1.3 communication',
    vi: 'Gửi email trao đổi thông thường hoặc ghi trong biên bản họp thay vì gửi văn bản ghi rõ là "Notice" theo 1.3 & 20.2.1 sẽ khiến Nhà thầu mất toàn bộ quyền EOT/Chi phí.',
    en: 'Sending casual emails or relying on meeting minutes instead of a formal "Notice" under 1.3 & 20.2.1 triggers the 28-day time-bar.'
  },
  {
    id: 'pit-2',
    side: 'contractor',
    clause: '8.8',
    viTitle: 'Nguy cơ bị Chấm dứt Hợp đồng khi LDs chạm trần (Điểm mới 2017)',
    enTitle: 'New 2017 Termination risk when Delay Damages hit the cap (15.2.1(c))',
    vi: 'Khác bản 1999, bản 2017 (Điều khoản 15.2.1(c)) cho phép Chủ đầu tư chấm dứt hợp đồng nếu tổng tiền chậm trễ LDs của Nhà thầu vượt mức trần tối đa.',
    en: 'Unlike 1999, 2017 Sub-Clause 15.2.1(c) grants the Employer a termination right once maximum Delay Damages are exceeded.'
  },
  {
    id: 'pit-3',
    side: 'contractor',
    clause: '1.15',
    viTitle: 'Lỗi "Bất cẩn nghiêm trọng" (Gross Negligence) không được giới hạn trách nhiệm',
    enTitle: 'Gross Negligence excluded from Liability Cap (1.15)',
    vi: 'Bản 2017 bổ sung "gross negligence" vào nhóm ngoại lệ ở 1.15 — nếu bị chứng minh bất cẩn nghiêm trọng, Nhà thầu phải bồi thường không giới hạn.',
    en: '2017 adds gross negligence alongside fraud/deliberate default in 1.15, exposing the Contractor to uncapped liability.'
  },
  {
    id: 'pit-4',
    side: 'contractor',
    clause: '4.5',
    viTitle: 'Trách nhiệm sửa chữa do thiếu Đào tạo & Hồ sơ Hoàn công (11.2(c))',
    enTitle: 'Liability for improper operation due to missing Training/O&M (4.5 & 11.2(c))',
    vi: 'Trong Red Book 2017, nếu không hoàn tất đào tạo (4.5) hoặc thiếu tài liệu O&M/As-built khiến Chủ đầu tư vận hành hỏng, Nhà thầu phải sửa bằng chi phí của mình.',
    en: 'Under 2017 Red Book, failure to provide specified training (4.5) or O&M/as-built manuals shifts operational damage liability to the Contractor.'
  },
  {
    id: 'pit-5',
    side: 'employer',
    clause: '20.2',
    viTitle: 'Chủ đầu tư / NTV quên phản hồi trễ trong 14 ngày (20.2.2)',
    enTitle: 'Engineer misses 14-day window to object to late Notice (20.2.2)',
    vi: 'Nếu Nhà thầu nộp Thông báo sau 28 ngày mà Nhà tư vấn quên gửi Thông báo phản đối trễ trong vòng 14 ngày, Thông báo muộn mặc nhiên trở thành HỢP LỆ.',
    en: 'If the Engineer fails to give Notice within 14 days that a 20.2 Notice was late, the late Notice is automatically deemed valid.'
  },
  {
    id: 'pit-6',
    side: 'employer',
    clause: '10.2',
    viTitle: 'Tự ý sử dụng công trình trước khi cấp Chứng chỉ Bàn giao',
    enTitle: 'Using part of the Works before Taking-Over Certificate',
    vi: 'Chủ đầu tư đưa vào sử dụng một phần công trình khi chưa bàn giao sẽ khiến phần đó mặc nhiên coi là đã bàn giao (10.2), bắt đầu tính DNP và giảm LDs.',
    en: 'Employer use prior to Taking Over deems that part taken over under 10.2, starting DNP and reducing Delay Damages.'
  },
  {
    id: 'pit-7',
    side: 'employer',
    clause: '15.5',
    viTitle: 'Chấm dứt vì lợi ích riêng phải bồi thường Lợi nhuận bị mất (15.5 & 15.6)',
    enTitle: 'Convenience termination triggers Loss of Profit liability (15.5 / 15.6)',
    vi: 'Chủ đầu tư không còn được chấm dứt hợp đồng vì lợi ích riêng mà chỉ trả phần đã làm như bản 1999; bản 2017 buộc bồi thường cả lợi nhuận bị mất.',
    en: 'Unlike 1999, 2017 Termination for Convenience entitles the Contractor to loss of profit under 15.6.'
  },
  {
    id: 'pit-8',
    side: 'employer',
    clause: '13.1',
    viTitle: 'Không được tự ý cắt khối lượng giao cho nhà thầu khác',
    enTitle: 'Cannot omit work for others without Contractor consent (13.1)',
    vi: 'Chủ đầu tư chỉ được cắt giảm hạng mục để giao người khác khi Nhà thầu đồng ý, và phải bồi thường lợi nhuận bị mất theo 13.3.1(c).',
    en: 'Omission of work for execution by others requires Contractor consent and triggers loss-of-profit compensation under 13.3.1(c).'
  }
];

export const CONTEMPORARY_RECORDS_GUIDE = [
  { id: 'r1', vi: 'Nhật ký công trường hàng ngày có xác nhận thời tiết, nhân lực, máy móc (6.10)', en: 'Daily Site diaries recording weather, labour, and equipment (6.10)' },
  { id: 'r2', vi: 'Báo cáo Tiến độ hàng tháng lưu file gốc phần mềm (MS Project / Primavera P6 - 4.20 & 8.3)', en: 'Monthly Progress Reports with native baseline/update schedule files (4.20 & 8.3)' },
  { id: 'r3', vi: 'Ảnh chụp & Video hiện trường có gắn ngày giờ (timestamp) khi gặp vướng mắc mặt bằng/địa chất (4.12)', en: 'Timestamped site photos & videos of obstructions or ground conditions (4.12)' },
  { id: 'r4', vi: 'Sổ giao nhận bản vẽ, chỉ dẫn kỹ thuật và văn bản trả lời RFI (theo dõi chậm cấp 1.9)', en: 'Drawing/instruction transmittal logs & RFI register (tracking 1.9 delays)' },
  { id: 'r5', vi: 'Văn bản xác nhận chỉ dẫn bằng miệng trong vòng 2 ngày làm việc (3.5)', en: 'Written confirmations of oral instructions within 2 working days (3.5)' },
  { id: 'r6', vi: 'Hóa đơn, chứng từ ca máy chờ việc, bảng lương công nhân thực tế phát sinh trong giai đoạn bị chậm', en: 'Invoices, standing-time equipment logs, and payroll records during delay periods' }
];

export const EOT_METHODS = [
  {
    name: 'Time Impact Analysis (TIA)',
    type: 'Prospective / Đương thời',
    vi: 'Chèn sự kiện chậm trễ (fragnet) vào tiến độ cập nhật ngay trước thời điểm xảy ra sự kiện để đo tác động trực tiếp lên đường găng. Phù hợp nhất khi sự việc đang diễn ra (SCL Protocol khuyến nghị).',
    en: 'Inserts delay fragnets into the contemporaneous updated programme just prior to the event to measure critical path impact. Preferred by SCL Protocol for live claims.'
  },
  {
    name: 'As-Planned vs As-Built Windows Analysis',
    type: 'Retrospective / Hồi cứu',
    vi: 'Chia tiến độ thành từng "cửa sổ thời gian" (windows) và so sánh tiến độ kế hoạch với thực tế thi công tại từng cửa sổ để xác định nguyên nhân trễ thực sự trên đường găng.',
    en: 'Divides project duration into sequential time windows, comparing planned vs actual progress per window to isolate critical delays.'
  },
  {
    name: 'Impacted As-Planned',
    type: 'Đơn giản / Ít chính xác hơn',
    vi: 'Chèn sự kiện chậm trễ trực tiếp vào tiến độ gốc ban đầu (Baseline 8.3). Dễ thực hiện nhưng hay bị bác bỏ vì bỏ qua diễn biến thay đổi thực tế trên công trường.',
    en: 'Impacts the original baseline programme directly; simple but often criticised for ignoring actual site progress and re-sequencing.'
  },
  {
    name: 'Collapsed As-Built (But-For)',
    type: 'Hồi cứu',
    vi: 'Xây dựng biểu đồ thực tế đã thi công (As-Built), sau đó gỡ bỏ các sự kiện chậm trễ do Chủ đầu tư gây ra để xem công trình lẽ ra hoàn thành sớm hơn bao lâu.',
    en: 'Constructs the As-Built programme and removes Employer delay events to determine when completion would have occurred "but for" those events.'
  }
];
