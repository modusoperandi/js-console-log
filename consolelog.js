/**
 * A lightweight wrapper for console.log
 * Based on http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
 *
 */

if (!window.log && is_live_site === false) {
  window.log = function (msg, obj) {
  
    // store logs to an array for reference
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
      console.log(Array.prototype.slice.call(arguments));
    }
  }
} else {
  window.log = function (dummy) { }
}