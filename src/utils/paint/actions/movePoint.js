import { UNIT } from "pages/Paint";

import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import { checkIfPointInShapeSegment, rahMoghtasib } from "../geometry";

export const handleMouseDown = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  if (shape) {
    state.setDrawing(true);
    state.setCurrent({ shape, pointIndex, x, y });
  }
  if (
    shape?.polygone &&
    (pointIndex === 0 || pointIndex === shape.points.length - 1)
  ) {
    state.setCurrent({
      shape,
      pointIndex: shape.points.length - 1,
      x,
      y,
      movetwopoints: true,
    });
  }
};
export const handleMouseMove = (event, state, lastPoint) => {
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  state.current.shape.points[state.current.pointIndex] = { x, y };
  if (state.current.movetwopoints) {
    state.current.shape.points[0] = { x, y };
  }

  state.setLine({ x, y });
};
export const handleMouseUp = (event, state) => {
  const getLineEq = (point1, point2) => {
    //this function calculate a line equation
    let m = (point2.y - point1.y) / (point2.x - point1.x); // m almail ta3 lmoosta9iim
    let b =
      m !== Infinity || m !== -Infinity ? point2.y - m * point2.x : point1.x; // b howa noo9tat ta9atao3 lmoosta9im m3a mi7war ltaratib (y = ax+b)
    return { m, b };
  };
  const pointBelongsToLine = (lineEq, point) => {
    //this function checks if a point is a part of a line given
    if (lineEq.m !== Infinity || lineEq.m !== -Infinity)
      return point.y === lineEq.m * point.x + lineEq.b;
    else return point.x === lineEq.b;
  };
  // linelength ta7ssab ettol ta3 l9it3a
  const lineLength = (p1, p2) =>
    Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  if (!state.drawing) return;
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  state.current.shape.points[state.current.pointIndex] = { x, y };
  if (shape) {
    if (
      !shape.polygone &&
      shape === state.current.shape &&
      ((state.current.pointIndex === 0 &&
        pointIndex === shape.points.length - 1) ||
        (state.current.pointIndex === shape.points.length - 1 &&
          pointIndex === 0)) &&
      shape.points.length >= 4
    ) {
      shape.polygone = true;
    } else {
      // had l if testi ki deplaci point foo9 point yantami lshape t3awed trdoo win kan
      state.current.shape.points[state.current.pointIndex].x = state.current.x;
      state.current.shape.points[state.current.pointIndex].y = state.current.y;
      if (state.current.movetwopoints) {
        state.current.shape.points[0].x =
          state.current.shape.points[state.current.pointIndex].x;
        state.current.shape.points[0].y =
          state.current.shape.points[state.current.pointIndex].y;
      }
      return state.setDrawing(false);
    }
  }

  if (checkIfPointInShapeSegment({ x, y }, state.shapes)) {
    state.current.shape.points[state.current.pointIndex].x = state.current.x;
    state.current.shape.points[state.current.pointIndex].y = state.current.y;
  }
  if (state.current.movetwopoints) {
    state.current.shape.points[0].x =
      state.current.shape.points[state.current.pointIndex].x;
    state.current.shape.points[0].y =
      state.current.shape.points[state.current.pointIndex].y;
  }
  state.setDrawing(false);
};
