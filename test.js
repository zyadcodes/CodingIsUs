const express = require("express");
const robot = require("robotjs");
const router = express.Router();

// This function will halt the program for the amount of milliseconds specified
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const typeKey = async () => {
  await sleep(1000);
  for (let i = 0; i <= 9; i++) {
    for (let k = 0; k <= 9; k++) {
      for (let j = 0; j <= 9; j++) {
        for (let b = 0; b <= 9; b++) {
          let code = "" + i + k + j + b;
          robot.typeString("El Yacoubi");
          robot.keyTap("tab");
          robot.typeString("02/15/2003");
          robot.keyTap("tab");
          robot.typeString(code);
          robot.keyTap("tab");
          robot.keyTap("enter");
          await sleep(3000);
          robot.moveMouse(25, 55);
          robot.mouseClick("left", false);
        }
      }
    }
  }
};

typeKey();
