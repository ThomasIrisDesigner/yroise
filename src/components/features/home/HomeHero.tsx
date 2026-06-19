import { HOME_HERO } from '@/data/home'

/** Frise dentelée en haut du hero — appliquée en superposition */
function FriseHaut() {
  return (
    <svg
      viewBox="0 0 390 8"
      preserveAspectRatio="none"
      className="absolute inset-x-0 top-0 z-10 w-full"
      style={{ height: '8px', display: 'block' }}
      aria-hidden
    >
      <polyline
        points="0,8 10,0 20,8 30,0 40,8 50,0 60,8 70,0 80,8 90,0 100,8 110,0 120,8 130,0 140,8 150,0 160,8 170,0 180,8 190,0 200,8 210,0 220,8 230,0 240,8 250,0 260,8 270,0 280,8 290,0 300,8 310,0 320,8 330,0 340,8 350,0 360,8 370,0 380,8 390,0 390,8"
        fill="rgb(var(--ocean-900))"
      />
    </svg>
  )
}

export function HomeHero() {
  return (
    <section className="relative">
      <FriseHaut />
      <img
        src="/images/voilier-brest.png"
        alt={HOME_HERO.imageAlt}
        className="block h-48 w-full object-cover"
        draggable={false}
      />
    </section>
  )
}
