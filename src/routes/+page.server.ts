import { ALPHA_VANTAGE_API_KEY, BASE_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

// Define the structure of the news article
interface Article {
  banner_image: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  overall_sentiment_label: string;
  topics: Array<{ topic: string; relevance_score: string }>;
}

export const load: PageServerLoad = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/query?function=NEWS_SENTIMENT&tickers=COIN&CRYPTO=BTC&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    // Map the feed to the Article type
    const news: Article[] = data.feed?.map((article: any) => ({
      banner_image: article.banner_image,
      title: article.title,
      summary: article.summary,
      url: article.url,
      source: article.source,
      overall_sentiment_label: article.overall_sentiment_label,
      topics: article.topics || []
    })) || [];
    
    return { news };
  } catch (error) {
    console.error("Failed to load news data:", error);
    return { news: [] };
  }
};
