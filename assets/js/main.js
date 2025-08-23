/**
 * Animation on scroll function and init
 */
function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);


/**
 * Init swiper sliders
 */
function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
        let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
        } else {
            new Swiper(swiperElement, config);
        }
    });
}

window.addEventListener("load", initSwiper);



/**
 * Initiate Pure Counter
 */
new PureCounter();


/**
 * Init isotope layout and filters
 */
document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
        });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener('click', function () {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
                aosInit();
            }
        }, false);
    });

});


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // document.addEventListener('DOMContentLoaded', () => {
    //     document.querySelectorAll('img').forEach(img => {
    //         img.oncontextmenu = () => false; // Disable right-click on images
    //     });
    // });

    // // Disable right-click
    // document.addEventListener('contextmenu', event => event.preventDefault());

    // // Disable keyboard shortcuts (Ctrl+C, Ctrl+U, Ctrl+P, F12, etc.)
    // document.addEventListener('keydown', event => {
    //     if (event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "p")) {
    //         event.preventDefault();
    //     }
    //     if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    //         event.preventDefault();
    //     }
    // });    

})(jQuery);

