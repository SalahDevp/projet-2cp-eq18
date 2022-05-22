import { checkSameShape } from "./geometry";
import { generateSymetrieAxialeV } from "./symetrie";

export function checkSymetrieAxialeVertical(exoShapes, shapes) {
  if (shapes.length !== exoShapes.length) {
    return false;
  }
  let stop = false;
  for (let i = 0; i < exoShapes.length; i++) {
    const newShape = generateSymetrieAxialeV(exoShapes[i]);
    for (let j = 0; j < exoShapes.length; j++) {
      if (checkSameShape(shapes[j], newShape)) {
        stop = true;
        break;
      } else {
        stop = false;
      }
    }
    if (!stop) {
      return false;
    }
  }
  return true;
}
