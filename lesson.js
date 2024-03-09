function circle(x,y,diameter) {
    ellipse(x, y, diameter, diameter);
}

function draw() {
    background(255, 255, 255);

    //smiley
    fill(230, 230, 0);
    circle(100, 100, 100);
    fill(255, 255, 255);
    circle(80, 90, 20);
    circle(120, 90, 20);
    fill(0,0,0);
    circle(80, 90, 5);
    circle(120, 90, 5);
    noFill();
    arc(100, 110, 60, 40, 0, 180);

    //stick figure
    circle(300, 100, 30);
    line(300,115,300,155);
    line(300,155,275,190);
    line(300,155,325,190);
    line(300,130,325,110);
    line(300,130,275,110);
}