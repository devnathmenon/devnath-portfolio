import React, { useState } from 'react';
import { Heart, Send, Sparkles, User, MessageSquare } from 'lucide-react';
import { KERALA_WISHES } from '../data/devnathData';

export const KeralaFanZone: React.FC = () => {
  const [wishes, setWishes] = useState(KERALA_WISHES);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now().toString(),
      name: name.trim(),
      location: location.trim() || 'കേരളം / UAE',
      comment: message.trim(),
      time: 'Just now',
      likes: 1
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setLocation('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    setWishes(wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w)));
  };

  return (
    <section id="wishes" className="kerala-wishes-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="kerala-section-header">
          <div className="header-flower-tag">
            <span>🌸</span>
            <span>കായിക പ്രേമികളുടെ ആശംസകൾ</span>
            <span>🌸</span>
          </div>
          <h2 className="header-title-ml">ആശംസാ മണ്ഡപം</h2>
          <h3 className="header-title-en">COMMUNITY FAN ZONE & BLESSINGS</h3>
          <div className="kasavu-line"></div>
        </div>

        <div className="wishes-layout-grid">
          
          {/* Form Card */}
          <div className="wishes-form-card">
            <h3 className="form-head-ml">
              <MessageSquare size={18} className="icon-gold" /> ദേവ്നാഥിന് ആശംസകൾ അയക്കൂ
            </h3>
            <p className="form-sub-ml">
              ദേശീയ ടീമിലേക്ക് കുതിക്കുന്ന ദേവ്നാഥ് മേനോന് നിങ്ങളുടെ പിന്തുണയും ആശംസകളും ഇവിടെ രേഖപ്പെടുത്താം.
            </p>

            {submitted && (
              <div className="wish-success-banner animate-fade-in">
                <Sparkles size={16} /> നിങ്ങളുടെ ആശംസ വിജയകരമായി രേഖപ്പെടുത്തി! (Blessings Published)
              </div>
            )}

            <form onSubmit={handleSubmit} className="kerala-wish-form">
              <div className="form-group-kerala">
                <label>നിങ്ങളുടെ പേര് (Your Name) *</label>
                <input
                  type="text"
                  placeholder="ഉദാ: ഉണ്ണികൃഷ്ണൻ / Rahul"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-kerala">
                <label>സ്ഥലം / നാട് (Location)</label>
                <input
                  type="text"
                  placeholder="ഉദാ: തൃശ്ശൂർ / കൊച്ചി / Dubai"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-group-kerala">
                <label>ആശംസ സന്ദേശം (Message) *</label>
                <textarea
                  rows={4}
                  placeholder="ദേവ്നാഥിനുള്ള വിജയാശംസകൾ..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-kerala">
                <Send size={16} /> ആശംസകൾ സമർപ്പിക്കൂ
              </button>
            </form>
          </div>

          {/* Wishes List */}
          <div className="wishes-wall-card">
            <h3 className="wall-head-ml">സമീപകാല ആശംസകൾ ({wishes.length})</h3>

            <div className="wishes-cards-list">
              {wishes.map((item) => (
                <div className="wish-card-item" key={item.id}>
                  <div className="wish-card-head">
                    <div className="user-icon-box">
                      <User size={16} />
                    </div>
                    <div className="user-info">
                      <span className="user-name-ml">{item.name}</span>
                      <span className="user-loc-ml">{item.location} • {item.time}</span>
                    </div>
                  </div>

                  <p className="wish-comment-p">{item.comment}</p>

                  <button
                    className="btn-wish-like"
                    onClick={() => handleLike(item.id)}
                    title="Like wish"
                  >
                    <Heart size={14} className="heart-icon" /> {item.likes} ആശംസകൾ
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
