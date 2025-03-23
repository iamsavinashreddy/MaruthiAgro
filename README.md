
# Maruthiagro.com - Premium Food Products

## About This Project

Maruthiagro offers premium quality food grains and flour since 1975. We are committed to bringing the best agricultural products to your table.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

To run this project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Deployment

This project is configured to deploy to GitHub Pages using GitHub Actions.

To deploy:
1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Visit your GitHub Pages URL to see the deployed site

### GitHub Pages Configuration Notes

This project uses:
- React Router with HashRouter for GitHub Pages compatibility
- Absolute paths for asset loading, configured in vite.config.ts

## Custom Domain Setup

To use a custom domain:
1. Configure your DNS settings to point to GitHub Pages
2. Add your custom domain in the GitHub repository settings
3. Create a CNAME file in the public directory with your domain
4. Ensure HTTPS is enabled for secure connections
