import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/devnathData';

export const ProGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="pro-gallery-section">
      <div className="container">
        
        {/* Section Title Bar */}
        <div className="pro-section-title-bar">
          <div className="title-left">
            <Camera size={20} className="title-icon-cyan" />
            <h2>Match Action & Trophy Gallery</h2>
          </div>
          <span className="title-sub">Official Photos</span>
        </div>

        {/* Gallery Grid */}
        <div className="pro-gallery-grid">
          {GALLERY_PHOTOS.map((item, idx) => (
            <div
              className="pro-gallery-card"
              key={idx}
              onClick={() => setSelectedImg(item.url)}
            >
              <div className="gallery-img-box">
                <img src={item.url} alt={item.captionMl} />
                <div className="expand-overlay">
                  <Maximize2 size={20} />
                </div>
                <div className="tag-badge">{item.tag}</div>
              </div>
              <div className="gallery-caption-box">
                <p className="caption-text">{item.captionMl}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox */}
      {selectedImg && (
        <div className="pro-modal-overlay animate-fade-in" onClick={() => setSelectedImg(null)}>
          <div className="pro-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedImg(null)}>
              <X size={24} />
            </button>
            <div className="modal-img-container">
              <img src={selectedImg} alt="Enlarged view" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
