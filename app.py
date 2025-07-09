from flask import Flask, render_template, Response, redirect, url_for
import cv2
from ultralytics import YOLO

app = Flask(__name__)

model = YOLO("yolov8s-oiv7.pt")
cap = None
streaming = False

def generate_frames():
    global cap, streaming
    cap = cv2.VideoCapture(0)
    streaming = True

    while streaming:
        success, frame = cap.read()
        if not success:
            break
        results = model(frame)
        annotated_frame = results[0].plot()
        _, buffer = cv2.imencode('.jpg', annotated_frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect')
def detect():
    return render_template('detect.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/stop')
def stop():
    global streaming
    streaming = False
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)






