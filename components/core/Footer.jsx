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
            <h3 className="font-serif text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-text/70 hover:text-text/50">About Us</Link></li>
              <li><Link href="/artists" className="text-sm text-text/70 hover:text-text/50">Artists</Link></li>
              <li><Link href="/contact" className="text-sm text-text/70 hover:text-text/50">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="https://instagram.com" className="text-sm text-text/70 hover:text-text/50">Instagram</Link></li>
              <li><Link href="https://facebook.com" className="text-sm text-text/70 hover:text-text/50">Facebook</Link></li>
              <li><Link href="https://twitter.com" className="text-sm text-text/70 hover:text-text/50">Twitter</Link></li>
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
