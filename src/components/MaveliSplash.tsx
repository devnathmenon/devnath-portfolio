import React, { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface MaveliSplashProps {
  onComplete: () => void;
}

export const MaveliSplash: React.FC<MaveliSplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="maveli-splash-overlay" role="dialog" aria-label="Maveli Loading Splash">
      
      {/* Traditional Pookkalam Rotating Mandala Background */}
      <div className="pookkalam-bg-mandala"></div>
      
      {/* Banner Title */}
      <div className="splash-title-box">
        <div className="maveli-welcome-tag">
          <span>🌸</span>
          <span>മാവേലി തമ്പുരാന്റെ വരവ്</span>
          <span>🌸</span>
        </div>
        <h1 className="splash-title-ml">മാവേലി നാടു വാണീടും കാലം...</h1>
        <h2 className="splash-title-en">WELCOME KING MAVELI • DEVNATH MENON FAN PAGE</h2>
      </div>

      {/* Maveli Running Track */}
      <div className="maveli-track">
        
        {/* Animated Maveli Character running across from 0% to 100% */}
        <div
          className="maveli-runner"
          style={{ left: `${progress}%` }}
        >
          {/* Maveli Vector Character Illustration */}
          <div className="maveli-character">
            {/* Olakkuda (Palm Leaf Umbrella) */}
            <div className="olakkuda">☂️</div>

            {/* Maveli Figure */}
            <div className="maveli-body">
              {/* Crown */}
              <div className="maveli-crown">👑</div>
              
              {/* Head with Mustache & Smile */}
              <div className="maveli-head">
                <span className="pottu">🔴</span>
                <span className="mustache">🧔</span>
              </div>

              {/* Royal Kasavu Dhoti & Garland */}
              <div className="maveli-torso">
                <span className="garland">📿</span>
                <span className="cricket-bat">🏏</span>
              </div>
            </div>

            <div className="maveli-caption">മാവേലി 🏃‍♂️</div>
          </div>
        </div>

      </div>

      {/* Kasavu Gold Progress Bar */}
      <div className="splash-progress-wrapper">
        <div className="kasavu-progress-track">
          <div
            className="kasavu-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-num-row">
          <span>മാവേലി ഓടിയെത്തുന്നു... ({progress}%)</span>
          <button className="btn-skip-splash" onClick={onComplete}>
            Skip Splash ➔
          </button>
        </div>
      </div>

    </div>
  );
};
