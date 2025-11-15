import Image from 'next/image';
import Reveal from '../shared/Reveal';

export default function ProductCard({ artwork, onQuickView }) {
  return (
    <Reveal className="break-inside-avoid">
      <button onClick={() => onQuickView(artwork)} className="group relative w-full text-left">
        <div className={`aspect-[${artwork.aspect.replace(':', '/')}] overflow-hidden rounded-[10px]`}>
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={600}
            height={artwork.aspect === '1:1' ? 600 : 450}
            className="object-cover object-center w-full h-full transition-transform duration-500 ease-custom-ease group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="  text-sm bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-[10px]">
            Contact Artist
          </div>
        </div>
      </button>
      <div className="pt-4">
        <h3 className="font-serif font-semibold text-lg">{artwork.title}</h3>
        <p className="text-sm text-text/70">{artwork.artist}</p>
        <p className="text-sm font-medium mt-1">{artwork.priceLabel}</p>
      </div>
    </Reveal>
  );
}