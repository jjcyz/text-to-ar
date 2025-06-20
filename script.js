// Check if model-viewer is supported
if (customElements.get('model-viewer')) {
  console.log('Model-viewer is supported');
  document.getElementById('status').style.display = 'block';
} else {
  console.log('Model-viewer is not supported');
  document.getElementById('status').innerHTML = '3D viewer not supported in this browser. Please use a modern browser.';
  document.getElementById('status').className = 'error';
  document.getElementById('status').style.display = 'block';
}

// Add event listeners for model loading
document.addEventListener('DOMContentLoaded', function() {
  const modelViewer = document.querySelector('model-viewer');

  modelViewer.addEventListener('load', function() {
    console.log('3D model loaded successfully');
  });

  modelViewer.addEventListener('error', function(event) {
    console.error('Error loading 3D model:', event.detail);
  });

  // Check AR support
  if ('xr' in navigator) {
    navigator.xr.isSessionSupported('immersive-ar').then(function(supported) {
      if (supported) {
        console.log('AR is supported');
      } else {
        console.log('AR is not supported');
      }
    });
  } else {
    console.log('WebXR not supported');
  }
});
