import React from 'react';
import { Newspaper, ExternalLink, Quote, BookOpen, Check } from 'lucide-react';
import { KERALA_PROFILE } from '../data/devnathData';

export const KeralaPress: React.FC = () => {
  return (
    <section id="press" className="kerala-press-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="kerala-section-header">
          <div className="header-flower-tag">
            <span>📰</span>
            <span>പത്രമാധ്യമങ്ങളിൽ വന്ന വാർത്തകൾ</span>
            <span>📰</span>
          </div>
          <h2 className="header-title-ml">ഗൾഫ് ന്യൂസ് ഫീച്ചർ സ്റ്റോറി</h2>
          <h3 className="header-title-en">MEDIA COVERAGE & PRESS FEATURE</h3>
          <div className="kasavu-line"></div>
        </div>

        <div className="press-layout-grid">
          
          {/* Main Article Card */}
          <div className="main-press-card">
            <div className="press-top-row">
              <span className="publisher-tag">
                <Newspaper size={16} /> GULF NEWS SPORT
              </span>
              <a
                href={KERALA_PROFILE.gulfNewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-read-original"
              >
                വാർത്ത വായിക്കൂ <ExternalLink size={12} />
              </a>
            </div>

            <h3 className="press-headline">
              "{KERALA_PROFILE.pressHeadline}"
            </h3>

            <div className="press-byline">
              <span>റിപ്പോർട്ട്: K.R. Nayar, Chief Cricket Writer</span>
              <span>•</span>
              <span>Dubai, UAE</span>
            </div>

            <div className="press-excerpt-box">
              <p>
                "Dubai: Delhi Private School (DPS), Sharjah and Kricket’s Spero Academy, Dubai have got a young captain in Devnath Menon who leads from the front. He will turn 16 on May 9 but leads the team with the maturity of an experienced cricketer."
              </p>
              <p>
                "Devnath not only led Kricket’s Spero Academy to title triumph in the prestigious fourth Shyam Bhatia Cricket for Care Under-16 Inter Academy tournament... but also bagged the top individual awards by steering DPS to victory in Skyline University tournament."
              </p>
            </div>

            <div className="press-highlights">
              <h4 className="highlights-head"><BookOpen size={16} /> പ്രധാന ഹൈലൈറ്റുകൾ:</h4>
              <ul className="highlights-list">
                <li><Check size={14} className="check-icon" /> <strong>ഇരട്ട ക്യാപ്റ്റൻസി:</strong> ഡി.പി.എസ് ഷാർജ സ്കൂളിലും ക്രിക്കറ്റ്സ് സ്‌പെറോ അക്കാദമിയിലും മികച്ച നായകൻ.</li>
                <li><Check size={14} className="check-icon" /> <strong>ചെന്നൈ സ്പിൻ ക്യാമ്പ്:</strong> മുൻ ഇന്ത്യൻ സ്പിന്നർ എൽ. ശിവരാമകൃഷ്ണന് കീഴിൽ 30 ദിവസത്തെ തീവ്ര പരിശീലനം.</li>
                <li><Check size={14} className="check-icon" /> <strong>NSL ടോപ് ബൗളർ:</strong> നാഷണൽ സ്കൂൾസ് ലീഗിൽ 12 വിക്കറ്റുകൾ നേടി മുൻനിരയിൽ.</li>
                <li><Check size={14} className="check-icon" /> <strong>ലക്ഷ്യം:</strong> യു.എ.ഇ ദേശീയ ടീമിൽ സ്ഥാനം നേടുക എന്ന സ്വപ്നം.</li>
              </ul>
            </div>

            <a
              href={KERALA_PROFILE.gulfNewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-full-gulfnews"
            >
              ഗൾഫ് ന്യൂസ് ഫുൾ ആർട്ടിക്കിൾ വായിക്കാം <ExternalLink size={16} />
            </a>
          </div>

          {/* Cricinfo Profile Card */}
          <div className="side-cricinfo-card">
            <div className="cricinfo-header">
              <span className="espn">ESPN</span>
              <span className="cric">cricinfo</span>
            </div>

            <h4 className="cricinfo-profile-title">Cricketer Profile Record</h4>
            <p className="cricinfo-profile-sub">
              ഓഫീഷ്യൽ ഇ.എസ്.പി.എൻ ക്രിക്ഇൻഫോ പ്രൊഫൈൽ റെക്കോർഡ്.
            </p>

            <div className="cricinfo-details-box">
              <div className="cric-row">
                <span>Player Name:</span>
                <strong>Devnath Menon</strong>
              </div>
              <div className="cric-row">
                <span>Cricinfo ID:</span>
                <strong>1258084</strong>
              </div>
              <div className="cric-row">
                <span>Playing Role:</span>
                <strong>All-Rounder</strong>
              </div>
              <div className="cric-row">
                <span>Teams:</span>
                <strong>DPS Sharjah & Kricket's Spero</strong>
              </div>
            </div>

            <a
              href={KERALA_PROFILE.cricinfoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-full-cricinfo"
            >
              ESPNcricinfo പ്രൊഫൈൽ സന്ദർശിക്കൂ <ExternalLink size={16} />
            </a>

            <div className="sachin-quote-box">
              <Quote size={20} className="quote-icon" />
              <p>
                "സച്ചിൻ ടെണ്ടുൽക്കറെ മാതൃകയാക്കി ഓരോ മത്സരത്തിലും കൂടുതൽ മെച്ചപ്പെടാൻ ശ്രമിക്കുന്നു."
              </p>
              <span>— ദേവ്നാഥ് മേനോൻ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
