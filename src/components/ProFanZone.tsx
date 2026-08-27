import React, { useState } from 'react';
import { MessageSquare, Heart, Send, User, Sparkles, Mail } from 'lucide-react';
import { KERALA_WISHES } from '../data/devnathData';

export const ProFanZone: React.FC = () => {
  const [wishes, setWishes] = useState(KERALA_WISHES);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const wishName = name.trim();
    const wishLoc = location.trim() || 'Dubai / Kerala';
    const wishMsg = message.trim();

    const newWish = {
      id: Date.now().toString(),
      name: wishName,
      location: wishLoc,
      comment: wishMsg,
      time: 'Just now',
      likes: 1
    };

    // Update local fan wall
    setWishes([newWish, ...wishes]);

    // Send email to devnathmenon1@gmail.com via mailto trigger
    const emailSubject = encodeURIComponent(`Fan Wish for Devnath Menon from ${wishName}`);
    const emailBody = encodeURIComponent(
      `Name: ${wishName}\nLocation: ${wishLoc}\n\nMessage:\n${wishMsg}\n\nSent via Devnath Menon Athlete Profile Fan Zone`
    );
    const mailtoUrl = `mailto:devnathmenon1@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoUrl;

    setName('');
    setLocation('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleLike = (id: string) => {
    setWishes(wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w)));
  };

  return (
    <section id="fanzone" className="pro-fanzone-section">
      <div className="container">
        
        {/* Section Title Bar */}
        <div className="pro-section-title-bar">
          <div className="title-left">
            <MessageSquare size={20} className="title-icon-cyan" />
            <h2>Supporter Fan Zone & Direct Email</h2>
          </div>
          <span className="title-sub">devnathmenon1@gmail.com</span>
        </div>

        <div className="pro-fanzone-grid">
          
          {/* Send Wish Form */}
          <div className="pro-wish-form-card">
            <h3>Send Wishes to Devnath Menon</h3>
            <p className="form-sub-text">
              Leave your encouragement for Devnath. Submitting this form will publish your wish to the fan wall and send a direct email to <strong>devnathmenon1@gmail.com</strong>.
            </p>

            {submitted && (
              <div className="wish-success-box animate-fade-in">
                <Sparkles size={16} /> Wish published & email dispatched to devnathmenon1@gmail.com!
              </div>
            )}

            <form onSubmit={handleSubmit} className="pro-form">
              <div className="pro-form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Unnikrishnan / Suresh Nair"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="pro-form-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="e.g. Thrissur / Dubai / Sharjah"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="pro-form-group">
                <label>Message *</label>
                <textarea
                  rows={4}
                  placeholder="Write your message to Devnath..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="form-button-group">
                <button type="submit" className="btn-send-wish">
                  <Send size={15} /> Publish & Email Wish
                </button>

                <a
                  href="mailto:devnathmenon1@gmail.com?subject=Fan%20Inquiry%20for%20Devnath%20Menon"
                  className="btn-direct-email"
                >
                  <Mail size={15} /> Direct Email
                </a>
              </div>
            </form>
          </div>

          {/* Wishes List */}
          <div className="pro-wishes-wall-card">
            <h3>Fan Messages ({wishes.length})</h3>

            <div className="pro-wishes-list">
              {wishes.map((item) => (
                <div className="pro-wish-item" key={item.id}>
                  <div className="wish-item-header">
                    <div className="avatar-circle">
                      <User size={14} />
                    </div>
                    <div className="user-details">
                      <strong>{item.name}</strong>
                      <span>{item.location} • {item.time}</span>
                    </div>
                  </div>

                  <p className="wish-comment">{item.comment}</p>

                  <button className="btn-like-wish" onClick={() => handleLike(item.id)}>
                    <Heart size={13} className="heart-icon" /> {item.likes} Supporters
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
