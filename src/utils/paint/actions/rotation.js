import { getGridPos, getMousePos } from "utils/paint/basics";
import Shape from "../Shape";
import { clickInsidePolygone, clickOnShapeSegment } from "../geometry";
import { UNIT } from "pages/Paint";

export const handleClick = (event, state) => {
  //get click pos
  const { x, y } = getMousePos(state.canvasRef, event);
  let shape;
  const initialPoint = { x, y };
  shape =
    clickInsidePolygone(state.shapes, initialPoint) ||
    clickOnShapeSegment(state.shapes, initialPoint).shape;
  //if user clicked inside polygone or on a shape segment

  if (shape) {
    const index = state.shapes.findIndex((element) => element === shape);
    const newArray = [...state.shapes];
    newArray.splice(index, 1);
    state.setShapes(newArray);
    const newShape = new Shape({ x, y });
    const pointRotation = centreShape(shape);

    newShape.points = shape.points.map((point) => ({
      x: calcX(pointRotation.x, point.x, pointRotation.y, point.y),
      y: calcY(pointRotation.x, point.x, pointRotation.y, point.y),
    }));
    if (shape.polygone === true) {
      newShape.polygone = true;
    }
    newShape.color = shape.color;
    state.setShapes((prv) => [...prv, newShape]);
  }
};
function centreShape(shape) {
  let xmin = shape.points[0].x,
    xmax = shape.points[0].x,
    ymin = shape.points[0].y,
    ymax = shape.points[0].y;
  for (let i = 0; i < shape.points.length; i++) {
    if (shape.points[i].x < xmin) {
      xmin = shape.points[i].x;
    }
    if (shape.points[i].x > xmax) {
      xmax = shape.points[i].x;
    }
    if (shape.points[i].y < ymin) {
      ymin = shape.points[i].y;
    }
    if (shape.points[i].y > ymax) {
      ymax = shape.points[i].y;
    }
  }
  return getGridPos((xmin + xmax) / 2, (ymin + ymax) / 2, UNIT);
}
let p = 90;

function calcX(x1, x2, y1, y2) {
  if (x1 === x2 && y1 === y2) {
    return x1;
  } else {
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
                (y1 - y2) /
                  Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2))
              )
          ) *
            Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
        );
      } else {
        return (
          x1 -
          Math.cos(
            (p / 180) * Math.PI -
              Math.acos(
                (x2 - x1) /
                  Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
              )
          ) *
            Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
        );
      }
    }
  }
}
function calcY(x1, x2, y1, y2) {
  if (x1 === x2 && y1 === y2) {
    return y1;
  } else {
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
                (y1 - y2) /
                  Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2))
              )
          ) *
            Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
        );
      } else {
        return (
          y1 -
          Math.sin(
            (p / 180) * Math.PI -
              Math.acos(
                (x2 - x1) /
                  Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
              )
          ) *
            Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x2 - x1, 2))
        );
      }
    }
  }
}
