import Image from 'next/image';
import Reveal from '../shared/Reveal';

export default function ProductCard({ artwork }: { artwork: any }) {
  // Handle resolved asset from Contentful (when include: 2 is used)
  // The asset could be resolved directly or might still be a link
  let imageUrl = '/images/placeholder-1.jpg';
  
  if (artwork.art) {
    // If it's resolved (has fields), access the file URL directly
    if (artwork.art.fields?.file?.url) {
      imageUrl = `https:${artwork.art.fields.file.url}`;
    }
    // If it's a link object, we might need to check sys.type
    else if (artwork.art.sys?.type === 'Link') {
      console.warn("Asset is still unresolved:", artwork.title);
    }
  }

  // --- DEBUG LOG ---
  console.log("Product Card Data:", { 
    title: artwork.title, 
    artObject: artwork.art,
    artType: artwork.art?.sys?.type,
    hasFields: !!artwork.art?.fields,
    resolvedImageUrl: imageUrl 
  });

  return (
    <Reveal className="break-inside-avoid">
      <div className="group relative w-full text-left">
        <div className={`aspect-4/3 overflow-hidden rounded-[10px]`}>
          <Image
            src={imageUrl}
            alt={artwork.title || 'Artwork'}
            width={600}
            height={450}
            className="object-cover object-center w-full h-1/3 transition-transform duration-500 ease-custom-ease group-hover:scale-105"
          />
        </div>
      </div>
      <div className="pt-4">
        <h3 className="font-medium font-sans text-base text-text">{artwork.title}</h3>
      </div>
    </Reveal>
  );
}
