import { describe, expect, it } from 'vitest';
import { getDayPhase, getMoodPalette, buildDynamicColor } from '@/utils/colorTheory';

describe('colorTheory', () => {
  it('detects morning phase', () => {
    expect(getDayPhase(new Date('2026-03-18T08:00:00Z'))).toBe('morning');
  });

  it('returns jewel palette for festive descriptions', () => {
    expect(getMoodPalette('festive wedding luxury')).toHaveLength(3);
  });

  it('builds rgb string', () => {
    expect(buildDynamicColor(100, 50, 80)).toContain('rgb(');
  });
});
