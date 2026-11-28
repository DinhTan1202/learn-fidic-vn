export const FCCM_META = {
  credential: 'FIDIC Certified Contract Manager (FCCM)',
  body: 'FIDIC Credentialing Ltd (FCL)',
  questions: 100,
  durationMinutes: 250,
  openBook: true,
  passMarkPct: 60,
  scopeVi:
    'Bao phủ Red / Yellow / Silver Books ấn bản 1999 & 2017, FIDIC Golden Principles (2019), FIDIC Procurement Procedures Guide (2011) và thực hành quản trị hợp đồng theo vòng đời dự án.',
  scopeEn:
    'Covers 1999 & 2017 Red, Yellow and Silver Books, FIDIC Golden Principles (2019), FIDIC Procurement Procedures Guide (2011) and lifecycle contract administration scenarios.'
};

export const FCCM_SETS = [
  {
    id: 'set-1-foundations',
    badge: 'Set 1 · 12 câu',
    titleVi: 'Đề 1: Nền tảng, Golden Principles & Khác biệt 1999 vs 2017',
    titleEn: 'Set 1: Contract Foundations, Golden Principles & 1999 vs 2017',
    durationMin: 30,
    questions: [
      {
        id: 'f1-1',
        clause: 'GP2 / 20.2',
        qVi: 'Theo Bộ Nguyên tắc Vàng FIDIC (Golden Principles 2019), nếu Điều kiện Riêng sửa đổi Khoản 20.2 bằng cách tước bỏ vai trò đánh giá công bằng của Nhà tư vấn và cho phép Chủ đầu tư đơn phương định đoạt mọi khiếu nại, Nguyên tắc Vàng nào bị vi phạm trực tiếp nhất?',
        qEn: 'Under the FIDIC Golden Principles (2019), if a Particular Condition modifies Clause 20.2 by stripping out the Engineer’s fair determination duty and allowing the Employer to unilaterally decide claims, which Golden Principle is most directly breached?',
        opts: [
          {
            vi: 'GP1: Quyền và nghĩa vụ các bên phải phù hợp với Điều kiện Chung',
            en: 'GP1: Duties and rights must be as implied in General Conditions'
          },
          {
            vi: 'GP2: Điều kiện Riêng phải rõ ràng và không làm thay đổi cán cân phân bổ rủi ro/lợi ích của Điều kiện Chung',
            en: 'GP2: Particular Conditions must be drafted plainly and must not alter the balance of risk/reward allocation in General Conditions'
          },
          {
            vi: 'GP4: Mọi tranh chấp chính thức phải được chuyển tới DAAB trước khi trọng tài',
            en: 'GP4: All formal disputes must be referred to a DAAB prior to arbitration'
          },
          {
            vi: 'GP5: Không được rút ngắn thời hiệu khiếu nại',
            en: 'GP5: Limitation periods must not be shortened'
          }
        ],
        ans: 1,
        expVi: 'GP2 cấm sửa đổi Điều kiện Riêng làm phá vỡ sự cân bằng rủi ro/lợi ích cốt lõi của Điều kiện Chung. Trao quyền đơn phương phán quyết cho Chủ đầu tư phá vỡ cơ chế trung lập Khoản 3.7 / 20.2.',
        expEn: 'GP2 prohibits Particular Conditions from altering the core risk/reward balance of the General Conditions. Allowing unilateral Employer claim decisions violates balanced administration under 3.7 / 20.2.'
      },
      {
        id: 'f1-2',
        clause: 'Red/Yel/Sil 1.5',
        qVi: 'Trong Hợp đồng Sách Đỏ 2017, Điều khoản 1.5 [Thứ tự Ưu tiên Tài liệu], đâu là thứ tự ưu tiên ĐÚNG từ cao xuống thấp khi có mâu thuẫn giữa các tài liệu (nếu Điều kiện Riêng không sửa đổi)?',
        qEn: 'Under Red Book 2017 Sub-Clause 1.5 [Priority of Documents], what is the correct descending order of precedence where documents conflict (unless amended)?',
        opts: [
          {
            vi: 'Thỏa thuận Hợp đồng -> Điều kiện Chung -> Thư Chấp thuận -> Bản vẽ',
            en: 'Contract Agreement -> General Conditions -> Letter of Acceptance -> Drawings'
          },
          {
            vi: 'Thỏa thuận Hợp đồng -> Thư Chấp thuận -> Thư Dự thầu -> Điều kiện Riêng (Phần A rồi Phần B) -> Điều kiện Chung',
            en: 'Contract Agreement -> Letter of Acceptance -> Letter of Tender -> Particular Conditions (Part A then Part B) -> General Conditions'
          },
          {
            vi: 'Điều kiện Chung -> Thỏa thuận Hợp đồng -> Chỉ dẫn Kỹ thuật -> Điều kiện Riêng',
            en: 'General Conditions -> Contract Agreement -> Specification -> Particular Conditions'
          },
          {
            vi: 'Dữ liệu Hợp đồng (Phần A) luôn đứng cao hơn Thỏa thuận Hợp đồng',
            en: 'Contract Data (Part A) always outranks the Contract Agreement'
          }
        ],
        ans: 1,
        expVi: 'Khoản 1.5 Red Book 2017 quy định thứ tự: (a) Thỏa thuận Hợp đồng, (b) Thư Chấp thuận, (c) Thư Dự thầu, (d) Điều kiện Riêng Phần A (Contract Data), (e) Điều kiện Riêng Phần B (Special Provisions), (f) Điều kiện Chung, (g) Chỉ dẫn Kỹ thuật, (h) Bản vẽ, (i) Biểu mẫu/Schedules.',
        expEn: 'Sub-Clause 1.5 (RB/17) establishes: (a) Contract Agreement, (b) Letter of Acceptance, (c) Letter of Tender, (d) PC Part A (Contract Data), (e) PC Part B (Special Provisions), (f) General Conditions, (g) Specification, (h) Drawings, (i) Schedules.'
      },
      {
        id: 'f1-3',
        clause: 'Silver 1999 vs 2017',
        qVi: 'Khác biệt cấu trúc nổi bật nhất về chủ thể quản trị hợp đồng giữa Sách Đỏ / Sách Vàng với Sách Bạc (Silver Book EPC) là gì?',
        qEn: 'What is the defining structural difference in contract administration roles between the Red/Yellow Books and the Silver Book?',
        opts: [
          {
            vi: 'Sách Bạc có "Nhà tư vấn" (Engineer) độc lập còn Sách Đỏ không có',
            en: 'Silver Book features an independent Engineer while Red Book does not'
          },
          {
            vi: 'Sách Bạc không có "Nhà tư vấn" (Engineer); Chủ đầu tư tự quản trị hoặc cử Đại diện Chủ đầu tư (Employer’s Representative)',
            en: 'Silver Book has no Engineer; the Employer administers the contract directly or via an Employer’s Representative'
          },
          {
            vi: 'Sách Bạc chỉ áp dụng hợp đồng đo bóc lại (re-measurement)',
            en: 'Silver Book applies re-measurement pricing exclusively'
          },
          {
            vi: 'Sách Bạc không cho phép sử dụng DAAB trong ấn bản 2017',
            en: 'Silver Book excludes DAAB provisions in the 2017 edition'
          }
        ],
        ans: 1,
        expVi: 'Trong Silver Book (1999 & 2017), vai trò Engineer được thay bằng Employer’s Representative hành động thay mặt Chủ đầu tư (và ở Khoản 3.5/3.7 của bản 2017 vẫn phải ra quyết định công bằng giữa các bên).',
        expEn: 'Silver Book has no Engineer; the Employer’s Representative acts for the Employer, while still making fair determinations under Clause 3.5 (17).'
      },
      {
        id: 'f1-4',
        clause: 'Clause 3.7 (17)',
        qVi: 'So với Khoản 3.5 của Sách Đỏ 1999, Khoản 3.7 [Thỏa thuận hoặc Quyết định] trong Sách Đỏ & Sách Vàng 2017 bổ sung quy định cốt lõi nào khi Nhà tư vấn thực hiện chức năng này?',
        qEn: 'Compared to Sub-Clause 3.5 of the 1999 Books, what key requirement does Sub-Clause 3.7 of the 2017 Red & Yellow Books add when the Engineer carries out agreement/determination?',
        opts: [
          {
            vi: 'Nhà tư vấn hoàn toàn được miễn tham vấn các bên',
            en: 'The Engineer is exempted from consulting the Parties'
          },
          {
            vi: 'Nhà tư vấn hành động "trung lập" (act neutrally) giữa các bên (không bị coi là hành động thay mặt Chủ đầu tư) kèm thời hạn nghiêm ngặt 42 + 42 ngày',
            en: 'The Engineer acts neutrally between the Parties (not deemed to act for the Employer) within strict 42 + 42 day time limits'
          },
          {
            vi: 'Nhà tư vấn chỉ được ra quyết định sau khi có phán quyết DAAB',
            en: 'The Engineer can only determine matters after a DAAB decision'
          },
          {
            vi: 'Quyết định của Nhà tư vấn tự động chung thẩm sau 7 ngày',
            en: 'Determinations automatically become final after 7 days'
          }
        ],
        ans: 1,
        expVi: 'Khoản 3.7 (2017) quy định rõ Nhà tư vấn phải hành động trung lập ("act neutrally"), không bị coi là đại diện Chủ đầu tư khi thực thi 3.7, với quy trình 2 bước rõ ràng: 42 ngày tham vấn thỏa thuận + 42 ngày ra Quyết định.',
        expEn: 'Sub-Clause 3.7 (2017) expressly states the Engineer shall act neutrally (not deemed to act for the Employer) and introduces strict 42-day consultation + 42-day determination deadlines.'
      },
      {
        id: 'f1-5',
        clause: '4.1 / 17.4 (Yel/Sil 17)',
        qVi: 'Trong Sách Vàng & Sách Bạc 2017, nghĩa vụ "phù hợp với mục đích sử dụng" (Fitness for Purpose) đối với thiết kế của Nhà thầu gắn với cơ chế nào mới so với 1999?',
        qEn: 'In the 2017 Yellow and Silver Books, how is the Contractor’s "fitness for purpose" obligation for design reinforced compared to 1999?',
        opts: [
          {
            vi: 'Nghĩa vụ Fitness for Purpose đã bị bãi bỏ hoàn toàn trong bản 2017',
            en: 'Fitness for purpose was completely removed in 2017'
          },
          {
            vi: 'Ngoài Khoản 4.1, Khoản 17.4 bổ sung nghĩa vụ bồi hoàn riêng của Nhà thầu đối với sai sót thiết kế làm Công trình không phù hợp mục đích quy định',
            en: 'In addition to Clause 4.1, Clause 17.4 introduces an explicit Contractor indemnity for design defects making Works unfit for purpose'
          },
          {
            vi: 'Chỉ áp dụng tiêu chuẩn cẩn trọng nghề nghiệp (reasonable skill and care) mặc định thay thế',
            en: 'Reasonable skill and care replaces fitness for purpose by default'
          },
          {
            vi: 'Chủ đầu tư chịu hoàn toàn rủi ro thiết kế trong Sách Vàng',
            en: 'Employer assumes all design risk in Yellow Book'
          }
        ],
        ans: 1,
        expVi: 'Bản 2017 Vàng/Bạc neo nghĩa vụ Fitness for Purpose vào "purposes defined in the Employer’s Requirements" tại Khoản 4.1 (nếu không ghi rõ thì theo mục đích thông thường) và bổ sung điều khoản bồi hoàn tại Khoản 17.4 (và liên đới giới hạn trách nhiệm 1.15).',
        expEn: '2017 Yellow/Silver anchor Fitness for Purpose to purposes defined in Employer’s Requirements (4.1) and add a specific design indemnity under Clause 17.4.'
      },
      {
        id: 'f1-6',
        clause: 'GP3',
        qVi: 'Theo Nguyên tắc Vàng số 3 (GP3) của FIDIC, tại sao Điều kiện Riêng không nên thay đổi việc phân bổ vai trò Nhà tư vấn (hoặc Đại diện Chủ đầu tư)?',
        qEn: 'Under FIDIC Golden Principle 3 (GP3), why should Particular Conditions maintain the core administration mechanism without undermining the Engineer / Employer’s Representative?',
        opts: [
          {
            vi: 'Vì Khoản 1.1 luôn cấm sửa đổi mọi điều khoản khác',
            en: 'Because Sub-Clause 1.1 prohibits amending any clause'
          },
          {
            vi: 'Vì bản thân GP3 nhấn mạnh việc không thay đổi cân bằng quyền/nghĩa vụ quản trị và yêu cầu thời gian hợp lý để Nhà tư vấn & các bên thực hiện nghĩa vụ hợp đồng',
            en: 'Wait: GP3 specifically covers reasonable time periods to perform obligations; GP1 covers defined roles of participants and GP2 covers clear Particular Conditions'
          },
          {
            vi: 'Đáp án đúng về nội dung GP3: Điều kiện Riêng không được đặt ra các thời hạn bất khả thi hoặc làm cản trở việc thực hiện hợp đồng hợp lý (GP3: Reasonable time periods)',
            en: 'GP3 ensures Particular Conditions allow reasonable time for Contract participants to perform their obligations without onerous unworkable deadlines'
          },
          {
            vi: 'GP3 quy định bắt buộc dùng trọng tài ICC',
            en: 'GP3 mandates ICC arbitration'
          }
        ],
        ans: 2,
        expVi: 'Lưu ý tránh bẫy thi FCCM giữa GP1–GP5: GP1 (vai trò/nghĩa vụ đúng tinh thần GC), GP2 (PC rõ ràng, không lệch cân bằng rủi ro), GP3 (cho thời gian hợp lý thực hiện nghĩa vụ), GP4 (mọi tranh chấp chính thức chuyển DAAB trước trọng tài), GP5 (trừ khi luật bắt buộc, trọng tài là giải pháp cuối).',
        expEn: 'Classic FCCM distractor check on GP1–GP5: GP1 = participant roles/duties, GP2 = risk/reward balance, GP3 = reasonable time periods to perform obligations, GP4 = DAAB mandatory before arbitration, GP5 = arbitration.'
      },
      {
        id: 'f1-7',
        clause: 'Silver 4.12 (1999 vs 2017)',
        qVi: 'Về rủi ro Điều kiện Địa chất / Vật chất Không lường trước được (Khoản 4.12), Sách Bạc (Silver Book) phân bổ rủi ro như thế nào so với Sách Đỏ và Sách Vàng?',
        qEn: 'How does the Silver Book allocate Unforeseeable physical conditions risk under Sub-Clause 4.12 compared to the Red and Yellow Books?',
        opts: [
          {
            vi: 'Giống hệt Sách Đỏ, Nhà thầu được bù EOT + Cost (+ Profit)',
            en: 'Identical to Red Book: EOT + Cost'
          },
          {
            vi: 'Trong Sách Bạc, Nhà thầu tự chịu toàn bộ rủi ro điều kiện vật chất/địa chất công trường (trừ khi có quy định khác trong Hợp đồng), không được EOT hay Cost theo 4.12',
            en: 'Under Silver Book 4.12, the Contractor bears responsibility for all unforeseen ground/physical difficulties and has no entitlement to EOT or Cost under 4.12'
          },
          {
            vi: 'Nhà thầu chỉ được EOT chứ không được Cost trong Sách Bạc',
            en: 'Contractor gets EOT only without Cost in Silver Book'
          },
          {
            vi: 'Chủ đầu tư chịu rủi ro địa chất trong cả 3 sách',
            en: 'Employer bears ground risk in all three books'
          }
        ],
        ans: 1,
        expVi: 'Điểm đặc trưng của Silver Book là chuyển rủi ro địa chất và sai sót Dữ liệu Công trường (4.10/4.12) sang Nhà thầu EPC để đổi lấy Giá cố định trọn gói cao hơn.',
        expEn: 'Silver Book 4.12 places full risk of unforeseeable subsurface/physical conditions on the Contractor (unlike Red & Yellow Books 4.12 which grant EOT and Cost).'
      },
      {
        id: 'f1-8',
        clause: '2017 Structure / 4.2',
        qVi: 'Trong ấn bản 2017 (Đỏ/Vàng/Bạc), điểm mới quan trọng về Bảo lãnh Thực hiện Hợp đồng (Performance Security - Khoản 4.2) khi có Thay đổi (Variation) lớn là gì?',
        qEn: 'In the 2017 FIDIC editions under Sub-Clause 4.2 [Performance Security], what new adjustment mechanism applies when Contract Price increases significantly due to Variations?',
        opts: [
          {
            vi: 'Không bao giờ được điều chỉnh giá trị Bảo lãnh Thực hiện',
            en: 'Performance Security value can never be adjusted'
          },
          {
            vi: 'Nếu giá trị Thay đổi cộng dồn làm Giá Hợp đồng tăng (hoặc giảm) hơn 20% so với Giá Hợp đồng Được chấp nhận, Nhà thầu phải tăng (hoặc có thể yêu cầu giảm) tương ứng giá trị Bảo lãnh (theo yêu cầu của Chủ đầu tư)',
            en: 'If Variations increase or decrease the Contract Price by more than 20% of the Accepted Contract Amount, the Security must be adjusted proportionally upon request/consent'
          },
          {
            vi: 'Bảo lãnh tự động tăng gấp đôi sau Chứng chỉ Bàn giao',
            en: 'Security automatically doubles after Taking-Over'
          },
          {
            vi: 'Bảo lãnh phải bằng tiền mặt 100%',
            en: 'Security must be 100% cash deposit'
          }
        ],
        ans: 1,
        expVi: 'Khoản 4.2.1 (2017) bổ sung ngưỡng biến động cộng dồn > 20% so với Accepted Contract Amount (hoặc giá hợp đồng tại ngày ký): Chủ đầu tư có thể yêu cầu tăng (hoặc đồng ý giảm) Bảo lãnh tương ứng tỷ lệ.',
        expEn: 'Sub-Clause 4.2.1 (2017) introduces a >20% cumulative Variation adjustment threshold for Performance Security value.'
      },
      {
        id: 'f1-9',
        clause: '1.14 / Joint & Several',
        qVi: 'Nếu Nhà thầu là một Liên danh (JV / Consortium) theo Khoản 1.14, trách nhiệm đối với Chủ đầu tư và việc thay đổi thành viên liên danh được quy định ra sao?',
        qEn: 'Under Sub-Clause 1.14 [Joint and Several Liability], how are JV members liable to the Employer and when may JV composition change?',
        opts: [
          {
            vi: 'Mỗi thành viên chỉ chịu trách nhiệm phần khối lượng của mình',
            en: 'Each member is liable only for its own share of the scope'
          },
          {
            vi: 'Các thành viên chịu trách nhiệm liên đới và riêng rẽ (jointly and severally) với Chủ đầu tư; không được thay đổi cơ cấu hoặc tình trạng pháp lý JV nếu không có sự chấp thuận trước của Chủ đầu tư',
            en: 'All JV members are jointly and severally liable to the Employer, and JV composition/legal status shall not be altered without the Employer’s prior consent'
          },
          {
            vi: 'Liên danh tự ý đổi thành viên đứng đầu bằng thông báo gửi Nhà tư vấn',
            en: 'JV may swap the leader merely by notifying the Engineer'
          },
          {
            vi: 'Chỉ thành viên đứng đầu liên danh chịu trách nhiệm pháp lý',
            en: 'Only the JV leader bears legal liability'
          }
        ],
        ans: 1,
        expVi: 'Khoản 1.14 quy định trách nhiệm liên đới (joint and several liability) và bắt buộc có chấp thuận trước bằng văn bản của Chủ đầu tư nếu thay đổi cơ cấu JV.',
        expEn: 'Under Sub-Clause 1.14, members are jointly and severally liable and cannot alter JV composition without prior Employer consent.'
      },
      {
        id: 'f1-10',
        clause: '1.13 / Permits',
        qVi: 'Theo Khoản 1.13 [Tuân thủ Pháp luật] trong Bộ Sách 2017, bên nào có trách nhiệm xin giấy phép quy hoạch, phân vùng, xây dựng (planning/zoning/building permissions) cho Công trình vĩnh cửu trừ khi Hợp đồng quy định khác?',
        qEn: 'Under Sub-Clause 1.13 [Compliance with Laws] in the 2017 Books, unless otherwise stated in the Specification/Employer’s Requirements, who is responsible for obtaining planning, zoning or building permissions for the Permanent Works?',
        opts: [
          {
            vi: 'Nhà thầu luôn chịu trách nhiệm xin tất cả mọi giấy phép quy hoạch/xây dựng',
            en: 'Contractor is always responsible for all planning/building permits'
          },
          {
            vi: 'Chủ đầu tư chịu trách nhiệm xin các giấy phép quy hoạch, phân vùng, xây dựng cho Công trình Vĩnh cửu và bồi hoàn cho Nhà thầu nếu không thực hiện được',
            en: 'The Employer must obtain planning, zoning or building permissions (or similar) for the Permanent Works and indemnify the Contractor for failures'
          },
          {
            vi: 'Nhà tư vấn đứng tên xin giấy phép thay cả hai bên',
            en: 'The Engineer obtains permits in its own name'
          },
          {
            vi: 'Không bên nào chịu trách nhiệm',
            en: 'Neither Party is responsible'
          }
        ],
        ans: 1,
        expVi: 'Khoản 1.13(a) quy định Chủ đầu tư xin giấy phép quy hoạch, phân vùng, giấy phép xây dựng cho Công trình vĩnh cửu (trừ các giấy phép thi công do Nhà thầu xin theo 1.13(b)). Bản 2017 còn cho phép Nhà thầu khiếu nại nếu chậm trễ giấy phép từ cơ quan công quyền (8.6).',
        expEn: 'Under 1.13(a), the Employer is responsible for planning/zoning/building permissions for the Permanent Works; Contractor handles permits required for execution (1.13(b)).'
      },
      {
        id: 'f1-11',
        clause: 'Notices 1.3 (2017)',
        qVi: 'Bản 2017 cải tiến Khoản 1.3 [Thông báo và Trao đổi Thông tin] như thế nào để tránh nhầm lẫn giữa thư trao đổi thông thường và "Notice" chính thức có hiệu lực kích hoạt thời hiệu?',
        qEn: 'How did the 2017 FIDIC editions tighten Sub-Clause 1.3 [Notices and Other Communications] to avoid ambiguity around time-bar Notices?',
        opts: [
          {
            vi: 'Cho phép Thông báo bằng lời nói tại cuộc họp công trường',
            en: 'Permits oral Notices recorded at site meetings'
          },
          {
            vi: 'Phân biệt rõ "Notice" với "Other communications": một Notice chính thức phải bằng văn bản và ghi rõ/được xác định là "Notice" (viết hoa) theo đúng Khoản 1.3',
            en: 'Distinguishes "Notice" from other communications: a Notice must be in writing and clearly identified as a "Notice"'
          },
          {
            vi: 'Mọi email đều mặc nhiên là Notice của Khoản 20.2',
            en: 'Every casual email automatically counts as a Sub-Clause 20.2 Notice'
          },
          {
            vi: 'Bãi bỏ hoàn toàn hình thức gửi qua hệ thống truyền dữ liệu điện tử',
            en: 'Bans electronic transmission entirely'
          }
        ],
        ans: 1,
        expVi: 'Trong ấn bản 2017, "Notice" (viết hoa) phải ghi rõ danh nghĩa là một Thông báo (Notice) gửi đúng địa chỉ/phương thức tại Contract Data để tránh tranh cãi biên bản họp hoặc báo cáo tiến độ có được coi là Notice of Claim hay không.',
        expEn: 'In 2017 editions, Sub-Clause 1.3 requires a formal Notice to be expressly identified as a Notice in writing, resolving past 1999 disputes over whether progress reports or minutes counted as notices.'
      },
      {
        id: 'f1-12',
        clause: '2017 Red vs Yellow/Silver',
        qVi: 'Trong ấn bản 2017, "Employer’s Requirements" là thuật ngữ tài liệu cốt lõi của bộ sách nào, và "Specification" là tài liệu tương ứng của bộ sách nào?',
        qEn: 'In the 2017 FIDIC Rainbow Suite, which books use "Employer’s Requirements" vs "Specification"?',
        opts: [
          {
            vi: 'Red Book dùng Employer’s Requirements; Silver Book dùng Specification',
            en: 'Red Book uses Employer’s Requirements; Silver uses Specification'
          },
          {
            vi: 'Red Book dùng Specification & Drawings; Yellow Book và Silver Book dùng Employer’s Requirements',
            en: 'Red Book uses Specification & Drawings; Yellow and Silver Books use Employer’s Requirements'
          },
          {
            vi: 'Cả 3 sách đều chỉ dùng Drawings',
            en: 'All 3 books use Drawings only'
          },
          {
            vi: 'Silver Book dùng Bill of Quantities',
            en: 'Silver Book uses Bill of Quantities'
          }
        ],
        ans: 1,
        expVi: 'Red Book (Chủ đầu tư thiết kế) dùng Specification + Drawings + BoQ; Yellow Book và Silver Book (Nhà thầu thiết kế) dùng Employer’s Requirements (nêu rõ mục đích, phạm vi, tiêu chí kỹ thuật).',
        expEn: 'Red Book uses Specification + Drawings (Employer design); Yellow & Silver Books use Employer’s Requirements (Contractor design).'
      }
    ]
  },
  {
    id: 'set-2-time-defects',
    badge: 'Set 2 · 12 câu',
    titleVi: 'Đề 2: Tiến độ, EOT, Tiền chậm trễ, Bàn giao & Sai sót (Cl. 8–11)',
    titleEn: 'Set 2: Time, Programme, EOT, Taking-Over & Defects (Clauses 8–11)',
    durationMin: 30,
    questions: [
      {
        id: 'f2-1',
        clause: '8.3 (2017)',
        qVi: 'Theo Khoản 8.3 [Tiến độ Thi công] bản 2017, sau khi nhận được tiến độ ban đầu (hoặc tiến độ cập nhật) từ Nhà thầu, nếu Nhà tư vấn KHÔNG gửi thông báo không phù hợp trong thời hạn quy định thì điều gì xảy ra?',
        qEn: 'Under 2017 Sub-Clause 8.3 [Programme], what happens if the Engineer fails to give Notice of non-compliance within the specified review period after receiving the Contractor’s initial or revised programme?',
        opts: [
          {
            vi: 'Nhà thầu bị phạt chậm nộp tiến độ',
            en: 'Contractor is fined for programme delay'
          },
          {
            vi: 'Nhà tư vấn được coi là đã gửi Thông báo Không Phản đối (Notice of No-objection) sau 21 ngày (đối với tiến độ đầu) hoặc 14 ngày (đối với tiến độ cập nhật)',
            en: 'The Engineer is deemed to have given a Notice of No-objection (21 days for initial programme, 14 days for revised programmes)'
          },
          {
            vi: 'Tiến độ tự động vô hiệu và phải lập lại từ đầu',
            en: 'The programme automatically becomes void'
          },
          {
            vi: 'Thời gian Hoàn thành tự động kéo dài thêm 28 ngày',
            en: 'Time for Completion is extended by 28 days automatically'
          }
        ],
        ans: 1,
        expVi: 'Một trong các cơ chế "deeming provision" nổi tiếng của bản 2017: Khoản 8.3 cho Nhà tư vấn 21 ngày (tiến độ đầu) và 14 ngày (tiến độ sửa đổi) để rà soát; nếu im lặng sẽ mặc nhiên coi là Notice of No-objection.',
        expEn: 'Sub-Clause 8.3 (2017) imposes a deeming provision: 21 days for the initial programme and 14 days for revised programmes before a Notice of No-objection is deemed.'
      },
      {
        id: 'f2-2',
        clause: '8.5 (Critical Path)',
        qVi: 'Khi thẩm định hồ sơ yêu cầu Gia hạn Thời gian (EOT) theo Khoản 8.5, yếu tố kỹ thuật nào là ĐIỀU KIỆN TIÊN QUYẾT để xác định quyền được EOT?',
        qEn: 'When assessing an Extension of Time (EOT) application under Sub-Clause 8.5, which technical criterion is critical before granting an EOT?',
        opts: [
          {
            vi: 'Sự kiện chậm trễ phải tác động trực tiếp lên đường găng (Critical Path) làm chậm ngày hoàn thành dự kiến vượt qua Thời gian Hoàn thành',
            en: 'The delay event must impact the critical path of the programme and delay completion beyond Time for Completion'
          },
          {
            vi: 'Nhà thầu chỉ cần chứng minh chi phí chung (overheads) tăng lên',
            en: 'Contractor merely proves higher site overheads'
          },
          {
            vi: 'Bất kỳ công việc không găng (non-critical / float) nào bị chậm đều mặc nhiên được cộng EOT',
            en: 'Any non-critical float consumption automatically yields an EOT'
          },
          {
            vi: 'Chỉ sự kiện ngoại lệ (Exceptional Events) mới được xét EOT',
            en: 'Only Exceptional Events justify EOT'
          }
        ],
        ans: 0,
        expVi: 'Khoản 8.5 trao EOT "to the extent that completion... is or will be delayed", gắn chặt với tác động lên đường găng (critical path), chứ không tự động cấp EOT cho các chậm trễ trên công việc có dự trữ thời gian (float).',
        expEn: 'EOT under 8.5 requires demonstrating critical delay to Completion, not mere consumption of non-critical float.'
      },
      {
        id: 'f2-3',
        clause: '8.5 (Concurrency 2017)',
        qVi: 'Ấn bản FIDIC 2017 xử lý vấn đề "Chậm trễ đồng thời" (Concurrent Delay — một nguyên nhân thuộc lỗi Chủ đầu tư xảy ra đồng thời với nguyên nhân thuộc lỗi Nhà thầu) như thế nào tại đoạn cuối Khoản 8.5?',
        qEn: 'How do the 2017 FIDIC editions address "Concurrent Delay" in the final paragraph of Sub-Clause 8.5?',
        opts: [
          {
            vi: 'Luôn cấm Nhà thầu hưởng EOT khi có bất kỳ lỗi nào của Nhà thầu',
            en: 'Always bars Contractor EOT whenever concurrent Contractor delay exists'
          },
          {
            vi: 'Nhà thầu luôn được hưởng 100% EOT lẫn Cost',
            en: 'Contractor automatically receives both 100% EOT and Cost'
          },
          {
            vi: 'Quyền EOT được đánh giá theo quy tắc/thủ tục nêu trong Quy định Đặc biệt (Special Provisions), nếu không nêu thì đánh giá "phù hợp có xem xét thỏa đáng mọi tình tiết liên quan"',
            en: 'Assessed in accordance with any rules in the Special Provisions or, if none stated, as appropriate taking due regard of all relevant circumstances'
          },
          {
            vi: 'Chia đôi 50/50 mặc định cho mọi trường hợp',
            en: 'Automatically splits 50/50 in all cases'
          }
        ],
        ans: 2,
        expVi: 'Đây là điểm mới quan trọng tại Khoản 8.5 (2017) lần đầu nhắc trực diện tới concurrency và dẫn chiếu tới Special Provisions (FIDIC Guidance gợi ý SCL Delay and Disruption Protocol).',
        expEn: 'The final paragraph of 8.5 (2017) leaves concurrency assessment to Special Provisions rules or, absent such rules, "as appropriate taking due regard of all relevant circumstances".'
      },
      {
        id: 'f2-4',
        clause: '8.6 (Delays by Authorities)',
        qVi: 'Theo Khoản 8.6 [Chậm trễ do Cơ quan Công quyền] (2017), Nhà thầu có quyền hưởng EOT nếu thỏa mãn cả điều kiện nào sau đây?',
        qEn: 'Under Sub-Clause 8.6 [Delays Caused by Authorities] (2017), when is the Contractor entitled to an EOT?',
        opts: [
          {
            vi: 'Cơ quan công quyền thuộc nước sở tại nơi thực hiện dự án; Nhà thầu đã tuân thủ cần mẫn thủ tục quy định nhưng vẫn bị cơ quan công quyền gây chậm trễ/gián đoạn một cách Không thể lường trước được (Unforeseeable)',
            en: 'The Contractor diligently followed procedures laid down by legally constituted public authorities in the Country, and those authorities delay/disrupt the Work in an Unforeseeable way'
          },
          {
            vi: 'Mọi chậm trễ của bất kỳ nhà cung cấp tư nhân nước ngoài nào',
            en: 'Any delay caused by a private foreign vendor'
          },
          {
            vi: 'Bất kể Nhà thầu nộp hồ sơ xin phép chậm trễ trước đó hay không',
            en: 'Even if Contractor failed to follow authority procedures'
          },
          {
            vi: 'Khoản 8.6 luôn cấp cả Cost cộng thêm Lợi nhuận cho Nhà thầu',
            en: 'Sub-Clause 8.6 always grants Cost plus Profit'
          }
        ],
        ans: 0,
        expVi: 'Khoản 8.6 (8.5 bản 1999) chỉ cấp EOT (không cấp Cost, trừ khi có lỗi của Chủ đầu tư theo 1.13) khi (a) Nhà thầu tuân thủ cần mẫn thủ tục, (b) cơ quan công quyền tại Country gây chậm trễ, và (c) sự chậm trễ là Unforeseeable.',
        expEn: 'Sub-Clause 8.6 grants EOT (not Cost) provided the Contractor diligently followed authority procedures in the Country and the authority delay was Unforeseeable.'
      },
      {
        id: 'f2-5',
        clause: '8.8 (Delay Damages)',
        qVi: 'Về Tiền bồi thường chậm trễ (Delay Damages - Khoản 8.8 bản 2017 / 8.7 bản 1999), câu nào dưới đây ĐÚNG về quyền của Chủ đầu tư và giới hạn trần?',
        qEn: 'Regarding Delay Damages under Sub-Clause 8.8 (2017) / 8.7 (1999), which statement is correct?',
        opts: [
          {
            vi: 'Chủ đầu tư phải chứng minh thiệt hại thực tế mới được khấu trừ Delay Damages',
            en: 'Employer must prove actual loss to recover Delay Damages'
          },
          {
            vi: 'Chủ đầu tư phải thực hiện thủ tục Khiếu nại theo Khoản 20.2 để đòi Delay Damages; mức bồi thường bị khống chế bởi trần tối đa trong Contract Data (trừ trường hợp Nhà thầu gian lận/cố ý sai phạm/hành vi sai trái liều lĩnh 8.8 & 1.15)',
            en: 'Employer must claim under Sub-Clause 20.2 (2017), and Delay Damages are capped at the maximum amount in Contract Data (except for fraud, gross negligence, deliberate default or reckless misconduct)'
          },
          {
            vi: 'Tiền chậm trễ hoàn toàn không bị giới hạn trần trong mọi trường hợp',
            en: 'Delay Damages have no cap in any situation'
          },
          {
            vi: 'Việc nộp đủ Delay Damages giải phóng Nhà thầu khỏi nghĩa vụ hoàn thành Công trình',
            en: 'Paying Delay Damages relieves Contractor of its obligation to complete the Works'
          }
        ],
        ans: 1,
        expVi: 'Bản 2017 làm rõ: (1) Chủ đầu tư không cần chứng minh thiệt hại thực tế nhưng PHẢI tuân thủ Khoản 20.2 (Notice of Claim), (2) có trần tối đa tại Contract Data, ngoại trừ fraud/gross negligence/deliberate default/reckless misconduct.',
        expEn: 'Under 2017 Sub-Clause 8.8, the Employer need not prove actual loss, must claim via 20.2, and the contractual cap applies save for fraud/deliberate default/reckless misconduct.'
      },
      {
        id: 'f2-6',
        clause: '10.1 (Taking-Over)',
        qVi: 'Theo Khoản 10.1 [Bàn giao Công trình], sau khi nhận được đơn đề nghị cấp Chứng chỉ Bàn giao của Nhà thầu, nếu Nhà tư vấn KHÔNG cấp Chứng chỉ Bàn giao lẫn KHÔNG bác bỏ trong vòng 28 ngày (và Công trình thực chất đã hoàn thành theo Hợp đồng), hệ quả pháp lý là gì?',
        qEn: 'Under Sub-Clause 10.1 [Taking Over the Works and Sections], if the Engineer neither issues the Taking-Over Certificate nor rejects the Contractor’s application within 28 days (and the Works are substantially complete in accordance with the Contract), what happens?',
        opts: [
          {
            vi: 'Nhà thầu phải nộp lại đơn và chờ thêm 56 ngày',
            en: 'Contractor must reapply and wait another 56 days'
          },
          {
            vi: 'Chứng chỉ Bàn giao được coi là đã được cấp (deemed issued) vào ngày thứ 14 sau ngày nộp đơn (với bản 2017 là ngày thứ 14 sau khi nộp đơn / cuối kỳ 28 ngày)',
            en: 'The Taking-Over Certificate is deemed to have been issued on the 14th day after the Engineer received the Notice of application'
          },
          {
            vi: 'Hợp đồng tự động chấm dứt',
            en: 'The Contract automatically terminates'
          },
          {
            vi: 'Bắt đầu lại Kiểm định khi Hoàn thành',
            en: 'Tests on Completion must restart'
          }
        ],
        ans: 1,
        expVi: 'Cần ghi nhớ kỹ điểm đánh đố FCCM tại Khoản 10.1: Thời hạn xét của Nhà tư vấn là **28 ngày**, nhưng nếu không trả lời (mà Công trình thực chất hoàn thành), Chứng chỉ Bàn giao được coi là đã cấp vào **ngày thứ 14** kể từ ngày Nhà tư vấn nhận được Thông báo đề nghị!',
        expEn: 'Key FCCM detail in Sub-Clause 10.1: The Engineer has 28 days to respond, but if they fail to do so (and the Works are substantially complete), the TOC is deemed issued on the 14th day after receipt of the application.'
      },
      {
        id: 'f2-7',
        clause: '10.2 (Part Taking Over)',
        qVi: 'Trong Sách Vàng hoặc Sách Bạc (1999 & 2017), nếu Chủ đầu tư tự ý sử dụng một Phần của Công trình (Part of the Works) trước khi cấp Chứng chỉ Bàn giao (không thuộc diện Hợp đồng quy định hoặc Nhà thầu chưa đồng ý — lưu ý phân biệt với Sách Đỏ), hệ quả là gì?',
        qEn: 'Under Red Book Sub-Clause 10.2 [Taking Over Parts], when the Employer uses a Part of the Works before Taking Over (other than temporary use agreed), what is the legal consequence?',
        opts: [
          {
            vi: 'Không ảnh hưởng gì tới trách nhiệm bảo quản hay Delay Damages',
            en: 'No effect on care of works or Delay Damages'
          },
          {
            vi: 'Phần đó được coi là đã được Chủ đầu tư bàn giao kể từ ngày sử dụng; Nhà thầu chấm dứt trách nhiệm bảo quản phần đó, được giảm tỷ lệ Delay Damages cho phần còn lại, và có quyền khiếu nại Cost (+ Profit) phát sinh',
            en: 'That Part is deemed taken over from that date; Contractor ceases responsibility for its care, Delay Damages for remainder are reduced proportionally, and Contractor may claim Cost plus Profit'
          },
          {
            vi: 'Chủ đầu tư bị phạt gấp đôi Giá Hợp đồng',
            en: 'Employer pays double Contract Price penalty'
          },
          {
            vi: 'Nhà thầu mất quyền bảo hành',
            en: 'Contractor loses warranty rights'
          }
        ],
        ans: 1,
        expVi: 'Khoản 10.2 quy định việc sử dụng trước dẫn tới Deemed Taking Over cho phần đó: (a) chuyển rủi ro bảo quản sang Chủ đầu tư, (b) giảm tỷ lệ Delay Damages tương ứng, (c) Nhà thầu được quyền cấp TOC cho Phần đó và đòi Cost + Profit (qua 20.2).',
        expEn: 'Using a Part triggers deemed Taking Over under 10.2: care/risk shifts to Employer, Delay Damages decrease pro-rata, and Contractor can claim Cost plus Profit.'
      },
      {
        id: 'f2-8',
        clause: '11.3 (Extension of DNP)',
        qVi: 'Theo Khoản 11.3 [Gia hạn Thời hạn Thông báo Sai sót - DNP], Chủ đầu tư được quyền yêu cầu gia hạn DNP tối đa bao lâu nếu Công trình/Hạng mục không thể sử dụng đúng mục đích do sai sót/hư hỏng mà Nhà thầu chịu trách nhiệm?',
        qEn: 'Under Sub-Clause 11.3 [Extension of Defects Notification Period], what is the maximum cumulative extension allowed to the DNP when the Works/Section cannot be used for intended purposes due to a Contractor-liable defect?',
        opts: [
          {
            vi: 'Không quá 6 tháng',
            en: 'Not more than 6 months'
          },
          {
            vi: 'Không quá 1 năm',
            en: 'Not more than 1 year'
          },
          {
            vi: 'Không quá 2 năm (over and above the original DNP)',
            en: 'Not more than 2 years beyond the original expiry of the DNP'
          },
          {
            vi: 'Vô thời hạn cho đến khi sửa xong',
            en: 'Indefinitely until repaired'
          }
        ],
        ans: 2,
        expVi: 'Khoản 11.3 quy định rõ trần gia hạn DNP không được vượt quá **2 năm** (trừ trường hợp tạm ngừng/sai sót theo hợp đồng dẫn tới thay thế thiết bị chưa vận hành được đúng mục đích).',
        expEn: 'Sub-Clause 11.3 caps the DNP extension at a maximum of **2 years**.'
      },
      {
        id: 'f2-9',
        clause: '11.9 (Performance Cert)',
        qVi: 'Theo Khoản 11.9 [Chứng chỉ Thực hiện] (2017), thời hạn Nhà tư vấn phải cấp Chứng chỉ Thực hiện (Performance Certificate) và tài liệu nào được xem là sự xác nhận duy nhất hoàn thành nghĩa vụ Hợp đồng của Nhà thầu?',
        qEn: 'Under Sub-Clause 11.9 [Performance Certificate], within what period must it be issued after the latest DNP expiry, and what is its contractual effect?',
        opts: [
          {
            vi: 'Cấp trong vòng 14 ngày; Chứng chỉ Bàn giao đã chấm dứt mọi nghĩa vụ',
            en: 'Issued within 14 days; Taking-Over Certificate already confirms full performance'
          },
          {
            vi: 'Cấp trong vòng 28 ngày sau ngày hết hạn DNP muộn nhất (hoặc ngay sau khi Nhà thầu nộp đủ Tài liệu Nhà thầu & hoàn thành kiểm định/sửa chữa); CHỈ Performance Certificate mới cấu thành sự chấp nhận Công trình (acceptance of the Works)',
            en: 'Issued within 28 days after latest DNP expiry (and completion of Contractor Documents/remediation); ONLY the Performance Certificate constitutes acceptance of the Works'
          },
          {
            vi: 'Cấp sau 84 ngày kể từ Final Statement',
            en: 'Issued 84 days after the Final Statement'
          },
          {
            vi: 'Cấp tự động nếu Chủ đầu tư thanh toán hết tạm ứng',
            en: 'Issued automatically upon advance repayment'
          }
        ],
        ans: 1,
        expVi: 'Khoản 11.9 nêu rõ: Thời hạn là **28 ngày** (bản 2017 thêm cơ chế mặc định: nếu Nhà tư vấn không cấp trong 28 ngày thì Performance Certificate được coi là đã cấp thêm 28 ngày sau khi nhận Notice của Nhà thầu — tức 28+28). Chỉ Chứng chỉ Thực hiện mới được coi là sự nghiệm thu chấp nhận hoàn thành toàn bộ Công trình.',
        expEn: 'Under 11.9, ONLY the Performance Certificate constitutes acceptance of the Works (issued within 28 days of latest DNP expiry, with a 28-day deeming safety net in 2017).'
      },
      {
        id: 'f2-10',
        clause: '9.4 (Failure to Pass Tests)',
        qVi: 'Khi Công trình không đạt Kiểm định khi Hoàn thành (Tests on Completion) sau khi đã kiểm định lại theo Khoản 9.3, Khoản 9.4 trao cho Nhà tư vấn những quyền lựa chọn nào?',
        qEn: 'Under Sub-Clause 9.4 [Failure to Pass Tests on Completion], what remedies are available to the Engineer/Employer if the Works fail repeated tests?',
        opts: [
          {
            vi: 'Chỉ có duy nhất quyền chấm dứt hợp đồng ngay lập tức',
            en: 'Immediate contract termination is the sole remedy'
          },
          {
            vi: '(a) Yêu cầu kiểm định lại lần nữa theo 9.3; (b) Từ chối nhận nếu sai sót làm tước đi lợi ích cơ bản của Chủ đầu tư (tương tự hậu quả chấm dứt 11.4(d)); hoặc (c) Cấp Chứng chỉ Bàn giao nếu Chủ đầu tư yêu cầu kèm giảm Giá Hợp đồng thỏa đáng',
            en: '(a) Order further repetition under 9.3; (b) Reject Works/Section if failure deprives Employer of substantially the whole benefit; or (c) Issue TOC upon Employer request with an appropriate reduction in Contract Price'
          },
          {
            vi: 'Luôn bắt buộc Nhà thầu phá dỡ toàn bộ Công trình dù lỗi nhỏ',
            en: 'Always compel demolition even for minor non-material test failures'
          },
          {
            vi: 'Tự động giảm 50% Giá Hợp đồng',
            en: 'Automatically reduce Contract Price by 50%'
          }
        ],
        ans: 1,
        expVi: 'Khoản 9.4 liệt kê 3 phương án xử lý rõ ràng (lặp lại kiểm định / bác bỏ nếu mất toàn bộ lợi ích cơ bản / vẫn tiếp nhận kèm giảm trừ Giá Hợp đồng).',
        expEn: 'Sub-Clause 9.4 sets out three options: repeat tests, reject if deprived of substantially whole benefit, or issue TOC with Contract Price reduction.'
      },
      {
        id: 'f2-11',
        clause: '8.7 (Rate of Progress)',
        qVi: 'Theo Khoản 8.7 [Tốc độ Tiến độ] (2017 / 8.6 bản 1999), nếu tiến độ thực tế quá chậm không đạt được Thời gian Hoàn thành (do lỗi không được hưởng EOT), Nhà tư vấn có quyền chỉ thị Nhà thầu đẩy nhanh tiến độ và AI chịu chi phí phát sinh?',
        qEn: 'Under Sub-Clause 8.7 [Rate of Progress] (8.6 in 1999), if actual progress is too slow to complete within Time for Completion for reasons not entitling EOT, who bears the cost of Contractor’s revised acceleration measures instructed by the Engineer?',
        opts: [
          {
            vi: 'Chủ đầu tư phải trả toàn bộ chi phí tăng ca',
            en: 'Employer pays all acceleration overtime costs'
          },
          {
            vi: 'Nhà thầu tự chịu rủi ro và chi phí thực hiện các biện pháp sửa đổi tiến độ (trừ trường hợp chủ động đẩy nhanh tiến độ khi không phải lỗi Nhà thầu qua Variation 13.3); ngoài ra nếu Chủ đầu tư phát sinh chi phí bổ sung có quyền đòi qua 20.2',
            en: 'Contractor adopts revised methods at its own risk and cost (and Employer may claim additional costs caused under 20.2)'
          },
          {
            vi: 'Chi phí luôn chia 50/50 giữa hai bên',
            en: 'Costs are always split 50/50'
          },
          {
            vi: 'Nhà tư vấn chịu trách nhiệm chi phí đó',
            en: 'The Engineer bears the cost'
          }
        ],
        ans: 1,
        expVi: 'Cần phân biệt rạch ròi: **Recovery/Mitigation** khi chậm do lỗi Nhà thầu theo **Khoản 8.7** (Nhà thầu tự chịu chi phí) vs **Acceleration** để hoàn thành sớm hơn hoặc bù chậm trễ do lỗi Chủ đầu tư theo **Khoản 13.3 Variation** (Chủ đầu tư trả tiền).',
        expEn: 'Distinguish Clause 8.7 (mitigation at Contractor’s risk & cost when Contractor is behind due to non-EOT causes) from Variation-instructed acceleration (Employer pays under 13.3).'
      },
      {
        id: 'f2-12',
        clause: '11.4 / DNP Remedies',
        qVi: 'Trong Thời hạn Thông báo Sai sót (DNP), nếu Nhà thầu không khắc phục sai sót trong thời hạn hợp lý dù đã có Thông báo của Chủ đầu tư theo Khoản 11.4, Chủ đầu tư có các biện pháp nào?',
        qEn: 'Under Sub-Clause 11.4 [Failure to Remedy Defects], if the Contractor fails to remedy a defect/damage by the notified reasonable date, what remedies may the Employer pursue?',
        opts: [
          {
            vi: 'Chủ đầu tư không được thuê bên thứ ba sửa chữa trong mọi tình huống',
            en: 'Employer may never engage third parties to repair defects'
          },
          {
            vi: '(a) Tự làm hoặc thuê bên thứ ba sửa với chi phí Nhà thầu chịu (đòi qua 20.2); (b) Chấp nhận sai sót và đòi giảm Giá Hợp đồng; (c) Gia hạn kiểm định nếu có; hoặc (d) Chấm dứt Hợp đồng toàn bộ/phần không sử dụng được nếu sai sót làm mất lợi ích cơ bản',
            en: '(a) Carry out work via others at Contractor’s cost (claimed under 20.2); (b) Accept defective work with Contract Price reduction; or (d) Terminate/recover sums paid if deprived of substantially whole benefit'
          },
          {
            vi: 'Chỉ được khấu trừ tối đa 5% giá trị sai sót',
            en: 'Limited to a 5% retention deduction only'
          },
          {
            vi: 'Chờ đến khi hết bảo hành mới được xử lý',
            en: 'Must wait until end of warranty before acting'
          }
        ],
        ans: 1,
        expVi: 'Khoản 11.4 quy định Chủ đầu tư gửi Further Notice chốt hạn cuối hợp lý; nếu vẫn không sửa, Chủ đầu tư lựa chọn thuê bên khác (chi phí Nhà thầu trả), giảm Giá Hợp đồng, hoặc chấm dứt hợp đồng đối với phần không dùng được nếu mất toàn bộ lợi ích cơ bản.',
        expEn: 'Sub-Clause 11.4 permits engaging others at Contractor cost, price reduction, or termination if substantially deprived of the whole benefit.'
      }
    ]
  },
  {
    id: 'set-3-money-variations',
    badge: 'Set 3 · 12 câu',
    titleVi: 'Đề 3: Đo lường, Thay đổi (Variations) & Thanh toán (Cl. 12–14)',
    titleEn: 'Set 3: Measurement, Variations & Payment (Clauses 12–14)',
    durationMin: 30,
    questions: [
      {
        id: 'f3-1',
        clause: '13.3 (Variation Procedure)',
        qVi: 'Theo Khoản 13.3.2 [Thay đổi theo Yêu cầu Đề xuất - Variation by Request for Proposal] bản 2017, khi Nhà tư vấn yêu cầu Nhà thầu nộp đề xuất trước khi chỉ thị Thay đổi, Nhà thầu phải phản hồi trong thời hạn bao nhiêu ngày?',
        qEn: 'Under 2017 Sub-Clause 13.3.2 [Variation by Request for Proposal], within how many days (unless otherwise agreed) must the Contractor respond with a proposal or reasons why they cannot comply?',
        opts: [
          { vi: '7 ngày', en: '7 days' },
          { vi: '14 ngày (hoặc thời hạn khác do Nhà thầu đề xuất và Nhà tư vấn đồng ý)', en: '14 days (or other period proposed by Contractor and agreed by Engineer)' },
          { vi: '28 ngày', en: '28 days' },
          { vi: '42 ngày', en: '42 days' }
        ],
        ans: 1,
        expVi: 'Khoản 13.3 (1999) không ấn định số ngày phản hồi cụ thể (chỉ nói "as soon as practicable"), trong khi **bản 2017 (13.3.2)** quy định thời hạn **14 ngày**!',
        expEn: 'In contrast to 1999 (which stated "as soon as practicable"), 2017 Sub-Clause 13.3.2 explicitly specifies **14 days** (or an agreed period).'
      },
      {
        id: 'f3-2',
        clause: '13.1 (Right to Vary)',
        qVi: 'Theo Khoản 13.1 [Quyền Thay đổi] trong Sách Đỏ 2017, đâu là lý do hợp lệ để Nhà thầu TỪ CHỐI thực hiện một Thay đổi được chỉ thị?',
        qEn: 'Under Red Book 2017 Sub-Clause 13.1 [Right to Vary], on which ground is the Contractor entitled to promptly give Notice that it cannot execute an instructed Variation?',
        opts: [
          {
            vi: 'Đơn giá mới chưa được Nhà tư vấn chấp thuận trước bằng văn bản',
            en: 'New unit rates have not yet been pre-approved in writing'
          },
          {
            vi: 'Nhà thầu không thể sẵn sàng mua/có được Hàng hóa (Goods) cần thiết, HOẶC công việc Thay đổi không được tính trong phạm vi ban đầu và không thể dự liệu trước từ mô tả Công trình Vĩnh cửu',
            en: 'Contractor cannot readily obtain the Goods required for the Variation, OR (in RB/17) the varied work was Unforeseeable having regard to the scope and nature of the Works'
          },
          {
            vi: 'Khối lượng Thay đổi vượt quá 5% giá hợp đồng',
            en: 'Variation exceeds 5% of Accepted Contract Amount'
          },
          {
            vi: 'Nhà thầu có quyền từ chối mọi Thay đổi phát sinh sau 50% tiến độ',
            en: 'Contractor may refuse any Variation after 50% completion'
          }
        ],
        ans: 1,
        expVi: 'Khoản 13.1(b) trong Red Book 2017 bổ sung thêm căn cứ từ chối nếu công việc Thay đổi nằm ngoài bản chất/phạm vi Công trình ban đầu một cách Unforeseeable (bên cạnh lý do không thể có được Goods). Không được từ chối chỉ vì chưa chốt giá.',
        expEn: 'RB/17 Sub-Clause 13.1 allows refusal if Goods cannot be readily obtained or (new in RB/17) if the varied work was Unforeseeable given the scope/nature of the Works.'
      },
      {
        id: 'f3-3',
        clause: 'Red 12.3 (New Rate)',
        qVi: 'Theo Khoản 12.3 [Định giá] của Sách Đỏ (1999 & 2017), khi khối lượng đo đạc thực tế của một hạng mục thay đổi vượt quá ngưỡng nào thì có thể xem xét xác định đơn giá mới (với điều kiện đồng thời thỏa mãn các tiêu chí chi phí đơn vị và giá trị)?',
        qEn: 'Under Red Book Sub-Clause 12.3 [Valuation of the Works], by what percentage must the measured quantity change before a new unit rate or price may become appropriate (subject to cost-per-unit and threshold criteria)?',
        opts: [
          { vi: 'Hơn 5%', en: 'More than 5%' },
          { vi: 'Hơn 10% so với khối lượng ước tính trong Biểu khối lượng (BoQ), đồng thời thay đổi khối lượng nhân với đơn giá gốc vượt > 0.01% Giá Hợp đồng Được chấp nhận và làm thay đổi chi phí/đơn vị > 1%', en: 'More than 10% from BoQ estimate, provided quantity change × rate exceeds 0.01% of Accepted Contract Amount and unit cost changes by >1%' },
          { vi: 'Hơn 25%', en: 'More than 25%' },
          { vi: 'Bất kỳ sự chênh lệch nào dù chỉ 1 đơn vị', en: 'Any variance of 1 unit' }
        ],
        ans: 1,
        expVi: 'Bộ 4 điều kiện kinh điển Khoản 12.3(b) Red Book: (i) Khối lượng thay đổi **> 10%**; (ii) `(ΔQty × Rate) > 0.01%` Accepted Contract Amount; (iii) thay đổi trực tiếp chi phí/đơn vị **> 1%**; và (iv) không phải hạng mục ghi nhận là "fixed rate item".',
        expEn: 'Classic RB 12.3 four cumulative criteria: >10% quantity change, product >0.01% of Accepted Contract Amount, unit cost change >1%, and not designated fixed-rate.'
      },
      {
        id: 'f3-4',
        clause: '13.1 (Omission of Work)',
        qVi: 'Theo Khoản 13.1 (2017), một Thay đổi có thể bao gồm việc cắt giảm bất kỳ công việc nào, NHƯNG bị cấm nếu cắt giảm công việc đó nhằm mục đích gì?',
        qEn: 'Under Sub-Clause 13.1 (2017), a Variation may include the omission of work, EXCEPT when the omission is instructed for what purpose?',
        opts: [
          {
            vi: 'Tiết kiệm ngân sách cho Chủ đầu tư',
            en: 'Saving budget for the Employer'
          },
          {
            vi: 'Để giao cho Chủ đầu tư tự thực hiện hoặc giao cho một nhà thầu khác thực hiện (trừ trường hợp các bên có thỏa thuận khác)',
            en: 'To be carried out by the Employer or by another contractor (unless agreed by the Contractor)'
          },
          {
            vi: 'Điều chỉnh tiến độ rút ngắn đường găng',
            en: 'Adjusting critical path schedule'
          },
          {
            vi: 'Thay đổi vật liệu tương đương',
            en: 'Substituting equivalent materials'
          }
        ],
        ans: 1,
        expVi: 'Khoản 13.1 quy định rõ: Thay đổi không được bao gồm việc cắt giảm công việc để Chủ đầu tư tự làm hoặc thuê nhà thầu khác làm (nếu vi phạm và cắt giảm để giao người khác, bản 2017 còn cho phép Nhà thầu khiếu nại cả chi phí/lợi nhuận mất đi qua 12.4/20.2).',
        expEn: 'Sub-Clause 13.1 prohibits omitting work simply so the Employer or another contractor can execute it instead.'
      },
      {
        id: 'f3-5',
        clause: '13.2 (Value Engineering)',
        qVi: 'Trong Sách Đỏ 2017 (Khoản 13.2 - Đề xuất Cải tiến Giá trị / Value Engineering), nếu đề xuất sáng kiến của Nhà thầu được Nhà tư vấn chấp thuận làm giảm giá trị hợp đồng, tỷ lệ chia sẻ lợi ích ròng (sharing fee) mặc định nếu Điều kiện Riêng không nêu tỷ lệ khác là bao nhiêu?',
        qEn: 'Under Red Book 2017 Sub-Clause 13.2 [Value Engineering], if the Contractor’s proposal results in a reduction in Contract value (absent another percentage stated in Contract Data), what is the default Contractor share of the net benefit?',
        opts: [
          { vi: '25%', en: '25%' },
          { vi: '50% phần chênh lệch giữa mức giảm Giá Hợp đồng và chi phí giảm giá trị (nếu có) của Công trình đối với Chủ đầu tư', en: '50% of the net difference between the reduction in Contract value and any reduction in value of the varied Works to the Employer' },
          { vi: '75%', en: '75%' },
          { vi: '0% (Nhà thầu không được chia thưởng)', en: '0% (no fee shared)' }
        ],
        ans: 1,
        expVi: 'Khoản 13.2(c) Sách Đỏ (1999 & 2017) quy định mức chia thưởng mặc định là **50%** khoản tiết kiệm ròng sau khi trừ phần giảm giá trị đối với Chủ đầu tư (nếu có). Lưu ý: Sách Vàng & Sách Bạc 13.2 thường không mặc định mức 50% mà dẫn chiếu Special Provisions.',
        expEn: 'Red Book 13.2 defaults to a 50% Contractor share of the net savings (after deducting any reduction in value to the Employer). Yellow/Silver 13.2 leave sharing to Particular Conditions/Special Provisions.'
      },
      {
        id: 'f3-6',
        clause: '14.6 (IPC 28 days)',
        qVi: 'Theo Khoản 14.6 [Phát hành Chứng chỉ Thanh toán Tạm - IPC], sau khi nhận được Hồ sơ thanh toán hàng tháng (Statement) và tài liệu chứng minh đầy đủ của Nhà thầu, Nhà tư vấn phải phát hành IPC trong thời hạn bao nhiêu ngày?',
        qEn: 'Under Sub-Clause 14.6 [Issue of Interim Payment Certificate], within how many days after receiving a Contractor’s Statement and supporting documents must the Engineer issue an IPC?',
        opts: [
          { vi: '14 ngày', en: '14 days' },
          { vi: '28 ngày', en: '28 days' },
          { vi: '42 ngày', en: '42 days' },
          { vi: '56 ngày', en: '56 days' }
        ],
        ans: 1,
        expVi: 'Khoản 14.6.1 quy định Nhà tư vấn phải cấp IPC trong **28 ngày** kể từ khi nhận đủ Statement và tài liệu chứng minh (kèm giải trình chi tiết khoản giữ lại/khấu trừ nếu có).',
        expEn: 'Under 14.6.1, the Engineer shall issue the IPC within **28 days** after receiving the Statement and supporting documents.'
      },
      {
        id: 'f3-7',
        clause: '14.7 (Payment 56 days)',
        qVi: 'Theo Khoản 14.7 [Thanh toán], nếu không có quy định khác trong Hợp đồng, Chủ đầu tư phải thanh toán số tiền được xác nhận trong mỗi IPC trong thời hạn bao nhiêu ngày kể từ ngày Nhà tư vấn nhận được Statement và tài liệu chứng minh?',
        qEn: 'Under Sub-Clause 14.7 [Payment], unless otherwise stated, within how many days after the Engineer receives the Statement and supporting documents must the Employer pay the amount certified in an IPC?',
        opts: [
          { vi: '28 ngày kể từ ngày nhận Statement', en: '28 days from receipt of Statement' },
          { vi: '56 ngày kể từ ngày Nhà tư vấn nhận Statement và tài liệu chứng minh (28 ngày cấp IPC + 28 ngày chuyển tiền — ở Silver Book cũng là 56 ngày)', en: '56 days after the Engineer receives the Statement and supporting documents' },
          { vi: '84 ngày kể từ ngày nhận Statement', en: '84 days from receipt of Statement' },
          { vi: '56 ngày kể từ ngày cấp IPC (tổng 84 ngày)', en: '56 days after issue of the IPC' }
        ],
        ans: 1,
        expVi: 'Cần hết sức chú ý mốc đếm trong Khoản 14.7(b): **56 ngày kể từ ngày Nhà tư vấn nhận được Statement & tài liệu chứng minh** (KHÔNG phải 56 ngày tính từ ngày cấp IPC!). Còn Final Payment Certificate (FPC) dưới 14.7(c) cũng là 56 ngày (kể từ khi nhận FPC).',
        expEn: 'Watch the trigger date in Sub-Clause 14.7(b): **56 days from receipt of the Statement** by the Engineer (not 56 days from IPC issuance). For FPC under 14.7(c), it is 56 days after Employer receives FPC.'
      },
      {
        id: 'f3-8',
        clause: '14.8 (Delayed Payment)',
        qVi: 'Nếu Chủ đầu tư thanh toán chậm theo Khoản 14.7, Khoản 14.8 [Thanh toán Chậm trễ] quy định Nhà thầu có quyền hưởng lãi chậm trả (Financing Charges) theo cơ chế nào?',
        qEn: 'Under Sub-Clause 14.8 [Delayed Payment], how are the Contractor’s Financing Charges triggered and calculated?',
        opts: [
          {
            vi: 'Nhà thầu bắt buộc phải gửi Thông báo Khiếu nại trong vòng 28 ngày theo Khoản 20.2 thì mới được tính lãi',
            en: 'Contractor must submit a 28-day Notice of Claim under Clause 20.2'
          },
          {
            vi: 'Lãi kép tính hàng tháng (compounded monthly) với lãi suất bằng 3% cộng lãi suất chiết khấu của ngân hàng trung ương đồng tiền thanh toán (trừ khi Contract Data ghi khác); Nhà thầu ĐƯỢC HƯỞNG mà KHÔNG CẦN gửi Notice hay chứng nhận chính thức',
            en: 'Compounded monthly at 3% above central bank discount rate (unless otherwise stated), and the Contractor is entitled to payment WITHOUT formal Notice or certification'
          },
          {
            vi: 'Chỉ được tính lãi đơn một lần ở kỳ quyết toán',
            en: 'Simple interest calculated once at Final Statement only'
          },
          {
            vi: 'Phải có phán quyết DAAB mới được tính lãi',
            en: 'Requires a DAAB decision before interest accrues'
          }
        ],
        ans: 1,
        expVi: 'Khoản 14.8 là ngoại lệ đặc biệt không cần formal Notice/certification (tính lãi kép hàng tháng ở mức +3%/năm trên lãi suất chiết khấu nếu không có quy định khác).',
        expEn: 'Sub-Clause 14.8 is an express entitlement without formal Notice or certification, compounded monthly at 3% above central bank rate.'
      },
      {
        id: 'f3-9',
        clause: '14.9 (Retention Release)',
        qVi: 'Theo Khoản 14.9 [Thanh toán Tiền giữ lại - Release of Retention Money], khi Chứng chỉ Bàn giao cho toàn bộ Công trình được cấp, tỷ lệ Tiền giữ lại được hoàn trả ở đợt đầu là bao nhiêu?',
        qEn: 'Under Sub-Clause 14.9 [Release of Retention Money], what portion of the Retention Money is certified for release upon issue of the Taking-Over Certificate for the whole of the Works?',
        opts: [
          { vi: '25% (1/4)', en: '25%' },
          { vi: '50% (một nửa Tiền giữ lại)', en: '50% (first half of the Retention Money)' },
          { vi: '75%', en: '75%' },
          { vi: '100% toàn bộ tiền giữ lại', en: '100%' }
        ],
        ans: 1,
        expVi: 'Khoản 14.9: 50% Tiền giữ lại được chứng nhận trả khi cấp TOC cho toàn bộ Công trình (hoặc tỷ lệ tương ứng cho Section đã bàn giao); 50% còn lại được trả ngay sau ngày hết hạn DNP muộn nhất (nếu không còn sai sót chưa xử lý).',
        expEn: 'Sub-Clause 14.9 certifies 50% on whole-Works TOC and the remaining 50% promptly after the latest DNP expiry.'
      },
      {
        id: 'f3-10',
        clause: '14.11 & 14.14 (Final Statement)',
        qVi: 'Khi nộp Hồ sơ Đề nghị Thanh toán Cuối cùng (Draft Final Statement / Final Statement theo Khoản 14.11 bản 2017) trong vòng 56 ngày sau Performance Certificate, tài liệu bắt buộc đi kèm theo Khoản 14.12 để hoàn tất quyết toán là gì?',
        qEn: 'Along with submitting the Final Statement under Sub-Clause 14.11 (within 56 days after receiving the Performance Certificate), what mandatory document must the Contractor submit under Sub-Clause 14.12?',
        opts: [
          { vi: 'Bảo lãnh Dự thầu mới', en: 'A new Tender Security' },
          { vi: 'Giấy Miễn trừ Trách nhiệm bằng văn bản (Written Discharge) xác nhận tổng số tiền Final Statement là thanh toán đầy đủ và cuối cùng cho mọi khoản phải trả theo Hợp đồng', en: 'A written Discharge confirming that the total of the Final Statement represents full and final settlement of all moneys due under the Contract' },
          { vi: 'Bảng tiến độ thi công mới nhất', en: 'Updated baseline programme' },
          { vi: 'Biên bản thanh lý với toàn bộ nhà cung cấp', en: 'Releases from all material vendors' }
        ],
        ans: 1,
        expVi: 'Khoản 14.12 yêu cầu nộp Văn bản Miễn trừ Trách nhiệm (Discharge) cùng Final Statement (có hiệu lực khi Nhà thầu nhận đủ thanh toán FPC và nhận lại Bảo lãnh Thực hiện Hợp đồng).',
        expEn: 'Sub-Clause 14.12 requires a written Discharge with the Final Statement, effective upon receipt of final payment and return of Performance Security.'
      },
      {
        id: 'f3-11',
        clause: '13.7 (Changes in Laws)',
        qVi: 'Theo Khoản 13.7 / 13.6 (bản 2017: Khoản 13.6 [Điều chỉnh do Thay đổi Luật]) nếu thay đổi luật tại Nước sở tại xảy ra SAU Ngày Cơ sở (Base Date) làm tăng/giảm chi phí hoặc chậm tiến độ, cơ chế áp dụng trong ấn bản 2017 có điểm mới gì nổi bật?',
        qEn: 'Under 2017 Sub-Clause 13.6 [Adjustments for Changes in Laws], what notable reciprocal right did the 2017 editions add compared to 1999?',
        opts: [
          {
            vi: 'Chỉ Nhà thầu được tăng tiền nếu luật làm tăng chi phí; Chủ đầu tư không bao giờ được giảm',
            en: 'Only the Contractor can recover increases; Employer has no claim for decreases'
          },
          {
            vi: 'Cân bằng hai chiều: Nhà thầu được EOT + Cost (qua 20.2) nếu luật thay đổi gây tăng chi phí/chậm trễ, VÀ Chủ đầu tư cũng được quyền khiếu nại giảm Giá Hợp đồng (qua 20.2) nếu luật thay đổi làm giảm chi phí',
            en: 'Symmetrical entitlement: Contractor may claim EOT/Cost for increases, and Employer may claim a reduction in Contract Price under 20.2 if a change in Laws decreases Contractor’s Cost'
          },
          {
            vi: 'Bao gồm thay đổi luật thuế ở quốc gia xuất xứ nhà thầu',
            en: 'Covers tax law changes in Contractor’s home country'
          },
          {
            vi: 'Áp dụng cho cả thay đổi luật xảy ra trước Ngày Cơ sở',
            en: 'Applies even to legal changes before the Base Date'
          }
        ],
        ans: 1,
        expVi: 'Khoản 13.6 bản 2017 (đổi số từ 13.7 bản 1999) mở rộng sang gồm cả thay đổi về giấy phép/quy định liên quan và thiết lập quyền khiếu nại **hai chiều** theo Khoản 20.2 cho cả Nhà thầu (tăng chi phí) lẫn Chủ đầu tư (giảm chi phí).',
        expEn: '2017 Sub-Clause 13.6 adds Employer reciprocity via Sub-Clause 20.2 if post-Base Date legal changes decrease Contractor’s Cost.'
      },
      {
        id: 'f3-12',
        clause: '13.4 (Provisional Sums)',
        qVi: 'Về Khoản Tạm tính (Provisional Sums - Khoản 13.4 bản 2017 / 13.5 bản 1999), nếu Chủ đầu tư / Nhà tư vấn chỉ thị Nhà thầu chỉ định/làm công việc thuộc Khoản Tạm tính theo chi phí thực tế chứng minh cộng tỷ lệ lợi nhuận & chi phí chung, tỷ lệ phần trăm lợi nhuận & chi phí chung đó lấy ở đâu nếu Contract Data chưa ghi?',
        qEn: 'Under Sub-Clause 13.4 [Provisional Sums] (13.5 in 1999), when Provisional Sum work is valued at actual cost plus overhead charges and profit, where is that percentage specified?',
        opts: [
          { vi: 'Mặc định là 20% trong mọi bộ sách', en: 'Fixed at 20% in all FIDIC books' },
          { vi: 'Theo tỷ lệ phần trăm đã nêu trong Bảng biểu thích hợp (applicable Schedule / BoQ), nếu không nêu thì lấy tỷ lệ nêu trong Dữ liệu Hợp đồng (Contract Data)', en: 'Percentage stated in the applicable Schedule (or Contract Data if not stated in a Schedule)' },
          { vi: 'Do Chủ đầu tư ấn định đơn phương cuối dự án', en: 'Decided unilaterally by Employer at project close' },
          { vi: 'Không được cộng chi phí chung và lợi nhuận vào Khoản Tạm tính', en: 'No overhead/profit may ever be added' }
        ],
        ans: 1,
        expVi: 'Khoản 13.4(b)(ii) quy định cộng khoản chi phí chung và lợi nhuận theo tỷ lệ phần trăm trong Schedules hoặc Contract Data (đây là câu hỏi Open-Book thường gặp khi kiểm tra chi tiết Khoản 13.4).',
        expEn: 'Under Sub-Clause 13.4(b)(ii), actual cost is supplemented by the percentage for overheads and profit stated in the applicable Schedule or Contract Data.'
      }
    ]
  },
  {
    id: 'set-4-claims-daab',
    badge: 'Set 4 · 14 câu',
    titleVi: 'Đề 4: Khiếu nại (Cl. 20), Tham vấn 3.7, DAAB & Trọng tài (Cl. 21)',
    titleEn: 'Set 4: Claims (Cl. 20), 3.7 Determination, DAAB & Arbitration (Cl. 21)',
    durationMin: 35,
    questions: [
      {
        id: 'f4-1',
        clause: '20.1 / 20.2 (2017)',
        qVi: 'Cấu trúc Điều 20 của bộ FIDIC 2017 có thay đổi mang tính cách mạng nào so với Khoản 2.5 và 20.1 của bộ 1999?',
        qEn: 'How did the 2017 FIDIC editions restructure Clause 20 compared to the 1999 editions (Sub-Clauses 2.5 and 20.1)?',
        opts: [
          {
            vi: '2017 xóa bỏ thời hạn 28 ngày với Nhà thầu',
            en: '2017 eliminated the 28-day notice limit for Contractors'
          },
          {
            vi: '2017 tách "Khiếu nại" (Điều 20) khỏi "Tranh chấp & Trọng tài" (Điều 21), đồng thời áp dụng MỘT quy trình đối xứng tại Khoản 20.2 cho CẢ Chủ đầu tư và Nhà thầu (bao gồm time-bar 28 ngày và 84 ngày hồ sơ chi tiết)',
            en: '2017 separated Claims (Clause 20) from Disputes/Arbitration (Clause 21) and subjected BOTH Employer and Contractor Claims to the identical symmetrical procedure and time-bars in Clause 20.2'
          },
          {
            vi: 'Chủ đầu tư vẫn được miễn hoàn toàn thời hạn 28 ngày theo 20.2',
            en: 'The Employer remains completely exempt from the 28-day notice under 20.2'
          },
          {
            vi: 'Khiếu nại của Chủ đầu tư chuyển thẳng lên Trọng tài bỏ qua Nhà tư vấn',
            en: 'Employer claims bypass the Engineer straight to arbitration'
          }
        ],
        ans: 1,
        expVi: 'Trong bản 1999, Chủ đầu tư đòi theo 2.5 ("as soon as practicable", không bị time-bar 28 ngày), còn Nhà thầu theo 20.1 (bị time-bar 28 ngày). Bản 2017 gộp cả hai bên vào **Khoản 20.2** bình đẳng với cùng time-bar 28 ngày (Notice of Claim) và 84 ngày (Fully Detailed Claim)!',
        expEn: '2017 merged Employer Claims (formerly 2.5) and Contractor Claims (formerly 20.1) into symmetrical Sub-Clause 20.2 with equal 28-day & 84-day time-bars.'
      },
      {
        id: 'f4-2',
        clause: '20.2.1 (Time-Bar)',
        qVi: 'Theo Khoản 20.2.1 [Thông báo Khiếu nại], nếu Bên khiếu nại (Chủ đầu tư hoặc Nhà thầu) KHÔNG gửi Thông báo Khiếu nại trong vòng 28 ngày kể từ khi nhận biết (hoặc đáng lẽ phải nhận biết) sự kiện, hậu quả trực tiếp theo Hợp đồng là gì?',
        qEn: 'Under Sub-Clause 20.2.1 [Notice of Claim], what is the contractual consequence if the claiming Party fails to give a Notice of Claim within 28 days of becoming aware (or when it should have become aware) of the event?',
        opts: [
          {
            vi: 'Bên khiếu nại bị phạt 1% giá trị khiếu nại nhưng vẫn giữ nguyên quyền đòi',
            en: 'Only a 1% penalty applies while preserving full entitlement'
          },
          {
            vi: 'Thông báo muộn mất hiệu lực (condition precedent time-bar): Không được gia hạn thời gian, không được thanh toán thêm/giảm trừ và bên kia được giải phóng mọi trách nhiệm (trừ trường hợp bên kia không phản hồi trong 14 ngày theo 20.2.2 hoặc DAAB/Nhà tư vấn xem xét ngoại lệ 20.2.5)',
            en: 'The late claim is time-barred: Time for Completion is not extended, no additional payment/reduction applies, and the other Party is discharged from liability (unless saved under 20.2.2 deeming or 20.2.5 review)'
          },
          {
            vi: 'Tự động gia hạn thêm 28 ngày miễn là có thư nhắc trong nhật ký công trường',
            en: 'Automatically extended by another 28 days if noted in site diary'
          },
          {
            vi: 'Vẫn được quyền khiếu nại tại lúc quyết toán cuối cùng',
            en: 'Preserved until Final Statement'
          }
        ],
        ans: 1,
        expVi: 'Khoản 20.2.1 là điều khoản tiền quyết ("condition precedent"). Tuy nhiên bản 2017 tạo cơ chế cân bằng qua **20.2.2** (Nhà tư vấn phải báo muộn trong 14 ngày nếu không Thông báo vẫn tạm có hiệu lực) và **20.2.5** (quyền xem xét tình tiết bất khả kháng/nhân tố chấp nhận muộn).',
        expEn: 'Sub-Clause 20.2.1 is a strict condition precedent time-bar, balanced in 2017 by the 14-day preliminary notice rule (20.2.2) and waiver assessment factors (20.2.5).'
      },
      {
        id: 'f4-3',
        clause: '20.2.2 (14-Day Deeming)',
        qVi: 'Tình huống thực chiến FCCM: Nhà thầu gửi Notice of Claim vào ngày thứ 35 (trễ 7 ngày so với hạn 28 ngày tại Khoản 20.2.1). Sau 20 ngày kể từ khi nhận được Notice of Claim, Nhà tư vấn vẫn KHÔNG gửi Thông báo phản đối việc nộp muộn theo Khoản 20.2.2. Tình trạng pháp lý của Notice of Claim đó là gì?',
        qEn: 'FCCM Scenario: Contractor submits a Notice of Claim on day 35 (7 days late under 20.2.1). The Engineer takes NO action within 14 days of receiving that Notice under 20.2.2. What is the status of the Notice of Claim?',
        opts: [
          {
            vi: 'Mất hiệu lực vĩnh viễn không thể cứu vãn',
            en: 'Permanently void without recourse'
          },
          {
            vi: 'Được coi là hợp lệ ("deemed to be a valid Notice") theo 20.2.2, trừ khi bên nhận khiếu nại (Employer) gửi thông báo phản đối cho Nhà tư vấn xem xét trong quá trình 20.2.5 / 3.7',
            en: 'It is deemed to be a valid Notice under 20.2.2, unless the other Party subsequently raises an objection for the Engineer to review under 20.2.2/3.7'
          },
          {
            vi: 'Nhà thầu tự động thắng toàn bộ giá trị khiếu nại',
            en: 'Contractor automatically wins the full financial claim'
          },
          {
            vi: 'Phải chuyển DAAB ngay lập tức trong 7 ngày',
            en: 'Must go straight to DAAB within 7 days'
          }
        ],
        ans: 1,
        expVi: 'Cơ chế "thử thách kép" ở Khoản 20.2.2: Nếu Nhà tư vấn không phản hồi trong **14 ngày** rằng Notice bị quá hạn, Notice đó được **deemed valid** (nhưng Chủ đầu tư vẫn có quyền gửi Notice cho Nhà tư vấn phản đối tính hợp lệ ở giai đoạn sau để Nhà tư vấn rà soát cùng 3.7).',
        expEn: 'Under 20.2.2, if the Engineer fails to give notice of late submission within 14 days, the Notice of Claim is deemed valid (subject to the other Party’s right to object).'
      },
      {
        id: 'f4-4',
        clause: '20.2.4 (84-Day Detailed Claim)',
        qVi: 'Theo Khoản 20.2.4 [Hồ sơ Khiếu nại Chi tiết Đầy đủ - Fully Detailed Claim] bản 2017, thời hạn nộp hồ sơ chi tiết là bao nhiêu ngày, và điều gì xảy ra nếu Bên khiếu nại CHỈ nộp đúng phần căn cứ hợp đồng (Statement of contractual basis) còn bỏ quên không nộp căn cứ pháp lý/số liệu chi tiết?',
        qEn: 'Under 2017 Sub-Clause 20.2.4 [Fully Detailed Claim], what is the submission deadline and what happens if the claiming Party fails to submit the statement of contractual and/or legal basis within that timeframe?',
        opts: [
          {
            vi: '42 ngày; không có hậu quả nếu nộp trễ',
            en: '42 days; no consequences for delay'
          },
          {
            vi: '84 ngày kể từ khi nhận biết sự kiện (hoặc thời hạn khác được đề xuất/chấp thuận); nếu KHÔNG nộp phần luận cứ căn cứ hợp đồng/pháp lý trong 84 ngày thì Notice of Claim bị mất hiệu lực (deemed to have lapsed)!',
            en: '84 days (or agreed period); failure to submit the contractual/legal basis statement within 84 days causes the Notice of Claim to be deemed to have lapsed'
          },
          {
            vi: '56 ngày; chỉ áp dụng cho khiếu nại tiền tệ',
            en: '56 days; applies to monetary claims only'
          },
          {
            vi: '112 ngày; không có time-bar cho Hồ sơ chi tiết',
            en: '112 days; no time-bar attaches'
          }
        ],
        ans: 1,
        expVi: 'Điểm mới RẤT QUAN TRỌNG của bản 2017 so với 1999: Ở 1999, trễ hồ sơ chi tiết 42 ngày chỉ ảnh hưởng mức độ tin cậy chứng từ chứ không vô hiệu Notice. Nhưng ở **2017 Khoản 20.2.4**, trễ **84 ngày** không nộp phần (b) (luận cứ hợp đồng/pháp lý) sẽ làm Notice of Claim bị **mất hiệu lực (lapsed)** (kèm cơ chế cảnh báo 14 ngày của Nhà tư vấn)!',
        expEn: 'Major 2017 shift: Under 20.2.4, failing to submit the contractual/legal basis within 84 days (absent an Engineer lapse check) causes the original Notice of Claim to lapse!'
      },
      {
        id: 'f4-5',
        clause: '20.2.6 (Continuing Effect)',
        qVi: 'Đối với sự kiện khiếu nại có "Tác động Liên tục" (Continuing Effect - Khoản 20.2.6), các lần nộp Hồ sơ Khiếu nại Tạm tiếp theo và Hồ sơ Khiếu nại Cuối cùng sau khi chấm dứt tác động phải nộp vào thời điểm nào?',
        qEn: 'Under Sub-Clause 20.2.6 [Claims of Continuing Effect], when must interim detailed claims and the final detailed claim be submitted?',
        opts: [
          {
            vi: 'Chỉ nộp một lần duy nhất vào cuối công trình',
            en: 'Submit once at project close only'
          },
          {
            vi: 'Nộp Hồ sơ Chi tiết tạm đầu tiên trong 84 ngày; nộp các hồ sơ tạm tiếp theo định kỳ hàng tháng (monthly intervals); và nộp Hồ sơ Chi tiết cuối cùng trong vòng 28 ngày sau khi sự kiện chấm dứt tác động',
            en: 'First detailed interim claim within 84 days, further interim claims at monthly intervals, and the final fully detailed claim within 28 days after the end of the effects'
          },
          {
            vi: 'Hàng quý (90 ngày) và cuối cùng trong 56 ngày',
            en: 'Quarterly and 56 days final'
          },
          {
            vi: 'Hàng tuần (7 ngày) cho đến khi kết thúc',
            en: 'Weekly until ended'
          }
        ],
        ans: 1,
        expVi: 'Chu kỳ chuẩn Khoản 20.2.6: Notice (28 ngày) -> Interim #1 (84 ngày) -> Interim tiếp theo (hàng tháng) -> Final Detailed Claim (28 ngày sau khi kết thúc tác động).',
        expEn: '20.2.6 cadence: 28d Notice -> 84d interim #1 -> monthly interim updates -> 28d final detailed claim after effects end.'
      },
      {
        id: 'f4-6',
        clause: '3.7.3 & 3.7.5 (NOD)',
        qVi: 'Sau khi Nhà tư vấn ban hành Quyết định (Determination) theo Khoản 3.7.2, nếu một Bên không đồng ý với Quyết định đó thì phải gửi Thông báo Không hài lòng (Notice of Dissatisfaction - NOD) trong vòng bao nhiêu ngày để Quyết định không trở thành chung thẩm và ràng buộc (Final & Binding)?',
        qEn: 'After the Engineer issues a Determination under Sub-Clause 3.7.2, within how many days must a dissatisfied Party give a Notice of Dissatisfaction (NOD) under Sub-Clause 3.7.5 to prevent the determination from becoming final and binding?',
        opts: [
          { vi: '14 ngày', en: '14 days' },
          { vi: '28 ngày kể từ ngày nhận được Thông báo Quyết định của Nhà tư vấn (hoặc 28 ngày sau hạn cuối 3.7.3 nếu Nhà tư vấn không ra quyết định đúng hạn)', en: '28 days after receiving the Engineer’s Notice of determination (or 28 days after expiry of the 3.7.3 time limit if Engineer failed to determine)' },
          { vi: '42 ngày', en: '42 days' },
          { vi: '56 ngày', en: '56 days' }
        ],
        ans: 1,
        expVi: 'Khoản 3.7.5: Mốc **28 ngày** là bắt buộc; nếu quá 28 ngày không bên nào gửi NOD, Quyết định của Nhà tư vấn tự động trở thành **Final & Binding** (nhưng nếu trễ do lỗi rõ ràng hoặc cần thi hành, vẫn theo cơ chế 3.7.5/21.7).',
        expEn: 'Sub-Clause 3.7.5 gives **28 days** to issue an NOD; otherwise the Engineer’s determination becomes final and binding.'
      },
      {
        id: 'f4-7',
        clause: '21.1 (Standing DAAB)',
        qVi: 'Theo Bộ Sách 2017 (Điều 21), điểm thay đổi cấu trúc quan trọng nhất của DAAB (Dispute Avoidance/Adjudication Board) so với DAB trong Sách Đỏ 1999 là gì?',
        qEn: 'Under Clause 21 of the 2017 FIDIC editions, what is the major structural change regarding the DAAB compared to the 1999 Red Book DAB?',
        opts: [
          {
            vi: 'DAAB bản 2017 chỉ được thành lập đột xuất (ad-hoc) khi tranh chấp đã bùng phát',
            en: 'The 2017 DAAB is appointed solely on an ad-hoc basis after a dispute arises'
          },
          {
            vi: 'Bắt buộc thiết lập DAAB thường trực (Standing DAAB) ngay từ đầu dự án trong cả 3 bộ Sách Đỏ, Vàng và Bạc 2017, kèm chức năng "Phòng ngừa Tranh chấp" (Dispute Avoidance - Khoản 21.3)',
            en: 'A Standing DAAB is mandated from project inception across all three 2017 Books (Red/Yellow/Silver), with a formal Dispute Avoidance role under Sub-Clause 21.3'
          },
          {
            vi: 'Thành viên DAAB bắt buộc phải là luật sư thuộc ICC',
            en: 'DAAB members must exclusively be ICC lawyers'
          },
          {
            vi: 'Phán quyết của DAAB có giá trị tương đương bản án chung thẩm không thể đưa ra trọng tài',
            en: 'DAAB decisions cannot be challenged in arbitration'
          }
        ],
        ans: 1,
        expVi: 'Bản 1999 Vàng & Bạc dùng DAB đột xuất (ad-hoc), dễ bị tắc ngay từ khâu thành lập khi tranh chấp xảy ra. Bản 2017 chuyển sang **Standing DAAB** cho cả 3 sách và nhấn mạnh vai trò **Dispute Avoidance** (Khoản 21.3).',
        expEn: 'All three 2017 Books mandate a Standing DAAB appointed at project start, adding Sub-Clause 21.3 [Avoidance of Disputes].'
      },
      {
        id: 'f4-8',
        clause: '21.3 (Dispute Avoidance)',
        qVi: 'Theo Khoản 21.3 [Phòng ngừa Tranh chấp], hai bên có thể cùng yêu cầu DAAB hỗ trợ/cho ý kiến tư vấn không chính thức (informal assistance) tại hiện trường; ý kiến đó có ràng buộc các bên nếu sau này vấn đề vẫn bị đưa ra tranh chấp chính thức theo 21.4 không?',
        qEn: 'Under Sub-Clause 21.3 [Avoidance of Disputes], if the Parties jointly ask the DAAB for informal assistance or non-binding advice on a disagreement, is the DAAB bound by that advice in a subsequent formal 21.4 referral?',
        opts: [
          {
            vi: 'Có, ý kiến 21.3 hoàn toàn ràng buộc và chung thẩm như phán quyết',
            en: 'Yes, 21.3 informal advice is strictly binding and final'
          },
          {
            vi: 'Không, các bên không bị ràng buộc phải tuân theo và DAAB cũng KHÔNG bị ràng buộc bởi bất kỳ quan điểm nào đã nêu trong quá trình hỗ trợ không chính thức nếu sau đó vấn đề chuyển thành tranh chấp theo 21.4',
            en: 'No — the Parties are not bound to act upon it, and the DAAB is not bound by any views expressed during informal assistance in any future 21.4 decision'
          },
          {
            vi: 'Chỉ ràng buộc Nhà thầu, không ràng buộc Chủ đầu tư',
            en: 'Binding on the Contractor only'
          },
          {
            vi: 'Mỗi thành viên DAAB bị truất quyền xét xử nếu đã tư vấn 21.3',
            en: 'DAAB is disqualified from formal adjudication afterward'
          }
        ],
        ans: 1,
        expVi: 'Khoản 21.3 đảm bảo không gian đối thoại cởi mở: tư vấn phòng ngừa tranh chấp hoàn toàn không ràng buộc các bên lẫn chính DAAB trong phán quyết chính thức sau này.',
        expEn: 'Sub-Clause 21.3 provides a safe harbor: neither the Parties nor the DAAB are bound by informal views expressed during dispute avoidance.'
      },
      {
        id: 'f4-9',
        clause: '21.4.3 (DAAB Decision 84 days)',
        qVi: 'Theo Khoản 21.4.3 [Quyết định của DAAB], DAAB phải ban hành Quyết định có lý giải (reasoned decision) trong thời hạn bao nhiêu ngày kể từ khi nhận được hồ sơ chuyển tranh chấp (Referral)?',
        qEn: 'Under Sub-Clause 21.4.3 [The DAAB’s Decision], within what time limit must the DAAB issue its reasoned decision after receiving the Referral?',
        opts: [
          { vi: '28 ngày', en: '28 days' },
          { vi: '42 ngày', en: '42 days' },
          { vi: '84 ngày (hoặc thời hạn khác do DAAB đề xuất và cả hai Bên đồng ý)', en: '84 days (or such other period as proposed by the DAAB and agreed by both Parties)' },
          { vi: '120 ngày', en: '120 days' }
        ],
        ans: 2,
        expVi: 'Con số chuẩn FIDIC 1999 & 2017: DAAB có **84 ngày** (hoặc thời hạn khác được hai bên đồng thuận; trong trường hợp chưa nộp phí DAAB có quy định riêng tại Rules) để ra Quyết định.',
        expEn: 'The DAAB has **84 days** from receipt of the Referral (or another mutually agreed period) to issue its decision.'
      },
      {
        id: 'f4-10',
        clause: '21.4.4 (NOD on DAAB)',
        qVi: 'Sau khi DAAB ban hành Quyết định theo Khoản 21.4.3, thời hạn gửi Thông báo Không hài lòng (NOD) với Quyết định DAAB là bao nhiêu ngày, và nếu đã gửi NOD đúng hạn thì Quyết định DAAB đó có hiệu lực thi hành ngay không?',
        qEn: 'After a DAAB Decision is given under 21.4.3, what is the deadline for giving an NOD under 21.4.4, and does issuing a timely NOD excuse a Party from complying with the DAAB Decision?',
        opts: [
          {
            vi: '56 ngày; gửi NOD sẽ tạm hoãn thi hành quyết định DAAB',
            en: '56 days; an NOD stays enforcement of the DAAB decision'
          },
          {
            vi: '28 ngày kể từ khi nhận Quyết định; NGAY CẢ KHI đã gửi NOD đúng hạn, Quyết định DAAB vẫn có hiệu lực RÀNG BUỘC TẠM THỜI ("binding" — phải thi hành ngay, dù chưa "final") cho đến khi được sửa đổi bằng hòa giải hoặc trọng tài!',
            en: '28 days from receipt; EVEN IF a valid NOD is given, the DAAB decision remains binding and must be promptly complied with by both Parties unless/until revised in amicable settlement or arbitration'
          },
          {
            vi: '14 ngày; mất hiệu lực ngay khi gửi NOD',
            en: '14 days; decision becomes void upon NOD'
          },
          {
            vi: '42 ngày; chỉ thi hành phần không tranh chấp',
            en: '42 days; only undisputed sums are due'
          }
        ],
        ans: 1,
        expVi: 'Nguyên lý "Pay now, argue later" cốt lõi của FIDIC: Quyết định DAAB luôn **Binding immediately** (phải thực hiện ngay dù có gửi NOD trong 28 ngày!). Gửi NOD chỉ ngăn Quyết định trở thành **Final** (chung thẩm).',
        expEn: 'Core "pay now, argue later" rule in 21.4.3/21.4.4: A 28-day NOD prevents the decision from becoming final, NOT from being immediately binding and enforceable.'
      },
      {
        id: 'f4-11',
        clause: '21.5 (Amicable Settlement)',
        qVi: 'Khi một Bên đã gửi NOD đối với Quyết định DAAB, Khoản 21.5 [Thương lượng Hòa giải - Amicable Settlement] yêu cầu chờ ít nhất bao nhiêu ngày sau ngày gửi NOD trước khi được khởi kiện ra Trọng tài (trừ khi hai bên có thỏa thuận khác)?',
        qEn: 'Once an NOD has been given regarding a DAAB Decision, how long does Sub-Clause 21.5 [Amicable Settlement] require the Parties to wait before commencing arbitration (unless otherwise agreed)?',
        opts: [
          {
            vi: 'Không cần chờ ngày nào',
            en: '0 days — arbitration may start immediately'
          },
          {
            vi: '28 ngày sau ngày gửi NOD (bản 2017 rút ngắn từ 56 ngày ở bản 1999 xuống còn 28 ngày!)',
            en: '28 days after the day on which the NOD was given (reduced in 2017 from 56 days under 1999)'
          },
          {
            vi: '56 ngày trong bản 2017',
            en: '56 days in the 2017 edition'
          },
          {
            vi: '84 ngày bắt buộc có trung gian hòa giải viên',
            en: '84 days with mandatory mediator'
          }
        ],
        ans: 1,
        expVi: 'CỰC KỲ HAY GẶP TRONG ĐỀ THI FCCM: **1999 = 56 ngày** vs **2017 = 28 ngày** (giảm một nửa thời gian chờ Amicable Settlement ở Khoản 21.5)!',
        expEn: 'Classic FCCM 1999-vs-2017 distinction: Amicable settlement waiting period dropped from **56 days (1999)** to **28 days (2017)** under Sub-Clause 21.5.'
      },
      {
        id: 'f4-12',
        clause: '21.7 (Enforcement of DAAB)',
        qVi: 'Nếu một Bên từ chối thi hành một Quyết định của DAAB (dù đó là Quyết định đã Final & Binding HAY là Quyết định chỉ mới Binding nhưng chưa Final vì bên kia đã gửi NOD), Khoản 21.7 (2017) cho phép bên còn lại chuyển thẳng hành vi không tuân thủ đó lên Trọng tài bỏ qua việc quay lại DAAB hay không?',
        qEn: 'If a Party fails to comply with a DAAB Decision (whether Final & Binding OR merely Binding following an NOD), what does Sub-Clause 21.7 (2017) permit the other Party to do?',
        opts: [
          {
            vi: 'Phải quay lại xin Quyết định thứ hai của DAAB trước khi kiện trọng tài',
            en: 'Must obtain a second DAAB decision before arbitration'
          },
          {
            vi: 'Cho phép chuyển thẳng hành vi không tuân thủ đó ra Trọng tài (ICC) theo Khoản 21.6 (bỏ qua bước DAAB lại và bỏ qua thời gian chờ 21.5) để xin phán quyết tạm thời/khẩn cấp bắt buộc thi hành ("Summary/Interim Relief") — khắc phục lỗ hổng án lệ Persero năm 1999!',
            en: 'Directly refer the failure to comply itself to Arbitration under 21.6 (bypassing further DAAB/amicable settlement) to obtain summary/interim enforcement, closing the 1999 Persero gap'
          },
          {
            vi: 'Chỉ được khởi kiện tại tòa án địa phương nơi thi công',
            en: 'Only local courts have jurisdiction'
          },
          {
            vi: 'Phải chờ hết toàn bộ dự án mới được kiện',
            en: 'Must wait until project completion'
          }
        ],
        ans: 1,
        expVi: 'Khoản 21.7 (2017) mở rộng rõ rệt so với bản 1999 (vốn gây tranh cãi trong vụ án *Persero* nổi tiếng tại Singapore): Bao trùm CẢ Quyết định binding-not-final lẫn final-and-binding, cho phép đưa thẳng việc không tuân thủ ra Trọng tài để đòi thanh toán/thi hành ngay.',
        expEn: '2017 Sub-Clause 21.7 explicitly covers BOTH binding and final-and-binding DAAB decisions, resolving the famous 1999 *Persero* enforceability controversy.'
      },
      {
        id: 'f4-13',
        clause: '21.8 (No DAAB in Place)',
        qVi: 'Theo Khoản 21.8 [Không có DAAB đang hoạt động], nếu phát sinh tranh chấp vào thời điểm không có DAAB được thành lập (do hết nhiệm kỳ hoặc các bên không hoàn tất bổ nhiệm dù đã làm đúng thủ tục), tranh chấp có thể được đưa đi đâu?',
        qEn: 'Under Sub-Clause 21.8 [No DAAB In Place], if a Dispute arises when there is no DAAB in place (e.g., expiry of DAAB appointment or deadlock in constituting it), what remedy applies?',
        opts: [
          {
            vi: 'Khoản 21.4 và 21.5 không áp dụng; tranh chấp có thể được đưa THẲNG ra Trọng tài theo Khoản 21.6 mà không cần qua DAAB trước',
            en: 'Sub-Clauses 21.4 and 21.5 do not apply, and the Dispute may be referred directly to arbitration under Sub-Clause 21.6'
          },
          {
            vi: 'Tranh chấp bị vô hiệu cho đến khi bổ nhiệm xong DAAB mới',
            en: 'Dispute is suspended indefinitely until a DAAB is constituted'
          },
          {
            vi: 'Nhà tư vấn thay thế DAAB ban hành phán quyết chung thẩm',
            en: 'Engineer substitutes for the DAAB'
          },
          {
            vi: 'Chuyển cho chủ tịch hiệp hội FIDIC xét xử',
            en: 'FIDIC President adjudicates the dispute'
          }
        ],
        ans: 0,
        expVi: 'Khoản 21.8 đảm bảo không có "bế tắc pháp lý" khi không có DAAB hiện hữu: cho phép đi thẳng tới Trọng tài Khoản 21.6.',
        expEn: 'Sub-Clause 21.8 prevents procedural deadlock by letting Parties proceed straight to arbitration under 21.6 if no DAAB is in place.'
      },
      {
        id: 'f4-14',
        clause: '20.2.5 (Waiver Factors)',
        qVi: 'Theo Khoản 20.2.5 (2017), khi xem xét liệu một Thông báo Khiếu nại nộp muộn quá 28 ngày có nên được miễn trừ time-bar hay không, Nhà tư vấn / DAAB có thể xem xét tình tiết nào sau đây?',
        qEn: 'Under Sub-Clause 20.2.5 (2017), which circumstance may be taken into account when considering whether a late Notice of Claim (>28 days) should be accepted despite non-compliance with the time limit?',
        opts: [
          {
            vi: 'Việc bên nhận khiếu nại CÓ hay KHÔNG bị thiệt hại (prejudice) do việc chậm gửi Thông báo, VÀ chứng cứ cho thấy bên kia đã biết trước về sự kiện hoặc căn cứ cơ bản',
            en: 'Whether or to what extent the other Party would be prejudiced by accepting the late Notice, and evidence of the other Party’s prior knowledge of the event or basis'
          },
          {
            vi: 'Quốc tịch của Giám đốc dự án Nhà thầu',
            en: 'Nationality of Contractor’s Project Manager'
          },
          {
            vi: 'Tài khoản ngân hàng của Chủ đầu tư có đủ tiền hay không',
            en: 'Employer’s liquidity ratio'
          },
          {
            vi: 'Nhà tư vấn hoàn toàn bị cấm cân nhắc mọi yếu tố ngoại lệ trong bản 2017',
            en: 'Engineer is strictly prohibited from considering any waiver factors'
          }
        ],
        ans: 0,
        expVi: 'Khoản 20.2.5 liệt kê 3 tiêu chí cân nhắc: (a) mức độ gây thiệt hại (prejudice) cho bên kia nếu chấp nhận; (b) chứng cứ bên kia đã có nhận thức trước đó về sự kiện (đặc biệt trong 3.7); và (c) chứng cứ chứng minh bên kia có biết căn cứ pháp lý/hợp đồng liên quan.',
        expEn: 'Sub-Clause 20.2.5 specifies evaluating prejudice to the other Party and evidence of the other Party’s prior knowledge of the underlying event/basis.'
      }
    ]
  },
  {
    id: 'set-5-termination-risk',
    badge: 'Set 5 · 12 câu',
    titleVi: 'Đề 5: Tạm ngừng, Chấm dứt, Rủi ro, Sự kiện Ngoại lệ & Đấu thầu (Cl. 15–19)',
    titleEn: 'Set 5: Termination, Risks, Exceptional Events & Procurement (Cl. 15–19)',
    durationMin: 30,
    questions: [
      {
        id: 'f5-1',
        clause: '15.2 (Termination Notice)',
        qVi: 'Theo Khoản 15.2 [Chấm dứt bởi Chủ đầu tư], nếu Nhà thầu không khắc phục vi phạm sau Thông báo Yêu cầu Khắc phục (15.1) hoặc các lỗi theo 15.2.1(a)–(e), Chủ đầu tư phải gửi Thông báo ý định chấm dứt trước bao nhiêu ngày trước khi quyền chấm dứt phát sinh hiệu lực (lưu ý khác với trường hợp phá sản/hối lộ 15.2.1(f)–(h))?',
        qEn: 'Under Sub-Clause 15.2 [Termination for Contractor’s Default], for defaults listed in 15.2.1(a)–(e) (such as failing a Notice to Correct under 15.1), how many days’ Notice must the Employer give before terminating (distinguished from immediate termination grounds like insolvency/corruption)?',
        opts: [
          { vi: '7 ngày', en: '7 days' },
          { vi: '14 ngày (trong bản 2017 là 14 ngày Notice ý định chấm dứt theo 15.2.2 rồi mới phát hành Notice chấm dứt lần 2 nếu Nhà thầu không khắc phục trong 14 ngày)', en: '14 days (in 2017, a 14-day Notice of intention to terminate followed by a second Notice if uncured; immediate for insolvency/corruption)' },
          { vi: '28 ngày', en: '28 days' },
          { vi: '42 ngày', en: '42 days' }
        ],
        ans: 1,
        expVi: 'Khoản 15.2 quy định **14 ngày** cho các lỗi vi phạm thông thường 15.2.1(a)–(e) (riêng phá sản (g), hối lộ/tham nhũng (h), hoặc chuyển nhượng trái phép (f) thì được chấm dứt ngay lập tức bằng Notice). Bản 2017 làm rõ quy trình 2 Thông báo để tránh chấm dứt vội vàng.',
        expEn: 'Sub-Clause 15.2 requires 14 days’ Notice for curable/operational defaults (immediate only for specified severe events like insolvency/corruption/unauthorized assignment).'
      },
      {
        id: 'f5-2',
        clause: '15.5 & 15.6 (Termination for Convenience)',
        qVi: 'Điểm cải tiến lớn nhất của Khoản 15.5–15.7 [Chấm dứt vì Sự thuận tiện của Chủ đầu tư] trong ấn bản 2017 so với bản 1999 là gì?',
        qEn: 'What is the major enhancement to Employer’s Termination for Convenience under Sub-Clauses 15.5–15.7 in the 2017 editions compared to 1999?',
        opts: [
          {
            vi: 'Chủ đầu tư bị cấm chấm dứt vì sự thuận tiện ở bản 2017',
            en: 'Termination for convenience was deleted in 2017'
          },
          {
            vi: '1999 không cho Nhà thầu đòi mất lợi nhuận (loss of profit) và thậm chí không thu hồi được ngay toàn bộ phần chưa làm; 2017 (Khoản 15.6) CHO PHÉP Nhà thầu được hưởng cả mất lợi nhuận hoặc tổn thất/thiệt hại khác ("loss of profit or other losses and damages suffered") khi Chủ đầu tư chấm dứt vì sự thuận tiện!',
            en: '2017 expressly entitles the Contractor to recover loss of profit or other losses/damages suffered due to Employer’s termination for convenience (unlike 1999 which excluded loss of profit under 15.5)'
          },
          {
            vi: 'Thời hạn hiệu lực chấm dứt rút xuống 3 ngày',
            en: 'Notice period reduced to 3 days'
          },
          {
            vi: 'Chủ đầu tư được quyền ngay lập tức thuê nhà thầu khác làm tiếp phần còn lại với giá rẻ hơn',
            en: 'Employer may immediately hand remaining works to another contractor for lower cost'
          }
        ],
        ans: 1,
        expVi: 'So sánh cực kỳ quan trọng trong FCCM: Ở **1999 Khoản 15.5**, chấm dứt thuận tiện được thanh toán theo 19.6 (chỉ chi phí đã làm + giải thể, **KHÔNG** có Loss of Profit). Sang **2017 Khoản 15.6**, Chủ đầu tư phải trả **Cost + Loss of Profit** (và không được chấm dứt để giao người khác làm với giá rẻ hơn)!',
        expEn: 'Major 1999 vs 2017 change: Under 2017 Sub-Clause 15.6, the Contractor recovers **loss of profit and other losses/damages** upon termination for Employer’s convenience (unavailable under 1999 15.5).'
      },
      {
        id: 'f5-3',
        clause: '16.1 (Contractor Suspension)',
        qVi: 'Theo Khoản 16.1 [Nhà thầu Tạm ngừng Công việc], nếu Chủ đầu tư chậm thanh toán (14.7) hoặc không thu xếp tài chính (2.4) hoặc Nhà tư vấn không cấp IPC (14.6), Nhà thầu phải gửi Thông báo trước bao nhiêu ngày trước khi được quyền tạm ngừng thi công (hoặc giảm tốc độ thi công)?',
        qEn: 'Under Sub-Clause 16.1 [Suspension by Contractor], how many days’ prior Notice must the Contractor give before suspending work or reducing the rate of work due to non-payment, non-certification (14.6) or Employer financial evidence default (2.4)?',
        opts: [
          { vi: '7 ngày', en: '7 days' },
          { vi: '14 ngày', en: '14 days' },
          { vi: 'Không ít hơn 21 ngày Notice (và có quyền hưởng EOT + Cost + Profit cho thời gian tạm ngừng đó)', en: 'Not less than 21 days’ Notice (entitling Contractor to EOT + Cost plus Profit)' },
          { vi: '28 ngày', en: '28 days' }
        ],
        ans: 2,
        expVi: 'Mốc đặc trưng của Khoản 16.1 trong cả 1999 & 2017: Nhà thầu gửi Notice **không ít hơn 21 ngày** trước khi tạm ngừng/giảm tốc độ và được hưởng cả EOT lẫn **Cost plus Profit**!',
        expEn: 'Sub-Clause 16.1 requires not less than **21 days’ Notice** before suspension, entitling the Contractor to EOT and Cost plus Profit.'
      },
      {
        id: 'f5-4',
        clause: '16.2 (Contractor Termination)',
        qVi: 'Theo Khoản 16.2 [Chấm dứt bởi Nhà thầu] (2017), nếu Chủ đầu tư không thanh toán số tiền đến hạn theo Khoản 14.7 dù Nhà thầu đã gửi Notice 16.1, tổng thời gian quá hạn kể từ hạn chót 14.7 mà chưa nhận được tiền để Nhà thầu có quyền gửi Thông báo 14 ngày chấm dứt hợp đồng là bao nhiêu ngày?',
        qEn: 'Under Sub-Clause 16.2 [Termination by Contractor] (2017), if the Employer fails to pay sums due under Sub-Clause 14.7, how many days after expiry of the 14.7 payment period does the Contractor gain the right to give a 14-day termination notice?',
        opts: [
          { vi: '14 ngày sau hạn 14.7', en: '14 days after 14.7 expiry' },
          { vi: '42 ngày sau khi hết hạn thanh toán tại Khoản 14.7 (khoản 16.2.1(b)/(c))', en: '42 days after expiry of the time within which payment is to be made under Sub-Clause 14.7' },
          { vi: '84 ngày sau hạn 14.7', en: '84 days after 14.7 expiry' },
          { vi: '7 ngày sau hạn 14.7', en: '7 days after 14.7 expiry' }
        ],
        ans: 1,
        expVi: 'Khoản 16.2(c): Không nhận được khoản tiền trong vòng **42 ngày** sau khi hết thời hạn thanh toán theo Khoản 14.7 (lưu ý: thời hạn cho Employer không cấp bằng chứng tài chính theo 2.4 cũng là 42 ngày sau khi gửi Notice 16.1!).',
        expEn: 'Under Sub-Clause 16.2, non-payment continuing **42 days** after the 14.7 payment deadline entitles the Contractor to give a 14-day Notice of termination.'
      },
      {
        id: 'f5-5',
        clause: '18.2 (Exceptional Event Notice)',
        qVi: 'Theo Điều 18 [Sự kiện Ngoại lệ - Exceptional Events] (đổi tên từ "Force Majeure" Điều 19 bản 1999), nếu một Bên bị ngăn cản thực hiện nghĩa vụ do Sự kiện Ngoại lệ, Bên đó phải gửi Thông báo (Notice) trong vòng bao nhiêu ngày kể từ khi biết (hoặc đáng lẽ biết) sự kiện?',
        qEn: 'Under Clause 18 [Exceptional Events] (formerly Clause 19 Force Majeure in 1999), within how many days after becoming aware (or when it should have become aware) of an Exceptional Event must a Party give Notice under Sub-Clause 18.2?',
        opts: [
          { vi: '7 ngày', en: '7 days' },
          { vi: '14 ngày (và nếu sự kiện kéo dài, phải cập nhật định kỳ mỗi 28 ngày theo 18.2)', en: '14 days (with ongoing 28-day updates if the event continues)' },
          { vi: '28 ngày', en: '28 days' },
          { vi: '42 ngày', en: '42 days' }
        ],
        ans: 1,
        expVi: 'Chú ý cái bẫy kinh điển: Notice of Claim tại **20.2.1 là 28 ngày**, nhưng Notice cho Sự kiện Ngoại lệ (Force Majeure / Exceptional Event) tại **18.2 là 14 ngày** (kèm cập nhật mỗi 28 ngày nếu tiếp diễn)!',
        expEn: 'Classic FCCM trap: General Claims Notice (20.2.1) is 28 days, whereas **Exceptional Event Notice (18.2)** is **14 days** (plus 28-day continuing notices).'
      },
      {
        id: 'f5-6',
        clause: '18.5 (Optional Termination)',
        qVi: 'Theo Khoản 18.5 [Tùy chọn Chấm dứt - Optional Termination], nếu việc thi công về cơ bản toàn bộ Công trình đang dở dang bị ngăn cản bởi Sự kiện Ngoại lệ (đã thông báo theo 18.2) trong khoảng thời gian nào thì MỘT TRONG HAI Bên được quyền gửi Notice 7 ngày chấm dứt Hợp đồng?',
        qEn: 'Under Sub-Clause 18.5 [Optional Termination], either Party may give a 7-day Notice of termination if execution of substantially all Works in progress is prevented by a notified Exceptional Event for what duration?',
        opts: [
          { vi: 'Liên tục 28 ngày hoặc cộng dồn 56 ngày', en: '28 continuous days or 56 aggregate days' },
          { vi: 'Liên tục 84 ngày, hoặc nhiều đợt cộng dồn hơn 140 ngày do cùng một Sự kiện Ngoại lệ đã thông báo', en: 'A continuous period of 84 days, or multiple periods totalling more than 140 days due to the same notified Exceptional Event' },
          { vi: 'Liên tục 120 ngày hoặc cộng dồn 180 ngày', en: '120 continuous days or 180 aggregate days' },
          { vi: 'Chỉ Chủ đầu tư mới có quyền chấm dứt theo Khoản 18.5', en: 'Only the Employer may terminate under 18.5' }
        ],
        ans: 1,
        expVi: 'Mốc chuẩn **84 ngày liên tục** hoặc **cộng dồn > 140 ngày** tại Khoản 18.5 (19.6 bản 1999) áp dụng đối xứng cho cả hai bên (7 ngày Notice hiệu lực chấm dứt).',
        expEn: 'Sub-Clause 18.5 threshold: **84 continuous days** or **>140 days** in multiple periods for the same notified Exceptional Event (7-day termination Notice).'
      },
      {
        id: 'f5-7',
        clause: '18.4 (Consequences EE)',
        qVi: 'Khi xảy ra Sự kiện Ngoại lệ như thiên tai bão lũ nghiêm trọng không thuộc nhóm chiến tranh/bạo loạn tại Khoản 18.1(a)–(e), theo Khoản 18.4 [Hệ quả của Sự kiện Ngoại lệ], Nhà thầu được quyền hưởng gì?',
        qEn: 'If a Contractor suffers delay and incurs Cost due to a natural catastrophe Exceptional Event (Clause 18.1(f), outside war/hostilities/terrorism 18.1(a)–(e)), what is the Contractor entitled to under Sub-Clause 18.4?',
        opts: [
          { vi: 'Cả EOT, Cost và Profit', en: 'EOT, Cost, and Profit' },
          { vi: 'EOT và Cost (nhưng không có Profit)', en: 'EOT and Cost (without Profit)' },
          { vi: 'Chỉ được EOT (Gia hạn Thời gian), KHÔNG được Cost cho thiên tai thông thường 18.1(f); chỉ các sự kiện nhóm chính trị/chiến tranh/bạo loạn tại 18.1(a)–(e) (nếu xảy ra trong Nước sở tại đối với (b)–(e)) mới được bồi hoàn thêm Cost!', en: 'EOT ONLY — no Cost for natural catastrophes under 18.1(f); Cost (without Profit) is only recoverable for war/hostilities/riots under 18.1(a)–(e)' },
          { vi: 'Không được hưởng cả EOT lẫn Cost', en: 'Neither EOT nor Cost' }
        ],
        ans: 2,
        expVi: 'Phân biệt cốt lõi Khoản 18.4: Thiên tai (`18.1(f)`) là rủi ro trung lập "Time yes, Money no" (chỉ EOT, mỗi bên tự gánh chi phí); chỉ chiến tranh/đình công diện rộng (`18.1(a)-(e)`) mới được **Cost** (nhưng không có Profit).',
        expEn: 'Crucial distinction under 18.4: Natural catastrophes (18.1(f)) grant EOT only ("time, no money"); war/strikes/riots (18.1(a)–(e)) grant EOT + Cost (no Profit).'
      },
      {
        id: 'f5-8',
        clause: '1.15 (Limitation of Liability)',
        qVi: 'Theo Khoản 1.15 [Giới hạn Trách nhiệm - Limitation of Liability] (bản 2017, chuyển từ 17.6 bản 1999), những khoản nào KHÔNG được loại trừ khỏi giới hạn trách nhiệm bồi thường thiệt hại gián tiếp hoặc trần trách nhiệm tổng thể của Nhà thầu?',
        qEn: 'Under Sub-Clause 1.15 [Limitation of Liability] (formerly 17.6 in 1999), which liabilities fall OUTSIDE the exclusion of consequential loss and the overall liability cap?',
        opts: [
          { vi: 'Mọi khoản tiền chậm trễ phát sinh đều miễn hoàn toàn', en: 'All delay damages are excluded' },
          { vi: 'Tiền bồi thường chậm trễ (8.8), Thuế/Nghĩa vụ thay thế sau chấm dứt (15.4), Nghĩa vụ bồi hoàn sở hữu trí tuệ (17.3), Bồi hoàn thiết kế 17.4 (Yel/Sil), và các trường hợp Gian lận/Cố ý vi phạm/Hành vi liều lĩnh (Fraud, gross negligence, deliberate default, reckless misconduct)', en: 'Delay Damages (8.8), Termination costs (15.4), IP/care indemnities (17.3/17.4), and cases of fraud, gross negligence, deliberate default or reckless misconduct' },
          { vi: 'Chỉ giới hạn ở mức 10% Giá Hợp đồng cho mọi trường hợp kể cả gian lận', en: 'Strictly capped at 10% even for fraud' },
          { vi: 'Trách nhiệm của Chủ đầu tư cũng bị khống chế bởi trần 1.15 giống Nhà thầu', en: 'Employer’s payment liability for Price is capped identically' }
        ],
        ans: 1,
        expVi: 'Khoản 1.15 (2017) liệt kê rành mạch các ngoại lệ không bị chặn bởi trần trách nhiệm tổng thể hoặc loại trừ thiệt hại gián tiếp (gồm 8.8 Delay Damages, 15.4(c), 17.3, 17.4, và fraud/gross negligence/deliberate default/reckless misconduct).',
        expEn: '2017 Sub-Clause 1.15 carves out 8.8, 15.4(c), 17.3, 17.4 and fraud/gross negligence/deliberate default/reckless misconduct from liability caps.'
      },
      {
        id: 'f5-9',
        clause: '17.1 & 17.2 (Care of Works)',
        qVi: 'Theo Khoản 17.2 [Trách nhiệm đối với Bảo quản Công trình] (2017), nếu Công trình bị hư hỏng do sai sót trong thiết kế do Chủ đầu tư thực hiện (ở Sách Đỏ) hoặc do Chủ đầu tư sử dụng Công trình trước, Nhà thầu phải làm gì và quyền lợi ra sao?',
        qEn: 'Under Sub-Clause 17.2 [Liability for Care of the Works] (2017), if loss or damage to the Works arises from an Employer’s Risk (such as Employer-provided design defect or Employer pre-taking-over occupation), what must the Contractor do and what are its entitlements?',
        opts: [
          {
            vi: 'Từ chối sửa chữa vì không phải lỗi Nhà thầu',
            en: 'Refuse rectification as outside liability'
          },
          {
            vi: 'Thông báo ngay cho Nhà tư vấn, khắc phục hư hỏng ở mức độ Nhà tư vấn yêu cầu, và được quyền đòi EOT + Cost + Profit (riêng Sự kiện Ngoại lệ tại 17.2(d) được EOT + Cost theo mức tương ứng)',
            en: 'Give prompt Notice to the Engineer, rectify the loss/damage as instructed, and claim EOT + Cost + Profit (or EOT + Cost where caused by specified risks like Employer risks/Exceptional Events)'
          },
          {
            vi: 'Tự bỏ tiền sửa chữa không được hoàn trả',
            en: 'Rectify at Contractor’s own cost'
          },
          {
            vi: 'Hợp đồng tự động chấm dứt',
            en: 'Contract terminates immediately'
          }
        ],
        ans: 1,
        expVi: 'Khoản 17.2 (17.4 bản 1999): Nhà thầu khắc phục hư hỏng theo chỉ thị của Nhà tư vấn và được bồi hoàn đầy đủ EOT + Cost (+ Profit đối với lỗi thuộc Chủ đầu tư).',
        expEn: 'Under 17.2, Contractor rectifies instructed damage from Employer risks and recovers EOT + Cost (plus Profit where attributable to Employer design/default).'
      },
      {
        id: 'f5-10',
        clause: '19.1 (Insurance 2017)',
        qVi: 'So với Điều 18 của bản 1999 (vốn sử dụng khái niệm "Insuring Party" dễ gây lúng túng), Điều 19 [Bảo hiểm] trong bộ FIDIC 2017 quy định mặc định bên nào chịu trách nhiệm mua các loại bảo hiểm chính (trừ khi quy định khác)?',
        qEn: 'How did Clause 19 [Insurance] of the 2017 editions simplify Clause 18 of 1999 ("Insuring Party") regarding who effects the primary insurances?',
        opts: [
          {
            vi: 'Chủ đầu tư luôn mặc định là bên mua toàn bộ mọi hợp đồng bảo hiểm',
            en: 'The Employer is always the insuring party for every policy'
          },
          {
            vi: 'Giao trực tiếp và mặc định cho Nhà thầu chịu trách nhiệm mua hầu hết các bảo hiểm (Công trình 19.2.1, Hàng hóa 19.2.2, Trách nhiệm thiết kế 19.2.3, Thiệt hại bên thứ ba 19.2.4, Nhân sự 19.2.5) trừ khi Hợp đồng quy định Chủ đầu tư mua',
            en: 'Directly assigns responsibility for effecting the insurances to the Contractor (Works, Goods, Design PI, Injury/Damage, Personnel) unless stated otherwise'
          },
          {
            vi: 'Không yêu cầu bảo hiểm trách nhiệm nghề nghiệp thiết kế trong Sách Vàng',
            en: 'Design Professional Indemnity insurance is not required in Yellow Book'
          },
          {
            vi: 'Nhà tư vấn là bên mua bảo hiểm Công trình',
            en: 'The Engineer effects the Works insurance'
          }
        ],
        ans: 1,
        expVi: 'Bản 2017 Điều 19 loại bỏ khái niệm "Insuring Party" phức tạp của bản 1999 Điều 18 và gán thẳng cho Nhà thầu mua các bảo hiểm chuẩn (bao gồm thêm bảo hiểm Trách nhiệm Nghề nghiệp thiết kế tại Khoản 19.2.3!).',
        expEn: 'Clause 19 (2017) replaces the complex 1999 "Insuring Party" structure, assigning insurance procurement directly to the Contractor and adding design PI insurance (19.2.3).'
      },
      {
        id: 'f5-11',
        clause: 'Procurement Guide',
        qVi: 'Theo Hướng dẫn Thủ tục Đấu thầu FIDIC (FIDIC Procurement Procedures Guide - 1st Ed. 2011, nằm trong giáo trình thi FCCM), phương thức đấu thầu tiêu chuẩn hai giai đoạn (Two-Stage Tendering) thường được khuyến nghị ưu tiên trong trường hợp nào?',
        qEn: 'Under the FIDIC Procurement Procedures Guide (1st Ed., 2011, included in the FCCM syllabus), when is Two-Stage Tendering particularly recommended?',
        opts: [
          {
            vi: 'Dự án san lấp mặt bằng rất đơn giản đã có đầy đủ bản vẽ thi công chi tiết',
            en: 'Simple earthworks with complete detailed Employer designs'
          },
          {
            vi: 'Dự án phức tạp / Design & Build cần khai thác sớm chuyên môn thiết kế, tối ưu chi phí và giải pháp thi công của Nhà thầu trước khi chốt Giá Hợp đồng trọn gói cuối cùng',
            en: 'Complex / Design-Build projects needing early Contractor involvement to refine technical solutions and mitigate price contingencies before locking final Contract Price'
          },
          {
            vi: 'Khi muốn bỏ qua khâu tiền tuyển chọn (prequalification)',
            en: 'When skipping prequalification completely'
          },
          {
            vi: 'Chỉ dùng cho hợp đồng dưới 1 triệu USD',
            en: 'Only for contracts under $1M'
          }
        ],
        ans: 1,
        expVi: 'Trong FIDIC Procurement Guide 2011 (phần nhận thức cơ bản trong kỳ thi FCCM), Two-Stage Tendering giúp giảm rủi ro định giá ẩn ở giai đoạn 1 và chốt phương án kỹ thuật/giá ở giai đoạn 2.',
        expEn: 'FIDIC Procurement Procedures Guide recommends Two-Stage Tendering for complex projects needing early Contractor input before finalizing commercial terms.'
      },
      {
        id: 'f5-12',
        clause: '2.4 (Employer Financial)',
        qVi: 'Bản 2017 (Khoản 2.4 - Bố trí Tài chính của Chủ đầu tư) siết chặt nghĩa vụ của Chủ đầu tư như thế nào so với bản 1999?',
        qEn: 'How did Sub-Clause 2.4 [Employer’s Financial Arrangements] in the 2017 editions tighten Employer obligations compared to 1999?',
        opts: [
          {
            vi: 'Xóa bỏ nghĩa vụ cung cấp bằng chứng tài chính',
            en: 'Removed the obligation to provide financial evidence'
          },
          {
            vi: 'Chủ đầu tư phải ghi sẵn chi tiết bố trí tài chính trong Contract Data ngay khi ký hợp đồng, và nếu có thay đổi trọng yếu phải tự động gửi Notice cho Nhà thầu, đồng thời Nhà thầu có quyền yêu cầu bằng chứng hợp lý khi Thay đổi > 10% (hoặc > 30% tổng cộng), tạm ngừng hoặc trễ thanh toán',
            en: 'Requires financial arrangements to be stated upfront in Contract Data, obliges Employer to notify material changes proactively, and specifies exact triggers (Variation >10% / >30%, 16.1 suspension, or non-payment) to demand evidence within 28 days'
          },
          {
            vi: 'Thời hạn cung cấp bằng chứng tăng từ 28 ngày lên 90 ngày',
            en: 'Response window extended from 28 days to 90 days'
          },
          {
            vi: 'Chỉ áp dụng cho hợp đồng vốn tư nhân',
            en: 'Applies only to private funding'
          }
        ],
        ans: 1,
        expVi: 'Khoản 2.4 (2017) đặt ra các kích hoạt cụ thể (>10% single Variation / >30% cumulative / 14.7 delayed payment / 16.1 suspension) để Nhà thầu yêu cầu bằng chứng tài chính trong **28 ngày**.',
        expEn: '2017 Sub-Clause 2.4 adds upfront Contract Data disclosure, proactive notice of material changes, and specific triggers (>10% / >30% Variations, non-payment) for 28-day evidence requests.'
      }
    ]
  }
];
