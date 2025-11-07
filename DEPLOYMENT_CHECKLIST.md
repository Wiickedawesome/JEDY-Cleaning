# Deployment Checklist for Azure Static Web Apps

## ✅ Pre-Deployment Setup

### Configuration Files
- ✅ `staticwebapp.config.json` - Azure Static Web Apps config
- ✅ `azure-static-web-apps-deploy.yml` - GitHub Actions workflow
- ✅ `.github/workflows/` - CI/CD pipeline setup
- ✅ `package.json` - Build scripts configured
- ✅ `.gitignore` - Excludes build artifacts

### Code Quality
- ✅ `tsconfig.json` - TypeScript strict mode
- ✅ `.eslintrc.cjs` - ESLint configuration
- ✅ `.prettierrc` - Code formatting rules
- ✅ `vitest.config.ts` - Testing framework

### Application
- ✅ `app/layout.tsx` - Root layout with metadata
- ✅ `app/page.tsx` - Home page with content
- ✅ `app/components/Header.tsx` - Navigation
- ✅ `app/components/Footer.tsx` - Footer
- ✅ `app/globals.css` - Global styles
- ✅ `tailwind.config.ts` - Tailwind CSS customization
- ✅ `next.config.js` - Next.js optimization

---

## 🔧 Azure Static Web Apps Setup (Do Once)

### 1. Verify Your Azure Resource
Your Static Web Apps instance:
```
Name: icy-forest-0159f671e
URL: https://icy-forest-0159f671e.3.azurestaticapps.net
```

### 2. Get Deployment Token
1. Go to Azure Portal
2. Search for "Static Web Apps"
3. Click your resource
4. Copy **Deployment Token** from overview page
5. Save securely (don't share!)

### 3. Add GitHub Secret
1. Go to GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Value: Paste your deployment token
6. Click "Add secret"

---

## 📋 First-Time Deployment

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Test Locally
```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Start production server
npm start
```

### Step 3: Verify Configuration
Check these files are correct:
- `staticwebapp.config.json` - app location and output location
- `.github/workflows/azure-static-web-apps-deploy.yml` - API token reference

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Initial deployment setup for Azure Static Web Apps"
git push origin Website
```

### Step 5: Monitor Deployment
1. Go to GitHub repository → Actions tab
2. Watch the workflow "Azure Static Web Apps CI/CD"
3. Wait for build and deploy to complete (~5-10 minutes)

### Step 6: Verify Deployment
Visit: https://icy-forest-0159f671e.3.azurestaticapps.net

---

## 🔄 Continuous Deployment Workflow

### For Regular Updates

Every time you push to `Website` branch:

```bash
# Make your changes
vim app/page.tsx  # or any file

# Commit changes
git add .
git commit -m "Update home page content"

# Push to GitHub
git push origin Website
```

**GitHub Actions automatically:**
1. ✅ Runs linting
2. ✅ Type checks TypeScript
3. ✅ Builds the project
4. ✅ Deploys to Azure if tests pass

**Result:**
- Site updates at https://icy-forest-0159f671e.3.azurestaticapps.net
- Takes ~3-5 minutes
- No manual steps needed!

---

## 🐛 Troubleshooting

### Deployment Failed in GitHub Actions

**Check logs:**
1. Go to Actions tab
2. Click the failed workflow
3. Expand the failed step
4. Read the error message

**Common issues:**

**Issue: "npm run build" failed**
```
Solution:
1. Run locally: npm run build
2. Fix any errors
3. Push again
```

**Issue: TypeScript errors**
```
Solution:
npm run type-check
# Fix errors reported
git push again
```

**Issue: ESLint errors**
```
Solution:
npm run lint:fix
git push again
```

### Site Not Updating After Push

1. Clear browser cache (Ctrl+Shift+Delete)
2. Wait 2-3 minutes for deployment
3. Check GitHub Actions tab for failures
4. Check Azure Portal → Deployments

### API Token Invalid

1. Go to Azure Portal
2. Your Static Web Apps resource
3. Get new Deployment Token
4. Update GitHub secret

---

## 📊 Deployment Status Dashboard

**GitHub Actions:** https://github.com/Wiickedawesome/JEDY-Cleaning/actions

**Azure Portal:** 
1. Search "Static Web Apps"
2. Click "icy-forest-0159f671e"
3. View "Deployments" tab

**Live Site:** https://icy-forest-0159f671e.3.azurestaticapps.net

---

## 🚀 Deployment Commands Quick Reference

```bash
# Local development
npm run dev              # Start dev server on localhost:3000

# Testing
npm run type-check       # Check TypeScript
npm run lint             # Run linting
npm run build            # Build for production

# Code formatting
npm run format           # Format all code
npm run lint:fix         # Auto-fix lint errors

# Deployment (manual, only if needed)
# Usually just `git push` triggers automatic deployment!
```

---

## ✨ Next Steps After Initial Setup

1. **Add Content**
   - Update Services page
   - Create About page
   - Build Contact form

2. **Optimize SEO**
   - Update meta tags
   - Add images
   - Add schema.org structured data

3. **Add Analytics**
   - Google Analytics
   - Vercel Analytics

4. **Domain Setup**
   - Custom domain (optional)
   - SSL certificate (automatic)

---

## 📞 Support Resources

- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Everything is ready! Just push your changes and watch your site go live!** 🎉🧹
