const animatedScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("enter");
      animatedScrollObserver.unobserve(entry.target);
    }
  });
});

export default {
  // eslint-disable-next-line
  bind(element: any) {
    element.classList.add("beforeEnter");
    animatedScrollObserver.observe(element);
  },
};
