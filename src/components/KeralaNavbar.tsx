import React, { useState } from 'react';
import { Flame, ExternalLink, Menu, X, Award } from 'lucide-react';
import { KERALA_PROFILE } from '../data/devnathData';

interface KeralaNavbarProps {
  onTriggerLamp: () => void;
  lampLit: boolean;
}

export const KeralaNavbar: React.FC<KeralaNavbarProps> = ({ onTriggerLamp, lampLit }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="kerala-navbar">
      <div className="kerala-nav-container">
        
        {/* Brand Malayalam Logo */}
        <a href="#" className="kerala-nav-logo">
          <div className="logo-lamp-icon">🪔</div>
          <div className="logo-text-group">
            <span className="logo-ml">{KERALA_PROFILE.nameMl}</span>
            <span className="logo-en">DEVNATH MENON</span>
          </div>
        </a>

        {/* Navigation Links Desktop */}
        <nav className="kerala-nav-links desktop-only">
          <a href="#about" className="kerala-nav-link">ആമുഖം (About)</a>
          <a href="#stats" className="kerala-nav-link">നേട്ടങ്ങൾ (Stats)</a>
          <a href="#gallery" className="kerala-nav-link">ഗാലറി (Gallery)</a>
          <a href="#press" className="kerala-nav-link">വാർത്തകൾ (Press)</a>
          <a href="#timeline" className="kerala-nav-link">വഴികാട്ടി (Timeline)</a>
          <a href="#wishes" className="kerala-nav-link">ആശംസകൾ (Fan Zone)</a>
        </nav>

        {/* Action Buttons Desktop */}
        <div className="kerala-nav-actions desktop-only">
          <button
            className={`btn-kerala-lamp ${lampLit ? 'lit' : ''}`}
            onClick={onTriggerLamp}
            title="Light the traditional Nilavilakku lamp"
          >
            <Flame size={16} className="flame-icon" />
            <span>{lampLit ? 'നിലവിളക്ക് തെളിഞ്ഞു' : 'നിലവിളക്ക് തെളിക്കൂ'}</span>
          </button>

          <a
            href={KERALA_PROFILE.gulfNewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kerala-link"
          >
            Gulf News <ExternalLink size={12} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenu && (
        <div className="kerala-mobile-drawer animate-fade-in">
          <a href="#about" className="kerala-mob-link" onClick={() => setMobileMenu(false)}>ആമുഖം (About)</a>
          <a href="#stats" className="kerala-mob-link" onClick={() => setMobileMenu(false)}>നേട്ടങ്ങൾ (Stats)</a>
          <a href="#press" className="kerala-mob-link" onClick={() => setMobileMenu(false)}>വാർത്തകൾ (Press)</a>
          <a href="#timeline" className="kerala-mob-link" onClick={() => setMobileMenu(false)}>വഴികാട്ടി (Timeline)</a>
          <a href="#wishes" className="kerala-mob-link" onClick={() => setMobileMenu(false)}>ആശംസകൾ (Fan Zone)</a>

          <div className="mob-actions">
            <button
              className={`btn-kerala-lamp full-width ${lampLit ? 'lit' : ''}`}
              onClick={() => {
                onTriggerLamp();
                setMobileMenu(false);
              }}
            >
              <Flame size={16} />
              <span>{lampLit ? 'നിലവിളക്ക് തെളിഞ്ഞു' : 'നിലവിളക്ക് തെളിക്കൂ'}</span>
            </button>

            <a
              href={KERALA_PROFILE.gulfNewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kerala-link full-width"
            >
              Read Gulf News Feature <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
