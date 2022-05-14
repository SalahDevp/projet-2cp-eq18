import { getMousePos } from "utils/paint/basics";
import Shape from "../Shape";
import {
  clickInsidePolygone,
  clickOnShapeSegment,
} from "../geometry";

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
    const index=state.shapes.findIndex(element => element ===shape);
    const newArray = [...state.shapes];
    newArray.splice(index,1);
    state.setShapes(newArray);
    const newShape = new Shape({ x, y });
    newShape.points = shape.points.map((point) => ({
    x: calcX(shape.points[0].x,point.x,shape.points[0].y,point.y),
    y: calcY(shape.points[0].x,point.x,shape.points[0].y,point.y),
  }));
  if(shape.polygone === true ){newShape.polygone = true}
  state.setShapes((prv) => [...prv, newShape]);
 } 
};
let p = 90;

function calcX(x1, x2, y1, y2) {
  if(x1 === x2 && y1 === y2) {return x1;}else{
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
}
function calcY(x1, x2, y1, y2) {
  if(x1 === x2 && y1 === y2) {return y1;}else{
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
}