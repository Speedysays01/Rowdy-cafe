import { useEffect, useRef } from "react";

const ExpandingCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    circle.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        { transform: "translate(-50%, -50%) scale(1.5)", opacity: 0.9 },
        { transform: "translate(-50%, -50%) scale(3)", opacity: 0 },
      ],
      {
        duration: 2000,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        ref={circleRef}
        className="absolute w-[200vw] h-[200vw] bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0"
      ></div>
    </div>
  );
};

export default ExpandingCircle;
