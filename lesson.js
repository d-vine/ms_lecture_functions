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
    circle(x + 100, y + 100, 100);
    smiley_eye(x + 80, y + 90);
    smiley_eye(x + 120, y + 90);
    smiley_eye(x +100, y + 70);
    noFill();
    arc(x + 100, y + 110, 60, 40, 0, 180);
}

function stick_figure(x, y) {
    circle(x + 300, y + 100, 30);
    line(x + 300,y + 115,x + 300,y + 155);
    line(x + 300,y + 155,x + 275,y + 190);
    line(x + 300,y + 155,x + 325,y + 190);
    line(x + 300,y + 130,x + 325,y + 110);
    line(x + 300,y + 130,x + 275,y + 110);
}

function draw() {
    background(255, 255, 255);
    smiley(0, 0);
    stick_figure(0, 0);
}