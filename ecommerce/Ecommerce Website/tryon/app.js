// Initialize MediaPipe Pose
const pose = new Pose({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`});
pose.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

pose.onResults(onPoseResults);

// Setup camera feed
const videoElement = document.getElementById('liveVideo');
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await pose.send({image: videoElement});
  },
  width: 640,
  height: 480
});
camera.start();

// Function to handle pose results and overlay the shirt
function onPoseResults(results) {
  if (results.poseLandmarks) {
    const landmarks = results.poseLandmarks;
    const clothesOverlay = document.getElementById('clothesOverlay');

    // Calculate position and scale based on landmarks
    const leftShoulder = landmarks[11]; // Left shoulder
    const rightShoulder = landmarks[12]; // Right shoulder
    const centerX = (leftShoulder.x + rightShoulder.x) / 2;
    const centerY = (leftShoulder.y + rightShoulder.y) / 2;

    const distance = Math.sqrt(
      Math.pow(rightShoulder.x - leftShoulder.x, 2) +
      Math.pow(rightShoulder.y - leftShoulder.y, 2)
    );

    // Adjust position and scale of the overlay
    clothesOverlay.setAttribute('position', `${centerX * 4 - 2} ${centerY * 3 - 1.5} -2.8`);
    clothesOverlay.setAttribute('width', `${distance * 4}`);
    clothesOverlay.setAttribute('height', `${distance * 4 * 1.2}`); // Adjust height as needed
  }
}
