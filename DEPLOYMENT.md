# 🚀 HostGator Deployment Guide

## Quick Upload Steps

### 1. Build Your Site

```bash
npm run build
```

This creates a `dist` folder with all your website files.

### 2. Upload to HostGator

1. **Login to HostGator cPanel**
2. **Open File Manager**
3. **Navigate to public_html folder**
4. **Upload all files from the `dist` folder**

---

## Detailed Instructions

### Step 1: Build Production Files

Run this command in your project folder:

```bash
npm run build
```

This will create a `dist` folder containing:

- `index.html` (your main page)
- `assets/` folder (CSS, JS, images)
- All static files ready for hosting

### Step 2: Upload via cPanel File Manager

1. **Login to HostGator**

   - Go to your HostGator control panel
   - Login with your credentials

2. **Open File Manager**

   - Find "File Manager" in cPanel
   - Click to open

3. **Navigate to public_html**

   - This is your website's root folder
   - Delete any existing files if replacing a site

4. **Upload Your Files**
   - Click "Upload" button
   - Upload the CONTENTS of the `dist` folder (not the folder itself)
   - Make sure `index.html` is in the root of public_html

### Step 3: Alternative - FTP Upload

If you prefer FTP:

1. Use FileZilla or similar FTP client
2. Connect with your HostGator FTP credentials
3. Navigate to public_html folder
4. Upload all files from `dist` folder

---

## File Structure After Upload

Your HostGator public_html should look like:

```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other assets]
├── logo.png
└── [other files]
```

---

## Important Notes

✅ **Always upload the CONTENTS of dist folder, not the dist folder itself**

✅ **Make sure index.html is in the root of public_html**

✅ **Your site will be live at: yourdomain.com**

✅ **Changes require rebuilding and re-uploading**

---

## Troubleshooting

**Problem:** Page shows 404 or blank

- **Solution:** Ensure index.html is in public_html root

**Problem:** CSS/JS not loading

- **Solution:** Check that assets folder uploaded correctly

**Problem:** Images not showing

- **Solution:** Verify logo.png and other images uploaded

**Problem:** Navigation doesn't work

- **Solution:** This is normal for React Router - see below

---

## React Router Fix for HostGator

Add this `.htaccess` file to handle React Router:

Create `.htaccess` in public_html:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

This ensures all routes (like /about, /contact) work properly.

---

## Quick Commands

**Build site:** `npm run build`
**Preview build:** `npm run preview`
**Development:** `npm run dev`

---

Your professional Digital Platform website is ready for HostGator! 🎉
