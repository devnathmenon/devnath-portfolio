import React from 'react';
import { Newspaper, ExternalLink, ShieldCheck, Quote, BookOpen } from 'lucide-react';
import { KERALA_PROFILE } from '../data/devnathData';

export const ProPressCoverage: React.FC = () => {
  return (
    <section id="press" className="pro-press-section">
      <div className="container">
        
        {/* Section Title Bar */}
        <div className="pro-section-title-bar">
          <div className="title-left">
            <Newspaper size={20} className="title-icon-cyan" />
            <h2>Media & Press Coverage</h2>
          </div>
          <span className="title-sub">Featured Reports</span>
        </div>

        <div className="pro-press-grid">
          
          {/* Main Article Spotlight Card */}
          <div className="pro-article-card">
            <div className="article-header">
              <span className="press-publisher-badge">
                <Newspaper size={14} /> GULF NEWS SPORT
              </span>
              <a
                href={KERALA_PROFILE.gulfNewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="article-link"
              >
                Read Original <ExternalLink size={12} />
              </a>
            </div>

            <h3 className="article-headline">
              "{KERALA_PROFILE.pressHeadline}"
            </h3>

            <div className="article-meta">
              <span>By K. R. Nayar, Chief Cricket Writer</span>
              <span>•</span>
              <span>Gulf News, Dubai</span>
            </div>

            <blockquote className="article-quote-box">
              "Delhi Private School (DPS), Sharjah and Kricket’s Spero Academy, Dubai have got a young captain in Devnath Menon who leads from the front. He turns 16 on May 9 but leads the team with the maturity of an experienced cricketer."
            </blockquote>

            <div className="article-takeaways">
              <h4>Key Takeaways:</h4>
              <ul>
                <li><strong>Dual Captaincy:</strong> Leading both DPS Sharjah school team and Kricket's Spero Academy.</li>
                <li><strong>Spin Masterclass:</strong> Completed intensive 30-day coaching under former Indian leg-spinner L. Sivaramakrishnan in Chennai.</li>
                <li><strong>Leading Wicket Taker:</strong> Captured 12 wickets in National Schools League (NSL).</li>
                <li><strong>Ambition:</strong> Aiming to represent the UAE National Cricket Team across all age groups.</li>
              </ul>
            </div>

            <a
              href={KERALA_PROFILE.gulfNewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-read-full-story"
            >
              Read Full Gulf News Feature <ExternalLink size={14} />
            </a>
          </div>

          {/* Cricinfo Official Record Badge Card */}
          <div className="pro-cricinfo-card">
            <div className="cricinfo-brand-header">
              <span className="espn">ESPN</span>
              <span className="cric">cricinfo</span>
            </div>

            <div className="cricinfo-verify-badge">
              <ShieldCheck size={20} className="cyan-check" />
              <span>OFFICIAL PLAYER DATABASE RECORD</span>
            </div>

            <div className="cricinfo-table">
              <div className="cricinfo-row">
                <span>Player:</span>
                <strong>Devnath Menon</strong>
              </div>
              <div className="cricinfo-row">
                <span>Cricinfo ID:</span>
                <strong>1258084</strong>
              </div>
              <div className="cricinfo-row">
                <span>Role:</span>
                <strong>All-Rounder</strong>
              </div>
              <div className="cricinfo-row">
                <span>Teams:</span>
                <strong>DPS Sharjah & Kricket's Spero</strong>
              </div>
            </div>

            <a
              href={KERALA_PROFILE.cricinfoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cricinfo-profile"
            >
              Open ESPNcricinfo Profile <ExternalLink size={14} />
            </a>

            <div className="quote-spotlight">
              <Quote size={18} className="quote-icon" />
              <p>
                "{KERALA_PROFILE.quoteEn}"
              </p>
              <span className="quote-sig">— Devnath Menon on idolising Sachin Tendulkar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
