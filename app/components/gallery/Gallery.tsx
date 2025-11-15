"use client";
import Button from '../ui/Button';
import ProductCard from './ProductCard';

export default function Gallery({ artworks }: { artworks: any }) {
  console.log("Gallery received artworks:", artworks);
  console.log("Number of artworks:", artworks?.length);
  
  return (
    <section id="gallery" className="py-section-gap">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">The Gallery</h2>
          <p className="text-lg text-text/70 mt-4 max-w-2xl mx-auto">Browse a selection of our curated original paintings.</p>
        </div>
        {artworks && artworks.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {artworks.map((artwork: any) => (
              <ProductCard key={artwork.sys.id} artwork={artwork.fields} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text/50">No artworks available at this time.</p>
          </div>
        )}
        <div className="text-center mt-12">
          <Button className="text-text bg-accent" href="#contact" variant="secondary">Inquire About a Piece</Button>
        </div>
      </div>
    </section>
  );
}