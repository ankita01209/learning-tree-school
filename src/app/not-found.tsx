import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-[#FFF9F2]">
      <span className="inline-block bg-[#397D67]/10 text-[#397D67] text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
        404 — Page Not Found
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#304653] mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-base md:text-lg text-[#304653]/70 max-w-md mx-auto mb-8">
        The page you are looking for does not exist or has been moved. Let&apos;s get you back to Learning Tree School.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#397D67] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#304653] transition-colors"
      >
        Return to Home <span>→</span>
      </Link>
    </main>
  );
}

