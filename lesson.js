function circle(x,y,diameter) {
    ellipse(x, y, diameter, diameter);
}

function smiley_eye(x,y) {
    fill(255, 255, 255);
    circle(x, y, 20);
    fill(0,0,0);
    circle(x, y, 5);
}

function smiley(x, y) {
    fill(230, 230, 0);
    circle(x, y, 100);
    smiley_eye(x - 20, y - 10);
    smiley_eye(x + 20, y - 10);
    smiley_eye(x, y - 30);
    noFill();
    arc(x, y + 10, 60, 40, 0, 180);
}

function stick_figure(x, y) {
    circle(x, y - 50, 30);
    line(x, y - 35, x , y + 5);
    line(x, y + 5, x - 25, y + 40);
    line(x, y + 5, x + 25, y + 40);
    line(x, y - 20, x + 25, y - 40);
    line(x, y - 20, x - 25, y - 40);
}

function draw() {
    background(255, 255, 255);
    smiley(50, 50);
    smiley(150, 150);
    smiley(250, 250);
    smiley(350, 350);
    stick_figure(233, 73);
    stick_figure(353, 183);
    stick_figure(58, 202);
    stick_figure(177, 348);
}