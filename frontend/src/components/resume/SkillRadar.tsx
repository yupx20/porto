import { motion } from 'motion/react';
import { radarData } from '../../data/skills';
import type { RadarDataPoint } from '../../types';

/**
 * SkillRadar — Interactive SVG hexagonal radar chart.
 * Each vertex represents a skill category, with the filled area
 * showing proficiency levels. Animated on viewport entry.
 *
 * Pure SVG — no chart library dependency.
 */

const SIZE = 400;
const CENTER = SIZE / 2;
const RADIUS = 150;
const LABEL_RADIUS = RADIUS + 35;

export default function SkillRadar() {
  const numAxes = radarData.length;

  /** Get (x, y) point for a given axis index and distance from center (0–1) */
  const getPoint = (index: number, value: number): [number, number] => {
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    return [
      CENTER + Math.cos(angle) * RADIUS * value,
      CENTER + Math.sin(angle) * RADIUS * value,
    ];
  };

  /** Generate the polygon path string for a set of values */
  const getPath = (data: RadarDataPoint[]): string => {
    return data
      .map((d, i) => {
        const [x, y] = getPoint(i, d.value / 100);
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ') + ' Z';
  };

  /** Grid rings at 25%, 50%, 75%, 100% */
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <div className="flex flex-col items-center">
      {/* Section header */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="inline-block px-6 py-2 bg-velvet-indigo mb-3"
          style={{ transform: 'skewX(-12deg)' }}
        >
          <span
            className="font-display text-xl tracking-[0.3em] text-comic-white"
            style={{ display: 'inline-block', transform: 'skewX(12deg)' }}
          >
            PERSONA HEXAGON
          </span>
        </div>
        <p className="text-muted text-sm tracking-wider">
          // SKILL PROFICIENCY ANALYSIS
        </p>
      </motion.div>

      {/* SVG Radar */}
      <motion.svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="w-full max-w-[380px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Grid rings */}
        {gridLevels.map((level) => (
          <polygon
            key={level}
            points={Array.from({ length: numAxes })
              .map((_, i) => getPoint(i, level).join(','))
              .join(' ')}
            fill="none"
            stroke="var(--color-halftone-gray)"
            strokeWidth="1"
            opacity={0.5}
          />
        ))}

        {/* Axis lines */}
        {radarData.map((_, i) => {
          const [x, y] = getPoint(i, 1);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="var(--color-halftone-gray)"
              strokeWidth="1"
              opacity={0.3}
            />
          );
        })}

        {/* Filled data area */}
        <motion.path
          d={getPath(radarData)}
          fill="var(--color-thief-red)"
          fillOpacity={0.2}
          stroke="var(--color-thief-red)"
          strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, fillOpacity: 0 },
            visible: {
              pathLength: 1,
              fillOpacity: 0.2,
              transition: { duration: 1.5, ease: 'easeOut' },
            },
          }}
        />

        {/* Data points */}
        {radarData.map((d, i) => {
          const [x, y] = getPoint(i, d.value / 100);
          return (
            <motion.circle
              key={d.category}
              cx={x}
              cy={y}
              r={4}
              fill="var(--color-thief-red)"
              stroke="var(--color-comic-white)"
              strokeWidth="2"
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: { delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 },
                },
              }}
            />
          );
        })}

        {/* Labels */}
        {radarData.map((d, i) => {
          const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
          const lx = CENTER + Math.cos(angle) * LABEL_RADIUS;
          const ly = CENTER + Math.sin(angle) * LABEL_RADIUS;

          return (
            <text
              key={d.category}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-panel-light)"
              fontSize="10"
              fontFamily="var(--font-display)"
              letterSpacing="0.1em"
            >
              {d.category.toUpperCase()}
            </text>
          );
        })}

        {/* Value labels (percentage) */}
        {radarData.map((d, i) => {
          const [x, y] = getPoint(i, d.value / 100);
          return (
            <text
              key={`val-${d.category}`}
              x={x}
              y={y - 12}
              textAnchor="middle"
              fill="var(--color-octane-yellow)"
              fontSize="9"
              fontFamily="var(--font-display)"
              fontWeight="bold"
            >
              {d.value}
            </text>
          );
        })}
      </motion.svg>
    </div>
  );
}
