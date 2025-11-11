# 🚀 GitHub Pages Deployment Guide

## Your Portfolio URL
**https://prathammm16.github.io/Pratham-Portfolio**

---

## 📋 Quick Deployment Steps

### Step 1: Install gh-pages package
```powershell
npm install --save-dev gh-pages
```

### Step 2: Commit all your changes
```powershell
git add .
git commit -m "Configure for GitHub Pages deployment"
```

### Step 3: Push to GitHub
```powershell
git push origin main
```

### Step 4: Enable GitHub Pages (Manual Setup)

1. Go to your repository: https://github.com/PrathamM16/Pratham-Portfolio
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. Save the settings

### Step 5: Deploy (First Time)
```powershell
npm run deploy
```

---

## 🎯 What I've Configured

### 1. **package.json**
- ✅ Added `homepage` field pointing to your GitHub Pages URL
- ✅ Added `predeploy` script to build before deployment
- ✅ Added `deploy` script to publish to GitHub Pages
- ✅ Will install `gh-pages` package

### 2. **vite.config.js**
- ✅ Added `base: '/Pratham-Portfolio/'` for correct asset paths
- ✅ Ensures all resources load with proper URLs

### 3. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- ✅ Automatic deployment on push to main branch
- ✅ Uses official GitHub Pages deployment action
- ✅ Builds and deploys automatically

---

## 🔄 Deployment Methods

### Method 1: Automatic Deployment (Recommended)
Every time you push to the `main` branch, GitHub Actions will:
1. Install dependencies
2. Build your portfolio
3. Deploy to GitHub Pages

**Just push your code:**
```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

Wait 1-2 minutes, then visit: **https://prathammm16.github.io/Pratham-Portfolio**

### Method 2: Manual Deployment
Run this command anytime:
```powershell
npm run deploy
```

---

## 🔧 Complete Setup Commands

Run these commands in PowerShell:

```powershell
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Commit configuration changes
git add .
git commit -m "Configure GitHub Pages deployment"

# 3. Push to GitHub
git push origin main

# 4. Manual deploy (first time)
npm run deploy
```

---

## ✅ Verification Steps

### 1. Check GitHub Actions
1. Go to: https://github.com/PrathamM16/Pratham-Portfolio/actions
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for the green checkmark ✅

### 2. Check Deployment Status
1. Go to: https://github.com/PrathamM16/Pratham-Portfolio/deployments
2. You should see "github-pages" deployments listed

### 3. Visit Your Site
Open: **https://prathammm16.github.io/Pratham-Portfolio**

---

## 🔐 HTTPS Certificate

✅ **Automatic HTTPS**: GitHub Pages provides a free SSL certificate
- Your site will automatically be available via HTTPS
- Certificate is issued by Let's Encrypt
- Auto-renews every 90 days
- No configuration needed!

**Your secure URL:** https://prathammm16.github.io/Pratham-Portfolio 🔒

---

## 🎨 Custom Domain (Optional)

If you want to use a custom domain like `pratham.dev`:

### 1. Buy a domain (from Namecheap, GoDaddy, etc.)

### 2. Add DNS records:
```
Type: CNAME
Name: www
Value: prathammm16.github.io
```

### 3. Update repository settings:
1. Go to Settings → Pages
2. Enter your custom domain: `www.pratham.dev`
3. Check "Enforce HTTPS"

### 4. Update `package.json`:
```json
"homepage": "https://www.pratham.dev"
```

### 5. Update `vite.config.js`:
```javascript
base: '/'
```

---

## 🐛 Troubleshooting

### Issue: 404 Error on refresh
**Solution**: GitHub Pages is configured correctly with the workflow. If you still get 404, check:
1. Ensure `base: '/Pratham-Portfolio/'` is in vite.config.js
2. Assets should load from `/Pratham-Portfolio/assets/...`

### Issue: Build fails in GitHub Actions
**Solution**: Check the Actions tab for error logs:
1. Go to Actions tab
2. Click on the failed workflow
3. Read the error message
4. Usually it's a missing dependency or build error

### Issue: CSS/Images not loading
**Solution**: 
- Ensure all image paths start with `/` (e.g., `/pratham-profile.jpg`)
- Vite will automatically prepend the base path

### Issue: Workflow not running
**Solution**:
1. Go to Settings → Actions → General
2. Ensure "Allow all actions" is selected
3. Ensure "Read and write permissions" is enabled

---

## 📊 Deployment Status

You can check your deployment status at:
- **Actions**: https://github.com/PrathamM16/Pratham-Portfolio/actions
- **Deployments**: https://github.com/PrathamM16/Pratham-Portfolio/deployments
- **Settings**: https://github.com/PrathamM16/Pratham-Portfolio/settings/pages

---

## 🎉 Final Checklist

Before sharing your portfolio:

- [ ] Install gh-pages: `npm install --save-dev gh-pages`
- [ ] Commit all changes: `git add . && git commit -m "Deploy config"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Enable GitHub Pages in Settings → Pages → Source: "GitHub Actions"
- [ ] Wait for GitHub Action to complete (2-3 minutes)
- [ ] Visit: https://prathammm16.github.io/Pratham-Portfolio
- [ ] Test all features (navigation, theme toggle, contact form)
- [ ] Share your portfolio! 🎊

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```powershell
# Save your changes
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

GitHub Actions will automatically rebuild and deploy! ⚡

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio:

- LinkedIn: https://www.linkedin.com/in/pratham-m-5b7661284
- GitHub: https://github.com/PrathamM16
- Direct Link: **https://prathammm16.github.io/Pratham-Portfolio**

---

## 💡 Pro Tips

1. **Always test locally first**: `npm run dev`
2. **Build before committing**: `npm run build` to catch errors
3. **Use descriptive commit messages**
4. **Check Actions tab** for deployment status
5. **Clear browser cache** if you don't see updates (Ctrl+F5)

---

## 🆘 Need Help?

If deployment fails:
1. Check GitHub Actions logs
2. Ensure all dependencies are in package.json
3. Test build locally: `npm run build`
4. Check browser console for errors
5. Verify all file paths are correct

---

**Your portfolio will be live at:**
# 🌐 https://prathammm16.github.io/Pratham-Portfolio

**Automatic HTTPS** ✅ | **Free Hosting** ✅ | **Auto-Deploy** ✅
