export default function SectionDivider({ flip = false }) {
    return (
      <div className={`w-full h-24 md:h-32 -mb-1 ${flip ? 'transform -scale-y-100' : ''}`} style={{ background: 'var(--background)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path fill="var(--background)" fillOpacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
    );
  }