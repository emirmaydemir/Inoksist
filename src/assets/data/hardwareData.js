// Delme Kesme Yağları Grubu
import img01 from "../all-images/Hardware/Delme/1.jpg";
import img02 from "../all-images/Hardware/Delme/2.jpg";
// İş Güvenliği Grubu
import img03 from "../all-images/Hardware/Is/1.jpg";
import img04 from "../all-images/Hardware/Is/2.jpg";
import img05 from "../all-images/Hardware/Is/3.jpg";
import img06 from "../all-images/Hardware/Is/4.jpg";
import img07 from "../all-images/Hardware/Is/5.jpg";
import img08 from "../all-images/Hardware/Is/6.jpg";
// Kaynak Ekipmanları Grubu
import img09 from "../all-images/Hardware/Kaynak/1.jpg";
import img10 from "../all-images/Hardware/Kaynak/2.jpg";
import img11 from "../all-images/Hardware/Kaynak/3.jpg";
import img12 from "../all-images/Hardware/Kaynak/4.jpg";
import img13 from "../all-images/Hardware/Kaynak/5.jpg";
import img14 from "../all-images/Hardware/Kaynak/6.jpg";
import img15 from "../all-images/Hardware/Kaynak/7.jpg";
// Kesici Ve Aşındırıcı Grubu
import img16 from "../all-images/Hardware/Kesici/1.jpg";
import img17 from "../all-images/Hardware/Kesici/2.jpg";
import img18 from "../all-images/Hardware/Kesici/3.jpg";
import img19 from "../all-images/Hardware/Kesici/4.jpg";
import img20 from "../all-images/Hardware/Kesici/5.jpg";
// Sızdırmazlık Grubu
import img26 from "../all-images/Hardware/Sizdirmalik/1.jpg";
import img27 from "../all-images/Hardware/Sizdirmalik/2.jpg";
// Ambalaj ve Paketleme Grubu
import img21 from "../all-images/Hardware/Ambalaj/1.jpg";
import img22 from "../all-images/Hardware/Ambalaj/2.jpg";
import img23 from "../all-images/Hardware/Ambalaj/3.jpg";
import img24 from "../all-images/Hardware/Ambalaj/4.jpg";
import img25 from "../all-images/Hardware/Ambalaj/5.jpg";
// Sprey Boya
import img28 from "../all-images/Hardware/Sprey/1.jpg";
import img29 from "../all-images/Hardware/Sprey/2.jpg";
// Yapı Kimyasalları Grubu
import img30 from "../all-images/Hardware/Yapi/1.jpg";
import img31 from "../all-images/Hardware/Yapi/2.jpg";
import img32 from "../all-images/Hardware/Yapi/3.jpg";
import img33 from "../all-images/Hardware/Yapi/4.jpg";
import img34 from "../all-images/Hardware/Yapi/5.jpg";
// Yapıştırıcı Grubu
import img35 from "../all-images/Hardware/Yapistirici/1.jpg";
import img36 from "../all-images/Hardware/Yapistirici/2.jpg";
import img37 from "../all-images/Hardware/Yapistirici/3.jpg";
import img38 from "../all-images/Hardware/Yapistirici/4.jpg";

const hardwareData = [
  // --Delme Kesme Yağları Grubu--
  {
    id: 1,
    name: "İnter Delme Kesme Ve Klavuz Jeli",
    images: [img01], // Resim URL'leri dizisi
    imgUrl: img01,
    categoryId: 1,
    category: "hardwareData",
    description:
      "İnter Delme Kesme ve Klavuz Jeli, metal işleme işlemlerinde delme, kesme ve klavuz çekme sırasında sürtünmeyi azaltmak ve iş parçasını korumak için kullanılan özel bir yağlayıcıdır. Bu jel, yüksek sıcaklıklara ve basınca dayanıklı olup, işlem sırasında kesici takımın ömrünü uzatır ve pürüzsüz bir yüzey elde edilmesini sağlar. Sürtünmeyi ve aşınmayı minimize ederek daha temiz kesimler ve hassas delikler elde edilmesine yardımcı olur. Genellikle endüstriyel uygulamalarda, torna, freze ve matkap tezgahlarında kullanılır. Metal işleme süreçlerinde verimliliği artırmak için ideal bir çözümdür.",
  },
  {
    id: 2,
    name: "Weicon Delme Kesme Spreyi",
    images: [img02], // Resim URL'leri dizisi
    imgUrl: img02,
    categoryId: 1,
    category: "hardwareData",
    description:
      "Weicon Delme Kesme Spreyi, metal işleme süreçlerinde delme, kesme, frezeleme ve diş açma gibi işlemler sırasında kullanılan bir yağlayıcı sprey türüdür. Yüksek performanslı yağlama ve soğutma özellikleri sayesinde, işlem sırasında sürtünmeyi ve ısınmayı azaltarak kesici aletlerin ömrünü uzatır. Ayrıca, iş parçasının korunmasını sağlar ve daha pürüzsüz, temiz kesimler elde edilmesine yardımcı olur. Weicon Delme Kesme Spreyi, paslanmaz çelik, demir, alüminyum ve diğer metallerde kullanılabilir. Özellikle endüstriyel metal işleme, bakım ve onarım işlerinde yaygın olarak tercih edilir.",
  },

  // --İş Güvenliği--
  {
    id: 3,
    name: "İs Güvenlik Ayakkabısı",
    images: [img03], // Resim URL'leri dizisi
    imgUrl: img03,
    categoryId: 2,
    category: "hardwareData",
    description:
      "İş Güvenlik Ayakkabısı, çalışanları olası iş kazalarına karşı korumak amacıyla tasarlanmış, dayanıklı ve koruyucu ayakkabı türüdür. Genellikle ağır sanayi, inşaat, lojistik ve fabrika gibi riskli çalışma ortamlarında kullanılır. Çelik burunlu, kaymaz tabanlı ve darbelere karşı dayanıklı olan bu ayakkabılar, ayak yaralanmalarını önlemek için geliştirilmiştir. Ayrıca, suya, yağlara ve kimyasallara karşı direnç sağlayan modelleri de mevcuttur. İş güvenliği standartlarına uygun olarak üretilen bu ayakkabılar, çalışanların hem güvenliğini hem de konforunu artırmayı amaçlar.",
  },
  {
    id: 4,
    name: "Koruyucu Gözlük",
    images: [img04], // Resim URL'leri dizisi
    imgUrl: img04,
    categoryId: 2,
    category: "hardwareData",
    description:
      "Endüstriyel ortamlarda çalışırken göz sağlığınızı korumak hayati önem taşır. Paslanmaz çelik civata ve somunlarla çalışırken, parçacık sıçramaları, darbe riskleri ve çeşitli kimyasallardan kaynaklanan göz yaralanmalarını önlemek için özel olarak tasarlanmış koruyucu gözlüklerimiz, güvenliği ve dayanıklılığı bir araya getirir.",
  },
  {
    id: 5,
    name: "Koruyucu Maske",
    images: [img05], // Resim URL'leri dizisi
    imgUrl: img05,
    categoryId: 2,
    category: "hardwareData",
    description:
      "Endüstriyel ortamlarda, solunum yolu riskleri yaygın olabilir. Paslanmaz civata ve somun montajı gibi işlemler sırasında ortaya çıkan toz, partikül ve kimyasal buharlar, sağlığınızı tehdit edebilir. Koruyucu maskelerimiz, bu riskleri en aza indirerek güvenli ve temiz bir solunum sağlar.",
  },
  {
    id: 6,
    name: "Nitril Eldiven",
    images: [img06], // Resim URL'leri dizisi
    imgUrl: img06,
    categoryId: 2,
    category: "hardwareData",
    description:
      "Endüstriyel ortamlarda ellerinizi zararlı kimyasallardan, yağlardan ve kesici maddelerden korumak önemlidir. Nitril eldivenler, üstün dayanıklılık ve esneklik sunarak zorlu koşullarda maksimum el koruması sağlar. Paslanmaz civata ve somun montajı gibi hassas işlemlerde güvenle kullanılabilir.",
  },
  {
    id: 7,
    name: "Nitril Muayene Eldiveni",
    images: [img07], // Resim URL'leri dizisi
    imgUrl: img07,
    categoryId: 2,
    category: "hardwareData",
    description:
      "Nitril muayene eldivenleri, yüksek dayanıklılık ve hassasiyet sunarak tıbbi ve laboratuvar ortamlarında güvenli el koruması sağlar. Kimyasallara ve delinmelere karşı dirençli yapısıyla hijyenik koşullarda güvenle kullanılabilir. Lateks içermez, bu nedenle alerjik reaksiyon riskini en aza indirir.",
  },
  {
    id: 8,
    name: "Kaynak Gözlüğü",
    images: [img08], // Resim URL'leri dizisi
    imgUrl: img08,
    categoryId: 2,
    category: "hardwareData",
    description:
      "Kaynak gözlükleri, gözlerinizi kaynak sırasında oluşan zararlı ışınlardan, kıvılcımlardan ve sıçrayan metal parçalarından korur. Yüksek ısıya dayanıklı yapısı ve UV/IR filtreleri sayesinde kaynak işlemleri sırasında maksimum güvenlik sağlar. Ergonomik tasarımı ile uzun süreli kullanımda dahi konfor sunar.",
  },

  // --Kaynak Ekipmanları--
  {
    id: 9,
    name: "Alüminyum Kaynak Teli",
    images: [img09], // Resim URL'leri dizisi
    imgUrl: img09,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Alüminyum kaynak telleri, hafif ve yüksek mukavemetli bağlantılar sağlamak için mükemmel bir seçimdir. Düşük erime noktası ve üstün korozyon direnci sayesinde, alüminyum ve alüminyum alaşımlarının kaynağında güvenle kullanılır. İnce işçilik gerektiren kaynak işlemleri için ideal bir çözüm sunar.",
  },
  {
    id: 10,
    name: "Gazaltı Kaynak Spreyi",
    images: [img10], // Resim URL'leri dizisi
    imgUrl: img10,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Gazaltı kaynak spreyi, kaynak sırasında sıçramaları önlemek ve ekipmanınızın korunmasını sağlamak için kullanılır. Yüzeyde ince bir koruyucu tabaka oluşturarak kaynak sırasında oluşan metal sıçramalarının yapışmasını engeller, böylece iş kalitesini artırır ve temizlik süresini azaltır. Tüm gazaltı kaynak işlemlerinde güvenle kullanılabilir.",
  },
  {
    id: 11,
    name: "Gazaltı Kaynak Teli",
    images: [img11], // Resim URL'leri dizisi
    imgUrl: img11,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Gazaltı kaynak telleri, güçlü ve temiz kaynak bağlantıları sağlamak için idealdir. Düşük sıçrama oranı ve yüksek verimliliği sayesinde, çelik ve paslanmaz çelik gibi metallerin birleştirilmesinde mükemmel sonuçlar sunar. İyi bir akış özelliği ve düzgün kaynak dikişleri ile endüstriyel kaynak uygulamalarında yaygın olarak tercih edilir.",
  },
  {
    id: 12,
    name: "Kaynak Eldiveni",
    images: [img12], // Resim URL'leri dizisi
    imgUrl: img12,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Kaynak eldivenleri, yüksek sıcaklık, kıvılcım ve metal sıçramalarına karşı ellerinizi korumak için tasarlanmıştır. Isıya dayanıklı malzemeden üretilen bu eldivenler, kaynak sırasında maksimum güvenlik ve dayanıklılık sağlar. Ergonomik yapısı ve ekstra uzun manşetleri ile ellerinizi ve bileklerinizi tam koruma altına alır.",
  },
  {
    id: 13,
    name: "Paslanmaz Elektrod",
    images: [img13], // Resim URL'leri dizisi
    imgUrl: img13,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Paslanmaz elektrodlar, yüksek kaliteli paslanmaz çelik kaynakları için özel olarak tasarlanmıştır. Paslanmaz çelik alaşımlarla uyumlu bu elektrodlar, mükemmel kaynak dikişleri ve üstün korozyon direnci sağlar. Özellikle endüstriyel uygulamalarda, dayanıklı ve estetik kaynak bağlantıları oluşturmak için idealdir.",
  },
  {
    id: 14,
    name: "Paslanmaz Kaynak Teli",
    images: [img14], // Resim URL'leri dizisi
    imgUrl: img14,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Paslanmaz kaynak telleri, paslanmaz çelik ve diğer alaşımların kaynak işlemlerinde yüksek performans sağlar. Yüksek korozyon direnci ve mükemmel akışkanlık özellikleri ile güçlü ve temiz kaynak bağlantıları oluşturur. Endüstriyel uygulamalarda, dayanıklılığı ve estetik görünümü ile ideal bir çözümdür.",
  },
  {
    id: 15,
    name: "Rutil Elektrod",
    images: [img15], // Resim URL'leri dizisi
    imgUrl: img15,
    categoryId: 3,
    category: "hardwareData",
    description:
      "Rutil elektrodlar, kolay kullanım ve yüksek kalite kaynak dikişleri sağlamak için tasarlanmıştır. Özellikle düşük akı ve iyi akış özellikleri ile öne çıkar, böylece kaynak işlemleri sırasında mükemmel yüzey kalitesi elde edilir. Bu elektrodlar, çeşitli metallerin kaynağında güvenilir performans sunar ve kullanımı kolaydır.",
  },

  // --Kesici Ve Aşındırıcı--
  {
    id: 16,
    name: "İnox Kesme Taşları",
    images: [img16], // Resim URL'leri dizisi
    imgUrl: img16,
    categoryId: 4,
    category: "hardwareData",
    description:
      "Inox kesme taşları, paslanmaz çelik ve diğer sert metallerin kesiminde üstün performans sağlar. Yüksek kaliteli aşındırıcı malzemelerden üretilen bu taşlar, temiz ve düzgün kesim sonuçları elde etmenizi sağlar. Dayanıklı yapısı ve düşük aşınma oranı ile uzun ömürlü kullanım sunar.",
  },
  {
    id: 17,
    name: "Metal Flap",
    images: [img17], // Resim URL'leri dizisi
    imgUrl: img17,
    categoryId: 4,
    category: "hardwareData",
    description:
      "Metal flap diskleri, metal yüzeylerin zımparalanması ve temizlenmesi için ideal bir araçtır. Üstün aşındırıcı malzemeleri sayesinde etkili bir şekilde yüzey düzeltir ve metal parçaların son işleminde yüksek performans sağlar. Uzun ömürlü ve dayanıklı yapıları ile hem kaba hem de ince işlerde güvenle kullanılabilir.",
  },
  {
    id: 18,
    name: "Metal Kesme Taşları",
    images: [img18], // Resim URL'leri dizisi
    imgUrl: img18,
    categoryId: 4,
    category: "hardwareData",
    description:
      "Metal kesme taşları, çeşitli metal yüzeylerin kesiminde yüksek performans sunar. Sert ve dayanıklı aşındırıcı malzemelerden üretilmiş olup, hızlı ve temiz kesimler sağlar. Uzun ömürlü yapıları ve düşük aşınma oranları ile endüstriyel uygulamalarda güvenilir bir çözümdür.",
  },
  {
    id: 19,
    name: "Paslanmaz Flap",
    images: [img19], // Resim URL'leri dizisi
    imgUrl: img19,
    categoryId: 4,
    category: "hardwareData",
    description:
      "Paslanmaz flap diskleri, paslanmaz çelik ve diğer metal yüzeylerin zımparalanması ve düzeltilmesinde yüksek performans sağlar. Dayanıklı ve yüksek kaliteli aşındırıcı malzemeleri sayesinde, yüzeylerde hızlı ve etkili bir şekilde işlem yapar. Uzun ömürlü ve güvenilir yapıları ile endüstriyel ve ticari uygulamalarda tercih edilir.",
  },
  {
    id: 20,
    name: "Karbosan Taşlama Taşları",
    images: [img20], // Resim URL'leri dizisi
    imgUrl: img20,
    categoryId: 4,
    category: "hardwareData",
    description:
      "Karbosan taşlama taşları, metal ve benzeri sert yüzeylerin yüksek verimlilikle işlenmesi için tasarlanmıştır. Kaliteli aşındırıcı malzemeleri ve dayanıklı yapısı sayesinde, hızlı kesim ve düzgün yüzey işleme sağlar. Endüstriyel uygulamalarda güvenilir ve uzun ömürlü performans sunar",
  },

  //--Ambalaj ve Paketleme--
  {
    id: 21,
    name: "Dilimli Streç",
    images: [img21], // Resim URL'leri dizisi
    imgUrl: img21,
    categoryId: 5,
    category: "hardwareData",
    description:
      "Dilimli streç film, ürünleri güvenli bir şekilde sarmak ve korumak için ideal bir çözüm sunar. Kolay uygulanabilir yapısı ve yüksek yapışkanlık özelliği sayesinde, paketleme işlemlerinde etkili bir koruma sağlar. Kırılma, tozlanma ve nemden koruyarak ürünlerin güvenliğini artırır.",
  },
  {
    id: 22,
    name: "Gıda Streçi",
    images: [img22], // Resim URL'leri dizisi
    imgUrl: img22,
    categoryId: 5,
    category: "hardwareData",
    description:
      "Gıda streçi, yiyecekleri taze tutmak ve saklama süresini uzatmak için kullanılan pratik bir üründür. Yüksek yapışkanlık özelliği sayesinde, gıdaları hava ve nemden korur, aynı zamanda sızıntıları önler. Mikrodalga ve buzdolabı kullanımı için uygun olup, çeşitli gıda maddelerinin güvenli bir şekilde saklanmasına yardımcı olur",
  },
  {
    id: 23,
    name: "Koli Bandı Akrilik",
    images: [img23], // Resim URL'leri dizisi
    imgUrl: img23,
    categoryId: 5,
    category: "hardwareData",
    description:
      "Akrilik koli bandı, güçlü yapışkanlığı ve dayanıklı yapısı ile ambalajlama ve paketleme işlemlerinde ideal bir tercihtir. Hafif ve orta ağırlıktaki kutuların güvenli bir şekilde kapatılmasını sağlar. UV ışınlarına ve yaşlanmaya karşı dirençli olup, uzun ömürlü kullanım ve güvenilir performans sunar.",
  },
  {
    id: 24,
    name: "Koli Bandı Hotmelt",
    images: [img24], // Resim URL'leri dizisi
    imgUrl: img24,
    categoryId: 5,
    category: "hardwareData",
    description:
      "Hotmelt koli bandı, yüksek yapışkanlık gücü ve mükemmel performansıyla ambalajlama işlemlerinde güvenilir bir çözüm sunar. Hotmelt yapışkan özelliği, hızlı ve güçlü bir yapışma sağlar, böylece kutuları güvenli bir şekilde kapatır ve dayanıklı bir kaplama oluşturur. Çeşitli hava koşullarına karşı dayanıklıdır ve uzun ömürlü kullanım sağlar.",
  },
  {
    id: 25,
    name: "Palet Streci",
    images: [img25], // Resim URL'leri dizisi
    imgUrl: img25,
    categoryId: 5,
    category: "hardwareData",
    description:
      "Palet streçi, palet üzerindeki ürünleri güvenli bir şekilde sarmak ve stabilize etmek için kullanılır. Yüksek elastikiyeti ve güçlü yapışkanlığı sayesinde, taşınma ve depolama sırasında ürünlerin kaymasını ve zarar görmesini önler. Dayanıklı yapısı, çeşitli hava koşullarına karşı koruma sağlar ve etkin paketleme çözümleri sunar.",
  },

  //--Sızdırmazlık --
  {
    id: 26,
    name: "LOCTİTE Civata Sabitleyici",
    images: [img26], // Resim URL'leri dizisi
    imgUrl: img26,
    categoryId: 6,
    description: "LOCTITE civata sabitleyici, titreşim ve sarsıntıdan kaynaklanan gevşemeleri önleyerek civataların güvenli bir şekilde sabitlenmesini sağlar. Hızlı kuruyan formülü, metal yüzeyler arasında güçlü bir bağlantı oluşturur ve sızıntı, paslanma veya gevşemeyi engeller. Farklı mukavemet seçenekleri ile endüstriyel uygulamalarda yaygın olarak tercih edilir.",
  },
  {
    id: 27,
    name: "Weicon Flex 310 M Paslanmaz Çelik Sızdırmazlık Ürünü",
    images: [img27], // Resim URL'leri dizisi
    imgUrl: img27,
    categoryId: 6,
    description: "Weicon Flex 310 M Paslanmaz Çelik Sızdırmazlık ürünü, paslanmaz çelik yüzeylerde üstün yapışma ve sızdırmazlık sağlar. Nem, kimyasallar ve UV ışınlarına karşı yüksek dayanıklılığı ile endüstriyel uygulamalarda güvenilir koruma sunar. Solvent, silikon ve izosiyanat içermeyen bu ürün, metal bağlantıların uzun ömürlü ve esnek olmasını sağlar.",
  },

  //--Sprey--
  {
    id: 28,
    name: "Eco Service Sprey Boya Kartela",
    images: [img28], // Resim URL'leri dizisi
    imgUrl: img28,
    categoryId: 7,
    description: "Eco Service sprey boya kartelası, geniş renk yelpazesiyle profesyonel ve hobi amaçlı boyama projeleri için idealdir. Yüksek kapatıcılık, hızlı kuruma ve uzun ömürlü renk kalıcılığı sunar. Metal, ahşap, plastik gibi çeşitli yüzeylerde mükemmel yapışma sağlar ve dayanıklı sonuçlar elde edilmesine yardımcı olur.",
  },
  {
    id: 29,
    name: "Eco Service Sprey Boya",
    images: [img29], // Resim URL'leri dizisi
    imgUrl: img29,
    categoryId: 7,
    description: "Eco Service sprey boya, yüksek kapatıcılığı ve dayanıklılığı ile her türlü yüzeyde profesyonel boyama sonuçları sunar. Hızlı kuruyan formülü sayesinde metal, ahşap, plastik ve daha birçok yüzeye mükemmel yapışma sağlar. Uzun ömürlü ve solmaya karşı dirençli renkleri ile hem iç hem de dış mekan uygulamaları için idealdir.",
  },

  //--Yapı Kimyasalları--
  {
    id: 30,
    name: "Ceresit Köpük",
    images: [img30], // Resim URL'leri dizisi
    imgUrl: img30,
    categoryId: 8,
    description: "Ceresit köpük, boşluk doldurma, yalıtım ve montaj işlemlerinde etkili bir çözümdür. Yüksek yapışma gücü ve genişleme kapasitesi sayesinde pencere, kapı ve yapı elemanları arasındaki boşlukları mükemmel bir şekilde doldurur. Isı ve ses yalıtımı sağlar, dış etkenlere karşı dayanıklıdır ve hızlı bir şekilde sertleşir.",
  },
  {
    id: 31,
    name: "Ceresit Silikon",
    images: [img31], // Resim URL'leri dizisi
    imgUrl: img31,
    categoryId: 8,
    description: "Ceresit silikon, mükemmel sızdırmazlık ve dayanıklılık sağlayan bir yalıtım malzemesidir. Suya, neme ve UV ışınlarına karşı yüksek direnç gösterir, bu da onu banyo, mutfak, pencere ve dış cephe uygulamaları için ideal hale getirir. Elastik yapısı sayesinde hareket eden yüzeylerde bile uzun ömürlü ve esnek bir yalıtım sunar.",
  },
  {
    id: 32,
    name: "Dayson PU Mastik",
    images: [img32], // Resim URL'leri dizisi
    imgUrl: img32,
    categoryId: 8,
    description: "Dayson PU mastik, güçlü yapışma ve sızdırmazlık sağlayan poliüretan bazlı bir dolgu malzemesidir. Yüksek elastikiyeti ve dayanıklılığı ile inşaat, otomotiv ve endüstriyel uygulamalarda kullanılabilir. Suya, UV ışınlarına ve hava koşullarına karşı dirençlidir, böylece uzun süreli ve güvenilir bir sızdırmazlık sağlar.",
  },
  {
    id: 33,
    name: "Kimyasal Dübel( Epoksi)",
    images: [img33], // Resim URL'leri dizisi
    imgUrl: img33,
    categoryId: 8,
    description: "Kimyasal dübel (epoksi), ağır yüklerin güvenli montajı için kullanılan yüksek mukavemetli bir sabitleme çözümüdür. Beton, taş ve tuğla gibi yüzeylerde deliklere enjekte edilerek, güçlü bir bağlantı sağlar. Titreşim, nem ve kimyasallara karşı dirençli yapısıyla inşaat ve endüstriyel uygulamalarda güvenilir bir montaj imkanı sunar.",
  },
  {
    id: 34,
    name: "Sista Silikon",
    images: [img34], // Resim URL'leri dizisi
    imgUrl: img34,
    categoryId: 8,
    description: "Sista silikon, güçlü yapışma ve uzun ömürlü sızdırmazlık sağlayan esnek bir dolgu malzemesidir. Suya, neme ve UV ışınlarına karşı dayanıklılığı ile banyo, mutfak, pencere ve dış cephe uygulamalarında güvenle kullanılabilir. Küflenmeye karşı dirençlidir ve hem iç hem de dış mekanlarda mükemmel performans gösterir.",
  },

  //--Yapıştırıcılar--
  {
    id: 35,
    name: "502 Japon Yapıştırıcı 20 Gr.",
    images: [img35], // Resim URL'leri dizisi
    imgUrl: img35,
    categoryId: 9,
    description: "502 Japon yapıştırıcı, güçlü ve hızlı yapışma özelliği ile birçok yüzeyde güvenilir bir bağlantı sağlar. Metal, plastik, kauçuk, seramik ve ahşap gibi farklı malzemeler için uygundur. Anında kuruyan formülü ile pratik ve kalıcı çözümler sunan 502 Japon yapıştırıcı, hassas ve küçük montaj işlemleri için idealdir.",
  },
  {
    id: 36,
    name: "Derby 602 Japon Yapıştırıcı 20 Gr.",
    images: [img36], // Resim URL'leri dizisi
    imgUrl: img36,
    categoryId: 9,
    description: "Derby 602 Japon yapıştırıcı, hızlı kuruyan ve güçlü yapışma özelliği ile çeşitli yüzeylerde güvenilir bir bağlantı sağlar. Metal, plastik, kauçuk, seramik ve ahşap gibi malzemeler için uygundur. 20 gramlık formülü, küçük ve hassas tamirat işlemlerinde yüksek performans sunar, kalıcı ve sağlam yapışma sağlar.",
  },
  {
    id: 37,
    name: "MDF Kit",
    images: [img37], // Resim URL'leri dizisi
    imgUrl: img37,
    categoryId: 9,
    description: "MDF kit, MDF (Orta Yoğunlukta Lif Levha) yüzeylerinin onarımı ve tamiri için özel olarak formüle edilmiş bir malzemedir. Yüzeydeki çatlakları, delikleri ve diğer kusurları doldurur, pürüzsüz bir yüzey sağlar ve kolayca zımparalanır. Uygulama sonrası yüksek yapışma gücü ve dayanıklılığı ile MDF yüzeylerde mükemmel sonuçlar elde eder.",
  },
  {
    id: 38,
    name: "Weicon Yapıştırıcı Sprey",
    images: [img38], // Resim URL'leri dizisi
    imgUrl: img38,
    categoryId: 9,
    description: "Weicon yapıştırıcı sprey, hızlı ve etkili yapışma sağlayan çok amaçlı bir yapıştırıcıdır. Plastik, metal, ahşap ve tekstil gibi çeşitli yüzeylerde güvenilir bir bağlantı oluşturur. Sprey formu sayesinde geniş alanlara kolayca uygulama yapılabilir ve güçlü yapışma özellikleri ile dayanıklı ve uzun ömürlü sonuçlar elde edilir.",
  },


];

export default hardwareData;
