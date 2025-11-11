# 🚀 Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended) ⚡

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Perfect for React/Vite apps

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite
6. Click "Deploy"
7. Done! Your site is live ✨

**CLI Method:**
\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

---

### 2. Netlify 🌐

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `dist` folder
4. Or connect your GitHub repository

**CLI Method:**
\`\`\`bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
\`\`\`

---

### 3. GitHub Pages 📄

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`

2. Add to `package.json`:
\`\`\`json
{
  "homepage": "https://PrathamM16.github.io/personal-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
\`\`\`

3. Update `vite.config.js`:
\`\`\`javascript
export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [react()],
})
\`\`\`

4. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

---

### 4. AWS Amplify ☁️

**Steps:**
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy

---

## Pre-Deployment Checklist ✅

- [ ] Update personal information in `portfolioData.js`
- [ ] Add your resume PDF to `public` folder
- [ ] Test all links (LinkedIn, GitHub, Email)
- [ ] Update meta tags in `index.html` for SEO
- [ ] Test responsiveness on mobile devices
- [ ] Check all images are optimized
- [ ] Run `npm run build` to check for errors
- [ ] Test contact form functionality
- [ ] Update GitHub repository URL
- [ ] Add Google Analytics (optional)

---

## Environment Variables (If needed)

Create `.env` file:
\`\`\`env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_TOKEN=your_github_token (for API)
\`\`\`

**Note:** Prefix with `VITE_` for Vite to expose them

---

## Custom Domain Setup 🌐

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### On Netlify:
1. Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

---

## Post-Deployment 🎉

1. **Test Everything:**
   - All page sections
   - Animations and interactions
   - Contact form
   - Mobile responsiveness
   - Loading speed

2. **SEO Optimization:**
   - Submit sitemap to Google Search Console
   - Verify Open Graph tags
   - Check meta descriptions

3. **Analytics:**
   - Set up Google Analytics
   - Add tracking code to `index.html`

4. **Share Your Portfolio:**
   - Update LinkedIn profile
   - Add to GitHub profile README
   - Share on social media

---

## Troubleshooting 🔧

### Build Errors
\`\`\`bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
\`\`\`

### Routing Issues (404 on refresh)
Add `_redirects` file in `public` folder:
\`\`\`
/*    /index.html   200
\`\`\`

### Images Not Loading
- Check image paths (use `/` for public folder)
- Ensure images are in `public` directory
- Use relative paths or import in components

---

## Performance Tips ⚡

1. **Image Optimization:**
   - Use WebP format
   - Compress images
   - Lazy load images

2. **Code Splitting:**
   - Already handled by Vite
   - Use dynamic imports for heavy components

3. **Caching:**
   - Configured automatically by hosting platforms

---

## Support & Issues 💬

If you encounter any issues:
1. Check the [README.md](./README.md)
2. Review error messages carefully
3. Search existing issues on GitHub
4. Create a new issue with details

---

**Made with ❤️ by Pratham M**
