# Text-to-AR

A simple web application that displays 3D models with AR (Augmented Reality) capabilities.

## Features

- 3D model viewer with camera controls
- AR support for iOS (Quick Look) and Android (WebXR)
- Responsive design for mobile and desktop
- Error handling and fallback content
- Modern UI with smooth animations

## How to Run

1. **Start the server:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Access on your computer:**
   - Open `http://localhost:8000` in your browser

3. **Access on your mobile device:**
   - Make sure your device is on the same WiFi network as your computer
   - Find your computer's IP address (run `ifconfig` in terminal)
   - Open `http://[YOUR_COMPUTER_IP]:8000` in your mobile browser

## AR Requirements

- **iOS**: Safari browser, iOS 12+
- **Android**: Chrome browser with WebXR support
- **Desktop**: Any modern browser for 3D viewing (no AR)
