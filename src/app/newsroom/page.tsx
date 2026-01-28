import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom | Semloh",
  description: "Latest news and press releases from Semloh, including investment round announcements and corporate milestones.",
};

export default function NewsroomPage() {
  return (
    <main className="flex-grow py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 uppercase">Newsroom</h1>
          
          <div className="space-y-12">
            <p className="text-xl text-black font-normal leading-relaxed opacity-80">
              Semloh is pleased to announce that its flagship quantitative fund has successfully completed its latest investment round, securing significant capital commitments from a consortium of institutional partners. This infusion of capital will accelerate the deployment of our advanced systematic trading strategies across global equity markets.
            </p>
            <p className="text-lg text-black font-normal leading-relaxed opacity-60">
              For all media and press-related questions regarding our latest investment milestones or to request an official statement from our leadership team, please contact our corporate communications department at press@semlohcorp.com. We remain committed to maintaining transparent communication with our stakeholders and the broader financial community.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
