import React, { useState } from 'react';
import { Search, ExternalLink, Menu, X, ShieldCheck } from 'lucide-react';
import { KERALA_PROFILE } from '../data/devnathData';

export const ProNavbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="pro-navbar">
      <div className="pro-nav-container">
        
        {/* ESPNcricinfo Brand Logo */}
        <a href="#" className="pro-nav-brand">
          <div className="cricinfo-logo-box">
            <span className="espn-text">ESPN</span>
            <span className="cric-text">cricinfo</span>
          </div>
          <div className="brand-divider"></div>
          <div className="player-brand-name">
            <span className="name-main">DEVNATH MENON</span>
            <span className="name-sub">UAE YOUTH ALL-ROUNDER</span>
          </div>
        </a>

        {/* Search Bar Widget (Matches reference UI) */}
        <div className="pro-search-bar desktop-only">
          <Search size={14} className="search-icon" />
          <input
            type="text"
            placeholder="Search players, stats, records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Nav Links */}
        <nav className="pro-nav-links desktop-only">
          <a href="#overview" className="pro-nav-link active">Overview</a>
          <a href="#stats" className="pro-nav-link">Stats & Records</a>
          <a href="#gallery" className="pro-nav-link">Gallery</a>
          <a href="#press" className="pro-nav-link">News</a>
          <a href="#timeline" className="pro-nav-link">Career</a>
          <a href="#fanzone" className="pro-nav-link">Fan Zone</a>
        </nav>

        {/* Action Badges */}
        <div className="pro-nav-actions desktop-only">
          <a
            href={KERALA_PROFILE.cricinfoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cricinfo-badge"
          >
            <ShieldCheck size={14} className="cyan-check" />
            <span>ID: 1258084</span>
          </a>

          <a
            href={KERALA_PROFILE.gulfNewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gulfnews-link"
          >
            Gulf News <ExternalLink size={12} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="pro-mobile-toggle mobile-only"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Menu"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="pro-mobile-drawer animate-fade-in">
          <a href="#overview" className="pro-mob-link" onClick={() => setMobileMenu(false)}>Overview</a>
          <a href="#stats" className="pro-mob-link" onClick={() => setMobileMenu(false)}>Stats & Records</a>
          <a href="#gallery" className="pro-mob-link" onClick={() => setMobileMenu(false)}>Gallery</a>
          <a href="#press" className="pro-mob-link" onClick={() => setMobileMenu(false)}>News & Press</a>
          <a href="#timeline" className="pro-mob-link" onClick={() => setMobileMenu(false)}>Career Trajectory</a>
          <a href="#fanzone" className="pro-mob-link" onClick={() => setMobileMenu(false)}>Fan Zone</a>

          <div className="mob-action-buttons">
            <a
              href={KERALA_PROFILE.cricinfoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cricinfo-badge full-width"
            >
              ESPNcricinfo Record (ID 1258084) <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
