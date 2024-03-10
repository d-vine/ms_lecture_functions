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

function random_arguments() {
    var size = round(random(40,120));
    var margin = size / 2.0;
    var x = random(0 + margin, 400 - margin);
    var y = random(0 + margin, 400 - margin);
    var color = random_color();
    return [x, y, size, color];
}

function random_arguments_array(length) {
    var colors = [];
    for(var i = 0; i < length; i++) {
        colors.push(random_arguments());
    }
    return colors;
}

var args = random_arguments_array(8);

function draw() {
    background(255, 255, 255);
    smiley.apply(this, args[0]);
    smiley.apply(this, args[1]);
    smiley.apply(this, args[2]);
    smiley.apply(this, args[3]);
    stick_figure.apply(this, args[4]);
    stick_figure.apply(this, args[5]);
    stick_figure.apply(this, args[6]);
    stick_figure.apply(this, args[7]);
}
