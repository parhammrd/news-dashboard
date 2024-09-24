<script>
    export let status = 404; // Default to 404 if no status is provided
    let imageUrl = `https://http.cat/${status}.jpg`; // URL for the http.cat image
  
    // Fallback to generic error image if the status is not recognized
    $: imageUrl = status ? `https://http.cat/${status}.jpg` : `https://http.cat/500.jpg`;
  </script>
  
  <style>
    .error-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }
    .error-image {
      max-width: 90%;
      height: auto;
      margin-bottom: 1rem;
    }
  </style>
  
  <div class="error-page">
    <img class="error-image" src={imageUrl} alt={`HTTP Error ${status}`} />
    <h1>Error {status}</h1>
    <p>Something went wrong!</p>
  </div>
  