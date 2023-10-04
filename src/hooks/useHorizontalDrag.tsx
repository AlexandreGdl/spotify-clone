import { useEffect, useRef, useState } from "react";

export const useHorizontalDrag = (varName: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, setWidth] = useState(331)

  useEffect(() => {
    const resizer = ref.current;
    if (!resizer) return;

    resizer.onmousedown = () => {
      resizer.onmousemove = (e: MouseEvent) => {
        setWidth(w => {
          document.documentElement.style.setProperty(varName, `${ w + e.movementX}px`);
          return w + e.movementX;
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
  }, [ref, varName]);

  return {ref}
}