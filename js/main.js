console.log('Oxygen');

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var desktop_width = 700;
var devicemotion = Modernizr.devicemotion;

if (width >= desktop_width) {
  console.log('“desktop” width');
  var node = document.getElementById('width-results');
  var html = '<p>' + '“desktop” width' + desktop_width + 'px</p>';
  html += '<p>' + 'test width: ' + desktop_width + 'px</p>';
  html += '<p>' + 'this width: ' + width + 'px</p>';
  node.innerHTML = html;
  node.className = 'pass';
} else {
  var node = document.getElementById('width-results');
  var html = '<p>' + 'narrower than “desktop” width' + desktop_width + 'px</p>';
  html += '<p>' + 'test width: ' + desktop_width + 'px</p>';
  html += '<p>' + 'this width: ' + width + 'px</p>';
  node.innerHTML = html;
  node.className = 'fail';
}

if (devicemotion === false) {
  console.log('no motion detector api available');
  var node = document.getElementById('motion-results');
  node.innerHTML = '<p>' + 'no motion detector api available' + '</p>';
  node.className = 'pass';
} else {
  var node = document.getElementById('motion-results');
  node.innerHTML = '<p>' + 'motion detector api available' + '</p>';
  node.className = 'fail';
}

if (devicemotion === false) {
  var node = document.getElementById('both-results');
  if (width >= desktop_width) {
    node.innerHTML = '<p>Show Ad</p> <p>' + 'The device does not detect motion and is wide enough to show ad' + '</p>';
    node.className = 'pass';
  } else {
    node.innerHTML = '<p>No Ad</p> <p>' + 'The device does not detect motion, but it is not wide enough to show ad' + '</p>';
    node.className = 'fail';
  }
} else {
  node.innerHTML = '<p>No Ad</p> <p>' + 'The device detects motion.' + '</p>';
  node.className = 'fail';
}
