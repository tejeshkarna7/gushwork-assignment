# Quick Start Guide - Gushwork Landing Page

## 🚀 Fast Setup (Less than 2 minutes)

### Step 1: View the Website
Open the file `index.html` in your web browser. The site will work immediately without any setup or build process needed.

### Step 2: Add Images (Optional but Recommended)

To make the site look complete with images, create a folder called `assets` (already created) and add these image files:

**Required Images:**
1. `hero-pipes.jpg` - Main hero image (HDPE pipes)
2. `app-1.jpg` - Water Distribution
3. `app-2.jpg` - Industrial Applications  
4. `app-3.jpg` - Irrigation Systems
5. `app-4.jpg` - Gas Distribution
6. `process-1.jpg` - Manufacturing step 1
7. `process-2.jpg` - Manufacturing step 2
8. `portfolio-1.jpg` - Portfolio item 1
9. `portfolio-2.jpg` - Portfolio item 2
10. `portfolio-3.jpg` - Portfolio item 3

**Recommended Image Sizes:**
- Hero image: 600x500px
- Application cards: 400x300px
- Process images: 500x400px
- Portfolio images: 400x300px

### Step 3: Customize Content

Edit `index.html` to change:
- Company name/logo
- Product descriptions
- Feature details
- FAQ questions and answers
- Contact email
- Social media links
- Any text content

### Step 4: Customize Colors (Optional)

Edit `css/styles.css` and find the `:root` section to change:
- `--primary-color`: Main blue color
- `--secondary-color`: Secondary blue
- `--accent-color`: Orange highlight color
- `--accent-light`: Yellow accent color

## 📂 File Structure
```
gushwork-assignment/
├── index.html              # Main website file
├── css/
│   ├── styles.css         # All styles
│   └── responsive.css     # Mobile responsive styles
├── js/
│   └── script.js          # Interactive features
├── assets/                # Image folder (add your images here)
└── README.md              # Full documentation
```

## ✨ Features Included

✅ **Responsive Design** - Works on all devices
✅ **Smooth Animations** - Professional effects
✅ **FAQ Accordion** - Click to expand/collapse
✅ **Mobile Menu** - Auto-collapses on small screens
✅ **Form Validation** - Email signup works
✅ **Fast Loading** - No dependencies, pure HTML/CSS/JS
✅ **SEO Ready** - Semantic HTML structure
✅ **Accessibility** - Keyboard navigation support

## 🔧 No Build Process Needed!

This is a **static website** - no npm, webpack, or build tools required.
Just open `index.html` and it works!

## 💻 Local Development Server (Optional)

If you want to serve it with a local server:

### Using Python 3:
```bash
cd d:\tejesh\gushwork-assignment
python -m http.server 8000
```
Then open: http://localhost:8000

### Using Node.js (with http-server):
```bash
cd d:\tejesh\gushwork-assignment
npx http-server
```

### Using Live Server (VS Code Extension):
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📱 Testing on Mobile

### Using Browser DevTools:
1. Open `index.html` in browser
2. Press `F12` to open Developer Tools
3. Click the mobile device icon or press `Ctrl+Shift+M`
4. Test different screen sizes

### Testing on Real Device:
1. Find your computer's IP address
2. On your phone, go to: `http://[YOUR_IP]:8000/index.html`
3. View the site responsively

## 🎨 Customization Examples

### Change Hero Title
In `index.html`, find and edit:
```html
<h1 class="hero-title">Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
```

### Add Your Images
Place image files in the `assets/` folder:
```
assets/
├── hero-pipes.jpg
├── app-1.jpg
└── ...
```

### Change Primary Color
In `css/styles.css`, edit:
```css
:root {
    --primary-color: #1a3a7a;  /* Change this color code */
}
```

## ✅ What's Already Included

- ✅ Complete HTML structure
- ✅ Professional CSS styling
- ✅ Fully responsive design
- ✅ JavaScript interactivity
- ✅ Mobile menu
- ✅ FAQ accordion
- ✅ Form validation
- ✅ Smooth animations
- ✅ Parallax effects
- ✅ Counter animations
- ✅ Lazy loading
- ✅ SEO-friendly structure

## 🔒 No External Dependencies

This project uses **0 dependencies**:
- ✅ No jQuery
- ✅ No Bootstrap
- ✅ No frameworks
- ✅ Pure HTML5, CSS3, JavaScript ES6+

## 📞 Need Help?

1. **Images not showing?** - Make sure they're in the `assets/` folder
2. **Styles not applying?** - Clear browser cache (Ctrl+Shift+Delete)
3. **JavaScript not working?** - Open browser console (F12) to check for errors
4. **Mobile not responsive?** - Use DevTools mobile view (Ctrl+Shift+M)

## 🚀 Deployment

### Deploy to GitHub Pages:
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site is live!

### Deploy to Netlify:
1. Drag and drop the `gushwork-assignment` folder to Netlify
2. Your site is instantly live!

### Deploy to Vercel:
1. Import the GitHub repository
2. No configuration needed
3. Site is live!

## 📊 Quick Stats

- **Lines of HTML**: ~500
- **Lines of CSS**: ~800+
- **Lines of JavaScript**: ~400+
- **Total File Size**: ~150KB (without images)
- **Load Time**: < 1 second
- **Mobile Friendly**: ✅ Yes
- **SEO Optimized**: ✅ Yes

---

**Ready to go?** Open `index.html` now! 🎉

For complete documentation, see `README.md`
