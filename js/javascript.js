
$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

    $('#properties-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
    });

    navToggle.on('click', () => {
        navMenu.css('right', '0');
    });

    $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
    });

    $(document).on('click', (e) => {
        let target = $(e.target);
        if (target.closest('#nav-toggle').length > 0) {
            return false;
        }
        navMenu.css('right', '-100%');
    });

    $('#mainPageBlock').scroll(() => {
        let scrollTop = $('#mainPageBlock').scrollTop();

        if (scrollTop > 0) {
            navMenu.addClass('is-sticky');
            logo.css('color', '#000');
            headerElem.css('background', 'rgba(255, 255, 255, 0.9)');
            navToggle.css('border-color', '#000');
            navToggle.find('.strip').css('background-color', '#000');
        } else {
            navMenu.removeClass('is-sticky');
            logo.css('color', '#fff');
            headerElem.css('background', 'transparent');
            navToggle.css('border-color', '#fff');
            navToggle.find('.strip').css('background-color', '#fff');
        }

        headerElem.css(scrollTop >= 200 ? { 'padding': '0.1rem', 'box-shadow': '0 -2px 10px 1px #999', 'width': 'calc(100% - 20px)' } : { 'padding': '0.8rem 0', 'box-shadow': 'none', 'width': 'calc(100% - 17px)' });
    });

    $('#mainPageBlock').trigger('scroll');

    var imageNo = 0;
    const images = [
        'url("../images/Hero.JPG")',
        'url("../images/property5.JPG")',
        'url("../images/property2.JPG")',
        'url("../images/property3.JPG")',
        'url("../images/property4.JPG")',
    ]

    let section = document.getElementById("top-content");


    function headerBckgrndImageCarousel() {
        section.style.backgroundImage = images[imageNo];
        imageNo++;

        if (imageNo >= 4) {
            imageNo = 0;
        }
    }
    setInterval(headerBckgrndImageCarousel, 5000);

    $("#propertyListingsBtn").on("click", function () {
        showModal($("#propertyListingsModal"), $('#propertyListingsContent'));
    });

    $("#companyModalBtn").on("click", function () {
        showModal($("#bestCompanyModal"), $('#bestCompanyModalContent'));
    });

    // $(".services-button").on("click", function (header, text) {
    //     showModal($("#servicesModal"), $('#servicesModalContent'));
    //     setServicesModalContent(headerNo, textNo);
    // });



    $(".closeModalBtn").on("click", function () {
        closeModal($("#propertyListingsModal"), $('#propertyListingsContent'));
    });

    $("#closeCompanyModalBtn").on("click", function () {
        closeModal($("#bestCompanyModal"), $('#bestCompanyModalContent'));
    });

    $("#closeServicesModalBtn").on("click", function () {
        closeModal($("#servicesModal"), $('#servicesModalContent'));
    });




});

var servicesTextList = [
    'A house can hold a lot of history, and as a homebuyer, you probably want to know everything there is to know about the property you’re about to purchase. But if you’ve never searched public records before, you probably don’t know where to start when it comes to sifting through decades of property records — or what information you might discover. Here’s how to search property records and how to navigate the documentation, both online and offline — including what, exactly, you might want to investigate. Contact our experienced Agents',
    'If you feel like you\'re ready to buy a house, the first question you\'re likely to ask yourself is "how much can I afford?" Answering that question means taking a look at a number of factors. Our Agents will help you with all documentation needed to buy a house.',
    'Buying and owning real estate is an investment strategy that can be both satisfying and lucrative. Unlike stock and bond investors, prospective real estate owners can use leverage to buy a property by paying a portion of the total cost upfront, then paying off the balance, plus interest, over time. We have specialist who can consult you.',
    'Real estate listing is one of the most important stages in the sales process; when a whopping 43% of home sellers have to reduce the property price at least once, the vital aspect of your expertise is shown. The listing process does not only include pricing the property, however. You must also ensure that all details about the house are recorded, with no potential issues such as structural instabilities going quietly under the radar. If so much as a single problem is missed you (and the seller) run the risk of either having to lower the asking price or even suffer legal consequences.',
    'Our Clients\' number is growing, that\'s why we can offer you the great variety of properties in our web page. From small house to big mansion. We always invest our time and money in new technology solutions, which help our customer to find properties more easily.',
    'Our web page is mobile friendly, so you can easily use our web in your smartphone. Also it is not a secret that we develop an app which will be even more friendly than web page.',
]

function servicesModalHandling(header, textNo) {
    showModal($("#servicesModal"), $('#servicesModalContent'));
    setServicesModalContent(header, servicesTextList[textNo]);
};

function setServicesModalContent(header, text){
    $("#serivesModalHeader").text(header);
    $("#serivesModalText").text(text);
}

function showModal(modal, modalContent) {
    modal.show();
    setTimeout(function () {
        modalContent.addClass("active");
        modal.css("display", "flex");
    }, 10);
}

function closeModal(modal, modalContent) {
    modal.fadeOut(200);
    modalContent.removeClass("active");
}