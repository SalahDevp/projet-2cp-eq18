import { LINEWIDTH } from "components/paint/PaintComponent";

const drawSymmetryCenter = (context, width, height) => {
  context.strokeStyle = "#00FF00";
  context.fillStyle = "#00FF00";
  context.beginPath();
  context.arc(width / 2, height / 2, LINEWIDTH + 2, 0, Math.PI * 2);
  context.fill();
  context.stroke();
};

const drawSymmetryVerticalAxe = (context, width, height) => {
  context.beginPath();
  context.strokeStyle = "#00FF00";
  context.fillStyle = "#00FF00";
  context.lineWidth = LINEWIDTH + 2;
  context.moveTo(width / 2, 0);
  context.lineTo(width / 2, height);
  context.stroke();
  context.lineWidth = LINEWIDTH;
};

const drawSymmetryHorizontalAxe = (context, width, height) => {
  context.beginPath();
  context.strokeStyle = "#00FF00";
  context.fillStyle = "#00FF00";
  context.lineWidth = LINEWIDTH + 2;
  context.moveTo(0, height / 2);
  context.lineTo(width, height / 2);
  context.stroke();
  context.lineWidth = LINEWIDTH;
};

export function clearCanvas(
  context,
  width,
  height,
  unit,
  exoShapes,
  symetrieCentraleMode,
  symetrieAxialeVerticalMode,
  symetrieAxialeHorizontalMode
) {
  context.clearRect(0, 0, width, height);
  //re draw the grid
  drawGrid(context, width, height, unit);
  //redraw exo shapes
  exoShapes.forEach((shape) => shape.draw(context));
  //symetrie axe and centre
  if (symetrieCentraleMode) drawSymmetryCenter(context, width, height);
  if (symetrieAxialeVerticalMode)
    drawSymmetryVerticalAxe(context, width, height);
  if (symetrieAxialeHorizontalMode)
    drawSymmetryHorizontalAxe(context, width, height);
}

export function getMousePos(canvasRef, evnt) {
  const { top, left } = canvasRef.current.getBoundingClientRect();
  const { clientX, clientY } = evnt;
  return { x: clientX - left, y: clientY - top };
}

export function getGridPos(x, y, unit) {
  const gridX = x - (x % unit) + (x % unit >= unit / 2 ? unit : 0);
  const gridY = y - (y % unit) + (y % unit >= unit / 2 ? unit : 0);
  return { x: gridX, y: gridY };
}

export function getShapeFromPoint(shapes, x, y) {
  let index = -1,
    shape;
  for (shape of shapes) {
    index = shape.points.findIndex((point) => point.x === x && point.y === y);
    if (index >= 0) break;
  }
  if (index < 0) shape = null;
  return { shape, pointIndex: index };
}

export function drawLine(context, line) {
  context.beginPath();
  context.strokeStyle = "#000000";
  context.moveTo(line.x1, line.y1);
  context.lineTo(line.x2, line.y2);
  context.stroke();
}

const drawGrid = (context, width, height, unit) => {
  context.strokeStyle = "#75eaff";
  //vetical lines
  for (let i = 0; i <= width; i += unit) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, height);
    context.stroke();
  }
  //horizontal lines
  for (let i = 0; i <= height; i += unit) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(width, i);
    context.stroke();
  }
};
//
