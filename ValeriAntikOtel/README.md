# Valeria Antique Hotel Sultanahmet 1892 - Tarihi Boutique Otel Web Sitesi

Bu proje, 1892'den beri Sultanahmet'te hizmet veren tarihi boutique otelinin web sitesidir. Osmanlı döneminden günümüze uzanan eşsiz bir atmosfer sunan modern bir web deneyimi oluşturulmuştur.

## Özellikler

### 🎨 Tasarım
- **Renk Paleti**: Altın sarısı, koyu yeşil, krem ve toprak tonları
- **Typography**: Playfair Display ve Cormorant Garamond serif fontları
- **Vintage Doku**: Hafif mermer ve eski kağıt dokusu efektleri
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm

### 📱 Modern Özellikler
- Tamamen responsive tasarım
- Smooth scrolling navigasyon
- Parallax efektleri
- İnteraktif animasyonlar
- Mobil uyumlu hamburger menü

### 🏨 İçerik Bölümleri
1. **Ana Sayfa**: Hero bölümü ve hoş geldiniz mesajı
2. **Odalar**: 5 farklı oda tipi (Economic, Deluxe Double, Standard/Deluxe Triple, Sultans Room)
3. **Tarihçe**: 133 yıllık zengin tarih ve Osmanlı dönemi hikayesi
4. **Galeri**: Otel fotoğrafları ve lightbox özelliği
5. **Hizmetler**: 24/7 resepsiyon, transfer, otopark, WiFi
6. **Rezervasyon**: Interaktif rezervasyon formu
7. **İletişim**: İletişim bilgileri ve mesaj formu

### 🛠️ Teknik Özellikler
- **HTML5**: Semantik yapı ve SEO optimizasyonu
- **CSS3**: Modern layout techniques (Grid, Flexbox)
- **Vanilla JavaScript**: Form validasyonu ve interaktif özellikler
- **Accessibility**: ARIA labels ve keyboard navigation

## Kurulum ve Çalıştırma

### 1. Dosyaları İndirin
Bu proje dosyalarını bilgisayarınıza kopyalayın.

### 2. Web Server Başlatın
```bash
# Python 3 kullanarak
python -m http.server 8000

# Node.js live-server kullanarak (eğer yüklüyse)
live-server

# VS Code Live Server extension kullanarak
# index.html'e sağ tıklayıp "Open with Live Server" seçin
```

### 3. Tarayıcıda Açın
- Python server: http://localhost:8000
- Live Server: http://127.0.0.1:5500 (otomatik açılır)

## Dosya Yapısı

```
VipOtelSite/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript işlevselliği
└── README.md          # Bu dosya
```

## Kullanılan Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Grid Layout, Flexbox, Animations
- **JavaScript ES6+**: Modern JavaScript özellikleri
- **Google Fonts**: Playfair Display & Cormorant Garamond
- **Unsplash Images**: Yüksek kaliteli görseller

## Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasındaki `:root` bölümünde CSS değişkenlerini düzenleyebilirsiniz:

```css
:root {
    --primary-gold: #d4af37;
    --secondary-gold: #b8941f;
    --cream: #f5f5dc;
    --dark-green: #2f4f2f;
    /* ... diğer renkler */
}
```

### İçerik Güncelleme
- **Metinler**: `index.html` dosyasındaki içerikleri düzenleyin
- **Görseller**: Unsplash URL'lerini kendi görsellerinizle değiştirin
- **İletişim Bilgileri**: Footer ve iletişim bölümündeki bilgileri güncelleyin

## Gelecek Geliştirmeler

- [ ] Google Maps entegrasyonu
- [ ] Çoklu dil desteği
- [ ] Rezervasyon sistemi backend entegrasyonu
- [ ] Blog bölümü ekleme
- [ ] Sosyal medya entegrasyonu
- [ ] SEO optimizasyonları

## Tarayıcı Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers

## Lisans

Bu proje eğitim amaçlı oluşturulmuştur. Ticari kullanım için görsellerin telif haklarını kontrol edin.

## İletişim

Sorularınız için: valeria.antique@gmail.com

---

**Not**: Bu site Valeria Antique Hotel Sultanahmet 1892 için hazırlanmıştır.
