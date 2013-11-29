var score = 0;
var answered = false;
var this_class;
var loader;
var $topLoader, topLoaderRunning;
var total_sections;
var pos_count = 0;
var inactivesection = 0;
var score1, score2, score3;
var gm_ovr=false;

$(function () {
    load_db();
    start_sim();
});


function scoring() {
    if(!gm_ovr){
    $('.correct').each(function (index, ele) {

        if ($(ele).hasClass('selected') && myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == ('correct')) {
            score = score + 0;
            input[index] = 1;

        } else if ($(ele).hasClass('selected') && myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == ('incorrect')) {
            score = score + 1;
            input[index] = 1;
        } else if (!$(ele).hasClass('selected') && myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == ('correct')) {
            score = score + 1;
            input[index] = 1;
        } else if (!$(ele).hasClass('selected') && myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == ('incorrect')) {
            score = score + 0;
            input[index] = 1;
        }
    });

    score1 = score - inactivesection;
    score2 = total_sections - inactivesection;
    score3 = score1/score2

    $('.knob').show();
    $('.knob').each(function () {

        var $this = $(this);
        //var myVal = $this.attr("rel");
        var myVal = score3*100;
        $this.knob({
            width: '120',
            height: '120',
            fgColor: '#569279',
            readOnly:true
        });




        $({
            value: 0
        }).animate({

                value: myVal
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');

                }
            })

    });

    review(input, new_data);
    gm_ovr=true;
    }
}

function review(in1, nd) {
    answered = true;
    var reason;
    $('.correct').each(function (index, ele) {
        if (nd.charAt(index) == 'P') {
            $(ele).empty();
            $(ele).css("background-color", "#569279");
            $(ele).css("opacity", "0.65");
            //$(ele).css('filter','alpha(opacity='+50+')');
            reason = "This section is correct";
        }
        else {
            switch (nd.charAt(index)) {
                case "G":
                {
                    reason = "Grammar Error.";
                    break;
                }
                case "J":
                {
                    reason = "Jargon Error.";
                    break;
                }
                case "L":
                {
                    reason = "Too Long.";
                    break;
                }
                case "N":
                {
                    reason = "Can't be there.";
                    break;
                }
                case "U":
                {
                    reason = "Unprofessional.";
                    break;
                }
            }
            $(ele).empty();
            $(ele).css("background-color", "#CB473A");
            $(ele).css("opacity", "0.65");
            //$(ele).css('filter','alpha(opacity='+50+')');
        }
        if (in1[index] == 1) {
            $(ele).append('<img src="images/nilesh/thumbsup.gif" style="display: none; height:34px;max-height: 32px; margin-left: 36px;" alt="' + reason + '">');
        }
        else {
            $(ele).append('<img src="images/nilesh/thumbsdown.gif" style="display: none; height:34px;max-height: 32px; margin-left: 36px;" alt="' + reason + '">');
        }
        $(ele).hover(
            function () {
                $('.next_doc>a').html($(this).find('img').attr('alt'));
            },
            function () {
                $('.next_doc>a').html("Click here to go ahead");
            }
        );
        $(ele).on('click', function(){
            $(".instructionbox").css({
                'border': '1px solid green'
            });
            $("#ans").text("");

            if ( ($(ele).hasClass("selected")) && (myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == 'correct') ) {
                this_class = "You have selected this section. However"
            }
            else if ( ($(ele).hasClass("selected")) && (myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == 'incorrect') ) {
                this_class = "Well done! You have selected this section correctly."
            }
            else if ( (!$(ele).hasClass("selected")) && (myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == 'correct') ) {
                this_class = "Well done! You have not selected this section."
            }
            else if ( (!$(ele).hasClass("selected")) && (myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields[index].Field.data == 'incorrect') ) {
                this_class = "You missed this error."
            }

            else {
                this_class = "You have not selected"
            }
            $("#ans").text(this_class + " " + $(ele).find('img').attr('alt'));
        })

    });
}

function disp(this_obj) {
    if (answered == false) {
        //$(this_obj).addClass("selected");
        if ($(this_obj).hasClass("incorrect")) {
            $(this_obj).removeClass('selected');
            $(this_obj).find('img').empty().remove();
            $(this_obj).removeClass('incorrect');
            $(this_obj).css('opacity',1.0);
        }
        else {
            $(this_obj).addClass("selected");
            $(this_obj).addClass('incorrect');
            $(this_obj).append('<img src="assets/images/errormarker.png" style="height: 30px; position: absolute; right:0px; top:0px; opacity: 1;">');
            $(this_obj).css('background','none');
            $(this_obj).css('opacity',1.0);
            $(this_obj).css('background-size', '16px 16px');
            $(this_obj).css('background-repeat', 'no-repeat');
        }
    }
}

function time_decrement() {
    $(".timecountertext").text(parseInt($(".timecountertext").text()) - 1);
    if ($(".timecountertext").text() != 0) {
        setTimeout(time_decrement, 1000);
    }
    else {

    }

}
function start_sim() {

    $('#form').append('<img style="width:100%;" src=' + myJSONObject[image_list.indexOf(new_image_copied)].Form.name + '>');
        $('#form').fadeIn();

        var input = myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields;
        $.each(input, function (index, value) {
            $('#form').append('<div class="correct" onclick="disp($(this)); " style="position:absolute;background: #FFF;opacity:0.0; filter:alpha(opacity=0); font-size:11px;top:' + value.Field.top + 'px;left:' + value.Field.left + 'px;height:' + value.Field.height + 'px;width:' + value.Field.width + 'px;" >.</div>');
        });

    total_sections = myJSONObject[image_list.indexOf(new_image_copied)].Form.Fields.length;

    $(".correct").each(function() {
        if ($(this).position().top==0){
            inactivesection= inactivesection + 1;
        }
    });


}