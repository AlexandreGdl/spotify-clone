import { useEffect, useRef, useState } from "react";
import { withClamp } from "utils";

export const useHorizontalDrag = (varName: string, min = 10, max = 800) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, setWidth] = useState(331);

  useEffect(() => {
    const resizer = ref.current;
    if (!resizer) return;

    resizer.onmousedown = () => {
      resizer.onmousemove = (e: MouseEvent) => {
        setWidth(w => {
          const newWidth = withClamp(w+e.movementX, min, max);
          document.documentElement.style.setProperty(varName, `${newWidth}px`);
          return newWidth;
        });
        
      }
    };

    resizer.onmouseleave = () => resizer.onmousemove = null
    resizer.onmouseup = () => resizer.onmousemove = null


    return () => {
      if (resizer) {
        resizer.onmousedown = null;
        resizer.onmousemove = null;
      }
    }
  }, [ref, varName, min, max]);

  return {ref}
}