export default function Shape(firstPoint) {
  this.points = firstPoint ? [firstPoint] : [];
  this.polygone = false;
  this.color = undefined;

  this.draw = (context) => {
    //draw lines
    context.beginPath();
    context.strokeStyle = this.color || "#000000";
    context.fillStyle = this.color;
    context.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.points.length; i++)
      context.lineTo(this.points[i].x, this.points[i].y);
    if (this.color) context.fill();
    context.stroke();
    //draw points
    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";
    for (let i = 0; i < this.points.length; i++) {
      context.beginPath();
      context.arc(this.points[i].x, this.points[i].y, 2, 0, Math.PI * 2);
      context.fill();
      context.stroke();
    }
  };
}
