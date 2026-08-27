import React, { useState, useRef } from 'react';
import { Play, ChevronDown, ExternalLink, ShieldCheck, Award, Star, Trophy, Sparkles, Maximize2, X, Volume2 } from 'lucide-react';
import { KERALA_PROFILE, KERALA_HERO_ASSETS } from '../data/devnathData';

export const ProHeroDashboard: React.FC = () => {
  const [isFullScreenVideo, setIsFullScreenVideo] = useState(false);
  const fullScreenVideoRef = useRef<HTMLVideoElement>(null);

  const handleOpenVideo = () => {
    setIsFullScreenVideo(true);
    setTimeout(() => {
      if (fullScreenVideoRef.current) {
        fullScreenVideoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  return (
    <section id="overview" className="pro-hero-dashboard">
      
      {/* Background Watermark Text */}
      <div className="hero-watermark-text">DEVNATH</div>

      <div className="container dashboard-grid">
        
        {/* Left Column: Player Title & Overview Glass Card */}
        <div className="dash-left-col">
          
          {/* Big Player Headline */}
          <div className="player-headline-box">
            <h1 className="dash-first-name">DEVNATH</h1>
            <h2 className="dash-last-name">MENON</h2>
            <div className="dash-country-role">
              <span className="country-flag">🇦🇪</span>
              <span>UAE | All Rounder</span>
              <span className="bullet-sep">•</span>
              <span>2016 – Present</span>
            </div>
          </div>

          {/* Overview Glass Panel */}
          <div className="glass-overview-card">
            <div className="glass-card-header">
              <span className="header-title">Overview</span>
            </div>

            <div className="overview-details-grid">
              <div className="overview-item">
                <span className="item-label">FULL NAME</span>
                <strong className="item-val">Devnath Menon</strong>
              </div>

              <div className="overview-item">
                <span className="item-label">BORN / DOB</span>
                <strong className="item-val">May 9</strong>
              </div>

              <div className="overview-item">
                <span className="item-label">PLAYING ROLE</span>
                <strong className="item-val">Opening Batsman & Off-Spinner</strong>
              </div>

              <div className="overview-item">
                <span className="item-label">CAPTAINCY</span>
                <strong className="item-val">DPS Sharjah & Kricket's Spero</strong>
              </div>
            </div>

            <div className="overview-coaching-line">
              <span className="coaching-label">SPECIALIST COACHING:</span>
              <span className="coaching-val">Chennai Spin Camp under former Indian leg-spinner <strong>L. Sivaramakrishnan</strong></span>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="dash-quick-pills">
            <a href="#stats" className="quick-pill-btn">
              <span>Stats</span> <ChevronDown size={14} />
            </a>
            <a href="#gallery" className="quick-pill-btn">
              <span>Videos</span> <ChevronDown size={14} />
            </a>
            <a href="#press" className="quick-pill-btn">
              <span>Records</span> <ChevronDown size={14} />
            </a>
            <a href="#timeline" className="quick-pill-btn">
              <span>Matches</span> <ChevronDown size={14} />
            </a>
          </div>

        </div>

        {/* Center Column: High-Res Athlete Cutout Portrait */}
        <div className="dash-center-col">
          <div className="player-cutout-frame">
            <img
              src={KERALA_HERO_ASSETS.mainPortrait}
              alt="Devnath Menon Athlete Profile"
              className="player-cutout-img"
            />
            <div className="cutout-gradient-overlay"></div>
            <div className="jersey-number-badge">#4</div>
          </div>
        </div>

        {/* Right Column: Top Teams & Click-to-Fullscreen Video Highlights */}
        <div className="dash-right-col">
          
          {/* Top Teams Widget */}
          <div className="widget-card top-players-widget">
            <div className="widget-header-line">
              <span>Teams & Academies</span>
            </div>
            
            <div className="widget-team-list">
              <div className="team-item-row">
                <div className="team-avatar">DPS</div>
                <div className="team-info">
                  <strong>DPS Sharjah</strong>
                  <span>School Captain & Opener</span>
                </div>
              </div>

              <div className="team-item-row">
                <div className="team-avatar sp">KS</div>
                <div className="team-info">
                  <strong>Kricket's Spero Academy</strong>
                  <span>U-16 Champion Captain</span>
                </div>
              </div>

              <div className="team-item-row">
                <div className="team-avatar cd">CD</div>
                <div className="team-info">
                  <strong>Cricket Drome Chennai</strong>
                  <span>Spin Apprentice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Action Video Card (Clickable Fullscreen) */}
          <div className="widget-card video-highlight-widget">
            <div className="video-card-header">
              <span className="live-badge">● MATCH VIDEO</span>
              <span className="video-title">Click to Fullscreen ⛶</span>
            </div>

            <div
              className="video-viewport clickable-video-box"
              onClick={handleOpenVideo}
              title="Click to watch full screen video with sound"
            >
              <video
                src={KERALA_HERO_ASSETS.mainVideo}
                autoPlay
                loop
                muted
                playsInline
                className="pro-dash-video"
              ></video>
              <div className="video-play-overlay">
                <Maximize2 size={24} className="expand-icon" />
                <span>Tap for Fullscreen Video</span>
              </div>
            </div>
          </div>

          {/* News Spotlight Widget */}
          <div className="widget-card news-spotlight-widget">
            <div className="widget-header-line">
              <span>News Feature</span>
            </div>
            
            <a
              href={KERALA_PROFILE.gulfNewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="news-item-link"
            >
              <div className="news-thumbnail">
                <img src="/assets/maxresdefault.jpg" alt="Gulf News Feature" />
              </div>
              <div className="news-text-box">
                <h4 className="news-headline-text">
                  "{KERALA_PROFILE.pressHeadline}"
                </h4>
                <span className="news-author">Gulf News • K.R. Nayar</span>
              </div>
            </a>
          </div>

        </div>

      </div>

      {/* Fullscreen Video Modal Overlay */}
      {isFullScreenVideo && (
        <div className="fullscreen-video-overlay animate-fade-in" onClick={() => setIsFullScreenVideo(false)}>
          <div className="fullscreen-video-card" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <div className="v-title-group">
                <Volume2 size={16} className="audio-icon" />
                <span>Devnath Menon Match Highlights (Audio On)</span>
              </div>
              <button
                className="close-fullscreen-btn"
                onClick={() => setIsFullScreenVideo(false)}
                aria-label="Close video"
              >
                <X size={24} />
              </button>
            </div>

            <div className="fullscreen-video-viewport">
              <video
                ref={fullScreenVideoRef}
                src={KERALA_HERO_ASSETS.mainVideo}
                controls
                autoPlay
                className="fullscreen-video-element"
              ></video>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
