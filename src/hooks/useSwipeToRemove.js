import { useRef } from "react";

export function useSwipeToRemove(onRemove) {
  const startX = useRef(0);
  const currentX = useRef(0);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    currentX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = startX.current - currentX.current;

    // agar 80px dan ko‘p chapga surilsa → remove
    if (diff > 80) {
      onRemove();
    }

    startX.current = 0;
    currentX.current = 0;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
