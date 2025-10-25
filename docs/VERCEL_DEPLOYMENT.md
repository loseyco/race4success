# Vercel Deployment Guide for Race4Success

This guide will help you deploy Race4Success to Vercel quickly and efficiently.

## Prerequisites

- [Vercel account](https://vercel.com/signup)
- [GitHub account](https://github.com)
- Node.js 18+ installed locally

## Quick Deployment

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial Race4Success setup"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add variables from `vercel.env.example`
   - Set `NODE_ENV` to `production`

4. **Deploy**:
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add MONGODB_URI
   vercel env add JWT_SECRET
   # Add other variables as needed
   ```

## Configuration Details

### Build Configuration

The project is configured with:
- **vercel.json**: Defines build and routing rules
- **vercel-build script**: Runs the build process
- **Static file serving**: Optimized for Vercel's CDN

### Environment Variables

Required variables for production:
```bash
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
CORS_ORIGIN=https://your-domain.vercel.app
```

### Custom Domain Setup

1. **Add Domain in Vercel**:
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., `race4success.org`)

2. **Configure DNS**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel's nameservers

3. **SSL Certificate**:
   - Automatically provided by Vercel
   - HTTPS enabled by default

## Performance Optimizations

### Vercel Features Used

- **Edge Functions**: API routes run on Vercel's edge network
- **Static Assets**: CSS/JS served from global CDN
- **Image Optimization**: Automatic image optimization
- **Caching**: Intelligent caching for better performance

### Build Process

```bash
# Local build (for testing)
npm run build

# Vercel build (automatic)
npm run vercel-build
```

## Monitoring and Analytics

### Vercel Analytics

1. **Enable Analytics**:
   - Go to Project Settings > Analytics
   - Enable Vercel Analytics

2. **View Metrics**:
   - Real-time performance data
   - Core Web Vitals tracking
   - User behavior analytics

### Error Monitoring

- **Function Logs**: Available in Vercel dashboard
- **Real-time Monitoring**: Built-in error tracking
- **Performance Insights**: Detailed performance metrics

## Database Integration

### MongoDB Atlas (Recommended)

1. **Create Cluster**:
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a new cluster
   - Get connection string

2. **Configure Vercel**:
   - Add `MONGODB_URI` environment variable
   - Use connection string from Atlas

### Alternative Databases

- **PlanetScale**: MySQL-compatible
- **Supabase**: PostgreSQL with real-time features
- **FaunaDB**: Serverless database

## Troubleshooting

### Common Issues

1. **Build Failures**:
   ```bash
   # Check build logs in Vercel dashboard
   # Ensure all dependencies are in package.json
   ```

2. **Environment Variables**:
   ```bash
   # Verify variables are set correctly
   # Check for typos in variable names
   ```

3. **API Routes Not Working**:
   ```bash
   # Check vercel.json routing configuration
   # Ensure server.js exports app correctly
   ```

### Debug Commands

```bash
# Test locally with Vercel
vercel dev

# Check deployment logs
vercel logs

# Inspect function
vercel inspect
```

## Advanced Configuration

### Custom Headers

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Redirects

Add to `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

## Security Considerations

### Environment Variables
- Never commit sensitive data to Git
- Use Vercel's environment variable system
- Rotate secrets regularly

### HTTPS
- Automatically enabled on Vercel
- Force HTTPS redirects
- Secure headers configured

### Rate Limiting
- Configured in server.js
- Protects against abuse
- Adjustable limits

## Support and Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Race4Success Issues](https://github.com/loseyco/race4success/issues)

---

**Ready to deploy? Follow the Quick Deployment steps above!** 🚀
