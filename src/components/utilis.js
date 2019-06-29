import { useEffect, useRef } from "react";
import {BOX_HEIGHT, BOX_WIDTH} from "./consts";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const availSpaceY = window.innerHeight - BOX_HEIGHT;
const availSpaceX = window.innerWidth - BOX_WIDTH;
export const getX = () => Math.round(Math.random() * availSpaceY);
export const getY = () => Math.round(Math.random() * availSpaceX);
