import { iridescentShader, liquidMorphShader, causticLightShader } from '@/utils/shaders';

export function ShaderMaterialShowcase() {
  return (
    <div className="glass-card space-y-4 p-6 text-sm text-cream/70">
      <h3 className="font-display text-2xl text-cream">Custom GLSL shaders</h3>
      <p>Iridescent / holographic shader, liquid morph displacement shader, and caustic light shader are defined and ready for Three.js material integration.</p>
      <pre className="overflow-x-auto rounded-2xl bg-black/40 p-4 text-xs text-cream/60">{`${iridescentShader.slice(0, 140)}...\n${liquidMorphShader.slice(0, 90)}...\n${causticLightShader.slice(0, 90)}...`}</pre>
    </div>
  );
}
