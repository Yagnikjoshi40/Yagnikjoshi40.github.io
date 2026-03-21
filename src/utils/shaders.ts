export const iridescentShader = `
precision mediump float;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewDir;
uniform float uTime;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewDir);
  float fresnel = pow(1.0 - dot(normal, viewDir), 2.0);
  float hue = mod(fresnel * 360.0 + uTime * 100.0, 360.0);
  vec3 color = hsv2rgb(vec3(hue, 0.8, 0.9));
  gl_FragColor = vec4(color, 1.0);
}`;

export const liquidMorphShader = `
precision mediump float;
uniform sampler2D uTexture;
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  uv.y += sin(uv.x * 10.0 + uTime * 2.0) * 0.05 * uIntensity;
  uv.x += cos(uv.y * 8.0 + uTime * 1.5) * 0.03 * uIntensity;
  gl_FragColor = texture2D(uTexture, uv);
}`;

export const causticLightShader = `
precision mediump float;
uniform float uTime;
varying vec2 vUv;

float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  float caustic = 0.0;
  for (int i = 0; i < 4; i++) {
    caustic += noise(uv * 2.0 + float(i) + uTime * 0.5) * 0.25;
  }
  gl_FragColor = vec4(vec3(caustic), 1.0);
}`;
