import { getMousePos } from "utils/paint/basics";

import { clickOnShapeSegment } from "../geometry";
import Shape from "../Shape";

export const handleClick = (event, state) => {
  const { x, y } = getMousePos(state.canvasRef, event);
  const initialPoint = { x, y };

  const { shape, firstPointInd } = clickOnShapeSegment(
    state.shapes,
    initialPoint
  );

  if (shape) {
    if (!shape.polygone) {
      if (shape.points.length === 2) {
        const newShapes = [...state.shapes];
        newShapes.splice(
          state.shapes.findIndex((element) => element === shape),
          1
        );
        state.setShapes(newShapes);
      } else if (firstPointInd === 0) shape.points.splice(0, 1);
      // first line in a multi-line
      else if (firstPointInd === shape.points.length - 2)
        // last line in a multi-line
        shape.points.splice(shape.points.length - 1, 1);
      else if (
        firstPointInd !== 0 &&
        firstPointInd !== shape.points.length - 2
      ) {
        // if the line is neither the first nor the last
        const newShape = new Shape({ x, y });
        const secondShape = new Shape({ x, y });
        for (let i = 0; i <= firstPointInd; i++) {
          newShape.points[i] = shape.points[i];
        }
        for (let j = firstPointInd + 1; j <= shape.points.length - 1; j++) {
          secondShape.points[j - (firstPointInd + 1)] = shape.points[j];
        }
        state.shapes.splice(
          state.shapes.findIndex((element) => element === shape),
          1
        );
        state.setShapes((prv) => [...prv, newShape, secondShape]);
      }
    }
    if (shape.polygone) {
      shape.points.splice(shape.points.length - 1, 1);
      const thirdShape = new Shape({ x, y });
      let j = 0;

      for (let i = 0; i < shape.points.length; i++) {
        if (firstPointInd + 1 + i === shape.points.length) {
          j = firstPointInd + 1 + i;
        }
        thirdShape.points[i] = shape.points[firstPointInd + 1 + i - j];
      }
      state.shapes.splice(
        state.shapes.findIndex((element) => element === shape),
        1
      );
      state.setShapes((prv) => [...prv, thirdShape]);
      //thirdShape.points = shape.points.map((point) => ({
      ////  x: ,
      //  y: ,
      // }));
    }
  }
  state.setLine({ x, y });
};
