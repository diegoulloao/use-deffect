import { useEffect } from "react";

declare module "deffect" {
  export function useDeffect(
    ...args: Parameters<typeof useEffect>
  ): ReturnType<typeof useEffect>;
}
