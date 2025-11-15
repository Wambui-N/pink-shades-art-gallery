import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-text/10 mt-section-gap">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-2">Pink Shades Art Gallery</h3>
            <p className="text-sm text-text/70 max-w-sm">Curating exceptional original paintings from emerging and established artists for the discerning collector.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="#collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#artist-story" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pinterest</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-text/10 pt-8 text-center text-xs text-text/50">
          <p>&copy; {currentYear} Pink Shades Art Gallery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}