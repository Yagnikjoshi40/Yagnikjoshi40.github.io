'use client';

import { Mic, Search, Upload } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="glass-card flex flex-col gap-3 p-4 md:flex-row md:items-center">
      <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream/60">
        <Search className="h-4 w-4" />
        Search necklaces, sarees, rings, festive edits...
      </div>
      <div className="flex gap-3">
        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream/70"><Mic className="mr-2 inline-block h-4 w-4 text-roseGold" />Voice</button>
        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream/70"><Upload className="mr-2 inline-block h-4 w-4 text-metallicGold" />Visual</button>
      </div>
    </div>
  );
}
