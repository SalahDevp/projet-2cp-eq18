import { getMousePos } from "../basics";
import { clickInsidePolygone } from "../geometry";

export const handleClick = (event, state) => {
  const clickPoint = getMousePos(state.canvasRef, event);
  const polygone = clickInsidePolygone(state.shapes, clickPoint);
  if (polygone) {
    polygone.color = state.bucketColor;
    state.setLine({}); // to cause rerender
  }
};
