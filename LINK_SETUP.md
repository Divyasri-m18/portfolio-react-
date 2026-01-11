# 🔗 Quick Link Setup Guide

## Update Your Links in 2 Simple Steps

### Step 1: Update Social Profile Links

Open `src/config/links.js` and update these values:

```javascript
export const GITHUB_USERNAME = 'Divyasrim19'        // Your GitHub username
export const LINKEDIN_USERNAME = 'divyasri-m'      // Your LinkedIn username  
export const LEETCODE_USERNAME = 'divyasrim19'     // Your LeetCode username
export const CODECHEF_USERNAME = 'divyasrim19'      // Your CodeChef username
export const CODEFORCES_USERNAME = 'Divyasrim19'   // Your Codeforces username
export const EMAIL = 'divyasri@example.com'        // Your email
```

**That's it!** All social links across the entire website will automatically update.

---

### Step 2: Update Project Links

Open `src/config/projects.js` and update:

1. **GitHub Username** (at the top):
```javascript
export const GITHUB_USERNAME = 'Divyasrim19' // Your GitHub username
```

2. **Individual Project Links**:
```javascript
{
  title: 'DeepFake Video Detection',
  // ... other fields ...
  github: `https://github.com/${GITHUB_USERNAME}/deepfake-detection`, // Update repo name
  demo: 'https://deepfake-detection.vercel.app', // Update with your live demo URL
}
```

**For each project:**
- Replace `deepfake-detection` with your actual repository name
- Replace the demo URL with your deployed project URL (Vercel, Netlify, etc.)

---

## 📋 Example Project Links

If your GitHub username is `Divyasrim19` and you have these repos:

- Repository: `chic-threads-ecommerce`
- Live Demo: `https://chic-threads.vercel.app`

Then update like this:
```javascript
github: `https://github.com/Divyasrim19/chic-threads-ecommerce`,
demo: 'https://chic-threads.vercel.app',
```

---

## ✅ Quick Checklist

- [ ] Updated GitHub username in `src/config/links.js`
- [ ] Updated LinkedIn username in `src/config/links.js`
- [ ] Updated LeetCode username in `src/config/links.js`
- [ ] Updated CodeChef username in `src/config/links.js`
- [ ] Updated Codeforces username in `src/config/links.js`
- [ ] Updated email in `src/config/links.js`
- [ ] Updated GitHub username in `src/config/projects.js`
- [ ] Updated all 4 project GitHub links in `src/config/projects.js`
- [ ] Updated all 4 project demo links in `src/config/projects.js`
- [ ] Added your resume PDF to `public/resume.pdf`

---

## 🚀 After Updating

1. Save all files
2. Run `npm run dev` to test locally
3. Deploy to Vercel when ready!

All links are now centralized and easy to manage! 🎉
