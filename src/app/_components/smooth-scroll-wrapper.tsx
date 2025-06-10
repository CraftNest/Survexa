import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      {children}
    </ReactLenis>
  );
}
