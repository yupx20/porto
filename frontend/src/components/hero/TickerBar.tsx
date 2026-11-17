import { profile } from '../../data/profile';

/**
 * TickerBar — Animated scrolling bar displaying top competencies.
 * Uses CSS animation (no JS runtime cost) for infinite horizontal scroll.
 * Content is duplicated to create a seamless loop.
 */
export default function TickerBar() {
  const items = profile.top_competencies;

  return (
    <div className="w-full overflow-hidden bg-thief-red py-2.5 border-t-2 border-phantom-black">
      <div className="animate-ticker flex whitespace-nowrap">
        {/* Duplicate the list for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 mx-6 font-display text-sm tracking-[0.2em] text-comic-white uppercase"
          >
            <span className="inline-block w-2 h-2 bg-octane-yellow rotate-45" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
