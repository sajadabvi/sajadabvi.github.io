import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header & Navigation */}
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          <div className="font-bold text-xl">Mohammadsajad Abavisani</div>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/research">Research</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/media">Media</Link>
            <Link href="/photography">Photography</Link>
          </div>
        </nav>
      </header>
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8"> 
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Mohammadsajad Abavisani. All rights reserved.
      </footer>
    </div>
  );
}
