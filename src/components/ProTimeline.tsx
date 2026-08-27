import React from 'react';
import { Flag, Sparkles, Shield, Trophy } from 'lucide-react';
import { KERALA_TIMELINE } from '../data/devnathData';

export const ProTimeline: React.FC = () => {
  return (
    <section id="timeline" className="pro-timeline-section">
      <div className="container">
        
        {/* Section Title Bar */}
        <div className="pro-section-title-bar">
          <div className="title-left">
            <Flag size={20} className="title-icon-cyan" />
            <h2>Career Trajectory & Milestones</h2>
          </div>
          <span className="title-sub">Player Progression</span>
        </div>

        <div className="pro-timeline-container">
          <div className="timeline-spine"></div>

          {KERALA_TIMELINE.map((item, idx) => (
            <div
              className={`pro-timeline-node ${item.highlight ? 'highlight-node' : ''}`}
              key={idx}
            >
              <div className="node-marker">
                {item.highlight ? <Sparkles size={14} /> : <div className="dot"></div>}
              </div>

              <div className="node-card">
                <div className="node-card-header">
                  <span className="year-badge">{item.yearOrAge}</span>
                  <span className="type-badge">{item.badge}</span>
                </div>

                <h4 className="node-title-en">{item.titleEn}</h4>
                <h5 className="node-title-ml">{item.titleMl}</h5>

                <div className="node-team">
                  <Shield size={12} /> Team: <strong>{item.team}</strong>
                </div>

                <p className="node-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
