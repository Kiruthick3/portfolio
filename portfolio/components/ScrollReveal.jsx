import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ children, direction = 'up', duration = 1, delay = 0, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
      x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
