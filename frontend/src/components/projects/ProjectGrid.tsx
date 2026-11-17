import { useState, useMemo } from 'react';
import { projects, projectLanguages } from '../../data/projects';
import type { Project } from '../../types';
import ProjectCard, { ProjectModal } from './ProjectCard';
import ProjectFilter from './ProjectFilter';

/**
 * ProjectGrid — Filterable grid of project cards (PRD Module 3).
 * Includes client-side filtering by language, topic, star count, and featured status.
 */
export default function ProjectGrid() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => {
        if (selectedLanguage !== 'All' && p.primary_language !== selectedLanguage) return false;
        if (showFeaturedOnly && !p.is_featured) return false;
        if (
          searchQuery &&
          !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !p.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !p.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        )
          return false;
        return true;
      })
      .sort((a, b) => b.stars - a.stars);
  }, [selectedLanguage, showFeaturedOnly, searchQuery]);

  return (
    <div>
      {/* Filters */}
      <ProjectFilter
        languages={projectLanguages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        showFeaturedOnly={showFeaturedOnly}
        onFeaturedChange={setShowFeaturedOnly}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filteredProjects.length}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenModal={setModalProject}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="font-display text-2xl tracking-wider text-muted">
            NO TARGETS FOUND
          </p>
          <p className="text-sm text-halftone-mid mt-2">
            Try adjusting your filters
          </p>
        </div>
      )}

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
