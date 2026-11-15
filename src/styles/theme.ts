/**
 * Tokens de color para MyG Perfumería
 * Accesibles desde TypeScript / componentes Astro
 */
export const brandColors = {
  // Marca
  brandGreen: '#01351C',

  // Tonos dorados
  gold: {
    light: '#F7DC7A',
    soft: '#E9C25A',
    medium: '#E2B53F',
    primary: '#C8931F',
  },

  // Semántica
  primary: '#01351C',
  accent: '#E2B53F',
  accentLight: '#F7DC7A',
  cta: '#C8931F',
  secondary: '#5E6B63',
  text: '#1C2420',
  background: '#FAF7EF',
  surface: '#FFFFFF',
} as const;

export type BrandColor = keyof typeof brandColors;
