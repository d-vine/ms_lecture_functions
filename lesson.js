function circle(x,y,diameter) {
    ellipse(x, y, diameter, diameter);
}

function smiley_eye(x,y, size) {
    fill(255, 255, 255);
    circle(x, y, size * 0.2);
    fill(0,0,0);
    circle(x, y, size * 0.05);
}

function smiley(x, y, size) {
    fill(230, 230, 0);
    circle(x, y, size);
    smiley_eye(x - size * 0.2, y - size * 0.1, size);
    smiley_eye(x + size * 0.2, y - size * 0.1, size);
    smiley_eye(x, y - size * 0.3, size);
    noFill();
    arc(x, y + size * 0.1, size * 0.6, size * 0.4, 0, 180);
}

function stick_figure(x, y, size) {
    circle(x, y - size * 0.5, size * 0.3);
    line(x, y - size * 0.35, x , y + size * 0.05);
    line(x, y + size * 0.05, x - size * 0.25, y + size * 0.4);
    line(x, y + size * 0.05, x + size * 0.25, y + size * 0.4);
    line(x, y - size * 0.2, x + size * 0.25, y - size * 0.4);
    line(x, y - size * 0.2, x - size * 0.25, y - size * 0.4);
}

function draw() {
    background(255, 255, 255);
    smiley(50, 50, 100);
    smiley(150, 150, 90);
    smiley(250, 250, 80);
    smiley(350, 350, 70);
    stick_figure(233, 73, 100);
    stick_figure(353, 183, 90);
    stick_figure(58, 202, 80);
    stick_figure(177, 348, 70);
}