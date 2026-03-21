const warm = ['#c98f7f', '#d4af37', '#f5d7b2'];
const cool = ['#7b8cff', '#7dd3fc', '#c3d4ff'];
const jewel = ['#6d28d9', '#0f766e', '#be185d'];

export const getDayPhase = (date = new Date()) => {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'evening';
  return 'night';
};

export const getMoodPalette = (description: string) => {
  const text = description.toLowerCase();
  if (text.includes('wedding') || text.includes('festive')) return jewel;
  if (text.includes('cool') || text.includes('midnight')) return cool;
  return warm;
};

export const getCategoryPalette = (category: string) => {
  if (category === 'ring') return cool;
  if (category === 'saree') return jewel;
  return warm;
};

export const buildDynamicColor = (scrollY: number, mouseX: number, mouseY: number) => {
  const intensity = Math.min(1, scrollY / 1200);
  const red = Math.round(183 + intensity * 20 + mouseX * 0.03);
  const green = Math.round(110 + intensity * 14 + mouseY * 0.02);
  const blue = Math.round(121 + intensity * 25);
  return `rgb(${Math.min(red, 255)}, ${Math.min(green, 255)}, ${Math.min(blue, 255)})`;
};
