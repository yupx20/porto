import { motion } from 'motion/react';

/**
 * RankBadge — Persona Confidant rank badge (Rank 1–10).
 * Filled stars indicate completed rank, empty for remaining.
 * Color intensity increases with rank.
 */
interface RankBadgeProps {
  rank: number;
}

export default function RankBadge({ rank }: RankBadgeProps) {
  const maxRank = 10;

  // Color intensifies with rank
  const color =
    rank >= 9
      ? 'text-octane-yellow border-octane-yellow'
      : rank >= 6
        ? 'text-thief-red border-thief-red'
        : 'text-velvet-bright border-velvet-bright';

  return (
    <motion.div
      className={`flex items-center gap-1.5 px-3 py-1.5 border-2 ${color}`}
      style={{ transform: 'skewX(-8deg)' }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
    >
      <span
        className="font-display text-xs tracking-[0.2em]"
        style={{ display: 'inline-block', transform: 'skewX(8deg)' }}
      >
        RANK
      </span>
      <span
        className="font-display text-lg"
        style={{ display: 'inline-block', transform: 'skewX(8deg)' }}
      >
        {rank}
      </span>
      <span
        className="text-xs opacity-50"
        style={{ display: 'inline-block', transform: 'skewX(8deg)' }}
      >
        /{maxRank}
      </span>
    </motion.div>
  );
}
