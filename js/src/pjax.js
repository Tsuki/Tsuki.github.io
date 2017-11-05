console.log("Document initialized:", window.location.href);

// document.addEventListener("pjax:send", function() {
//   console.log("Event: pjax:send", arguments)
// });

document.addEventListener("pjax:complete", function() {
  NexT.motion.integrator.reset(2);
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();

});

document.addEventListener("pjax:error", function() {
  console.log("Event: pjax:error", arguments);
});

// document.addEventListener("pjax:success", function() {
//   console.log("Event: pjax:success", arguments);
// });

document.addEventListener("DOMContentLoaded", function() {
  var pjax = new Pjax({
    selectors: [".content",".sidebar"]
    // currentUrlFullReload: true,
  });
  console.log("Pjax initialized.", pjax);
});
