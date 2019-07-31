if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log("You're ready to go offline!");
    }).catch(function() {
      console.log("Oops, the offline mode has failed.");
    });
  });
}
