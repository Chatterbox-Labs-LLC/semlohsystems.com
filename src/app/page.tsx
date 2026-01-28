import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semloh Systems Corp | Chicago Investment & Technology",
  description: "Founded in 2024 in Chicago, Semloh Systems Corp is a holding company for Holmes and Paskewitz Capital LLC and Semloh Software LLC, focusing on quantitative finance and engineering.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Semloh Systems Corp",
    "alternateName": "Semloh Systems",
    "url": "https://semlohsystems.com",
    "logo": "https://semlohsystems.com/logo.png",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "George S Holmes"
      },
      {
        "@type": "Person",
        "name": "Connor"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "description": "Diversified holding company specializing in quantitative equity strategies and institutional software infrastructure.",
    "subOrganization": [
      {
        "@type": "Organization",
        "name": "Holmes and Paskewitz Capital LLC",
        "alternateName": "HP Capital"
      },
      {
        "@type": "Organization",
        "name": "Semloh Software LLC"
      }
    ]
  };

  return (
    <main className="flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-black mb-12 uppercase leading-none">
              Semloh Systems Corp
            </h1>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-black font-normal leading-relaxed opacity-80">
                Founded in 2024 and headquartered in Chicago, Semloh Systems Corp is a premier trading firm defined by a rigorous, research-based approach and mathematical precision in global investing.
              </p>
              <p className="text-lg text-black font-normal leading-relaxed opacity-60">
                Our organization is structured to transform complex quantitative research into systematic trading strategies. By leveraging advanced mathematical models and institutional-grade infrastructure, we navigate global markets with scientific objectivity and discipline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
