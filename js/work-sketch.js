// Replace videos with images on mobile
if (isMobileDevice()){
  var rogue = document.getElementById('rogue-media');
  rogue.innerHTML = '<img src="img/rogue-demo.png" style="width: 90%"></img>'

  var ao = document.getElementById('ao-media');
  ao.innerHTML = '<img src="img/ao-demo.png" style="width: 90%"></img>'

  var radio = document.getElementById('radio-media');
  radio.innerHTML = '<img src="img/radio-demo.png" style="width: 90%"></img>'

  var dialup = document.getElementById('dialup-media');
  dialup.innerHTML = '<img src="img/dialup-demo.png" style="width: 90%"></img>'

  var aeneas = document.getElementById('aeneas-media');
  aeneas.innerHTML = '<img src="img/aeneas-demo.png" style="width: 90%"></img>'
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
