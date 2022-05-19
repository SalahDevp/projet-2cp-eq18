import { HEIGHT, WIDTH } from "components/paint/PaintComponent";
import { checkSameShape } from "./geometry";
import Shape from "./Shape";

export default function checkSymetrieCentral(exoShapes, shapes) {
  if (shapes.length !== exoShapes.length) {
    return false;
  }
  for (let i = 0; i < exoShapes.length; i++) {
    let stop = false;
    const newShape = new Shape();
    newShape.points = exoShapes[i].points.map((point) => ({
      x: WIDTH - point.x,
      y: HEIGHT - point.y,
    }));
    if (exoShapes[i].polygone === true) {
      newShape.polygone = true;
    }
    for (let j = 0; j < exoShapes.length; j++) {
      if (checkSameShape(shapes[j], newShape)) {
        stop = true;
        break;
      }
    }
    if (!stop) {
      return false;
    }
  }
  return true;
}
