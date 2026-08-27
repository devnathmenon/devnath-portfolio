import React, { useState } from 'react';
import { Flame, Shield, Award, Sparkles, ExternalLink, Play, Image as ImageIcon, Star } from 'lucide-react';
import { KERALA_PROFILE, KERALA_HERO_ASSETS } from '../data/devnathData';

interface KeralaHeroProps {
  lampLit: boolean;
  onTriggerLamp: () => void;
}

export const KeralaHero: React.FC<KeralaHeroProps> = ({ lampLit, onTriggerLamp }) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'photo'>('video');

  return (
    <section id="about" className="kerala-hero-section">
      <div className="kerala-hero-bg-pattern"></div>
      
      {/* Floating Kasavu Gold Glow Elements */}
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>

      <div className="container hero-layout-grid">
        
        {/* Left Column: Traditional Bio & Information */}
        <div className="hero-info-col">
          
          <div className="traditional-heritage-badge">
            <Sparkles size={14} className="sparkle-gold" />
            <span>{KERALA_PROFILE.heritageTag}</span>
          </div>

          <h1 className="hero-name-ml text-gradient-gold">
            {KERALA_PROFILE.nameMl}
          </h1>
          <h2 className="hero-name-en">
            DEVNATH MENON
          </h2>

          <p className="hero-tagline-ml">
            {KERALA_PROFILE.titleMl}
          </p>
          <p className="hero-tagline-en">
            Leading <strong>DPS Sharjah</strong> and <strong>Kricket's Spero Academy</strong> across the UAE with all-round excellence.
          </p>

          {/* Luxury Kasavu Bio Chips */}
          <div className="hero-bio-chips">
            <div className="bio-chip-pretty">
              <div className="chip-icon-box"><Shield size={14} /></div>
              <div className="chip-text">
                <strong>ഡി.പി.എസ്. ഷാർജ നായകൻ</strong>
                <span>DPS Sharjah School Captain</span>
              </div>
            </div>

            <div className="bio-chip-pretty">
              <div className="chip-icon-box"><Award size={14} /></div>
              <div className="chip-text">
                <strong>ശ്യാം ഭാട്ടിയ U-16 മികച്ച ബൗളർ</strong>
                <span>Shyam Bhatia Best Bowler Trophy</span>
              </div>
            </div>

            <div className="bio-chip-pretty">
              <div className="chip-icon-box"><Sparkles size={14} /></div>
              <div className="chip-text">
                <strong>ചെന്നൈ സ്പിൻ ക്യാമ്പ്</strong>
                <span>Sivaramakrishnan Spin Apprentice (30 Days)</span>
              </div>
            </div>
          </div>

          {/* Traditional Nalukettu Quote Spotlight */}
          <div className="nalukettu-quote-card pretty-quote">
            <div className="quote-brass-lamp">🪔</div>
            <p className="quote-ml">"{KERALA_PROFILE.quoteMl}"</p>
            <span className="quote-author-sig">— ഗൾഫ് ന്യൂസ് അഭിമുഖത്തിൽ ദേവ്നാഥ് മേനോൻ</span>
          </div>

          {/* Hero CTAs */}
          <div className="hero-cta-group">
            <a href="#stats" className="btn-kerala-gold pretty-btn">
              <Award size={18} /> പ്രധാന നേട്ടങ്ങൾ (Career Stats)
            </a>
            <button
              onClick={onTriggerLamp}
              className={`btn-kerala-lamp-large pretty-btn ${lampLit ? 'lit' : ''}`}
            >
              <Flame size={18} className="flame-animate" />
              <span>{lampLit ? 'നിലവിളക്ക് തെളിഞ്ഞു (Lamp Lit)' : 'നിലവിളക്ക് തെളിക്കൂ (Light Lamp)'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: High-Impact Video/Photo Showcase & Nilavilakku Lamp */}
        <div className="hero-lamp-col">
          
          {/* Media Showcase Card */}
          <div className="hero-media-tab-card pretty-media-card">
            <div className="media-tabs-header">
              <button
                className={`tab-toggle-btn ${activeMediaTab === 'video' ? 'active' : ''}`}
                onClick={() => setActiveMediaTab('video')}
              >
                <Play size={14} /> വീഡിയോ പ്രകടനം (Action Highlights)
              </button>
              <button
                className={`tab-toggle-btn ${activeMediaTab === 'photo' ? 'active' : ''}`}
                onClick={() => setActiveMediaTab('photo')}
              >
                <ImageIcon size={14} /> ചിത്രം (Captain Portrait)
              </button>
            </div>

            <div className="media-tab-view">
              {activeMediaTab === 'video' ? (
                <div className="video-view-box animate-fade-in">
                  <video
                    src={KERALA_HERO_ASSETS.mainVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-media-video"
                  ></video>
                  <div className="media-caption">
                    <span className="live-dot">●</span> <span>ബാറ്റിംഗ് & ബൗളിംഗ് പ്രകടനം (Match Highlights)</span>
                  </div>
                </div>
              ) : (
                <div className="photo-view-box animate-fade-in">
                  <img
                    src={KERALA_HERO_ASSETS.mainPortrait}
                    alt="Devnath Menon Captain"
                    className="hero-media-img"
                  />
                  <div className="media-caption">
                    <Star size={12} className="star-icon" /> <span>ദേവ്നാഥ് മേനോൻ (Captain Devnath)</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Nilavilakku Brass Lamp Card */}
          <div className={`traditional-lamp-card pretty-lamp-card ${lampLit ? 'lamp-glowing' : ''}`}>
            
            <div className="card-top-decoration">
              <span>🪔</span>
              <span className="kasavu-header-title">തനിമയാർന്ന നിലവിളക്ക്</span>
              <span>🪔</span>
            </div>

            <div className="nilavilakku-wrapper">
              <div className="nilavilakku-stand">
                <div className={`lamp-flame ${lampLit ? 'active-flame' : ''}`}>
                  <div className="flame-core"></div>
                  <div className="flame-halo"></div>
                </div>

                <div className="lamp-brass-body">
                  <div className="lamp-crown"></div>
                  <div className="lamp-oil-bowl">
                    <span className="wick w1"></span>
                    <span className="wick w2"></span>
                    <span className="wick w3"></span>
                  </div>
                  <div className="lamp-stem"></div>
                  <div className="lamp-pedestal"></div>
                </div>
              </div>
            </div>

            <div className="lamp-card-info">
              <h3 className="lamp-card-title">ദേവ്നാഥ് മേനോൻ</h3>
              <p className="lamp-card-sub">യു.എ.ഇ യൂത്ത് ക്രിക്കറ്റ് നായകൻ</p>

              <div className="lamp-card-stats-mini">
                <div className="mini-stat">
                  <strong>12</strong>
                  <span>NSL Wickets</span>
                </div>
                <div className="mini-stat-sep"></div>
                <div className="mini-stat">
                  <strong>U-16</strong>
                  <span>Best Bowler</span>
                </div>
                <div className="mini-stat-sep"></div>
                <div className="mini-stat">
                  <strong>#1</strong>
                  <span>School Captain</span>
                </div>
              </div>
            </div>

            <div className="lamp-card-footer">
              <span>ഗൾഫ് ന്യൂസ് & ക്രിക്ഇൻഫോ ഫീച്ചർ</span>
              <a href={KERALA_PROFILE.gulfNewsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
