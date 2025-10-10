// Badge Generator JavaScript
// Grafana & Friends Mumbai Community

class BadgeGenerator {
    constructor() {
        this.userImage = null;
        this.selectedFrame = 'classic';
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupCanvas();
    }

    bindEvents() {
        // Upload button
        document.getElementById('uploadBtn').addEventListener('click', () => {
            document.getElementById('imageInput').click();
        });

        // File input change
        document.getElementById('imageInput').addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files[0]);
        });

        // Camera button
        document.getElementById('cameraBtn').addEventListener('click', () => {
            this.openCamera();
        });

        // Frame selection
        document.querySelectorAll('.frame-option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectFrame(option.dataset.frame);
            });
        });

        // Download button
        document.getElementById('downloadBtn').addEventListener('click', () => {
            this.downloadBadge();
        });

        // Reset button
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.reset();
        });
    }

    setupCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.ctx = this.canvas.getContext('2d');
    }

    handleFileUpload(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            this.loadImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }

    openCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert('Camera access is not supported on this device.');
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                const video = document.createElement('video');
                video.srcObject = stream;
                video.play();

                // Create camera modal
                this.createCameraModal(video, stream);
            })
            .catch(err => {
                console.error('Error accessing camera:', err);
                alert('Unable to access camera. Please check permissions.');
            });
    }

    createCameraModal(video, stream) {
        const modal = document.createElement('div');
        modal.className = 'camera-modal';
        modal.innerHTML = `
            <div class="camera-modal-content">
                <div class="camera-preview">
                    <video id="cameraVideo" autoplay playsinline></video>
                </div>
                <div class="camera-controls">
                    <button id="captureBtn" class="capture-button">
                        <i class="fas fa-camera"></i> Capture
                    </button>
                    <button id="cancelBtn" class="cancel-button">
                        <i class="fas fa-times"></i> Cancel
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const cameraVideo = modal.querySelector('#cameraVideo');
        cameraVideo.srcObject = stream;

        // Capture button
        modal.querySelector('#captureBtn').addEventListener('click', () => {
            this.captureFromCamera(cameraVideo, stream, modal);
        });

        // Cancel button
        modal.querySelector('#cancelBtn').addEventListener('click', () => {
            this.closeCameraModal(stream, modal);
        });
    }

    captureFromCamera(video, stream, modal) {
        // Create canvas to capture video frame
        const captureCanvas = document.createElement('canvas');
        const captureCtx = captureCanvas.getContext('2d');
        captureCanvas.width = video.videoWidth;
        captureCanvas.height = video.videoHeight;

        captureCtx.drawImage(video, 0, 0);

        // Convert to data URL
        const imageDataUrl = captureCanvas.toDataURL('image/jpeg');
        this.loadImage(imageDataUrl);

        this.closeCameraModal(stream, modal);
    }

    closeCameraModal(stream, modal) {
        // Stop camera stream
        stream.getTracks().forEach(track => track.stop());
        document.body.removeChild(modal);
    }

    loadImage(src) {
        const img = new Image();
        img.onload = () => {
            this.userImage = img;
            this.updatePreview();
            document.getElementById('downloadBtn').disabled = false;
        };
        img.src = src;
    }

    selectFrame(frameType) {
        this.selectedFrame = frameType;

        // Update active frame option
        document.querySelectorAll('.frame-option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector(`[data-frame="${frameType}"]`).classList.add('active');

        this.updatePreview();
    }

    updatePreview() {
        const userImage = document.getElementById('userImage');
        const badgeFrame = document.getElementById('badgeFrame');

        if (this.userImage) {
            userImage.src = this.userImage.src;
            userImage.style.display = 'block';
        }

        // Update frame class
        badgeFrame.className = `badge-frame ${this.selectedFrame}-frame`;
    }

    downloadBadge() {
        if (!this.userImage) {
            alert('Please upload an image first.');
            return;
        }

        // Create download canvas
        const downloadCanvas = document.createElement('canvas');
        const downloadCtx = downloadCanvas.getContext('2d');
        downloadCanvas.width = 800;
        downloadCanvas.height = 1000;

        // Fill background
        downloadCtx.fillStyle = '#ffffff';
        downloadCtx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

        // Draw frame background
        this.drawFrameBackground(downloadCtx, downloadCanvas.width, downloadCanvas.height);

        // Draw user image (circular crop)
        this.drawCircularImage(downloadCtx, this.userImage, downloadCanvas.width, downloadCanvas.height);

        // Draw frame overlay
        this.drawFrameOverlay(downloadCtx, downloadCanvas.width, downloadCanvas.height);

        // Draw text
        this.drawBadgeText(downloadCtx, downloadCanvas.width, downloadCanvas.height);

        // Download
        const link = document.createElement('a');
        link.download = 'grafana-badge.png';
        link.href = downloadCanvas.toDataURL();
        link.click();
    }

    drawFrameBackground(ctx, width, height) {
        // Draw frame background based on selected frame
        ctx.fillStyle = this.getFrameColor();
        ctx.fillRect(0, 0, width, height);
    }

    drawCircularImage(ctx, img, width, height) {
        const centerX = width / 2;
        const centerY = height / 2 - 50;
        const radius = 150;

        // Create circular clipping path
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.clip();

        // Calculate image dimensions to fit circle
        const aspectRatio = img.width / img.height;
        let drawWidth, drawHeight, drawX, drawY;

        if (aspectRatio > 1) {
            drawHeight = radius * 2;
            drawWidth = drawHeight * aspectRatio;
            drawX = centerX - drawWidth / 2;
            drawY = centerY - radius;
        } else {
            drawWidth = radius * 2;
            drawHeight = drawWidth / aspectRatio;
            drawX = centerX - radius;
            drawY = centerY - drawHeight / 2;
        }

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        ctx.restore();
    }

    drawFrameOverlay(ctx, width, height) {
        const centerX = width / 2;
        const centerY = height / 2 - 50;
        const radius = 150;

        // Draw frame border
        ctx.strokeStyle = '#ff671d';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 4, 0, Math.PI * 2);
        ctx.stroke();

        // Draw inner border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
        ctx.stroke();
    }

    drawBadgeText(ctx, width, height) {
        ctx.fillStyle = '#333333';
        ctx.textAlign = 'center';
        ctx.font = 'bold 24px Arial';

        // Title
        ctx.fillText('Grafana & Friends Mumbai', width / 2, height - 150);

        // Subtitle
        ctx.font = '18px Arial';
        ctx.fillText('Community Member', width / 2, height - 120);

        // Date
        ctx.font = '16px Arial';
        ctx.fillStyle = '#ff671d';
        ctx.fillText('November 15, 2025', width / 2, height - 90);
    }

    getFrameColor() {
        switch (this.selectedFrame) {
            case 'classic':
                return '#f8f9fa';
            case 'tech':
                return '#e3f2fd';
            case 'community':
                return '#fff3e0';
            default:
                return '#f8f9fa';
        }
    }

    reset() {
        this.userImage = null;
        this.selectedFrame = 'classic';

        document.getElementById('userImage').style.display = 'none';
        document.getElementById('downloadBtn').disabled = true;

        // Reset frame selection
        document.querySelectorAll('.frame-option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector('[data-frame="classic"]').classList.add('active');

        // Clear file input
        document.getElementById('imageInput').value = '';
    }
}

// Initialize badge generator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BadgeGenerator();
});