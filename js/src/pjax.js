document.addEventListener("pjax:send", function () {
});

document.addEventListener("pjax:complete", function () {
  NexT.motion.integrator.reset(1);
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();
});

document.addEventListener("pjax:error", function () {
});

document.addEventListener("pjax:success", function () {
});

document.addEventListener("DOMContentLoaded", function () {
  new Pjax({
    elements: ["a[href]:not(.fancybox)"],
    selectors: [".content", ".sidebar", ".content-wrap", ".menu"],
    cacheBust: false
    // currentUrlFullReload: true,
  });
});
