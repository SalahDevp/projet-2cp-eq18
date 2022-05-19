const Canvas = ({
  canvasRef,
  width,
  height,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onClick,
  submitted,
  rightAnswer,
}) => {
  return (
    <div className="border-4 border-green-400 inline-block h-fit">
      <canvas
        className={
          !submitted ? "bg-white" : rightAnswer ? "bg-green-100" : "bg-red-100"
        }
        ref={canvasRef}
        height={height}
        width={width}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onClick={onClick}
      ></canvas>
    </div>
  );
};

export default Canvas;
