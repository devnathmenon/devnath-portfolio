import React from 'react';
import { Flag, Sparkles, Shield, Trophy } from 'lucide-react';
import { KERALA_TIMELINE } from '../data/devnathData';

export const KeralaTimeline: React.FC = () => {
  return (
    <section id="timeline" className="kerala-timeline-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="kerala-section-header">
          <div className="header-flower-tag">
            <span>🌸</span>
            <span>വിജയവഴികളിലൂടെയുള്ള യാത്ര</span>
            <span>🌸</span>
          </div>
          <h2 className="header-title-ml">വഴികാട്ടി: മൈൽസ്റ്റോണുകൾ</h2>
          <h3 className="header-title-en">CAREER TIMELINE & MILESTONES</h3>
          <div className="kasavu-line"></div>
        </div>

        <div className="pookkalam-timeline-container">
          <div className="pookkalam-spine"></div>

          {KERALA_TIMELINE.map((item, idx) => (
            <div
              className={`pookkalam-timeline-card ${item.highlight ? 'highlight-node' : ''}`}
              key={idx}
            >
              <div className="pookkalam-flower-node">
                {item.highlight ? <Sparkles size={16} /> : <span>🌸</span>}
              </div>

              <div className="pookkalam-card-content">
                <div className="timeline-card-head">
                  <span className="year-pill-ml">{item.yearOrAge}</span>
                  <span className="badge-pill-ml">{item.badge}</span>
                </div>

                <h4 className="card-title-ml">{item.titleMl}</h4>
                <h5 className="card-title-en">{item.titleEn}</h5>

                <div className="team-row">
                  <Shield size={13} className="shield-icon" />
                  <span>ടീം: <strong>{item.team}</strong></span>
                </div>

                <p className="card-desc-p">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
