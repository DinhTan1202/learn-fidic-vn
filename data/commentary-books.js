// Advisory & Commentary insights from Source/3- Cac sach ve Hop dong FIDIC:
// 1. 2023 The-FIDIC-Red-Book-Contract-an-International-Clause-By-Clause-Commentary
// 2. 2020 2017-fidic-contracts (William Godwin, Wiley 2020)
// 3. 2014 ICE-FIDIC-USER-S-GUIDE-3rd-edition (Leo Grutters)

export const ADVISORY_BOOKS = [
  {
    id: 'commentary-2023',
    badge: 'Commentary 2023',
    title: 'The FIDIC Red Book Contract: An International Clause-by-Clause Commentary (2023)',
    vi: 'Phân tích từng điều khoản dưới góc nhìn Luật Quốc tế (đối chiếu Common Law vs Civil Law), giải quyết các điểm nóng như hiệu lực time-bar 28 ngày, thiện chí (good faith), chậm trễ đồng thời và cưỡng chế thi hành quyết định DAAB.',
    en: 'Clause-by-clause international commentary comparing Common Law and Civil Law perspectives on 28-day time-bars, good faith, concurrent delay, and DAAB enforcement.'
  },
  {
    id: 'godwin-2020',
    badge: 'Godwin · Wiley 2020',
    title: 'The 2017 FIDIC Contracts (William Godwin, Wiley 2020)',
    vi: 'Chuyên khảo trọng tâm về bộ sách FIDIC 2017: phân tích sự chuyển dịch vai trò trung lập của Nhà tư vấn (3.7), phân biệt Thay đổi (Clause 13) với Khiếu nại (Clause 20), và quy trình giải quyết tranh chấp DAAB mới.',
    en: 'Authoritative guide to the 2017 suite: Engineer neutrality under 3.7, distinguishing Variations (Clause 13) from Claims (Clause 20), and the Standing DAAB framework.'
  },
  {
    id: 'ice-grutters-2014',
    badge: 'ICE Guide · Grutters',
    title: "FIDIC Users' Guide: A Practical Guide (3rd Ed., Leo Grutters)",
    vi: 'Cẩm nang thực hành công trường: hướng dẫn kỷ luật văn thư thông báo (Notice), lưu giữ hồ sơ đồng thời (contemporary records), kiểm soát tiến độ đường găng và tính toán EOT/Chi phí.',
    en: 'Practical Site administration guide covering Notice discipline, contemporary records, critical-path programme control, and EOT/Cost evaluation.'
  }
];

export const COMMENTARY_NOTES = {
  '1.3': {
    src: 'Godwin 2020 & ICE Guide',
    vi: 'Cảnh báo thực hành: Rất nhiều khiếu nại bị bác chỉ vì thư chỉ gửi qua email hoặc biên bản họp tuần mà không ghi rõ tiêu đề "Notice" và gửi đúng địa chỉ theo 1.3.',
    en: 'Practical warning: Claims often fail when sent only via casual email or meeting minutes without formal "Notice" identification under 1.3.'
  },
  '3.7': {
    src: 'Godwin 2020',
    vi: 'William Godwin nhấn mạnh: Cụm từ "act neutrally" (hành động trung lập) ở 3.7.2 không biến Nhà tư vấn thành trọng tài, nhưng buộc Nhà tư vấn phải đánh giá khách quan, độc lập với chỉ đạo của Chủ đầu tư.',
    en: 'Godwin notes: "Act neutrally" under 3.7.2 does not make the Engineer an arbitrator, but requires objective assessment independent of Employer instructions.'
  },
  '4.12': {
    src: 'Commentary 2023 & ICE Guide',
    vi: 'Kinh nghiệm từ ICE Guide: Khi gặp địa chất bất thường, Nhà thầu phải lập tức mời Nhà tư vấn xuống hố móng nghiệm thu hiện trường và chụp ảnh/đo đạc trước khi tiếp tục đào.',
    en: 'ICE Guide advice: Upon encountering adverse ground, invite the Engineer to inspect and record measurements before disturbing the physical evidence.'
  },
  '8.3': {
    src: 'ICE Guide (Grutters)',
    vi: 'Theo Grutters, Bảng tiến độ (8.3) dù không phải là "tài liệu hợp đồng" nhưng là thước đo chuẩn để chứng minh đường găng khi tính EOT; mọi cập nhật tháng phải lưu bản gốc (baseline).',
    en: 'Grutters notes: Though not a Contract document, the Programme is the primary baseline for critical-path EOT analysis; always preserve monthly native files.'
  },
  '8.5': {
    src: 'Commentary 2023',
    vi: 'Bình luận 2023 đối chiếu Common Law (nguyên tắc Malmaison: có EOT, không có Cost khi chậm trễ đồng thời) và Civil Law (chia sẻ theo tỷ lệ lỗi hoặc đánh giá thiện chí).',
    en: 'Commentary 2023 contrasts Common Law (Malmaison: time but no money for concurrent delay) with Civil Law (apportionment/good faith).'
  },
  '8.7': {
    src: 'Commentary 2023',
    vi: 'Tại các nước Civil Law (như Việt Nam), tòa án/trọng tài có thể xem xét giảm mức Delay Damages nếu chứng minh được mức ấn định quá cao so với thiệt hại thực tế (khác với Common Law).',
    en: 'In Civil Law jurisdictions, tribunals may reduce excessive liquidated damages if disproportionate to actual loss, unlike strict Common Law enforcement.'
  },
  '13.3': {
    src: 'Godwin 2020',
    vi: 'Godwin phân tích: Việc 2017 cho phép định giá Thay đổi trực tiếp theo 3.7 mà không cần gửi Thông báo 20.2 giúp giảm bớt gánh nặng hành chính cho Nhà thầu khi nhận chỉ thị Thay đổi.',
    en: 'Godwin highlights: Valuing Variations directly under 3.7 without a 20.2 Notice relieves the Contractor of time-bar risk on instructed Variations.'
  },
  '14.8': {
    src: 'Commentary 2023',
    vi: 'Lãi chậm trả tính gộp hàng tháng (compounded monthly) tại 14.8 có thể bị kiểm tra tính hợp pháp nếu luật áp dụng của nước sở tại cấm tính lãi chồng lãi.',
    en: 'Monthly compounding of financing charges under 14.8 may face statutory limits in jurisdictions restricting compound interest.'
  },
  '15.2': {
    src: 'Godwin 2020 & Commentary 2023',
    vi: 'Chấm dứt hợp đồng sai quy trình (thiếu Notice to Correct 15.1 hoặc thiếu 14 ngày báo trước) có thể bị coi là "chấm dứt trái pháp luật" (repudiatory breach), khiến Chủ đầu tư phải bồi thường ngược lại.',
    en: 'Procedural defects in terminating (missing 15.1 Notice to Correct or 14-day Notice) risk repudiatory breach, reversing liability onto the Employer.'
  },
  '20.2': {
    src: 'Commentary 2023 & Godwin 2020',
    vi: 'Các tác giả đều thống nhất: Tại hệ thống Civil Law, nguyên tắc "thiện chí" (good faith) đôi khi giúp Nhà thầu vượt qua bẫy time-bar 28 ngày nếu Chủ đầu tư đã biết rõ sự việc trên thực tế, nhưng không bao giờ nên trông chờ vào ngoại lệ này.',
    en: 'Both works note that while Civil Law "good faith" may occasionally soften strict 28-day time bars if the Employer had actual knowledge, Contractors should never rely on it.'
  },
  '21.4': {
    src: 'Godwin 2020 & Commentary 2023',
    vi: 'Trọng tài quốc tế (theo án lệ Persero) khẳng định quyết định của DAAB dù chưa chung thẩm (vì có NOD) vẫn có thể được cưỡng chế thi hành ngay bằng phán quyết trọng tài từng phần (partial award).',
    en: 'Following the Persero line of cases, binding (though non-final) DAAB decisions can be summarily enforced via a partial arbitral award.'
  }
};
