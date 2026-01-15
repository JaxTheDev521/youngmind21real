
import React, { useState } from 'react';

const VotingPage: React.FC = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const candidates = [
    { id: '1', name: 'Alex Thompson', slogan: 'Innovation for All Mini-Citizens!', votes: 142, avatar: '🦁' },
    { id: '2', name: 'Maya Rodriguez', slogan: 'Fair Trade and Transparent Justice.', votes: 156, avatar: '🦅' },
    { id: '3', name: 'Leo Chen', slogan: 'Building a Greener Digital Nation.', votes: 98, avatar: '🐼' },
  ];

  const handleVote = () => {
    if (selectedCandidate) {
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-neutral-light min-h-screen py-12 px-4 shadow-inner">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center text-midnight">
          <div className="inline-block px-4 py-1 bg-primary-orange text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest shadow-orange-glow">Election Window: Open</div>
          <h1 className="text-4xl font-bold font-lexend mb-4">Governance Council Elections</h1>
          <p className="text-gray-600">Your vote determines the future direction of the Young Microworld departments.</p>
          <div className="h-1.5 w-24 bg-primary-orange mx-auto rounded-full mt-6" />
        </header>

        {hasVoted ? (
          <div className="glass text-midnight rounded-[3rem] p-12 md:p-16 text-center shadow-2xl animate-fade-in border-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-hero-gradient" />
            <div className="text-8xl mb-8 drop-shadow-lg">🗳️</div>
            <h2 className="text-4xl font-black mb-4 font-lexend tracking-tight">Vote Cast Successfully!</h2>
            <p className="text-gray-500 mb-12 text-lg font-medium max-w-md mx-auto">Thank you for participating in the democratic process of our mini-society. Your voice has been heard!</p>

            <div className="space-y-6 max-w-md mx-auto">
              {candidates.map(c => (
                <div key={c.id} className="bg-neutral-light/50 p-6 rounded-2xl border border-white/50 shadow-sm">
                  <div className="flex justify-between text-base font-black mb-3 text-midnight uppercase tracking-wider">
                    <span>{c.name}</span>
                    <span className="text-primary-orange">{c.votes + (selectedCandidate === c.id ? 1 : 0)} votes</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="bg-hero-gradient h-full transition-all duration-[2000ms] ease-out"
                      style={{ width: `${((c.votes + (selectedCandidate === c.id ? 1 : 0)) / 400) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() => setSelectedCandidate(candidate.id)}
                  className={`p-8 rounded-[2.5rem] border-2 transition-all duration-300 cursor-pointer bg-white relative overflow-hidden group hover:-translate-y-2 ${selectedCandidate === candidate.id
                    ? 'border-primary-orange ring-8 ring-orange-100/50 scale-105 shadow-orange-glow'
                    : 'border-transparent glass-dark/5 shadow-xl hover:shadow-pink-glow'
                    }`}
                >
                  <div className="text-6xl mb-6 transition-transform group-hover:scale-110 drop-shadow-md">{candidate.avatar}</div>
                  <h3 className="font-extrabold text-2xl text-midnight mb-2 font-lexend">{candidate.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed italic">"{candidate.slogan}"</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Candidate</span>
                    {selectedCandidate === candidate.id && <div className="bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-black animate-in zoom-in">✓</div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-hero-gradient p-10 md:p-14 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)]" />
              <h3 className="text-3xl font-black mb-4 font-lexend relative z-10 tracking-tight uppercase">Ready to commit?</h3>
              <p className="text-white/80 text-lg mb-10 relative z-10 font-medium max-w-lg mx-auto leading-relaxed">You can only vote once per election cycle. Your decision shapes the future of our digital nation.</p>
              <button
                onClick={handleVote}
                disabled={!selectedCandidate}
                className={`px-16 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl relative z-10 transform active:scale-95 ${selectedCandidate
                  ? 'bg-white text-primary-orange hover:bg-highlight-yellow hover:text-midnight shadow-orange-glow'
                  : 'bg-white/10 text-white/30 cursor-not-allowed border border-white/10'
                  }`}
              >
                Submit My Ballot
              </button>
            </div>
          </div>
        )}

        <div className="mt-24 border-t border-gray-200 pt-12 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Historical Ledger</h4>
          <div className="flex justify-center gap-16 md:gap-32">
            <div className="text-center group">
              <span className="block text-3xl font-black text-midnight group-hover:text-primary-orange transition-colors">Q3 2024</span>
              <span className="text-sm text-gray-500 font-bold mt-2 block">Won by Maya R.</span>
            </div>
            <div className="text-center group">
              <span className="block text-3xl font-black text-midnight group-hover:text-primary-orange transition-colors">Q2 2024</span>
              <span className="text-sm text-gray-500 font-bold mt-2 block">Won by Leo C.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
