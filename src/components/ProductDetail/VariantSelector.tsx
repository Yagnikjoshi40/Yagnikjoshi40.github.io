'use client';

import { useState } from 'react';

export function VariantSelector({ colors }: { colors: string[] }) {
  const [selected, setSelected] = useState(colors[0]);
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-metallicGold">Colors</p>
        <div className="mt-3 flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelected(color)}
              className={`h-10 w-10 rounded-full border-2 transition ${selected === color ? 'border-white shadow-luxe' : 'border-white/10'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-metallicGold">Size</p>
        <div className="mt-3 flex gap-3">
          {['XS', 'S', 'M', 'L'].map((size, index) => (
            <button key={size} className={`rounded-2xl px-4 py-3 text-sm ${index === 1 ? 'bg-roseGold text-white' : 'neu-button text-black'}`}>
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
