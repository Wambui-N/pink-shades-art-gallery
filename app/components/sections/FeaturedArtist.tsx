import Image from 'next/image';
import Reveal from '../shared/Reveal';

export default function FeaturedArtist() {
  return (
    <section id="artist-story" className="py-section-gap overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[1/1] md:aspect-[3/4]">
              <Image
                src="/portrait.jpg"
                alt="Portrait of the featured artist, Wanjiru Ndung'u"
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Featured Artist</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Wanjiru Ndung'u</h2>
            <blockquote className="relative border-l-4 border-secondary pl-6 text-xl italic text-text/80 my-8">
              "My work is a conversation with color and light. I seek to capture fleeting moments of beauty and translate them onto canvas, creating a space for viewers to find their own moment of peace and reflection."
            </blockquote>
            <p className="text-text/70 leading-relaxed">
              Based in the serene countryside, Wanjiru Ndung'u has been painting for over two decades. Her abstract landscapes are renowned for their ethereal quality and masterful use of color. This month, we are honored to feature a selection of her latest works, each a testament to her unique vision and profound connection to the natural world.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}