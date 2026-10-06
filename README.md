# 00_IRIS_STARTER_PROTO

Starter minimaliste pour **présenter un prototype interactif** à un client.

## Démarrer

```bash
pnpm install
pnpm dev
```

## Utilisation pour un nouveau projet

1. Dupliquer ce starter pour un nouveau projet
2. Modifier `src/config/project.ts` (nom, date de livraison, type)
3. Modifier `src/styles/theme.css` pour les couleurs du client (tokens)
4. Remplacer `src/pages/Prototype.tsx` par la vraie interface

## Routes

- `/prototype` : accueil du prototype
- `/design-system` : doc pour les devs

Note : la route `/` n’existe pas. Toute URL inconnue redirige vers `/prototype`.

## Types de projet (layout prototype)

Le wrapper “starter” autour de `/prototype` s’adapte via `PROJECT_TYPE` :

- `mobile` : vue mockup mobile par défaut, switch masqué
- `desktop` : vue plein écran par défaut, switch masqué
- `responsive` : switch visible (desktop), vue mockup mobile par défaut

