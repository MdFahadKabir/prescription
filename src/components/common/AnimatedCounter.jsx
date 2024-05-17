import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ startValue, endValue, duration }) => {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (endValue - startValue) + startValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    const animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [startValue, endValue, duration]);

  return <span className="text-black_2 text-3xl font-bold">{value}</span>;
};

export default AnimatedCounter;
