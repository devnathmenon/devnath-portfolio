import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { KERALA_PROFILE } from '../data/devnathData';

export const ProFooter: React.FC = () => {
  return (
    <footer className="pro-footer">
      <div className="container footer-content-grid">
        
        <div className="footer-brand-col">
          <div className="footer-cricinfo-logo">
            <span className="espn">ESPN</span>
            <span className="cric">cricinfo</span>
            <span className="profile-tag">ATHLETE PROFILE</span>
          </div>

          <h3 className="footer-player-name">DEVNATH MENON</h3>
          <p className="footer-player-desc">
            Official athlete profile of UAE Youth Cricket Captain, All-Rounder, DPS Sharjah & Kricket's Spero Academy star.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Official Media Links</h4>
          <ul>
            <li>
              <a href={KERALA_PROFILE.cricinfoUrl} target="_blank" rel="noopener noreferrer">
                ESPNcricinfo Record (ID 1258084) <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href={KERALA_PROFILE.gulfNewsUrl} target="_blank" rel="noopener noreferrer">
                Gulf News Feature Story <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-teams-col">
          <h4>Affiliates & Teams</h4>
          <ul>
            <li>🏏 DPS Sharjah School Team</li>
            <li>🏏 Kricket's Spero Academy Dubai</li>
            <li>🏏 Cricket Drome Chennai (Spin Camp)</li>
            <li>🏏 Young Talent Academy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-row">
          <span>© {new Date().getFullYear()} Devnath Menon Fan Page. ESPNcricinfo Dashboard Layout.</span>
          <span>Designed with Pure Class & Performance</span>
        </div>
      </div>
    </footer>
  );
};
