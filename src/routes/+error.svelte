<script>
    export let error; // The error object containing the status and message
    let status = error?.status || 500; // Default to 500 if no status is provided
  </script>
  
  <!-- Leave the layout to the +layout.svelte file -->
  <h1>Error {status}</h1>
  <p>{error.message}</p>
  