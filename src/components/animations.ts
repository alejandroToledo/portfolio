import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 1, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const textReveal: Variants = {
  hidden: { 
    opacity: 1,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const circleHover: Variants = {
  initial: { 
    scale: 0,
    opacity: 0
  },
  hover: { 
    scale: 1.2,
    opacity: 0.2,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};