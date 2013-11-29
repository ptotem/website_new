//For About Us Windy Array Start

var img_array = ["assets/images/arijit.jpg","assets/images/kamalika.jpg","assets/images/arun.jpg","assets/images/dipanwita.jpg","assets/images/rushabh.jpg","assets/images/sunny.jpg","assets/images/ashwin.jpg","assets/images/amol.jpg","assets/images/rakesh.jpg","assets/images/nilesh.jpg","assets/images/perseus.jpg","assets/images/deepak.jpg","assets/images/swapnil.jpg","assets/images/nikunj.jpg","assets/images/yashodeep.jpg"]
var name_array=["Arijit Lahiri","Kamalika Bhattacharya","Arunkumar Balasubramanian","Dipanwita Kar","Rushabh Hathi","Sunny Singh","Ashwin Kumar","Amol Bhor","Rakesh Rengaraj","Nilesh Panchal","Perseus Vazifdar","Deepak Gawas","Swapnil Domade","Nikunj Thakkar","Yashodeep Talele"]
var text_array = ['Arijit Lahiri aka "Lolly" says he is a dreamer, thinker and a philosopher. We say he dreams, thinks and philosophises. His wife - Kamal, ofcourse, thinks he is an idiot.',
                  'Kamalika Bhattacharya aka "Kamal" is the driving force of the firm and Arijit ofcourse.She is the sort who lives for others - you can tell the others by their hunted expressions',
                  'Arunkumar Balasubramanian aka AKB had been a comfortable corporate banker when asudden was bug bitten and became an unknown entity in our firm. People dont deem him human anymore given that he eats - hardly, sleeps - hardly or even works - hardly!',
                  'Dipanwita Kar aka "Deepanwita" has a rather demure persona. But whenever she is not out business development, she does the code testing. This is when she makes the programmers  run faster than Usain Bolt',
                  'Rushabh Hathi aka "Hathi” would rather deal with alien Artificial Intelligence than simple common mortals. His passion can only be defined in binary - literally and is the tech expert of our firm',
                  'Sunny Singh aka “Sunny Sardar” has a fire breathing dragon’s temper and loves hacking and smacking. Oh! He is an engineer too.',
                  'Ashwin Kumar aka “Ash” has tried his hand at quite a few things before boarding our train as “Product Manager”. And here he specializes in multitasking and err… “tasking”–literally.',
                  'Amol Bhor aka "amol" acts rather than speak - literally. He does everything here admin, HR, finance, accounts, programming… the list goes on. His rumoured linkups with various women would put bollywood actors to shame.',
                  'Rakesh Rengaraj aka "Ra Kya?" decided to become a software programmer and he does that with elan and panache. His quick wit and remarks can shrink time. But it did backfire when a girl called him a "Tapori".',
                  'Nilesh Panchal aka "Neelu" is a true blue engineer by heart and profession - his of course. His best kept secret is adorning the super hero - "Code Man" avatar.',
                  'Perseus Vazifdar aka “PL/ HB/ RL etc… walked in as an animator, designer and game creator. He was welcomed right away with numerous stares when he stated, “Let’s play it this way.” Ofcourse he never plays anything just one way.',
                  'Deepak Gawas aka “Gawsya” was nuts to pursue four years in advertising before sense prevailed and he took up a banking job - for just a day. Becoming a nut again, he joined us. Get him angry and you get a million bucks – figuratively that is.',
                  'Swapnil Damode aka "Sapya" paints pictures as he speaks. An "artist" because he paints. A "designer" because he designs. The trouble with him is that even as you explain to him the design requirement, he has already sent them to you.',
                  'Nikunj Thakkar aka "NikiTha" is a serious software programmer with a keen ear for music.His out of box thinking is defined as he says "If you are there before its over, you are on time"',
                  'Yashodeep Talele aka "Yash" is an expert loafer when he is not writing books on databases.His current excitement in life is in publishing his handbook on Oracle that one can actually carry in their hands.']

//For About Us Windy Array End

//For Product Bookblock Array Start
var product_img_array = ["assets/images/products/Slide1.JPG", "assets/images/products/Slide2.JPG", "assets/images/products/Slide3.JPG", "assets/images/products/Slide4.JPG", "assets/images/products/Slide5.JPG", "assets/images/products/Slide6.JPG", "assets/images/products/Slide7.JPG", "assets/images/products/Slide8.JPG", "assets/images/products/Slide9.JPG", "assets/images/products/Slide10.JPG", "assets/images/products/Slide11.JPG", "assets/images/products/Slide12.JPG", "assets/images/products/Slide13.JPG", "assets/images/products/Slide14.JPG", "assets/images/products/Slide15.JPG", "assets/images/products/Slide16.JPG", "assets/images/products/Slide17.JPG", "assets/images/products/Slide18.JPG"]
//For Product Bookblock Array End






$(function () {
    $(".close_parallax_btn").hide();


    $('.superpanel').css({
        height:window.innerHeight + 'px'
    });

    $('.scene').parallax().fadeIn();

    $(window).load(function () {
        //$().hatchShow();
        $('#catchphrase').hatchShow('catchphrase');
    });

    $('#catchphrase').hatchShow('catchphrase');

    $(window).resize(function () {
        $('.superpanel').css({
            height:window.innerHeight + 'px'
        });
        $('#catchphrase').hatchShow('catchphrase');
    });


    $('#teamLink').on('click', function () {
        $(this).hide();
        flipside('aboutUs');
        $('#gamify').css("pointer-events", "none");
        $('.coordinate_block').popover({
            container:'body',
            placement:'top',
            trigger:'hover',
            html:'true'
        });

        img_windy(img_array,text_array,name_array)
    });



    $('#productsLink').on('click', function () {
        $(this).hide();
        Page2.init()
        flipside('products');
        $('#gamify').css("pointer-events", "none");

        products_bookblock(product_img_array);
    });

    $('#home').on('click', function () {
        $('.coordinate_block').popover('destroy');
        $('#aboutUs').fadeOut('fast');
        $('#products').fadeOut('fast');
        $('#second_logo').fadeOut('fast');
        $('#gamify').css("pointer-events", "auto");
        $('#parallax_view').animate({
            left:"+=" + window.innerWidth * 0.55 + "px"
        });

        $('#sky').animate({
            left:"+=" + window.innerWidth * 0.05 + "px"
        });
        $('#logo').fadeIn();
        $(this).hide();
        $('#teamLink').fadeIn();
        $('#productsLink').fadeIn();
        state = 'home';
    });

    $('#gamify').on('click', function (e) {
        $('#slogan').show();
        $('#buttons').hide().delay(1000);
        $('#trigger_button').trigger('click').delay(2000);
        $('#menu_overlay').css('pointer-events', 'auto');
        $("#menu_overlay").css('z-index', '0');
        //$("#menu_overlay").css('position','absolute');
        $("#menu").css('z-index', '0');
        $('#menu').css({
            'background':'#aaa',
            'color':'#ccc'
        });
        $('#catchphrase').hide();
        setTimeout(function () {
            $('#buttons').show();
            $('#buttons').parent().css('z-index', '999999');
        }, 2500)

    });


    $('.button_click').click(function () {
        $("#parallax_view").css('z-index', '9999');
        $(".close_parallax_btn").css('left', '593px');
        $(".close_parallax_btn").show();
        $(".close_parallax_btn_text").show();
        $("#menu_overlay").css('z-index', '0');
//            $("#menu_overlay").css('position','');
        $('.row').css('pointer-events', 'auto');
        $(".layer").css("z-index", '0');

        if ($(this).attr('id') == 'easy_game') {
            setTimeout(function () {
                $("#slogan_game_easy").parent().css("z-index", "9999");
            }, 1000)
            $('#slogan_game_easy').fadeIn();
            $('#slogan').fadeIn();
            $('#trigger_button').trigger('click');
            //                $('#slogan_hard').hide();
            Page.init();

            var colors = ["#ff0000", "#ffff00", "#0000ff", "#000000", "#008000", "#800080", "#ff6600", "#663300", "#ffffff", "#808080"];
            var c1 = 0;
            var c2 = 0;
            var c3 = 0;
            var c4 = 0;
            var correct = ["#ff0000", "#ffff00", "#0000ff", "#000000"];
            var correct_color = [];

            $('#do').click(function () {
                $('#do_text').show();
                $('#do_text').css("color", colors[c1]);
                if (colors[c1] == "#ff0000") {
                    $('#do_text').addClass("Red");
                    correct_color.push("Red");
                }
                else {
                    $('#do_text').removeClass("Red");
                }

                c1++;

                if (c1 == colors.length) {
                    c1 = 0;
                }
                matching_colors();

            });

            $('#it').click(function () {
                $('#it_text').show();
                $('#it_text').css("color", colors[c2]);
                if (colors[c2] == "#ffff00") {
                    $('#it_text').addClass("Yellow");
                    correct_color.push("Yellow");
                }
                else {
                    $('#it_text').removeClass("Yellow");
                }
                c2++;

                if (c2 == colors.length) {
                    c2 = 0;
                }
                matching_colors();
            });

            $('#with').click(function () {
                $('#with_text').show();
                $('#with_text').css("color", colors[c3]);
                if (colors[c3] == "#0000ff") {
                    $('#with_text').addClass("Blue");
                    correct_color.push("Blue");
                }
                else {
                    $('#with_text').removeClass("Blue");
                }
                c3++;
                if (c3 == colors.length) {
                    c3 = 0;
                }
                matching_colors();
            });

            $('#games').click(function () {
                $('#games_text').show();
                $('#games_text').css("color", colors[c4]);
                if (colors[c4] == "#000000") {
                    $('#games_text').addClass("Black");
                    correct_color.push("Black");
                }
                else {
                    $('#games_text').removeClass("Black");
                }
                c4++;
                if (c4 == colors.length) {
                    c4 = 0;
                }
                matching_colors();
            });

            function matching_colors() {
                if (($('#do_text').hasClass('Red')) && ($('#it_text').hasClass('Yellow')) && ($('#with_text').hasClass('Blue')) && ($('#games_text').hasClass('Black'))) {
                    $('#do_text').show();
                    $('#it_text').show();
                    $('#with_text').show();
                    $('#games_text').show();
                    $('#slogan_game').show();
                    $('#slogan_game_easy').hide();
                    $("#slogan_game").parent().css("z-index", "999999");
                    $('.spinner').unbind('click');
                    Page3.init()
                }
            }
        }
        else if ($(this).attr('id') == 'hard_game') {
            $('#slogan_game_hard').fadeIn();
            $('#slogan').fadeIn();
            Page1.init1();
            $('#trigger_button').trigger('click');

            var colors = ["#ff0000", "#ffff00", "#0000ff", "#000000", "#008000", "#800080", "#ff6600", "#663300", "#ffffff", "#808080"];
            var c1 = 0;
            var c2 = 0;
            var c3 = 0;
            var c4 = 0;
            var correct = ["#ff6600", "#808080", "#663300", "#008000"];
            var correct_color = [];

            $('#do').click(function () {
                $('#do_text').show();
                $('#do_text').css("color", colors[c1]);
                if (colors[c1] == "#ff6600") {
                    $('#do_text').addClass("Orange");
                    correct_color.push("Orange");
                }
                else {
                    $('#do_text').removeClass("Orange");
                }
                c1++;
                if (c1 == colors.length) {
                    c1 = 0;
                }
                matching_colors();
            });

            $('#it').click(function () {
                $('#it_text').show();
                $('#it_text').css("color", colors[c2]);
                if (colors[c2] == "#808080") {
                    $('#it_text').addClass("Gray");
                    correct_color.push("Gray");
                }
                else {
                    $('#it_text').removeClass("Gray");
                }
                c2++;

                if (c2 == colors.length) {
                    c2 = 0;
                }
                matching_colors();
            });

            $('#with').click(function () {
                $('#with_text').show();
                $('#with_text').css("color", colors[c3]);
                if (colors[c3] == "#663300") {
                    $('#with_text').addClass("Brown");
                    correct_color.push("Brown");
                }
                else {
                    $('#with_text').removeClass("Brown");
                }
                c3++;
                if (c3 == colors.length) {
                    c3 = 0;
                }
                matching_colors();
            });

            $('#games').click(function () {
                $('#games_text').show();
                $('#games_text').css("color", colors[c4]);
                if (colors[c4] == "#008000") {
                    $('#games_text').addClass("Green");
                    correct_color.push("Green");
                }
                else {
                    $('#games_text').removeClass("Green");
                }
                c4++;
                if (c4 == colors.length) {
                    c4 = 0;
                }
                matching_colors();
            });


            function matching_colors() {
                var correct = ["Orange", "Gray", "Brown", "Green"];

                if (($('#do_text').hasClass('Orange')) && ($('#it_text').hasClass('Gray')) && ($('#with_text').hasClass('Brown')) && ($('#games_text').hasClass('Green'))) {
                    $('#do_text').show();
                    $('#it_text').show();
                    $('#with_text').show();
                    $('#games_text').show();
                    $('#slogan_game').show();
                    $('#slogan_game_hard').hide();
                    $("#slogan_game").parent().css("z-index", "999999");
                    $('.spinner').unbind('click');
                    Page3.init()
                }


            }
        }
    });



    var cur = 0;
    var colors = ["#008000", "#800080", "#ff6600", "#663300"];

    $('#trigger_button').click(function () {
        cur = (cur + 1) % colors.length;
        setTimeout(function () {
            $("#do_text").show();
        }, 500);
        setTimeout(function () {
            $('#it_text').show();
        }, 1000);
        setTimeout(function () {
            $("#with_text").show();
        }, 1500);
        setTimeout(function () {
            $('#games_text').show();
        }, 2000);

        setTimeout(function () {
            $('#do').css('background', "");
            $('#it').css('background', "");
            $('#with').css('background', "");
            $('#games').css('background', "");
            $("#do_text").hide();
            $("#it_text").hide();
            $("#with_text").hide();
            $("#games_text").hide();
        }, 2500)

        setTimeout(function () {
            $('#buttons').show();
        }, 3000)

    });


    $('#logo_pic_image').click(function () {
        window.location.reload();
    });


    function img_windy(img_array,text_array,name_array){
        var seplen=img_array.length;   //images array
        var carus = $('#wi-el');        //will append images to this element
        var imglist='';                    //we use this variable for optimization..

        for(var i=0;i<seplen;i++){
            if (i>0){
                imglist+='<li><img src="'+img_array[i]+'" alt="image1"/><h4>'+ name_array[i] +'</h4><p>'+text_array[i]+'</p></li>';    //add all images what we have (actually there 2 or 3 images)
            }
            else
            {
                imglist+='<li style="display: list-item;"><img src="'+img_array[i]+'" alt="image1"/><h4>'+ name_array[i] +'</h4><p>'+text_array[i]+'</p></li>';    //add all images what we have (actually there 2 or 3 images)
            }

        }

        carus.html(imglist);


        var $el = $('#wi-el'),
            windy = $el.windy(),
            allownavnext = false,
            allownavprev = false;

        $('#nav-prev').on('mousedown',
            function (event) {

                allownavprev = true;
                navprev();

            }).on('mouseup mouseleave', function (event) {

                allownavprev = false;

            });

        $('#nav-next').on('mousedown',
            function (event) {

                allownavnext = true;
                navnext();

            }).on('mouseup mouseleave', function (event) {

                allownavnext = false;

            });

        function navnext() {
            if (allownavnext) {
                windy.next();
                setTimeout(function () {
                    navnext();
                }, 150);
            }
        }

        function navprev() {
            if (allownavprev) {
                windy.prev();
                setTimeout(function () {
                    navprev();
                }, 150);
            }
        }


    }


    function products_bookblock(product_img_array){
        var seplen=product_img_array.length;   //images array
        var carus = $('#bookblockProduct');        //will append images to this element
        var imglist='';                    //we use this variable for optimization..

        for(var i=0;i<seplen;i++){
            if (i>0){
                imglist+='<div class="bb-item"><a href="#"><img src="'+product_img_array[i]+'"/></a></div>';
            }
            else
            {
                imglist+='<div class="bb-item" style="display: block;"><a href="#"><img src="'+product_img_array[i]+'"/></a></div>';
            }

        }

        carus.html(imglist);

        Page2.init()
    }




});


var Page1 = (function () {

    var config1 = {
            $bookBlock:$('#bbHard'),
            $navNext:$('#navHardNext'),
            $navPrev:$('#navHardPrev')
        },
        init1 = function () {

            config1.$bookBlock.bookblock({
                speed:800,
                shadowSides:0.8,
                shadowFlip:0.7
            });
            initEvents1();
        },

        initEvents1 = function () {

            var $slides = config1.$bookBlock.children();

            // add navigation events
            config1.$navNext.on('click touchstart', function () {

                config1.$bookBlock.bookblock('next');
                return false;
            });

            config1.$navPrev.on('click touchstart', function () {
                config1.$bookBlock.bookblock('prev');
                return false;
            });

            // add swipe events
            $slides.on({
                'swipeleft':function (event) {
                    config1.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight':function (event) {
                    config1.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left:37,
                        up:38,
                        right:39,
                        down:40
                    };

                switch (keyCode) {
                    case arrow.left:
                        config1.$bookBlock.bookblock('prev');
                        break;
                    case arrow.right:
                        config1.$bookBlock.bookblock('next');
                        break;
                }
            });
        };

    return { init1:init1 };

})();

var Page = (function () {

    var config = {
            $bookBlock:$('#bbEasy'),
            $navNext:$('#navEasyNext'),
            $navPrev:$('#navEasyPrev')
        },

        init = function () {
            config.$bookBlock.bookblock({
                speed:800,
                shadowSides:0.8,
                shadowFlip:0.7
            });
            initEvents();
        },

        initEvents = function () {

            var $slides = config.$bookBlock.children();

            // add navigation events
            config.$navNext.on('click touchstart', function () {

                config.$bookBlock.bookblock('next');
                return false;
            });

            config.$navPrev.on('click touchstart', function () {
                config.$bookBlock.bookblock('prev');
                return false;
            });

            // add swipe events
            $slides.on({
                'swipeleft':function (event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight':function (event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left:37,
                        up:38,
                        right:39,
                        down:40
                    };

                switch (keyCode) {
                    case arrow.left:
                        config.$bookBlock.bookblock('prev');
                        break;
                    case arrow.right:
                        config.$bookBlock.bookblock('next');
                        break;
                }
            });
        };

    return { init:init };

})();


var Page2 = (function () {

    var config = {
            $bookBlock:$('#bookblockProduct'),
            $navNext:$('#navPrdNext'),
            $navPrev:$('#navPrdPrev')
        },

        init = function () {
            config.$bookBlock.bookblock({
                speed:800,
                shadowSides:0.8,
                shadowFlip:0.7
            });
            initEvents();
        },

        initEvents = function () {

            var $slides = config.$bookBlock.children();

            // add navigation events
            config.$navNext.on('click touchstart', function () {

                config.$bookBlock.bookblock('next');
                return false;
            });

            config.$navPrev.on('click touchstart', function () {
                config.$bookBlock.bookblock('prev');
                return false;
            });

            // add swipe events
            $slides.on({
                'swipeleft':function (event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight':function (event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left:37,
                        up:38,
                        right:39,
                        down:40
                    };

                switch (keyCode) {
                    case arrow.left:
                        config.$bookBlock.bookblock('prev');
                        break;
                    case arrow.right:
                        config.$bookBlock.bookblock('next');
                        break;
                }
            });
        };

    return { init:init };

})();

var Page3 = (function () {

    var config = {
            $bookBlock:$('#gameWin'),
            $navNext:$('#gameWinNext'),
            $navPrev:$('#gameWinPrev')
        },

        init = function () {
            config.$bookBlock.bookblock({
                speed:800,
                shadowSides:0.8,
                shadowFlip:0.7
            });
            initEvents();
        },

        initEvents = function () {

            var $slides = config.$bookBlock.children();

            // add navigation events
            config.$navNext.on('click touchstart', function () {

                config.$bookBlock.bookblock('next');
                return false;
            });

            config.$navPrev.on('click touchstart', function () {
                config.$bookBlock.bookblock('prev');
                return false;
            });

            // add swipe events
            $slides.on({
                'swipeleft':function (event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight':function (event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left:37,
                        up:38,
                        right:39,
                        down:40
                    };

                switch (keyCode) {
                    case arrow.left:
                        config.$bookBlock.bookblock('prev');
                        break;
                    case arrow.right:
                        config.$bookBlock.bookblock('next');
                        break;
                }
            });
        };

    return { init:init };

})();


var state = 'home';

function flipside(newState) {
    if (state == 'home') {
        $('#logo').fadeOut('fast');
        $('#second_logo').fadeIn();
        $('#parallax_view').animate({
            left:"-=" + window.innerWidth * 0.55 + "px"
        });
        $('#sky').animate({
            left:"-=" + window.innerWidth * 0.05 + "px"
        });
        $('#home').fadeIn();
    } else {
        if (newState == 'aboutUs') {
            $('#products').fadeOut();
            $('#productsLink').fadeIn();
            $('#teamLink').fadeOut();
        } else {

            $('#aboutUs').fadeOut();
            $('#productsLink').fadeOut();
            $('#teamLink').fadeIn();

        }
    }
    state = newState;
    $('#' + newState).fadeIn();
}


jQuery.fn.hatchShow = function (id) {
    $('#' + id + ' .hsjs').css('display', 'inner-block').css('white-space', 'pre').each(
        function () {
            var t = $(this);
            t.wrap("<span class='hatchshow_temp' style='display:block'>");
            var pw = t.parent().width();
            while (t.width() < pw && t.fontSize() < 500) {
                t.css('font-size', (t.fontSize() + 1) + "px"),
                    function () {
                        while (t.width() > pw) {
                            t.css('font-size', (t.fontSize() - .1) + "px")
                        }
                    };
            }
        }).css('visibility', 'visible');
};
jQuery.fn.fontSize = function () {
    return parseInt($(this).css('font-size').replace('px', ''));
};


