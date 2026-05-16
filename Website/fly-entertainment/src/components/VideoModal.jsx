import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl aspect-video bg-black border border-white/10 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[var(--fly-orange)] hover:text-black hover:border-[var(--fly-orange)] transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <iframe
          title={video.title}
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
