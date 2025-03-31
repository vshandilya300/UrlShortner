import { useState } from "react";
import axios from "axios";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const API_BASE = "http://localhost:8000/url"; // Update this if backend is deployed

  const handleShorten = async () => {
    if (!originalUrl) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      const response = await axios.post(API_BASE, { originalUrl });
      setShortUrl(`${API_BASE}/${response.data.id}`);
    } catch (error) {
      console.error("Error shortening URL", error);
      alert("Failed to shorten URL");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">URL Shortener</h1>
        <input
          type="text"
          placeholder="Enter your URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />
        <button
          onClick={handleShorten}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Shorten URL
        </button>
        {shortUrl && (
          <div className="mt-4 text-center">
            <p className="text-gray-700">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
