import { motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image unoptimized {...props} ref={ref} />;
  }
);

const MotionImage = motion.create(ExoticImage)

export default MotionImage;