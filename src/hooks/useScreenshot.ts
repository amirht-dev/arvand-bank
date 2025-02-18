import { getScreenshot } from "@/utils/clientHelpers";
import { RefObject, useCallback } from "react";

function useScreenshot() {
  return useCallback(
    (
      element: RefObject<HTMLElement | null>,
      options?: Parameters<typeof getScreenshot>[1],
    ) => {
      if (!element.current) return;

      getScreenshot(element.current, options);
    },
    [],
  );
}

export default useScreenshot;
