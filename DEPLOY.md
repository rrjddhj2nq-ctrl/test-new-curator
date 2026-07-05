# test-curator 部署指南

## 线上 404 的原因

Vercel 显示 **Ready** 但页面是 **404: NOT_FOUND**，说明：

- 部署流程成功了
- 但 GitHub 仓库里只有 **Initial commit**（空仓库），**没有网站代码**
- 本地完整代码（commit `79acdc8`）**还没 push 上去**

这和 VPN 无关，是 **代码没上传到 GitHub** 导致的。

---

## 解决步骤（按顺序做）

### 1. Push 本地代码到 GitHub

```bash
cd /Users/a1-6/Documents/GitHub/test-vercel-site/test-curator
git add .
git commit -m "Add test-curator landing page"   # 若已 commit 可跳过
git push -u origin main
```

若提示远程有 Initial commit，执行：

```bash
git pull origin main --rebase
git push -u origin main
```

### 2. 确认 Vercel 构建设置

Vercel → **test-curator** → **Settings → General**：

| 项 | 值 |
|----|-----|
| Root Directory | `.`（留空，仓库根目录就是项目） |
| Framework | Create React App |
| Build Command | `npm run build` |
| Output Directory | `build` |

### 3. 重新部署

Push 后 Vercel 会自动重新部署；或手动点 **Redeploy**。

成功后访问：**https://test-curator.vercel.app**

---

## 两个平台地址

| 平台 | 地址 |
|------|------|
| Vercel | https://test-curator.vercel.app |
| GitHub Pages | https://rrjddhj2nq-ctrl.github.io/test-curator/ |

GitHub Pages 需在仓库 Settings → Pages → Source 选 **GitHub Actions**。
