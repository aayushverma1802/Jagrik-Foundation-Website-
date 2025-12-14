# Deployment Guide - Vercel

This guide will help you deploy the Jagrik Foundation donation website to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))
3. Your code pushed to a GitHub repository

## Step-by-Step Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jagrik Foundation donation website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com/aayush1802s-projects](https://vercel.com/aayush1802s-projects)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables** (if needed)
   - Add any required environment variables in the Vercel dashboard
   - For payment integration, you'll need to add API keys here

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Post-Deployment

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables

If you need to add environment variables:
1. Go to Project Settings → Environment Variables
2. Add variables for:
   - Payment gateway API keys (Stripe, PayPal, etc.)
   - Any other API keys or secrets

### Monitoring

- Vercel provides built-in analytics
- Check the "Analytics" tab for performance metrics
- Monitor deployments in the "Deployments" tab

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (Vercel uses Node 18+ by default)

### 3D Models Not Loading

- Ensure Three.js dependencies are properly installed
- Check browser console for errors
- Verify WebGL support in target browsers

### Performance Issues

- Enable Vercel Analytics
- Check bundle size (should be under 500KB)
- Optimize images if added
- Consider enabling Edge Functions for dynamic content

## Continuous Deployment

Vercel automatically deploys on every push to your main branch:
- Push to `main` → Production deployment
- Push to other branches → Preview deployment

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: support@vercel.com

