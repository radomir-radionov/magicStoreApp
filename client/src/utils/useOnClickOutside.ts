import { useCallback, useEffect } from "react";
import { StyledComponent } from "styled-components";

export const useOnClickOutside = (
  element: StyledComponent<"div", any, {}, never> | any,
  handler: () => void
) => {
  const clickAwayListener = useCallback(
    (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(element)) {
        handler();
      }
    },
    [element, handler]
  );

  useEffect(() => {
    document.addEventListener("click", clickAwayListener);

    return () => {
      document.removeEventListener("click", clickAwayListener);
    };
  }, [clickAwayListener]);
};
