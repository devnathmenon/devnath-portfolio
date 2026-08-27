import React from 'react';
import { Award, Trophy, Target, Zap, ShieldCheck } from 'lucide-react';
import { KERALA_STATS, KERALA_ACHIEVEMENTS } from '../data/devnathData';

export const KeralaStats: React.FC = () => {
  return (
    <section id="stats" className="kerala-stats-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="kerala-section-header">
          <div className="header-flower-tag">
            <span>🪔</span>
            <span>കായിക രംഗത്തെ പ്രധാന നേട്ടങ്ങൾ</span>
            <span>🪔</span>
          </div>
          <h2 className="header-title-ml">പ്രധാന നേട്ടങ്ങളും ട്രോഫികളും</h2>
          <h3 className="header-title-en">CAREER STATS & TOURNAMENT TITLES</h3>
          <div className="kasavu-line"></div>
        </div>

        {/* Quick Numbers Bar */}
        <div className="kerala-stats-grid">
          {KERALA_STATS.map((stat, idx) => (
            <div className="kerala-stat-card" key={idx}>
              <div className="stat-card-glow"></div>
              <span className="stat-big-val">{stat.val}</span>
              <h4 className="stat-title-ml">{stat.labelMl}</h4>
              <p className="stat-title-en">{stat.labelEn}</p>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Detailed Tournament Achievement Cards */}
        <div className="achievements-section-title">
          <Trophy className="trophy-icon-gold" size={22} />
          <span>പ്രധാന ടൂർണമെന്റ് വിജയങ്ങൾ (Major Tournament Honors)</span>
        </div>

        <div className="kerala-achievements-grid">
          {KERALA_ACHIEVEMENTS.map((item) => (
            <div className="nalukettu-achievement-card" key={item.id}>
              
              <div className="card-brass-corner top-left"></div>
              <div className="card-brass-corner top-right"></div>
              <div className="card-brass-corner bottom-left"></div>
              <div className="card-brass-corner bottom-right"></div>

              <div className="achievement-badge-bar">
                <span className="badge-award-ml">
                  <Award size={14} /> {item.awardMl}
                </span>
                <span className="badge-org">{item.organizer}</span>
              </div>

              <h4 className="achievement-head-ml">{item.titleMl}</h4>
              <h5 className="achievement-head-en">{item.titleEn}</h5>

              <div className="role-info-row">
                <ShieldCheck size={14} className="shield-icon" />
                <span>പങ്ക്: <strong>{item.role}</strong></span>
              </div>

              <p className="achievement-details-p">{item.details}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
