//For About Us Windy Array Start

var img_array = ["assets/images/arijit.jpg", "assets/images/kamalika.jpg", "assets/images/arun.jpg", "assets/images/dipanwita.jpg", "assets/images/rushabh.jpg", "assets/images/sunny.jpg", "assets/images/ashwin.jpg", "assets/images/amol.jpg", "assets/images/rakesh.jpg", "assets/images/nilesh.jpg", "assets/images/perseus.jpg", "assets/images/deepak.jpg", "assets/images/swapnil.jpg", "assets/images/nikunj.jpg"]
var name_array = ["Arijit Lahiri", "Kamalika Bhattacharya", "Arunkumar Balasubramanian", "Dipanwita Kar", "Rushabh Hathi", "Sunny Singh", "Ashwin Kumar", "Amol Bhor", "Rakesh Rengaraj", "Nilesh Panchal", "Perseus Vazifdar", "Deepak Gawas", "Swapnil Domade", "Nikunj Thakkar"]
var text_array = ["Arijit is an alumnus of the prestigious IIM, Calcutta with over ten years of experience at various national level positions in Corporate Banking & Wealth Management. Together with Kamalika, Ptotem is his initiative.",
                  "Kamalika is an MBA from ISB, Hyderabad. She currently holds a senior position with a large-cap Investment Bank. Ptotem is essentially her brain-child. She remains a strategic partner of the firm.",
                  "Arun, an MBA from NMIMS, has over 15 years of experience spanning senior positions in International Trade Finance & Consumer Banking. He is a partner at Ptotem, handling its Finance & Operations." ,
                  "Dipanwita, an MBA from ISB, Hyderabad, heads the Business Development for Ptotem. Her career has involved stints with Infosys, Nokia & Religare Macquarie in development & sales.",
                  "Rushabh holds a Post Graduate degree in Artificial Intelligence from the University of Edinburgh. He is Ptotem’s technology wizard & is in charge of technology initiatives for new product development.",
                  "Sunny is an engineering graduate in Computer Science from the Mumbai University .Prior to joining us, he worked with Patni Computer Systems. Sunny heads the Development Team at Ptotem.",
                  "Ashwin majored in Botany and also, has experience in the field of Equity Analysis. At Ptotem, Ashwin heads Product Development & Marketing.",
                  "Amol is an engineering graduate in Computer Science. Amol spearheads the workflow management of the firm. He also manages the Human Resources, Coding, General Administration & Accounts.",
                  "Rakesh is an engineering graduate in Electronics & Telecommunication. After a brief stint with Reliance Infocom, he has joined the team of Ptotem's software developers.",
                  "Nilesh is an engineering graduate who started his career with Ptotem Learning Projects. Nilesh is a part of the firm's software developers.",
                  "Perseus is a Post Graduate in commerce &holds a diploma in multimedia from ‘ArenaMultimedia’. He joined the ranks of Ptotem as a Designer & is now a Project Manager.",
                  "Deepak is a media graduate with over 4 years of experience in advertising and use to work as a Sr. Account Manager before he decided to join Ptotem as a Business Development Manager.",
                  "Swapnil graduated in the field of Fine Arts from Central India School of Fine Arts.Before joining Ptotem as the Lead designer, he played an instrumental role at a startup that specializes in Advertising & Design.",
                  "Nikunj is an engineering graduate in Computer Science. Prior to joining Ptotem as a Senior Software Developer, Nikunj has worked with Accenture."]

//For About Us Windy Array End

//For Product Bookblock Array Start
var product_img_array = ["assets/images/products/Slide01.jpg", "assets/images/products/Slide02.jpg", "assets/images/products/Slide03.jpg", "assets/images/products/Slide04.jpg", "assets/images/products/Slide05.jpg", "assets/images/products/Slide06.jpg", "assets/images/products/Slide07.jpg", "assets/images/products/Slide08.jpg", "assets/images/products/Slide09.jpg", "assets/images/products/Slide10.jpg", "assets/images/products/Slide11.jpg", "assets/images/products/Slide12.jpg", "assets/images/products/Slide13.jpg", "assets/images/products/Slide14.jpg", "assets/images/products/Slide15.jpg", "assets/images/products/Slide16.jpg", "assets/images/products/Slide17.jpg", "assets/images/products/Slide18.jpg", "assets/images/products/Slide19.jpg", "assets/images/products/Slide20.jpg", "assets/images/products/Slide21.jpg", "assets/images/products/Slide22.jpg"]
//For Product Bookblock Array End

//For easy game intro Bookblock Array Start
var easy_game_img_array = ["assets/images/easy/serious_games_ppt_easy_Page_1.jpg", "assets/images/easy/serious_games_ppt_easy_Page_2.jpg", "assets/images/easy/serious_games_ppt_easy_Page_3.jpg", "assets/images/easy/serious_games_ppt_easy_Page_4.jpg", "assets/images/easy/serious_games_ppt_easy_Page_5.jpg"]
//For easy game intro Bookblock Array End

//For easy game intro Bookblock Array Start
var hard_game_img_array = ["assets/images/hard/serious_games_ppt_hard_Page_1.jpg", "assets/images/hard/serious_games_ppt_hard_Page_2.jpg", "assets/images/hard/serious_games_ppt_hard_Page_3.jpg", "assets/images/hard/serious_games_ppt_hard_Page_4.jpg", "assets/images/hard/serious_games_ppt_hard_Page_5.jpg"]
//For easy game intro Bookblock Array End

var opacity_value = 0.5;
//#008000", "#800080", "#ff6600", "#663300", "#ffffff", "#808080"];
var easy_winner = ["#ff0000", "#ffff00", "#0000ff", "#000000"]  ;
var hard_winner = ["#ff6600","#808080","#663300","#008000"] ;


function test_winner(current_color,winner){
    return current_color.join(",") === winner.join(",") ;
}


function game_choice(){
    $('.shutter').fadeIn();
    $('.shutter').animate({'left': '0', 'top': '0', 'z-index': '1040'}, 1500);

    setTimeout(function(){
        bootbox.dialog({
            message: "Please Select game type",
            title: "Game Type",
            onEscape: function() {
//                $(".shutter").slideUp(1000);
                $(".shutter").animate({'left': '0', 'top': '-1150px', 'z-index': '1040'}, 1500);
            },
            buttons: {
                success: {
                    label: "Easy!",
                    className: "btn-success",
                    callback: function() {
                        init_game('easy')
                    }
                },
                danger: {
                    label: "Hard!",
                    className: "btn-danger",
                    callback: function() {
                        init_game('hard')
                    }
                }

            }
        });
    },1800);
}


function init_game(type){
    $(".knob_container").show();
    $(".knob").show();
        current_color_combo = [];
        if (type === 'easy')
        {
            $("#easy_graffiti").fadeIn('slow');
            $('#game_quit').css("cursor","pointer");
            $("#game_quit").fadeIn('slow');

           winner = easy_winner ;
        }
        else
        {
            $("#hard_graffiti").fadeIn('slow');
            $('#game_quit').css("cursor","pointer");
            $("#game_quit").fadeIn('slow');
           winner = hard_winner;
        }
        var colors = ["","#ff0000", "#ffff00", "#0000ff", "#000000", "#008000", "#800080", "#ff6600", "#663300", "#ffffff", "#808080"];

    $('.knob')
        .val("0")
        .trigger('change');
        $(".knob").knob({
            'min':0,
            'max':100,
            'step':10 ,
            'bgColor':"#635852",
            'fgColor':"rgb(127, 255, 0)" ,
            'width':"100%",
            'height':'100%',
            'thickness':"0.30",
             'angleOffset':"0",
            'displayInput':false,
            'change':function(val){
                color = colors[(val)/10];
                this.o.fgColor = color ;
            },
            'release':function(val){
                color = colors[(val)/10];
                current_color_combo[(this.$).attr("id")-1] = color;
                if(test_winner(current_color_combo,winner))
                setTimeout(function(){
                    $('#game_quit').hide();
                    bootbox.alert("You win",function(){
                        $(".knob_container").hide();
                        $(".shutter").animate({'left': '0', 'top': '-1150px', 'z-index': '1040'}, 1500);
                        $("#easy_graffiti").hide();
                        $("#hard_graffiti").hide();
                        $('#game_quit').hide();
                    });
                    $('.bootbox-body').prev().hide();
                },200)
            }
        });
}


function img_windy(img_array, text_array, name_array,div_id,nav_prev,nav_next) {
    var seplen = img_array.length;   //images array
    var carus = $(div_id);        //will append images to this element
    var imglist = '';                    //we use this variable for optimization..
    var counter =0;
    for (var i = 0; i < seplen; i++) {
        imglist += '<li><img src="' + img_array[i] + '" alt="image' + [i + 1] + '"/><h4>' + name_array[i] + '</h4><p>' + text_array[i] + '</p></li>';    //add all images what we have (actually there 2 or 3 images)
    }
    carus.html(imglist);

    var $el = $(div_id),
        windy = $el.windy(),
        allownavnext = false,
        allownavprev = false;

    $(nav_prev).on('mousedown',
        function (event) {

            allownavprev = true;
            navprev();

        }).on('mouseup mouseleave', function (event) {

            allownavprev = false;

        });

    $(nav_next).on('mousedown',
        function (event) {
            counter++;
            if(counter === seplen)
            {
                img_windy(img_array, text_array, name_array,div_id,nav_prev,nav_next)
            }

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

$(function () {
    var logo_width= $('#logopic').width();
    var percentage_added = logo_width+'%';

    //Home page animation start
    if ($(window).width() <= 1024){
        $('.aboutPtotem').css('width','290px');
    }
    if ($(window).width() <= 768){
        $('#bookblockProduct').css({
            width: '405px',
            marginLeft: '-38px'
        });
        $('.bb-custom-wrapper nav').css('margin-left','105px');
    }

    $(".gamify").css('opacity', 0.4);
    setInterval(function () {
        if ($('#buttons').is(':visible'))
            $('.glower').css('opacity', 0.2);
        else {
            $('.glower').fadeIn(3000, function () {
                $('.glower').fadeOut(3000)
            });
        }
    }, 6000);
    $('#logopic').hide();
    $('#buttons').hide();
    $('#cloud1 img').hide();
    $('#cloud2 img').hide();
    $('#cloud3 img').hide();
    $('#sky .panel').css('left', '100%');
    $('body').css("background-image", "url('assets/images/background.jpg')").fadeIn(2000);

    if ($(window).width() > 1024){
        $('#logopic').css('width','85%');
    }
    else{
        $('#logopic').css('width','100%');
    }

    setTimeout(function () {
        $('#logopic').fadeIn(1000)
        if ($(window).width() < 1024){
            $('#logopic').css({
                left: (($(window).width())/2)-136,
                top: (($(window).height())/3)
            });
        }
        else{
            $('#logopic').css({
                left: (($(window).width())/2)-280,
                top: (($(window).height())/2)-100
            });
        }

        if ($(window).width() > 1024){
            $('#logopic').animate({'left': '0', 'top': '0', 'width': '58%'}, 1500);
        }
        else{
            $('#logopic').animate({'left': '0', 'top': '0', 'width' :percentage_added, 'paddingTop': '0'}, 1500);
            $('#logo .panel').css('top', '25px');
        }

    }, 800), setTimeout(function () {
        $('#sky .panel').animate({left: '0%'}, 600);
    }, 2800), setTimeout(function () {
        $('#cloud1 img').fadeIn(800);
        $('#cloud2 img').fadeIn(800);
        $('#cloud3 img').fadeIn(800);
    }, 4000), setTimeout(function () {
        $("#tree").animate({top: '-109%'}, 800);
        $('#menu_overlay').animate({right: '0px'}, 800);
        $('#menu').animate({right: '0px'}, 800);
    }, 5000), setTimeout(function () {
        $('#catchphrase').hatchShow('catchphrase');
        $('#catchphrase').animate({opacity: 1}, 800);
    }, 6000);

    //Home page animation end
    $(".close_parallax_btn").hide();

    $('.superpanel').css({
        height: window.innerHeight + 'px'
    });

    $('.scene').parallax().fadeIn();

    $(window).load(function () {
        $('#catchphrase').hatchShow('catchphrase');
    });

    $('#catchphrase').hatchShow('catchphrase');

    $(window).resize(function () {
        $('.superpanel').css({
            height: window.innerHeight + 'px'
        });
        $('#catchphrase').hatchShow('catchphrase');
    });


    $('#teamLink').on('click', function () {
        $(this).hide();
        $('.windy>nav').css('z-index', '1');
        flipside('aboutUs');
        $('.coordinate_block').popover({
            container: 'body',
            placement: 'top',
            trigger: 'hover',
            html: 'true'
        });
        img_windy(img_array, text_array, name_array,"#wi-el","#nav-prev","#nav-next");
    });


    $('.nopad').hover(function()
    {
        $('#coordinates').prev().prev().animate({ 'opacity': 0.5 });
    });

    $('.nopad').mouseout(function()
    {
        $('#coordinates').prev().prev().animate({ 'opacity': 1 });
    });


    $('#productsLink').on('click', function () {
        $(this).hide();
        flipside('products');
        $('.glower').css("pointer-events", "none");
        $('.gamify').css("cursor", "auto");
        products_bookblock(product_img_array, "bookblockProduct");
        Page2.init()
    });


    $('#home').on('click', function () {
        $('.coordinate_block').popover('destroy');
        $('#aboutUs').fadeOut('fast');
        $('#products').fadeOut('fast');
        $('#second_logo').fadeOut('fast');
        $('.glower').css("pointer-events", "auto");
        $('#parallax_view').animate({
            left: "+=" + window.innerWidth * 0.55 + "px"
        });

        $('#sky').animate({
            left: "+=" + window.innerWidth * 0.05 + "px"
        });

        $('#logo').fadeIn();
        $(this).hide();
        $('#teamLink').fadeIn();
        $('#productsLink').fadeIn();
        state = 'home';
    });

    $('.glower').on('click', function (e) {
        game_choice();
    });

    $('#logo_pic_image').click(function () {
        window.location.reload();
    });

    $('#confGameModeModal').on('hidden.bs.modal', function () {
        $("#buttons").parent().css('z-index', '99999');
        $("#buttons").show();
    });

    $('#congModal').on('shown.bs.modal', function () {
        $('#sky').css('opacity', '0');
    });

    $('#congModal').on('hidden.bs.modal', function () {
        $("#tree").css('z-index', '9999999');
        $('#sky').css('opacity', '0.8');
        $('#slogan').hide();
        $('#catchphrase').show();
        $('#menu').css('opacity', '0.7');
    });


   $('#game_quit').click(function(){
       bootbox.dialog({
           message: "Do you really want to quit?",
           title: "Quit Game",
           buttons: {
               danger: {
                   label: "Yes, I give up, I cannot figure it out",
                   className: "btn-danger",
                   callback: function() {
                       $(".shutter").animate({'left': '0', 'top': '-1150px', 'z-index': '1040'}, 1500);
                       $("#easy_graffiti").hide();
                       $("#hard_graffiti").hide();
                       $(".knob_container").hide();
                       $("#game_quit").hide();
                   }
               },
               main: {
                   label: "No, I want to give it another shot",
                   className: "btn-primary",
                   callback: function() {

                   }
               }
           }
       });
   });





});

function products_bookblock(img_array, div_id) {
    $('.bb-custom-wrapper>nav').css('z-index', '9999');
    var seplen = img_array.length;   //images array
    var carus = $('#' + div_id);        //will append images to this element
    var imglist = '';                    //we use this variable for optimization..

    if (div_id == "bookblockProduct") {
        for (var i = 0; i < seplen; i++) {
            imglist += '<div class="bb-item" style="display: block;"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
        }
    }
    else if (div_id == "gameWin") {
        for (var i = 0; i < seplen; i++) {
            if (i > 0) {
                imglist += '<a href="#" class="close_parallax_btn" onclick="window.location.reload()" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
                //imglist += '<a href="#" class="close_parallax_btn" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
            }
            else {
                imglist += '<a href="#" class="close_parallax_btn" onclick="window.location.reload()" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item" style="display: block;"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
                //imglist += '<a href="#" class="close_parallax_btn" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item" style="display: block;"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
            }

        }
    }
    else {
        for (var i = 0; i < seplen; i++) {
            if (i > 0) {
                imglist += '<a href="#" class="close_parallax_btn" data-toggle="modal" data-target="#confModal" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
                //imglist += '<a href="#" class="close_parallax_btn" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
            }
            else {
                imglist += '<a href="#" class="close_parallax_btn" data-toggle="modal" data-target="#confModal" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item" style="display: block;"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
                //imglist += '<a href="#" class="close_parallax_btn" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item" style="display: block;"><a href="#"><img src="' + img_array[i] + '"/></a></div>';
            }

        }
    }


    carus.html(imglist);

//        $('.close_parallax_btn').on('click', function(){
//            $("#confModal").modal('show');
//        });
//
//
//        $('#close_game').on('click', function(){
//            $("#confModal").modal('hide');
//            $(".layer").css('height','100%');
//            $("#parallax_view").css('pointer-events', 'none');
//            $('#catchphrase').show();
//            $('#slogan').hide();
//            $('#slogan_game').hide();
//            $('#slogan_game_easy').hide();
//            $('#slogan_game_hard').hide();
//            $('#buttons').hide();
//
//            $('#do_text').hide();
//            $('#it_text').hide();
//            $('#with_text').hide();
//            $('#games_text').hide();
//
//            $("#menu_overlay").css('z-index','999999');
//            $("#menu_overlay").css('position','absolute');
//            $("#menu").css('z-index',"9999999");
//            $("#menu").css('position','absolute');
//            $("#menu").css('opacity','1');
//            $("#menu").css('background','');
//
//            $('.bb-custom-wrapper>nav').css('z-index',"10000");
//            $('#aboutUs').css('z-index','100000');
//        });

//    Page2.init()
}

var Page1 = (function () {

    var config1 = {
            $bookBlock: $('#bbHard'),
            $navNext: $('#navHardNext'),
            $navPrev: $('#navHardPrev')
        },
        init1 = function () {

            config1.$bookBlock.bookblock({
                speed: 800,
                shadowSides: 0.8,
                shadowFlip: 0.7,
                onEndFlip   : function( page, isLimit ) {
                    if (isLimit==(hard_game_img_array.length-1)){
                        config1.$navNext.css('pointer-events','none');
                    }
                    else{
                        config1.$navNext.css('pointer-events','auto');
                    }
                }
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
                'swipeleft': function (event) {
                    config1.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight': function (event) {
                    config1.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
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

    return { init1: init1 };

})();

var Page = (function () {

    var config = {
            $bookBlock: $('#bbEasy'),
            $navNext: $('#navEasyNext'),
            $navPrev: $('#navEasyPrev')
        },

        init = function () {
            config.$bookBlock.bookblock({
                speed: 800,
                shadowSides: 0.8,
                shadowFlip: 0.7,
                onEndFlip   : function( page, isLimit ) {
                    if (isLimit==(easy_game_img_array.length-1)){
                        config.$navNext.css('pointer-events','none');
                    }
                    else{
                        config.$navNext.css('pointer-events','auto');
                    }
                    //return false;
                }
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
                'swipeleft': function (event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight': function (event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
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

    return { init: init };

})();


var Page2 = (function () {

    var config = {
            $bookBlock: $('#bookblockProduct'),
            $navNext: $('#navPrdNext'),
            $navPrev: $('#navPrdPrev')
        },

        init = function () {
            config.$bookBlock.bookblock({
                speed: 800,
                shadowSides: 0.8,
                shadowFlip: 0.7,
                onEndFlip   : function( page, isLimit ) {
                    if (isLimit==(product_img_array.length-1)){
                        config.$navNext.css('pointer-events','none');
                    }
                    else{
                        config.$navNext.css('pointer-events','auto');
                    }
                    //return false;
                }
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
                'swipeleft': function (event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight': function (event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
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

    return { init: init };

})();

var Page3 = (function () {

    var config = {
            $bookBlock: $('#gameWin'),
            $navNext: $('#gameWinNext'),
            $navPrev: $('#gameWinPrev')
        },

        init = function () {
            config.$bookBlock.bookblock({
                speed: 800,
                shadowSides: 0.8,
                shadowFlip: 0.7
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
                'swipeleft': function (event) {
                    config.$bookBlock.bookblock('next');
                    return false;
                },
                'swiperight': function (event) {
                    config.$bookBlock.bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
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

    return { init: init };

})();


var state = 'home';

function myFunction() {
    var x;
    var r = confirm("Are you sure you want to wimp out? It’s not that tough…");
    if (r == true) {
        //x="You pressed OK!";
        window.location.reload()
    }
    else {
        //x="You pressed Cancel!";
    }
    //document.getElementById("demo").innerHTML=x;
}

function flipside(newState) {
    if (state == 'home') {
        $('#logo').fadeOut('fast');
        $('#second_logo').fadeIn();
        $('#parallax_view').animate({
            left: "-=" + window.innerWidth * 0.55 + "px"
        });
        $('#sky').animate({
            left: "-=" + window.innerWidth * 0.05 + "px"
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


