import React, { FC, useEffect, useState } from "react";
import CountUp from "react-countup";

type TCountProps = {
  end: number | string;
  duration?: number;
};

export const Count: FC<TCountProps> = ({ end, duration = 0.5 }) => {
  const [prevCount, setPrevCount] = useState(0);
  const [isEnded, setIsEnded] = useState<boolean>(false);

  const onEnd = () => {
    setIsEnded(true);
    setPrevCount(+end);
  };

  useEffect(() => {
    setIsEnded(false);
  }, [end]);

  return isEnded ? (
    <span>{end}</span>
  ) : (
    <CountUp
      preserveValue
      start={prevCount}
      end={+end}
      duration={duration}
      onEnd={onEnd}
      separator=""
    />
  );
};
