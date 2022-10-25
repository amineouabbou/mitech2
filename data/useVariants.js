export const globaleasing = [0.22, 1, 0.36, 1]

export const titesStagger = (delayChildren = 0, staggerChildren = 0.2) => {
  return {
    initial: {},
    animate: {
      transition: {
        delayChildren,
        staggerChildren,
        ease: globaleasing,
      },
    },
  }
}

export const titlesAnimation = {
  initial: { y: 90, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: globaleasing,
    },
  },
}

export const shortFadeUp = (duration = 1) => {
  return {
    initial: { y: 30, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: globaleasing,
      },
    },
    exit: {
      y: 30,
      opacity: 0,
    },
  }
}

export const fadeUp = {
  ...titlesAnimation,
}

export const PathBanneranim = {
  initial: {
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
  },
  animate: {
    clipPath: 'polygon(2% 0, 100% 0%, 100% 100%, 0% 100%)',
    transition: { duration: 2, delay: 1, ease: globaleasing },
  },
}

export const imgScaling = {
  initial: { scale: 1.2, opacity: 0.7 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: globaleasing,
    },
  },
}

export const texteOpacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: globaleasing,
    },
  },
}

export const fadeIn = (duration = 1, delay = 0) => {
  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: globaleasing,
      },
    },
  }
}

export const fadeUpOverlayBox = (duration = 1, delay = 0) => {
  return {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: globaleasing,
      },
    },
  }
}
