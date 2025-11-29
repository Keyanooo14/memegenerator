import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Generator } from './components/Generator';

function App() {
  const [view, setView] = useState<'landing' | 'generator'>('landing');

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onEnterGenerator={() => setView('generator')} />
      ) : (
        <Generator onBack={() => setView('landing')} />
      )}
    </>
  );
}

export default App;
