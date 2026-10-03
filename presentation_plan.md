# Presentation plan — IPIN 2026, 20-minute slot

**Paper:** Self-Calibrated Indoor Tracking from Backscatter Fiducials under NLOS Transmitter Illumination
**Source:** `main_v1_r4b.tex`
**Slot:** 20 minutes, three talks in the session. How much of the slot is reserved for questions is not confirmed.
**Format:** 21 main slide surfaces across 13 horizontal positions (the title, the unnumbered outline, then 1–11), 13:25 in the current per-slide timings including a 15 s outline, a 30 s problem statement, a 55 s illustrated opening comparison, a 50 s tracking-grid slide, a 35 s tag-power slide, a 35 s cost-per-cell slide, narrated ~25 s setup video and a 10 s closing, 4 backup slides for Q&A
**Slides:** `index.html` (reveal.js, Aalto style); see `README.md` for how to present, export and publish
**Video:** `assets/receiver_trolley.mp4`, embedded on slide 7. The local
copy comes from `scenery/receiver_trolley.mp4`. Both videos and their stills use the paper setup’s BD1–BD5 labels and positions.
The trajectory slide also includes `assets/receiver_estimates_draft.mp4`, a six-second draft of
Figure 2(a)'s median paths and 5th–95th percentile spread across runs. Like slide 7's clip it keeps
a slot of its own beside the chart, starts with the slide and rewinds at the end, so nothing is
hidden; narrate over it within the existing 50 seconds. Its speed is illustrative; its BD labels match the setup figure.
A representative frame is the print fallback.

> **Slide order:** The title page is always slide 0, always first, and displays no slide number. Nothing may precede it. The outline follows it, also without a slide number, so the numbering of the talk slides is unchanged: it names the five parts (Problem, Model, Pipeline, Results, Takeaways) that the breadcrumb at the foot of slides 1–10 tracks. Slide 1 states the problem beside the “Where am I?” illustration: localization is manageable with line of sight to the transmitter and becomes difficult without it. Slides 1.1–1.3 sit vertically beneath slide 1 and continue “Where am I?” with the related-work comparison, using the fingerprinting, single-BD and three-BD illustrations. It preserves the Uses / Needs / Gives comparison and the message: tag IDs give a room, fingerprinting needs a survey, and this work estimates a receiver path from multiple BDs without measured receiver-position labels under NLOS transmitter illumination. The anchor scenario follows as slide 2. Slide 4 introduces the tracking grid and slide 5 shows how the receiver measures the power of one tag, with two slides vertically beneath slide 5: the observation model as slide 5.1 and the cost-per-cell slide as slide 5.2 (Down to open, Up to return). Slide 6 introduces the pipeline, with the exact costs as slide 6.1 and the two-carrier extension as slide 6.2. The Aalto closing slide with presenter contact and the funding acknowledgement is slide 11. Backup slides are 12–15.

---

## 1. The one thing the audience should remember

> Cheap wall-mounted backscatter tags can track a receiver to about half a metre in a corridor the
> transmitter cannot see, **without measured receiver-position labels**, provided each tag's unknown offset is
> estimated together with the path.

Three numbers carry the whole talk (dual-band median error):

| Calibration information | Median error |
|---|---|
| No measured position labels (cold-start profiling) | **0.52 m** |
| Self-calibrated (surrogate residual map) | **0.46 m** |
| Timestamp-derived measured coordinates (route-matched reference) | **0.31 m** |

Everything on the slides should serve either the claim or these three numbers. If a slide does
neither, it goes to backup.

## 2. Audience and tone

IPIN attendees know RSS fingerprinting, Viterbi/HMM tracking and path-loss models. Most do **not**
know backscatter link budgets. So:

- Spend time on *why backscatter power is hard to model* (slides 3–5.1). This is the unfamiliar part.
- Do not explain Viterbi or kNN fingerprinting. Name them and move on.
- Show two equations on the way through (observation model, the minimisation on slide 6). The exact
  costs are one step down on slide 6.1. The rest of Section III is backup.
- Be upfront that this is a controlled proof of concept on a 4 m segment. The audience will notice,
  and saying it first costs nothing.

## 3. Timeline

| # | Slide | Time | Clock at end |
|---|---|---|---|
| 0 | Title | 0:20 | 0:20 |
| — | Outline: the five parts of the talk | 0:15 | 0:35 |
| 1 | The problem: localization without line of sight | 0:30 | 1:05 |
| 1.1 | RSS fingerprinting | 0:20 | 1:25 |
| 1.2 | BD ID localization | 0:15 | 1:40 |
| 1.3 | This work’s three-BD illustration | 0:20 | 2:00 |
| 2 | Receiver localization and NLOS backscatter scenario | 1:10 | 3:10 |
| 3 | Why a fixed link budget fails | 0:55 | 4:05 |
| 4 | Tracking grid: eye-level corridor at 1 m | 0:20 | 4:25 |
| 4.1 | Tracking grid: top view with index and path | 0:30 | 4:55 |
| 5 | How the receiver measures one tag | 0:35 | 5:30 |
| 5.1 | Observation model | 0:55 | 6:25 |
| 5.2 | From the model to a path: a cost per cell | 0:35 | 7:00 |
| 6 | Three-stage pipeline | 0:55 | 7:55 |
| 6.1 | The two costs, exactly | 0:35 | 8:30 |
| 6.2 | Two carriers, one path | 0:40 | 9:10 |
| 7 | Measurement setup with narrated trolley video | 0:55 | 10:05 |
| 8 | Main result | 1:30 | 11:35 |
| 9 | Trajectory behaviour and bias | 0:50 | 12:25 |
| 10 | Takeaways and limits | 0:50 | 13:15 |
| 11 | Thank you, presenter contact and acknowledgement | 0:10 | 13:25 |

**Checkpoints while speaking:** finishing slide 6.2 at about 9:10, starting slide 8 at about 10:05.
The slot is 20 minutes, so no slide has to be dropped for time. If the session runs late, slide 9 is the one to skip.
The video is part of slide 7's 55 s, with narration during playback. If running late, use the
static overview and save the video for Q&A.

---

## 4. Slide by slide

### Slide 0 — Title (0:20)

- **On slide:** title, authors, Aalto University, Ambient6G and BANLOS logos, presenter name.
- **Say:** one sentence only. "This talk is about tracking a receiver using passive backscatter
  tags as landmarks, in a corridor the transmitter cannot see, without measured receiver-position labels."
- Do not read the title aloud.

### Outline — the five parts of the talk (0:15)

- **On slide:** Problem, Model, Pipeline, Results, Takeaways, numbered, each with one line under it.
- **Say:** "First the problem and how others solve it, then the grid and the power model, then the
  three-stage pipeline, then the corridor measurements, and the takeaways at the end." Do not read
  the lines under the part names.
- The breadcrumb at the foot of slides 1–10 marks which part is running, so the audience can place
  every slide in this list. The rows of this slide define it: their headings are the breadcrumb
  labels and their `data-start` ids are the slides the parts begin on.
- This slide carries no number, so the printed numbers below are the same as before it existed.
- **Transition:** "So, the problem."

### Slide 1 — The problem: localization without line of sight (0:30)

- **Goal:** state the problem before any method appears.
- **Visual:** `assets/receiver-localization-opening-v2.png`, the “Where am I?” corridor illustration, cropped at its blank side walls.
- **On slide:**
  - A receiver moves through a building and must find its position from the radio signal it receives.
  - LOS: received power falls predictably with distance, so a simple model locates the receiver.
  - NLOS: walls and corners add unknown losses. The simple model fails and localization becomes difficult.
  - We study the NLOS case: a receiver in a corridor the transmitter cannot see.
- **Say:** “Indoors there is no satellite positioning, so a receiver has to answer ‘Where am I?’ from the radio signals around it. With line of sight to the transmitter, received power falls predictably with distance and localization is manageable. Once the transmitter is out of sight, walls and corners add losses we do not know, and localization becomes difficult. That is the case we study.”
- **Caveat:** this is the general contrast; LOS localization still has multipath. In the paper, NLOS describes transmitter illumination, and tag-to-RX links are mostly LOS. Leave that geometry to slide 2. The image is a generated illustration, not a photograph of the experiment.
- **Transition:** “So how is this question answered today?”

### Slides 1.1–1.3 — Indoor localization methods (0:55 total)

- **Main point:** several solutions answer the indoor localization question. Tag IDs give a room; fingerprinting needs a survey; this work uses multiple BDs to estimate a path without measured receiver-position labels.
- **Panels:** RSS fingerprinting (RADAR, INFOCOM 2000), BD ID localization (Orange, EuCNC 2025), and this work with three BDs illustrated.
- **Comparison:** retain Uses / Needs / Gives for each method, with received power and a surveyed radio map for fingerprinting, detected IDs and known BD positions for ID localization, and power from multiple BDs plus known BD positions for this work.
- **Visuals:** each method fills its own slide beneath slide 1, with a large illustration and editable Uses / Needs / Gives comparison. Down and up navigate within this stack. Navigation controls remain visible throughout the deck.
- **Say:** “Indoors, there are several ways to answer ‘Where am I?’ We want received-power tracking with known BD positions, without measured receiver-position labels. We study the receiver when it detects multiple BDs under NLOS transmitter illumination.”
- **Sources:** RADAR is Bahl and Padmanabhan, INFOCOM 2000; Orange’s zero-energy device demonstration is ElSanhoury et al., EuCNC/6G Summit 2025. The Orange demo locates the transmitting phone through tags read by the base station. RADAR used Wi-Fi base stations; the later RADAR baseline here uses tag powers.
- **Caveat:** the images are conceptual. Lobes do not establish measured coverage or which BDs are detected. NLOS describes transmitter illumination; tag-to-RX links are mostly LOS in the experiment.
- **Transition:** the next slide develops a four-detected-BD example with the paper geometry.

### Slide 2 — Receiver localization and NLOS backscatter scenario (1:10)

- **Goal:** establish the problem and propagation setting in one shared corridor view.
- **Visual:** realistic Blender cutaway with four paper-positioned anchors (BD1–BD4), the same man as slide 1 and its method slides
  at RX (6.9 m along the route), and TX behind the foreground wall. Orange paths connect TX
  to BD1–BD4 and RX. Teal paths connect BD1–BD4 to RX. Blue marks the receiver route.
- **Start:** tags are known anchors with distinct IDs. They reflect the transmitter's carrier.
  TX-to-tag illumination is NLOS. Tag-to-RX links are mostly LOS.
- **Click 1:** assume known 3 m horizontal ranges for the four detected tags. Under this
  illustrative assumption, RX is inside all four circles. An ID alone does not establish a
  known circular detection range.
- **Click 2:** highlight the exact intersection of the four circles and the 2 m corridor strip.
  Ask how much finer received power alone can locate the receiver.
- **Caveat:** paths and equal-radius ranges are illustrative, not measured or ray traced.
  The standing person is an explanatory model. The measurement experiment used a trolley.
- **Transition:** "Received power can refine this region. The catch is that a mounted tag has no fixed link budget."

### Slide 3 — Why a fixed link budget fails (0:55)

- **Goal:** motivate self-calibration with measured data, not with an argument.
- **Visual:** `figs/ipin2026_power_profile_866.pdf` (measured power against position for BD1–BD4
  over all 92 runs), with a top-view layout from `figs/ipin2026_setup_geometry_v2.pdf`.
  Anchor colours match the corrected curves: BD1 blue, BD2 red, BD3 green, BD4 purple.
  The confirmed raw-channel order is BD2, BD1, BD3, BD4.
- **On slide:**
  - A wall-mounted printed monopole has no fixed gain: the wall is part of the antenna.
  - Illumination is NLOS, so the forward-link power differs per tag and is unknown.
  - Result: per-tag offsets plus location-dependent distortion.
- **Say:** point at the curves. Tags at similar distances from the path peak at visibly different
  levels, and the shapes are not clean log-distance curves. A precomputed link budget would be
  wrong by several dB per tag.
- **Transition:** "So we do not assume the link budget. We estimate it from the same data we track
  with."

### Slides 4 and 4.1 — Tracking grid (0:50, Down navigation)

- **Goal:** introduce the cell index before it appears in the model, and say why there is a grid.
- **Start:** the eye-level corridor model (`assets/grid_eye_level.jpg`), with native 3D grid edges at 0.4 m spacing and antenna height of 1 m, between BD1–BD4. Large labels with white outlines and leader lines mark the anchors. Text beside it: the corridor is divided into 0.4 m cells at antenna height, and the grid is known, like the tag positions. The 1 m height comes from the corridor model; the paper's grid is two-dimensional and states no height.
- **Down:** open slide 4.1, the top view with both cards visible. Up returns to the eye-level view. Right continues to the next horizontal slide. Allow 20 s for the 3D view and 30 s for the 2D view. Mention the cell index ℓ and the track ℓ₁ … ℓ_T on the 2D view.
- **Top view:** the tracked segment drawn in the deck: 0.4 m cells, three across the corridor and centred on the route, between BD1–BD4. An example path runs through a sequence of cells (blue), with the cells ℓ₁, ℓ_t and ℓ_T marked.
- **Titles:** slide 4, “A grid of cells defines where the receiver can be”; slide 4.1, “The receiver path is a sequence of grid cells”.
- **On slide:**
  - Each cell has an index ℓ. At sample t the receiver is in one cell, ℓ_t. The position estimate is the centre of that cell.
  - The path is a sequence of cells. A dynamic program searches all cell sequences ℓ₁ … ℓ_T exactly. Each step stays or moves to a cell within 0.6 m.
  - The print view includes both grid slides, with both cards on the top view.
- **Say:** at each sample the receiver is in one cell, so the path is a sequence of cell indices. A dynamic program searches all such sequences exactly, and a step stays in the cell or moves to a neighbour within 0.6 m.
- **Not here:** the residual map and the per-cell correction. They belong to the observation model (slide 5.1) and stage 2 of the pipeline (slide 6), where the index ℓ returns in the R term.
- **Grid in the experiment:** three columns at x = −0.4, 0, 0.4 m and nine rows from y = 4.75 to 7.95 m in 0.4 m steps, plus a boundary row at y = 8.0 m, 30 cells (`sf_ph_local_build_tracking_grid` in the MATLAB script). The boundary row is not drawn.
- **Sampling:** 100 ms raw samples correspond to about 6 cm of motion. Five-sample linear-power averages give processed samples about 500 ms, or 30 cm, apart.
- **Evaluation boundary:** samples in y ∈ [4.0, 4.75) m remain scored but are estimated on the lower grid boundary at 4.75 m.
- **Transition:** “With the cells in place, one thing is still missing: how the receiver measures the power of one tag.”

### Slide 5 — How the receiver measures one tag (0:35)

- **Goal:** close the gap before the model: say where a per-tag power comes from.
- **Visual:** schematic spectrum drawn in the deck. The direct TX carrier sits at zero offset;
  BD2, BD1, BD3 and BD4 appear at 6.5, 7.5, 8.5 and 9.5 kHz, with illustrative colours
  and setup-figure labels, each inside one filter window.
- **On slide:**
  - Each tag switches its reflection on and off at its own frequency.
  - That shifts the reflected carrier away from the direct TX signal.
  - Filtering gives raw powers every 100 ms. Tracking averages five adjacent samples in linear
    power, then converts back to dBm: `z_{f,k,t}`, carrier f, tag k, processed sample t, about
    every 500 ms.
- **Say:** a tag does not transmit. Switching moves its reflection away from the transmitter's
  carrier by its switching frequency, so a filter around that offset gives the power of that tag
  alone.
- **Source:** switching frequencies from `figs/ipin2026_setup_geometry_v2.pdf`; bandpass
  extraction, 10 Hz resolution bandwidth and 100 ms sampling from the measurement-setup section
  of the paper. BD5 (10.5 kHz) is outside the evaluated segment and is not drawn.
- **Caveat:** the drawing is a schematic, not a measured spectrum. Square-wave switching also
  gives a mirrored line below the carrier and odd harmonics; neither is drawn, and the paper does
  not state which sidebands the filter uses. Line heights are illustrative.
- **Transition:** “So every sample gives one power per tag. Here is what that power is made of.”

### Slide 5.1 — Observation model (0:55, Down navigation)

- **Goal:** one equation, four terms, each with a plain-language meaning.
- **Visual:** the model with colour-coded terms and a label under each:

  `z = G_{f,k} + Δ_f(U, B_k; p_f) + R_{f,ℓ,k} + ε`

  | Term | Meaning | How we get it |
  |---|---|---|
  | `G_{f,k}` | per-tag, per-carrier offset (illumination + mounting) | fitted |
  | `Δ(·; p_f)` | log-distance trend with fitted slope | fitted |
  | `R_{f,ℓ,k}` | location-dependent residual map | learned in stage 2 |
  | `ε` | remaining modeling error and measurement noise after averaging | Gaussian approximation |

- **Distance-trend panel:** define `U_{ℓ_t}` as the receiver cell centre at time `t`, and `B_k` as the known position of tag `k`.

- **Say:** each model sample is a processed power observation. The evaluation averages five adjacent
  samples in linear power before conversion to dBm. `ε` combines remaining modeling error and
  measurement noise after averaging. The residual-map-corrected likelihood approximates it by a
  zero-mean Gaussian conditional on the cell, with a carrier-, cell- and tag-specific variance.
  Averaging alone does not establish Gaussianity. The tag positions and corridor grid are known;
  nothing else is. `p_f` is a fitted slope
  and should not be read as a physical path-loss exponent. The key difficulty: the residual map
  needs a path to be estimated, and the path needs the model. They are not jointly identifiable
  from unlabeled data, which is why the estimator is staged.
- **Transition:** "Before the stages: how does a path come out of this model at all?"

### Slide 5.2 — From the model to a path: a cost per cell (0:35, Down navigation)

- **Goal:** close the gap between the model and the pipeline: say how the model gives a path,
  and name the two costs before slide 6 shows the minimisation.
- **Visual:** the top view of slide 4.1 with every cell shaded by its observation cost for one
  sample, dark for a good fit. The lowest-cost cell is outlined. No path, no axis.
- **On slide:**
  - Observation cost `c_t(ℓ)`: how far the measured tag powers are from what the model predicts
    for cell ℓ, summed over the tags.
  - Motion penalty `m(ℓ′, ℓ)`: the price of a step from cell ℓ′ to cell ℓ. A longer step costs more.
  - The estimated path is the cell sequence with the lowest total cost.
- **Say:** take one sample, four measured powers. For any cell, the model says what those powers
  would be if the receiver were there. The observation cost is the mismatch, summed over the tags.
  We do not pick the best cell sample by sample: a motion penalty charges for long steps, and the
  estimate is the cell sequence with the lowest total cost. That is the search the dynamic program does.
- **Source:** stage 1 uses a Huber penalty (4 dB) on `z − Δ − G` with the map set to zero; stage 3
  uses the Gaussian negative log-likelihood with the map-corrected mean and a per-cell variance.
  `m(ℓ′, ℓ) = λ ρ(‖U_ℓ − U_ℓ′‖)` with λ = 5, a 0.4 m Huber scale and predecessors within 0.6 m.
- **Caveat:** the shading is illustrative, not measured data: the 4 dB Huber cost of the distance
  trend with slope 2 and d0 = 0.1 m, for a noise-free sample taken in the outlined cell
  (x = 0, y = 7.15 m). No equation is shown here; the two costs are described in words and defined on slide 6.1.
- **Navigation:** Down from 5.1 opens it, Up returns to 5.1, Right continues to the pipeline.
  Right from 5.1 skips it if the session runs late.
- **Transition:** "This search needs the model's terms, and they are unknown. That gives three stages."

### Slide 6 — Three-stage pipeline (0:55)

- **Goal:** the method. This is the slide to rehearse most.
- **Visual:** new block diagram (to draw), three boxes left to right, built up one box per click.

  1. **Cold-start profiling** (no labels). Set `R = 0`. Alternate: Viterbi path on the grid ↔
     refit `p_f` and `G_{f,k}` with a Huber loss. At most 5 iterations.
  2. **Residual-map estimation.** Treat the stage-1 path as a *surrogate reference*. Bin residuals
     per grid cell, smooth, recentre so the map holds only location-dependent structure. Also
     gives a per-cell variance.
  3. **Corrected tracking.** Rerun the same dynamic program with the Gaussian observation cost:
     the map corrects the prediction and the spread scales each mismatch.

- **Above the stages:** what the dynamic program minimises,
  `ℓ̂_{1:T} = argmin over ℓ_1 … ℓ_T of [ Σ_{t=1..T} c_t(ℓ_t) + Σ_{t=2..T} m(ℓ_{t−1}, ℓ_t) ]`.
  The objective replaces the recursion: it says what is computed and needs no start condition.
- **Key beside the equation:** `ℓ̂_{1:T}`, the estimated path, one grid cell per sample; `c_t(ℓ)`,
  observation cost, measured tag powers against those predicted for cell ℓ; `m(ℓ′, ℓ)`, motion
  penalty, grows with the step length. `c` and `m` are the two costs of slide 5.2, defined
  exactly on slide 6.1.
- **Notes only:** the recursion `D_t(ℓ) = c_t(ℓ) + min_{ℓ'∈N(ℓ)} [ D_{t-1}(ℓ') + m(ℓ', ℓ) ]`
  with `D_1(ℓ) = c_1(ℓ)`, `N(ℓ)` the cells within 0.6 m of ℓ, and Viterbi backtracking from the
  cell with the lowest `D_T`.
- **Say:**
  - Stage 1 gives a path without measured calibration positions. The reported dual-band
    cold-start result learns its carrier weight from a provisional equal-weight profiling pass
    on the 46 unlabeled calibration runs.
  - Stage 2 is where "self-calibrated" comes from: the reference path is produced by the
    algorithm, so the calibration runs are unlabeled.
  - Do not say “on the fly”: the map is estimated from the 46 unlabeled calibration runs and
    then applied to the 46 evaluation runs. It is not built online during a run.
  - The same stage 2 and 3 can use timestamp-derived measured reference coordinates instead. We report that only as a
    reference to show how much is lost by using a surrogate.
- **Do not show:** the algorithm listing, the smoother definition, the identifiability constraint.
  All backup.
- **Navigation:** Down opens the exact costs (6.1), Right skips them.
- **Transition:** "What exactly are these two costs?" If skipping 6.1: "Here is where we tested it."

### Slide 6.1 — The two costs, exactly (0:35, Down navigation)

- **Goal:** define the two costs of the minimisation on slide 6, so that "cost" is a formula and
  not a name.
- **On slide:**
  - Predicted power of tag k in cell ℓ: `μ_{f,ℓ,k} = G_{f,k} + Δ_f(U_ℓ, B_k; p_f) + R_{f,ℓ,k}`,
    the model of slide 5.1 without its error term.
  - Observation cost, stage 1: `c_t^(f)(ℓ) = Σ_k ρ_{δ_p}(z_{f,k,t} − μ_{f,ℓ,k})`, Huber penalty,
    δ_p = 4 dB, no residual map yet (R = 0).
  - Observation cost, stage 3: `c_t^(f)(ℓ) = Σ_k [ (z_{f,k,t} − μ_{f,ℓ,k})² / (2σ²_{f,ℓ,k}) + log σ_{f,ℓ,k} ]`,
    the Gaussian negative log-likelihood, with R and the spread σ from stage 2.
  - Motion penalty, stages 1 and 3: `m(ℓ′, ℓ) = λ ρ_{δ_m}(‖U_ℓ − U_ℓ′‖)`, λ = 5, δ_m = 0.4 m,
    steps up to 0.6 m only.
  - Small: the Huber penalty `ρ_δ(u) = u²/2` for `|u| ≤ δ` and `δ(|u| − δ/2)` beyond, and the
    two-carrier sum `c_t(ℓ) = Σ_f w_f c_t^(f)(ℓ)`.
- **Say:** both observation costs compare the measured power of each tag with the power the
  model predicts for the cell. Stage 1 uses a Huber penalty, so a deep fade on one tag cannot
  decide the cell. Stage 3 divides the squared mismatch by the variance of the cell and adds
  log σ, so a cell does not score well only because its spread is large.
- **Source:** Section III of `main_v1_r4b.tex` (profiled cost, residual-map-corrected cost,
  transition penalty) and the parameter list of Section IV-A. Written without hats; the paper
  and backup slide B4 write the stage 3 plug-in values as μ̂ and σ̂.
- **Navigation:** Down from 6 opens it, Up returns to 6, Down continues to the two carriers (6.2), Right continues to the measurement setup.
- **Transition:** "Now we combine both carriers in the same path search." If skipping 6.2: "Here is where we tested it."

### Slide 6.2 — Two carriers, one path (0:40, Down navigation)

- **Goal:** explain the dual-band variant in two ideas, after the model (5.1) has defined the slope
  `p_f` and the offsets `G_{f,k}` and the exact-costs slide (6.1) has defined the per-carrier costs that are summed.
- **On slide:**
  - 866 MHz and 899 MHz, **shared path**, separate `p_f` and `G_{f,k}` per carrier, weighted sum
    of costs.
  - Common-mode term `β_t`: a per-sample disturbance shared by both carriers, profiled out in
    closed form.
  - Evidence: cross-band residual correlation pooled over individual tag channels is about
    0.07, versus about 0.49 at the per-sample mean-residual level. Zero correlation does not
    establish independence.
- **Say:** weak channel-level correlation supports diversity. The mean-residual correlation
  suggests a shared disturbance, which the regularized common-mode estimate partially absorbs.
  The shared path is the receiver trajectory; the carriers need not have identical propagation paths.
- **Navigation:** Down from 6.1 opens it, Up returns to 6.1, Right continues to the measurement setup.
- **Transition:** "Here is where we tested it."

### Slide 7 — Measurement setup (0:55)

- **Goal:** credibility, and honest scope.
- **Visual:** the cutaway render `scenery/corridor_overview_raw.png` on the left, with the geometry of
  `figs/ipin2026_setup_geometry_v2.pdf` drawn over it (tags, transmitter, evaluated segment, distance
  axis); `figs/Corridor3.png` on the right. The overlay draws BD1–BD4 only: BD5 at 11 m is outside
  the evaluated segment and is not in the scene, as on the spectrum slide. The right column pairs the
  real corridor photo with the landscape trolley animation `scenery/receiver_trolley.mp4` directly
  beneath it, so the model reads against the equipment it reconstructs. Everything stays on screen
  for the whole slide.
- **Video purpose:** show how the receiver moves past the wall tags along the 14 m route.
  This is a Blender reconstruction of the setup and motion. It contains no estimated trajectory
  or localization results. Visible caption: "Illustrative animation of the measurement setup".
- **Delivery within 0:55:**
  - First ~0:25: the clip starts itself, muted, at normal speed, with no click to make. Narrate over
    it, using the overview to point out the transmitter, wall tags and evaluated 4 m segment, then the
    real trolley in the photo above the clip. The animation holds for about 1 s at each end and covers
    the 14 m route in 23 s, about 0.61 m/s, with the antenna centre 1.0 m above the floor. Mention the
    100 ms raw sampling and five-sample averaging (about 500 ms between tracking samples) while it plays.
  - Final ~0:30: once the clip rewinds, state the calibration/evaluation split and reference
    uncertainty, then move to the results. Only y ∈ [4, 8] m contributes to the reported errors.
- **On slide:**
  - Office corridor, 2 m wide. TX around the corner, 30 dBm CW. Five BDs, each with its own
    switching frequency (6.5–10.5 kHz); the overview draws the four scored ones.
  - Receiver on a trolley, 14 m straight path, 0.61 m/s, 100 ms raw samples.
  - 92 runs in two campaigns → 46 calibration, 46 evaluation.
  - Evaluated segment: y ∈ [4, 8] m, BD1–BD4, 598 block-averaged samples. The tracking grid
    begins at 4.75 m; earlier samples remain scored at that lower boundary.
  - Campaign-balanced split: first half of each campaign for calibration, second half for evaluation.
- **Say:** the reference position comes from timestamp interpolation and carries roughly
  0.10–0.15 m of uncertainty. The route is deliberately simple; the propagation is not.
- **Playback and fallback:** start with the slide, play once without looping, rewind at the end,
  and pause/reset on leaving the slide. The overview, the photo and the numbers stay up throughout,
  so a failed clip costs nothing. PDF export must show the overview and a representative still with
  the same illustrative caption.
- **Transition:** "So how well does it work?"

### Slide 8 — Main result (1:30)

- **Goal:** land the three numbers.
- **Visual:** new bar chart (to make) of dual-band median error with P90 as whiskers or lighter
  bars, five bars grouped by calibration information. Do **not** paste Table I: it has 75 numbers.

  | Method | Calibration | Median | P90 | Along-track bias `b_y` |
  |---|---|---|---|---|
  | Profiled tracking | none | 0.52 | 0.85 | 0.27 |
  | Residual-map tracker | surrogate | 0.46 | 0.85 | 0.09 |
  | RADAR kNN | surrogate | 0.46 | 0.91 | 0.15 |
  | Residual-map tracker | measured | 0.31 | 0.65 | −0.05 |
  | RADAR kNN | measured | 0.31 | 0.61 | −0.09 |

  (metres, dual-band 866+899 MHz, from Table I)

- **Say, in this order:**
  1. No labels at all: 0.52 m median.
  2. Self-calibration with the surrogate path: 0.46 m, and the along-track bias drops from 0.27 m
     to 0.09 m. The tail (P90) does not improve.
  3. RADAR trained on the same surrogate labels ties the median but has a heavier tail (P90 0.91
     against 0.85).
  4. With timestamp-derived measured reference coordinates both methods reach 0.31 m.
     This is the route-matched reference, with about 0.10–0.15 m reference uncertainty.
  5. Conclusion from the gap: what limits the self-calibrated result is the quality of the
     surrogate path, more than the observation model.
- **One line for single band:** 899 MHz alone is the weak carrier (0.71 m cold start); dual-band
  pulls it to 0.52 m.
- **Transition:** "The medians hide where the improvement actually comes from."

### Slide 9 — Trajectory behaviour and bias (0:50)

- **Goal:** show that dual-band self-calibration gives the most stable unlabeled trajectory.
- **Visual:** `figs/ipin2026_pseudo_summary_figure.pdf` (Fig. 2 of the paper). Enlarge the top
  panel; the ECDF can be smaller. Add a legend on the slide itself: red 866 MHz, blue 899 MHz,
  green dual-band. Laid out like slide 8: the legend is a single row under the title and covers
  both views, then the chart sits on the left with the three findings on the right and the draft
  clip in its own slot at the foot of that column, always in view.
- **Say:** the dual-band median path stays closest to the centreline; 899 MHz bends toward one
  wall at the upper end and stays biased even after correction. Surrogate correction takes the
  866 MHz along-track bias to almost zero.
- **This is the slide to drop if time is short.**

### Slide 10 — Takeaways and limits (0:50)

- **On slide, left: takeaways**
  - Backscatter fiducials extend tracking beyond direct TX illumination.
  - Estimating per-tag offsets jointly with the path gives sub-metre median error without measured
    receiver-position labels: 0.52 m, and 0.46 m after self-calibration.
  - Measured-reference calibration reaches 0.31 m; the remaining gap mainly reflects surrogate-path quality.
- **On slide, right: limits and next steps**
  - One straight route, 4 m evaluated segment, four tags, route-matched calibration.
  - Next: iterate path estimation and map calibration; more diverse paths for 2-D coverage; map
    transferability; explicit cross-band covariance.
- **Closing sentence:** "With tags this simple, you have to learn the link budget in place. We
  showed you can do that from the tracking data itself."
- Advance to slide 11 after the closing sentence.

### Slide 11 — Closing and presenter contact (0:10)

- **On slide:** “Thank you,” Hüseyin Yiğitler and `huseyin.yigitler@aalto.fi`, using the deck’s existing Aalto accent background, school logo and title layout. Beneath the contact details, acknowledge the EU SNS project Ambient6G (grant 101192113) and the Research Council of Finland project BANLOS (grant 375519); the funding text moves here from the takeaways slide.
- **Source layout:** verify the original Aalto template’s final slide when the source PPTX is available.
- Thank the audience and invite questions. Keep this slide up during Q&A; backup slides follow at positions 12–15.

---

## 5. Backup slides (for Q&A only)

| # | Content | Answers the question |
|---|---|---|
| B1 | Full Table I | "What about single band / P95 / bias?" |
| B2 | Hyperparameters and sensitivity: grid 0.4 m, R = 0.6 m, λ = 5, δ_p = 4 dB, L = 5; grid 0.4 → 0.3 m moves the median 0.462 → 0.460 m; no block averaging gives 0.56 m / P90 0.98 m | "How sensitive is this to tuning?" |
| B3 | Stage 2 details: smoother, recentring constraint `Σ a_ℓ r̂ = 0`, variance clipping to [1, 12] dB | "How do you separate G from R?" |
| B4 | Common-mode cost equations (10)–(11); answer: it is used as a robust scoring rule, not a fully normalized joint likelihood | "Is the common-mode cost a proper likelihood?" |

## 6. Assets

**Reuse from `figs/`**

| Slide | File |
|---|---|
| 3 | `ipin2026_power_profile_866.pdf`, coordinates from `ipin2026_setup_geometry_v2.pdf` |
| 5 | `ipin2026_setup_geometry_v2.pdf`, for the switching frequencies |
| 7 | `ipin2026_setup_geometry_v2.pdf`, `Corridor3.png` |
| 9 | `ipin2026_pseudo_summary_figure.pdf` |

**Reuse from `scenery/`** (Blender renders; copies are in `assets/`, see `README.md`)

| Slide | File |
|---|---|
| 2 | `anchor_scenario_raw.png`, realistic corridor and standing receiver with staged annotations |
| 7 | `corridor_overview_raw.png`, cropped and annotated for the measurement setup |
| 7 | `receiver_trolley.mp4`, copied to `presentation/assets/receiver_trolley.mp4`; ~25 s, 960 × 540, 24 fps, H.264; autostarts and is narrated once on slide 7, replay with its controls |

Not used: `corridor_overview.png` (the labelled version; its labels are too small at slide size
and use other tag names, see open item 8).

**Video integration:**

- Local HTML video on slide 7, with 16:9 proportions, still posters and muted playback.
  The clip starts automatically when slide 7 is shown, needs no click, and rewinds to its first frame
  when it ends; the overview, the photo and the numbers stay visible throughout. Leaving the slide
  stops and resets the clip, and it starts again on every revisit.
- Slide 7 keeps `data-timing="55"`.
  Narration during the clip stays inside the slide's 55 s; the talk totals 13:25.
- `serve.mjs` supplies `video/mp4` and byte-range responses for seeking.
  `js/video.js` handles playback: slide 7's inline clip starts on slide show, and slide 9's clip is
  swapped in by a fragment step.
- The print layout uses the overview plus a midpoint frame on slide 7. Keep the standalone MP4 alongside the PDF on the USB stick.
- Both animations, their posters and trolley stills now use the paper setup labels and
  horizontal positions, including BD5 at 11 m. The estimate draft’s lateral direction matches
  the slide diagrams. The model and trolley speed remain illustrative.

Only these four files in `figs/` are known to match revision r4b (two are in the paper; the other two are
raw data and photos). The other ECDF and overview figures in `figs/` (`mixed_ecdf_*`,
`mixed_overview_strip*`, `mixed_example_trajectory`) appear to come from an earlier revision with
different methods. Regenerate from `Matlab/run_ipin2026_paper_standalone_compact.m` before using
any of them.

**Slide visuals** (all six now exist in `index.html`)

| Slide | Asset | Notes |
|---|---|---|
| 2 | Integrated Blender corridor | Four paper-positioned anchors, the same standing receiver as slide 1 and its method slides, direct illumination/backscatter paths, then range circles and their overlap in two clicks |
| 4 | Tracking grid in the corridor and as a top view | Eye-level Blender view with native grid curves at 1 m (`scenery/create_grid_eye_level.py`), then 0.4 m cells from the MATLAB grid with an example path and its cell indices; the y = 8.0 m boundary row is not drawn |
| 5 | Schematic spectrum | Direct TX carrier at zero offset and BD1–BD4 at their switching frequencies (6.5–9.5 kHz), one filter window per tag; one sideband, line heights illustrative |
| 5.1 | Colour-coded model equation | Four terms, four colours, reused on slide 6 |
| 5.2 | Cost map on the top-view grid | Editable SVG on the slide 4.1 geometry; illustrative shading from the distance trend, not measured data |
| 6 | Three-stage block diagram | Build in three clicks |
| 8 | Dual-band bar chart | Take the numbers from Table I of the paper (copied on slide 8 above). Do **not** use `figs/ipin2026_mixed_performance_summary.csv`: it is from an earlier revision (different methods, 3082 samples) and does not match Table I |

**Figure fixes before reuse**

- Re-export figures with larger fonts: axis labels sized for a two-column paper are unreadable
  from the back of a room.
- Colours mean different things in different figures: red is BD2 in the power profile and
  866 MHz in the summary figure. Recolour one set, or label directly on each slide.
- `tuas_floorplan.png` shows a different layout (six BDs, other labels and axes). Do not use it
  without redrawing.

## 7. Rehearsal checklist

- [ ] Timed run-through at about 13:25, twice, leaving time for questions in the 20-minute slot.
- [ ] Slide 6 delivered without looking at notes.
- [ ] The three numbers (0.52 / 0.46 / 0.31) said the same way on slides 8 and 10.
- [ ] Every figure readable at 50 % zoom on a laptop screen.
- [ ] Slide 7 rehearsed in 55 s with narration during the ~25 s video, including the play click.
- [ ] Explain the illustrative model; its BD labels and horizontal positions match the paper setup.
- [ ] If the scene is re-rendered, verify tag labels/positions against the paper and refresh all copies.
- [ ] Local video starts, stops on slide exit and replays correctly offline with its controls.
- [ ] Static setup frames remain usable when video fails and in the PDF export.
- [ ] Backup slides reachable by slide number.
- [ ] PDF copy of the deck on a USB stick, fonts embedded, with standalone MP4 alongside it.
