#!/bin/bash
# Azure Static Web Apps Deployment Script

echo "🚀 Deploying JEDY Cleaning to Azure Static Web Apps..."

# Your deployment token
DEPLOYMENT_TOKEN="0f43192e590cdcecdc11a4892f35bac46ab4d08b0a324906aaa8289e9ee22f6b03-6409f56c-9e9d-4105-996a-e0246e04453201e05110159f671e"

# Deploy using SWA CLI
npx @azure/static-web-apps-cli deploy \
  --deployment-token "$DEPLOYMENT_TOKEN" \
  --app-location "." \
  --output-location ".next" \
  --env production

echo "✅ Deployment complete! Check https://icy-forest-0159f671e.3.azurestaticapps.net"
