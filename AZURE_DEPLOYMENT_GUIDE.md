# Azure Static Web Apps Deployment Guide

## 🚀 Deploying to Azure Static Web Apps

Your cleaning business website is now configured to deploy to Azure Static Web Apps at:
```
https://icy-forest-0159f671e.3.azurestaticapps.net
```

### Prerequisites

- ✅ Azure Static Web Apps CLI installed
- ✅ GitHub repository connected
- ✅ Azure account with Static Web Apps resource

### Deployment Methods

#### Method 1: Automatic GitHub Actions (Recommended)

The GitHub Actions workflow automatically deploys your site whenever you push to the `Website` branch.

**Setup:**
1. Go to Azure Portal
2. Navigate to your Static Web Apps resource
3. Copy the **Deployment Token** (API Token)
4. Go to GitHub repository → Settings → Secrets and variables → Actions
5. Add secret `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token
6. Push changes to `Website` branch
7. Watch the deployment at Actions tab

**What happens:**
- Tests run (lint, type-check, build)
- If tests pass, automatically deploys to Azure
- Pull requests get preview deployments

#### Method 2: Local CLI Deployment

If you want to deploy manually:

```bash
# Install Azure CLI if needed
npm install -g @azure/static-web-apps-cli

# Build the project
npm run build

# Deploy to production
npx swa deploy --env production
```

#### Method 3: Azure Portal

1. Go to Azure Portal
2. Navigate to your Static Web Apps resource
3. Click "Deployment Tokens"
4. Copy the token
5. Add to GitHub secrets (see Method 1)

### Configuration

The deployment is configured in:
- `staticwebapp.config.json` - Static Web Apps settings
- `.github/workflows/azure-static-web-apps-deploy.yml` - CI/CD pipeline

### Pre-deployment Checklist

✅ `package.json` - All dependencies listed
✅ `tsconfig.json` - TypeScript configuration
✅ `tailwind.config.ts` - Tailwind configuration
✅ `next.config.js` - Next.js configuration
✅ `.eslintrc.cjs` - Linting rules
✅ Environment variables (if any) in `.env.local`

### Environment Variables

For production, set environment variables in Azure Portal:
1. Go to Static Web Apps resource
2. Settings → Configuration
3. Add your environment variables

Example:
```
NEXT_PUBLIC_SITE_URL=https://icy-forest-0159f671e.3.azurestaticapps.net
```

### Monitoring Deployment

**GitHub Actions:**
- Go to repository → Actions tab
- Watch the workflow run
- See build logs and any errors

**Azure Portal:**
- Go to Static Web Apps resource
- Click "Deployments"
- View all deployment history

**Live Site:**
- Visit: https://icy-forest-0159f671e.3.azurestaticapps.net
- Wait ~2-3 minutes for deployment to complete

### Troubleshooting

**Build Failures:**
- Check GitHub Actions logs
- Verify all dependencies in `package.json`
- Run `npm run build` locally to test

**Deployment Not Starting:**
- Verify API token is correct
- Check branch name is `Website`
- Ensure GitHub Actions are enabled

**Site Not Updating:**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 2-3 minutes for deployment
- Check Azure portal for deployment status

**TypeScript Errors:**
```bash
npm run type-check
```

**Lint Errors:**
```bash
npm run lint:fix
```

### Next Deployment

Simply commit and push to `Website` branch:

```bash
git add .
git commit -m "Update website content"
git push origin Website
```

The site will automatically redeploy!

### Support

For Azure Static Web Apps documentation:
- https://docs.microsoft.com/en-us/azure/static-web-apps/

For Next.js deployment:
- https://nextjs.org/docs/advanced-features/static-html-export

### Your Site URL

```
🌐 Production: https://icy-forest-0159f671e.3.azurestaticapps.net
📝 Branch: Website
🔄 Auto-deploy: Enabled
⚙️ Framework: Next.js 15
```

---

**Ready to go live!** Push your changes and watch your mom's cleaning business website come to life on Azure! 🧹✨
