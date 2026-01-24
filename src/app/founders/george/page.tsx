import { Metadata } from "next";

export const metadata: Metadata = {
  title: "George S Holmes | Co-Founder",
  description: "George S Holmes is a Co-Founder of Semloh Systems Corp, leading quantitative research and investment strategy for the firm's systematic trading operations.",
};

export default function GeorgePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "George S Holmes",
    "jobTitle": "Co-Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Semloh Systems Corp"
    },
    "url": "https://semlohsystems.com/founders/george",
    "description": "Co-Founder of Semloh Systems Corp, leading quantitative research and investment strategy."
  };

  return (
    <main className="flex-grow py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 uppercase">George</h1>
          
          <div className="space-y-12">
            <p className="text-xl text-black font-normal leading-relaxed opacity-80">
              George is a Co-Founder of Semloh Systems Corp, where he leads the firm's quantitative research and investment strategy. With a deep background in statistical modeling and market microstructure, he has been instrumental in developing the proprietary algorithms that drive our systematic trading operations.
            </p>
            <p className="text-lg text-black font-normal leading-relaxed opacity-60">
              Prior to founding the firm, George held senior roles at several global financial institutions, focusing on high-frequency trading and risk management. For direct inquiries regarding quantitative research or strategic partnerships, he can be reached at george@semlohcorp.com.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
