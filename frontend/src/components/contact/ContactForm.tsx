import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '../../types';
import { useAudio } from '../../hooks/useAudio';

/**
 * ContactForm — Velvet Room styled high-contrast contact form
 * with client-side validation and submit animation.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { playSound } = useAudio();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      playSound('error');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call (replace with real POST /api/v1/contact/ in Phase 2)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    playSound('success');
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-16 px-6 border-2 border-octane-yellow bg-phantom-dark"
        style={{ boxShadow: '4px 4px 0px #FFE600' }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <CheckCircle size={48} className="text-octane-yellow mx-auto mb-4" />
        <h3 className="font-display text-3xl tracking-wider text-comic-white mb-2">
          MESSAGE SENT
        </h3>
        <p className="text-panel-light/80">
          Your inquiry has been received. I'll respond as soon as possible.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }}
          className="mt-6 px-6 py-2 border-2 border-comic-white text-comic-white
                     font-display text-sm tracking-widest hover:bg-comic-white
                     hover:text-phantom-black transition-colors"
          style={{ transform: 'skewX(-8deg)' }}
        >
          <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>
            SEND ANOTHER
          </span>
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <FormField
        id="contact-name"
        label="NAME"
        value={formData.name}
        onChange={(v) => handleChange('name', v)}
        error={errors.name}
        placeholder="Enter your name"
      />

      {/* Email */}
      <FormField
        id="contact-email"
        label="EMAIL"
        type="email"
        value={formData.email}
        onChange={(v) => handleChange('email', v)}
        error={errors.email}
        placeholder="your@email.com"
      />

      {/* Subject */}
      <FormField
        id="contact-subject"
        label="SUBJECT"
        value={formData.subject}
        onChange={(v) => handleChange('subject', v)}
        error={errors.subject}
        placeholder="What's this about?"
      />

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block font-display text-sm tracking-[0.2em] text-panel-light mb-2"
        >
          MESSAGE
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          className={`w-full px-4 py-3 bg-phantom-black border-2 text-comic-white font-body text-sm
                     placeholder-muted resize-none focus:outline-none transition-colors
                     ${errors.message ? 'border-thief-red' : 'border-halftone-gray focus:border-velvet-bright'}`}
        />
        {errors.message && (
          <p className="flex items-center gap-1 mt-1 text-xs text-thief-red">
            <AlertCircle size={12} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center gap-3 px-8 py-3 bg-thief-red text-comic-white
                   font-display text-sm tracking-[0.3em] border-2 border-thief-red
                   hover:bg-thief-red-bright disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
        style={{ transform: 'skewX(-8deg)', boxShadow: 'var(--shadow-comic-sm)' }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span
          className="flex items-center gap-3"
          style={{ display: 'inline-flex', transform: 'skewX(8deg)' }}
        >
          <Send size={16} />
          {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
        </span>
      </motion.button>
    </form>
  );
}

/** Reusable form field */
function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-display text-sm tracking-[0.2em] text-panel-light mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-phantom-black border-2 text-comic-white font-body text-sm
                   placeholder-muted focus:outline-none transition-colors
                   ${error ? 'border-thief-red' : 'border-halftone-gray focus:border-velvet-bright'}`}
      />
      {error && (
        <p className="flex items-center gap-1 mt-1 text-xs text-thief-red">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}
