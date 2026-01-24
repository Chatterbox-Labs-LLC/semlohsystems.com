import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Compliance | Semloh Systems Corp",
  description: "Corporate governance, regulatory disclosures, and risk warnings for Semloh Systems Corp, HP Capital LLC, and Semloh Software LLC.",
};

export default function LegalPage() {
  const sections = [
    {
      title: "Corporate Structure & Governance",
      content: [
        "Semloh Systems Corp is a private enterprise incorporated under the laws of the State of Delaware, United States. Headquartered in Chicago, Illinois, the corporation serves as the ultimate parent company and strategic holding entity for a diversified group of specialized financial and technological subsidiaries.",
        "The corporate architecture is designed to maintain strict operational separation between our investment management and technology development arms. Our primary domestic subsidiaries include Holmes and Paskewitz Capital LLC, which manages systematic trading operations, and Semloh Software LLC, which handles proprietary infrastructure and platform development.",
        "Our governance framework emphasizes transparency, risk mitigation, and long-term value creation. By centralizing strategic oversight at the parent level while decentralizing execution at the subsidiary level, Semloh Systems Corp ensures that each division maintains the agility required to excel in its respective domain while benefiting from the group's collective resources and stability."
      ]
    },
    {
      title: "Fund Domicile & Cayman Islands Operations",
      content: [
        "The investment funds managed by Holmes and Paskewitz Capital LLC are domiciled in the Cayman Islands. This jurisdiction was selected for its sophisticated legal framework, tax neutrality, and internationally recognized regulatory environment for alternative investment vehicles.",
        "The Cayman Islands funds operate in strict accordance with the Private Funds Act and are subject to the oversight of the Cayman Islands Monetary Authority (CIMA). This structure allows for efficient capital allocation and provides a robust framework for global investors participating in our quantitative equity strategies.",
        "Each fund is supported by leading independent service providers, including international legal counsel, independent auditors, and specialized fund administrators, ensuring that all operations meet the highest institutional standards for transparency and compliance."
      ]
    },
    {
      title: "Regulatory Disclosures",
      content: [
        "Holmes and Paskewitz Capital LLC operates in full compliance with applicable financial regulations in every jurisdiction where it maintains a presence. All trading activities are conducted through regulated exchanges and authorized clearing members.",
        "This website and the materials contained herein are for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to buy any security, investment product, or advisory service. Such offers are only made through confidential offering memoranda and other formal documentation provided to qualified investors."
      ]
    },
    {
      title: "Risk Warning",
      content: [
        "Quantitative trading involves a high degree of risk and is not suitable for all investors. The systematic strategies employed by HP Capital LLC rely on complex mathematical models and historical data which may not accurately predict future market behavior.",
        "Market volatility, liquidity constraints, and technological disruptions can all lead to significant capital loss. Past performance is not a guarantee or a reliable indicator of future results. Investors should conduct their own due diligence and consult with professional advisors before making any investment decisions."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on this website, including but not limited to text, graphics, logos, software architecture descriptions, and proprietary research summaries, is the exclusive property of Semloh Systems Corp or its subsidiaries.",
        "Unauthorized use, reproduction, distribution, or modification of any materials from this site without express written consent is strictly prohibited and protected by international copyright and trademark laws."
      ]
    },
    {
      title: "Privacy & Data Protection",
      content: [
        "We are committed to maintaining the confidentiality and security of all information provided to us. Semloh Systems Corp does not sell or lease personal data to third-party marketers.",
        "Our data protection protocols are designed to meet or exceed industry standards, ensuring that all communications and proprietary data are stored and transmitted securely. We only collect information that is necessary for professional communication and regulatory compliance."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Semloh Systems Corp provides the information on this website 'as is' without any warranties, express or implied. We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, the materials on this site.",
        "We do not warrant the accuracy, completeness, or reliability of any information provided herein and reserve the right to modify the content of this website at any time without prior notice."
      ]
    }
  ];

  return (
    <main className="flex-grow py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 uppercase">Legal & Compliance</h1>
          
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.title} className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 border-b border-black/10 pb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-black font-normal leading-relaxed opacity-70">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg text-black font-normal leading-relaxed opacity-70">
                      {section.content}
                    </p>
                  )}
                </div>
              </section>
            ))}

            <div className="pt-16 border-t border-black/5">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                Last Updated: January 24, 2026<br />
                © 2026 Semloh Systems Corp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
