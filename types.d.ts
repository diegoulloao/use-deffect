import { useEffect } from "react";

declare module "deffect" {
  export function useDeffect(): typeof useEffect;
}
