let state = true; // false = pause, true = pomodoro
let button_start;
let start_time;
let launching = true;

const PAUSE_DURATION = 5; // in minutes
const POMODORO_DURATION = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont('Baskerville');
  button_start = new createMyButton('START', width/2, height/2, 200, 100, color(70, 190, 255), color(50, 170, 255));

  background(60, 170, 227); // blue
}


function draw() {

  if (!launching) {

    if (state) {
      if (display(POMODORO_DURATION, color(87, 223, 101))) {
        state = !state;
        start_time = millis();
      }
      textSize(100);
      text("Time to work !", width/2, height*5/7);
    }

    else {
      if (display(PAUSE_DURATION, color(244, 109, 76))) {
        state = !state;
        tart_time = millis();
      }
      textSize(100);
      text("Take a break !", width/2, height*5/7);
    }
  }

  else {
    button_start.show();
  }
}


function display(time, col) {
  background(col);

  let remaining_time = int( ( time*60*1000 - (millis() - start_time) ) /1000 )
  let remaining_m = int( remaining_time/60 );
  let remaining_s = remaining_time - remaining_m*60;

  let remaining_m_string = String(remaining_m);
  if (remaining_m < 10) { remaining_m_string = "0" + remaining_m_string; }

  let remaining_s_string = String(remaining_s);
  if (remaining_s < 10) { remaining_s_string = "0" + remaining_s_string; }

  let remaining_time_string = remaining_m_string + ":" + remaining_s_string;

  let pourcent = map( (time*60*1000 - (millis() - start_time)) /1000, 0, time*60, width, 0);
  push();
    fill(0, 50);
    rectMode(CORNER);
    rect(0,0, pourcent, height);
  pop();

  if (remaining_time <= 10) { fill('YELLOW'); }
  else { fill(255); }
  textSize(300);
  text(remaining_time_string, width/2, height/2);

  return (remaining_time <= 0);
}


function createMyButton(label, xpos, ypos, w, h, cNC, cC) {
  this.label = label;
  this.x = xpos;
  this.y = ypos;
  this.w = w;
  this.h = h;
  this.colorNC = cNC;
  this.colorC = cC;
  this.clicked = false;

  this.show = function() {
    noStroke();
    if (!this.clicked) { fill(this.colorNC); }
    else { fill(this.colorC); }
    rect(this.x, this.y, this.w, this.h);
    fill(255);
    textSize(50);
    text(label, this.x, this.y);
  }

  this.click = function() {
    if (mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && this.y + this.h/2) {
      this.clicked = true;
      launching = false;
      start_time = millis();
    }
  }
}

function mousePressed() {
  if (launching) {
    button_start.click();
  }
}

function mouseReleased() {
  if (launching) {
    button_start.clicked = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
