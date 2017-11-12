document.addEventListener("pjax:send", function() {

});

document.addEventListener("pjax:complete", function() {
  NexT.motion.integrator.reset(2);
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();
});

document.addEventListener("pjax:error", function() {

});

document.addEventListener("pjax:success", function() {

});

document.addEventListener("DOMContentLoaded", function() {
  var pjax = new Pjax({
    elements: ["a[href]:not(.fancybox)"],
    selectors: [".content",".sidebar"]
    // currentUrlFullReload: true,
  });
});
