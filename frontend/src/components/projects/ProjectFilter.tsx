import { Search, Star } from 'lucide-react';

/**
 * ProjectFilter — Client-side filter bar for the Project Grimoire.
 * Supports language filtering, featured-only toggle, and text search.
 */
interface ProjectFilterProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
  showFeaturedOnly: boolean;
  onFeaturedChange: (show: boolean) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export default function ProjectFilter({
  languages,
  selectedLanguage,
  onLanguageChange,
  showFeaturedOnly,
  onFeaturedChange,
  searchQuery,
  onSearchChange,
  resultCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          id="project-search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects by name, description, or topic..."
          className="w-full pl-10 pr-4 py-3 bg-phantom-dark border-2 border-halftone-gray
                     text-comic-white font-body text-sm placeholder-muted
                     focus:border-thief-red focus:outline-none transition-colors"
        />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Language filter tabs */}
        <div className="flex flex-wrap gap-1.5">
          <FilterPill
            label="ALL"
            isActive={selectedLanguage === 'All'}
            onClick={() => onLanguageChange('All')}
          />
          {languages.map((lang) => (
            <FilterPill
              key={lang}
              label={lang.toUpperCase()}
              isActive={selectedLanguage === lang}
              onClick={() => onLanguageChange(lang)}
            />
          ))}
        </div>

        {/* Featured toggle */}
        <button
          onClick={() => onFeaturedChange(!showFeaturedOnly)}
          className={`flex items-center gap-1.5 px-3 py-1.5 font-display text-xs tracking-widest
            border transition-all duration-200
            ${
              showFeaturedOnly
                ? 'bg-octane-yellow text-phantom-black border-octane-yellow'
                : 'bg-transparent text-muted border-halftone-gray hover:border-octane-yellow hover:text-octane-yellow'
            }`}
          style={{ transform: 'skewX(-8deg)' }}
        >
          <span
            className="flex items-center gap-1.5"
            style={{ display: 'inline-flex', transform: 'skewX(8deg)' }}
          >
            <Star size={10} />
            FEATURED
          </span>
        </button>

        {/* Result count */}
        <span className="text-xs text-muted font-display tracking-wider ml-auto">
          {resultCount} TARGET{resultCount !== 1 ? 'S' : ''} FOUND
        </span>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 font-display text-[10px] tracking-widest transition-all duration-200
        border ${
          isActive
            ? 'bg-thief-red text-comic-white border-thief-red'
            : 'bg-transparent text-muted border-halftone-gray hover:text-comic-white hover:border-comic-white'
        }`}
      style={{ transform: 'skewX(-8deg)' }}
    >
      <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>{label}</span>
    </button>
  );
}
