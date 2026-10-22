import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const key = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onClose]);
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose}><button onClick={onClose} aria-label="Close image preview"><X /></button><img src={src} alt="Enlarged South India landscape" onClick={e => e.stopPropagation()}/></div>;
}
