import React from 'react';
import { ProNavbar } from './components/ProNavbar';
import { ProHeroDashboard } from './components/ProHeroDashboard';
import { ProStatsDashboard } from './components/ProStatsDashboard';
import { ProGallery } from './components/ProGallery';
import { ProPressCoverage } from './components/ProPressCoverage';
import { ProTimeline } from './components/ProTimeline';
import { ProFanZone } from './components/ProFanZone';
import { ProFooter } from './components/ProFooter';

export const App: React.FC = () => {
  return (
    <div className="pro-app-root">
      <ProNavbar />

      <main>
        <ProHeroDashboard />
        <ProStatsDashboard />
        <ProGallery />
        <ProPressCoverage />
        <ProTimeline />
        <ProFanZone />
      </main>

      <ProFooter />
    </div>
  );
};

export default App;
