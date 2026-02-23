// Utility to handle intersection observer logic
export const observeImage = (target, src, srcSet) => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Setup load handler for transition
        img.onload = () => {
          img.classList.remove('blur-sm', 'scale-105');
          img.classList.add('blur-0', 'scale-100');
        };

        // Set actual sources
        if (src) img.src = src;
        if (srcSet) img.srcset = srcSet;
        
        obs.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  if (target) observer.observe(target);
  return observer;
};