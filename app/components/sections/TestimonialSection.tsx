import Reveal from '../shared/Reveal';

const testimonials = [
  {
    quote: "The painting I purchased from Pink Shades is the centerpiece of my home. The entire process was seamless, and the artwork is even more breathtaking in person.",
    author: "Amelia Worthington",
    location: "New York, NY"
  },
  {
    quote: "As an interior designer, I frequently source art for clients. Pink Shades has become my go-to for unique, high-quality pieces. The curation is impeccable.",
    author: "James Peterson",
    location: "San Francisco, CA"
  }
];

export default function Testimonials() {
  return (
    <section className="py-section-gap bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">Words from Our Collectors</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index}>
              <div className="bg-background p-8 rounded-[10px] h-full">
                <p className="text-text/80 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-text/60">{testimonial.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}