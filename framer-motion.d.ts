import type { Target, TargetAndTransition } from "framer-motion";

declare module "framer-motion" {
  type TargetResolver<T> = (
    custom: T,
    current: Target,
    velocity: Target
  ) => TargetAndTransition | string;
  /**
   * @public
   */
  type Variant<T> = TargetAndTransition | TargetResolver<T>;
  /**
   * @public
   */
  type Variants<T> = {
    [key: string]: Variant<T>;
  };
}
