# Dark/Light Mode Feature

## Fitur yang Ditambahkan:

### 1. **Theme Context**
- `ThemeContext.jsx` - Context provider untuk mengelola state theme
- Auto-detect system preference (prefers-color-scheme)
- Persistent theme storage di localStorage
- Smooth transitions antar theme

### 2. **Theme Toggle Component**
- `ThemeToggle.jsx` - Button toggle dengan animasi smooth
- Icon sun/moon yang berubah sesuai theme
- Positioned di header sebelah kiri mobile menu
- Responsive design untuk mobile dan desktop

### 3. **CSS Variables System**
- Light theme variables di `index.css`
- Dark theme variables dengan `[data-theme="dark"]`
- Automatic color transitions untuk semua elements
- Comprehensive color palette untuk kedua theme

### 4. **Component Updates**
- **App.jsx**: Wrapped dengan ThemeProvider
- **Header.jsx**: Menambahkan ThemeToggle button
- **Contact.css**: Updated untuk menggunakan CSS variables
- **App.css**: Global styling dengan theme support

## CSS Variables:

### Light Theme:
- Primary: #00a86b (green)
- Secondary: #0f7b4c (dark green)
- Background: #ffffff (white)
- Text: #333333 (dark gray)

### Dark Theme:
- Primary: #4ade80 (light green)
- Secondary: #22c55e (green)
- Background: #0f172a (dark blue)
- Text: #e2e8f0 (light gray)

## Features:
✅ Auto-detect system preference
✅ Persistent theme storage
✅ Smooth transitions
✅ Responsive design
✅ Accessible button (aria-label)
✅ Icon changes (sun/moon)
✅ All components support both themes
