import { useRef } from "react";

export const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return <input ref={inputRef} />;
};
