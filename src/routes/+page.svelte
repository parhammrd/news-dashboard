<script lang="ts">
    import "carbon-components-svelte/css/g90.css";
    import Card from '$lib/components/Card.svelte';
  
    export let data: { news: Array<{ banner_image: string; title: string; summary: string; url: string; source: string; overall_sentiment_label: string; topics: Array<{ topic: string; relevance_score: string }> }> };
  </script>

  <style>
    .news-board {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
    }
  </style>
  
  <div class="news-board">
    {#if data.news.length > 0}
      {#each data.news as article}
        <Card 
          banner_image={article.banner_image}
          title={article.title} 
          summary={article.summary} 
          url={article.url} 
          source={article.source} 
          overall_sentiment_label={article.overall_sentiment_label} 
          topics={article.topics} />
      {/each}
    {:else}
      <p>No news available.</p>
    {/if}
  </div>
