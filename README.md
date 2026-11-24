# First p5.js Webcam Project

A webcam snapshot exercise built with p5.js.

**Repository created:** 2022-06-22  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2022-06-22

## Features and implementation

- 300 × 300 camera canvas.
- Decorative border with rectangles and circles.
- Snapshot export.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, p5.js, ml5.js.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `main.js`: `snapshot()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/p5js-project.git
cd p5js-project
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Allow camera access and click the snapshot control to save a PNG.

## Current status and limitations

Camera permission is required; no image classification is implemented.

---

Source reference: [`8468c151`](https://github.com/Avenger-Sonic123/p5js-project/tree/8468c15147ee0291a0af47750e1d5ffb46767bef) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
