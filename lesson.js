var smiley_x = 0,
    smiley_y = 0,
    stick_x = 0,
    stick_y = 0;

function circle(x,y,diameter) {
    ellipse(x, y, diameter, diameter);
}

function smiley_eye(x,y) {
    fill(255, 255, 255);
    circle(x, y, 20);
    fill(0,0,0);
    circle(x, y, 5);
}

function draw() {
    background(255, 255, 255);
    
    //smiley
    fill(230, 230, 0);
    circle(smiley_x + 100, smiley_y + 100, 100);
    smiley_eye(smiley_x + 80, smiley_y + 90);
    smiley_eye(smiley_x + 120, smiley_y + 90);
    smiley_eye(smiley_x +100, smiley_y + 70);

    noFill();
    arc(smiley_x + 100, smiley_y + 110, 60, 40, 0, 180);

    //stick figure
    circle(stick_x + 300, stick_y + 100, 30);
    line(stick_x + 300,stick_y + 115,stick_x + 300,stick_y + 155);
    line(stick_x + 300,stick_y + 155,stick_x + 275,stick_y + 190);
    line(stick_x + 300,stick_y + 155,stick_x + 325,stick_y + 190);
    line(stick_x + 300,stick_y + 130,stick_x + 325,stick_y + 110);
    line(stick_x + 300,stick_y + 130,stick_x + 275,stick_y + 110);
}