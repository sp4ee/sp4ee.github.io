(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Initialize smart Substack newsletter subscription embedding
window.addEventListener("load", function () {
  const v = document.getElementsByClassName('newsletter-signup');
  function updateElement() {
    this.innerHTML = '<iframe src="https://sp4ee.substack.com/embed" frameborder="0" scrolling="no"></iframe>';
  }
  for (i = 0; i < v.length; i++) {
    v[i].addEventListener("click", updateElement);
  }
  const lbl = document.getElementsByClassName('newsletter-signup-link');
  for (i = 0; i < lbl.length; i++) {
    lbl[i].addEventListener("click", function(e) {
      e.stopPropagation = true;
      e.cancelBubble = true;
    });
  }
});

// Initialize smart YouTube video embeddings
window.addEventListener("load", function () {
  const v = document.getElementsByClassName('youtube-container');
  function updateVideo() {
    const id = this.id.replace('vid-', '');
    const w = this.clientWidth;
    const h = this.clientHeight;
    this.innerHTML =
      '<iframe src="//www.youtube.com/embed/' + id +
      '?autoplay=1" frameborder="0" width="' + w + '" height="' + h + '" allowfullscreen></iframe>';
  }
  for (i = 0; i < v.length; i++) {
    v[i].addEventListener("click", updateVideo);
  }
  const lbl = document.getElementsByClassName('youtube-placeholder-label');
  for (i = 0; i < lbl.length; i++) {
    lbl[i].addEventListener("click", function(e) {
      e.stopPropagation = true;
      e.cancelBubble = true;
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW5pdGlhbGl6ZSBzbWFydCBTdWJzdGFjayBuZXdzbGV0dGVyIHN1YnNjcmlwdGlvbiBlbWJlZGRpbmdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzbGV0dGVyLXNpZ251cCcpO1xuICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9zcDRlZS5zdWJzdGFjay5jb20vZW1iZWRcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPic7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICB2W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVFbGVtZW50KTtcbiAgfVxuICBjb25zdCBsYmwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzbGV0dGVyLXNpZ251cC1saW5rJyk7XG4gIGZvciAoaSA9IDA7IGkgPCBsYmwubGVuZ3RoOyBpKyspIHtcbiAgICBsYmxbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vIEluaXRpYWxpemUgc21hcnQgWW91VHViZSB2aWRlbyBlbWJlZGRpbmdzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgneW91dHViZS1jb250YWluZXInKTtcbiAgZnVuY3Rpb24gdXBkYXRlVmlkZW8oKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkLnJlcGxhY2UoJ3ZpZC0nLCAnJyk7XG4gICAgY29uc3QgdyA9IHRoaXMuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaCA9IHRoaXMuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuaW5uZXJIVE1MID1cbiAgICAgICc8aWZyYW1lIHNyYz1cIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCArXG4gICAgICAnP2F1dG9wbGF5PTFcIiBmcmFtZWJvcmRlcj1cIjBcIiB3aWR0aD1cIicgKyB3ICsgJ1wiIGhlaWdodD1cIicgKyBoICsgJ1wiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgdltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlVmlkZW8pO1xuICB9XG4gIGNvbnN0IGxibCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3lvdXR1YmUtcGxhY2Vob2xkZXItbGFiZWwnKTtcbiAgZm9yIChpID0gMDsgaSA8IGxibC5sZW5ndGg7IGkrKykge1xuICAgIGxibFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==
