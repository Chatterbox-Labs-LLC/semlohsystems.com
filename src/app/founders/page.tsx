import Link from "next/link";

export default function FoundersPage() {
  return (
    <main className="flex-grow py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 uppercase">Founders</h1>
          
          <div className="space-y-12">
            <p className="text-xl text-black font-normal leading-relaxed opacity-80">
              Semloh Systems Corp was founded by <Link href="/founders/george" className="underline hover:opacity-50 transition-opacity">George</Link> and <Link href="/founders/connor" className="underline hover:opacity-50 transition-opacity">Connor</Link>, two visionaries who combined their expertise in quantitative finance and high-performance computing to build a modern financial institution. Together, they lead the firm's strategic direction and commitment to innovation.
            </p>
            <p className="text-lg text-black font-normal leading-relaxed opacity-60">
              By maintaining a flat organizational structure and a culture of radical transparency, our founders ensure that the best ideas always rise to the top. This commitment to intellectual honesty and meritocracy is the foundation upon which Semloh Systems Corp continues to grow and redefine the industry.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
