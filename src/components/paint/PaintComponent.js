import Canvas from "components/paint/Canvas";
import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { clearCanvas, drawLine } from "utils/paint/basics";
import Shape from "utils/paint/Shape";

// WIDTH and HEIGHT have to be equal
export const HEIGHT = 720,
  WIDTH = 1160,
  UNIT = 20,
  LINEWIDTH = 3;

const PaintComponent = forwardRef(
  (
    {
      actionType,
      bucketColor,
      shapes,
      setShapes,
      exoShapes,
      symetrieCentraleMode,
      symetrieAxialeVerticalMode,
      symetrieAxialeHorizontalMode,
    },
    ref
  ) => {
    const [drawing, setDrawing] = useState(false);
    const [current, setCurrent] = useState({});
    const [line, setLine] = useState();
    //action type
    const canvasRef = useRef(null);

    const state = {
      drawing,
      setDrawing,
      shapes,
      setShapes,
      current,
      setCurrent,
      line,
      setLine,
      canvasRef,
      actionType,
      bucketColor,
    };
    //

    useEffect(() => {
      const context = canvasRef.current.getContext("2d");
      context.lineWidth = LINEWIDTH;
      clearCanvas(
        context,
        WIDTH,
        HEIGHT,
        UNIT,
        exoShapes,
        symetrieCentraleMode,
        symetrieAxialeVerticalMode,
        symetrieAxialeHorizontalMode
      );
      shapes.forEach((shape) => shape.draw(context));
      if (line?.x1) drawLine(context, line);
      //exo shapes are redrawn in clear canvas fnc
    }, [
      shapes,
      line,
      drawing,
      exoShapes,
      symetrieCentraleMode,
      symetrieAxialeHorizontalMode,
      symetrieAxialeVerticalMode,
    ]);

    useImperativeHandle(
      ref,
      () => ({
        handleClear: () => {
          const context = canvasRef.current.getContext("2d");
          clearCanvas(
            context,
            WIDTH,
            HEIGHT,
            UNIT,
            exoShapes,
            symetrieCentraleMode,
            symetrieAxialeVerticalMode,
            symetrieAxialeHorizontalMode
          );
          setShapes([]);
          setLine({});
          setCurrent({});
        },
      }),
      [
        exoShapes,
        symetrieCentraleMode,
        symetrieAxialeHorizontalMode,
        symetrieAxialeVerticalMode,
      ]
    );
    return (
      <div className="h-screen flex-grow flex justify-center items-center">
        <Canvas
          canvasRef={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          onMouseDown={(event) => actionType?.handleMouseDown?.(event, state)}
          onMouseMove={(event) => actionType?.handleMouseMove?.(event, state)}
          onMouseUp={(event) => actionType?.handleMouseUp?.(event, state)}
          onClick={(event) => actionType?.handleClick?.(event, state)}
        />
      </div>
    );
  }
);

export default PaintComponent;
