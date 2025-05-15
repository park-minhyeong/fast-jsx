import { useLayoutEffect, useRef, useState } from "react";

type HTMLType = HTMLDivElement | HTMLInputElement;
export default function useHTMLState<T extends HTMLType>() {
  const ref = useRef<T>(null);
  const [state, setState] = useState<T>();
  useLayoutEffect(() => {
    if (ref.current) {
      setState(ref?.current);
    }
  }, []);
  return { ref, state };
}
