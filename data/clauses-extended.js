export const EXTENDED_SUBCLAUSES = [
  {
    book: 'red', ed: '17', clause: 1, id: '1.5',
    viTitle: 'Thứ tự Ưu tiên Tài liệu', enTitle: 'Priority of Documents',
    viBody: 'Quy định thứ tự ưu tiên giải thích khi có mâu thuẫn giữa các tài liệu hợp đồng: (a) Hợp đồng, (b) Thư Chấp thuận, (c) Thư Dự thầu, (d) Điều kiện Riêng Phần A, (e) Điều kiện Riêng Phần B, (f) Điều kiện Chung, (g) Đặc tính kỹ thuật, (h) Bản vẽ, (i) Bảng biểu.',
    enBody: 'Establishes the hierarchy of Contract documents in case of ambiguity: (a) Contract Agreement, (b) Letter of Acceptance, (c) Letter of Tender, (d) Particular Conditions Part A, (e) Part B, (f) General Conditions, (g) Specification, (h) Drawings, (i) Schedules.',
    timelimits: [], eq99: ['1.5']
  },
  {
    book: 'red', ed: '17', clause: 1, id: '1.6',
    viTitle: 'Thỏa thuận Hợp đồng', enTitle: 'Contract Agreement',
    viBody: 'Các Bên phải ký kết Thỏa thuận Hợp đồng trong vòng 35 ngày sau khi Nhà thầu nhận Thư Chấp thuận, trừ khi có thỏa thuận khác.',
    enBody: 'The Parties shall enter into a Contract Agreement within 35 days after the Contractor receives the Letter of Acceptance, unless otherwise agreed.',
    timelimits: [
      { badge: '35 ngày', badgeEn: '35 days', vi: 'Ký kết Thỏa thuận Hợp đồng kể từ ngày nhận Thư Chấp thuận', en: 'Execute Contract Agreement within 35 days of Letter of Acceptance' }
    ], eq99: ['1.6']
  },
  {
    book: 'red', ed: '17', clause: 3, id: '3.5',
    viTitle: 'Chỉ dẫn của Nhà tư vấn', enTitle: "Engineer's Instructions",
    viBody: 'Nhà thầu phải tuân thủ mọi chỉ dẫn bằng văn bản của Nhà tư vấn. Nếu chỉ dẫn cấu thành Thay đổi (Variation), áp dụng Điều khoản 13.3; nếu Nhà thầu cho rằng chỉ dẫn bằng miệng cần xác nhận, phải xác nhận bằng văn bản trong 2 ngày làm việc.',
    enBody: 'The Contractor must comply with written instructions from the Engineer. If an instruction constitutes a Variation, Clause 13.3 applies; oral instructions confirmed in writing within 2 working days take effect unless rejected within 2 working days.',
    timelimits: [
      { badge: '2 ngày LV', badgeEn: '2 work days', vi: 'Xác nhận chỉ dẫn miệng bằng văn bản trong 2 ngày làm việc', en: 'Confirm oral instruction in writing within 2 working days' }
    ], eq99: ['3.3']
  },
  {
    book: 'red', ed: '17', clause: 4, id: '4.1',
    viTitle: 'Nghĩa vụ Chung của Nhà thầu', enTitle: "Contractor's General Obligations",
    viBody: 'Nhà thầu phải thi công và hoàn thành Công trình theo đúng Hợp đồng và chịu trách nhiệm về tính đầy đủ, ổn định và an toàn của mọi biện pháp thi công và công trình tạm.',
    enBody: 'The Contractor must execute and complete the Works in accordance with the Contract and is responsible for the adequacy, stability, and safety of all Site operations and methods of construction.',
    timelimits: [], eq99: ['4.1']
  },
  {
    book: 'red', ed: '17', clause: 4, id: '4.21',
    viTitle: 'Báo cáo Tiến độ Định kỳ', enTitle: 'Progress Reports',
    viBody: 'Nhà thầu phải lập và nộp Báo cáo Tiến độ hàng tháng (trong vòng 7 ngày sau ngày cuối cùng của mỗi tháng) bao gồm tiến độ thực tế, ảnh chụp, nhân lực, thiết bị và an toàn lao động.',
    enBody: 'Monthly progress reports must be submitted within 7 days after the last day of each month, detailing actual progress, photos, personnel, equipment, and safety.',
    timelimits: [
      { badge: '7 ngày', badgeEn: '7 days', vi: 'Nộp Báo cáo Tiến độ tháng trong vòng 7 ngày sau cuối tháng', en: 'Submit monthly Progress Report within 7 days after month-end' }
    ], eq99: ['4.21']
  },
  {
    book: 'red', ed: '17', clause: 8, id: '8.7',
    viTitle: 'Tiền Bồi thường Thiệt hại do Chậm trễ (Delay Damages)', enTitle: 'Delay Damages',
    viBody: 'Nếu Nhà thầu không hoàn thành đúng Thời gian Hoàn thành, Nhà thầu phải trả Tiền bồi thường chậm trễ (LDs) cho Chủ đầu tư cho mỗi ngày chậm, tối đa không vượt quá mức trần ghi trong Dữ liệu Hợp đồng (thường 5%–10% Giá Hợp đồng). Chủ đầu tư phải khiếu nại khoản này theo Điều khoản 20.2.',
    enBody: 'If the Contractor fails to meet the Time for Completion, it pays Delay Damages for each day of delay up to the cap stated in Contract Data. Employer must claim Delay Damages under Sub-Clause 20.2.',
    timelimits: [], eq99: ['8.7']
  },
  {
    book: 'red', ed: '17', clause: 13, id: '13.2',
    viTitle: 'Tối ưu hóa Giá trị (Value Engineering)', enTitle: 'Value Engineering',
    viBody: 'Nhà thầu có quyền đề xuất sáng kiến kỹ thuật giúp đẩy nhanh tiến độ, giảm chi phí thi công/vận hành hoặc nâng cao chất lượng. Nếu được chấp thuận, Nhà thầu thường được chia sẻ 50% phần giá trị tiết kiệm.',
    enBody: 'The Contractor may submit Value Engineering proposals to accelerate completion, reduce cost, or improve efficiency. If approved in Red Book, the Contractor typically receives 50% of the net saving.',
    timelimits: [], eq99: ['13.2']
  },
  {
    book: 'red', ed: '17', clause: 13, id: '13.7',
    viTitle: 'Điều chỉnh Giá do Biến động Chi phí', enTitle: 'Adjustments for Changes in Cost',
    viBody: 'Giá Hợp đồng chỉ được điều chỉnh tăng/giảm theo biến động giá nhân công, vật tư, nhiên liệu nếu Dữ liệu Hợp đồng có quy định Bảng dữ liệu Điều chỉnh (Schedule of Cost Indexation).',
    enBody: 'The Contract Price is adjusted for rises or falls in the cost of labour, Goods, and inputs only if a Schedule of Cost Indexation is included in the Contract Data.',
    timelimits: [], eq99: ['13.8']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.2',
    viTitle: 'Thanh toán Tạm ứng (Advance Payment)', enTitle: 'Advance Payment',
    viBody: 'Chủ đầu tư thanh toán khoản Tạm ứng (không tính lãi) sau khi nhận Bảo lãnh Tạm ứng tương ứng và Bảo lãnh Thực hiện Hợp đồng. Khoản tạm ứng được thu hồi dần qua các kỳ IPC.',
    enBody: 'The Employer makes an interest-free Advance Payment after receiving the Advance Payment Guarantee and Performance Security, repaid through percentage deductions in IPCs.',
    timelimits: [
      { badge: '21 / 42 ng', badgeEn: '21 / 42 d', vi: 'Thanh toán Tạm ứng trong 21 ngày sau khi nhận Bảo lãnh (hoặc 42 ngày sau LOA)', en: 'Pay Advance Payment within 21 days of Guarantee (or 42 days of LOA)' }
    ], eq99: ['14.2']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.8',
    viTitle: 'Thanh toán Chậm trễ (Lãi chậm trả)', enTitle: 'Delayed Payment',
    viBody: 'Nếu Chủ đầu tư không thanh toán đúng hạn tại Điều khoản 14.7, Nhà thầu tự động được hưởng lãi suất tài chính tính gộp hàng tháng (cao hơn lãi suất chiết khấu ngân hàng trung ương 3%) mà không cần gửi Thông báo chính thức.',
    enBody: 'If the Employer fails to pay on time under Sub-Clause 14.7, the Contractor is entitled to financing charges compounded monthly (3% above central bank discount rate) without formal Notice.',
    timelimits: [], eq99: ['14.8']
  },
  {
    book: 'red', ed: '17', clause: 14, id: '14.9',
    viTitle: 'Hoàn trả Tiền Giữ lại (Retention Money)', enTitle: 'Release of Retention Money',
    viBody: '50% Tiền giữ lại được hoàn trả khi cấp Chứng chỉ Bàn giao (10.1), và 50% còn lại được hoàn trả ngay sau ngày hết hạn Thời hạn Thông báo Sai sót (DNP).',
    enBody: '50% of Retention Money is certified for release upon Taking-Over Certificate (10.1), and the remaining 50% promptly after the latest DNP expiry date.',
    timelimits: [], eq99: ['14.9']
  },
  {
    book: 'red', ed: '17', clause: 15, id: '15.5',
    viTitle: 'Chấm dứt Hợp đồng vì Lợi ích của Chủ đầu tư', enTitle: "Termination for Employer's Convenience",
    viBody: 'Chủ đầu tư có quyền chấm dứt hợp đồng bất kỳ lúc nào vì lý do thuận tiện (không do lỗi Nhà thầu) bằng Thông báo trước 28 ngày, nhưng không được giao phần việc còn lại cho nhà thầu khác và phải bồi thường lợi nhuận bị mất cho Nhà thầu (điểm mới 2017).',
    enBody: 'The Employer may terminate for convenience at any time on 28 days’ Notice, cannot re-award the remaining Works to another contractor, and must compensate the Contractor for loss of profit (new in 2017).',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thông báo trước 28 ngày để chấm dứt vì lợi ích Chủ đầu tư', en: '28 days’ Notice for termination for convenience' }
    ], eq99: ['15.5']
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.5',
    viTitle: 'Thương lượng Hòa giải (Amicable Settlement)', enTitle: 'Amicable Settlement',
    viBody: 'Sau khi có NOD đối với quyết định của DAAB, hai bên phải cố gắng thương lượng hòa giải trong tối thiểu 28 ngày trước khi khởi kiện ra Trọng tài Quốc tế (21.6).',
    enBody: 'After a Notice of Dissatisfaction with a DAAB decision, the Parties must attempt amicable settlement for at least 28 days before commencing Arbitration (21.6).',
    timelimits: [
      { badge: '28 ngày', badgeEn: '28 days', vi: 'Thời gian chờ tối thiểu để thương lượng hòa giải trước khi ra Trọng tài', en: '28-day cooling-off period for amicable settlement before Arbitration' }
    ], eq99: ['20.5']
  },
  {
    book: 'red', ed: '17', clause: 21, id: '21.6',
    viTitle: 'Trọng tài (Arbitration)', enTitle: 'Arbitration',
    viBody: 'Tranh chấp không giải quyết được qua DAAB và hòa giải sẽ được phân xử chung thẩm bằng Trọng tài (mặc định theo Quy tắc ICC, 1 hoặc 3 trọng tài viên).',
    enBody: 'Disputes not settled amicably are finally settled by international Arbitration (default ICC Rules, 1 or 3 arbitrators).',
    timelimits: [], eq99: ['20.6']
  }
];

export const VN_LAW_NOTES = {
  '1.5': {
    vi: 'Theo Luật Xây dựng & NĐ 37/2015/NĐ-CP: Hợp đồng mẫu FIDIC khi áp dụng tại Việt Nam vẫn phải tuân thủ thứ tự ưu tiên và các quy định bắt buộc của pháp luật Việt Nam nếu chọn luật áp dụng là Luật Việt Nam.',
    en: 'Under VN Construction Law & Decree 37/2015/ND-CP: Mandatory Vietnamese statutory provisions prevail if Vietnamese law is the governing law.'
  },
  '8.7': {
    vi: 'Lưu ý tại Việt Nam: Luật Xây dựng (Điều 146) giới hạn mức phạt vi phạm hợp đồng đối với công trình vốn nhà nước không quá 12% giá trị phần hợp đồng bị vi phạm (thường quy định trần LDs 8%–10% trong Dữ liệu HĐ).',
    en: 'Vietnam Law Note: For state-funded projects, Construction Law Art. 146 caps contractual penalties at 12% of the breached contract value.'
  },
  '13.7': {
    vi: 'Lưu ý tại Việt Nam: Nếu sử dụng vốn đầu tư công, việc điều chỉnh giá theo chỉ số giá phải tuân thủ phương pháp và công thức quy định tại Thông tư của Bộ Xây dựng & NĐ 37/2015/NĐ-CP (sửa đổi bởi NĐ 50/2021/NĐ-CP).',
    en: 'Vietnam Law Note: Public-funded contracts must follow Ministry of Construction price indexation formulas under Decree 37/2015 & 50/2021.'
  },
  '14.2': {
    vi: 'Lưu ý tại Việt Nam: Theo NĐ 37/2015/NĐ-CP, mức tạm ứng tối thiểu/tối đa cho dự án vốn nhà nước bị khống chế (thường tối đa 30%–50% giá trị hợp đồng tùy quy mô) và bắt buộc phải có bảo lãnh tạm ứng.',
    en: 'Vietnam Law Note: Decree 37/2015 sets statutory advance payment caps (typically 30%–50%) for state-funded contracts.'
  },
  '20.2': {
    vi: 'Lưu ý thực tiễn VN: Dù Bộ luật Dân sự VN có thời hiệu khởi kiện 3 năm, nhưng nếu hợp đồng chọn áp dụng FIDIC 20.2 thì điều khoản mất quyền sau 28 ngày (time-bar) vẫn thường được Trọng tài quốc tế (VIAC/ICC) công nhận hiệu lực.',
    en: 'Vietnam Practice Note: While VN Civil Code has a 3-year limitation period, arbitral tribunals (VIAC/ICC) generally enforce FIDIC’s 28-day contractual time-bar.'
  },
  '21.6': {
    vi: 'Lưu ý tại Việt Nam: Với hợp đồng trong nước hoặc có yếu tố VN, các bên thường sửa Điều khoản 21.6 sang Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) thay cho ICC.',
    en: 'Vietnam Practice Note: Domestic or Vietnam-based contracts often amend 21.6 from ICC to VIAC (Vietnam International Arbitration Centre).'
  }
};
