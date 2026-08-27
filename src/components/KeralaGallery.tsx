import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/devnathData';

export const KeralaGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="kerala-gallery-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="kerala-section-header">
          <div className="header-flower-tag">
            <span>📷</span>
            <span>ചിത്രശാല & വിജയാഘോഷങ്ങൾ</span>
            <span>📷</span>
          </div>
          <h2 className="header-title-ml">ഫോട്ടോ ഗാലറി</h2>
          <h3 className="header-title-en">REAL MATCH & TROPHY GALLERY</h3>
          <div className="kasavu-line"></div>
        </div>

        {/* Gallery Grid */}
        <div className="kerala-gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              className="gallery-card-item"
              key={idx}
              onClick={() => setSelectedImage(photo.url)}
            >
              <div className="gallery-img-wrapper">
                <img src={photo.url} alt={photo.captionMl} className="gallery-img" />
                <div className="gallery-tag-pill">{photo.tag}</div>
              </div>
              <div className="gallery-caption-bar">
                <p className="caption-text-ml">{photo.captionMl}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div className="gallery-modal-overlay animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <div className="modal-image-frame">
              <img src={selectedImage} alt="Full view" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
