export function BackgroundArt() {
  return (
    <div className="bg-art" aria-hidden>
      <svg
        className="bg-art__svg"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Standing books left */}
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <rect x="70" y="180" width="38" height="160" rx="2" />
          <rect x="112" y="165" width="34" height="175" rx="2" />
          <rect x="150" y="195" width="42" height="145" rx="2" />
          <path d="M78 200h22M78 220h22M116 185h18M116 205h18M158 215h26M158 235h26" />
        </g>

        {/* Open book bottom left */}
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <path d="M90 560c40-35 90-35 130 0v90c-40-28-90-28-130 0z" />
          <path d="M220 560c40-35 90-35 130 0v90c-40-28-90-28-130 0z" />
          <path d="M220 560v90" />
          <path d="M130 585h50M130 605h45M250 585h55M250 605h50" opacity="0.7" />
        </g>

        {/* Stack bottom right */}
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <rect x="880" y="520" width="210" height="34" rx="2" transform="rotate(-4 880 520)" />
          <rect x="890" y="555" width="200" height="32" rx="2" transform="rotate(-2 890 555)" />
          <rect x="900" y="588" width="190" height="30" rx="2" />
          <rect x="905" y="620" width="185" height="28" rx="2" transform="rotate(2 905 620)" />
          <path d="M910 532h160M915 566h150M920 600h145M925 632h140" opacity="0.55" />
        </g>

        {/* Vertical row top center-right */}
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <rect x="720" y="90" width="28" height="150" rx="2" />
          <rect x="752" y="105" width="26" height="135" rx="2" />
          <rect x="782" y="80" width="32" height="160" rx="2" />
          <rect x="818" y="98" width="24" height="142" rx="2" />
          <rect x="846" y="88" width="30" height="152" rx="2" />
        </g>

        {/* Thick upright book mid left */}
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <path d="M420 120h70l18 200h-70z" />
          <path d="M435 145h40M435 170h40M435 195h35" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
}
