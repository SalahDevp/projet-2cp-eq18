export function clearCanvas(context, width, height, unit) {
  context.clearRect(0, 0, width, height);
  //re draw the grid
  drawGrid(context, width, height, unit);
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
