import { UNIT } from "pages/Paint";
import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import Shape from "../Shape";

const handleFirstClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  if (!shape) {
    state.setDrawing(true);
    state.setCurrent({ x, y });
    state.setShapes((prv) => [...prv, new Shape({ x, y })]);
  }
};
let p = 360 / 10;

function calcX(x1, x2, y1, y2) {
  if (y1 < y2) {
    return (
      x1 +
      Math.cos(
        (p / 180) * Math.PI -
          Math.acos(
            (x1 - x2) / Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
          )
      ) *
        Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
    );
  } else {
    if (x1 > x2) {
      return (
        x1 -
        Math.sin(
          (p / 180) * Math.PI -
            Math.acos(
              (y1 - y2) / Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2))
            )
        ) *
          Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
      );
      //ymshi
    } else {
      return (
        x1 -
        Math.cos(
          (p / 180) * Math.PI -
            Math.acos(
              (x2 - x1) / Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
            )
        ) *
          Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
      );
    }
  }
}
function calcY(x1, x2, y1, y2) {
  if (y1 < y2) {
    return (
      y1 +
      Math.sin(
        (p / 180) * Math.PI -
          Math.acos(
            (x1 - x2) / Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
          )
      ) *
        Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
    );
  } else {
    if (x1 > x2) {
      return (
        y1 +
        Math.cos(
          (p / 180) * Math.PI -
            Math.acos(
              (y1 - y2) / Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2))
            )
        ) *
          Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
      );
      //ymshi
    } else {
      return (
        y1 -
        Math.sin(
          (p / 180) * Math.PI -
            Math.acos(
              (x2 - x1) / Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
            )
        ) *
          Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
      );
    }
  }
}
export const handleMouseMove = (event, state) => {
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  const point1 = { x: state.current.x, y: state.current.y };
  const point2 = { x, y };
  let xpoint3 = calcX(x, state.current.x, y, state.current.y);
  let ypoint3 = calcY(x, state.current.x, y, state.current.y);
  const point3 = { x: xpoint3, y: ypoint3 };
  let xpoint4 = calcX(xpoint3, x, ypoint3, y);
  let ypoint4 = calcY(xpoint3, x, ypoint3, y);
  const point4 = { x: xpoint4, y: ypoint4 };
  let xpoint5 = calcX(xpoint4, xpoint3, ypoint4, ypoint3);
  let ypoint5 = calcY(xpoint4, xpoint3, ypoint4, ypoint3);
  const point5 = { x: xpoint5, y: ypoint5 };
  let xpoint6 = calcX(xpoint5, xpoint4, ypoint5, ypoint4);
  let ypoint6 = calcY(xpoint5, xpoint4, ypoint5, ypoint4);
  const point6 = { x: xpoint6, y: ypoint6 };
  let xpoint7 = calcX(xpoint6, xpoint5, ypoint6, ypoint5);
  let ypoint7 = calcY(xpoint6, xpoint5, ypoint6, ypoint5);
  const point7 = { x: xpoint7, y: ypoint7 };
  let xpoint8 = calcX(xpoint7, xpoint6, ypoint7, ypoint6);
  let ypoint8 = calcY(xpoint7, xpoint6, ypoint7, ypoint6);
  const point8 = { x: xpoint8, y: ypoint8 };
  let xpoint9 = calcX(xpoint8, xpoint7, ypoint8, ypoint7);
  let ypoint9 = calcY(xpoint8, xpoint7, ypoint8, ypoint7);
  const point9 = { x: xpoint9, y: ypoint9 };
  let xpoint10 = calcX(xpoint9, xpoint8, ypoint9, ypoint8);
  let ypoint10 = calcY(xpoint9, xpoint8, ypoint9, ypoint8);
  const point10 = { x: xpoint10, y: ypoint10 };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
    point10,
    point1,
  ];
  state.setLine({ x, y });
};
const handleSecondClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const point1 = getGridPos(state.current.x, state.current.y, UNIT);
  const point2 = { x, y };
  let xpoint3 = calcX(x, state.current.x, y, state.current.y);
  let ypoint3 = calcY(x, state.current.x, y, state.current.y);
  const point3 = { x: xpoint3, y: ypoint3 };
  let xpoint4 = calcX(xpoint3, x, ypoint3, y);
  let ypoint4 = calcY(xpoint3, x, ypoint3, y);
  const point4 = { x: xpoint4, y: ypoint4 };
  let xpoint5 = calcX(xpoint4, xpoint3, ypoint4, ypoint3);
  let ypoint5 = calcY(xpoint4, xpoint3, ypoint4, ypoint3);
  const point5 = { x: xpoint5, y: ypoint5 };
  let xpoint6 = calcX(xpoint5, xpoint4, ypoint5, ypoint4);
  let ypoint6 = calcY(xpoint5, xpoint4, ypoint5, ypoint4);
  const point6 = { x: xpoint6, y: ypoint6 };
  let xpoint7 = calcX(xpoint6, xpoint5, ypoint6, ypoint5);
  let ypoint7 = calcY(xpoint6, xpoint5, ypoint6, ypoint5);
  const point7 = { x: xpoint7, y: ypoint7 };
  let xpoint8 = calcX(xpoint7, xpoint6, ypoint7, ypoint6);
  let ypoint8 = calcY(xpoint7, xpoint6, ypoint7, ypoint6);
  const point8 = { x: xpoint8, y: ypoint8 };
  let xpoint9 = calcX(xpoint8, xpoint7, ypoint8, ypoint7);
  let ypoint9 = calcY(xpoint8, xpoint7, ypoint8, ypoint7);
  const point9 = { x: xpoint9, y: ypoint9 };
  let xpoint10 = calcX(xpoint9, xpoint8, ypoint9, ypoint8);
  let ypoint10 = calcY(xpoint9, xpoint8, ypoint9, ypoint8);
  const point10 = { x: xpoint10, y: ypoint10 };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
    point10,
    point1,
  ];
  state.setDrawing(false);
};
export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
