import React from 'react';
import { Award, Trophy, ShieldCheck, Target, Zap } from 'lucide-react';
import { KERALA_STATS, KERALA_ACHIEVEMENTS } from '../data/devnathData';

export const ProStatsDashboard: React.FC = () => {
  return (
    <section id="stats" className="pro-stats-section">
      <div className="container">
        
        {/* Section Title Bar */}
        <div className="pro-section-title-bar">
          <div className="title-left">
            <Trophy size={20} className="title-icon-cyan" />
            <h2>Career Stats & Tournament Records</h2>
          </div>
          <span className="title-sub">ESPNcricinfo Record Database</span>
        </div>

        {/* Top Highlight Metric Cards */}
        <div className="pro-metrics-grid">
          {KERALA_STATS.map((stat, idx) => (
            <div className="pro-metric-card" key={idx}>
              <div className="metric-header">
                <span className="metric-value">{stat.val}</span>
                <Zap size={16} className="zap-icon" />
              </div>
              <h3 className="metric-title-en">{stat.labelEn}</h3>
              <p className="metric-title-ml">{stat.labelMl}</p>
              <span className="metric-sub-tag">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Detailed Tournament Achievement Table Cards */}
        <div className="pro-tournaments-title">
          <h3>Major Tournament Titles & Individual Awards</h3>
        </div>

        <div className="pro-tournaments-grid">
          {KERALA_ACHIEVEMENTS.map((item) => (
            <div className="pro-tournament-card" key={item.id}>
              
              {item.imgUrl && (
                <div className="tournament-card-img">
                  <img src={item.imgUrl} alt={item.titleEn} />
                  <div className="award-badge-floating">
                    <Award size={13} /> {item.awardEn}
                  </div>
                </div>
              )}

              <div className="tournament-card-body">
                <div className="org-pill-bar">
                  <span className="org-name">{item.organizer}</span>
                  <span className="tourney-tag">{item.tournament}</span>
                </div>

                <h4 className="tourney-title-en">{item.titleEn}</h4>
                <p className="tourney-title-ml">{item.titleMl}</p>

                <div className="role-badge">
                  <ShieldCheck size={14} /> Role: <strong>{item.role}</strong>
                </div>

                <p className="tourney-desc">{item.details}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
