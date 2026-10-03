# IPIN 2026 talk — slides

reveal.js deck for the IPIN 2026 talk *Self-Calibrated Indoor Tracking from Backscatter
Fiducials under NLOS Transmitter Illumination*, in a 20-minute slot. The talk structure and
per-slide timings are in [presentation_plan.md](presentation_plan.md).

Everything the deck needs is in this folder. It runs offline: no CDN, no build step.

## Present

```
npm start
```

This serves the folder at <http://localhost:8000> and opens it in your default browser. It needs
Node but no `npm install` and no network. Set `PORT=9000 npm start` for another port; if the port
is taken it tries the next one. Opening `index.html` directly in a browser also works.

| Key | Action |
|---|---|
| `→` / `Space` | Next step |
| `↓` / `↑` | Reveal / undo the current slide’s steps, or move through slides 1, 4, 5 and 6’s vertical stacks |
| `F` | Full screen |
| `S` | Speaker view: notes, next slide, and a pacing timer driven by the per-slide timings |
| `O` or `Esc` | Slide overview |
| `G`, number + 2, `Enter` | Jump to a slide. Reveal counts the unnumbered outline, so a position is two more than the printed number: closing (11) is 13, backups (12–15) are 14–17 |
| `B` | Black out the screen |

Slides 0–11 are the talk (13:25 in the current per-slide timings, including the outline, the problem statement, the illustrated opening comparison, the tracking grid, the tag-power slide, the cost-per-cell slide, video and closing; the slot is 20 minutes). Slide 11 closes with Aalto branding, Hüseyin Yiğitler’s name, `huseyin.yigitler@aalto.fi` and the Ambient6G / BANLOS funding acknowledgement; keep it visible during questions. Slides 12–15 are backup for questions.

The title page is always slide 0 and must remain first. No slide can precede it. The outline
always follows it, and like the title page it displays no slide number: the printed numbers of
the talk slides are unchanged by it.
The title page displays no slide number. Slide 1 states the problem beside the “Where am I?”
illustration (`assets/receiver-localization-opening-v2.png`, cropped at its blank side walls):
with line of sight to the transmitter, received power follows distance; without it,
localization becomes difficult, and that NLOS case is the one studied. The text is editable. Down navigation opens the three method slides beneath it.

The outline slide names the five parts of the talk — Problem, Model, Pipeline, Results,
Takeaways — one row each with a one-line gloss. Those rows are the only place the part names are
written: the script in `index.html` builds the breadcrumb at the foot of every talk slide from
them, so renaming a part on the outline renames it in the breadcrumb too. Each row carries a
`data-start` with the id of the slide its part begins on (`where-am-i`, `tracking-grid`,
`pipeline`, `measurement-setup`, `takeaways`); move a part boundary by changing that id.

The breadcrumb sits beside the "A!" logomark and marks the current part in black over the accent
rule. Slides 1–10 carry it; the title, the outline, the closing slide and the backups do not.
Clicking a part jumps to the slide it starts on.

Navigation controls are visible on every slide. Use the down and up controls to move through
slide 1's methods, slide 4's grid views, slide 5's observation-model and cost-per-cell slides and slide 6's exact costs and two-carrier extension, and the right and left controls to move between horizontal slides.

Beneath slide 1, three full slides continue “Where am I?” indoors in the same vertical stack
(1.1–1.3): fingerprinting, BD ID localization, and this work. The last method shows
three BDs and introduces received-power localization under NLOS
transmitter illumination. The headings and explanations remain editable. The Uses / Needs / Gives
comparison preserves the message: tag IDs give a room,
fingerprinting needs a survey, and this work estimates a path without measured receiver-position labels.

Slide 2 combines the localization problem with the realistic Blender corridor scenario.
It starts with four known wall anchors (BD1–BD4), the same man as slide 1 and its method slides at RX, and the transmitter paths.
Press Down twice to add the illustrative 3 m detection circles, then their overlap inside the corridor
and the received-power question. Up undoes these steps; Right or the Next control moves directly to slide 3.
The on-screen Down and Up controls reveal and undo the same steps.
The four tag positions match the
paper geometry; the person is illustrative. Camera projections keep the editable annotations
aligned with the render. The paper reports no detection range.

Slide 4 introduces the tracking grid before the observation model. It opens on the corridor
model from eye level, with 0.4 m grid lines rendered in 3D at the antenna height of 1 m
(`assets/grid_eye_level.jpg`).
Press Down to open slide 4.1, the 2D top view with an example path, the cell indices
ℓ₁, ℓ_t and ℓ_T along it, and two cards on the cell index and the path. Press Up to return to the 3D corridor.
Right continues to the next horizontal slide. The cell centres follow
`sf_ph_local_build_tracking_grid` in the MATLAB script (x = −0.4, 0, 0.4 m; y = 4.75 to 7.95 m
in 0.4 m steps). Its boundary row at y = 8.0 m is not drawn. In the corridor view the
grid edges are native Blender curves with a faint cell tint. Large labels and the cell-size
dimension are editable SVG, placed with the saved projections of the render camera. The top view is editable SVG.
The print view includes both grid slides, with both cards visible on the top view.

Slide 5 says how the receiver obtains one power per tag, before the observation model uses it.
Each tag switches its reflection at its own frequency, which shifts the reflected carrier away
from the direct TX carrier; a filter gives raw powers every 100 ms. Tracking averages five samples
in linear power before converting back to dBm, giving processed samples about 500 ms apart. The
schematic spectrum is editable SVG, with BD1–BD4 at the switching frequencies of
the paper's setup figure (7.5, 6.5, 8.5 and 9.5 kHz). It shows one sideband, and its
line heights are illustrative.
Press Down to open the observation model on slide 5.1; Up goes back one slide.
Press Down again for slide 5.2, which says how the model gives a path: every cell gets an
observation cost for each sample, a motion penalty charges for long steps, and the estimated
path is the cell sequence with the lowest total cost. Its cost map is editable SVG on the
slide 4.1 geometry, and its shading is illustrative (distance trend with slope 2, noise-free
sample), not measured data.
Right continues to the pipeline on slide 6. All three slides remain in the print view.

Slide 6 states what the dynamic program minimises, the observation cost of each sample's cell
plus a motion penalty for each step, with a key to the three symbols beside the equation. The
three stage cards below it say which observation cost each stage uses; two clicks reveal
stages 2 and 3. Press Down for slide 6.1, which defines both costs exactly: the Huber
observation cost of stage 1, the Gaussian one of stage 3 and the motion penalty, each with its
parameters. Press Down again for slide 6.2, where the two carriers share one path, their costs
add and the regularized common-mode estimate partially absorbs a shared level shift. The
reported correlations suggest this disturbance; low correlation does not establish independence. Right from any slide in this stack
continues to the measurement setup. All three slides remain in the print view. The formulas follow Section III of the paper, written without hats.

On slide 7 the 25-second clip starts by itself as soon as the slide appears, muted, and plays in
place under the photo of the same corridor. There is no click to make. Narrate over it: the
overview, the photo and the numbers all stay on screen while it plays. It rewinds to its first
frame when it ends, and its own controls pause, seek or replay it. Leaving the slide stops and
resets it, and it starts again on every revisit.

The video is a Blender illustration with the paper’s BD1–BD5 labels and horizontal positions.
BD1 is at (−1, 4.75), BD2 at (+1, 5.00), and BD5 at (+1, 11.00) m, outside the scored
four-tag segment. Its height, trolley, ceiling and lighting are illustrative. Playback uses the
local MP4 in `assets/` and requires no network connection.

The raw-channel mapping is confirmed: BD2 is the 6.5 kHz channel (columns 3/11), and BD1 is
the 7.5 kHz channel (columns 4/12). The power-profile legend and example-trajectory labels now follow
the setup figure. Slide 3's anchor colours match the corrected curves: BD1 blue, BD2 red.
The illustrations, videos and posters use the paper setup geometry. The setup slide
shows BD5 at 11 m in grey. The estimated-path clip uses the same lateral orientation
as the slide diagrams.

Slide 9, **Dual-band gives the steadiest unlabeled path**, follows the result slide before it: one
legend row under the title, then the chart on the left and the three findings on the right with
`receiver_estimates_draft.mp4` in a slot of its own at the foot of that column. The legend covers
both views, since the chart and the clip draw the same three medians. As on slide 7 the six-second
draft starts by itself with the slide and rewinds to its first frame at the end, so the chart and
the numbers are never hidden and there is no click to make. It shows median paths and 5th–95th percentile spread across runs from
Figure 2(a), with illustrative trolley speed and paper BD labels, and it represents summaries
across runs, not one time-resolved run. Narrate over it within the slide's existing 50-second
allocation. Leaving the slide stops and resets the clip. The local video and poster are copied
are kept in `assets/` for offline use.

The results use timestamp-derived measured coordinates as the route-matched reference, with
about 0.10–0.15 m uncertainty. The campaign-balanced split has 46 calibration and 46 evaluation
runs. Samples at y ∈ [4.0, 4.75) m remain scored at the lower tracking-grid boundary at 4.75 m.

## Export to PDF

With `npm start` running, open <http://localhost:8000/?view=print> in Chrome, then Print → Save as PDF with margins set to "None" and
"Background graphics" ticked. This gives one 16:9 page per slide (25 pages). Keep the PDF on a
USB stick as a fallback. The print view replaces each clip with a still in the same slot: slide 7
shows the overview, the photo and a midpoint frame, slide 9 the chart and a representative draft frame.
Keep `assets/receiver_trolley.mp4` on the USB stick alongside the PDF for standalone playback.
Also keep `assets/receiver_estimates_draft.mp4` for standalone playback of the trajectory draft.

## Corridor renders

The corridor renders and clips in `assets/` are flattened JPEG and MP4 copies of Blender
renders. The Blender scenes themselves are not part of this repository; the deck needs only
the copies in `assets/`.

| Slide | Asset | Render |
|---|---|---|
| 2 | `anchor-scenario-four-bds-v1.jpg`, `receiver-person-overhead-v1.png` | Four-anchor render, flattened to JPEG, with a generated cutout of the man from slide 1 and its method slides |
| 4 | `grid_eye_level.jpg` | Eye-level corridor render with the 3D grid, flattened to JPEG |
| 7 | `corridor_overview.jpg` | Overview render, cropped to the building |
| 7 | `receiver_trolley.mp4` | Trolley clip, copied without conversion |

Slide 2 uses `anchor-scenario-four-bds-v1.jpg`, rendered from the separate `anchor_scenario.blend` scene.
The transparent `receiver-person-overhead-v1.png` cutout shows the same man as slide 1 and its method slides.
This person replaces the trolley in the explanatory view. Orange direct
TX-to-BD and TX-to-RX paths, teal BD-to-RX paths, purple range circles and their exact overlap
are editable SVG annotations. These guides are illustrative, not measured or simulated.
Slide 7 uses the unlabelled overview and draws
the tags, transmitter, evaluated segment and
distance axis over it in the deck's own style, with the tag names of the paper. The labelled
labelled overview render is not used: its text is too small at slide size. The overlay is
positioned in the pixel coordinates of the render (48 px per metre), so it has to be checked
again if the overview camera changes. Replacing a render therefore means replacing the file in
`assets/` and re-checking the SVG overlays that sit on top of it.

## Publish

The folder is a static site. The workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml)
publishes it to GitHub Pages on every push to `main`, or manually from the Actions tab.
No dependency installation or build step is needed.

1. Commit and push the presentation, including `assets/`, `css/`, `js/`, `vendor/` and the workflow,
   to your GitHub repository's `main` branch. The bundled libraries and fonts in `vendor/` must be
   committed so the published slides work.
2. In the repository's **Settings → Pages → Build and deployment**, set **Source** to
   **GitHub Actions** ([GitHub instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)).
3. Push another commit to `main`, or select **Actions → Publish presentation to GitHub Pages → Run workflow**.
4. Open the site URL shown by the deployment or in **Settings → Pages**. For a project repository,
   it is normally `https://<owner>.github.io/<repository>/`.

The deployment contains `index.html`, `assets/`, `css/`, `js/` and `vendor/`. All deck URLs are relative,
so they work under the repository's Pages path. If you change the publishing branch, update
`on.push.branches` in the workflow too.

For any other static host or university web space, upload those same files and directories;
`index.html` is the entry point.

Before publishing, check the reuse terms of the paper figures and the Aalto logos; see
[License](#license).

## Style

The theme in `css/aalto.css` reproduces the official Aalto University School of Electrical
Engineering PowerPoint template (`ELEC General Presentation 2026_Original.pptx`), using its white
content layouts and its accent-colour title slide. The template is 13.333 × 7.5 in and the deck is
1280 × 720 px, so template positions map one to one and 1 pt is 4/3 px.

| Template | In the deck |
|---|---|
| Theme colours: accent `#A987FF`, tints `#BA9FFF` `#CBB7FF` `#DDCFFF` `#EEE7FF`, greys `#B4B4B4` `#E8E8E8` `#DCDCDC` | Same values as CSS variables; cards and table shading use `#EEE7FF` and `#E8E8E8` |
| Font Inter, Bold and Regular | Inter 400 and 700, bundled in `vendor/inter/`; Arial fallback |
| Slide title: 32 pt bold, −0.5 pt tracking, at (43, 43) px | 42.67 px bold, same tracking and position |
| Body 20 pt; lists with a round bullet and a 28 px hanging indent | 26.67 px body, same bullets; 16 pt (21.33 px) for small text |
| 43 px margins on all sides | Same |
| "A!" logomark bottom left at (43, 647) px, 40.5 × 30.2 px | Same, on every content slide |
| Slide number bottom right, 8 pt bold | Offset left on screen to clear navigation controls |
| Title slide: accent background, school logo at (43, 45) px, short black rule above the title, title bottom-anchored at y = 360 | Same; authors and venue take the subtitle position |
| Closing slide | Reuses the deck’s accent background, school logo and title layout, with presenter name and email; no slide number. The original template’s final-slide layout remains to be verified against the source PPTX. |

`assets/aalto-elec-logo.svg` and `assets/aalto-mark.svg` are the template's own vector shapes,
converted to SVG without changes. To move to a newer logo, replace those two files.

Where the deck departs from the template:

- Content starts directly under the title instead of at the template's fixed y = 194, because
  several slides need the height. Nothing extends below y = 630, so the logomark strip stays clear.
- Secondary text is set in dark grey (`#5A5A5A`, from the university palette); the template sets
  all text in black.
- `assets/power_profile_866.svg` and `assets/pseudo_summary.svg` are converted straight from
  the paper PDFs, so they keep their own colours and Times at paper size.
- The "Thank you" closing slide follows the takeaways and stays up during questions, before the backups.

The sentence-case titles, left-aligned text and limited number of type sizes follow the written
guidelines at <https://brand.aalto.fi>.

## Files

```
index.html                    the slides and speaker notes
package.json                  `npm start`
serve.mjs                     local server, including MP4 byte-range support (no dependencies)
js/video.js                   in-place clip playback on slide entry, rewind and slide-exit reset
css/aalto.css                 Aalto ELEC theme, matched to the official PowerPoint template
assets/                       figures, photos, corridor renders and the Aalto logo shapes
vendor/reveal/                reveal.js 6.0.2 (MIT)
vendor/katex/                 KaTeX 0.19.0 for the equations (MIT)
vendor/inter/                 Inter font files (SIL Open Font License)
presentation_plan.md          talk plan
.github/workflows/pages.yml   publishes the deck to GitHub Pages
LICENSE                       CC BY 4.0, with the exceptions noted below
```

## License

The slides, the theme and the text of this repository, including `index.html`, `css/aalto.css`,
`js/video.js`, `serve.mjs` and `presentation_plan.md`, are licensed under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see [LICENSE](LICENSE).

These parts are **not** covered by that license and keep their own terms:

| Part | Terms |
|---|---|
| `vendor/reveal/` | reveal.js, MIT (`vendor/reveal/LICENSE`) |
| `vendor/katex/` | KaTeX, MIT (`vendor/katex/LICENSE`) |
| `vendor/inter/` | Inter, SIL Open Font License (`vendor/inter/LICENSE`) |
| `assets/aalto-elec-logo.svg`, `assets/aalto-mark.svg` | Aalto University trademarks, taken unchanged from the official ELEC template. Reuse needs Aalto's permission; replace them if you adapt the deck. |
| `assets/power_profile_866.svg`, `assets/pseudo_summary.svg` | Figures from the paper. Clear reuse with the co-authors and under the IPIN 2026 copyright terms. |
