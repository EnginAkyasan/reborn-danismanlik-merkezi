# Reborn Danışmanlık Merkezi — Web Sitesi

**Proje Durumu:** Tamamlandı (v1.0)  
**Oluşturulma Tarihi:** 29 Haziran 2026  
**Platform:** Statik HTML/CSS/JS (sunucu gerektirmez)

---

## Proje Özeti

Türkiye'nin ruh sağlığı sektörüne yönelik premium, profesyonel psikoloji klinik web sitesi.
Dünyaca ünlü klinik web siteleri (31 Best Mental Health Websites 2024, Gapsy Studio, High Five Design)
analiz edilerek oluşturulan tasarım rehberine dayalı yapılmıştır.

---

## Takım

| Rol | Çıktı |
|-----|-------|
| **Proje Müdürü** | Tasarım standartları araştırması (renk, tipografi, layout, animasyon) |
| **Gizem (Psikoloji Uzmanı)** | İçerik araştırması (sayfalar, bölümler, form alanları, SSS, etik) |
| **Frontend Geliştirici** | Tüm HTML/CSS/JS kodlaması |

---

## Dosya Yapısı

```
Reborn Danismanlik Merkezi/
├── index.html          # Ana sayfa (Hero, Hizmetler, Ekip, Referanslar, Form)
├── hakkimizda.html     # Hakkımızda (Misyon, Değerler, Tarihçe, Akreditasyon)
├── hizmetler.html      # Hizmetler (6 terapi türü + SSS)
├── ekibimiz.html       # Ekibimiz (5 psikolog profili + özgeçmiş)
├── iletisim.html       # İletişim (Tam ön başvuru formu + Harita + Saat)
├── styles.css          # Tam tasarım sistemi (CSS variables + responsive)
├── main.js             # Etkileşim (Nav, Reveal, CountUp, Form, Accordion)
├── assets/
│   ├── images/         # Gerçek fotoğraflar buraya eklenecek
│   └── fonts/          # Yerel font dosyaları (opsiyonel)
└── README.md           # Bu dosya
```

---

## Tasarım Sistemi

### Renk Paleti (Araştırmaya Dayalı)
Dünyaca ünlü klinikler gibi **sage green + warm cream + gold** formülü kullanılmıştır.
Nörolojik olarak kalp atışını yavaşlatan ve güven hissi yaratan renkler seçilmiştir.

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--sage` | `#4A6741` | Ana renk, butonlar |
| `--forest` | `#2D4028` | Koyu varyant, başlıklar |
| `--sage-light` | `#7A9B71` | Açık varyant |
| `--sage-mist` | `#EBF3E9` | Arka plan, badge |
| `--gold` | `#C8A97A` | Accent, premium vurgu |
| `--cream` | `#FAF8F3` | Sayfa arka planı |
| `--ink` | `#1A1A2E` | Metin |

### Tipografi
| Kullanım | Font | Kaynak |
|----------|------|--------|
| Başlıklar | Cormorant Garamond | Google Fonts |
| Gövde Metin | Plus Jakarta Sans | Google Fonts |

### Animasyonlar
- **Scroll Reveal** — IntersectionObserver tabanlı, 0.7s ease-out
- **Count Up** — Hero istatistikleri için sayaç animasyonu
- **Float** — Hero kartlarında yüzme animasyonu
- **Sticky Nav** — Scroll sonrası blur backdrop + shadow

---

## Sayfalar ve İçerik

### 1. Ana Sayfa (`index.html`)
- **Hero:** Büyük gradient, psikolog kartı, istatistikler
- **İstatistik Barı:** 8+ Psikolog, 15+ Yaklaşım, 7/24 Online, %100 Gizlilik
- **Hizmetler:** 6 hizmet kartı (Bireysel, Çift, Aile, Çocuk, Online, EMDR)
- **Hakkımızda:** Klinik özeti, 4 özellik
- **Ekip Önizleme:** 3 psikolog kartı
- **Referanslar:** 3 danışan yorumu (koyu alan)
- **Ön Başvuru Formu:** Ad, Telefon, Hizmet, Mesaj, KVKK

### 2. Hakkımızda (`hakkimizda.html`)
- Misyon & Vizyon
- 6 Temel Değer kartı
- Zaman Çizelgesi (2012–2024)
- Akreditasyon rozetleri
- Etik & Gizlilik bölümü

### 3. Hizmetler (`hizmetler.html`)
- Yapışkan servis navigasyonu
- 6 hizmet: Bireysel, Çift, Aile, Çocuk, Online, EMDR
- Her hizmet: Süre, Sıklık, Format, Konular
- Geçişli split layout (sağ-sol alternatif)
- 5 soruluk SSS (accordion)

### 4. Ekibimiz (`ekibimiz.html`)
- Kurucu psikolog (tam genişlik büyük kart)
- 4 uzman psikolog kartı
- Her psikolog: Fotoğraf, Unvan, Bio, Eğitim, Yaklaşımlar, Randevu butonu
- Kalite Güvencesi bölümü

### 5. İletişim (`iletisim.html`)
- 3 iletişim kartı (Telefon, Adres, E-posta)
- Tam ön başvuru formu (12 alan):
  - Kişisel bilgiler (Ad, Soyad, Tel, Email, Yaş, Cinsiyet)
  - Seans tercihleri (Tür, Format, Psikolog, Gün, Saat)
  - Başvuru bilgileri (Konu, Önceki terapi, Notlar, Referans)
  - KVKK onayı
- Çalışma saatleri tablosu
- Google Maps embed
- Ulaşım rehberi (Metro, Otobüs, Araç)
- Acil destek bilgisi (182)

---

## Teknik Özellikler

| Özellik | Durum |
|---------|-------|
| Framework | Vanilla HTML/CSS/JS (sıfır bağımlılık) |
| Sunucu | Gerektirmez (statik dosyalar) |
| Responsive | ✅ Mobile-first, 3 breakpoint (1024px, 768px, 480px) |
| Google Fonts | ✅ Cormorant Garamond + Plus Jakarta Sans |
| Animasyon | ✅ CSS transitions + Intersection Observer |
| Form | ✅ Client-side validasyon + simüle submit |
| Accordion | ✅ Pure CSS/JS (no library) |
| Nav Scroll | ✅ Blur backdrop sticky nav |
| Count Up | ✅ requestAnimationFrame tabanlı |
| KVKK | ✅ Checkbox onayı zorunlu |
| SEO Meta | ✅ Title + description her sayfada |
| Favicon | ✅ SVG tabanlı inline |

---

## Kurulum & Çalıştırma

### Basit (dosya açma)
```bash
# Direkt index.html'i tarayıcıda açın
# Windows: index.html'e çift tıklayın
```

### Yerel Sunucu (önerilir — Google Maps için)
```bash
# Python 3
cd "Reborn Danismanlik Merkezi"
python -m http.server 3000
# Tarayıcıda: http://localhost:3000

# Node.js
npx serve .
# Tarayıcıda: http://localhost:3000
```

---

## Gerçek Uygulamaya Geçiş İçin Yapılacaklar

### Zorunlu
- [ ] Gerçek psikolog fotoğrafları (`assets/images/` klasörüne ekle, HTML'de `<img>` ile değiştir)
- [ ] Gerçek iletişim bilgileri (telefon, e-posta, adres)
- [ ] Form backend bağlantısı (Formspree, EmailJS veya özel API)
- [ ] Google Maps gerçek konum embed kodu

### Önerilen
- [ ] Gerçek Google Analytics entegrasyonu
- [ ] WhatsApp Business API (hızlı iletişim)
- [ ] Blog/Makaleler sayfası (SEO için)
- [ ] Online randevu takvim sistemi (Calendly, Setmore vb.)
- [ ] Özel domain + SSL (ör: rebornpsikoloji.com)
- [ ] KVKK metni hukuki inceleme (avukat onayı)

### İsteğe Bağlı
- [ ] Çoklu dil (İngilizce) için i18n
- [ ] Dark mode toggle
- [ ] Gerçek online seans rezervasyon platformu

---

## Form Backend Seçenekleri (Ücretsiz Başlangıç)

### Formspree (en kolay)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
[formspree.io](https://formspree.io) — Ücretsiz planda 50 form/ay

### EmailJS
```js
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData);
```
[emailjs.com](https://www.emailjs.com) — Ücretsiz planda 200 email/ay

---

## Tasarım Kaynakları

Tasarım kararları şu araştırmalara dayanmaktadır:
- [31 Best Mental Health Websites of 2024](https://squarestash.com/inspiration/mental-health-websites/)
- [Web Design Trends for Therapy Websites in 2025](https://mentalhealthitsolutions.com/blog/top-therapy-website-design-trends-for-2025/)
- [The Color of Calm: Color Psychology in Wellness](https://marketingwiththeagency.com/the-color-of-calm-mastering-color-psychology-in-wellness-web-design/)
- [11 Must Haves for Your Therapy Website](https://www.joinheard.com/articles/11-must-haves-for-your-therapy-website-tips-from-experts)
- APA Etik İlkeleri + TPD Etik Yönetmeliği

---

*Reborn Danışmanlık Merkezi Web Sitesi — Tüm hakları saklıdır.*
