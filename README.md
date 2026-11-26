# Learn FIDIC · Sổ tay Hợp đồng Song ngữ Anh - Việt

Ứng dụng web PWA tra cứu và học Hợp đồng FIDIC (Red Book 2017 · 167 tiểu mục, Yellow Book 2017, Silver Book 2017, Red Book 1999) song ngữ Anh - Việt, kèm Trợ lý Gemini AI, Bảng theo dõi Thời hạn Dự án (`.ics`/`.csv`), Checklist, Biểu mẫu và Ghi chú cá nhân.

## Chạy cục bộ (Local)
```bash
python -m http.server 8765
```
Mở trình duyệt tại `http://127.0.0.1:8765/#red-17-20-2`.

## Đưa lên Web HTTPS
- **GitHub Pages**: `gh auth login` → `gh repo create learn-fidic-vn --public --source=. --push` → bật Pages ở branch `main`.
- **Netlify Drop**: Kéo thả thư mục dự án vào `https://app.netlify.com/drop`.
