const oscillator = o => {
  const FRAMERATE = 35;

  o.setup = () => {
    o.createCanvas(o.displayWidth, o.displayHeight * 0.9);
    o.angleMode(o.DEGREES);
    o.frameRate(FRAMERATE);
    console.log(o.width, o.height);
  };

  o.traceCircle = (h, k, rad, sec, draw = false) => {
    // draws points around a circle in sec seconds
    // returns the coordinates of the last point drawn
    const CURRENT_ANGLE = o.map(o.frameCount, 0, FRAMERATE * sec, 0, 360);
    const CURRENT_X = h + o.cos(CURRENT_ANGLE) * rad;
    const CURRENT_Y = k + o.sin(CURRENT_ANGLE) * rad;
    if (draw) {
      o.ellipse(CURRENT_X, CURRENT_Y, 7);
    }
    return [CURRENT_X, CURRENT_Y];
  };

  o.tracePretzel1 = (h, k, rad, sec, draw = false) => {
    const CURRENT_ANGLE = o.map(o.frameCount, 0, FRAMERATE * sec, 0, 360);
    const CURRENT_X = h + o.sin(CURRENT_ANGLE / 4) * rad;
    const CURRENT_Y = k + o.cos(CURRENT_ANGLE / 3) * rad;
    if (draw) {
      o.ellipse(CURRENT_X, CURRENT_Y, 7);
    }
    return [CURRENT_X, CURRENT_Y];
  };

  o.tracePretzel2 = (h, k, rad, sec, draw = false) => {
    const CURRENT_ANGLE = o.map(o.frameCount, 0, FRAMERATE * sec, 0, 360);
    const CURRENT_X = h + o.sin(CURRENT_ANGLE / 3) * rad * 0.5;
    const CURRENT_Y = k + o.cos(CURRENT_ANGLE / 3) * rad;
    if (draw) {
      o.ellipse(CURRENT_X, CURRENT_Y, 7);
    }
    return [CURRENT_X, CURRENT_Y];
  };

  o.draw = () => {
    o.background(10, 9);
    const circle1Cords = o.traceCircle(
      o.width / 2.2,
      o.height / 1.2,
      o.height / 1.6,
      10
    );
    const circle2Cords = o.traceCircle(
      o.width / 1.3,
      o.height / 2,
      o.height / 1.5,
      8
    );
    const pretzel1Cords = o.tracePretzel1(
      o.width / 1.7,
      o.height / 2,
      o.width / 3,
      3
    );
    const pretzel2Cords = o.tracePretzel2(
      o.width / 2,
      o.height / 2,
      o.width / 2.1,
      4
    );
    o.strokeWeight(1);
    o.noFill();
    o.stroke(133, 35, 168);
    o.bezier(
      circle1Cords[0],
      circle1Cords[1],
      pretzel1Cords[0],
      pretzel1Cords[1],
      circle2Cords[0],
      circle2Cords[1],
      pretzel2Cords[0],
      pretzel2Cords[1]
    );
  };
};

const oscillatorp5 = new p5(oscillator);
