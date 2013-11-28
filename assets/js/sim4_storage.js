//global varriable which basically comes from controller

var image_list = ["assets/images/page1_PUPJPPPPPL.jpg", "assets/images/page1_PUPPUPPNNP.jpg", "assets/images/page1_UPNPPPPNPL.jpg", "assets/images/page1_UPNUGPPPPL.jpg", "assets/images/page1_UPPUGGPPPP.jpg"];
var input = [];
var new_data;
var new_image_copied;
var myJSONObject = [
    {"Form": {
        "name": "assets/images/page1_PUPJPPPPPL.jpg",
        "Fields": [
            {"Field": {"data": "EMAIL", "top": "64", "left": "464", "height": "25", "width": "142"}},
            {"Field": {"data": "NAME", "top": "100", "left": "258", "height": "42", "width": "260"}},
            {"Field":{"data":"IMAGE","top":"0","left":"0","height":"0","width":"0"}},
            {"Field": {"data": "OBJ", "top": "150", "left": "80", "height": "123", "width": "614"}},
            {"Field": {"data": "PA", "top": "290", "left": "80", "height": "350", "width": "614"}},
            {"Field": {"data": "EH", "top": "656", "left": "80", "height": "95", "width": "614"}},
            {"Field": {"data": "EDU", "top": "786", "left": "80", "height": "90", "width": "614"}},
            {"Field":{"data":"REF","top":"0","left":"0","height":"0","width":"0"}},
            {"Field":{"data":"HOBBIES","top":"0","left":"0","height":"0","width":"0"}},
            {"Field": {"data": "PGNO", "top": "894", "left": "683", "height": "30", "width": "75"}}
        ]
    }
    },
    {"Form": {
        "name": "assets/images/page1_PUPPUPPNNP.jpg",
        "Fields": [
            {"Field": {"data": "EMAIL", "top": "64", "left": "484", "height": "25", "width": "104"}},
            {"Field": {"data": "NAME", "top": "100", "left": "258", "height": "42", "width": "260"}},
            {"Field":{"data":"IMAGE","top":"0","left":"0","height":"0","width":"0"}},
            {"Field": {"data": "OBJ", "top": "150", "left": "80", "height": "88", "width": "614"}},
            {"Field": {"data": "PA", "top": "256", "left": "80", "height": "350", "width": "614"}},
            {"Field": {"data": "EH", "top": "619", "left": "80", "height": "86", "width": "614"}},
            {"Field": {"data": "EDU", "top": "715", "left": "80", "height": "80", "width": "614"}},
            {"Field": {"data": "REF", "top": "803", "left": "80", "height": "72", "width": "614"}},
            {"Field": {"data": "HOBBIES", "top": "890", "left": "80", "height": "73", "width": "614"}},
            {"Field":{"data":"PGNO","top":"0","left":"0","height":"0","width":"0"}}
        ]
    }
    },
    {"Form": {
        "name": "assets/images/page1_UPNPPPPNPL.jpg",
        "Fields": [
            {"Field": {"data": "EMAIL", "top": "64", "left": "461", "height": "25", "width": "148"}},
            {"Field": {"data": "NAME", "top": "100", "left": "258", "height": "42", "width": "260"}},
            {"Field": {"data": "IMAGE", "top": "151", "left": "92", "height": "138", "width": "143"}},
            {"Field": {"data": "OBJ", "top": "300", "left": "80", "height": "86", "width": "614"}},
            {"Field": {"data": "PA", "top": "402", "left": "80", "height": "350", "width": "614"}},
            {"Field": {"data": "EH", "top": "774", "left": "80", "height": "88", "width": "614"}},
            {"Field": {"data": "EDU", "top": "904", "left": "80", "height": "80", "width": "614"}},
            {"Field": {"data": "REF", "top": "994", "left": "80", "height": "72", "width": "614"}},
            {"Field":{"data":"HOBBIES","top":"0","left":"0","height":"0","width":"0"}},
            {"Field":{"data":"PGNO","top":"0","left":"0","height":"0","width":"0"}}
        ]
    }
    },
    {"Form": {
        "name": "assets/images/page1_UPNUGPPPPL.jpg",
        "Fields": [
            {"Field": {"data": "EMAIL", "top": "64", "left": "470", "height": "25", "width": "130"}},
            {"Field": {"data": "NAME", "top": "100", "left": "258", "height": "42", "width": "260"}},
            {"Field": {"data": "IMAGE", "top": "151", "left": "92", "height": "138", "width": "143"}},
            {"Field": {"data": "OBJ", "top": "300", "left": "80", "height": "308", "width": "614"}},
            {"Field": {"data": "PA", "top": "626", "left": "80", "height": "350", "width": "614"}},
            {"Field": {"data": "EH", "top": "994", "left": "80", "height": "88", "width": "614"}},
            {"Field":{"data":"EDU","top":"0","left":"0","height":"0","width":"0"}},
            {"Field":{"data":"REF","top":"0","left":"0","height":"0","width":"0"}},
            {"Field":{"data":"HOBBIES","top":"0","left":"0","height":"0","width":"0"}},
            {"Field": {"data": "PGNO", "top": "1086", "left": "617", "height": "30", "width": "75"}}
        ]
    }
    },
    {"Form": {
        "name": "assets/images/page1_UPPUGGPPPP.jpg",
        "Fields": [
            {"Field": {"data": "EMAIL", "top": "64", "left": "456", "height": "25", "width": "160"}},
            {"Field": {"data": "NAME", "top": "100", "left": "258", "height": "42", "width": "260"}},
            {"Field":{"data":"IMAGE","top":"0","left":"0","height":"0","width":"0"}},
            {"Field": {"data": "OBJ", "top": "150", "left": "80", "height": "82", "width": "614"}},
            {"Field": {"data": "PA", "top": "252", "left": "80", "height": "350", "width": "614"}},
            {"Field": {"data": "EH", "top": "622", "left": "80", "height": "84", "width": "614"}},
            {"Field": {"data": "EDU", "top": "716", "left": "80", "height": "80", "width": "614"}},
            {"Field":{"data":"REF","top":"0","left":"0","height":"0","width":"0"}},
            {"Field":{"data":"HOBBIES","top":"0","left":"0","height":"0","width":"0"}},
            {"Field":{"data":"PGNO","top":"0","left":"0","height":"0","width":"0"}}
        ]
    }
    }
];

function load_db() {
    var new_image = image_list[Math.floor(Math.random() * image_list.length)];

    new_image_copied = new_image;
    new_data = new_image.replace("assets/images/page1_", '').replace('.jpg', '').replace('.gif', '').replace('.png', '');

    var input = myJSONObject[image_list.indexOf(new_image)].Form.Fields;
    myJSONObject[image_list.indexOf(new_image)].Form.name = new_image;

    $.each(input, function (index, value) {
        if (new_data[index] == "P") {
            value.Field.data = "correct";
        }
        else {
            value.Field.data = "incorrect";
        }
    });
}




