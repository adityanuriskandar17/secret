# 🎉 Birthday Surprise Website

Website kejutan ulang tahun yang dibangun dengan Next.js, React, dan Tailwind CSS.

## ✨ Fitur

- 🎭 **Tema Penyamaran**: Dimulai dengan tampilan "System Loading" dan password prompt
- 🎊 **Efek Kejutan**: Confetti, balon terbang, emoji mengambang, dan sparkle
- 🎂 **Kue Virtual**: Bisa meniup lilin dengan klik
- 💫 **Animasi Smooth**: Menggunakan Framer Motion untuk transisi yang indah
- 🎨 **Desain Modern**: Gradient, glass morphism, dan dark theme

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser di http://localhost:3000
```

## 📝 Cara Menggunakan

1. Website akan tampak seperti "System Loading" - tunggu sebentar
2. Masukkan password: `buka` atau `happy` (atau apa saja)
3. Nikmati kejutan ulang tahun! 🎂
4. Klik lilin pada kue untuk meniupnya

## 🎨 Kustomisasi

Untuk mengubah pesan ucapan, edit file `src/app/page.tsx` dan ubah variabel `birthdayWish`:

```typescript
const birthdayWish = `Selamat Ulang Tahun!

Tulis pesan kustommu di sini...`;
```

Untuk mengubah umur yang ditampilkan, ubah nilai pada komponen `CountUp`:

```tsx
<CountUp end={25} suffix="!" />  // Ganti 25 dengan umur yang diinginkan
```

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Canvas Confetti

## 📄 License

Free to use for personal projects!

---

Made with ❤️ for that special someone
