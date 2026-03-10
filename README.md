# Diagram Dashboard

A simple React dashboard that allows users to upload a circuit diagram image and view a list of electronic components.

## Features

- Upload diagram image (PNG/JPG)
- Preview uploaded image
- Display uploaded file name
- Replace uploaded image
- Zoom In / Zoom Out / Reset view
- Component list sidebar
- Highlight selected component
- Responsive layout (desktop and tablet)

## Tech Stack

- React (Functional Components)
- Vite
- JavaScript
- CSS

## Project Structure

src
 ├── components
 │   ├── UploadBox.jsx
 │   ├── DiagramViewer.jsx
 │   ├── ComponentList.jsx
 │
 ├── pages
 │   └── Dashboard.jsx
 │
 ├── services
 │   └── api.js

## Setup Instructions

Clone the repository

git clone https://github.com/Prajapatkomal/Diagram-Dashboard.git


Install dependencies

npm install

Run the development server

npm run dev

Open in browser

http://localhost:5173

## Mock Data

The component list uses mock API data:

- Resistor
- Capacitor
- Diode
- Transistor

## Author

Your Name