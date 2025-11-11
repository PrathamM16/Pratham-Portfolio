# 🎯 Quick Deployment Commands

## 🚀 Deploy Your Portfolio in 3 Steps

### 1️⃣ Install gh-pages
```powershell
npm install --save-dev gh-pages
```

### 2️⃣ Commit & Push to GitHub
```powershell
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3️⃣ Enable GitHub Pages
1. Go to: https://github.com/PrathamM16/Pratham-Portfolio/settings/pages
2. Under "Build and deployment" → **Source**: Select **"GitHub Actions"**
3. Save

---

## ⚡ Quick Deploy Commands

### Automatic Deploy (Recommended)
```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```
✅ GitHub Actions will automatically build and deploy

### Manual Deploy
```powershell
npm run deploy
```

### Using PowerShell Script
```powershell
.\deploy.ps1
```

---

## 🌐 Your Live URLs

**Portfolio (HTTPS)**: https://prathammm16.github.io/Pratham-Portfolio

**GitHub Actions**: https://github.com/PrathamM16/Pratham-Portfolio/actions

**Settings**: https://github.com/PrathamM16/Pratham-Portfolio/settings/pages

---

## 🔧 Configuration Files Updated

✅ `package.json` - Added homepage and deploy scripts
✅ `vite.config.js` - Added base path for GitHub Pages
✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
✅ `deploy.ps1` - Quick deployment script

---

## ✨ What Happens on Deploy?

1. **Build**: Vite builds optimized production files
2. **Upload**: Files are uploaded to GitHub Pages
3. **Deploy**: Site goes live at your HTTPS URL
4. **Cache**: CDN caches your site globally

⏱️ **Total time**: 2-3 minutes

---

## 🎨 After Deployment

### Test Your Site
- [ ] Open: https://prathammm16.github.io/Pratham-Portfolio
- [ ] Test navigation (all sections scroll smoothly)
- [ ] Toggle dark/light mode
- [ ] Test contact form
- [ ] Click resume download
- [ ] Test all social links
- [ ] Check mobile responsiveness

### Share Your Portfolio
- LinkedIn: https://www.linkedin.com/in/pratham-m-5b7661284
- GitHub Profile: Add to README
- Resume: Add the link
- Email signature: Add the link

---

## 🐛 Quick Fixes

**Site not updating?**
```powershell
# Clear cache
Ctrl + F5

# Or redeploy
npm run deploy
```

**404 Error?**
- Check vite.config.js has `base: '/Pratham-Portfolio/'`
- Verify GitHub Pages source is "GitHub Actions"

**Build error?**
```powershell
# Test locally first
npm run build
```

---

## 📊 Monitor Your Deployment

**GitHub Actions Dashboard**
https://github.com/PrathamM16/Pratham-Portfolio/actions

**Deployment History**
https://github.com/PrathamM16/Pratham-Portfolio/deployments

---

## 🎉 You're All Set!

Your portfolio is configured for:
- ✅ HTTPS (automatic SSL)
- ✅ Auto-deployment on push
- ✅ GitHub CDN (fast loading)
- ✅ Professional URL

**Just run:** `git push origin main` and your site updates automatically! 🚀
