import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { KERALA_PROFILE } from '../data/devnathData';

export const KeralaFooter: React.FC = () => {
  return (
    <footer className="kerala-footer">
      <div className="kasavu-border-top"></div>

      <div className="container footer-layout">
        
        <div className="footer-col-brand">
          <div className="footer-logo">
            <span className="lamp">🪔</span>
            <span className="brand-ml">{KERALA_PROFILE.nameMl}</span>
          </div>
          <p className="footer-tagline-ml">
            ഡി.പി.എസ് ഷാർജ & ക്രിക്കറ്റ്സ് സ്‌പെറോ അക്കാദമി നായകനും ഓൾറൗണ്ടറുമായ ദേവ്നാഥ് മേനോന്റെ ഔദ്യോഗിക പോർട്ട്ഫോളിയോ.
          </p>
        </div>

        <div className="footer-col-links">
          <h4 className="footer-head-ml">പ്രധാന ലിങ്കുകൾ</h4>
          <ul className="footer-links-list">
            <li>
              <a href={KERALA_PROFILE.gulfNewsUrl} target="_blank" rel="noopener noreferrer">
                ഗൾഫ് ന്യൂസ് വാർത്ത <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href={KERALA_PROFILE.cricinfoUrl} target="_blank" rel="noopener noreferrer">
                ESPNcricinfo പ്രൊഫൈൽ (1258084) <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col-teams">
          <h4 className="footer-head-ml">ടീമുകൾ</h4>
          <ul className="footer-teams-list">
            <li>🏏 ഡി.പി.എസ് ഷാർജ (DPS Sharjah)</li>
            <li>🏏 ക്രിക്കറ്റ്സ് സ്‌പെറോ (Kricket's Spero)</li>
            <li>🏏 ചെന്നൈ സ്പിൻ ക്യാമ്പ് (Cricket Drome)</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-flex">
          <span>© {new Date().getFullYear()} ദേവ്നാഥ് മേനോൻ ഫാൻ ക്ലബ്ബ്. All Rights Reserved.</span>
          <span className="credit">
            കേരളീയ തനിമയോടെ നിര്‍മ്മിച്ചത് <Heart size={12} fill="#900C3F" color="#900C3F" />
          </span>
        </div>
      </div>
    </footer>
  );
};
