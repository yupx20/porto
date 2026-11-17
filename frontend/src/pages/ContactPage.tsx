import { motion } from 'motion/react';
import PageTransition from '../components/layout/PageTransition';
import ContactForm from '../components/contact/ContactForm';
import HalftonePattern from '../components/ui/HalftonePattern';
import { profile } from '../data/profile';
import { MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons';

/**
 * ContactPage — "The Velvet Room" (PRD Module 4)
 * Contact form + social links. Terminal easter egg is globally available.
 */

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  ExternalLink,
  Mail,
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        {/* Page header */}
        <section className="relative py-16 overflow-hidden">
          <HalftonePattern opacity={0.03} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-6xl sm:text-7xl tracking-tight text-comic-white">
                THE VELVET
                <span className="text-velvet-bright"> ROOM</span>
              </h1>
              <div className="h-1 w-24 bg-velvet-bright mt-4" />
              <p className="mt-4 text-lg text-panel-light/70 max-w-xl">
                Welcome, trickster. Reach out for collaborations, opportunities,
                or just to say hello. The contract has been sealed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact content */}
        <section className="relative py-8">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form — takes 3 columns */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Sidebar — takes 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {/* Status card */}
                <motion.div
                  className="p-6 bg-phantom-dark border-2 border-halftone-gray"
                  style={{ boxShadow: 'var(--shadow-comic-sm)' }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="font-display text-lg tracking-[0.2em] text-comic-white mb-4">
                    CURRENT STATUS
                  </h3>

                  <div className="space-y-3">
                    <StatusItem
                      icon={<Clock size={16} />}
                      label="Availability"
                      value={profile.availability}
                      valueColor="text-octane-yellow"
                    />
                    <StatusItem
                      icon={<MapPin size={16} />}
                      label="Location"
                      value={profile.location}
                    />
                    <StatusItem
                      icon={<Mail size={16} />}
                      label="Email"
                      value={profile.email}
                    />
                  </div>
                </motion.div>

                {/* Social links */}
                <motion.div
                  className="p-6 bg-phantom-dark border-2 border-halftone-gray"
                  style={{ boxShadow: 'var(--shadow-comic-sm)' }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <h3 className="font-display text-lg tracking-[0.2em] text-comic-white mb-4">
                    CONNECT
                  </h3>

                  <div className="space-y-2">
                    {profile.social_links.map((link) => {
                      const Icon = socialIcons[link.icon] || Mail;
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 border border-halftone-gray
                                     text-panel-light hover:text-comic-white hover:border-thief-red
                                     hover:bg-thief-red/5 transition-all group"
                        >
                          <Icon size={18} className="text-muted group-hover:text-thief-red transition-colors" />
                          <span className="font-display text-sm tracking-wider">
                            {link.platform.toUpperCase()}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Terminal hint */}
                <motion.div
                  className="p-4 border border-dashed border-velvet-bright/30 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-xs text-velvet-bright/60 font-mono">
                    Press <kbd className="px-1.5 py-0.5 bg-phantom-black border border-velvet-bright/30 text-velvet-bright text-[10px]">Ctrl+K</kbd> or{' '}
                    <kbd className="px-1.5 py-0.5 bg-phantom-black border border-velvet-bright/30 text-velvet-bright text-[10px]">`</kbd> to open the secret terminal
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

function StatusItem({
  icon,
  label,
  value,
  valueColor = 'text-panel-light',
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-muted">{icon}</span>
      <span className="text-xs text-muted font-display tracking-wider min-w-[80px]">
        {label}:
      </span>
      <span className={`text-sm font-display tracking-wider ${valueColor}`}>{value}</span>
    </div>
  );
}
