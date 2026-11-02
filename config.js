// HemaAI 运行时配置（本地开发用模板；发布包里的 frontend/dist/config.js 由
// deploy/package-release.ps1 生成，部署到服务器后可直接改这个文件，无需重新构建）。
//
// window.__HEMA_API_BASE_URL__ 取值：
//   ""                        同源部署（推荐）：前端与 API 同域名，
//                             由 Nginx 把 /api/ 反向代理到 127.0.0.1:8080；
//   "http://1.2.3.4:8080"     直连后端，需在后端 CORS_ORIGINS 中加入前端访问地址；
//   "https://ai.example.com"  独立 API 域名（需 HTTPS 证书 + CORS）。
//
// 保持下面一行注释状态时：使用构建期注入的 VITE_API_BASE_URL，
// 本地开发回退 http://localhost:8080（与 npm run dev 的本地联调行为一致）。
// window.__HEMA_API_BASE_URL__ = "";
