export const RED17_PART2 = [
  // Clause 8
  {
    book: 'red', ed: '17', clause: 8, id: '8.2',
    viTitle: 'Thời gian Hoàn thành', enTitle: 'Time for Completion',
    viBody: 'Nhà thầu phải hoàn thành toàn bộ Công trình (và từng Hạng mục nếu có) trong Thời gian Hoàn thành quy định, bao gồm cả việc vượt qua Kiểm định khi Hoàn thành.',
    enBody: 'The Contractor must complete the whole of the Works, and each Section (if any), within the Time for Completion, including passing Tests on Completion.',
    timelimits: [], eq99: ['8.2']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.4',
    viTitle: 'Cảnh báo Sớm (Advance Warning)', enTitle: 'Advance Warning',
    viBody: 'Điểm mới quan trọng năm 2017: Mỗi Bên phải gửi cảnh báo sớm cho Bên kia và Nhà tư vấn ngay khi biết về bất kỳ sự việc nào trong tương lai có thể ảnh hưởng xấu đến công việc, làm tăng Giá Hợp đồng hoặc gây chậm tiến độ.',
    enBody: 'Key 2017 addition: Each Party must advise the other and the Engineer in advance of any known or probable future events that may adversely affect the Works, increase Contract Price, or delay execution.',
    timelimits: [], eq99: []
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.6',
    viTitle: 'Chậm trễ do Cơ quan Công quyền', enTitle: 'Delays Caused by Authorities',
    viBody: 'Nếu Nhà thầu đã tuân thủ đầy đủ thủ tục mà vẫn bị cơ quan công quyền địa phương gây chậm trễ hoặc gián đoạn không lường trước, sự chậm trễ này được xem xét gia hạn EOT theo 8.5.',
    enBody: 'If the Contractor has diligently followed procedures and is unforeseeably delayed or disrupted by public authorities, such delay is treated as a cause of delay under Sub-Clause 8.5.',
    timelimits: [], eq99: ['8.5']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.8',
    viTitle: 'Tốc độ Tiến độ', enTitle: 'Rate of Progress',
    viBody: 'Nếu tiến độ thực tế quá chậm không phải do nguyên nhân được gia hạn EOT, Nhà tư vấn có quyền yêu cầu Nhà thầu nộp tiến độ điều chỉnh và áp dụng các biện pháp đẩy nhanh tiến độ bằng chi phí của Nhà thầu.',
    enBody: 'If actual progress is too slow (for reasons not entitling EOT), the Engineer may instruct the Contractor to submit a revised programme and adopt expediting measures at Contractor’s cost.',
    timelimits: [], eq99: ['8.6']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.9',
    viTitle: 'Tạm ngừng Công trình do Chủ đầu tư', enTitle: 'Employer’s Suspension',
    viBody: 'Nhà tư vấn có thể chỉ thị Nhà thầu tạm ngừng thi công một phần hoặc toàn bộ Công trình; Nhà thầu phải bảo quản và bảo vệ Công trình trong thời gian tạm ngừng.',
    enBody: 'The Engineer may instruct the Contractor to suspend progress of part or all of the Works; the Contractor must protect, store, and secure the Works against deterioration.',
    timelimits: [], eq99: ['8.8']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.10',
    viTitle: 'Hậu quả của Tạm ngừng do Chủ đầu tư', enTitle: 'Consequences of Employer’s Suspension',
    viBody: 'Nếu việc tạm ngừng không phải do lỗi của Nhà thầu, Nhà thầu có quyền khiếu nại gia hạn EOT và Chi phí cộng Lợi nhuận theo Điều khoản 20.2.',
    enBody: 'If suspension is not due to Contractor default, the Contractor is entitled to EOT and Cost Plus Profit under Sub-Clause 20.2.',
    timelimits: [], eq99: ['8.9']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.11',
    viTitle: 'Thanh toán Thiết bị & Vật tư khi Tạm ngừng', enTitle: 'Payment for Plant and Materials after Employer’s Suspension',
    viBody: 'Nếu việc tạm ngừng kéo dài quá 28 ngày, Nhà thầu được thanh toán giá trị Thiết bị/Vật tư chưa giao tới công trường nhưng đã được đánh dấu là tài sản của Chủ đầu tư.',
    enBody: 'If suspension continues for more than 28 days, the Contractor is entitled to payment for Plant/Materials not yet delivered to Site if marked as Employer’s property.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Tạm ngừng quá 28 ngày được thanh toán vật tư thiết bị đã đặt/đánh dấu', en: 'Payment for marked Plant/Materials if suspension exceeds 28 days' }
    ], eq99: ['8.10']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.12',
    viTitle: 'Tạm ngừng Kéo dài', enTitle: 'Prolonged Suspension',
    viBody: 'Nếu việc tạm ngừng toàn bộ Công trình kéo dài quá 84 ngày, Nhà thầu có thể gửi Thông báo xin tiếp tục thi công; nếu sau 28 ngày vẫn không được phép tiếp tục, Nhà thầu có quyền coi là chấm dứt hợp đồng hoặc loại bỏ phần bị ngừng.',
    enBody: 'If suspension of the whole Works continues for more than 84 days, the Contractor may give Notice requesting permission to proceed; if not granted within 28 days, may treat it as omission or terminate under 16.2.',
    timelimits: [
      { badge: '84 ngày', badgeEn: '84 days', vi: 'Tạm ngừng kéo dài quá 84 ngày: Nhà thầu gửi thông báo yêu cầu tiếp tục', en: 'After 84 days suspension, Contractor may request permission to proceed' },
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Không cho tiếp tục sau 28 ngày: được quyền chấm dứt theo 16.2', en: 'If no permission within 28 days, may omit or terminate under 16.2' }
    ], eq99: ['8.11']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.13',
    viTitle: 'Tiếp tục Thi công', enTitle: 'Resumption of Work',
    viBody: 'Sau khi nhận lệnh tiếp tục thi công, hai bên cùng kiểm tra công trình và Nhà thầu khắc phục mọi hư hỏng phát sinh trong thời gian tạm ngừng.',
    enBody: 'After permission/instruction to proceed, the Parties jointly examine the Works and the Contractor makes good any deterioration or loss during suspension.',
    timelimits: [], eq99: ['8.12']
  },

  // Clause 9
  {
    book: 'red', ed: '17', clause: 9, id: '9.2',
    viTitle: 'Kiểm định Chậm trễ', enTitle: 'Delayed Tests',
    viBody: 'Nếu Kiểm định khi Hoàn thành bị Chủ đầu tư làm chậm quá mức, Nhà thầu có quyền khiếu nại theo 20.2. Nếu Nhà thầu chậm thực hiện kiểm định quá 21 ngày sau khi nhận thông báo từ Nhà tư vấn, Nhân sự Chủ đầu tư có quyền tự tiến hành kiểm định bằng rủi ro và chi phí của Nhà thầu.',
    enBody: 'If Tests on Completion are unduly delayed by Employer, Contractor may claim under 20.2. If delayed by Contractor beyond 21 days after Engineer Notice, Employer’s Personnel may conduct tests at Contractor’s risk and cost.',
    timelimits: [
      { badge: '21 ngày', badgeEn: '21 days', vi: 'Nhà thầu phải tiến hành kiểm định trong 21 ngày sau thông báo nhắc nhở của NTV', en: 'Contractor must carry out tests within 21 days of Engineer Notice' }
    ], eq99: ['9.2']
  },
  {
    book: 'red', ed: '17', clause: 9, id: '9.3',
    viTitle: 'Kiểm định lại', enTitle: 'Retesting',
    viBody: 'Nếu Công trình hoặc Hạng mục không đạt Kiểm định khi Hoàn thành, áp dụng Điều khoản 7.5 để sửa chữa và thực hiện kiểm định lại theo các điều kiện tương tự.',
    enBody: 'If the Works or a Section fail to pass the Tests on Completion, Sub-Clause 7.5 applies and either Party may require the failed tests to be repeated.',
    timelimits: [], eq99: ['9.3']
  },
  {
    book: 'red', ed: '17', clause: 9, id: '9.4',
    viTitle: 'Không đạt Kiểm định khi Hoàn thành', enTitle: 'Failure to Pass Tests on Completion',
    viBody: 'Nếu kiểm định lại vẫn không đạt, Nhà tư vấn có quyền: (a) yêu cầu kiểm định lại lần nữa, (b) từ chối tiếp nhận nếu mất lợi ích cơ bản của Chủ đầu tư, hoặc (c) cấp Chứng chỉ Bàn giao nhưng giảm trừ Giá Hợp đồng.',
    enBody: 'If retesting fails, the Engineer may order further retesting, reject the Works/Section if Employer is deprived of substantially the whole benefit, or issue a Taking-Over Certificate with Contract Price reduction.',
    timelimits: [], eq99: ['9.4']
  },

  // Clause 10
  {
    book: 'red', ed: '17', clause: 10, id: '10.2',
    viTitle: 'Tiếp nhận Một phần Công trình', enTitle: 'Taking Over Parts',
    viBody: 'Nhà tư vấn chỉ được cấp Chứng chỉ Bàn giao cho một phần Công trình (không phải Hạng mục) theo quyết định riêng của Chủ đầu tư. Nếu Chủ đầu tư sử dụng một phần công trình trước khi bàn giao, phần đó được coi là đã tiếp nhận và giảm LDs tương ứng.',
    enBody: 'The Engineer may issue a Taking-Over Certificate for any part of the Permanent Works at Employer’s sole discretion. Employer use before taking over deems the part taken over and reduces Delay Damages.',
    timelimits: [], eq99: ['10.2']
  },
  {
    book: 'red', ed: '17', clause: 10, id: '10.3',
    viTitle: 'Cản trở Kiểm định khi Hoàn thành', enTitle: 'Interference with Tests on Completion',
    viBody: 'Nếu Nhà thầu bị cản trở không thể thực hiện Kiểm định khi Hoàn thành trong hơn 14 ngày do nguyên nhân từ Chủ đầu tư, Công trình được coi là đã được tiếp nhận và Nhà thầu được quyền khiếu nại chi phí + lợi nhuận.',
    enBody: 'If the Contractor is prevented from carrying out Tests on Completion for more than 14 days by a cause attributable to the Employer, the Works are deemed taken over and Contractor may claim EOT/Cost Plus Profit.',
    timelimits: [
      { badge: '14 ngày', badgeEn: '14 days', vi: 'Bị Chủ đầu tư cản trở kiểm định trên 14 ngày: coi như đã bàn giao', en: 'Prevented >14 days by Employer: Works deemed taken over' }
    ], eq99: ['10.3']
  },
  {
    book: 'red', ed: '17', clause: 10, id: '10.4',
    viTitle: 'Khôi phục Bề mặt', enTitle: 'Surfaces Requiring Reinstatement',
    viBody: 'Chứng chỉ Bàn giao không đồng nghĩa với việc xác nhận hoàn thành công tác khôi phục mặt bằng/cảnh quan trừ khi được ghi rõ.',
    enBody: 'A Taking-Over Certificate for a Section or part does not certify completion of any ground or surfaces requiring reinstatement unless stated.',
    timelimits: [], eq99: ['10.4']
  },

  // Clause 11
  {
    book: 'red', ed: '17', clause: 11, id: '11.1',
    viTitle: 'Hoàn thành Công việc Còn lại và Khắc phục Sai sót', enTitle: 'Completion of Outstanding Work and Remedying Defects',
    viBody: 'Trong Thời hạn Thông báo Sai sót (DNP), Nhà thầu phải hoàn thành các việc còn tồn đọng và sửa chữa mọi sai sót, hư hỏng do Chủ đầu tư/Nhà tư vấn thông báo.',
    enBody: 'During the Defects Notification Period (DNP), the Contractor must complete outstanding minor work and remedy all defects notified by the Employer/Engineer.',
    timelimits: [], eq99: ['11.1']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.2',
    viTitle: 'Chi phí Khắc phục Sai sót', enTitle: 'Cost of Remedying Defects',
    viBody: 'Nhà thầu chịu mọi chi phí sửa chữa nếu sai sót do thiết kế của Nhà thầu, vật tư/tay nghề không phù hợp hoặc vi phạm nghĩa vụ. Nếu do nguyên nhân khác, áp dụng như Thay đổi (Variation).',
    enBody: 'Remedying defects is at Contractor’s cost if attributable to Contractor design, defective Plant/Materials/workmanship, or Contractor breach; otherwise valued as a Variation.',
    timelimits: [], eq99: ['11.2']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.3',
    viTitle: 'Gia hạn Thời hạn Thông báo Sai sót (DNP)', enTitle: 'Extension of Defects Notification Period',
    viBody: 'Chủ đầu tư có quyền khiếu nại (theo 20.2) gia hạn DNP cho Công trình/Hạng mục nếu không thể sử dụng do sai sót, nhưng tổng thời gian gia hạn DNP không quá 2 năm.',
    enBody: 'The Employer is entitled (subject to 20.2) to extend DNP if Works/Section cannot be used due to a defect, capped at a maximum extension of 2 years.',
    timelimits: [
      { badge: 'Tối đa 2 năm', badgeEn: 'Max 2 years', vi: 'Thời gian gia hạn DNP tối đa không vượt quá 2 năm', en: 'DNP extension cannot exceed 2 years' }
    ], eq99: ['11.3']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.4',
    viTitle: 'Không Khắc phục được Sai sót', enTitle: 'Failure to Remedy Defects',
    viBody: 'Nếu Nhà thầu không sửa chữa sai sót trong thời hạn hợp lý, Chủ đầu tư có thể gia hạn lần cuối (bằng Thông báo trước tối thiểu 7 ngày), rồi tự thuê bên thứ ba sửa, giảm Giá Hợp đồng hoặc chấm dứt một phần/toàn bộ.',
    enBody: 'If Contractor fails to remedy a defect within a reasonable time, Employer may set a final date (by at least 7 days’ Notice), then remedy via others at Contractor’s cost, reduce Price, or terminate.',
    timelimits: [
      { badge: '7 ngày', badgeEn: '7 days', vi: 'Thông báo tối thiểu 7 ngày ấn định hạn chót sửa chữa sai sót', en: 'At least 7 days’ Notice setting final date to remedy defect' }
    ], eq99: ['11.4']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.5',
    viTitle: 'Di dời Công việc Bị lỗi ra ngoài Công trường', enTitle: 'Remedying of Defective Work off Site',
    viBody: 'Nếu không thể sửa chữa nhanh trên công trường, Nhà thầu có thể xin phép Nhà tư vấn mang thiết bị lỗi ra ngoài sửa chữa (có thể phải tăng Bảo lãnh Thực hiện tương ứng).',
    enBody: 'If a defect cannot be remedied expeditiously on Site, the Contractor may remove the defective item off Site with Engineer consent (potentially increasing Performance Security).',
    timelimits: [], eq99: ['11.5']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.6',
    viTitle: 'Kiểm định Bổ sung sau Khắc phục Sai sót', enTitle: 'Further Tests after Remedying of Defects',
    viBody: 'Nếu việc sửa chữa ảnh hưởng đến tính năng công trình, Nhà tư vấn có quyền yêu cầu lặp lại các thử nghiệm trong vòng 28 ngày sau khi hoàn tất sửa chữa.',
    enBody: 'If defect rectification may affect performance, the Engineer may require retesting by Notice within 28 days after the defect is remedied.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà tư vấn yêu cầu kiểm định lại trong 28 ngày sau sửa chữa', en: 'Engineer may require further tests within 28 days after rectification' }
    ], eq99: ['11.6']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.7',
    viTitle: 'Quyền Tiếp cận sau Bàn giao', enTitle: 'Right of Access after Taking Over',
    viBody: 'Cho đến ngày 28 ngày sau khi cấp Chứng chỉ Thực hiện, Nhà thầu được quyền tiếp cận công trình ở mức hợp lý để khắc phục sai sót.',
    enBody: 'Until 28 days after issue of the Performance Certificate, the Contractor has right of access as reasonably required to comply with Clause 11.',
    timelimits: [], eq99: ['11.7']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.8',
    viTitle: 'Nhà thầu Tìm kiếm Nguyên nhân Sai sót', enTitle: 'Contractor to Search',
    viBody: 'Nhà tư vấn có thể chỉ thị Nhà thầu tìm kiếm nguyên nhân sai sót dưới sự chỉ đạo; nếu sai sót không thuộc lỗi Nhà thầu, chi phí tìm kiếm + lợi nhuận được thanh toán theo 13.3.',
    enBody: 'The Engineer may instruct the Contractor to search for the cause of any defect; if not attributable to Contractor, Cost Plus Profit is paid.',
    timelimits: [], eq99: ['11.8']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.10',
    viTitle: 'Nghĩa vụ Chưa Hoàn thành', enTitle: 'Unfulfilled Obligations',
    viBody: 'Sau khi cấp Chứng chỉ Thực hiện, mỗi Bên vẫn phải chịu trách nhiệm hoàn thành bất kỳ nghĩa vụ nào còn tồn đọng tại thời điểm đó.',
    enBody: 'After the Performance Certificate has been issued, each Party remains liable for the fulfilment of any obligation which remains unperformed at that time.',
    timelimits: [], eq99: ['11.10']
  },
  {
    book: 'red', ed: '17', clause: 11, id: '11.11',
    viTitle: 'Dọn dẹp Công trường', enTitle: 'Clearance of Site',
    viBody: 'Sau khi nhận Chứng chỉ Thực hiện, Nhà thầu phải di dời toàn bộ thiết bị, vật tư thừa và rác thải; nếu quá 28 ngày không dọn, Chủ đầu tư có quyền bán/thanh lý và trừ chi phí.',
    enBody: 'Upon receiving the Performance Certificate, the Contractor must remove all remaining Equipment, surplus material, and wreckage; if not cleared within 28 days, Employer may sell/dispose of them.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Dọn dẹp công trường trong 28 ngày sau khi nhận Chứng chỉ Thực hiện', en: 'Clear Site within 28 days after Performance Certificate' }
    ], eq99: ['11.11']
  },

  // Clause 12
  {
    book: 'red', ed: '17', clause: 12, id: '12.2',
    viTitle: 'Phương pháp Đo lường', enTitle: 'Method of Measurement',
    viBody: 'Khối lượng được đo đạc theo khối lượng ròng thực tế của từng hạng mục Công trình vĩnh cửu, tuân theo Bảng tiên lượng khối lượng (BOQ) hoặc Bảng biểu khác.',
    enBody: 'Measurement is based on the net actual quantity of each item of the Permanent Works, in accordance with the Bill of Quantities or other applicable Schedules.',
    timelimits: [], eq99: ['12.2']
  },
  {
    book: 'red', ed: '17', clause: 12, id: '12.3',
    viTitle: 'Xác định Giá trị (Valuation)', enTitle: 'Valuation of the Works',
    viBody: 'Nhà tư vấn xác định giá trị từng hạng mục theo đơn giá trong BOQ; chỉ được điều chỉnh đơn giá mới nếu khối lượng thực tế thay đổi quá 10% AND làm thay đổi giá trị hợp đồng > 0.01% AND làm thay đổi đơn giá > 1% (hoặc là công việc phát sinh mới).',
    enBody: 'The Engineer values each item using BOQ rates; a new rate applies only if quantity changes >10%, price impact >0.01% of Accepted Contract Amount, and unit cost changes >1%, or for new items.',
    timelimits: [], eq99: ['12.3']
  },
  {
    book: 'red', ed: '17', clause: 12, id: '12.4',
    viTitle: 'Cắt giảm Khối lượng (Omissions)', enTitle: 'Omissions',
    viBody: 'Khi một phần công việc bị cắt giảm thông qua Thay đổi (Variation) mà Nhà thầu đã phát sinh chi phí chuẩn bị không thể thu hồi, Nhà thầu được xem xét bù đắp chi phí đó theo 3.7.',
    enBody: 'Whenever omission of work as part of a Variation causes the Contractor to incur unrecoverable costs, the Contractor is entitled to compensation under 3.7.',
    timelimits: [], eq99: ['12.4']
  },

  // Clause 13
  {
    book: 'red', ed: '17', clause: 13, id: '13.1',
    viTitle: 'Quyền Thay đổi', enTitle: 'Right to Vary',
    viBody: 'Nhà tư vấn có quyền chỉ thị Thay đổi bất kỳ lúc nào trước khi cấp Chứng chỉ Bàn giao. Nhà thầu phải thực hiện trừ khi gửi Thông báo ngay về lý do không thể thực hiện (VD: không mua được vật tư, mất an toàn, ảnh hưởng tính năng).',
    enBody: 'Variations may be initiated by the Engineer at any time prior to the Taking-Over Certificate. The Contractor is bound unless it promptly gives Notice of inability (e.g. unavailable Goods, safety/suitability impact).',
    timelimits: [], eq99: ['13.1']
  },
  {
    book: 'red', ed: '17', clause: 13, id: '13.4',
    viTitle: 'Khoản Tiền Tạm tính (Provisional Sums)', enTitle: 'Provisional Sums',
    viBody: 'Khoản Tiền Tạm tính chỉ được sử dụng theo chỉ thị của Nhà tư vấn, và Giá Hợp đồng được điều chỉnh tương ứng theo chi phí thực tế cộng phần trăm lợi nhuận/quản lý quy định.',
    enBody: 'Each Provisional Sum is only used in accordance with the Engineer’s instructions, with the Contract Price adjusted accordingly.',
    timelimits: [], eq99: ['13.5']
  },
  {
    book: 'red', ed: '17', clause: 13, id: '13.5',
    viTitle: 'Công việc theo Ngày công (Daywork)', enTitle: 'Daywork',
    viBody: 'Đối với công việc nhỏ hoặc phát sinh phức tạp, Nhà tư vấn có thể chỉ thị thanh toán theo Bảng đơn giá Ngày công; Nhà thầu phải nộp bảng chấm công/vật tư hàng ngày để Nhà tư vấn ký xác nhận.',
    enBody: 'For minor or incidental Variations, the Engineer may instruct work on a Daywork basis; the Contractor submits daily statements of resources for Engineer signature.',
    timelimits: [], eq99: ['13.6']
  },
  {
    book: 'red', ed: '17', clause: 13, id: '13.6',
    viTitle: 'Điều chỉnh do Thay đổi Pháp luật', enTitle: 'Adjustments for Changes in Laws',
    viBody: 'Giá Hợp đồng và Thời gian Hoàn thành được điều chỉnh nếu sau Ngày Cơ sở (Base Date) có sự thay đổi pháp luật tại nước sở tại làm tăng/giảm chi phí hoặc gây chậm trễ cho Nhà thầu.',
    enBody: 'The Contract Price and Time for Completion are adjusted for increases/decreases in Cost or delay resulting from changes in Laws made after the Base Date.',
    timelimits: [], eq99: ['13.7']
  },

  // Clause 14
  {
    book: 'red', ed: '17', clause: 14, id: '14.1',
    viTitle: 'Giá Hợp đồng', enTitle: 'The Contract Price',
    viBody: 'Trong Sách Đỏ, Giá Hợp đồng được xác định theo Điều khoản 12.3 (đo lường thực tế) và điều chỉnh theo Hợp đồng. Nhà thầu chịu toàn bộ thuế, phí liên quan (trừ các ngoại lệ theo 13.6).',
    enBody: 'In Red Book, the Contract Price is agreed/determined under 12.3 and subject to adjustments. The Contractor pays all taxes, duties, and fees unless stated otherwise.',
    timelimits: [], eq99: ['14.1']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.3',
    viTitle: 'Đề nghị Thanh toán Tạm (Application for Interim Payment)', enTitle: 'Application for Interim Payment',
    viBody: 'Cuối mỗi tháng, Nhà thầu nộp 1 bản gốc và bản điện tử Hồ sơ thanh toán (Statement) kèm tài liệu chứng minh khối lượng hoàn thành, thay đổi, khiếu nại và tiền giữ lại.',
    enBody: 'After the end of each month, the Contractor submits a Statement to the Engineer with supporting documents detailing value of work executed, Variations, Claims, and retention.',
    timelimits: [], eq99: ['14.3']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.4',
    viTitle: 'Bảng Tiến độ Thanh toán', enTitle: 'Schedule of Payments',
    viBody: 'Nếu Hợp đồng có Bảng Tiến độ Thanh toán quy định các đợt thanh toán theo tỷ lệ/mốc, các kỳ IPC sẽ căn cứ theo bảng đó; nếu tiến độ thực tế lệch đáng kể, có thể điều chỉnh lại.',
    enBody: 'If the Contract includes a Schedule of Payments specifying instalments, interim payments follow that schedule unless actual progress differs significantly.',
    timelimits: [], eq99: ['14.4']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.5',
    viTitle: 'Thiết bị và Vật tư Dùng cho Công trình', enTitle: 'Plant and Materials intended for the Works',
    viBody: 'Nếu Dữ liệu Hợp đồng có quy định, Nhà thầu được tạm thanh toán (thường 80% giá trị) đối với thiết bị/vật tư chính đã chuyển đến công trường hoặc đang vận chuyển.',
    enBody: 'If stated in Contract Data, IPCs include an amount (typically 80%) for major Plant and Materials shipped or delivered to Site.',
    timelimits: [], eq99: ['14.5']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.10',
    viTitle: 'Hồ sơ Thanh toán khi Hoàn thành (Statement at Completion)', enTitle: 'Statement at Completion',
    viBody: 'Trong vòng 84 ngày sau khi nhận Chứng chỉ Bàn giao Công trình, Nhà thầu phải nộp Hồ sơ Thanh toán khi Hoàn thành kèm giá trị toàn bộ công việc đã thực hiện và mọi khoản khiếu nại dự kiến.',
    enBody: 'Within 84 days after receiving the Taking-Over Certificate for the Works, the Contractor must submit a Statement at Completion with supporting documents.',
    timelimits: [
      { badge: '84 ngày', badgeEn: '84 days', vi: 'Nộp Hồ sơ Thanh toán khi Hoàn thành trong 84 ngày sau Chứng chỉ Bàn giao', en: 'Submit Statement at Completion within 84 days of Taking-Over Certificate' }
    ], eq99: ['14.10']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.11',
    viTitle: 'Quyết toán cuối cùng (Final Statement)', enTitle: 'Final Statement',
    viBody: 'Trong vòng 56 ngày sau khi nhận Chứng chỉ Thực hiện, Nhà thầu nộp Dự thảo Hồ sơ Quyết toán cuối cùng (Draft Final Statement) để Nhà tư vấn rà soát và thống nhất.',
    enBody: 'Within 56 days after receiving the Performance Certificate, the Contractor submits a Draft Final Statement to the Engineer for agreement.',
    timelimits: [
      { badge: '56 ngày', badgeEn: '56 days', vi: 'Nộp Dự thảo Hồ sơ Quyết toán cuối cùng trong 56 ngày sau Chứng chỉ Thực hiện', en: 'Submit Draft Final Statement within 56 days of Performance Certificate' }
    ], eq99: ['14.11']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.12',
    viTitle: 'Giấy Miễn trừ Trách nhiệm (Discharge)', enTitle: 'Discharge',
    viBody: 'Khi nộp Hồ sơ Quyết toán cuối cùng, Nhà thầu ký Giấy Miễn trừ xác nhận tổng số tiền quyết toán là toàn bộ và cuối cùng đối với mọi khoản phải trả theo Hợp đồng.',
    enBody: 'When submitting the Final Statement, the Contractor submits a written Discharge confirming the final total represents full and final settlement of all moneys due.',
    timelimits: [], eq99: ['14.12']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.13',
    viTitle: 'Cấp Chứng chỉ Thanh toán Cuối cùng (FPC)', enTitle: 'Issue of FPC',
    viBody: 'Trong vòng 28 ngày sau khi nhận Hồ sơ Quyết toán cuối cùng và Giấy Miễn trừ, Nhà tư vấn phải phát hành Chứng chỉ Thanh toán Cuối cùng (FPC) cho Chủ đầu tư.',
    enBody: 'Within 28 days after receiving the Final Statement and Discharge, the Engineer must issue the Final Payment Certificate (FPC) to the Employer.',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Nhà tư vấn phát hành FPC trong 28 ngày sau khi nhận Quyết toán & Discharge', en: 'Engineer issues FPC within 28 days of Final Statement & Discharge' }
    ], eq99: ['14.13']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.14',
    viTitle: 'Chấm dứt Trách nhiệm của Chủ đầu tư', enTitle: 'Cessation of Employer’s Liability',
    viBody: 'Chủ đầu tư không chịu trách nhiệm đối với bất kỳ khoản nào không được nêu trong Hồ sơ Quyết toán cuối cùng (trừ các khiếu nại đang được giải quyết theo Điều khoản 20/21).',
    enBody: 'The Employer is not liable to the Contractor for any matter under the Contract unless included in the Final Statement (excluding pending Claims/Disputes).',
    timelimits: [], eq99: ['14.14']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.15',
    viTitle: 'Đồng tiền Thanh toán', enTitle: 'Currencies of Payment',
    viBody: 'Giá Hợp đồng được thanh toán bằng các loại tiền tệ và tỷ lệ quy định trong Dữ liệu Hợp đồng.',
    enBody: 'The Contract Price is paid in the currency or currencies and proportions stated in the Contract Data.',
    timelimits: [], eq99: ['14.15']
  }
];
