export default function Trust() {
  const brands = [
    { name: 'Razorpay', logo: RazorpayLogo },
    { name: 'Zepto', logo: ZeptoLogo },
    { name: 'Groww', logo: GrowwLogo },
    { name: 'Meesho', logo: MeeshoLogo },
    { name: 'CRED', logo: CredLogo },
    { name: 'Slice', logo: SliceLogo },
    { name: 'Jar', logo: JarLogo },
    { name: 'Jupiter', logo: JupiterLogo },
  ];

  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 border-y border-omnexa-border bg-omnexa-soft-white">
      <div className="section-container mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-omnexa-gray text-center">
          Trusted by teams building serious products
        </p>
      </div>

      <div className="marquee-container">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 flex-shrink-0"
              style={{ minWidth: '120px' }}
            >
              <brand.logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RazorpayLogo() {
  return (
    <svg width="110" height="28" viewBox="0 0 110 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Razorpay</text>
    </svg>
  );
}

function ZeptoLogo() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Zepto</text>
    </svg>
  );
}

function GrowwLogo() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Groww</text>
    </svg>
  );
}

function MeeshoLogo() {
  return (
    <svg width="90" height="28" viewBox="0 0 90 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Meesho</text>
    </svg>
  );
}

function CredLogo() {
  return (
    <svg width="60" height="28" viewBox="0 0 60 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">CRED</text>
    </svg>
  );
}

function SliceLogo() {
  return (
    <svg width="60" height="28" viewBox="0 0 60 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Slice</text>
    </svg>
  );
}

function JarLogo() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Jar</text>
    </svg>
  );
}

function JupiterLogo() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" fill="#0A0A0A">Jupiter</text>
    </svg>
  );
}
