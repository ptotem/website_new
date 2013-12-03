//For About Us Windy Array Start

var img_array = ["assets/images/arijit.jpg","assets/images/kamalika.jpg","assets/images/arun.jpg","assets/images/dipanwita.jpg","assets/images/rushabh.jpg","assets/images/sunny.jpg","assets/images/ashwin.jpg","assets/images/amol.jpg","assets/images/rakesh.jpg","assets/images/nilesh.jpg","assets/images/perseus.jpg","assets/images/deepak.jpg","assets/images/swapnil.jpg","assets/images/nikunj.jpg"]
var name_array=["Arijit Lahiri","Kamalika Bhattacharya","Arunkumar Balasubramanian","Dipanwita Kar","Rushabh Hathi","Sunny Singh","Ashwin Kumar","Amol Bhor","Rakesh Rengaraj","Nilesh Panchal","Perseus Vazifdar","Deepak Gawas","Swapnil Domade","Nikunj Thakkar"]
var text_array = ["Arijit is an alumnus of the prestigious IIM, Calcutta, Arijit has over ten years of experience spanning a myriad of functions within Corporate Banking & Wealth Management. He has held national level positions at large Private & Investment Banks. Together with Kamalika, Ptotem is his initiative.",
    "Kamalika is an MBA from the Indian School of Business, Hyderabad. She currently holds a senior position with a large-cap Investment Bank. Ptotem Learning Projects is essentially her brain-child. She remains a strategic partner of the firm.",
    "Arun is an MBA from NMIMS. Arun has a work experience of almost a decade & half spanning senior positions in International Trade Finance & Consumer Banking. Arun is a partner at the firm h&ling its Finance & Operations.",
    "Dipanwita is an MBA from the Indian School of Business, Hyderabad. Dipanwita heads the Sales & Business Development for Ptotem. Her career has involved stints with Infosys, Nokia, Alchemy Capital Management & Religare Macquarie Private Wealth in development & sales.",
    "Rushabh holds a Post Graduate degree in Artificial Intelligence from the University of Edinburgh. He is Ptotem’s technology wizard & is in charge of technology initiatives for new product development.",
    "Sunny is an engineering graduate in Computer Science from the Mumbai University. Prior to joining us he worked with Patni Computer Systems. Sunny heads the Development Team at Ptotem.",
    "Ashwin majored in Botany & is also a Certified Financial Analyst. Apart from being instrumental in initiating several startups, Ashwin has experience in the field of Equity Analysis. At Ptotem, Ashwin heads Product Development & Marketing.",
    "Amol is an engineering graduate in Computer Science. Amol spearheads the workflow management of the firm. He also manages the Human Resources,Coding, General Administration & Accounts.",
    "Rakesh is an engineering graduate in Electronics & Telecommunication. After a brief stint with Reliance Infocom, he has joined the team of Ptotem's software developers.",
    "Nilesh is an engineering graduate who started his career with Ptotem Learning Projects. Nilesh is a part of the firm's software developers.",
    "Perseus is a Post Graduate in commerce & holds a diploma in multimedia from ‘Arena Multimedia’. He joined the ranks of Ptotem as a Designer & is now a Project Manager.",
    "Deepak is a graduate in mass media with a specialization in advertising. He tried his hands in the corporate world with a very short stint with Bank of Maharashtra before moving to Ptotem as a Business Development Manager.",
    "Swapnil graduated in the field of Fine Arts from Central India School of Fine Arts. Before joining Ptotem as the Lead designer, he played an instrumental role at a startup that specializes in Advertising & Design.",
    "Nikunj is an engineering graduate in Computer Science. Prior to joining Ptotem as a Senior Software Developer, Nikunj has worked with Accenture. Nikunj is also a founding partner of ‘Yuva Beat’ – a student driven startup."]

//For About Us Windy Array End

//For Product Bookblock Array Start
var product_img_array = ["assets/images/products//Slide01.jpg", "assets/images/products/Slide02.jpg", "assets/images/products/Slide03.jpg", "assets/images/products/Slide04.jpg","assets/images/products/Slide05.jpg","assets/images/products/Slide06.jpg","assets/images/products/Slide07.jpg","assets/images/products/Slide08.jpg","assets/images/products/Slide09.jpg","assets/images/products/Slide10.jpg","assets/images/products/Slide11.jpg","assets/images/products/Slide12.jpg","assets/images/products/Slide13.jpg","assets/images/products/Slide14.jpg","assets/images/products/Slide15.jpg","assets/images/products/Slide16.jpg","assets/images/products/Slide17.jpg","assets/images/products/Slide18.jpg","assets/images/products/Slide19.jpg","assets/images/products/Slide20.jpg","assets/images/products/Slide21.jpg","assets/images/products/Slide22.jpg","assets/images/products/Slide23.jpg"]
//For Product Bookblock Array End

//For easy game intro Bookblock Array Start
var easy_game_img_array = ["assets/images/easy/serious_games_ppt_easy_Page_1.jpg", "assets/images/easy/serious_games_ppt_easy_Page_2.jpg", "assets/images/easy/serious_games_ppt_easy_Page_3.jpg", "assets/images/easy/serious_games_ppt_easy_Page_4.jpg", "assets/images/easy/serious_games_ppt_easy_Page_5.jpg"]
//For easy game intro Bookblock Array End

//For easy game intro Bookblock Array Start
var hard_game_img_array = ["assets/images/hard/serious_games_ppt_hard_Page_1.jpg", "assets/images/hard/serious_games_ppt_hard_Page_2.jpg", "assets/images/hard/serious_games_ppt_hard_Page_3.jpg", "assets/images/hard/serious_games_ppt_hard_Page_4.jpg", "assets/images/hard/serious_games_ppt_hard_Page_5.jpg"]
//For easy game intro Bookblock Array End


var c1_easy = 0;
var c2_easy = 0;
var c3_easy = 0;
var c4_easy = 0;
var c1_hard = 0;
var c2_hard = 0;
var c3_hard = 0;
var c4_hard = 0;


$(function () {

    //Home page animation start

    $('#logopic').hide();
    $('#buttons').hide();
    $('#cloud1 img').hide();
    $('#cloud2 img').hide();
    $('#cloud3 img').hide();

    $('#sky .panel').css('left','100%');
    $('body').css("background-image","url('assets/images/background.jpg')").fadeIn(3000);
    setTimeout(function(){
        $('#logopic').fadeIn(5000);
    },2000,setTimeout(function(){
        $('#sky .panel').animate({left: '0%'}, 2000);
    },4000),setTimeout(function(){
        $('#cloud1 img').fadeIn(2000);
        $('#cloud2 img').fadeIn(2000);
        $('#cloud3 img').fadeIn(2000);
    },6000),setTimeout(function(){
        $("#tree").animate({top:'-109%'}, 1000);
        $('#menu_overlay').animate({right: '0px'}, 2000);
        $('#menu').animate({right: '0px'}, 2000);
    },8000),setTimeout(function(){
        $('#catchphrase').hatchShow('catchphrase');
        $('#catchphrase').animate({opacity: 1}, 1000);
    },10000));
    //Home page animation end


    $(".close_parallax_btn").hide();

    $('.superpanel').css({
        height:window.innerHeight + 'px'
    });

    $('.scene').parallax().fadeIn();

    $(window).load(function () {
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
        $('.windy>nav').css('z-index','1');
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

        products_bookblock(product_img_array,"bookblockProduct");

//        $('#bookblockProduct').on({
//            'swipe' : function(ev) {
//                console.log('Swiping');
//            },
//            'swipeleft' : function(ev) {
//                console.log('Swiping left');
//            },
//            'swiperight' : function(ev) {
//                console.log('Swiping right');
//            },
//            'swipeup' : function(ev) {
//                console.log('Swiping up');
//            },
//            'swipedown' : function(ev) {
//                console.log('Swiping down');
//            }
//        });

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
        //$('#slogan').show();
        //$('#buttons').hide().delay(1000);
        //$('#trigger_button').trigger('click').delay(2000);
        $('#menu_overlay').css('pointer-events', 'auto');
        $('#slogan_game').parent().css('z-index', '0');
        $("#menu_overlay").css('z-index', '0');
        //$("#menu_overlay").css('position','absolute');
        $("#menu").css('z-index', '0');
        $('#menu').css({
            'background':'#aaa',
            'color':'#ccc'
        });
        //$('#catchphrase').hide();
        setTimeout(function () {
            $('#buttons').show();
            $('#buttons').parent().css('z-index', '999999');
        }, 800)

//        $(".close_game_select_btn").on('click', function (e) {
//
//        });

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
        $('#buttons').hide();
        $('#catchphrase').hide();

        if ($(this).attr('id') == 'easy_game') {
            setTimeout(function () {
                $("#slogan_game_easy").parent().css("z-index", "9999");
            }, 1000)
            setTimeout(function(){
                $('#tree').css('z-index',-1);
                $('#buttons').parent().css('z-index',-1);
            },2000);
            $('#slogan_game_easy').fadeIn();
            $('#sky').css('opacity','0');
            $('#slogan').fadeIn();
            $('#trigger_button').trigger('click');
            products_bookblock(easy_game_img_array,"bbEasy");
            Page.init();

            var colors = ["#ff0000", "#ffff00", "#0000ff", "#000000", "#008000", "#800080", "#ff6600", "#663300", "#ffffff", "#808080"];
            var correct = ["#ff0000", "#ffff00", "#0000ff", "#000000"];
            var correct_color = [];

            $('#do').click(function () {
                $('#do_text').show();
                $('#do_text').css("color", colors[c1_easy]);
                if (colors[c1_easy] == "#ff0000") {
                    $('#do_text').addClass("Red");
                    correct_color.push("Red");
                }
                else {
                    $('#do_text').removeClass("Red");
                }

                c1_easy++;

                if (c1_easy == colors.length) {
                    c1_easy = 0;
                }
                matching_colors_easy();

            });

            $('#it').click(function () {
                $('#it_text').show();
                $('#it_text').css("color", colors[c2_easy]);
                if (colors[c2_easy] == "#ffff00") {
                    $('#it_text').addClass("Yellow");
                    correct_color.push("Yellow");
                }
                else {
                    $('#it_text').removeClass("Yellow");
                }
                c2_easy++;

                if (c2_easy == colors.length) {
                    c2_easy = 0;
                }
                matching_colors_easy();
            });

            $('#with').click(function () {
                $('#with_text').show();
                $('#with_text').css("color", colors[c3_easy]);
                if (colors[c3_easy] == "#0000ff") {
                    $('#with_text').addClass("Blue");
                    correct_color.push("Blue");
                }
                else {
                    $('#with_text').removeClass("Blue");
                }
                c3_easy++;
                if (c3_easy == colors.length) {
                    c3_easy = 0;
                }
                matching_colors_easy();
            });

            $('#games').click(function () {
                $('#games_text').show();
                $('#games_text').css("color", colors[c4_easy]);
                if (colors[c4_easy] == "#000000") {
                    $('#games_text').addClass("Black");
                    correct_color.push("Black");
                }
                else {
                    $('#games_text').removeClass("Black");
                }
                c4_easy++;
                if (c4_easy == colors.length) {
                    c4_easy = 0;
                }
                matching_colors_easy();
            });

            function matching_colors_easy() {
                if (($('#do_text').hasClass('Red')) && ($('#it_text').hasClass('Yellow')) && ($('#with_text').hasClass('Blue')) && ($('#games_text').hasClass('Black'))) {
                    $('#do_text').show();
                    $('#it_text').show();
                    $('#with_text').show();
                    $('#games_text').show();
                    //$('#slogan_game').show();
                    $('#slogan_game_easy').hide();
                    $("#slogan_game").parent().css("z-index", "999999");
                    $('.spinner').unbind('click');
                    //products_bookblock(product_img_array,'gameWin');
                    //Page3.init()
                    $("#congModal").modal('show');
                    $("#menu").css({
                        'background':'',
                        'color':'white',
                        'z-index':'9999'})
                    $('#slogan').hide();
                    $('#catchphrase').show();

                    $('#do_text').removeClass("Red");
                    $('#it_text').removeClass("Yellow");
                    $('#with_text').removeClass("Blue");
                    $('#games_text').removeClass("Black");
                    setTimeout(function(){
                        $('#do_text').css('color','black');
                        $('#it_text').css('color','black');
                        $('#with_text').css('color','black');
                        $('#games_text').css('color','black');
                    },5000);


                }


            }
        }
        else if ($(this).attr('id') == 'hard_game') {
            $('#buttons').hide();
            $('#slogan_game_hard').fadeIn();
            $('#slogan').fadeIn();
            $('#sky').css('opacity','0');
            $('#slogan_game_wrapper_hard').css('width','95%');
            products_bookblock(hard_game_img_array,'bbHard')
            Page1.init1();
            $('#trigger_button').trigger('click');
            setTimeout(function(){
                $('#tree').css('z-index',-1);
                $('#buttons').parent().css('z-index',-1);
            },2000);
            var colors = ["#ff0000", "#ffff00", "#0000ff", "#000000", "#008000", "#800080", "#ff6600", "#663300", "#ffffff", "#808080"];
            var correct = ["#ff6600", "#808080", "#663300", "#008000"];
            var correct_color = [];

            $('#do').click(function () {
                $('#do_text').show();
                $('#do_text').css("color", colors[c1_hard]);
                if (colors[c1_hard] == "#ff6600") {
                    $('#do_text').addClass("Orange");
                    correct_color.push("Orange");
                }
                else {
                    $('#do_text').removeClass("Orange");
                }
                c1_hard++;
                if (c1_hard == colors.length) {
                    c1_hard = 0;
                }
                match_colors_hard();
            });

            $('#it').click(function () {
                $('#it_text').show();
                $('#it_text').css("color", colors[c2_hard]);
                if (colors[c2_hard] == "#808080") {
                    $('#it_text').addClass("Gray");
                    correct_color.push("Gray");
                }
                else {
                    $('#it_text').removeClass("Gray");
                }
                c2_hard++;

                if (c2_hard == colors.length) {
                    c2_hard = 0;
                }
                match_colors_hard();
            });

            $('#with').click(function () {
                $('#with_text').show();
                $('#with_text').css("color", colors[c3_hard]);
                if (colors[c3_hard] == "#663300") {
                    $('#with_text').addClass("Brown");
                    correct_color.push("Brown");
                }
                else {
                    $('#with_text').removeClass("Brown");
                }
                c3_hard++;
                if (c3_hard == colors.length) {
                    c3_hard = 0;
                }
                match_colors_hard();
            });

            $('#games').click(function () {
                $('#games_text').show();
                $('#games_text').css("color", colors[c4_hard]);
                if (colors[c4_hard] == "#008000") {
                    $('#games_text').addClass("Green");
                    correct_color.push("Green");
                }
                else {
                    $('#games_text').removeClass("Green");
                }
                c4_hard++;
                if (c4_hard == colors.length) {
                    c4_hard = 0;
                }
                match_colors_hard();
            });


            function match_colors_hard() {
                if (($('#do_text').hasClass('Orange')) && ($('#it_text').hasClass('Gray')) && ($('#with_text').hasClass('Brown')) && ($('#games_text').hasClass('Green'))) {
                    $('#do_text').show();
                    $('#it_text').show();
                    $('#with_text').show();
                    $('#games_text').show();
                    //$('#slogan_game').show();
                    $('#slogan_game_hard').hide();
                    $("#slogan_game").parent().css("z-index", "999999");
                    $('.spinner').unbind('click');
                    $("#congModal").modal('show');
                    $("#menu").css({
                        'background':'',
                        'color':'white',
                        'z-index':'9999'})

                    //products_bookblock(product_img_array,'gameWin');
                    //Page3.init()
                    $('#slogan').hide();
                    $('#catchphrase').show();

                    $('#do_text').removeClass("Orange");
                    $('#it_text').removeClass("Gray");
                    $('#with_text').removeClass("Brown");
                    $('#games_text').removeClass("Green");
                    setTimeout(function(){
                        $('#do_text').css('color','black');
                        $('#it_text').css('color','black');
                        $('#with_text').css('color','black');
                        $('#games_text').css('color','black');
                    },5000);

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
        }, 2500);


    });


    $('#logo_pic_image').click(function () {
        window.location.reload();
    });

    $('#confGameModeModal').on('hidden.bs.modal', function () {
        $("#buttons").parent().css('z-index', '99999');
        $("#buttons").show();
    });

    $('#congModal').on('shown.bs.modal', function () {
        $('#sky').css('opacity','0');
    });


    $('#congModal').on('hidden.bs.modal', function () {
        $("#tree").css('z-index','9999999');
        $('#sky').css('opacity','0.8');

    });



    function img_windy(img_array,text_array,name_array){
        var seplen=img_array.length;   //images array
        var carus = $('#wi-el');        //will append images to this element
        var imglist='';                    //we use this variable for optimization..

        for(var i=0;i<seplen;i++){
            imglist+='<li><img src="'+img_array[i]+'" alt="image'+[i+1]+'"/><h4>'+ name_array[i] +'</h4><p>'+text_array[i]+'</p></li>';    //add all images what we have (actually there 2 or 3 images)
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


    function products_bookblock(img_array,div_id){
        $('.bb-custom-wrapper>nav').css('z-index','9999');
        var seplen=img_array.length;   //images array
        var carus = $('#'+div_id);        //will append images to this element
        var imglist='';                    //we use this variable for optimization..
        if(div_id=="bookblockProduct"){
            for(var i=0;i<seplen;i++){
                imglist+='<div class="bb-item" style="display: block;"><a href="#"><img src="'+img_array[i]+'"/></a></div>';
            }
        }
        else if(div_id=="gameWin"){
            for(var i=0;i<seplen;i++){
                if (i>0){
                    imglist+='<a href="#" class="close_parallax_btn" onclick="window.location.reload()" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item"><a href="#"><img src="'+img_array[i]+'"/></a></div>';
                }
                else
                {
                    imglist+='<a href="#" class="close_parallax_btn" onclick="window.location.reload()" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item" style="display: block;"><a href="#"><img src="'+img_array[i]+'"/></a></div>';
                }

            }
        }
        else{
            for(var i=0;i<seplen;i++){
                if (i>0){
                    imglist+='<a href="#" class="close_parallax_btn" data-toggle="modal" data-target="#confModal" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item"><a href="#"><img src="'+img_array[i]+'"/></a></div>';
                }
                else
                {
                    imglist+='<a href="#" class="close_parallax_btn" data-toggle="modal" data-target="#confModal" style="pointer-events:auto;"><div class="close_parallax_btn_text">X</div></a><div class="bb-item" style="display: block;"><a href="#"><img src="'+img_array[i]+'"/></a></div>';
                }

            }
        }


        carus.html(imglist);

//        $('.close_parallax_btn').on('click', function(){
//            $("#try_it").trigger('click');
//        })

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
                shadowFlip:0.7,
                circular    : true
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
                shadowFlip:0.7,
                circular : true
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
                shadowFlip:0.7,
                circular    : true
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

function myFunction()
{
    var x;
    var r=confirm("Are you sure you want to wimp out? It’s not that tough…");
    if (r==true)
    {
        //x="You pressed OK!";
        window.location.reload()
    }
    else
    {
        //x="You pressed Cancel!";
    }
    //document.getElementById("demo").innerHTML=x;
}

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


