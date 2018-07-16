document.addEventListener("pjax:send", function () {
});

document.addEventListener("pjax:complete", function () {
  NexT.motion.integrator.reset(2);
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();
  if (window.DISQUS) {
    try {
      DISQUS.reset({reload: true, config: disqus_config});
    } catch {
    }
  }
  else {
    loadComments();
  }
  if (window.DISQUSWIDGETS) {
    DISQUSWIDGETS.getCount()
  }
});

document.addEventListener("pjax:error", function () {
  console.log("pjax:error");
});

document.addEventListener("pjax:success", function () {
});

document.addEventListener("DOMContentLoaded", function () {
  new Pjax({
    elements: ["a[href]:not(.fancybox)"],
    selectors: [".content", ".sidebar", ".content-wrap", ".menu", ".comments"],
    cacheBust: false
    // currentUrlFullReload: true,
  });
});
