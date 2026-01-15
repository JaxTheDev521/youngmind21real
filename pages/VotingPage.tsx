
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
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-midnight text-cyan text-xs font-bold rounded-full mb-4 uppercase tracking-widest">Election Window: Open</div>
          <h1 className="text-4xl font-bold text-midnight font-lexend mb-4">Governance Council Elections</h1>
          <p className="text-gray-600">Your vote determines the future direction of the Young Microworld departments.</p>
        </header>

        {hasVoted ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl animate-in zoom-in duration-500 border border-cyan/20">
            <div className="text-6xl mb-6">🗳️</div>
            <h2 className="text-3xl font-bold text-midnight mb-2">Vote Cast Successfully!</h2>
            <p className="text-gray-500 mb-8">Thank you for participating in the democratic process of our mini-society.</p>
            <div className="space-y-4 max-w-sm mx-auto">
              {candidates.map(c => (
                <div key={c.id}>
                  <div className="flex justify-between text-sm font-bold mb-1">
                    <span>{c.name}</span>
                    <span>{c.votes + (selectedCandidate === c.id ? 1 : 0)} votes</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-midnight h-full transition-all duration-1000" 
                      style={{ width: `${((c.votes + (selectedCandidate === c.id ? 1 : 0)) / 400) * 100}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {candidates.map((candidate) => (
                <div 
                  key={candidate.id}
                  onClick={() => setSelectedCandidate(candidate.id)}
                  className={`p-6 rounded-3xl border-2 transition-all cursor-pointer bg-white relative overflow-hidden group ${
                    selectedCandidate === candidate.id ? 'border-cyan ring-4 ring-cyan/10 scale-105' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="text-4xl mb-4">{candidate.avatar}</div>
                  <h3 className="font-bold text-lg text-midnight mb-1">{candidate.name}</h3>
                  <p className="text-xs text-gray-500 font-medium mb-3 italic">"{candidate.slogan}"</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400">Campaigning</span>
                    {selectedCandidate === candidate.id && <span className="text-cyan font-black text-xl">✓</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-midnight p-8 rounded-3xl text-white text-center mt-10">
              <h3 className="text-xl font-bold mb-4 font-lexend">Ready to commit?</h3>
              <p className="text-gray-400 text-sm mb-6">You can only vote once per election cycle. Your decision is final.</p>
              <button 
                onClick={handleVote}
                disabled={!selectedCandidate}
                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-xl ${
                  selectedCandidate ? 'bg-cyan text-midnight hover:bg-white active:scale-95' : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Ballot
              </button>
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-gray-200 pt-10 text-center">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Past Election Results</h4>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <span className="block text-2xl font-bold text-midnight">Q3 2024</span>
              <span className="text-xs text-gray-500">Won by Maya R.</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-midnight">Q2 2024</span>
              <span className="text-xs text-gray-500">Won by Leo C.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
