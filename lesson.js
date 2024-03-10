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
    var sprite = round(random(0,1)) === 0 ? 'smiley' : 'stickfigure'; 
    return [sprite, x, y, size, color];
}

function random_arguments_array(length) {
    var args = [];
    for(var i = 0; i < length; i++) {
        args.push(random_arguments());
    }
    return args;
}

function draw_random_sprite(args) {
    if (args[0] === 'smiley') {
        smiley.apply(this, args.slice(1));
    } else {
        stick_figure.apply(this, args.slice(1));
    }
}

var args = random_arguments_array(10);

function draw() {
    background(255, 255, 255);
    for (var i in args) {
        draw_random_sprite(args[i]);
    }
}
