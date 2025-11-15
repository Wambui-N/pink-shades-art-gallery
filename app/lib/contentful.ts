import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error('Contentful space ID and access token must be defined in .env.local');
}

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries(contentType: string) {
  try {
    console.log(`[Contentful] Fetching entries for content type: ${contentType}`);
    console.log(`[Contentful] Space ID: ${space}`);
    console.log(`[Contentful] Access Token exists: ${!!accessToken}`);
    
    const entries = await client.getEntries({ 
      content_type: contentType,
      include: 2 // This resolves linked assets (Link -> Asset)
    });
    
    console.log(`[Contentful] Total entries found: ${entries.total}`);
    console.log(`[Contentful] Items array length: ${entries.items?.length || 0}`);
    
    if (entries.items && entries.items.length > 0) {
      console.log(`[Contentful] First entry sample:`, {
        id: entries.items[0].sys.id,
        contentType: entries.items[0].sys.contentType?.sys?.id,
        fields: Object.keys(entries.items[0].fields || {})
      });
      return entries.items;
    } else {
      console.warn(`[Contentful] No items found for content type: ${contentType}`);
    }
  } catch (error: any) {
    console.error(`[Contentful] Error fetching entries for content type ${contentType}:`, error);
    if (error.response) {
      console.error(`[Contentful] Error response:`, error.response);
    }
    if (error.message) {
      console.error(`[Contentful] Error message:`, error.message);
    }
  }
  return [];
}