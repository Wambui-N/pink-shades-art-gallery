import Reveal from '../shared/Reveal';
import Button from '../shared/Button';

export default function Newsletter() {
  return (
    <section id="contact" className="py-section-gap">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Join the Gallery</h2>
          <p className="text-lg text-text/70 mt-4">
            Receive exclusive previews, collector insights, and be the first to know about new arrivals and consignment opportunities.
          </p>
        </Reveal>
        <Reveal>
          <form className="mt-8 flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 border border-secondary rounded-[10px] focus:ring-2 focus:ring-primary focus:outline-none"
              aria-label="Email Address"
            />
            <Button>Subscribe</Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}