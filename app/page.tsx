import DeskScene from './components/DeskScene';

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Wall (top section, green) */}
      <div className="bg-[var(--wall)] border-b-[2px] border-black" style={{ height: '76vh' }} />
      
      {/* Floor (bottom section, brown) */}
      <div className="bg-[var(--desk)]" style={{ height: '30vh' }} />

      {/* Desk scene overlays both sections */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl pointer-events-auto">
          <DeskScene />
        </div>
      </div>
    </div>
  );
}