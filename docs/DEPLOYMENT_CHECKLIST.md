# Vercel Deployment Checklist

## Pre-Deployment ✅

- [ ] Code pushed to GitHub repository
- [ ] Environment variables configured
- [ ] Database connection string ready
- [ ] Domain name configured (if using custom domain)

## Environment Variables Required

- [ ] `NODE_ENV=production`
- [ ] `MONGODB_URI=mongodb+srv://...`
- [ ] `JWT_SECRET=your-secret-key`
- [ ] `CORS_ORIGIN=https://your-domain.vercel.app`

## Build Process ✅

- [ ] CSS compiled to `public/css/style.css`
- [ ] JavaScript bundled to `public/js/bundle.js`
- [ ] HTML copied to `public/index.html`
- [ ] Static assets in `public/` directory

## Deployment Steps

1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository

2. **Configure Build**:
   - Build Command: `npm run vercel-build`
   - Output Directory: `public`
   - Install Command: `npm ci`

3. **Set Environment Variables**:
   - Add all required variables
   - Use `vercel.env.example` as reference

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Test the live URL

## Post-Deployment ✅

- [ ] Test main page loads correctly
- [ ] Test API endpoints respond
- [ ] Test mobile responsiveness
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (if needed)
- [ ] Configure analytics (optional)

## Troubleshooting

### Common Issues:
- **Build fails**: Check Node.js version (18+ required)
- **API not working**: Verify environment variables
- **Static files not loading**: Check vercel.json routes
- **Database connection**: Verify MongoDB URI format

### Debug Commands:
```bash
# Test locally with Vercel
vercel dev

# Check deployment logs
vercel logs

# Inspect function
vercel inspect
```

## Performance Optimization

- [ ] Enable Vercel Analytics
- [ ] Configure caching headers
- [ ] Optimize images
- [ ] Enable compression
- [ ] Set up CDN (automatic with Vercel)

---

**Ready to deploy? Follow the steps above!** 🚀
