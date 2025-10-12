// Create the intersection observer
const animatedScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("enter");
      animatedScrollObserver.unobserve(entry.target);
    }
  });
});

const scrollAnimation = {
  //mounted hook
  mounted(el: HTMLElement) {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  },
  //clean up before unmount
  beforeUnmount(el: HTMLElement) {
    animatedScrollObserver.unobserve(el);
  },
};

export default scrollAnimation;
