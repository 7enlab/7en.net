import type { PilotContent } from './types';

export const vi: PilotContent = {
  hero: {
    eyebrow: 'Chương trình thử nghiệm · 3–5 đội · 2 tuần',
    title: 'Coding agent mã nguồn mở chạy mọi model bằng key của chính bạn.',
    lede: 'ZenCode CLI là coding agent miễn phí, giấy phép MIT. Mang model của bạn. Trả ít hơn. Tin vào thứ đang chạy. Chúng tôi mời 3–5 đội phát triển dùng thử trên công việc thật trong hai tuần — và đo xem nó thực sự tiết kiệm được gì.',
    applyCta: 'Đăng ký thử nghiệm',
    githubCta: 'Xem trên GitHub',
    note: 'Lõi miễn phí mãi mãi. Không cần thẻ. Không phí theo ghế.',
  },
  pilot: {
    heading: 'Thử nghiệm là gì',
    intro: 'Hai tuần, repo của bạn, task thật của bạn. Chúng tôi không demo cho bạn — bạn tự dùng công cụ, và chúng ta cùng đo hai con số.',
    steps: [
      {
        title: 'Dùng cho việc thật',
        body: 'Chọn repo và task của chính bạn. Ngôn ngữ nào, stack nào cũng được. Hai tuần, trong quy trình làm việc bình thường của bạn.',
      },
      {
        title: 'Đo hai con số',
        body: 'Số giờ bạn tiết kiệm được, và chi phí token thật từ zen cost. Không theo dõi gì khác.',
      },
      {
        title: 'Kể lại kết quả',
        body: 'Gửi hai con số và vài dòng phản hồi khi kết thúc. Chỉ có vậy.',
      },
    ],
  },
  benefits: {
    heading: 'Bạn nhận được gì',
    teamTitle: 'Cho đội của bạn',
    teamItems: [
      { strong: 'Miễn phí', rest: ' — lõi dùng giấy phép MIT, miễn phí mãi mãi.' },
      { strong: 'Hỗ trợ trực tiếp', rest: ' — liên hệ thẳng với đội đang xây dựng nó trong suốt thời gian thử nghiệm.' },
      { strong: 'Được ghi tên trong case study', rest: ' — đội của bạn được nêu tên trong case study công bố, chỉ khi bạn đồng ý.' },
    ],
    askTitle: 'Chúng tôi nhờ bạn',
    askItems: [
      { strong: 'Cài đặt', rest: ' — một lệnh, vài phút build từ source.' },
      { strong: 'Dùng cho việc thật', rest: ' — hai tuần, với các task bạn vẫn làm hằng ngày.' },
      { strong: 'Chia sẻ con số', rest: ' — output của zen cost và phản hồi ngắn khi kết thúc.' },
    ],
  },
  install: {
    heading: 'Cài đặt bằng một lệnh',
    intro: 'Linux và macOS. Script clone repo, build zen-cli ở chế độ release, và đặt binary vào ~/.local/bin/zen. Không cần sudo. Bạn có thể xem script trước khi chạy nếu muốn.',
    command: 'curl -fsSL https://raw.githubusercontent.com/7enlabs/zencode/main/install.sh | sh',
    caption: 'Windows (PowerShell) và chi tiết đầy đủ: INSTALL.md. Bạn cần Git và Rust toolchain (cargo) trước — build mất vài phút.',
  },
  cost: {
    heading: 'Chúng tôi đo chi phí thế nào',
    intro: 'CLI tự theo dõi mức dùng của nó. zen cost in số token đã dùng và chi phí theo từng model — kể cả dòng báo phiên làm việc tốn $0.00 khi mọi thứ chạy trên model miễn phí.',
    exampleLabel: 'Định dạng output mẫu:',
    example: `$ zen cost
Session cost: <session-id>
  <model> (<provider>)
    12,400 input · 3,100 output tokens · $0.42
Totals: 12,400 input · 3,100 output · 15,500 tokens

Total cost: $0.42`,
    note: 'Cũng có dạng máy đọc được: zen cost --json. Khi kết thúc thử nghiệm, dán output đó — đó là con số chi phí. Số giờ tiết kiệm là ước tính của bạn: ghi lại các task CLI đã làm thay bạn, và ước chừng làm tay sẽ mất bao lâu.',
  },
  who: {
    heading: 'Ai có thể tham gia',
    items: [
      { strong: 'Một đội dev đang làm việc thật', rest: ' — ngôn ngữ nào, stack nào, ở đâu cũng được.' },
      { strong: 'Repo của chính bạn', rest: ' để làm việc trong hai tuần.' },
      { strong: 'Sẵn sàng chia sẻ hai con số', rest: ' — số giờ tiết kiệm và chi phí token — khi kết thúc.' },
    ],
  },
  apply: {
    heading: 'Đăng ký thử nghiệm',
    intro: 'Năm trường. Chúng tôi trả lời trong vài ngày — chỉ có 3–5 suất thử nghiệm.',
    teamLabel: 'Tên đội',
    teamPlaceholder: 'VD: Đội Web Acme',
    sizeLabel: 'Quy mô đội',
    sizePlaceholder: 'Chọn…',
    sizeOptions: ['1–3 lập trình viên', '4–10 lập trình viên', '11–30 lập trình viên', '30+ lập trình viên'],
    stackLabel: 'Stack chính',
    stackPlaceholder: 'VD: TypeScript + React, Rust, Python/Django',
    repoLabel: 'URL repo',
    repoOptional: '(không bắt buộc)',
    repoPlaceholder: 'https://github.com/doi-cua-ban/repo-cua-ban',
    emailLabel: 'Email liên hệ',
    emailPlaceholder: 'ban@doicua-ban.com',
    submit: 'Gửi đăng ký',
    missing: 'Vui lòng điền tên đội, quy mô đội, stack chính và email liên hệ.',
    opening: 'Đang mở trình email của bạn với đơn đăng ký đã điền sẵn…',
    note: 'Thao tác này mở trình email của bạn với đơn đăng ký đã điền sẵn — không cần tài khoản, không theo dõi, không lưu dữ liệu trên trang này. Hoặc viết trực tiếp cho chúng tôi tại contact@7en.net.',
  },
  faq: {
    heading: 'Câu hỏi thường gặp',
    items: [
      {
        q: 'ZenCode CLI có miễn phí không?',
        a: 'Có. Lõi dùng giấy phép MIT, miễn phí mãi mãi. Không phí theo ghế, không tính năng lõi nào bị khóa sau paywall.',
      },
      {
        q: 'Code và dữ liệu của tôi đi đâu?',
        a: 'Không qua chúng tôi. Bạn mang key API của mình (BYOK) — CLI nói chuyện trực tiếp với nhà cung cấp model của bạn. Chúng tôi không chạy server ở giữa, và không nhìn thấy code của bạn.',
      },
      {
        q: 'Tôi có cần thẻ không?',
        a: 'Không. Không có gì phải trả trong đợt thử nghiệm, và lõi vẫn miễn phí sau đó.',
      },
      {
        q: 'Sau thử nghiệm thì sao?',
        a: 'Bạn cứ tiếp tục dùng. Thử nghiệm kết thúc; CLI vẫn miễn phí. Nếu các con số hữu ích, chúng tôi có thể đăng case study — chỉ khi bạn cho phép, và chỉ với các con số bạn đồng ý chia sẻ.',
      },
    ],
  },
  footer: {
    tagline: 'ZenCode CLI — Mang model của bạn. Trả ít hơn. Tin vào thứ đang chạy.',
    builtBy: 'Được xây dựng bởi 7EN Labs. Lõi là mã nguồn mở theo giấy phép MIT.',
    github: 'GitHub',
    license: 'Giấy phép MIT',
    contact: 'contact@7en.net',
  },
};
