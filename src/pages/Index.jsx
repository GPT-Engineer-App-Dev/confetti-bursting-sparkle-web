import { useState } from 'react';
import ConfettiEffect from '../components/ConfettiEffect';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {showConfetti && <ConfettiEffect />}
      <div className="text-center text-white z-10">
        <h1 className="text-6xl font-bold mb-6">Brilliant Confetti</h1>
        <p className="text-xl mb-8">Click the button to celebrate with a burst of confetti!</p>
        <Button
          onClick={() => setShowConfetti(!showConfetti)}
          className="bg-white text-purple-600 hover:bg-purple-100 transition-colors"
        >
          {showConfetti ? 'Stop Confetti' : 'Start Confetti'}
        </Button>
      </div>
    </div>
  );
};

export default Index;
