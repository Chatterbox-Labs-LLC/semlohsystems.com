import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-bold">
          <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="/founders" className="hover:opacity-50 transition-opacity">Founders</Link>
          <Link href="/hp-capital" className="hover:opacity-50 transition-opacity">HP Capital</Link>
          <Link href="/software" className="hover:opacity-50 transition-opacity">Software</Link>
          <Link href="/newsroom" className="hover:opacity-50 transition-opacity">Newsroom</Link>
          <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-30">
          <div className="space-y-1">
            <p>© 2026 Semloh Systems Corp</p>
            <p>Incorporated in Delaware • Funds domiciled in the Cayman Islands</p>
          </div>
          <Link href="/legal" className="hover:opacity-100 transition-opacity">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
