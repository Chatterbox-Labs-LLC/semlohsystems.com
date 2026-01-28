import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holmes and Paskewitz Capital LLC | HP Capital",
  description: "Holmes and Paskewitz Capital LLC (HP Capital) is the systematic trading arm of Semloh Systems Corp, specializing in quantitative equity strategies and market microstructure.",
};

export default function HPCapitalPage() {
  return (
    <main className="flex-grow py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-4">Investment Division</h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 uppercase leading-tight">
            Holmes and Paskewitz Capital LLC
          </h1>
          
          <div className="space-y-12">
            <section className="space-y-6">
              <p className="text-xl text-black font-normal leading-relaxed opacity-80">
                HP Capital is the systematic trading arm of Semloh Systems Corp, where every investment decision is rooted in deep mathematical research and statistical validation.
              </p>
              <p className="text-lg text-black font-normal leading-relaxed opacity-60">
                Our investment philosophy is purely quantitative, utilizing high-dimensional data analysis and empirical research to identify market anomalies. We apply rigorous mathematical frameworks to manage risk and execute trades across liquid global equity markets, ensuring that our strategies are both robust and scalable.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
