# test-curator 部署指南

本项目：**test-curator**（与父仓库 `test-vercel-site` 无关）

| 平台 | 地址 |
|------|------|
| Vercel（国外） | https://test-curator.vercel.app |
| GitHub Pages（国内备用） | https://rrjddhj2nq-ctrl.github.io/test-curator/ |

---

## 为什么 Vercel 打不开？

`test-curator.vercel.app` 在国内常出现 **ERR_CONNECTION_TIMED_OUT**，是网络问题，不是代码问题。

---

## GitHub Pages 启用步骤

1. 在 GitHub 创建仓库 **`test-curator`**（若还没有）
2. 将本目录 push 到该仓库的 `main` 分支
3. 仓库 → **Settings → Pages → Source** 选 **GitHub Actions**
4. Actions 跑绿后访问：https://rrjddhj2nq-ctrl.github.io/test-curator/

---

## Vercel 部署（已有项目）

- 项目名：**test-curator**
- Root Directory：`.`（仓库根目录即本项目）
- 国内访问建议绑定**自定义域名**

---

## 本地预览

```bash
npm install
npm start          # http://localhost:3000
npm run build
npx serve -s build # 预览 build 产物
```
