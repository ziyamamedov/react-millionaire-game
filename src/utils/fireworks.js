import { Fireworks } from "fireworks-js";
import explosion0 from "../sounds/test_explosion0.mp3";
import explosion1 from "../sounds/test_explosion1.mp3";
import explosion2 from "../sounds/test_explosion2.mp3";

export const createFireworks = (element) => {
  const container = element.current;
  const fireworks = new Fireworks({
    target: container,
    hue: 120,
    startDelay: 1,
    minDelay: 20,
    maxDelay: 30,
    speed: 4,
    acceleration: 1.05,
    friction: 0.98,
    gravity: 1,
    particles: 75,
    trace: 3,
    explosion: 5,
    boundaries: {
      top: 50,
      bottom: container.clientHeight,
      left: 50,
      right: container.clientWidth,
    },
    sound: {
      enable: true,
      list: [explosion0, explosion1, explosion2],
      min: 4,
      max: 8,
    },
  });

  return fireworks;
};
