import { getMousePos } from "../basics";
import { clickInsidePolygone } from "../geometry";

export const handleClick = (event, state) => {
  const clickPoint = getMousePos(state.canvasRef, event);
  const polygone = clickInsidePolygone(state.shapes, clickPoint);
  if (polygone) {
    polygone.color = "#FF0000";
    state.setLine({}); // to cause rerender
  }
};
