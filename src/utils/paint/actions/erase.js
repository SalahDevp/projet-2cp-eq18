import { UNIT } from "pages/Paint";
import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";

export const handleClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);

  //delete point----
  if (shape) {
    //delete point form shape
    shape.points.splice(pointIndex, 1);
    if (shape.points.length === 1) {
      state.shapes.splice(
        state.shapes.findIndex((element) => element === shape),
        1
      );
    }
    if (shape.polygone) {
      if (pointIndex === 0 || pointIndex === shape.points.length - 1) {
        shape.points.splice(
          pointIndex === shape.points.length - 1 ? 0 : shape.points.length - 1,
          1
        );
        shape.points.push(shape.points[0]);
      }

      if (shape.points.length === 3) {
        shape.points.splice(shape.points.length - 1, 1);
        shape.polygone = false;
      }
    }
  }
  state.setLine({});
};
