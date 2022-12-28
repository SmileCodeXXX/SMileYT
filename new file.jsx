import React, { useState } from 'react';

function YoutubeDownloader() {
  const [url, setUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setDownloading(true);
    setError(null);
    setProgress(0);

    fetch(`https://www.youtube.com/watch?v=${getVideoId(url)}`)
      .then((response) => {
        response.text().then((html) => {
          const videoUrl = extractVideoUrl(html);
          downloadVideo(videoUrl);
        });

        response.body.getReader().read().then(function updateProgress(result) {
          if (result.done) return;
          setProgress((prevProgress) => prevProgress + result.value.length);
          return response.body
            .getReader()
            .read()
            .then(updateProgress);
        });
      })
      .catch((err) => {
        setError(err);
        setDownloading(false);
      });
  };

  const downloadVideo = (videoUrl) => {
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = 'video.mp4';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setDownloading(false);
  };

  const getVideoId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const extractVideoUrl = (html) => {
    const videoUrlRegex = /"url_encoded_fmt_stream_map": "([^"]+)"/;
    const videoUrlMatch = html.match(videoUrlRegex);

    if (!videoUrlMatch) {
      throw new Error('Unable to extract video URL');
    }

    const encodedUrl = videoUrlMatch[1];
    const decodedUrl = decodeURIComponent(encodedUrl);
    const urlRegex = /url=([^&]+)/g;
    let match;
    let videoUrl;

    while ((match = urlRegex.exec(decodedUrl)) !== null) {
      const [, extractedUrl] = match;
      videoUrl = extractedUrl;
    }

    return videoUrl;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          YouTube Video URL:
          <input
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </label>
        <button type="submit">Download</button>
      </form>
      {downloading && (
        <div>
          <p>Downloading...</p>
          <progress value={progress} max="100" />
        </div>
      )}
      {error && <p>An error occurred: {error.message}</p>}
    </div>
  );
}

export default YoutubeDownloader;
