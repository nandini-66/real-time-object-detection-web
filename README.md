# 🧠 Real-Time Object Detection Web App 🚀

A complete **Machine Learning + Web Development** project that enables **real-time object detection** through a responsive frontend and a YOLOv8 ML model backend served via Flask. This project demonstrates seamless integration between web UI and a powerful pretrained computer vision model.

---

## 📸 Features

- 🌐 Web-based user interface built with HTML, CSS, JS, Bootstrap
- 🔁 Real-time webcam streaming and detection
- 🧠 Backend using Flask (Python) and Ultralytics YOLOv8s model
- 🎯 Supports over 600+ object categories (Open Images V7 dataset)
- 📥 Image upload & instant detection capability
- 🧱 Modular, clean architecture for easy extension & deployment

---

## 🧠 Machine Learning Model Overview

| Feature                 | Details                                                                 |
|------------------------|-------------------------------------------------------------------------|
| Model                  | `YOLOv8s.pt` (Pretrained, Ultralytics)                                  |
| Dataset Used           | [Open Images V7 (OIV7)](https://storage.googleapis.com/openimages/web/index.html) |
| Classes Supported      | 600+ object categories                                                  |
| Training               | Not done locally (used pretrained weights from YOLOv8)                  |
| Model Location         | `models/yolov8s.pt` *(Not uploaded to GitHub — ignored via `.gitignore`)*

---

## 🌐 Web + ML Integration Architecture

            +---------------------+
            |     User Frontend   |
            |  (HTML, CSS, JS)    |
            +---------+-----------+
                      |
                      ▼
         [Upload Image / Live Webcam Feed]
                      |
                      ▼
            +---------+-----------+
            |        Flask        |
            |   (Python Backend)  |
            +---------+-----------+
                      |
                      ▼
            [YOLOv8 ML Model - Inference]
                      |
                      ▼
         [Bounding Boxes + Labels Rendered]
                      |
                      ▼
            +---------------------+
            |     Output to UI    |
            +---------------------+
real-time-object-detection-web/
│
├── static/ # Frontend assets (CSS, JS, Fonts, Images)
├── templates/ # HTML templates (Jinja2)
├── models/ # YOLOv8 model file (ignored)
│ └── yolov8s.pt
├── webcam.py # Python script for webcam detection
├── app.py # Main Flask backend
├── .gitignore # To ignore venv, models, etc.
└── README.md # You are here!

``markdown
## 🔧 Requirements

Install these Python libraries:

```bash
flask
ultralytics
opencv-python
numpy
matplotlib
