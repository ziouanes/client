# 🚀 Full Deployment Guide: React Frontend + Express Backend (Glitch + Netlify)

This guide will walk you through deploying a React frontend (on **Netlify**) and an Express backend (on **Glitch**) using a single GitHub repository.

---

## 📁 Project Structure

Make sure your project is structured like this:

```
project-root/
├── client/         # React frontend
│   ├── package.json
│   └── ...
├── api-server/     # Express backend
│   ├── server.js
│   └── package.json
```

---



## 🌍 Deploying React Frontend on Netlify

### ✅ Step 1: Prepare the React App

In `client/package.json`, add this (if needed):
```json
"homepage": "."
```

Then build the app:
```bash
cd client
npm install
npm run build
```

### ✅ Step 2: Push to GitHub
Push the whole project (with `/client` folder) to GitHub.

### ✅ Step 3: Deploy to Netlify
1. Go to [https://netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add New Site > Import from GitHub"**
4. Choose your repo and set:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`

### ✅ Step 4: Set Environment Variable
Set in Netlify → Site Settings → Environment:
```
REACT_APP_API_URL=https://your-project-name.glitch.me/api
```

In your React Axios config (e.g., `src/services/api.js`):
```js
const API_URL = process.env.REACT_APP_API_URL;
```

---

## ✅ Final Checklist

- [x] Glitch backend is live and accessible
- [x] CORS is enabled on backend
- [x] React app is deployed on Netlify
- [x] API requests use the Glitch URL correctly

---

## 🧪 Test
- Open Netlify site → Try adding/deleting tasks
- Open Dev Tools → No CORS or network errors
- Check: `https://your-project.glitch.me/api/tasks` works in browser

---

## 🎉 Done!
