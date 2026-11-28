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
    level: 1,
    levelBadge: '⭐',
    levelVi: 'Cơ bản',
    levelEn: 'Foundation',
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
    level: 2,
    levelBadge: '⭐⭐',
    levelVi: 'Trung cấp',
    levelEn: 'Intermediate',
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
    level: 2,
    levelBadge: '⭐⭐',
    levelVi: 'Trung cấp',
    levelEn: 'Intermediate',
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
    level: 3,
    levelBadge: '⭐⭐⭐',
    levelVi: 'Nâng cao',
    levelEn: 'Advanced',
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
    level: 3,
    levelBadge: '⭐⭐⭐',
    levelVi: 'Nâng cao',
    levelEn: 'Advanced',
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
  },
  {
    id: 'set-6-epc-design-build',
    level: 2,
    levelBadge: '⭐⭐',
    levelVi: 'Trung cấp',
    levelEn: 'Intermediate',
    badge: 'Set 6 · 12 câu',
    titleVi: 'Đề 6: Sách Bạc EPC & Sách Vàng Design-Build Chuyên sâu',
    titleEn: 'Set 6: Silver Book EPC & Yellow Book Design-Build Deep Dive',
    durationMin: 30,
    questions: [
      {
        id: 'f6-1',
        clause: 'Yel 1.9 vs Sil 5.1',
        qVi: 'Về Sai sót trong Yêu cầu của Chủ đầu tư (Errors in Employer’s Requirements), điểm khác biệt lớn nhất giữa Sách Vàng (Yellow Book) và Sách Bạc (Silver Book) là gì?',
        qEn: 'Regarding Errors in the Employer’s Requirements, what is the critical difference between the Yellow Book (Sub-Clause 1.9) and the Silver Book (Sub-Clause 5.1)?',
        opts: [
          { vi: 'Cả hai sách đều miễn trách nhiệm cho Nhà thầu như nhau', en: 'Both books grant identical Contractor relief' },
          { vi: 'Ở Sách Vàng (1.9), nếu nhà thầu có kinh nghiệm không thể phát hiện sai sót bằng cẩn trọng hợp lý trước Base Date/thời hạn 1.9, Nhà thầu được EOT + Cost + Profit; ở Sách Bạc (5.1), Nhà thầu chịu trách nhiệm thẩm tra và GÁNH RỦI RO sai sót (trừ 4 ngoại lệ cụ thể tại 5.1(a)–(d) như định nghĩa mục đích sử dụng)', en: 'In Yellow Book (1.9), unforeseeable ER errors entitle EOT + Cost + Profit; in Silver Book (5.1), Contractor verifies and bears error risk except for narrow 5.1(a)–(d) Employer items' },
          { vi: 'Sách Vàng bắt Nhà thầu tự chịu 100% sai sót trong ER', en: 'Yellow Book places 100% of ER error risk on Contractor' },
          { vi: 'Sách Bạc cho phép khiếu nại mọi sai sót kể cả rõ ràng nhất', en: 'Silver Book allows claiming all ER errors' }
        ],
        ans: 1,
        expVi: 'So sánh chuẩn FCCM giữa Yellow Book 1.9 (chỉ kiểm tra lỗi mà nhà thầu kinh nghiệm không thấy được -> EOT+Cost+Profit) và Silver Book 5.1 (trách nhiệm tuyệt đối trừ 4 mục (a) thông tin ghi rõ không thể xác minh/bất biến, (b) định nghĩa mục đích công trình, (c) tiêu chí kiểm định hiệu năng, (d) sai sót mà Nhà thầu không thể kiểm tra ngay trước Base Date không tính riêng).',
        expEn: 'Yellow 1.9 relieves unforeseeable ER errors; Silver 5.1 makes Contractor verify ER, excluding only the narrow 5.1(a)–(d) Employer-retained items.'
      },
      {
        id: 'f6-2',
        clause: 'Sil 4.10 vs RB/YB 4.10',
        qVi: 'Theo Khoản 4.10 [Sử dụng Dữ liệu Công trường] trong Sách Bạc (Silver Book), ai chịu trách nhiệm về tính chính xác, đầy đủ và khả năng sử dụng của dữ liệu công trường do Chủ đầu tư cung cấp?',
        qEn: 'Under Silver Book Sub-Clause 4.10 [Use of Site Data], who bears responsibility for the accuracy, sufficiency, and completeness of Site Data supplied by the Employer?',
        opts: [
          { vi: 'Chủ đầu tư chịu trách nhiệm hoàn toàn về độ chính xác dữ liệu đã cấp', en: 'Employer guarantees full accuracy of supplied Site Data' },
          { vi: 'Nhà thầu chịu trách nhiệm tự xác minh và diễn giải mọi dữ liệu đó; Chủ đầu tư không chịu trách nhiệm (ngoại trừ các phần rơi vào ngoại lệ Khoản 5.1)', en: 'The Contractor is responsible for verifying and interpreting all such data, and the Employer has no responsibility for accuracy/sufficiency (save as stated in 5.1)' },
          { vi: 'Nhà tư vấn chịu trách nhiệm thẩm định dữ liệu', en: 'The Engineer warrants the Site Data' },
          { vi: 'Chia 50% rủi ro giữa các bên', en: 'Risk is split 50/50' }
        ],
        ans: 1,
        expVi: 'Điểm then chốt của EPC Silver Book Khoản 4.10: "The Employer shall have no responsibility for the accuracy, sufficiency or completeness of such data..." — khác hẳn Sách Đỏ/Vàng (nơi Nhà thầu chỉ cần diễn giải hợp lý dữ liệu Chủ đầu tư phải cung cấp đầy đủ).',
        expEn: 'Silver Book 4.10 expressly disclaims Employer liability for accuracy/sufficiency/completeness of Site Data (except narrow Sub-Clause 5.1 carve-outs).'
      },
      {
        id: 'f6-3',
        clause: '5.2.2 (Review Period 21d)',
        qVi: 'Trong Sách Vàng & Sách Bạc 2017 Khoản 5.2.2 [Xem xét Tài liệu của Nhà thầu - Review], thời hạn xem xét của Nhà tư vấn/Đại diện Chủ đầu tư là bao nhiêu ngày kể từ khi nhận hồ sơ thiết kế, và điều gì xảy ra nếu họ không phản hồi?',
        qEn: 'Under 2017 Yellow and Silver Books Sub-Clause 5.2.2 [Review of Contractor’s Documents], what is the Review Period and what happens upon silence?',
        opts: [
          { vi: '14 ngày; hết hạn tự động coi là bác bỏ thiết kế', en: '14 days; deemed rejected upon expiry' },
          { vi: '21 ngày (trừ khi ER ghi khác); nếu không gửi Notice phản đối trong 21 ngày thì được coi là đã gửi Notice of No-objection để Nhà thầu chuyển bước thi công', en: '21 days (unless otherwise stated in ER); failure to notify non-compliance within 21 days deems a Notice of No-objection' },
          { vi: '28 ngày; Nhà thầu phải chờ văn bản phê duyệt đóng dấu mới được làm', en: '28 days; Contractor must wait indefinitely for written approval' },
          { vi: '42 ngày không có cơ chế mặc định', en: '42 days with no deeming mechanism' }
        ],
        ans: 1,
        expVi: 'Khoản 5.2.2 áp dụng Review Period 21 ngày kèm cơ chế deeming Notice of No-objection (giúp tránh kẹt phê duyệt thiết kế). Lưu ý bản 2017 cũng nhấn mạnh: Dù có Notice of No-objection hay không, Nhà thầu KHÔNG được miễn trách nhiệm thiết kế!',
        expEn: 'Sub-Clause 5.2.2 provides a 21-day Review Period with a deemed Notice of No-objection, without relieving Contractor’s design responsibility.'
      },
      {
        id: 'f6-4',
        clause: 'Cl. 12 Yel/Sil (Tests after Completion)',
        qVi: 'Điều 12 trong Sách Vàng & Sách Bạc [Kiểm định sau khi Hoàn thành - Tests after Completion] khác biệt gì căn bản so với Điều 12 của Sách Đỏ?',
        qEn: 'How does Clause 12 differ fundamentally between the Red Book and the Yellow/Silver Books?',
        opts: [
          { vi: 'Giống hệt nhau ở cả 3 sách', en: 'Identical across all 3 books' },
          { vi: 'Sách Đỏ Điều 12 là "Đo lường và Xác định giá trị" (Measurement and Valuation); Sách Vàng & Sách Bạc Điều 12 là "Kiểm định sau khi Hoàn thành" (Tests after Completion — kiểm tra vận hành thực tế/hiệu năng nhà máy sau Bàn giao)', en: 'Red Book Clause 12 is Measurement and Valuation; Yellow and Silver Books Clause 12 is Tests after Completion (performance testing after Taking Over)' },
          { vi: 'Sách Đỏ cũng dùng Tests after Completion tại Điều 12', en: 'Red Book uses Tests after Completion at Clause 12' },
          { vi: 'Sách Bạc không có Điều 12', en: 'Silver Book skips Clause 12' }
        ],
        ans: 1,
        expVi: 'Bẫy đọc nhanh trong Open-Book FCCM: Điều 12 & 14 là điểm rẽ nhánh cấu trúc giữa Red Book (Đo lường khối lượng) và Yellow/Silver Book (Trọn gói + Kiểm định hiệu năng sau Bàn giao)!',
        expEn: 'Key Rainbow Suite structural split: Clause 12 is Measurement/Valuation in Red Book vs Tests after Completion in Yellow/Silver Books.'
      },
      {
        id: 'f6-5',
        clause: 'Yel/Sil 12.2 & 12.4 (Non-Performance)',
        qVi: 'Theo Khoản 12.4 [Không đạt Kiểm định sau khi Hoàn thành] trong Sách Vàng/Bạc, nếu Công trình không đạt giá trị bảo đảm tối thiểu nhưng vẫn vận hành được (hoặc nằm trong dải đền bù hiệu suất - Performance Damages), giải pháp chuẩn hợp đồng là gì?',
        qEn: 'Under Yellow/Silver Sub-Clause 12.4 [Failure to Pass Tests after Completion], if the Works fail guaranteed minimum performance parameters where non-performance damages are specified in Schedules, what applies?',
        opts: [
          { vi: 'Chủ đầu tư bắt buộc phải từ chối toàn bộ nhà máy', en: 'Employer must reject the entire plant' },
          { vi: 'Nếu sai lệch nằm trong giới hạn cho phép trả Tiền bồi thường Hiệu suất (Non-Performance Damages) nêu tại Schedules/Contract Data, Nhà thầu trả khoản tiền đó để coi như đạt Kiểm định sau khi Hoàn thành', en: 'Contractor may pay Non-Performance Damages stated in the Schedules/Contract Data, whereupon the Works/Section are deemed to have passed the Tests after Completion' },
          { vi: 'Nhà thầu không phải trả tiền mà chỉ kéo dài bảo hành thêm 1 năm', en: 'Contractor extends warranty by 1 year with zero payment' },
          { vi: 'Chỉ áp dụng cho thiết bị điện dân dụng', en: 'Applies only to residential fittings' }
        ],
        ans: 1,
        expVi: 'Khoản 12.4(b) cho phép thanh toán Performance Damages (tiền phạt hiệu suất/công suất định trước) như một cơ chế giải phóng trách nhiệm khi công suất hơi thiếu nhưng vẫn dùng được.',
        expEn: 'Sub-Clause 12.4 allows Contractor to pay scheduled Non-Performance Damages as full satisfaction of passing Tests after Completion.'
      },
      {
        id: 'f6-6',
        clause: 'Yel/Sil 14.1 (Lump Sum)',
        qVi: 'Trong Sách Vàng & Sách Bạc Khoản 14.1 [Giá Hợp đồng], tính chất thanh toán mặc định là gì và mọi khối lượng trong bảng biểu (Schedules) được xử lý ra sao?',
        qEn: 'Under Yellow/Silver Sub-Clause 14.1 [The Contract Price], what is the pricing basis and how are any quantities listed in a Schedule treated?',
        opts: [
          { vi: 'Đo bóc lại 100% theo khối lượng thực tế thi công tại hiện trường', en: '100% remeasured based on actual site quantities' },
          { vi: 'Giá Hợp đồng là Trọn gói (Lump Sum Accepted Contract Amount) tùy thuộc điều chỉnh theo Hợp đồng; mọi khối lượng trong Schedule chỉ mang tính ước tính (estimated) và KHÔNG dùng để xác định thanh toán (trừ phần đo lường riêng nếu Hợp đồng ghi rõ)', en: 'Payment is based on a Lump Sum Accepted Contract Amount (subject to contractual adjustments); quantities set out in any Schedule are estimated only and NOT used for payment valuation' },
          { vi: 'Thanh toán theo chi phí thực tế cộng 10% phí quản lý', en: 'Cost-plus 10% management fee' },
          { vi: 'Mỗi biến động >1% khối lượng đều phải thay đổi giá trọn gói', en: 'Every >1% quantity deviation alters the lump sum' }
        ],
        ans: 1,
        expVi: 'Khác với Red Book Điều 12 (re-measurement), Yellow/Silver 14.1 quy định Giá trọn gói: mọi khối lượng liệt kê trong Schedule đều chỉ mang tính tham khảo/ước tính ("estimated and are not to be taken as actual and correct quantities").',
        expEn: 'Yellow/Silver 14.1 establishes lump-sum pricing; any quantities in Schedules are strictly estimated and non-binding for valuation.'
      },
      {
        id: 'f6-7',
        clause: 'Yel/Sil 13.3 vs 5.2 (Changes)',
        qVi: 'Trong Sách Bạc/Vàng 2017, khi Đại diện Chủ đầu tư / Nhà tư vấn xem xét Tài liệu thiết kế của Nhà thầu theo Khoản 5.2 và yêu cầu chỉnh sửa vượt quá yêu cầu ban đầu trong Employer’s Requirements, việc này được xử lý theo điều khoản nào?',
        qEn: 'In 2017 Yellow/Silver, if the Engineer/Employer’s Representative instructs a design modification during Clause 5.2 review that goes beyond the Employer’s Requirements, how should it be treated?',
        opts: [
          { vi: 'Nhà thầu phải sửa miễn phí vì mọi ý kiến 5.2 đều miễn phí', en: 'Contractor modifies free of charge because 5.2 review overrides ER' },
          { vi: 'Cấu thành một Thay đổi (Variation) theo Điều 13 (nếu Nhà thầu đã thông báo/chỉ rõ yêu cầu đó là Variation khi nộp lại hoặc trước khi thực hiện)', en: 'Constitutes a Variation under Clause 13 because instructions departing from the Employer’s Requirements alter Scope' },
          { vi: 'Chuyển thành khoản tạm ứng không hoàn lại', en: 'Treated as non-refundable advance' },
          { vi: 'Tự động chấm dứt hợp đồng theo Khoản 15.5', en: 'Triggers termination under 15.5' }
        ],
        ans: 1,
        expVi: 'Quản trị Design-Build cực hay gặp: Chủ đầu tư góp ý "tiện nghi/nâng cấp thêm" khi duyệt thiết kế 5.2 -> phải chốt rõ dưới dạng **Variation (Điều 13)** qua Notice kịp thời để tránh tranh cãi scope creep!',
        expEn: 'Classic Design-Build risk: comments during 5.2 review demanding higher standards than Employer’s Requirements require treatment as a Variation under Clause 13.'
      },
      {
        id: 'f6-8',
        clause: 'Sil 1.15 vs Cap',
        qVi: 'Nếu Hợp đồng không ghi cụ thể số tiền Giới hạn Trách nhiệm Tổng thể (Total Liability Cap) của Nhà thầu tại Dữ liệu Hợp đồng (Contract Data), Khoản 1.15 (2017) / 17.6 (1999) ấn định mức trần mặc định bằng bao nhiêu?',
        qEn: 'Under Sub-Clause 1.15 (2017) / 17.6 (1999), if no specific sum is stated in the Contract Data, what is the default cap on Contractor’s total liability to the Employer?',
        opts: [
          { vi: '10% Giá Hợp đồng Được chấp nhận', en: '10% of Accepted Contract Amount' },
          { vi: '50% Giá Hợp đồng Được chấp nhận', en: '50% of Accepted Contract Amount' },
          { vi: 'Bằng Giá Hợp đồng Được chấp nhận (Accepted Contract Amount) ở Red/Yellow Book — hoặc Contract Price stated in Contract Agreement ở Silver Book!', en: 'Equal to the Accepted Contract Amount (Red/Yellow) or the Contract Price stated in the Contract Agreement (Silver)' },
          { vi: 'Không giới hạn trách nhiệm nếu Contract Data để trống', en: 'Unlimited liability if Contract Data is blank' }
        ],
        ans: 2,
        expVi: 'Mẹo nhớ Open-Book Khoản 1.15: Mặc định trần trách nhiệm = **Accepted Contract Amount** (Red/Yellow) hoặc **Contract Price** (Silver — vì Silver Book không dùng thuật ngữ Accepted Contract Amount!).',
        expEn: 'Default liability cap under 1.15 is the Accepted Contract Amount (Red/Yellow) or Contract Price stated in the Contract Agreement (Silver).'
      },
      {
        id: 'f6-9',
        clause: '5.5–5.7 (Training, As-Built, O&M)',
        qVi: 'Trong Sách Vàng & Sách Bạc Khoản 5.5–5.7 (và Sách Đỏ 2017 mở rộng Khoản 4.5), điều kiện tiên quyết gắn liền với việc hoàn thiện Tài liệu Hoàn công (As-Built) và Hướng dẫn Vận hành Bảo trì (O&M Manuals) là gì?',
        qEn: 'Under Yellow/Silver Sub-Clauses 5.6–5.7 (and RB/17 4.4–4.5), how are As-Built Drawings and O&M Manuals tied to Taking-Over?',
        opts: [
          { vi: 'Chỉ cần nộp trong vòng 1 năm sau khi hết bảo hành', en: 'Submitted 1 year after DNP expires' },
          { vi: 'Công trình KHÔNG được coi là đã hoàn thành để bàn giao (Taking-Over theo Khoản 10.1) cho đến khi Nhà thầu đã nộp đủ Tài liệu Hoàn công và Sổ tay O&M theo đúng Employer’s Requirements/Specification', en: 'The Works are NOT considered complete for Taking-Over under Sub-Clause 10.1 until the Contractor has supplied the specified As-Built Records and O&M Manuals' },
          { vi: 'Chỉ cần bản nháp viết tay', en: 'Handwritten drafts suffice' },
          { vi: 'Không cần cho thiết bị cơ điện', en: 'Exempted for MEP works' }
        ],
        ans: 1,
        expVi: 'Khoản 5.6 & 5.7 (Yel/Sil) và 4.4.2/4.4.3 (RB/17) đều gắn điều kiện: Chưa nộp đủ As-Built & O&M Manuals thì chưa đủ điều kiện cấp Chứng chỉ Bàn giao (10.1)!',
        expEn: 'Works are explicitly not considered complete for Taking-Over under 10.1 until As-Built documents and O&M manuals are supplied.'
      },
      {
        id: 'f6-10',
        clause: 'Sil 2.5 vs 3.5 (2017)',
        qVi: 'Trong Sách Bạc 2017 (Silver Book 2017), khi Chủ đầu tư không đồng ý trả một khoản tiền hoặc EOT, vai trò của Đại diện Chủ đầu tư (Employer’s Representative) tại Khoản 3.5 khác gì Sách Đỏ/Vàng 2017 Khoản 3.7?',
        qEn: 'In Silver Book 2017 Sub-Clause 3.5 [Agreement or Determination], how does the Employer’s Representative differ from the Red/Yellow 2017 Engineer under Sub-Clause 3.7?',
        opts: [
          { vi: 'Không có bất kỳ quy định 42+42 ngày nào ở Sách Bạc 2017', en: 'Silver Book 2017 omits 42+42 deadlines' },
          { vi: 'Về quy trình 42+42 ngày & nghĩa vụ "act neutrally" (ra quyết định công bằng dựa theo Hợp đồng, không được coi là hành động thay mặt Chủ đầu tư khi thực thi 3.5) là GIỐNG Sách Đỏ/Vàng 3.7 — khác tên gọi chủ thể là Employer’s Representative và không có quy định chứng chỉ IPC trung gian kiểu kỹ sư độc lập', en: 'Silver Book 2017 Sub-Clause 3.5 mirrors Red/Yellow 3.7 procedural neutrality ("act neutrally", 42+42 days, not deemed to act for Employer during 3.5), simply substituting Employer’s Representative for Engineer' },
          { vi: 'Đại diện Chủ đầu tư được phép thiên vị Chủ đầu tư khi quyết định 3.5', en: 'ER is expressly partial to Employer under 3.5' },
          { vi: 'Sách Bạc bỏ hoàn toàn quy trình Agreement or Determination', en: 'Silver Book deletes Agreement or Determination' }
        ],
        ans: 1,
        expVi: 'Điểm thay đổi chấn động ở Silver Book 2017: Lần đầu tiên Đại diện Chủ đầu tư (ER) trong EPC cũng bị ràng buộc quy trình "act neutrally" 42+42 ngày tại **Khoản 3.5** giống hệt Nhà tư vấn tại Khoản 3.7!',
        expEn: 'Major 2017 Silver Book innovation: Sub-Clause 3.5 imposes the same neutrality duty and 42+42 day procedure on the Employer’s Representative.'
      },
      {
        id: 'f6-11',
        clause: '1.10 (Copyright / IP)',
        qVi: 'Theo Khoản 1.10 [Quyền sử dụng Tài liệu của Nhà thầu], ai nắm bản quyền thiết kế của Tài liệu Nhà thầu (Contractor’s Documents) và Chủ đầu tư có quyền sử dụng như thế nào?',
        qEn: 'Under Sub-Clause 1.10 [Employer’s Use of Contractor’s Documents], who retains copyright and intellectual property rights in the Contractor’s Documents?',
        opts: [
          { vi: 'Chủ đầu tư sở hữu toàn bộ bản quyền để đem bán lại cho dự án khác', en: 'Employer owns full copyright for commercial resale' },
          { vi: 'Nhà thầu giữ nguyên bản quyền và quyền sở hữu trí tuệ; Chủ đầu tư được cấp giấy phép không độc quyền, miễn phí bản quyền (royalty-free licence) vĩnh viễn chỉ để vận hành, bảo trì, sửa đổi và vận hành Công trình này (và sao chép/dùng khi hoàn thiện nốt nếu chấm dứt)', en: 'The Contractor retains copyright and IP; the Employer receives a non-exclusive, royalty-free licence strictly to operate, maintain, alter, repair, and complete the Works' },
          { vi: 'Giấy phép hết hạn ngay sau khi hết thời hạn bảo hành DNP', en: 'Employer licence expires when DNP ends' },
          { vi: 'Nhà tư vấn là chủ sở hữu bản quyền', en: 'Engineer owns the copyright' }
        ],
        ans: 1,
        expVi: 'Khoản 1.10 bảo vệ sở hữu trí tuệ của Nhà thầu (Contractor retains copyright) đồng thời trao giấy phép vĩnh viễn miễn phí bản quyền cho Chủ đầu tư dùng trong phạm vi Công trình đó.',
        expEn: 'Sub-Clause 1.10 balances Contractor IP ownership with a royalty-free, irrevocable Employer licence for the Works.'
      },
      {
        id: 'f6-12',
        clause: 'Yel 14.15 (Payment Currencies)',
        qVi: 'Theo Khoản 14.15 [Đồng tiền Thanh toán], nếu Hợp đồng có quy định tỷ giá hối đoái cố định (fixed rate of exchange) tại Contract Data và thanh toán thực hiện bằng đồng tiền khác đồng tiền Giá Hợp đồng Được chấp nhận, rủi ro tỷ giá thuộc về ai?',
        qEn: 'Under Sub-Clause 14.15 [Currencies of Payment], where Contract Data specifies fixed exchange rates for multi-currency payments, how are currency conversion amounts certified?',
        opts: [
          { vi: 'Chủ đầu tư quy đổi theo tỷ giá thị trường giao ngay từng tháng bất chấp Contract Data', en: 'Spot bank rate each month regardless of Contract Data' },
          { vi: 'Áp dụng tỷ giá cố định đã ghi tại Contract Data (hoặc tỷ giá ngày Base Date của Ngân hàng Trung ương nếu Contract Data không ghi tỷ giá cố định)', en: 'Calculated using the exchange rates stated in Contract Data (or if none stated, central bank Base Date rates unless specified otherwise)' },
          { vi: 'Do Nhà thầu tự chọn tỷ giá có lợi nhất vào ngày xuất hóa đơn', en: 'Contractor picks most favorable rate on invoice date' },
          { vi: 'Chỉ thanh toán bằng USD trong mọi hợp đồng FIDIC', en: 'All FIDIC contracts pay exclusively in USD' }
        ],
        ans: 1,
        expVi: 'Khoản 14.15(c): Tỷ giá cố định trong Contract Data (hoặc Base Date rate) được cố định xuyên suốt hợp đồng để tránh tranh cãi trượt giá tiền tệ cho thanh toán & tỷ lệ hoàn trả tạm ứng.',
        expEn: 'Sub-Clause 14.15 mandates using the fixed exchange rates stated in Contract Data (or Base Date central bank rates where omitted).'
      }
    ]
  },
  {
    id: 'set-7-records-delay-finance',
    level: 3,
    levelBadge: '⭐⭐⭐',
    levelVi: 'Nâng cao',
    levelEn: 'Advanced',
    badge: 'Set 7 · 12 câu',
    titleVi: 'Đề 7: Hồ sơ Đồng thời, Phương pháp EOT & Bồi thường Tài chính',
    titleEn: 'Set 7: Contemporary Records, Delay Analysis & Financial Claims',
    durationMin: 30,
    questions: [
      {
        id: 'f7-1',
        clause: '20.2.3 (Contemporary Records)',
        qVi: 'Theo Khoản 20.2.3 [Hồ sơ Đồng thời - Contemporary Records] bản 2017, "Hồ sơ Đồng thời" được định nghĩa là gì và Nhà tư vấn có quyền gì đối với chúng?',
        qEn: 'Under 2017 Sub-Clause 20.2.3 [Contemporary Records], what are "contemporary records" and what rights does the Engineer hold?',
        opts: [
          { vi: 'Biên bản hồi tưởng được lập sau khi kết thúc dự án 1 năm', en: 'Retrospective witness statements drafted 1 year after completion' },
          { vi: 'Các hồ sơ được lập hoặc tạo ra tại thời điểm hoặc ngay sát thời điểm sự kiện/tình huống phát sinh (nhật ký công trường, báo cáo nhân lực/máy, nghiệm thu, thư từ, tiến độ cập nhật); Nhà tư vấn có quyền kiểm tra (inspect) tất cả hồ sơ đó và hướng dẫn giữ thêm hồ sơ', en: 'Records prepared or generated at or immediately following the event/circumstance; the Engineer may inspect all contemporary records and instruct additional record-keeping' },
          { vi: 'Nhà thầu có quyền giữ bí mật tuyệt đối không cho Nhà tư vấn xem hồ sơ công trường khi đang khiếu nại', en: 'Contractor may withhold site records as confidential' },
          { vi: 'Chỉ bao gồm hóa đơn VAT tài chính cuối cùng', en: 'Limited strictly to final VAT invoices' }
        ],
        ans: 1,
        expVi: 'Khoản 20.2.3 định nghĩa rõ ràng khái niệm "contemporary records" (tạo lập tại thời điểm hoặc ngay sau sự kiện) và nhấn mạnh: Việc Nhà tư vấn kiểm tra hồ sơ KHÔNG mặc nhiên đồng nghĩa thừa nhận tính hợp lệ của khiếu nại!',
        expEn: 'Sub-Clause 20.2.3 defines contemporary records as those created at/immediately after the event and clarifies that Engineer inspection does not constitute admission.'
      },
      {
        id: 'f7-2',
        clause: 'EOT Methodology',
        qVi: 'Trong các phương pháp phân tích chậm trễ EOT (như SCL Protocol / tài liệu thực hành FIDIC), phương pháp nào được coi là chính xác và thuyết phục nhất cho các khiếu nại EOT phát sinh trong lúc đang thi công (prospective) lẫn sau hoàn thành nếu có dữ liệu tiến độ cập nhật tốt?',
        qEn: 'Among standard EOT delay analysis methods (recognized in FIDIC/SCL guidance), which dynamic method evaluates actual critical path progress period-by-period against updated programmes?',
        opts: [
          { vi: 'Impacted As-Planned (chỉ chèn sự kiện vào tiến độ gốc mà bỏ qua tiến độ thực tế công trường)', en: 'Impacted As-Planned (ignores actual site progress)' },
          { vi: 'Time Slice Windows / Retrospective Time Impact Analysis dựa trên các tiến độ cập nhật thực tế đồng thời (Contemporaneous Updated Programmes)', en: 'Time Slice Windows / Dynamic Time Impact Analysis anchored to contemporaneous updated programmes' },
          { vi: 'Ước lượng cộng tổng đơn giản tổng ngày chậm từng hạng mục không xét đường găng', en: 'Simple global addition ignoring float and critical path' },
          { vi: 'Global Claim không tách riêng nhân-quả', en: 'Unsubstantiated Global Claim' }
        ],
        ans: 1,
        expVi: 'Thực hành quốc tế FIDIC & SCL Protocol (được dẫn chiếu ngay trong FIDIC Guidance 2017 Clause 8.5): **Time Slice Windows** và **Time Impact Analysis** dùng tiến độ cập nhật thực tế phản ánh đúng biến động đường găng theo thời gian.',
        expEn: 'Windows Analysis and Time Impact Analysis anchored to contemporaneous programme updates best capture shifting critical paths over time.'
      },
      {
        id: 'f7-3',
        clause: 'Cost vs Cost plus Profit',
        qVi: 'Trong Hợp đồng FIDIC 2017, trường hợp nào dưới đây Nhà thầu được đòi **Cost plus Profit** (Chi phí cộng Lợi nhuận), so với chỉ được đòi **Cost** (không có Profit)?',
        qEn: 'Under the 2017 FIDIC Contracts, which Contractor entitlement grants **Cost plus Profit** as opposed to **Cost only** (no profit)?',
        opts: [
          { vi: 'Điều kiện Vật chất Không lường trước được (4.12) được Cost + Profit; Thay đổi Luật (13.6) cũng được Cost + Profit', en: '4.12 Unforeseeable physical conditions and 13.6 Changes in Laws both grant Cost + Profit' },
          { vi: 'Chủ đầu tư chậm bàn giao mặt bằng (2.1) hoặc Tham vấn tìm lỗi Chủ đầu tư (4.7/1.9/16.1) được **Cost plus Profit**; trong khi Sự kiện Ngoại lệ chiến tranh (18.4), Điều kiện vật chất bất khả kháng 4.12 hay Thay đổi Luật (13.6) chỉ được **Cost** (KHÔNG có Profit)!', en: 'Employer defaults (e.g., 2.1 Delayed Access, 1.9 Errors, 16.1 Suspension) grant **Cost plus Profit**; neutral/external risks (4.12 Physical Conditions, 13.6 Changes in Laws, 18.4 War/Riots) grant **Cost only**' },
          { vi: 'Mọi khiếu nại FIDIC đều luôn cộng thêm Lợi nhuận', en: 'All FIDIC financial claims automatically include Profit' },
          { vi: 'Không điều khoản nào cho phép tính Profit ngoài Variation', en: 'No clause grants Profit outside Clause 13' }
        ],
        ans: 1,
        expVi: 'Quy tắc vàng ghi nhớ khi thi Open-Book FCCM: **Lỗi của Chủ đầu tư -> EOT + Cost + Profit** (1.9, 2.1, 4.7, 7.4, 10.2, 10.3, 16.1, 17.2). **Rủi ro trung lập ngoài kiểm soát cả 2 bên -> EOT + Cost (không Profit)** (4.12, 4.15, 13.6, 18.4(b)). **Thiên tai 18.1(f) / Chậm do cơ quan công quyền 8.6 / Thời tiết bất lợi đặc biệt 8.5(c) -> Chỉ EOT (không Cost)**!',
        expEn: 'Golden FCCM Rule: Employer default = EOT + Cost + Profit; Neutral third-party/ground/law risk (4.12, 13.6, 18.4(b)) = EOT + Cost only; Natural catastrophe/weather/authorities (8.5(c), 8.6, 18.1(f)) = EOT only.'
      },
      {
        id: 'f7-4',
        clause: '1.1.20 / Profit Definition',
        qVi: 'Trong ấn bản 2017, thuật ngữ "Cost Plus Profit" ấn định mức tỷ lệ phần trăm Lợi nhuận (Profit) mặc định bằng bao nhiêu nếu Contract Data không ghi rõ tỷ lệ?',
        qEn: 'In the 2017 FIDIC editions, under the definition of "Cost Plus Profit" (Clause 1.1), what is the default Profit percentage if none is stated in the Contract Data?',
        opts: [
          { vi: '3%', en: '3%' },
          { vi: '5% (tính trên Cost)', en: '5% (added to Cost)' },
          { vi: '10%', en: '10%' },
          { vi: '15%', en: '15%' }
        ],
        ans: 1,
        expVi: 'Cải tiến quan trọng ở 2017 (Khoản 1.1.20 Red/Yellow / 1.1.17 Silver): Định nghĩa "Cost Plus Profit" chốt sẵn **5%** nếu Contract Data bỏ trống (ở 1999 thuật ngữ này ghi "reasonable profit" gây tranh cãi liên miên)!',
        expEn: '2017 editions lock default Profit in "Cost Plus Profit" at **5%** (unless otherwise stated in Contract Data), removing the 1999 "reasonable profit" dispute.'
      },
      {
        id: 'f7-5',
        clause: 'Prolongation vs Disruption',
        qVi: 'Trong quản trị khiếu nại tài chính FIDIC, sự khác biệt căn bản giữa chi phí Kéo dài Thời gian (Prolongation Costs) và chi phí Gián đoạn Năng suất (Disruption Costs) là gì?',
        qEn: 'In FIDIC claims administration, what is the fundamental difference between Prolongation Costs and Disruption Costs?',
        opts: [
          { vi: 'Hai khái niệm là một và luôn tỷ lệ thuận theo số ngày EOT', en: 'They are synonymous and strictly proportional to EOT days' },
          { vi: 'Prolongation liên quan đến chi phí duy trì nguồn lực kéo dài theo THỜI GIAN (công trường/trụ sở) do kéo dài ngày hoàn thành; Disruption là tổn thất HIỆU SUẤT / NĂNG SUẤT lao động-máy móc (thậm chí xảy ra khi công trình không bị chậm ngày hoàn thành hoặc trên công việc không nằm trên đường găng!)', en: 'Prolongation concerns time-related costs over an extended period; Disruption concerns loss of productivity/efficiency of resources, which can occur even WITHOUT critical delay to completion!' },
          { vi: 'Disruption luôn được thanh toán trọn gói qua Delay Damages', en: 'Disruption is recovered via Delay Damages' },
          { vi: 'Nhà thầu không được phép đòi chi phí Disruption theo FIDIC', en: 'Disruption costs are barred under FIDIC' }
        ],
        ans: 1,
        expVi: 'Một câu hỏi tình huống rất hay gặp ở FCCM: Một Nhà thầu **không có EOT** (hoặc kịp về đích bằng tăng ca) VẪN có thể đòi **Disruption Cost** nếu hành vi/thay đổi của Chủ đầu tư làm giảm năng suất thi công (qua phương pháp Measured Mile)!',
        expEn: 'Crucial claim distinction: Disruption (loss of productivity, e.g., proved via Measured Mile) does not require critical path delay or an EOT.'
      },
      {
        id: 'f7-6',
        clause: 'Measured Mile & Overheads',
        qVi: 'Khi chứng minh tổn thất năng suất (Disruption) và Chi phí quản lý trụ sở chính chưa thu hồi (Unabsorbed Head Office Overheads) theo chuẩn thực hành FIDIC, các công thức/phương pháp tiêu chuẩn nào được áp dụng phổ biến nhất?',
        qEn: 'Which benchmark methods are internationally recognized for substantiating Disruption vs Unabsorbed Head Office Overheads claims under FIDIC contracts?',
        opts: [
          { vi: 'Measured Mile (cho Disruption) và Hudson / Emden / Eichleay formulas (cho Head Office Overheads, nếu chứng minh được không thể nhận dự án thay thế)', en: 'Measured Mile (for Disruption) and Hudson / Emden / Eichleay formulas (for Head Office Overheads, subject to proof of inability to deploy resources elsewhere)' },
          { vi: 'Tính phẳng 30% tổng giá trị gói thầu không cần chứng từ', en: 'Flat 30% uplift with zero records' },
          { vi: 'Chỉ dựa vào hóa đơn bán lẻ', en: 'Retail invoices only' },
          { vi: 'Công thức Black-Scholes', en: 'Black-Scholes pricing model' }
        ],
        ans: 0,
        expVi: 'Trong phần kiến thức định giá khiếu nại FCCM & Seppälä: **Measured Mile** so sánh năng suất đoạn không bị ảnh hưởng với đoạn bị ảnh hưởng; **Emden/Hudson/Eichleay** dùng cho chi phí trụ sở chính (lưu ý: không tự động áp công thức mà phải chứng minh có thiệt hại thực tế / cơ hội bị bỏ lỡ).',
        expEn: 'Measured Mile measures productivity loss against an unimpacted baseline; Hudson/Emden/Eichleay model unabsorbed HO overheads subject to proof of causation.'
      },
      {
        id: 'f7-7',
        clause: '14.2 (Advance Payment)',
        qVi: 'Theo Khoản 14.2 [Thanh toán Tạm ứng - Advance Payment] (2017), nếu Hợp đồng không nêu khác trong Contract Data, việc khấu trừ thu hồi tiền tạm ứng trong mỗi IPC bắt đầu khi nào và theo tỷ lệ nào?',
        qEn: 'Under 2017 Sub-Clause 14.2.3 [Repayment of Advance Payment], unless otherwise stated in Contract Data, when do IPC deductions start and at what rate?',
        opts: [
          { vi: 'Khấu trừ 50% ngay từ IPC đầu tiên', en: '50% deduction from the very first IPC' },
          { vi: 'Bắt đầu khấu trừ khi tổng giá trị thanh toán xác nhận (trừ tạm ứng & trừ/hoàn giữ lại) vượt 10% (hoặc 30% tùy bản 99 vs 17 — ở bản 2017 là 10% Accepted Contract Amount!) ở tỷ lệ hoàn trả 25% số tiền mỗi IPC cho tới khi hết tạm ứng', en: 'Starts once total certified interim payments (excluding advance & retention) exceed 10% of Accepted Contract Amount (in 2017, vs 30% in 1999 without schedule!), at 25% of each IPC’s net certified amount until fully repaid' },
          { vi: 'Khấu trừ 100% tại Chứng chỉ Thanh toán Cuối cùng', en: '100% deducted at Final Statement only' },
          { vi: 'Không cần Bảo lãnh Tạm ứng', en: 'No Advance Payment Guarantee required' }
        ],
        ans: 1,
        expVi: 'So sánh 1999 vs 2017 ở Khoản 14.2: Bản 2017 điều chỉnh ngưỡng bắt đầu hoàn trả mặc định xuống **10%** (bản 1999 từng ghi **30%** — hoặc 25% nếu là Silver 99), với tỷ lệ khấu trừ **25%** mỗi IPC và bắt buộc thu hồi hết trước khi cấp TOC hoặc chấm dứt!',
        expEn: 'Watch the 1999-vs-2017 change in 14.2: Default trigger dropped from 30% (1999) to 10% of ACA (2017) with 25% amortization per IPC.'
      },
      {
        id: 'f7-8',
        clause: '14.5 (Plant & Materials on Site)',
        qVi: 'Theo Khoản 14.5 [Thiết bị và Vật tư cho Công trình] (khi có áp dụng thanh toán hàng chưa lắp đặt), tỷ lệ giá trị hóa đơn thiết bị/vật tư vừa giao tới Công trường (hoặc đã gửi tàu nếu quy định) được đưa vào IPC thường bằng bao nhiêu phần trăm?',
        qEn: 'Under Sub-Clause 14.5 [Plant and Materials intended for the Works], when applicable, what percentage of the verified cost is included in the IPC once materials/plant are delivered to Site?',
        opts: [
          { vi: '50%', en: '50%' },
          { vi: '80% chi phí thực tế hợp lý do Nhà tư vấn xác định (với điều kiện Nhà thầu đã chứng minh quyền sở hữu và lưu giữ hồ sơ đầy đủ)', en: '80% of the actual reasonable cost determined by the Engineer (subject to proper records and transfer of ownership/lien protection)' },
          { vi: '100%', en: '100%' },
          { vi: '25%', en: '25%' }
        ],
        ans: 1,
        expVi: 'Con số chuẩn Khoản 14.5(c)(i): **80%** chi phí thực tế sau khi giao tới Site (kèm chứng từ bảo hiểm, vận chuyển, chuyển giao quyền sở hữu tự động theo 7.7), nhằm giảm rủi ro thanh toán 100% khi chưa lắp đặt.',
        expEn: 'Sub-Clause 14.5 certifies **80%** of cost upon delivery to Site (subject to property transfer under 7.7 and documentary proof).'
      },
      {
        id: 'f7-9',
        clause: '14.13 & 14.14 (Final Payment & Cessation)',
        qVi: 'Theo Khoản 14.14 [Chấm dứt Trách nhiệm của Chủ đầu tư], sau khi thanh toán theo Chứng chỉ Thanh toán Cuối cùng (FPC), Chủ đầu tư có thể vẫn phải chịu trách nhiệm đối với một khiếu nại của Nhà thầu CHỈ KHI khiếu nại đó thỏa mãn điều kiện nào?',
        qEn: 'Under Sub-Clause 14.14 [Cessation of Employer’s Liability], after final settlement, in what narrow circumstance can the Employer still remain liable to the Contractor?',
        opts: [
          { vi: 'Nhà thầu gửi khiếu nại mới bất kỳ trong vòng 5 năm sau dự án', en: 'Contractor submits any fresh claim within 5 years post-project' },
          { vi: 'Khoản mục đó đã được Nhà thầu ghi rõ trong Hồ sơ Đề nghị Thanh toán Cuối cùng (Final Statement) HOẶC trong Văn bản Tuyên bố khi Hoàn thành (Statement at Completion - 14.10) trừ các vấn đề phát sinh sau Chứng chỉ Bàn giao', en: 'Only if the Contractor included the specific matter/amount in the Final Statement AND (unless arising after Taking Over) in the Statement at Completion (14.10)' },
          { vi: 'Khoản 14.14 bảo lưu mọi quyền đòi của Nhà thầu không giới hạn', en: 'Sub-Clause 14.14 preserves unlimited post-completion claims' },
          { vi: 'Chỉ cần nói miệng tại lễ khánh thành', en: 'Oral reservation at commissioning' }
        ],
        ans: 1,
        expVi: 'Khoản 14.14 ("Cessation of Employer’s Liability"): Một cái bẫy quản trị cực lớn — nếu Nhà thầu quên không đưa khiếu nại trước TOC vào Statement at Completion (14.10) hoặc quên không bảo lưu trong Final Statement (14.11), Chủ đầu tư được giải phóng trách nhiệm (save for fraud/1.15)!',
        expEn: 'Sub-Clause 14.14 cuts off Employer liability for matters omitted from the Final Statement and (for pre-TOC matters) the Statement at Completion.'
      },
      {
        id: 'f7-10',
        clause: '4.15 (Access Route)',
        qVi: 'Về Đường tiếp cận Công trường (Khoản 4.15 - Access Route), bản 2017 bổ sung quyền mới nào cho Nhà thầu so với bản 1999?',
        qEn: 'What new Contractor entitlement did the 2017 editions add to Sub-Clause 4.15 [Access Route] compared to 1999?',
        opts: [
          { vi: 'Chủ đầu tư luôn chịu 100% chi phí bảo trì mọi đường công cộng', en: 'Employer guarantees all public highway repairs' },
          { vi: 'Nếu đường tiếp cận trở nên không phù hợp hoặc không sẵn có do sự thay đổi tuyến đường BỞI CHỦ ĐẦU TƯ hoặc Nhân sự Chủ đầu tư/nhà thầu khác của Chủ đầu tư (từ lúc nộp thầu), Nhà thầu có quyền đòi EOT + Cost + Profit (nếu thay đổi do Chủ đầu tư gây ra) qua 20.2', en: 'To the extent non-suitability or non-availability arises from changes to the access route by the Employer or a third party after Base Date, Contractor may claim EOT (and Cost+Profit if caused by Employer changes) under 20.2!' },
          { vi: 'Xóa bỏ nghĩa vụ khảo sát đường tiếp cận trước khi đấu thầu', en: 'Removes pre-tender route inspection duty' },
          { vi: 'Miễn cho Nhà thầu mọi phí cầu đường', en: 'Exempts Contractor from road tolls' }
        ],
        ans: 1,
        expVi: 'Bản 1999 đổ 100% rủi ro đường tiếp cận sang Nhà thầu; đoạn cuối Khoản 4.15 bản 2017 sửa lỗi bất công này: nếu tuyến tiếp cận thay đổi sau Base Date do Chủ đầu tư (được EOT + Cost + Profit) hoặc thậm chí bên thứ ba (tùy câu chữ cụ thể Red/Yel 4.15 cho thay đổi bởi Employer hoặc bên thứ ba -> EOT + Cost)!',
        expEn: '2017 Sub-Clause 4.15 reverses the harsh 1999 rule when route suitability changes after Base Date due to Employer or third-party changes.'
      },
      {
        id: 'f7-11',
        clause: '4.7 (Setting Out)',
        qVi: 'Theo Khoản 4.7 [Định vị Công trình - Setting Out] trong Sách Đỏ & Sách Vàng 2017, nếu mốc chuẩn gốc (reference points) do Chủ đầu tư cung cấp có sai sót mà nhà thầu kinh nghiệm không thể phát hiện, Nhà thầu được hưởng gì (và lưu ý thời hạn kiểm tra mốc trong bản 2017)?',
        qEn: 'Under Red/Yellow 2017 Sub-Clause 4.7 [Setting Out], what happens if errors in Employer-provided reference points were unforeseeable despite due verification?',
        opts: [
          { vi: 'Nhà thầu chịu hoàn toàn chi phí sửa sai sót mốc chuẩn', en: 'Contractor bears all costs of Employer reference errors' },
          { vi: 'Bản 2017 quy định thời hạn **28 ngày** (hoặc nêu trong Contract Data) kể từ Ngày Khởi công để kiểm tra sai sót tài liệu/mốc chuẩn; nếu sai sót không thể phát hiện dù đã kiểm tra hợp lý -> Nhà thầu được EOT + Cost + Profit qua Khoản 20.2!', en: '2017 sets a 28-day inspection period from Commencement Date (in 4.7.2) to check reference items; if an error could not reasonably be discovered -> Contractor recovers EOT + Cost + Profit via 20.2!' },
          { vi: 'Chỉ được EOT mà không được Cost hay Profit', en: 'EOT only without Cost or Profit' },
          { vi: 'Phải tạm ngừng vô thời hạn', en: 'Indefinite suspension applies' }
        ],
        ans: 1,
        expVi: 'Khoản 4.7.2 (2017) lần đầu đưa vào khung thời hạn kiểm tra mốc chuẩn là **28 ngày** kể từ Commencement Date (nếu Contract Data không ghi khác), sau đó áp cơ chế 4.7.3 đòi EOT + Cost + Profit.',
        expEn: 'Sub-Clause 4.7.2 (2017) adds a 28-day verification window from Commencement Date, preserving EOT + Cost + Profit for undetectable reference errors.'
      },
      {
        id: 'f7-12',
        clause: '4.12.1–4.12.4 (Physical Conditions 2017)',
        qVi: 'Trong Sách Đỏ & Sách Vàng 2017 Khoản 4.12 [Điều kiện Vật chất Không lường trước được], nếu đồng thời phát hiện cả điều kiện thuận lợi hơn và điều kiện bất lợi hơn trên Công trường tại cùng hạng mục tương tự, Nhà tư vấn xử lý như thế nào khi xác định Cost?',
        qEn: 'Under 2017 Red/Yellow Sub-Clause 4.12.4 [Delay and/or Cost], if the Contractor encounters both adverse and more favourable unforeseeable physical conditions on similar parts of the Works, how may the Engineer treat the Cost adjustment?',
        opts: [
          { vi: 'Nhà tư vấn hoàn toàn không được phép tính đến các điều kiện thuận lợi hơn', en: 'Engineer cannot consider favourable conditions' },
          { vi: 'Nhà tư vấn có thể tính đến việc bù trừ các điều kiện vật chất thuận lợi hơn trên các phần tương tự của Công trình (nhưng tổng hợp KHÔNG được dẫn đến giảm ròng Giá Hợp đồng — net reduction!)', en: 'Engineer may take account of more favourable conditions on similar parts to reduce additional Cost, PROVIDED net reductions shall not result in a net reduction in Contract Price (nor a net reduction in Time for Completion!)' },
          { vi: 'Chủ đầu tư được trừ tiền trực tiếp vào Giá Hợp đồng gốc dù vượt chi phí bất lợi', en: 'Employer reduces original Contract Price directly' },
          { vi: 'Chỉ áp dụng cho chi phí, không áp dụng cho Thời gian Hoàn thành', en: 'Applies to Cost only, never Time' }
        ],
        ans: 1,
        expVi: 'Chi tiết đắt giá ở Khoản 4.12.4 & 4.12.5: Cho phép cấn trừ ("offset") giữa thuận lợi và bất lợi cùng tính chất (cả về Time và Cost), nhưng **tác động ròng không được làm giảm Thời gian Hoàn thành hay Giá Hợp đồng gốc**!',
        expEn: 'Sub-Clause 4.12 allows offsetting favourable conditions against adverse claims on similar works, capped so neither Time for Completion nor original Contract Price is reduced.'
      }
    ]
  },
  {
    id: 'set-8-site-ops-traps',
    level: 4,
    levelBadge: '⭐⭐⭐⭐',
    levelVi: 'Thực chiến',
    levelEn: 'Expert Case-Study',
    badge: 'Set 8 · 12 câu',
    titleVi: 'Đề 8: Tình huống Quản trị Công trường & Bẫy Thủ tục 2017',
    titleEn: 'Set 8: Site Contract Administration & 2017 Procedural Traps',
    durationMin: 30,
    questions: [
      {
        id: 'f8-1',
        clause: '3.2 & 3.3 (Engineer Delegation)',
        qVi: 'Theo Khoản 3.2 & 3.3 của Sách Đỏ/Vàng 2017 [Đại diện Nhà tư vấn & Ủy quyền của Nhà tư vấn], Nhà tư vấn ĐƯỢC PHÉP hay BỊ CẤM ủy quyền thẩm quyền ra Quyết định theo Khoản 3.7 cho Trợ lý / Đại diện công trường của mình?',
        qEn: 'Under 2017 Red/Yellow Sub-Clauses 3.3 and 3.4 [Engineer’s Representative & Delegation], may the Engineer delegate the power to make Determinations under Sub-Clause 3.7 to an assistant?',
        opts: [
          { vi: 'Được phép ủy quyền hoàn toàn quyền ra Quyết định 3.7 cho bất kỳ giám sát viên nào', en: 'May delegate 3.7 Determinations freely to any site inspector' },
          { vi: 'BỊ CẤM: Trừ khi các Bên có thỏa thuận khác, Nhà tư vấn KHÔNG được ủy quyền thẩm quyền thực hiện chức năng Thỏa thuận hoặc Quyết định theo Khoản 3.7, cũng như không được ủy quyền quyền gửi Notice to Correct (15.1) (cả bản 1999 & 2017!)', en: 'PROHIBITED: Unless otherwise agreed by both Parties, the Engineer shall NOT delegate the authority to act under Sub-Clause 3.7 [Agreement or Determination] nor to give a Notice to Correct under 15.1!' },
          { vi: 'Chỉ được ủy quyền nếu Chủ đầu tư đồng ý miệng', en: 'Allowed with oral Employer consent' },
          { vi: 'Bản 2017 cho phép ủy quyền 3.7 nhưng cấm ủy quyền 13.3', en: '2017 permits 3.7 delegation while banning 13.3 delegation' }
        ],
        ans: 1,
        expVi: 'CỰC KỲ HAY THI FCCM: Khoản 3.4 (3.2 bản 1999) nghiêm cấm Nhà tư vấn ủy quyền thẩm quyền ra **Quyết định 3.7 (3.5 bản 1999)** và **Notice to Correct (15.1)** trừ khi CẢ HAI Bên cùng đồng ý!',
        expEn: 'Classic FCCM trap: Under Sub-Clause 3.4 (2017) / 3.2 (1999), the Engineer cannot delegate Sub-Clause 3.7/3.5 determinations or 15.1 Notices to Correct without both Parties’ agreement.'
      },
      {
        id: 'f8-2',
        clause: '3.5 (Instructions & Oral)',
        qVi: 'Theo Khoản 3.5 [Chỉ thị của Nhà tư vấn] (2017), nếu Trợ lý được ủy quyền đưa ra chỉ thị miệng tại hiện trường và Nhà thầu xác nhận bằng văn bản theo thủ tục, chỉ thị miệng đó sẽ xử lý ra sao nếu Trợ lý/Nhà tư vấn im lặng không phản hồi?',
        qEn: 'Under 2017 Sub-Clause 3.5 [Engineer’s Instructions], if an oral instruction is given and confirmed in writing by the Contractor within 2 working days, what happens if the Engineer does not reject or confirm within 2 working days?',
        opts: [
          { vi: 'Chỉ thị miệng luôn bị coi là vô hiệu dù đã xác nhận bằng văn bản', en: 'Oral instructions remain invalid regardless of confirmation' },
          { vi: 'Nếu Nhà thầu gửi xác nhận bằng văn bản trong vòng 2 ngày làm việc (working days) và Nhà tư vấn không bác bỏ/trả lời bằng văn bản trong vòng 2 ngày làm việc tiếp theo, văn bản xác nhận đó ĐƯỢC COI LÀ CHỈ THỊ VĂN BẢN của Nhà tư vấn! (Và nếu chỉ thị thực chất là Variation -> xử lý theo Điều 13)', en: 'If Contractor confirms the oral instruction in writing within 2 working days and the Engineer does not reject in writing within 2 working days, the confirmation becomes deemed the Engineer’s written instruction' },
          { vi: 'Thời hạn xác nhận là 28 ngày', en: 'Confirmation window is 28 days' },
          { vi: 'Chỉ áp dụng cho Sách Bạc', en: 'Applies solely to Silver Book' }
        ],
        ans: 1,
        expVi: 'Quy tắc vàng bảo vệ Nhà thầu công trường ở Khoản 3.5 (3.3 bản 1999): **2 ngày làm việc + 2 ngày làm việc**! Đồng thời bản 2017 làm rõ thêm: Nếu Nhà thầu coi một chỉ thị dưới danh nghĩa thường thực chất là **Variation**, phải gửi Notice ngay trước khi thực hiện!',
        expEn: 'Sub-Clause 3.5 preserves the **2 working days + 2 working days** oral confirmation rule, plus a new 2017 procedure for instructions disguised as non-variations.'
      },
      {
        id: 'f8-3',
        clause: '3.6 (Replacement of Engineer)',
        qVi: 'Theo Khoản 3.6 [Thay thế Nhà tư vấn] (2017), nếu Chủ đầu tư dự định thay thế Nhà tư vấn, Chủ đầu tư phải gửi Thông báo cho Nhà thầu trước bao nhiêu ngày, và Nhà thầu có quyền phản đối nếu có căn cứ hợp lý không?',
        qEn: 'Under 2017 Sub-Clause 3.6 [Replacement of the Engineer], how much prior Notice must the Employer give the Contractor, and what happens if the Contractor raises a reasonable objection?',
        opts: [
          { vi: 'Chủ đầu tư thay Nhà tư vấn bất kỳ lúc nào không cần báo trước', en: 'Employer replaces Engineer immediately without notice' },
          { vi: 'Phải gửi Thông báo trước không ít hơn **42 ngày** (nêu tên, địa chỉ, kinh nghiệm ứng viên thay thế); nếu Nhà thầu có phản đối hợp lý trong **14 ngày**, Chủ đầu tư KHÔNG ĐƯỢC bổ nhiệm người bị phản đối đó (lưu ý bản 2017 còn quy định thay thế tạm thời tối đa 7 ngày nếu bất khả kháng)!', en: 'Must give not less than **42 days’ Notice**; if Contractor gives reasonable objection within **14 days** with supporting particulars, the Employer shall not appoint that person' },
          { vi: '7 ngày báo trước và Nhà thầu không có quyền phản đối', en: '7 days notice with no Contractor objection right' },
          { vi: '84 ngày báo trước và phải xin phép DAAB', en: '84 days notice and DAAB approval required' }
        ],
        ans: 1,
        expVi: 'Khoản 3.6: Bảo vệ tính độc lập của Nhà tư vấn bằng ngưỡng **42 ngày báo trước** + quyền phản đối hợp lý trong **14 ngày** của Nhà thầu!',
        expEn: 'Sub-Clause 3.6 protects the Engineer role: **42 days’ prior Notice** and **14-day reasonable objection** window for the Contractor.'
      },
      {
        id: 'f8-4',
        clause: '2.1 (Right of Access to Site)',
        qVi: 'Theo Khoản 2.1 [Quyền Tiếp cận Công trường], nếu Hợp đồng quy định Chủ đầu tư bàn giao mặt bằng theo từng giai đoạn/mốc tại Contract Data mà Chủ đầu tư chậm bàn giao, điều kiện nào khiến Nhà thầu KHÔNG được hưởng EOT + Cost + Profit dù Chủ đầu tư bàn giao trễ?',
        qEn: 'Under Sub-Clause 2.1 [Right of Access to the Site], if the Employer delays granting site access/possession, when will the Contractor NOT be entitled to EOT + Cost + Profit?',
        opts: [
          { vi: 'Nếu Nhà thầu chậm tiến độ ở hạng mục khác trước đó', en: 'If Contractor lagged elsewhere' },
          { vi: 'Khi sự chậm bàn giao mặt bằng của Chủ đầu tư là hệ quả do lỗi/chậm trễ của chính Nhà thầu (như chưa nộp Bảo lãnh Thực hiện Hợp đồng theo 4.2 hoặc chưa mua Bảo hiểm theo 19)', en: 'To the extent the Employer’s failure was caused by any error or delay by the Contractor (such as failing to deliver Performance Security or Insurance evidence)' },
          { vi: 'Khi thời tiết xấu xảy ra cùng lúc', en: 'During rainy season' },
          { vi: 'Không bao giờ có ngoại lệ; Nhà thầu luôn được tiền', en: 'Never an exception' }
        ],
        ans: 1,
        expVi: 'Đoạn cuối Khoản 2.1: Quyền khiếu nại EOT + Cost + Profit (qua 20.2) bị loại trừ tương ứng với phần chậm bàn giao phát sinh do sai sót/trễ nghĩa vụ tiên quyết của chính Nhà thầu (như chưa nộp Bảo lãnh Thực hiện Hợp đồng theo 4.2!).',
        expEn: 'Sub-Clause 2.1 entitles EOT + Cost + Profit UNLESS the delay in giving access was caused by an error or delay of the Contractor.'
      },
      {
        id: 'f8-5',
        clause: '4.3 (Contractor’s Representative)',
        qVi: 'Theo Khoản 4.3 [Đại diện của Nhà thầu], nếu người đại diện chính thức của Nhà thầu cần tạm vắng mặt khỏi Công trường hoặc Nhà thầu muốn thay thế Đại diện Nhà thầu đang làm việc, Nhà thầu phải làm gì?',
        qEn: 'Under Sub-Clause 4.3 [Contractor’s Representative], what is required if the Contractor intends to replace its appointed Representative or if they become temporarily absent?',
        opts: [
          { vi: 'Tự ý thay thế rồi báo sau 1 tháng', en: 'Replace unilaterally and report a month later' },
          { vi: 'Không được thay thế hoặc rút người nếu không có sự đồng ý trước của Nhà tư vấn (và phải cử người thay thế phù hợp tương đương trước hoặc khi tạm vắng mặt theo cơ chế bản 2017)', en: 'Contractor shall not revoke the appointment or appoint a replacement without the Engineer’s prior consent (and must appoint a suitably qualified replacement / temporary deputy during absence)' },
          { vi: 'Chỉ cần thông báo cho DAAB', en: 'Merely notify the DAAB' },
          { vi: 'Chờ Chủ đầu tư phê duyệt bằng Phụ lục Hợp đồng', en: 'Requires formal Contract Addendum' }
        ],
        ans: 1,
        expVi: 'Khoản 4.3 (2017) siết chặt cả trình tự đồng ý trước của Nhà tư vấn lẫn quy định thời hạn **28 ngày** (Nhà tư vấn không phản hồi sau 28 ngày coi là chấp thuận!).',
        expEn: 'Sub-Clause 4.3 requires prior Engineer consent for replacement/revocation (with a 28-day deemed-consent check in 2017).'
      },
      {
        id: 'f8-6',
        clause: '4.4 / 5.1 (Subcontractors)',
        qVi: 'Theo Khoản 4.4 [Nhà thầu phụ] (Sách Đỏ 1999) / Khoản 5.1 (Sách Đỏ 2017), giá trị cộng dồn tối đa của tổng phần công việc giao cho Nhà thầu phụ là bao nhiêu (nếu Contract Data có ghi tỷ lệ trần) và Nhà thầu cần báo trước cho Nhà tư vấn bao nhiêu ngày trước khi cho Nhà thầu phụ bắt đầu làm trên công trường?',
        qEn: 'Under Red Book 2017 Sub-Clause 5.1 [Subcontractors] (4.4 in 1999), how many days’ prior Notice must the Contractor give before a consented Subcontractor starts work on Site?',
        opts: [
          { vi: '7 ngày trước ngày dự kiến khởi công của nhà thầu phụ', en: '7 days' },
          { vi: 'Không ít hơn 28 ngày trước ngày dự kiến khởi công tại hiện trường (và Nhà thầu hoàn toàn chịu trách nhiệm về mọi hành vi/sai sót của Nhà thầu phụ như lỗi của chính mình)', en: 'Not less than 28 days before the intended date of each Subcontractor’s commencement on Site (and Contractor remains strictly liable for Subcontractor defaults)' },
          { vi: '14 ngày trước khi ký hợp đồng thầu phụ', en: '14 days' },
          { vi: 'Không cần thông báo nếu nhà thầu phụ đã nêu trong Hồ sơ dự thầu', en: 'No notice needed for pre-listed subcontractors' }
        ],
        ans: 1,
        expVi: 'Khoản 5.1 (RB/17) / 4.4 (99): Nhà thầu không được giao toàn bộ Công trình (và không vượt trần % Contract Data ở 2017); phải xin chấp thuận trước (với 14 ngày deeming của Nhà tư vấn nếu im lặng ở 2017) VÀ thông báo **ít nhất 28 ngày** trước khi thầu phụ vào làm tại công trường!',
        expEn: 'Sub-Clause 5.1 (RB/17) requires prior consent AND at least **28 days’ prior Notice** before commencement on Site.'
      },
      {
        id: 'f8-7',
        clause: '5.2 Nominated Subcontractor (Red)',
        qVi: 'Theo Khoản 5.2 [Nhà thầu phụ Chỉ định - Nominated Subcontractors] trong Sách Đỏ 2017 (Điều 5 bản 1999), Nhà thầu chính có quyền phản đối hợp lý một Nhà thầu phụ Chỉ định do Chủ đầu tư/Nhà tư vấn đưa ra khi nào?',
        qEn: 'Under Red Book Sub-Clause 5.2 [Nominated Subcontractors] (Clause 5 in 1999), when may the Contractor raise a reasonable objection against employing a Nominated Subcontractor?',
        opts: [
          { vi: 'Khi Nhà thầu chính thích sử dụng công ty con của mình hơn', en: 'Whenever Contractor prefers an affiliate' },
          { vi: 'Nếu có cơ sở hợp lý tin rằng Thầu phụ Chỉ định thiếu năng lực/nguồn lực/tài chính, HOẶC hợp đồng thầu phụ không ràng buộc Thầu phụ bồi hoàn cho Nhà thầu chính khỏi sai sót/chậm trễ tương ứng với hợp đồng chính, hoặc không chịu trả tiến độ/trách nhiệm khi chưa được thanh toán back-to-back', en: 'If reasonable grounds show insufficient competence/resources/financial strength, OR the subcontract fails to indemnify the Contractor against defaults or does not include matching/back-to-back payment and performance protections' },
          { vi: 'Nhà thầu chính không bao giờ có quyền từ chối Thầu phụ Chỉ định', en: 'Contractor can never object' },
          { vi: 'Chỉ được phản đối nếu giá thầu phụ đắt hơn dự toán', en: 'Only based on price variance' }
        ],
        ans: 1,
        expVi: 'Khoản 5.2.2 quy định 3 căn cứ phản đối hợp lý rõ ràng giúp bảo vệ Nhà thầu chính khỏi bị ép nhận một Thầu phụ Chỉ định yếu năng lực hoặc đẩy rủi ro pháp lý bất cân xứng lên Nhà thầu chính.',
        expEn: 'Sub-Clause 5.2.2 protects the Contractor via defined reasonable objection grounds (lack of capacity/financials, missing indemnities, or unaligned payment back-to-back terms).'
      },
      {
        id: 'f8-8',
        clause: '7.5 & 7.6 (Defects & Remedial Before TO)',
        qVi: 'Trước Chứng chỉ Bàn giao, nếu Nhà thầu không tuân thủ chỉ thị loại bỏ/thay thế vật tư/công việc sai sót theo Khoản 7.5–7.6 [Bác bỏ & Công việc Khắc phục], Chủ đầu tư được quyền thuê bên khác làm và đòi lại chi phí ở đâu?',
        qEn: 'Prior to Taking-Over, if the Contractor fails to comply with a Sub-Clause 7.6 [Remedial Work] instruction within reasonable time, how does the Employer recover the cost of hiring third parties?',
        opts: [
          { vi: 'Tự ý trừ thẳng tiền mà không cần thông báo hay thủ tục nào', en: 'Deducts unilaterally with zero notice or process' },
          { vi: 'Chủ đầu tư thuê bên khác thực hiện, và gửi Khiếu nại theo **Khoản 20.2** (2017) để thu hồi mọi chi phí hợp lý phát sinh từ Nhà thầu', en: 'Employer may employ others to carry out the work and claim all reasonable costs from the Contractor via **Sub-Clause 20.2**' },
          { vi: 'Chờ đến khi hết bảo hành 11.4 mới được đòi', en: 'Must wait until end of DNP' },
          { vi: 'Không thể thuê bên thứ ba trước khi Bàn giao', en: 'Cannot hire third parties prior to Taking Over' }
        ],
        ans: 1,
        expVi: 'Ở bản 2017 Khoản 7.6, quyền đòi tiền của Chủ đầu tư bắt buộc tuân thủ quy trình Khiếu nại đối xứng **Khoản 20.2**!',
        expEn: 'Under 2017 Sub-Clause 7.6, Employer recovery of third-party remediation costs explicitly follows the Sub-Clause 20.2 claim workflow.'
      },
      {
        id: 'f8-9',
        clause: '8.3 (Early Warning 8.4)',
        qVi: 'Khoản 8.4 [Cảnh báo Sớm - Advance Warning] là điều khoản mới toàn diện của bộ FIDIC 2017 (đưa từ Gold Book 2008 sang Đỏ/Vàng/Bạc). Mục đích và nghĩa vụ của hai bên theo Khoản 8.4 là gì?',
        qEn: 'Sub-Clause 8.4 [Advance Warning] was newly introduced across Red/Yellow/Silver 2017. What obligation does it impose?',
        opts: [
          { vi: 'Chỉ Nhà thầu phải gửi cảnh báo sớm để tính time-bar phạt thay cho Khoản 20.2', en: 'Applies solely to Contractor as a strict time-bar' },
          { vi: 'CẢ HAI Bên và Nhà tư vấn phải thông báo trước cho nhau sớm nhất có thể về bất kỳ sự kiện/hoàn cảnh đã biết hoặc có khả năng xảy ra trong tương lai có thể làm ảnh hưởng bất lợi đến công trình, tăng Giá Hợp đồng hoặc làm chậm tiến độ; Nhà tư vấn có thể yêu cầu đề xuất giải pháp phòng ngừa', en: 'Each Party (and the Engineer) shall advise the other in advance of any known or probable future events/circumstances that may adversely affect the work, increase Contract Price, or delay execution' },
          { vi: 'Cảnh báo sớm tự động thay thế hoàn toàn Notice of Claim của Khoản 20.2', en: 'Advance Warning replaces a Sub-Clause 20.2 Notice of Claim' },
          { vi: 'Áp dụng phạt tiền nếu quên gửi Advance Warning', en: 'Automatic liquidated damages apply for omitting Advance Warning' }
        ],
        ans: 1,
        expVi: 'Lưu ý rất quan trọng khi thi FCCM: **Advance Warning (8.4)** là trách nhiệm hợp tác chung của CẢ 2 bên và KHÔNG thay thế cho Notice of Claim (20.2.1), dù có thể là chứng cứ hữu ích dưới 20.2.5!',
        expEn: 'Sub-Clause 8.4 creates a reciprocal collaborative duty (adopted from NEC/Gold Book), distinct from a formal Sub-Clause 20.2 Notice of Claim.'
      },
      {
        id: 'f8-10',
        clause: '1.12 (Confidentiality)',
        qVi: 'Theo Khoản 1.12 [Bảo mật - Confidentiality] (2017), Nhà thầu bị ràng buộc nghĩa vụ bảo mật chi tiết hợp đồng như thế nào, và Chủ đầu tư/Nhà tư vấn có nghĩa vụ tương ứng nào?',
        qEn: 'Under 2017 Sub-Clause 1.12 [Confidentiality], what reciprocal obligations bind the Contractor, Employer and Engineer?',
        opts: [
          { vi: 'Chỉ Nhà thầu phải bảo mật; Chủ đầu tư được công khai bí mật công nghệ của Nhà thầu thoải mái', en: 'Only Contractor has confidentiality duties' },
          { vi: 'Nhà thầu giữ bí mật mọi chi tiết hợp đồng (trừ phạm vi cần thiết để thực hiện/tuân thủ luật); bản 2017 bổ sung đối xứng: Chủ đầu tư và Nhà tư vấn cũng PHẢI giữ bí mật các thông tin do Nhà thầu cung cấp và chỉ rõ là bí mật ("confidential")', en: 'Contractor treats Contract details as confidential, AND (new in 2017) Employer and Engineer must treat as confidential all information supplied by Contractor and marked confidential' },
          { vi: 'Nhà thầu được tự do đăng toàn bộ đơn giá dự thầu lên mạng xã hội', en: 'Contractor may publish unit rates publicly' },
          { vi: 'Nghĩa vụ bảo mật hết hiệu lực khi ký hợp đồng', en: 'Confidentiality expires at Contract signing' }
        ],
        ans: 1,
        expVi: 'Khoản 1.12 (2017) cân bằng nghĩa vụ bảo mật hai chiều để bảo vệ bí quyết kỹ thuật và giá thầu của Nhà thầu.',
        expEn: '2017 Sub-Clause 1.12 adds reciprocal confidentiality protecting Contractor-marked confidential information.'
      },
      {
        id: 'f8-11',
        clause: '10.3 (Interference with Tests)',
        qVi: 'Theo Khoản 10.3 [Cản trở Kiểm định khi Hoàn thành], nếu Nhà thầu bị ngăn cản thực hiện Kiểm định khi Hoàn thành (Tests on Completion) trong hơn **14 ngày** (liên tục hoặc cộng dồn) do nguyên nhân thuộc trách nhiệm của Chủ đầu tư, hệ quả pháp lý nào xảy ra?',
        qEn: 'Under Sub-Clause 10.3 [Interference with Tests on Completion], if the Contractor is prevented from carrying out Tests on Completion for more than **14 days** (continuous or in aggregate) due to a cause for which the Employer is responsible, what occurs?',
        opts: [
          { vi: 'Nhà thầu phải tự chịu chờ vô thời hạn cho đến khi kiểm định xong mới được bàn giao', en: 'Contractor waits indefinitely before Taking Over' },
          { vi: 'Chủ đầu tư được coi là đã Bàn giao Công trình/Hạng mục (Deemed Taking Over) vào ngày đáng lẽ kiểm định hoàn thành (hoặc ngày thứ 14 tùy bản 17 vs 99 — ở 2017 là ngày thứ 14 sau thời điểm kiểm định đáng lẽ xong / ngày tiếp theo, và Nhà tư vấn phải cấp TOC + Nhà thầu được EOT + Cost + Profit khi thực hiện kiểm định bù trong DNP!)', en: 'The Employer is deemed to have taken over the Works/Section (Engineer must issue TOC, and Contractor may claim EOT + Cost + Profit for interference and subsequent testing in DNP)' },
          { vi: 'Công trình bị từ chối nghiệm thu', en: 'Works are rejected' },
          { vi: 'Nhà thầu bị trừ 10% giá trị kiểm định', en: '10% deduction applies' }
        ],
        ans: 1,
        expVi: 'Khoản 10.3 (14 ngày): Bảo vệ Nhà thầu khỏi tình trạng Chủ đầu tư chậm cấp điện/nước/nguyên liệu đầu vào làm kẹt kiểm định mãi không bàn giao được -> Deemed Taking Over + TOC + EOT + Cost + Profit!',
        expEn: 'Preventing Tests on Completion for >14 days due to Employer causes triggers Deemed Taking Over under 10.3 plus EOT + Cost + Profit.'
      },
      {
        id: 'f8-12',
        clause: '1.4 (Law & Language)',
        qVi: 'Theo Khoản 1.4 [Luật và Ngôn ngữ], nếu Hợp đồng được soạn thảo bằng nhiều ngôn ngữ mà không chỉ rõ ngôn ngữ ưu tiên, hoặc nếu Contract Data bỏ trống ngôn ngữ trao đổi thông tin (ruling language / language for communications), quy định mặc định là gì?',
        qEn: 'Under Sub-Clause 1.4 [Law and Language], if versions of any Contract part are written in more than one language (and Contract Data omits specifying ruling language), which version prevails?',
        opts: [
          { vi: 'Luôn ưu tiên tiếng Pháp', en: 'French always prevails' },
          { vi: 'Ưu tiên bản ngôn ngữ ghi tại Contract Data làm "ruling language" (ngôn ngữ chính thức); và ngôn ngữ giao dịch mặc định nếu Contract Data bỏ trống là ngôn ngữ mà phần lớn văn bản Hợp đồng (hoặc bản ruling language) được viết bằng', en: 'The version in the "ruling language" stated in Contract Data prevails; if language for communications is unstated, it defaults to the ruling language (or the language in which the Contract is written)' },
          { vi: 'Cả hai ngôn ngữ có giá trị pháp lý ngang nhau dù mâu thuẫn', en: 'Both versions carry equal weight even in conflict' },
          { vi: 'Ngôn ngữ của Quốc gia nhà thầu luôn thắng', en: 'Contractor’s home language prevails' }
        ],
        ans: 1,
        expVi: 'Khi dịch & áp dụng hợp đồng FIDIC song ngữ (Anh–Việt tại Việt Nam!), luôn kiểm tra kỹ Khoản 1.4 ở Contract Data xem **Ruling Language** là Tiếng Anh hay Tiếng Việt để tránh rủi ro sai khác dịch thuật!',
        expEn: 'Always check Ruling Language in Contract Data under 1.4, particularly critical for bilingual contracts in civil/Asian jurisdictions.'
      }
    ]
  },
  {
    id: 'set-9-termination-arbitration',
    level: 4,
    levelBadge: '⭐⭐⭐⭐',
    levelVi: 'Thực chiến',
    levelEn: 'Expert Case-Study',
    badge: 'Set 9 · 12 câu',
    titleVi: 'Đề 9: Thu hồi Bảo lãnh, Quyết toán Chấm dứt & Quy tắc DAAB/Trọng tài',
    titleEn: 'Set 9: Performance Security Calls, Termination Accounts & DAAB Rules',
    durationMin: 30,
    questions: [
      {
        id: 'f9-1',
        clause: '4.2.2 (Claims Under Security)',
        qVi: 'Theo Khoản 4.2.2 [Khiếu nại Bảo lãnh Thực hiện Hợp đồng] bản 2017, Chủ đầu tư CHỈ được phép rút tiền (call/make a demand) từ Bảo lãnh Thực hiện Hợp đồng khi xảy ra ít nhất một trong các trường hợp giới hạn nào?',
        qEn: 'Under 2017 Sub-Clause 4.2.2 [Claims under the Performance Security], in which limited circumstances is the Employer permitted to make a demand under the Performance Security?',
        opts: [
          { vi: 'Chủ đầu tư được gọi rút bảo lãnh bất kỳ lúc nào không cần lý do (unconditional on-demand)', en: 'Whenever Employer desires without restriction' },
          { vi: 'CHỈ theo 4 trường hợp: (a) Nhà thầu không gia hạn bảo lãnh khi hết hạn <28 ngày trước ngày đáo hạn; (b) Nhà thầu không trả số tiền đã được đồng ý/quyết định tại 3.7/DAAB trong 42 ngày; (c) Nhà thầu không sửa sai sót trong 42 ngày sau thông báo; hoặc (d) Chủ đầu tư đã chấm dứt hợp đồng theo Khoản 15.2', en: 'ONLY for: (a) failure to extend security 28 days before expiry; (b) failure to pay amounts due within 42 days after agreement/3.7/DAAB decision; (c) failure to remedy a default within 42 days after Notice; or (d) grounds for termination under Sub-Clause 15.2' },
          { vi: 'Ngay khi có bất kỳ chậm trễ 1 ngày trên công trường', en: 'Immediately upon a 1-day schedule slip' },
          { vi: 'Chủ đầu tư hoàn toàn không được phép rút bảo lãnh', en: 'Employer may never draw the security' }
        ],
        ans: 1,
        expVi: 'Dù bảo lãnh ngân hàng thường là "on-demand" vô điều kiện với ngân hàng phát hành, Khoản 4.2.2 (4.2 bản 1999) ràng buộc Chủ đầu tư theo hợp đồng CHỈ được rút trong 4 tình huống cụ thể (nếu rút sai, Chủ đầu tư phải bồi hoàn toàn bộ thiệt hại cho Nhà thầu theo 4.2.2!).',
        expEn: 'Sub-Clause 4.2.2 restricts Employer demands on the Performance Security to four exhaustive contractual triggers, backed by an Employer indemnity for wrongful calls.'
      },
      {
        id: 'f9-2',
        clause: '4.2.3 (Return of Security)',
        qVi: 'Theo Khoản 4.2.3 [Hoàn trả Bảo lãnh Thực hiện Hợp đồng], Chủ đầu tư phải trả lại Bảo lãnh Thực hiện Hợp đồng cho Nhà thầu trong thời hạn bao nhiêu ngày sau khi cấp Chứng chỉ Thực hiện (Performance Certificate)?',
        qEn: 'Under Sub-Clause 4.2.3 [Return of the Performance Security], within how many days after issue of the Performance Certificate (or termination clearance) must the Employer return the Performance Security?',
        opts: [
          { vi: '7 ngày', en: '7 days' },
          { vi: '21 ngày sau khi Nhà thầu nhận được Chứng chỉ Thực hiện (và bản 2017 cũng yêu cầu trả lại trong 21 ngày sau chấm dứt thuận tiện 15.5 / Nhà thầu chấm dứt 16.2 / Sự kiện Ngoại lệ 18.5!)', en: 'Within 21 days after issue of the Performance Certificate (or after termination under 15.5, 16.2, or 18.5 in 2017)' },
          { vi: '56 ngày', en: '56 days' },
          { vi: '84 ngày', en: '84 days' }
        ],
        ans: 1,
        expVi: 'Mốc chuẩn **21 ngày** tại Khoản 4.2.3 (4.2 đoạn cuối bản 1999) — một con số hay bị nhầm với 28 ngày (thời hạn cấp Chứng chỉ Thực hiện 11.9)!',
        expEn: 'Notice the FCCM timing distinction: Performance Certificate is issued within 28 days (11.9), then Performance Security is returned within **21 days** (4.2.3).'
      },
      {
        id: 'f9-3',
        clause: '15.3 & 15.4 (Payment after Termination)',
        qVi: 'Sau khi Chủ đầu tư chấm dứt hợp đồng do lỗi Nhà thầu theo Khoản 15.2, việc thanh toán tiếp theo cho Nhà thầu theo Khoản 15.3–15.4 diễn ra như thế nào?',
        qEn: 'Following Employer termination for Contractor default under Sub-Clause 15.2, how are payments handled under Sub-Clauses 15.3–15.4?',
        opts: [
          { vi: 'Chủ đầu tư phải trả ngay toàn bộ tiền giữ lại cho Nhà thầu', en: 'Employer immediately releases all Retention Money' },
          { vi: 'Chủ đầu tư ĐƯỢC QUYỀN TẠM DỪNG MỌI THANH TOÁN cho đến khi xác định xong toàn bộ chi phí thi công phần còn lại do bên khác làm, chi phí sửa sai sót, Delay Damages trước chấm dứt và mọi thiệt hại khác (Khoản 3.7 định giá sau hoàn thiện)', en: 'Employer may withhold further payments until the costs of design, execution, completion, remediation, Delay Damages (up to termination date) and any extra completion costs are established via 3.7' },
          { vi: 'Chủ đầu tư không được thuê nhà thầu khác hoàn thành công trình', en: 'Employer cannot hire a replacement contractor' },
          { vi: 'Nhà thầu mất luôn phần giá trị đã nghiệm thu trước đó mà không cần đối trừ', en: 'Contractor automatically forfeits prior certified value without accounting' }
        ],
        ans: 1,
        expVi: 'Khoản 15.3–15.4 (2017 làm rõ thêm cả cách tính Delay Damages trước ngày chấm dứt): Tạm giữ mọi khoản chi trả -> thuê hoàn thiện công trình -> xác định quyết toán bù trừ cuối cùng theo 3.7.',
        expEn: 'Under 15.3–15.4, Employer withholds further payment until completion/remediation/extra costs and pre-termination Delay Damages are finalized.'
      },
      {
        id: 'f9-4',
        clause: '16.4 (Payment after Contractor Termination)',
        qVi: 'Ngược lại, nếu Nhà thầu chấm dứt hợp đồng hợp pháp do lỗi Chủ đầu tư theo Khoản 16.2, Khoản 16.4 [Thanh toán sau khi Nhà thầu Chấm dứt] quy định Chủ đầu tư phải trả những gì?',
        qEn: 'If the Contractor validly terminates under Sub-Clause 16.2 for Employer default, what must the Employer pay under Sub-Clause 16.4?',
        opts: [
          { vi: 'Chỉ trả đúng phần đã hoàn thành, không được tính lợi nhuận bị mất', en: 'Work done only, excluding lost profit' },
          { vi: 'Hoàn trả Bảo lãnh Thực hiện (4.2.3), trả mọi khoản theo Khoản 18.5 (giá trị đã làm + giải thể + đặt hàng hủy + hồi hương), VÀ bồi thường thêm Mất Lợi nhuận hoặc tổn thất/thiệt hại khác ("loss of profit or other losses and damages suffered") do chấm dứt!', en: 'Return Performance Security (4.2.3), pay 18.5 termination sums (work executed, ordered Plant/Materials, demobilization), AND pay Contractor’s **loss of profit or other losses and damages**' },
          { vi: 'Chỉ trả tối đa 5% giá trị phần còn lại', en: 'Capped at 5% of remaining works' },
          { vi: 'Phải chờ 5 năm sau khi công trình xong mới thanh toán', en: 'Payable 5 years after completion' }
        ],
        ans: 1,
        expVi: 'Khi Chủ đầu tư vi phạm dẫn tới Nhà thầu chấm dứt (16.2/16.4), Nhà thầu luôn được hưởng trọn bộ **Costs + Loss of Profit** (giống hệt cơ chế 15.6 ở bản 2017!).',
        expEn: 'Valid Contractor termination under 16.2 triggers full recovery under 16.4 including 18.5 sums PLUS loss of profit and damages.'
      },
      {
        id: 'f9-5',
        clause: 'DAAB Rules & Retainer Fee',
        qVi: 'Theo Thỏa thuận DAAB & Quy tắc Thủ tục (DAAB Procedural Rules) trong bộ 2017, chi phí thù lao thường trực (retainer fee) và chi phí ngày công (daily fee) của thành viên DAAB do ai chi trả?',
        qEn: 'Under the 2017 General Conditions (Sub-Clause 21.1 & General Conditions of DAAB Agreement), how are the DAAB members’ retainer and daily fees borne?',
        opts: [
          { vi: 'Bên khiếu nại trả 100% trước', en: 'Claiming party pays 100%' },
          { vi: 'Chia đều 50/50 giữa Chủ đầu tư và Nhà thầu (mỗi bên trả một nửa hóa đơn của DAAB; nếu một bên không đóng, bên kia được quyền đóng hộ và thu hồi qua 14.6/20.2 hoặc DAAB từ chối ra quyết định)', en: 'Shared 50/50 between Employer and Contractor; if one Party fails to pay its share, the other Party may pay on its behalf and recover the sum as a debt/under IPC' },
          { vi: 'Chủ đầu tư trả 100% để đảm bảo độc lập', en: 'Employer pays 100%' },
          { vi: 'Trừ trực tiếp từ tiền lương Nhà tư vấn', en: 'Deducted from Engineer fees' }
        ],
        ans: 1,
        expVi: 'Nguyên tắc bình đẳng DAAB (21.1 / Phụ lục DAAB): Chủ đầu tư trả 50%, Nhà thầu trả 50%; và bản 2017 làm rõ quyền thanh toán hộ + thu hồi lập tức (qua IPC hoặc yêu cầu trực tiếp) nếu một bên chây ì đóng phí DAAB nhằm phá hoại thủ tục!',
        expEn: 'DAAB remuneration is split 50/50 between Employer and Contractor, with explicit pay-on-behalf and immediate recovery remedies if a Party stalls payment.'
      },
      {
        id: 'f9-6',
        clause: '21.2 (Failure to Appoint DAAB)',
        qVi: 'Theo Khoản 21.2 [Không Bổ nhiệm được Thành viên DAAB], nếu hai Bên bế tắc không thống nhất được nhân sự thành lập DAAB hoặc một bên từ chối ký Thỏa thuận DAAB, giải pháp thoát bế tắc theo hợp đồng là gì?',
        qEn: 'Under Sub-Clause 21.2 [Failure to Appoint DAAB Member(s)], how is a deadlock or refusal to appoint/sign resolved?',
        opts: [
          { vi: 'Hợp đồng tự động chấm dứt', en: 'Contract terminates' },
          { vi: 'Cơ quan/Cá nhân Chỉ định (Appointing Entity / Official nêu tại Contract Data — mặc định là Chủ tịch FIDIC hoặc người do Chủ tịch ủy quyền nếu bỏ trống) sẽ chỉ định sau tham vấn và quyết định đó mang tính chung thẩm & ràng buộc, các Bên mặc nhiên bị coi là đã ký DAAB Agreement!', en: 'The Appointing Entity/Official named in Contract Data (defaulting to President of FIDIC) appoints the member(s) in final and conclusive manner, and the Parties are deemed to have signed the DAAB Agreement!' },
          { vi: 'Nhà tư vấn tự làm thành viên DAAB duy nhất', en: 'Engineer becomes sole DAAB member' },
          { vi: 'Phải kiện ra tòa án địa phương xin chỉ định', en: 'Must petition local courts' }
        ],
        ans: 1,
        expVi: 'Bản 2017 Khoản 21.2 khóa chặt lỗ hổng "tẩy chay DAAB": Chủ tịch FIDIC (nếu Contract Data bỏ trống) có quyền chỉ định thẳng và hai bên mặc nhiên bị ràng buộc bởi Thỏa thuận DAAB!',
        expEn: 'Sub-Clause 21.2 eliminates DAAB obstruction: the Appointing Entity (defaulting to FIDIC President) makes a binding appointment and Parties are deemed bound by the DAAB Agreement.'
      },
      {
        id: 'f9-7',
        clause: '21.6 (Arbitration - No Limitation)',
        qVi: 'Theo Khoản 21.6 [Trọng tài - Arbitration], Hội đồng Trọng tài ICC có bị giới hạn chỉ xem xét lại những chứng cứ và luận cứ pháp lý đã từng xuất trình trước Nhà tư vấn hay DAAB trước đó không?',
        qEn: 'Under Sub-Clause 21.6 [Arbitration], is the arbitral tribunal restricted to the arguments and evidence previously placed before the Engineer or the DAAB?',
        opts: [
          { vi: 'Có, cấm tuyệt đối không được bổ sung chứng cứ mới tại trọng tài', en: 'Yes — strictly barred from admitting new evidence' },
          { vi: 'Không! Hội đồng Trọng tài có toàn quyền mở ra, xem xét lại và sửa đổi mọi chứng nhận, quyết định, chỉ thị, định giá của Nhà tư vấn cũng như mọi Quyết định (trừ khi đã Final & Binding) của DAAB, và không bên nào bị giới hạn bởi chứng cứ/lập luận từng trình bày trước DAAB', en: 'No — the arbitrator(s) have full power to open up, review and revise any Engineer determination/certificate or non-final DAAB decision, and neither Party is limited to prior evidence or arguments' },
          { vi: 'Trọng tài chỉ xem xét thủ tục mà không xem xét nội dung kỹ thuật', en: 'Procedural review only' },
          { vi: 'Chỉ có quyền sửa đổi khi có sự đồng ý của Nhà tư vấn', en: 'Requires Engineer consent' }
        ],
        ans: 1,
        expVi: 'Khoản 21.6 quy định xét xử lại từ đầu ("de novo review"): Hội đồng Trọng tài có toàn quyền "open up, review and revise" và không bị trói vào chứng cứ cũ trước DAAB (trừ quy định tôn trọng quyết định đã Final & Binding).',
        expEn: 'Arbitration under 21.6 is de novo: full authority to open up, review and revise prior determinations/DAAB decisions, unrestricted to earlier evidence.'
      },
      {
        id: 'f9-8',
        clause: '21.4.4 (Error in Final DAAB)',
        qVi: 'Theo Khoản 21.4.4 (bản 2017), trường hợp nào MỘT PHẦN hoặc TOÀN BỘ tranh chấp dù đã có Quyết định DAAB không bị gửi NOD trong 28 ngày nhưng vẫn có thể bị đưa ra trọng tài xem xét tính thi hành? Và trọng tài xử lý việc không tuân thủ Quyết định DAAB chưa NOD ra sao?',
        qEn: 'Under 2017 Sub-Clause 21.4.4, once a DAAB decision receives NO valid NOD within 28 days, what is its legal status under Clause 21.4.4 & 21.7?',
        opts: [
          { vi: 'Chỉ mang tính khuyến nghị tham khảo', en: 'Merely advisory' },
          { vi: 'Trở thành Chung thẩm và Ràng buộc ("Final and Binding") đối với cả hai Bên; nếu một bên không thi hành, bên kia đưa thẳng ra Trọng tài (21.7) để tuyên thi hành bằng phán quyết trọng tài nhanh mà không cần xem xét lại nội dung vụ việc', en: 'Becomes Final and Binding on both Parties; any failure to comply is enforceable directly via summary arbitration under Sub-Clause 21.7 without re-opening the merits' },
          { vi: 'Vẫn có thể kháng cáo nội dung sau 6 tháng', en: 'Merits remain appealable after 6 months' },
          { vi: 'Hết hiệu lực khi Performance Certificate được cấp', en: 'Expires upon Performance Certificate' }
        ],
        ans: 1,
        expVi: 'Không gửi NOD trong **28 ngày** theo 21.4.4 biến Quyết định DAAB thành **Final and Binding** (không thể lật lại nội dung ở trọng tài — chỉ đưa ra trọng tài 21.7 để ép thi hành nếu bên thua chây ì)!',
        expEn: 'Absent an NOD within 28 days, a DAAB decision becomes Final and Binding, enforceable directly in arbitration under 21.7 without re-litigating the merits.'
      },
      {
        id: 'f9-9',
        clause: 'DAAB Rule 7 & Site Visits',
        qVi: 'Theo Quy tắc Thủ tục DAAB (DAAB Procedural Rules) bản 2017, DAAB thường trực phải tổ chức các chuyến thăm Công trường định kỳ (Site Visits) với tần suất mặc định nào nếu chưa thỏa thuận khác?',
        qEn: 'Under the 2017 DAAB Procedural Rules (Rule 3), how frequently must a Standing DAAB normally hold Site Visits and meetings (absent other agreement)?',
        opts: [
          { vi: 'Mỗi năm 1 lần duy nhất', en: 'Once a year' },
          { vi: 'Khoảng thời gian đều đặn, thường không cách nhau quá **140 ngày** và không ít hơn **70 ngày** (tùy tiến độ thực địa hoặc yêu cầu đột xuất của các bên, kể cả họp trực tuyến nếu khẩn cấp)', en: 'At intervals of not more than 140 days and not less than 70 days (unless otherwise agreed by Parties and DAAB, or special meetings at critical construction events)' },
          { vi: 'Chỉ thăm công trường khi có đơn khởi kiện', en: 'Only after formal Dispute Referral' },
          { vi: 'Mỗi tuần 1 lần bắt buộc', en: 'Weekly mandatory site visits' }
        ],
        ans: 1,
        expVi: 'Quy tắc DAAB số 3.2 (2017): Khoảng cách giữa các chuyến thăm công trường/họp thường kỳ là **từ 70 đến 140 ngày** (tạo nhịp bám sát công trường để phòng ngừa tranh chấp!).',
        expEn: 'DAAB Procedural Rule 3.2 specifies periodic site visits/meetings spaced between **70 and 140 days** apart.'
      },
      {
        id: 'f9-10',
        clause: '7.7 & 14.12 (Ownership Plant/Mat)',
        qVi: 'Theo Khoản 7.7 [Quyền sở hữu Thiết bị và Vật tư - Ownership of Plant and Materials], vào thời điểm nào thì Thiết bị và Vật tư trở thành tài sản của Chủ đầu tư?',
        qEn: 'Under Sub-Clause 7.7 [Ownership of Plant and Materials], when does each item of Plant and Materials become the property of the Employer (to the extent consistent with country laws)?',
        opts: [
          { vi: 'Chỉ sau khi cấp Performance Certificate ở cuối bảo hành', en: 'Only upon Performance Certificate' },
          { vi: 'Vào thời điểm NÀO XẢY RA SỚM HƠN giữa: (a) khi được giao tới Công trường, hoặc (b) khi Nhà thầu được quyền thanh toán giá trị Thiết bị/Vật tư đó trong trường hợp tạm ngừng/thanh toán hàng chưa lắp (theo 8.11 / 14.5)', en: 'Whichever is EARLIER of: (a) when delivered to the Site, or (b) when the Contractor is paid (or entitled to payment) for Plant/Materials under suspension (8.11) or delivery (14.5)' },
          { vi: 'Ngay khi Nhà thầu ký đơn đặt hàng tại nhà máy ở nước ngoài', en: 'Upon factory PO signature abroad' },
          { vi: 'Không bao giờ chuyển sở hữu sang Chủ đầu tư', en: 'Never transfers to Employer' }
        ],
        ans: 1,
        expVi: 'Khoản 7.7 (vốn bảo vệ Chủ đầu tư nếu Nhà thầu phá sản giữa chừng): Tài sản chuyển sang Chủ đầu tư (miễn trừ cầm cố/nợ) ngay tại mốc sớm hơn giữa **giao tới Site** hoặc **được chứng nhận thanh toán (14.5 / 8.11)**!',
        expEn: 'Sub-Clause 7.7 passes ownership free of liens at the earlier of Site delivery or payment entitlement (8.11/14.5).'
      },
      {
        id: 'f9-11',
        clause: '8.10–8.12 (Employer Suspension)',
        qVi: 'Nếu Nhà tư vấn chỉ thị Tạm ngừng Công việc (Suspension) theo Khoản 8.9 mà nguyên nhân KHÔNG do lỗi của Nhà thầu, và tình trạng tạm ngừng đó kéo dài liên tục quá **84 ngày** (Khoản 8.12), Nhà thầu có quyền gì?',
        qEn: 'Under Sub-Clause 8.12 [Prolonged Suspension], if an Engineer-instructed suspension (not due to Contractor default) continues for more than **84 days**, what may the Contractor do?',
        opts: [
          { vi: 'Phải tiếp tục chờ miễn phí thêm 180 ngày', en: 'Must wait 180 more days' },
          { vi: 'Gửi Notice xin phép tiếp tục thi công trong **28 ngày**; nếu Nhà tư vấn không cho phép trong 28 ngày, Nhà thầu có thể coi việc tạm ngừng là **cắt giảm theo Điều 13** (nếu chỉ tác động một phần) HOẶC gửi Notice chấm dứt hợp đồng theo Khoản 16.2 (nếu ảnh hưởng toàn bộ Công trình)!', en: 'Give Notice requesting permission to proceed; if Engineer fails to give permission within **28 days**, Contractor may treat affected part as a Clause 13 omission OR (if whole Works affected) terminate under Sub-Clause 16.2!' },
          { vi: 'Tự ý phá bỏ lán trại không cần gửi Notice', en: 'Demobilize unilaterally without notice' },
          { vi: 'Chỉ được đòi EOT mà không được chấm dứt', en: 'EOT only without termination right' }
        ],
        ans: 1,
        expVi: 'Quy trình 2 bước kinh điển của Khoản 8.12 (8.11 bản 1999): Tạm ngừng do lỗi/quyết định Chủ đầu tư kéo dài **> 84 ngày** -> Nhà thầu xin phép làm lại -> chờ **28 ngày** -> nếu vẫn im lặng: cắt giảm (13.3) hoặc chấm dứt (16.2)!',
        expEn: 'Prolonged Suspension (>84 days + 28-day permission Notice) under 8.12 triggers Clause 13 omission (if partial) or Clause 16.2 termination (if whole Works).'
      },
      {
        id: 'f9-12',
        clause: '4.18 & 4.8 (HSE / Environment 2017)',
        qVi: 'So với bản 1999, các bộ FIDIC 2017 tăng cường nghĩa vụ An toàn Sức khỏe và Môi trường (Khoản 4.8 [Health and Safety Obligations] & Khoản 4.18 [Protection of the Environment]) như thế nào?',
        qEn: 'How did the 2017 FIDIC editions expand Health, Safety and Environmental obligations under Sub-Clauses 4.8 and 4.18 compared to 1999?',
        opts: [
          { vi: 'Rút gọn bớt các quy định an toàn công trường', en: 'Reduced site safety rules' },
          { vi: 'Bắt buộc thiết lập Hệ thống Quản lý Tuân thủ (Compliance Verification System - Khoản 4.9.2), bổ nhiệm Cán bộ An toàn Sức khỏe có trình độ (4.8), nộp Kế hoạch Sức khỏe & An toàn trong 21 ngày sau Ngày Khởi công, và ghi nhận trách nhiệm đánh giá rủi ro môi trường chi tiết', en: 'Mandates submitting a Health and Safety Manual/Plan within 21 days of Commencement Date, appointing a dedicated Health & Safety Officer (4.8), operating a Compliance Verification System (4.9.2), and stricter environmental controls (4.18)' },
          { vi: 'Chuyển toàn bộ trách nhiệm an toàn công trường sang Chủ đầu tư', en: 'Transferred all site safety responsibility to Employer' },
          { vi: 'Chỉ áp dụng cho dự án thủy điện', en: 'Applies to hydropower projects only' }
        ],
        ans: 1,
        expVi: 'Bản 2017 nâng chuẩn Quản lý Chất lượng & An toàn lên rất cao (để phù hợp yêu cầu các ngân hàng phát triển như World Bank/ADB): Bổ sung Quality Management System (4.9.1) + Compliance Verification System (4.9.2) + Health & Safety Manual 21 ngày (4.8)!',
        expEn: '2017 editions significantly strengthened HSE & QA compliance (21-day H&S manual, dedicated H&S Officer under 4.8, QMS 4.9.1 & Compliance Verification System 4.9.2).'
      }
    ]
  },
  {
    id: 'set-10-case-math-traps',
    level: 4,
    levelBadge: '⭐⭐⭐⭐',
    levelVi: 'Thực chiến',
    levelEn: 'Expert Case-Study',
    badge: 'Set 10 · 12 câu',
    titleVi: 'Đề 10: Tình huống Số liệu, Tính toán BoQ/EOT & Án lệ Quốc tế',
    titleEn: 'Set 10: Numeric Scenarios, BoQ/DD Calculations & Landmark Cases',
    durationMin: 35,
    questions: [
      {
        id: 'f10-1',
        clause: 'Red 12.3 Math',
        qVi: 'Bài toán BoQ Sách Đỏ (Khoản 12.3): Giá Hợp đồng Được chấp nhận (ACA) = 100 triệu USD. Một hạng mục đào đá trong BoQ ước tính 10.000 m³ với đơn giá $5/m³. Khối lượng đo thực tế khi hoàn thành là 11.500 m³ (tăng +15%) và chi phí đơn vị trực tiếp tăng 3%. Có đủ điều kiện để áp đơn giá mới theo 12.3(b) không?',
        qEn: 'Red Book 12.3 Calculation: Accepted Contract Amount (ACA) = $100M. An excavation item in BoQ is estimated at 10,000 m³ at $5/m³. Actual measured quantity is 11,500 m³ (+15%) and direct unit cost rose 3%. Is the item eligible for a new rate under 12.3(b)?',
        opts: [
          { vi: 'Có, vì khối lượng đã tăng 15% vượt mốc 10%', en: 'Yes, because quantity exceeded the 10% threshold' },
          { vi: 'KHÔNG — Mặc dù biến động khối lượng (+15% > 10%) và biến đổi chi phí/đơn vị (3% > 1%) đều đạt, nhưng tích `(1.500 × $5) = $7.500` chỉ bằng **0,0075% ACA**, nhỏ hơn ngưỡng bắt buộc **> 0,01% ACA ($10.000)**!', en: 'NO — While quantity (+15% > 10%) and unit cost change (+3% > 1%) pass, `(1,500 × $5) = $7,500` equals only **0.0075% of ACA**, failing the cumulative **> 0.01% ACA ($10,000)** threshold!' },
          { vi: 'Có, vì chi phí đơn vị tăng quá 1%', en: 'Yes, because unit cost rose > 1%' },
          { vi: 'Bắt buộc chuyển sang Daywork', en: 'Converts automatically to Daywork' }
        ],
        ans: 1,
        expVi: 'Đề FCCM thực chiến rất hay cho phép tính nhẩm cả 4 điều kiện tích lũy của Khoản 12.3(a)/(b): Phải thỏa mãn ĐỒNG THỜI `(1) >10% qty`, `(2) ΔQty × Rate > 0.01% ACA`, `(3) Δunit cost > 1%`, và `(4) không phải fixed rate`. Thiếu 1 điều kiện -> giữ nguyên đơn giá BoQ!',
        expEn: 'Classic FCCM arithmetic trap on 12.3(b): All four criteria are cumulative. Here `$7,500 / $100M = 0.0075% <= 0.01%`, so the original BoQ rate remains!'
      },
      {
        id: 'f10-2',
        clause: '10.2 / 8.8 Math',
        qVi: 'Tính giảm Tiền bồi thường chậm trễ (Khoản 10.2): Giá Hợp đồng = 40 triệu USD. Tiền chậm trễ (Delay Damages) toàn bộ Công trình là $40.000/ngày. Chủ đầu tư bàn giao sớm và đưa vào sử dụng 1 Phần (Part) trị giá 10 triệu USD trước khi cấp TOC toàn bộ. Phần còn lại bị chậm 10 ngày. Tổng Delay Damages cho 10 ngày chậm trễ phần còn lại là bao nhiêu?',
        qEn: 'Sub-Clause 10.2 Pro-Rata Math: Contract Price = $40M; Delay Damages = $40,000/day. Employer takes over/uses a Part valued at $10M early before whole-Works completion. Remaining Works finish 10 days late. What are total Delay Damages?',
        opts: [
          { vi: '$400.000 (vẫn giữ nguyên $40.000/ngày)', en: '$400,000 ($40,000/day unchanged)' },
          { vi: '$300.000 — Vì phần bàn giao trước chiếm $10M / $40M = 25% Giá Hợp đồng, nên tỷ lệ Delay Damages cho phần còn lại giảm tương ứng còn 75% × $40.000 = **$30.000/ngày** (× 10 ngày = $300.000)!', en: '$300,000 — Taking over a $10M Part (25% of $40M) reduces Delay Damages for the remainder proportionally by 25% to **$30,000/day** (× 10 days = $300,000)' },
          { vi: '$100.000', en: '$100,000' },
          { vi: '$0 — Không được phạt chậm trễ nếu đã bàn giao 1 phần', en: '$0 — Delay Damages void completely' }
        ],
        ans: 1,
        expVi: 'Khoản 10.2 quy định giảm tỷ lệ Delay Damages cho phần còn lại theo tỷ lệ giá trị của Phần đã bàn giao so với tổng Giá Hợp đồng (tính tại ngày chấp nhận/bàn giao đó) — KHÔNG làm vô hiệu hoàn toàn quyền phạt chậm trễ phần còn lại!',
        expEn: 'Under Sub-Clause 10.2, early taking-over of a Part reduces Delay Damages pro-rata to remaining value ($30M/$40M = 75% × $40,000/d × 10d = $300,000), rather than voiding Delay Damages.'
      },
      {
        id: 'f10-3',
        clause: 'Obrascon Case (20.1 / 20.2)',
        qVi: 'Theo nguyên tắc án lệ quốc tế nổi tiếng *Obrascon Huarte Lain v Gibraltar* (được Seppälä phân tích sâu và hay kiểm tra ở phần Time-Bar), mốc 28 ngày gửi Notice of Claim đối với điều kiện vật chất/thay đổi thiết kế kích hoạt vào thời điểm nào?',
        qEn: 'Following the landmark *Obrascon Huarte Lain v HM Attorney General for Gibraltar* ruling on FIDIC Notice time-bars, when does the 28-day Notice clock start ticking?',
        opts: [
          { vi: 'Ngay ngày đầu tiên phát hiện một hạt bụi đất bất thường dù chưa rõ có gây chậm trễ hay phát sinh chi phí gì không', en: 'Immediately upon seeing any anomaly regardless of delay/cost impact' },
          { vi: 'KHÔNG tính từ ngày sự kiện xảy ra trừu tượng, mà tính từ ngày Nhà thầu nhận biết (hoặc đáng lẽ phải nhận biết) **sự kiện/hoàn cảnh LÀM PHÁT SINH quyền EOT hoặc thanh toán thêm** (tức đã có cơ sở nhận thấy khả năng gây chậm/tốn kém)!', en: 'Runs NOT merely from when an event first occurs in the abstract, but from when the Contractor became aware (or should have become aware) of the event or circumstance **giving rise to entitlement to EOT/additional payment**' },
          { vi: 'Chỉ bắt đầu tính sau khi Công trình hoàn thành 100%', en: 'Only after project completion' },
          { vi: 'Tùy ý Nhà thầu tự chọn ngày bắt đầu đếm', en: 'Whenever Contractor elects arbitrarily' }
        ],
        ans: 1,
        expVi: 'Án lệ *Obrascon* (2014/2015) diễn giải Khoản 20.1 theo hướng thực tiễn: Chừng nào sự kiện chưa biểu hiện rõ khả năng gây chậm trễ hoặc tốn chi phí thêm, đồng hồ 28 ngày chưa bắt đầu chạy — tuy nhiên để an toàn dưới bản 2017 (vốn chặt chẽ hơn 1999), Nhà thầu vẫn nên gửi Notice ngay khi có dấu hiệu tác động!',
        expEn: '*Obrascon* interpreted Clause 20.1 purposefully: time-bar runs from awareness of the event/circumstance actually giving rise to an EOT/Cost entitlement (though cautious 2017 management favors early protective Notices).'
      },
      {
        id: 'f10-4',
        clause: 'Triple Point Case (Termination & DD)',
        qVi: 'Theo án lệ Tòa Tối cao Anh *Triple Point Technology v PTT* (2021 — kinh điển về Delay Damages khi chấm dứt hợp đồng trước khi hoàn thành, và cách soạn thảo FIDIC 2017 Khoản 15.4(c)), nếu hợp đồng bị chấm dứt trước khi Nhà thầu bàn giao xong Công trình, Chủ đầu tư có được hưởng Tiền bồi thường chậm trễ (Delay Damages) không?',
        qEn: 'Under *Triple Point Technology v PTT* (UK Supreme Court, 2021) and FIDIC 2017 Sub-Clause 15.4(c), when a contract is terminated before Completion, what happens to accrued Delay Damages?',
        opts: [
          { vi: 'Chủ đầu tư mất sạch quyền đòi Delay Damages cho khoảng thời gian đã chậm trước khi chấm dứt', en: 'Employer loses all accrued Delay Damages prior to termination' },
          { vi: 'Chủ đầu tư VẪN được hưởng Delay Damages tích lũy tính đến **ngày chấm dứt Hợp đồng** (date of termination) — và sau ngày chấm dứt sẽ tính theo thiệt hại thực tế hoàn thành thay thế (general damages / 15.4(c)) chứ không tiếp tục cộng dồn Delay Damages hàng ngày vô tận sau chấm dứt!', en: 'Employer RETAINS accrued Delay Damages **up to the date of termination** (and claims replacement completion damages thereafter under 15.4, rather than continuing daily Delay Damages post-termination)' },
          { vi: 'Delay Damages tiếp tục chạy thêm cho đến khi nhà thầu mới hoàn thành xong công trình', en: 'Daily Delay Damages continue running against the first contractor until replacement contractor finishes' },
          { vi: 'Delay Damages tăng gấp đôi vào ngày chấm dứt', en: 'Delay Damages double on termination' }
        ],
        ans: 1,
        expVi: '*Triple Point* (2021) khẳng định lại lẽ thông thường thương mại (và **FIDIC 2017 Khoản 15.4(c)** cũng viết sẵn câu chữ rõ ràng): Delay Damages tích lũy **trước/tới ngày chấm dứt** vẫn giữ nguyên hiệu lực, còn thiệt hại sau chấm dứt tính qua chi phí thuê bên khác làm tiếp!',
        expEn: 'Both *Triple Point* (2021) and 2017 Sub-Clause 15.4(c) confirm accrued Delay Damages survive up to termination date; post-termination losses flow via replacement costs.'
      },
      {
        id: 'f10-5',
        clause: '3.7.3 + 20.2 Combined Timeline',
        qVi: 'Bài toán gộp mốc thời gian thực chiến FIDIC 2017: Sự kiện chậm trễ xảy ra ngày 01/01. Nhà thầu gửi Notice of Claim ngày 20/01 (Khoản 20.2.1), nộp Fully Detailed Claim ngày 10/03 (20.2.4). Nếu Nhà tư vấn thực hiện đầy đủ tối đa 42 ngày tham vấn (3.7.1) + 42 ngày ra Quyết định (3.7.2) và các bên giữ im lặng trong 28 ngày tiếp theo (3.7.5), tổng thời gian tối đa từ lúc nộp Hồ sơ Chi tiết (10/03) đến khi Quyết định 3.7 trở thành Final & Binding là bao nhiêu ngày?',
        qEn: 'FIDIC 2017 Timeline Math: Detailed Claim is submitted on Day 0. Engineer uses the full 42 days for consultation (3.7.1) + full 42 days to determine (3.7.2), followed by the 28-day NOD window (3.7.5) with no NOD issued. Total elapsed days from Detailed Claim to Final & Binding?',
        opts: [
          { vi: '84 ngày', en: '84 days' },
          { vi: '112 ngày (42 ngày Tham vấn + 42 ngày Ra Quyết định + 28 ngày chờ NOD)', en: '112 days (42d Consultation + 42d Determination + 28d NOD expiry)' },
          { vi: '140 ngày', en: '140 days' },
          { vi: '56 ngày', en: '56 days' }
        ],
        ans: 1,
        expVi: 'Cộng chuẩn chuỗi thời gian Điều 3.7: **42d (Consultation 3.7.1) + 42d (Determination 3.7.2) + 28d (NOD window 3.7.5) = 112 ngày** (và nếu cộng thêm tối đa 84 ngày từ lúc phát sinh sự kiện nộp Hồ sơ Chi tiết thì tổng hành trình từ Day 0 sự kiện = 84 + 112 = 196 ngày!).',
        expEn: 'Standard 3.7 cadence: **42d (3.7.1) + 42d (3.7.2) + 28d (3.7.5) = 112 days** from Fully Detailed Claim to Final & Binding (or 196 days max from Day 0 event awareness).'
      },
      {
        id: 'f10-6',
        clause: '1.1.21 "day" & Calendar',
        qVi: 'Trong hợp đồng FIDIC (Khoản 1.1 & Khoản 1.2 [Diễn giải]), khi thời hạn được ghi là "28 days" (như Notice of Claim) mà hạn chót rơi đúng vào ngày Chủ Nhật hoặc ngày Lễ Tết Quốc gia, hạn chót đó được tính là ngày dương lịch hay tự động lùi sang ngày làm việc tiếp theo?',
        qEn: 'Under Sub-Clauses 1.1 ("day") and 1.2 [Interpretation], when a 28-day Notice deadline falls on a Sunday or public holiday, how are "days" counted?',
        opts: [
          { vi: 'Tự động cộng thêm số ngày nghỉ lễ Tết vào hạn 28 ngày', en: 'Public holidays and weekends extend the 28-day limit' },
          { vi: '"day" (viết thường) nghĩa là **ngày dương lịch liên tục (calendar day)**, tính cả thứ 7, Chủ Nhật và ngày Lễ (KHÁC với "working days" tại Khoản 3.5); chỉ có quy tắc Khoản 1.3 nếu gửi trực tiếp hoặc cần xem xét quy định cụ thể tại Country nếu có, nhưng đếm "days" luôn là calendar days (và ngày bắt đầu sự kiện là Day 0, ngày tiếp theo là Day 1 theo 1.2(h))!', en: '"day" means **calendar day** (including weekends and public holidays, unlike "working days" in 3.5), and under 1.2(h) the period excludes the trigger day itself and runs continuously in calendar days!' },
          { vi: 'Chỉ tính ngày làm việc hành chính (28 ngày = ~40 ngày lịch)', en: 'Business days only' },
          { vi: 'Tính cả ngày phát sinh sự kiện là Ngày 1', en: 'Trigger day itself counts as Day 1' }
        ],
        ans: 1,
        expVi: 'Khoản 1.2(h) + 1.1.25: Mọi thuật ngữ `day`/`days` đều là **ngày dương lịch liên tục** (chỉ chỗ nào viết rõ `working days` như Khoản 3.5 mới trừ ngày nghỉ), và ngày xảy ra sự kiện nhận Notice không tính vào kỳ hạn (tính từ ngày hôm sau)!',
        expEn: 'Sub-Clause 1.2(h) & "day" definition: periods run in consecutive **calendar days**, excluding the initial trigger day.'
      },
      {
        id: 'f10-7',
        clause: 'MT Hojgaard (Fitness for Purpose)',
        qVi: 'Từ bài học án lệ nổi tiếng *MT Højgaard v E.ON* (Tòa Tối cao Anh) về nghĩa vụ thiết kế trong hợp đồng tương tự Yellow/Silver Book: Khi Employer’s Requirements quy định tuổi thọ thiết kế ("20-year service life") đồng thời hợp đồng lại dẫn chiếu tiêu chuẩn quốc tế có thiếu sót khiến công trình hỏng sau 2 năm dù Nhà thầu đã tuân thủ đúng tiêu chuẩn đó, tòa án xử lý ra sao?',
        qEn: 'Reflecting the landmark *MT Højgaard v E.ON* UK Supreme Court principle relevant to Design-Build / EPC Contracts: if Employer’s Requirements specify a 20-year design/service life alongside a defective technical standard followed carefully by the Contractor, who bears liability for premature failure?',
        opts: [
          { vi: 'Nhà thầu được miễn trách nhiệm hoàn toàn vì đã làm theo tiêu chuẩn kỹ thuật nêu trong hợp đồng', en: 'Contractor is exonerated for obeying the cited technical standard' },
          { vi: 'Nhà thầu VẪN CHỊU TRÁCH NHIỆM vì nghĩa vụ "Fitness for Purpose / Đạt kết quả hiệu năng thiết kế" (cụ thể tuổi thọ 20 năm trong ER) không bị vô hiệu hóa chỉ vì đã tuân theo tiêu chuẩn tối thiểu trong cùng tài liệu!', en: 'The Contractor REMAINS LIABLE because complying with a prescribed minimum standard does not override an explicit overarching **Fitness for Purpose / specified performance obligation** (e.g., 20-year design life) in the ER!' },
          { vi: 'Nhà tư vấn chịu toàn bộ thiệt hại', en: 'Engineer bears 100% liability' },
          { vi: 'Hợp đồng bị vô hiệu vì mâu thuẫn nội tại', en: 'Contract is void for uncertainty' }
        ],
        ans: 1,
        expVi: 'Bài học sống còn cho Nhà thầu Design-Build (Yellow/Silver Book Khoản 4.1): Tiêu chuẩn kỹ thuật trong ER là **mức sàn tối thiểu** ("minimum baseline"), chứ không làm giảm nhẹ cam kết **Fitness for Purpose** hay tuổi thọ công trình!',
        expEn: '*MT Højgaard* confirms that technical standards in Employer’s Requirements act as minimum baselines and do not dilute an explicit Fitness for Purpose / performance warrant.'
      },
      {
        id: 'f10-8',
        clause: '4.11 & 14.3 IPC Math (Retention)',
        qVi: 'Bài toán tính IPC (Khoản 14.3 & 14.6): Giá trị khối lượng đã thi công lũy kế = $20M (kỳ trước đã chứng nhận $15M). Tỷ lệ Giữ lại (Retention) = 10%, giới hạn trần Tiền giữ lại = 5% của ACA ($100M -> trần $5M). Khấu trừ Hoàn trả Tạm ứng kỳ này = $1M. Không có Variation/Claim. Số tiền tịnh (Net Amount) của IPC kỳ này (chỉ xét phần tăng thêm kỳ này) là bao nhiêu?',
        qEn: 'IPC Calculation (14.3 / 14.6): Cumulative work executed = $20M (prior IPC certified gross work = $15M). Retention = 10% capped at 5% of $100M ACA ($5M limit). Advance repayment this period = $1M. Ignoring prior retention differences outside incremental work, what is net payable for this $5M monthly work increment?',
        opts: [
          { vi: '$5.000.000', en: '$5,000,000' },
          { vi: '$3.500.000 — Giải thích: Công việc tăng thêm kỳ này = $5M -> Trừ Retention 10% × $5M = $0.5M (lũy kế retention mới $2M < trần $5M nên trừ đủ 10%) -> Trừ hoàn trả tạm ứng $1M -> Còn tịnh **$3.500.000**!', en: '$3,500,000 — Incremental work ($5M) minus 10% Retention ($0.5M; cumulative retention $2M < $5M cap) minus Advance Repayment ($1M) = **$3,500,000**!' },
          { vi: '$4.500.000', en: '$4,500,000' },
          { vi: '$4.000.000', en: '$4,000,000' }
        ],
        ans: 1,
        expVi: 'Khi tính IPC hàng tháng theo Khoản 14.3: Luôn kiểm tra **cả 2 mốc**: (1) Lũy kế tiền giữ lại đã chạm trần Limit of Retention Money chưa (ở đây $2M < $5M nên vẫn giữ đủ 10% × $5M = $0.5M), và (2) Khoản khấu trừ hoàn trả tạm ứng theo 14.2 ($1M). Kết quả: $5M − $0.5M − $1M = $3.5M.',
        expEn: 'Monthly IPC math: $5.0M work − $0.5M retention (10%, still below $5M cap) − $1.0M advance repayment = $3.5M net due.'
      },
      {
        id: 'f10-9',
        clause: 'Civil Law vs Common Law (Penalties)',
        qVi: 'Trong hợp đồng FIDIC áp dụng **Luật Dân sự (Civil Law - như Pháp, Đức, Việt Nam, Trung Đông)** so với **Thông luật (Common Law - Anh, Singapore)**: Khi số tiền Bồi thường Chậm trễ (Delay Damages - 8.8) bị coi là quá cao bất hợp lý so với thiệt hại thực tế (hoặc ngược lại thấp hơn thiệt hại thực tế nhiều lần), tòa án/trọng tài ở các nước Dân luật thường có quyền gì mà Thông luật KHÔNG cho phép (theo Seppälä Chương II)?',
        qEn: 'As highlighted in Seppälä Chapter II comparing Civil Law vs Common Law jurisdictions regarding Sub-Clause 8.8 [Delay Damages]: What power do courts/tribunals under many Civil Codes typically possess that Common Law courts traditionally refuse?',
        opts: [
          { vi: 'Không có bất kỳ khác biệt nào giữa hai hệ thống', en: 'No difference between systems' },
          { vi: 'Ở Thông luật (Common Law), điều khoản bồi thường định trước hoặc có hiệu lực nguyên văn hoặc bị vô hiệu hoàn toàn nếu mang tính phạt ("penalty rule" — dù tòa Anh gần đây xét *Cavendish Square* theo lợi ích hợp pháp). Ngược lại, ở nhiều nước Dân luật (như Pháp Art. 1231-5), tòa/trọng tài CÓ THẨM QUYỀN GIẢM (hoặc thậm chí tăng) mức bồi thường ấn định trước nếu chứng minh mức đó quá đáng hoặc quá nhỏ một cách rõ rệt!', en: 'Under many Civil Codes (e.g., French Civil Code Art. 1231-5), courts/tribunals may **equitably reduce (or increase)** an agreed Delay Damages/penalty sum if manifestly excessive or derisory; Common Law enforces liquidated damages as written or strikes down penalties cleanly' },
          { vi: 'Thông luật cho phép tòa tự tăng gấp đôi Delay Damages', en: 'Common Law allows doubling Delay Damages' },
          { vi: 'Luật Dân sự cấm hoàn toàn điều khoản Delay Damages', en: 'Civil Law voids all Delay Damages clauses' }
        ],
        ans: 1,
        expVi: 'Kiến thức trọng tâm Chương II *Seppälä*: Trong FIDIC quốc tế, chọn **Governing Law (Khoản 1.4)** cực kỳ quan trọng vì Luật Dân sự cho phép điều chỉnh mức Delay Damages ("clause pénale" / giảm phạt bất hợp lý) theo quy phạm bắt buộc, khác hẳn Thông luật!',
        expEn: 'Seppälä Ch. II: Civil law codes commonly allow judicial adjustment of manifestly excessive/derisory stipulated damages, unlike strict Common Law binary enforcement.'
      },
      {
        id: 'f10-10',
        clause: '15.2 vs 15.5 Practical Trap',
        qVi: 'Tình huống bẫy thực chiến: Chủ đầu tư đang không hài lòng vì tiến độ Nhà thầu chậm nhẹ, nhưng CHƯA cấp Notice to Correct (15.1) và chưa chứng minh vi phạm nghiêm trọng 15.2. Chủ đầu tư bèn gửi Thông báo "chấm dứt hợp đồng theo Khoản 15.2 do vi phạm tiến độ" và ngay lập tức tịch thu công trường giao cho nhà thầu khác. Hành động này cấu thành điều gì theo luật & FIDIC 2017?',
        qEn: 'Practical Case Trap: Dissatisfied with moderate Contractor slow progress, the Employer sends a termination Notice purporting to act under Sub-Clause 15.2 WITHOUT first issuing a Sub-Clause 15.1 Notice to Correct or establishing valid 15.2 grounds, and ejects the Contractor. What legal risk does this create?',
        opts: [
          { vi: 'Hợp đồng tự động chấm dứt hợp pháp theo Khoản 15.5 thuận tiện dù không viện dẫn', en: 'Automatically converts cleanly to valid 15.5 termination for convenience' },
          { vi: 'Cấu thành hành vi **Chấm dứt Trái Hợp đồng / Từ bỏ Hợp đồng sai trái (Wrongful / Repudiatory Termination)** bởi Chủ đầu tư! Nhà thầu có quyền chấp nhận sự chấm dứt sai trái đó (hoặc chấm dứt theo 16.2) và đòi bồi thường toàn bộ thiệt hại bao gồm **Mất Lợi nhuận (Loss of Profit)**!', en: 'Amounts to **Wrongful / Repudiatory Termination** by the Employer, entitling the Contractor to treat the contract as repudiated (or terminate under 16.2) and recover full damages including **loss of profit**!' },
          { vi: 'Nhà thầu chỉ được xin gia hạn 14 ngày', en: 'Contractor merely gets 14 days extra' },
          { vi: 'Bảo lãnh thực hiện hợp đồng tự động thuộc về Chủ đầu tư', en: 'Performance Security automatically belongs to Employer' }
        ],
        ans: 1,
        expVi: 'Chấm dứt hợp đồng (Termination) là "vũ khí hạt nhân" đòi hỏi tuân thủ NGUYÊN VĂN điều kiện tiền quyết (15.1 Notice to Correct -> hết hạn hợp lý -> 15.2.2 14 ngày Notice ý định -> Notice lần 2). Chấm dứt sai thủ tục biến Chủ đầu tư thành bên vi phạm hợp đồng nghiêm trọng (Repudiatory Breach)!',
        expEn: 'Wrongful termination bypassing mandatory 15.1/15.2 safeguards backfires as Employer repudiatory breach, triggering Contractor damages & loss of profit.'
      },
      {
        id: 'f10-11',
        clause: 'Silver Book 4.12 vs GP',
        qVi: 'Tại sao nếu Hợp đồng sử dụng mẫu Sách Bạc (Silver Book EPC) — chuyển rủi ro địa chất (4.12) sang Nhà thầu — mà trong Gói thầu lại chỉ có thời gian đấu thầu 2 tuần, thiếu hẳn khảo sát địa chất nền móng từ Chủ đầu tư, tài liệu Hướng dẫn FIDIC (FIDIC Introductory Note / GP2) khuyến nghị điều gì?',
        qEn: 'According to the FIDIC Silver Book Introductory Guidance & Golden Principles: What should NOT happen if an Employer proposes using the Silver Book where tenderers have insufficient time/data to verify subsurface conditions?',
        opts: [
          { vi: 'Vẫn cứ ép dùng Sách Bạc bình thường để chuyển hết rủi ro cho rẻ', en: 'Use Silver Book regardless to shift risk cheaply' },
          { vi: 'FIDIC khuyến cáo **KHÔNG NÊN dùng Sách Bạc** (mà nên dùng **Sách Vàng hoặc Sách Đỏ**) khi Nhà thầu không được cấp đủ thời gian & thông tin để kiểm tra Yêu cầu Chủ đầu tư và khảo sát công trường/rủi ro ngầm trước khi nộp thầu — vì ép dùng Silver Book dẫn tới giá dự phòng rủi ro tăng vọt hoặc tranh chấp bùng phát!', en: 'Silver Book **should NOT be used** if tenderers lack sufficient time or information to scrutinise ER / carry out underground investigations before submitting Tenders (use **Yellow or Red Book** instead)!' },
          { vi: 'Cứ dùng Sách Bạc rồi bổ sung Điều kiện Riêng tước bỏ DAAB', en: 'Use Silver Book and delete DAAB' },
          { vi: 'Chuyển sang dùng Hợp đồng Xanh lá (Green Book) cho dự án 500 triệu USD', en: 'Use Green Book for $500M mega-projects' }
        ],
        ans: 1,
        expVi: 'Đoạn lưu ý mở đầu chính thức của Silver Book (Godwin Ch. 1.2.3 & Seppälä Ch. 3): Không được lạm dụng Silver Book nếu không cho nhà thầu đủ thời gian/thông tin thẩm tra địa chất — phải quay lại dùng Yellow Book hoặc Red Book!',
        expEn: 'Official Silver Book Guidance warns against Silver Book when tenderers lack adequate time/data to verify site and underground conditions (use Yellow Book instead).'
      },
      {
        id: 'f10-12',
        clause: '21.7 + 16.1 (DAAB Non-Compliance)',
        qVi: 'Tình huống kết hợp bản 2017: DAAB vừa ban hành Quyết định buộc Chủ đầu tư trả cho Nhà thầu $2 triệu. Chủ đầu tư kịp gửi NOD trong vòng 28 ngày (21.4.4) và từ chối thanh toán $2 triệu đó trong IPC tiếp theo với lý do "chưa có phán quyết Trọng tài cuối cùng". Theo FIDIC 2017, Nhà thầu có những quyền hợp đồng nào NGAY LẬP TỨC?',
        qEn: '2017 Combined Scenario: DAAB orders Employer to pay Contractor $2M. Employer serves a valid NOD within 28 days (21.4.4) and refuses to pay the $2M claiming arbitration is pending. Under 2017 editions, what immediate rights does the Contractor hold?',
        opts: [
          { vi: 'Không làm được gì ngoài việc chờ 2–3 năm giải quyết xong toàn bộ nội dung tại Trọng tài', en: 'Must wait 2–3 years for full merits arbitration' },
          { vi: '(1) Đưa THẲNG việc không tuân thủ Quyết định DAAB ra Trọng tài ICC theo **Khoản 21.7** để xin phán quyết thi hành khẩn cấp/tạm thời (summary/interim award); (2) Đưa khoản tiền DAAB quyết định vào Statement/IPC (hoặc đòi trực tiếp) kèm lãi chậm trả theo 14.8; và (3) Nếu Chủ đầu tư không trả số tiền DAAB đã ràng buộc -> Có quyền gửi Notice 21 ngày Tạm ngừng (16.1) và thậm chí Chấm dứt (16.2) nếu kéo dài!', en: '(1) Refer failure to comply directly to Arbitration under **Sub-Clause 21.7** for summary enforcement; (2) Claim financing charges on unpaid sums; and (3) Under **2017 Clause 16.1/16.2**, Employer’s failure to comply with a binding DAAB Decision is an express ground for Contractor Suspension (21d Notice) & Termination!' },
          { vi: 'Chỉ được gửi công văn nhắc nhở không có chế tài', en: 'Advisory reminder only' },
          { vi: 'Nhà thầu mất quyền đòi lãi chậm trả', en: 'Financing charges do not accrue' }
        ],
        ans: 1,
        expVi: 'Đỉnh cao liên kết giữa **21.4.3 + 21.7 + 16.1(d) + 16.2.1(d)** trong FIDIC 2017: Không thi hành Quyết định DAAB (dù đang có NOD!) vừa bị kiện thẳng trọng tài 21.7 VỪA là căn cứ cho phép Nhà thầu **Tạm ngừng (16.1)** và **Chấm dứt Hợp đồng (16.2)**!',
        expEn: 'Major 2017 integration: Non-compliance with a binding DAAB decision (even with an NOD!) simultaneously unlocks **21.7** summary arbitration AND Contractor suspension/termination under **16.1 / 16.2**!'
      }
    ]
  }
];

