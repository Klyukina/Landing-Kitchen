$(document).ready(() => {
    $('#products').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true
    });

    $("#phone").mask("+7 (999) 999 - 99 - 99");

    $("#phone2").mask("+7 (999) 999 - 99 - 99");

    $('.open-modal').click(() => {
       $('#booking-container').css('display', 'flex');
    });

    $('#booking-container').click((e) => {
        if (e.target.id === 'booking-container') {
            $('#booking-container').hide();
        }
    });

    $('#reserve-btn > button').click(() => {
        let name2 = $('#name2');
        let phone2 = $('#phone2');

        if (name2.val() && phone2.val())  {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name2.val() + '&phone=' + phone2.val(),
                success: () => {
                    $('#booking-done').show();
                    $('#booking-error').hide();
                },
                error: () => {
                    $('#booking-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#booking-error').show();
            $('#booking-done').hide();
        }
    });

    $('#call > button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let data = $('#data');

        if (name.val() && phone.val() && data.val())  {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&data=' + data.val(),
                success: () => {
                    $('#form-done').show();
                    $('#form-error').hide();
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#form-error').show();
            $('#form-done').hide();
        }
    });


    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
        $('#body').css('overflow', 'hidden');
    });

    $('#burger').click(() => {
        if ($('#header').hasClass('menu-open')) {
            $('#body').css('overflow', 'hidden');
        } else
        $('#body').css('overflow', 'inherit');
    });

    $('#header #menu div').click(()  => {
        $('#header').removeClass('menu-open');
        $('#body').css('overflow', 'inherit');
    });

});
