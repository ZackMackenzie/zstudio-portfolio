# Motion (Remotion)

Real motion assets for the site are produced here and rendered to `public/media/`.
The site never bundles Remotion — it plays the rendered `.webm` / `.mp4` files via
`components/ui/MediaPlayer.tsx`.

## Commands

```bash
npm run motion:studio          # open Remotion Studio to preview / tweak
npm run motion:render          # render every composition -> public/media
npm run motion:render <id> ... # render a subset
```

Each render produces three files per composition:

```
public/media/<id>.webm         VP9, what modern browsers load
public/media/<id>.mp4          H.264 fallback
public/media/<id>-poster.jpg   still frame used as the <video> poster
```

## Add a composition

1. Create `remotion/compositions/MyClip.tsx` (see the existing ones — they share
   tokens from `remotion/theme.ts` so motion matches the site).
2. Register it in `remotion/Root.tsx` with an `id`. That `id` is the `clipId` a
   project block in `content/projects.ts` can reference (see a `motion` block).
3. `npm run motion:render my-clip`.

Compositions take `defaultProps`, so the same template can render many variants
(e.g. one `social-creative` per campaign headline).
