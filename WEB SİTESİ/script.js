$(document).ready(function () {

    // 1. Carousel fare ile durdur/başlat
    $('#carouselExampleCaptions').hover(
      function () {
        $(this).carousel('pause');
      },
      function () {
        $(this).carousel('cycle');
      }
    );
  
    // 2. Kart hover efekti
    $('.card').hover(
      function () {
        $(this).css({ transform: 'scale(1.05)', boxShadow: '0 0 15px rgba(0,0,0,0.3)' });
      },
      function () {
        $(this).css({ transform: 'scale(1)', boxShadow: 'none' });
      }
    );
  
    // 3. Sayfa sonunda mesaj
    $(window).on('scroll', function () {
      if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        alert("Sayfanın sonuna geldiniz! %10 indirim kodu: TT10");
      }
    });
  
    // 4. Kart tıklamasında yönlendirme (örnek)
    $(".card").click(function () {
      window.location.href = "detay.html";
    });
  
    // 5. Git butonuna tıklama animasyonu
    $(".btn-primary").click(function (e) {
      e.stopPropagation(); // Kartın tıklanmasını engeller
      $(this).fadeOut(150).fadeIn(150);
    });
  
    // 6. Klavye kısa yolu: D tuşu ile doğal kokulara in
    $(document).on("keydown", function (e) {
      if (e.key.toLowerCase() === "d") {
        let hedef = $('.card-title:contains("DOĞAL")').offset();
        if (hedef) {
          $('html, body').animate({
            scrollTop: hedef.top
          }, 500);
        }
      }
    });
  
    // 7. Kayan başlık
    let titleText = "TT PARFÜM - ";
    let counter = 0;
    setInterval(function () {
      document.title = titleText.substring(counter) + titleText.substring(0, counter);
      counter = (counter + 1) % titleText.length;
    }, 300);
  
    // 8. Scroll olunca container'a class ekle
    $(window).on("scroll", function () {
      $(".container").toggleClass("scrolled", $(window).scrollTop() > 50);
    });
  
    // 9. Carousel başlık hover açıklama değişimi
    $(".carousel-caption h5").hover(
      function () {
        $(this).data("original-text", $(this).text());
        $(this).text("Hoş bir koku seni bekliyor!");
      },
      function () {
        $(this).text($(this).data("original-text"));
      }
    );
  
    // 10. Sürpriz mesaj: Butona 3 kere tıklanınca göster
    let clickCount = 0;
    $(".btn-primary").click(function () {
      clickCount++;
      if (clickCount === 3) {
        alert("Sürpriz! Kargo Bedava Kampanyası Sadece Bugün!");
        clickCount = 0;
      }
    });
  
    // 11. Link tıklanmadan önce onay (birden fazla link varsa)
    $('.large-link').each(function () {
      $(this).on('click', function (e) {
        const proceed = confirm("Bu bağlantı başka bir siteye yönlendirecek. Devam etmek istiyor musunuz?");
        if (!proceed) e.preventDefault();
      });
    });
  
  });
  $('#external-link').on('click', function (e) {
    const proceed = confirm("Bu bağlantı başka bir siteye yönlendirecek. Devam etmek istiyor musunuz?");
    if (!proceed) e.preventDefault();
  });
  