export const RED17_PART3 = [
  // Clause 15
  {
    book: 'red', ed: '17', clause: 15, id: '15.1',
    viTitle: 'Thông báo Sửa chữa (Notice to Correct)', enTitle: 'Notice to Correct',
    viBody: 'Nếu Nhà thầu không thực hiện bất kỳ nghĩa vụ nào theo Hợp đồng, Nhà tư vấn có quyền gửi Thông báo Sửa chữa yêu cầu Nhà thầu khắc phục trong một khoảng thời gian hợp lý cụ thể.',
    enBody: 'If the Contractor fails to carry out any obligation under the Contract, the Engineer may by Notice require the Contractor to make good the failure within a specified reasonable time.',
    timelimits: [], eq99: ['15.1']
  },
  {
    book: 'red', ed: '17', clause: 15, id: '15.3',
    viTitle: 'Xác định Giá trị sau Chấm dứt do Lỗi Nhà thầu', enTitle: 'Valuation after Termination for Contractor’s Default',
    viBody: 'Ngay sau khi chấm dứt theo 15.2, Nhà tư vấn tiến hành xác định giá trị Công trình đã thực hiện và vật tư/thiết bị hiện có theo Điều khoản 3.7.',
    enBody: 'After termination under 15.2 takes effect, the Engineer proceeds under Sub-Clause 3.7 to agree or determine the value of Works, Goods, and Contractor’s Documents.',
    timelimits: [], eq99: ['15.3']
  },
  {
    book: 'red', ed: '17', clause: 15, id: '15.4',
    viTitle: 'Thanh toán sau Chấm dứt do Lỗi Nhà thầu', enTitle: 'Payment after Termination for Contractor’s Default',
    viBody: 'Chủ đầu tư được tạm giữ mọi khoản thanh toán cho đến khi hoàn thành công trình thông qua nhà thầu khác và xác định xong chi phí hoàn thành, thiệt hại chậm trễ (nếu có) và chi phí phát sinh.',
    enBody: 'The Employer may withhold further payments until costs of execution, completion, remedying defects, Delay Damages, and other costs incurred by Employer are established.',
    timelimits: [], eq99: ['15.4']
  },
  {
    book: 'red', ed: '17', clause: 15, id: '15.6',
    viTitle: 'Xác định Giá trị sau Chấm dứt vì Lợi ích Chủ đầu tư', enTitle: 'Valuation after Termination for Employer’s Convenience',
    viBody: 'Sau khi chấm dứt theo 15.5, Nhà thầu nộp đề nghị thanh toán cho phần việc đã làm, chi phí rút quân và khoản bồi thường lợi nhuận bị mất; Nhà tư vấn xác định theo Điều khoản 3.7.',
    enBody: 'After termination under 15.5, the Contractor submits particulars of work done, demobilisation costs, and loss of profit; the Engineer determines under 3.7.',
    timelimits: [], eq99: ['19.6']
  },
  {
    book: 'red', ed: '17', clause: 15, id: '15.7',
    viTitle: 'Thanh toán sau Chấm dứt vì Lợi ích Chủ đầu tư', enTitle: 'Payment after Termination for Employer’s Convenience',
    viBody: 'Chủ đầu tư phải thanh toán số tiền đã xác định theo 15.6 trong vòng 112 ngày kể từ ngày Nhà tư vấn nhận được hồ sơ đề nghị của Nhà thầu.',
    enBody: 'The Employer must pay the amount agreed or determined under 15.6 within 112 days after the Engineer receives the Contractor’s submission.',
    timelimits: [
      { badge: '112 ngày', badgeEn: '112 days', vi: 'Chủ đầu tư thanh toán trong 112 ngày sau khi NTV nhận hồ sơ 15.6', en: 'Employer pays within 112 days after Engineer receives 15.6 submission' }
    ], eq99: []
  },

  // Clause 16
  {
    book: 'red', ed: '17', clause: 16, id: '16.1',
    viTitle: 'Tạm ngừng Công trình bởi Nhà thầu', enTitle: 'Suspension by Contractor',
    viBody: 'Nếu Nhà tư vấn không cấp IPC đúng hạn (14.6), Chủ đầu tư không thanh toán đúng hạn (14.7) hoặc không cung cấp bằng chứng tài chính (2.4), Nhà thầu có quyền gửi Thông báo trước 21 ngày để tạm ngừng hoặc giảm tốc độ thi công.',
    enBody: 'If the Engineer fails to certify (14.6), or Employer fails to pay (14.7) or provide financial evidence (2.4), the Contractor may after 21 days’ Notice suspend work or reduce rate of work.',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Gửi Thông báo trước 21 ngày trước khi Nhà thầu tạm ngừng thi công', en: 'Give not less than 21 days’ Notice before Contractor suspends work' }
    ], eq99: ['16.1']
  },
  {
    book: 'red', ed: '17', clause: 16, id: '16.3',
    viTitle: 'Hậu quả & Thanh toán khi Chấm dứt bởi Nhà thầu', enTitle: 'Contractor’s Obligations & Payment after Termination',
    viBody: 'Khi chấm dứt theo 16.2 có hiệu lực, Nhà thầu ngừng việc, bàn giao tài liệu và rời công trường; Chủ đầu tư hoàn trả Bảo lãnh Thực hiện và thanh toán toàn bộ giá trị đã làm + chi phí + lợi nhuận bị mất trong 56 ngày (theo 16.4).',
    enBody: 'Upon termination under 16.2, Contractor ceases work and demobilises; Employer returns Performance Security and pays for work done, demobilisation, and loss of profit.',
    timelimits: [], eq99: ['16.3', '16.4']
  },

  // Clause 17
  {
    book: 'red', ed: '17', clause: 17, id: '17.2',
    viTitle: 'Trách nhiệm đối với Bảo quản Công trình (Rủi ro Chủ đầu tư)', enTitle: 'Liability for Care of the Works',
    viBody: 'Nhà thầu chịu trách nhiệm khắc phục mọi mất mát, hư hỏng trong thời gian bảo quản, ngoại trừ các trường hợp thuộc rủi ro Chủ đầu tư (chiến tranh, bạo loạn, phóng xạ, sóng âm, thiết kế của Chủ đầu tư, lực lượng tự nhiên bất khả kháng).',
    enBody: 'The Contractor is liable for loss/damage during care period unless caused by Employer’s risks (war, hostilities, riot, ionising radiation, Employer’s design, unforeseeable forces of nature).',
    timelimits: [], eq99: ['17.3', '17.4']
  },
  {
    book: 'red', ed: '17', clause: 17, id: '17.3',
    viTitle: 'Quyền Sở hữu Trí tuệ và Công nghiệp', enTitle: 'Intellectual and Industrial Property Rights',
    viBody: 'Mỗi Bên bồi thường cho Bên kia đối với các khiếu nại vi phạm bản quyền/sáng chế phát sinh từ tài liệu hoặc thiết kế do mình cung cấp.',
    enBody: 'Each Party indemnifies the other against third-party claims alleging infringement of IP rights arising from documents or design it supplied.',
    timelimits: [], eq99: ['17.5']
  },
  {
    book: 'red', ed: '17', clause: 17, id: '17.4',
    viTitle: 'Bồi thường bởi Nhà thầu', enTitle: 'Indemnities by Contractor',
    viBody: 'Nhà thầu bồi thường cho Chủ đầu tư đối với thương tích/tử vong của người và thiệt hại tài sản bên thứ ba phát sinh từ quá trình thi công (trừ phần do lỗi của Chủ đầu tư).',
    enBody: 'The Contractor indemnifies the Employer against bodily injury/death and third-party property damage arising out of execution of the Works.',
    timelimits: [], eq99: ['17.1']
  },
  {
    book: 'red', ed: '17', clause: 17, id: '17.5',
    viTitle: 'Bồi thường bởi Chủ đầu tư', enTitle: 'Indemnities by Employer',
    viBody: 'Chủ đầu tư bồi thường cho Nhà thầu đối với thương tích/tử vong do lỗi của Chủ đầu tư và các rủi ro thuộc trách nhiệm của Chủ đầu tư tại Điều khoản 17.2.',
    enBody: 'The Employer indemnifies the Contractor against injury/death attributable to Employer negligence and loss/damage from Employer risks under 17.2.',
    timelimits: [], eq99: ['17.1']
  },
  {
    book: 'red', ed: '17', clause: 17, id: '17.6',
    viTitle: 'Chia sẻ Bồi thường', enTitle: 'Shared Indemnities',
    viBody: 'Nếu thiệt hại xảy ra do lỗi hỗn hợp của cả hai Bên, trách nhiệm bồi thường được phân chia tương ứng theo mức độ đóng góp lỗi của mỗi Bên.',
    enBody: 'Where loss or damage is caused partly by one Party and partly by the other, each Party’s liability is reduced proportionately to the other Party’s contribution.',
    timelimits: [], eq99: []
  },

  // Clause 18
  {
    book: 'red', ed: '17', clause: 18, id: '18.1',
    viTitle: 'Sự kiện Ngoại lệ (Exceptional Events)', enTitle: 'Exceptional Events',
    viBody: 'Thay thế thuật ngữ "Force Majeure" (Bất khả kháng) của bản 1999: là sự kiện ngoài tầm kiểm soát, không thể lường trước trước khi ký HĐ, không thể tránh hoặc khắc phục hợp lý (chiến tranh, khủng bố, đình công diện rộng, thiên tai động đất/bão lụt).',
    enBody: 'Replaces 1999 "Force Majeure": an exceptional event beyond a Party’s control, unforeseeable before Contract, unavoidable, and not attributable to the other Party.',
    timelimits: [], eq99: ['19.1']
  },
  {
    book: 'red', ed: '17', clause: 18, id: '18.3',
    viTitle: 'Nghĩa vụ Giảm thiểu Chậm trễ', enTitle: 'Duty to Minimise Delay',
    viBody: 'Mỗi Bên phải luôn nỗ lực hợp lý để giảm thiểu mọi chậm trễ do Sự kiện Ngoại lệ gây ra và thông báo khi sự kiện chấm dứt.',
    enBody: 'Each Party must use all reasonable endeavours to minimise any delay as a result of an Exceptional Event and give Notice when it ceases.',
    timelimits: [], eq99: ['19.3']
  },
  {
    book: 'red', ed: '17', clause: 18, id: '18.4',
    viTitle: 'Hậu quả của Sự kiện Ngoại lệ', enTitle: 'Consequences of an Exceptional Event',
    viBody: 'Nếu Nhà thầu bị chậm tiến độ hoặc phát sinh chi phí do Sự kiện Ngoại lệ (và đã gửi Thông báo 18.2), Nhà thầu có quyền khiếu nại EOT và Chi phí (đối với một số sự kiện như chiến tranh/bạo loạn) theo 20.2.',
    enBody: 'If prevented from performing and Notice given under 18.2, Contractor is entitled to EOT and (for certain events like war/riot) Cost under 20.2.',
    timelimits: [], eq99: ['19.4']
  },
  {
    book: 'red', ed: '17', clause: 18, id: '18.5',
    viTitle: 'Chấm dứt Tùy chọn khi Kéo dài', enTitle: 'Optional Termination',
    viBody: 'Nếu Sự kiện Ngoại lệ ngăn cản việc thực hiện toàn bộ Công trình liên tục trên 84 ngày (hoặc tổng cộng trên 140 ngày), bất kỳ Bên nào cũng có quyền gửi Thông báo chấm dứt hợp đồng (có hiệu lực sau 7 ngày).',
    enBody: 'If an Exceptional Event prevents execution for a continuous period of 84 days (or multiple periods totalling >140 days), either Party may give Notice of termination (effective 7 days later).',
    timelimits: [
      { badge: '84 / 140 ng', badgeEn: '84 / 140 d', vi: 'Kéo dài liên tục >84 ngày hoặc cộng dồn >140 ngày: được quyền chấm dứt', en: 'Continuous >84d or total >140d: optional termination right' }
    ], eq99: ['19.6']
  },
  {
    book: 'red', ed: '17', clause: 18, id: '18.6',
    viTitle: 'Giải phóng Nghĩa vụ theo Pháp luật', enTitle: 'Release from Performance under the Law',
    viBody: 'Nếu phát sinh sự kiện khiến việc thực hiện Hợp đồng trở thành bất hợp pháp hoặc bất khả thi theo luật áp dụng, các Bên được giải phóng nghĩa vụ tiếp tục thực hiện.',
    enBody: 'If any event outside the control of the Parties makes performance impossible or unlawful under the governing law, the Parties are discharged from further performance.',
    timelimits: [], eq99: ['19.7']
  },

  // Clause 19
  {
    book: 'red', ed: '17', clause: 19, id: '19.2',
    viTitle: 'Các Loại Bảo hiểm Cần mua bởi Nhà thầu', enTitle: 'Insurance to be provided by the Contractor',
    viBody: 'Nhà thầu phải mua và duy trì: (a) Bảo hiểm Công trình và Thiết bị/Vật tư (110%–115% giá trị), (b) Bảo hiểm Thiết bị thi công của Nhà thầu, (c) Bảo hiểm Trách nhiệm bên thứ ba, và (d) Bảo hiểm Tai nạn cho Nhân sự.',
    enBody: 'The Contractor must insure: (a) the Works & Goods, (b) Contractor’s Equipment, (c) Third-party liability for injury/property damage, and (d) Contractor’s Personnel.',
    timelimits: [], eq99: ['18.2', '18.3', '18.4']
  },

  // Clause 21
  {
    book: 'red', ed: '17', clause: 21, id: '21.1',
    viTitle: 'Thành lập Ban Phòng ngừa và Xử lý Tranh chấp (DAAB)', enTitle: 'Constitution of the DAAB',
    viBody: 'Các Bên cùng bổ nhiệm DAAB thường trực (1 hoặc 3 thành viên) trong vòng 28 ngày sau khi Nhà thầu nhận Thư Chấp thuận (nếu Dữ liệu HĐ không ghi khác) để phòng ngừa và phân xử tranh chấp.',
    enBody: 'The Parties jointly appoint a Standing DAAB (1 or 3 members) within 28 days after Contractor receives Letter of Acceptance (unless stated otherwise) for dispute avoidance and adjudication.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thành lập DAAB trong vòng 28 ngày kể từ Thư Chấp thuận', en: 'Constitute DAAB within 28 days of Letter of Acceptance' }
    ], eq99: ['20.2']
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.2',
    viTitle: 'Không Thỏa thuận được Thành viên DAAB', enTitle: 'Failure to Appoint DAAB Member(s)',
    viBody: 'Nếu các Bên không thống nhất được thành viên DAAB trong thời hạn quy định, tổ chức chỉ định nêu trong Dữ liệu Hợp đồng (mặc định Chủ tịch FIDIC) sẽ thực hiện việc chỉ định.',
    enBody: 'If the Parties fail to agree on DAAB member(s), the appointing entity named in Contract Data (default President of FIDIC) makes the appointment.',
    timelimits: [], eq99: ['20.3']
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.3',
    viTitle: 'Phòng ngừa Tranh chấp (Avoidance of Disputes)', enTitle: 'Avoidance of Disputes',
    viBody: 'Điểm mới 2017: Hai Bên có thể cùng đề nghị DAAB hỗ trợ tư vấn không chính thức (informal assistance) để tháo gỡ vướng mắc ngay trước khi bùng phát thành Tranh chấp chính thức.',
    enBody: 'New in 2017: The Parties may jointly request the DAAB to provide informal assistance and non-binding views to resolve disagreements before they escalate into Disputes.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.7',
    viTitle: 'Không Tuân thủ Quyết định của DAAB', enTitle: 'Failure to Comply with DAAB’s Decision',
    viBody: 'Nếu một Bên không tuân thủ bất kỳ quyết định nào của DAAB (dù đã có giá trị chung thẩm hay mới có giá trị ràng buộc tạm thời), Bên kia có quyền đưa thẳng vấn đề không tuân thủ đó ra Trọng tài (21.6) mà không cần hòa giải 28 ngày.',
    enBody: 'If a Party fails to comply with any DAAB decision (whether final and binding or binding), the other Party may refer the failure directly to Arbitration (21.6) without 21.5 cooling-off.',
    timelimits: [], eq99: ['20.7']
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.8',
    viTitle: 'Trường hợp Không có DAAB', enTitle: 'No DAAB in Place',
    viBody: 'Nếu tranh chấp phát sinh mà không có DAAB đang hoạt động (do hết nhiệm kỳ hoặc các bên không thành lập được), tranh chấp có thể được đưa thẳng ra Trọng tài (21.6).',
    enBody: 'If a Dispute arises when no DAAB is in place (whether due to expiry or otherwise), the Dispute may be referred directly to Arbitration under 21.6.',
    timelimits: [], eq99: ['20.8']
  }
];
