const animatedScrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("enter");
      animatedScrollObserver.unobserve(entry.target);
    }
  });
});

export default {
  bind(element: any) {
    element.classList.add("beforeEnter");
    animatedScrollObserver.observe(element);
  }
};
