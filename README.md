# URL Shortener

A simple URL shortener application built using **Node.js**, **Express.js**, **MongoDB**, and a frontend built with **React (Vite)**.

## Features
- Generate short URLs for long links
- Redirect to the original URL when accessing a short URL
- Simple and user-friendly frontend

## Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Frontend
- React.js (Vite)
- Axios for API requests
- Tailwind CSS for styling

## Installation & Setup

### Prerequisites
- **Node.js** and **npm** installed
- **MongoDB Atlas** or local MongoDB instance

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2. Setup Backend
```sh
cd backend
npm install
```

#### Configure MongoDB Connection
Update `connectDb.js` with your MongoDB connection string.

#### Start the Backend Server
```sh
npm start
```
The backend will run on `http://localhost:8000`.

### 3. Setup Frontend
```sh
cd ../frontend
npm install
```

#### Start the Frontend
```sh
npm run dev
```
The frontend will run on `http://localhost:5173`.

## API Endpoints

### 1. Shorten a URL
- **Endpoint:** `POST /url`
- **Body:**
  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "id": "a1b2c3d4"
  }
  ```

### 2. Redirect to Original URL
- **Endpoint:** `GET /url/:shortId`
- **Example:** Visiting `http://localhost:8000/url/a1b2c3d4` will redirect to `https://example.com`.

## Project Structure
```
url-shortener/
│── backend/
│   ├── controller/url.js
│   ├── models/url.js
│   ├── routes/url.js
│   ├── connectDb.js
│   ├── index.js
│── frontend/
│   ├── src/
│   │   ├── components/UrlShortener.js
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│── README.md
```

## Usage
1. Enter a long URL in the input field.
2. Click **"Shorten URL"**.
3. Copy and share the generated short link.
4. Clicking the short link redirects to the original URL.

## License
This project is licensed under the MIT License.

