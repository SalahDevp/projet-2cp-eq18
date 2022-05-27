import { checkSameShape } from "./geometry";
import { generateSymetrieCentrale } from "./symetrie";

export default function checkSymetrieCentral(exoShapes, shapes) {
  let res = true;
  if (shapes.length !== exoShapes.length) {
    return false;
  }
  for (let i = 0; i < exoShapes.length; i++) {
    let stop = false;
    const newShape = generateSymetrieCentrale(exoShapes[i]);
    for (let j = 0; j < exoShapes.length; j++) {
      if (checkSameShape(shapes[j], newShape)) {
        shapes[j].strokeStyle = "#00FF00"; //make shape color green
        stop = true;
        break;
      }
    }
    //no shape is symetrical to exoShape
    if (!stop) {
      //generate the symetric of exoShape
      const correctShape = generateSymetrieCentrale(exoShapes[i]);
      correctShape.strokeStyle = "#00FF00";
      shapes.push(correctShape);
      res = false;
    }
  }
  return res;
}
