function circle(x,y,diameter) {
    ellipse(x, y, diameter, diameter);
}

function smiley_eye(x,y, size) {
    fill(255, 255, 255);
    circle(x, y, size * 0.2);
    fill(0,0,0);
    circle(x, y, size * 0.05);
}

function smiley(x, y, size, bg_color) {
    fill(bg_color);
    circle(x, y, size);
    smiley_eye(x - size * 0.2, y - size * 0.1, size);
    smiley_eye(x + size * 0.2, y - size * 0.1, size);
    smiley_eye(x, y - size * 0.3, size);
    noFill();
    arc(x, y + size * 0.1, size * 0.6, size * 0.4, 0, 180);
}

function stick_figure(x, y, size, face_color) {
    smiley(x, y - size * 0.5, size * 0.3, face_color);
    line(x, y - size * 0.35, x , y + size * 0.05);
    line(x, y + size * 0.05, x - size * 0.25, y + size * 0.4);
    line(x, y + size * 0.05, x + size * 0.25, y + size * 0.4);
    line(x, y - size * 0.2, x + size * 0.25, y - size * 0.4);
    line(x, y - size * 0.2, x - size * 0.25, y - size * 0.4);
}

function random_color() {
    var r = round(random(100,255)),
        g = round(random(100,255)),
        b = round(random(100,255));
    return color(r, g, b);
}

function random_color_array(length) {
    var colors = [];
    for(var i = 0; i < length; i++) {
        colors.push(random_color());
    }
    return colors;
}

var smiley_color_array = random_color_array(8);

function draw() {
    background(255, 255, 255);
    smiley(50, 50, 100, smiley_color_array[0]);
    smiley(150, 150, 90, smiley_color_array[1]);
    smiley(250, 250, 80, smiley_color_array[2]);
    smiley(350, 350, 70, smiley_color_array[3]);
    stick_figure(233, 73, 100, smiley_color_array[4]);
    stick_figure(353, 183, 90, smiley_color_array[5]);
    stick_figure(58, 202, 80, smiley_color_array[6]);
    stick_figure(177, 348, 70, smiley_color_array[7]);
}
