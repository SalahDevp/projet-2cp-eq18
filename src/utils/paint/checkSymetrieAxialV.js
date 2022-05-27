import { checkSameShape } from "./geometry";
import { generateSymetrieAxialeV } from "./symetrie";

export function checkSymetrieAxialeVertical(exoShapes, shapes) {
  let res = true;
  if (shapes.length !== exoShapes.length) {
    return false;
  }

  for (let i = 0; i < exoShapes.length; i++) {
    let stop = false;
    const newShape = generateSymetrieAxialeV(exoShapes[i]);
    for (let j = 0; j < exoShapes.length; j++) {
      if (checkSameShape(shapes[j], newShape)) {
        shapes[j].strokeStyle = "#00FF00"; //make shape color green
        stop = true;
        break;
      } else {
        stop = false;
      }
    }
    //no shape is symetrical to exoShape
    if (!stop) {
      //generate the symetric of exoShape
      const correctShape = generateSymetrieAxialeV(exoShapes[i]);
      correctShape.strokeStyle = "#00FF00";
      shapes.push(correctShape);
      res = false;
    }
  }
  return res;
}
