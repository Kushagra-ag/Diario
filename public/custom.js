/* global $ */

$(document).ready(function () {

    let count = 1;
    if (window.innerWidth >= 850) {
        $('#sidebar li').css("visibility", "visible");
        $('#sidebarCollapse').on('click', function () {
            $('.content').toggleClass('sidemenu');
        });
    }

    else {


        $('#sidebar li').on('click', function () {
            $('.content').toggleClass('sidemenu');

            if (count) {
                $('#sidebar > ul > li:nth-child(1)').toggleClass('class1');
                $('#sidebar > ul > li:nth-child(2)').toggleClass('class2');
                $('#sidebar > ul > li:nth-child(3)').toggleClass('class3');
                $('#sidebar > ul > li:nth-child(4)').toggleClass('class4');
                $('#sidebar > ul > li:nth-child(5)').toggleClass('class5');
                count--;

            }
        });
        //console.log(count);

        $('#sidebarCollapse').on('click', function () {
            $('.content').toggleClass('sidemenu maxheight');
            if (count) {
                $('#sidebar > ul > li:nth-child(1)').toggleClass('class1');
                $('#sidebar > ul > li:nth-child(2)').toggleClass('class2');
                $('#sidebar > ul > li:nth-child(3)').toggleClass('class3');
                $('#sidebar > ul > li:nth-child(4)').toggleClass('class4');
                $('#sidebar > ul > li:nth-child(5)').toggleClass('class5');
                count--;

            }
        });

    }

    $('.n').on('click', function(){
      $('.createNew').removeClass('initial');console.log("clicked");
    })
})
