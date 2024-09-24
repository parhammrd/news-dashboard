<script>
// @ts-nocheck

    import { Button, Tag } from "carbon-components-svelte";

    export let banner_image;
    export let title;
    export let summary;
    export let url;
    export let source;
    export let overall_sentiment_label;
    export let topics;

    /**
     * @param {string} relevance_score
     */
    function getTagType(relevance_score) {
        const score = parseFloat(relevance_score);
        if (score === 1.0) {
            return 'green'; // Most relevant
        } else if (score >= 0.75) {
            return 'teal';
        } else if (score >= 0.5) {
            return 'blue';
        } else if (score >= 0.25) {
            return 'orange';
        } else {
            return 'red'; // Least relevant
        }
    }
</script>
  
  <div class="card">
    {#if banner_image}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={banner_image}
        width="500rem"
        alt="News Image"
        class="banner-image"
      />
    {/if}
    <div>
        <h3>{title}</h3>
        <div class="content">
            <p>{summary}</p>
        </div>
        <p><strong>Source:</strong> {source}</p>
        <p><strong>Sentiment:</strong> {overall_sentiment_label}</p>
    </div>
    <ul class='topics'>
    {#each topics as { topic, relevance_score }}
        <Tag type={getTagType(relevance_score)}>{topic}</Tag>
    {/each}
    </ul>
    <Button kind="primary" href={url} target="_blank">Read more</Button>
  </div>
  
  <style>
    .card {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;
    }
    .banner-image {
      max-width: 100%;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    .content {
        margin: 10px 0 10px 0;
    }
    .topics {
      margin: 10px 0px 25px 0px;
    }

    /** Mobile */
    @media (max-width: 768px) {
    img {
        width: 100rem;
    }
    }
  </style>
  