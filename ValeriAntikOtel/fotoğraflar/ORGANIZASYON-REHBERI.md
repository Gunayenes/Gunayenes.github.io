# 📁 Fotoğraf Organizasyon Rehberi

## 📋 Klasör Yapısı

```
fotoğraflar/
├── 📁 odalar/          # Oda görselleri
├── 📁 galeri/          # Galeri bölümü görselleri
├── 📁 genel/           # Ana banner, hakkımızda, genel otel görselleri
├── 📁 hizmetler/       # Hizmetler bölümü görselleri
└── logo/               # Logo dosyaları (opsiyonel)
```
 Move-Item "fotoğraflar\480769220.jpg" "fotoğraflar\hizmetler\"

## 🔄 Mevcut Görsellerin Organizasyonu

### Ana Görseller (genel/ klasörüne taşınmalı):
- `480769083.jpg` → Ana banner (slider 1)
- `480769087.jpg` → Hakkımızda bölümü
- `480769139.jpg` → Slider 2
- `480769146.jpg` → Slider 3

### Oda Görselleri (odalar/ klasörüne taşınmalı):
- `480769092.jpg` → Economic Double Room
- `480769097.jpg` → Deluxe Double Room
- `480769104.jpg` → Standard Triple Room
- `480769118.jpg` → Deluxe Triple Room
- `480769121.jpg` → Deluxe Sultans Triple Room

### Galeri Görselleri (galeri/ klasörüne taşınmalı):
- `480769125.jpg` → Galeri 1
- `480769135.jpg` → Galeri 2
- `480769147.jpg` → Galeri 3
- `480769170.jpg` → Galeri 4
- `480769180.jpg` → Galeri 5
- `480769192.jpg` → Galeri 6

### Hizmet Görselleri (hizmetler/ klasörüne taşınmalı):
- `480769212.jpg` → 24/7 Resepsiyon
- `480769214.jpg` → Ücretsiz WiFi
- `480769220.jpg` → Kahvaltı
- Diğer hizmet görselleri...

## ⚠️ Önemli Notlar

1. **Manuel Taşıma Gerekiyor**: Görseller Windows Explorer ile manuel olarak uygun klasörlere taşınmalıdır.

2. **HTML Güncellemesi**: Görselleri taşıdıktan sonra, `index.html` dosyasındaki tüm görsel yolları güncellenmeli:
   - `fotoğraflar/480769083.jpg` → `fotoğraflar/genel/480769083.jpg`
   - `fotoğraflar/480769092.jpg` → `fotoğraflar/odalar/480769092.jpg`

3. **SEO Dostu Dosya Adları**: Gelecekte yeni görseller eklenirken SEO dostu isimler kullanılmalı:
   - `economic-double-room-1.jpg`
   - `deluxe-triple-room-view.jpg`
   - `valeria-hotel-breakfast.jpg`

4. **Görsel Optimizasyonu**: Tüm görseller web için optimize edilmiş boyutlarda (genellikle 1920px genişlik maksimum) olmalıdır.

## 🚀 Sonraki Adımlar

1. Görselleri yukarıdaki yapıya göre organize edin
2. HTML dosyasındaki yolları güncelleyin
3. Yeni görseller eklerken bu organizasyonu koruyun
4. Backup almayı unutmayın!
