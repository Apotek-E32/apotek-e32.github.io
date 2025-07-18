# 🚀 Panduan Deploy ke GitHub Pages

## Langkah 1: Buat Repository di GitHub

1. Buka [GitHub](https://github.com) dan login ke akun Anda
2. Klik tombol **"New"** atau **"+"** untuk membuat repository baru
3. Isi detail repository:
   - **Repository name**: `apotek-e32-react`
   - **Description**: `Website resmi Apotek E32 - Modern React website with dark/light mode`
   - **Visibility**: Public (agar bisa menggunakan GitHub Pages gratis)
   - **Jangan** centang "Initialize this repository with README" (karena kita sudah punya)

4. Klik **"Create repository"**

## Langkah 2: Push Code ke GitHub

Di terminal/command prompt, jalankan perintah berikut:

```bash
# Tambahkan remote origin (ganti 'jihar' dengan username GitHub Anda)
git remote add origin https://github.com/jihar/apotek-e32-react.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

## Langkah 3: Aktifkan GitHub Pages

1. Buka repository Anda di GitHub
2. Klik tab **"Settings"**
3. Scroll ke bawah hingga menemukan section **"Pages"**
4. Di **"Source"**, pilih **"Deploy from a branch"**
5. Di **"Branch"**, pilih **"gh-pages"** (branch ini akan dibuat otomatis saat deploy)
6. Klik **"Save"**

## Langkah 4: Deploy Pertama Kali

Di terminal, jalankan:

```bash
# Deploy ke GitHub Pages
npm run deploy
```

Perintah ini akan:
1. Build proyek (`npm run build`)
2. Push hasil build ke branch `gh-pages`
3. GitHub Pages akan otomatis serve website dari branch tersebut

## Langkah 5: Akses Website

Setelah deploy selesai (biasanya 1-2 menit), website dapat diakses di:

**https://jihar.github.io/apotek-e32-react**

(Ganti 'jihar' dengan username GitHub Anda)

## 🔄 Deploy Selanjutnya

Untuk update website di masa depan:

```bash
# 1. Buat perubahan pada code
# 2. Commit perubahan
git add .
git commit -m "Update: deskripsi perubahan"

# 3. Push ke GitHub
git push origin main

# 4. Deploy ke GitHub Pages
npm run deploy
```

## 🤖 Otomatis Deploy dengan GitHub Actions

File `.github/workflows/deploy.yml` sudah disiapkan untuk deploy otomatis. Setelah push code ke GitHub, website akan otomatis ter-deploy setiap ada perubahan di branch main.

## 🌐 Custom Domain (Opsional)

Jika ingin menggunakan domain sendiri (misal: www.apoteke32.com):

1. Buat file `CNAME` di folder `public/` dengan isi nama domain
2. Setting DNS domain untuk point ke `jihar.github.io`
3. Di GitHub Pages settings, masukkan custom domain

## 📞 Bantuan

Jika ada masalah, silakan:
- Cek dokumentasi [GitHub Pages](https://docs.github.com/en/pages)
- Atau hubungi developer melalui WhatsApp: 085642007123

---

**Happy Deploying! 🚀**
