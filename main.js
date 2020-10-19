var canvas = new fabric.Canvas('myCanvas');
block_img_width = 30,
block_img_height = 30;
player_x = 10;
player_y = 10;
var player_show = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_show = Img;
        player_show.scaleToWidth(150);
        player_show.scaleToWidth(140);
        player_show.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_show);
    });
}

var block_img_object = "";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(30);
        block_img_object.scaleToWidth(30);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("go big or go home");
        block_img_width = block_img_width + 5;
        block_img_height = block_img_height + 5;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("small_blok.exe");
        block_img_height = block_img_height - 5;
        block_img_width = block_img_width - 5;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerhtml = block_img_height;

    }

    if (keyPressed == '38'){
        up();
        console.log("up");
    }

    if (keyPressed == '40'){
        down();
        console.log("down");
    }

    if (keyPressed == '37'){
        left();
        console.log("left");
    }

    if (keyPressed == '39'){
        right();
        console.log("right");
    }

    if (keyPressed == '87'){
        new_image('wall.jpg');
    }

    if (keyPressed == '71'){
        new_image('ground.png');
    }

    if (keyPressed == '76'){
        new_image('light_green.png');
    }

    if (keyPressed == '84'){
        new_image('trunk.jpg');
    }

    if (keyPressed == '78'){
        new_image('netherrack.jpg');
    }

    if (keyPressed == '89'){
        new_image('yellow_wall.png');
    }

    if (keyPressed == '68'){
        new_image('dark_green.png');
    }

    if (keyPressed == '71'){
        new_image('glowstone.png');
    }

    if (keyPressed == '67'){
        new_image('cloud.jpg');
        console.log("cloud")                                                          
    }                                              
}

function up(){
    if (player_y>0){
        player_y = player_y - block_img_height;
        canvas.remove(player_show);
        player_update();
    }
}

function down(){
    if (player_y<=500){
        player_y = player_y + block_img_height;
        canvas.remove(player_show);
        player_update();
    }
}

function left(){
    if (player_x>0){
        player_x = player_x - block_img_width;
        canvas.remove(player_show);
        player_update();
    }
}

function right(){
    if (player_x<=950){
        player_x = player_x + block_img_width;
        canvas.remove(player_show);
        player_update();
    }
}




