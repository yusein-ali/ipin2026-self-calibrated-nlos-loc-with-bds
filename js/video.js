// Slides 7 and 9 keep their clip in a fixed slot: it starts with the slide and rewinds at the end,
// so nothing on the slide is ever hidden and there is no step to miss.
const clips = [...document.querySelectorAll(".inline-video video")];
const videos = document.querySelectorAll(".slides video");
const printView = new URLSearchParams(location.search).get("view") === "print";
document.documentElement.classList.toggle("video-print-view", printView);

function resetVideo(video) {
  video.pause();
  if (video.readyState > 0) video.currentTime = 0;
}

function play(video) {
  video.play().catch(() => {
    // Native controls remain available if the browser rejects automatic playback.
  });
}

// A clip never moves, so ending it only rewinds to the first frame.
// Its own controls replay it; nothing on the slide is hidden either way.
clips.forEach((video) => video.addEventListener("ended", () => resetVideo(video)));

function resetSlide({ currentSlide }) {
  if (printView || !currentSlide) return;
  videos.forEach((video) => {
    if (!currentSlide.contains(video)) resetVideo(video);
  });
  clips.forEach((video) => {
    if (!currentSlide.contains(video)) return;
    resetVideo(video);
    play(video);
  });
}

Reveal.on("slidechanged", resetSlide);
Reveal.on("ready", resetSlide);
if (Reveal.isReady()) resetSlide({ currentSlide: Reveal.getCurrentSlide() });

Reveal.on("overviewshown", () => videos.forEach(resetVideo));
Reveal.on("overviewhidden", () => resetSlide({ currentSlide: Reveal.getCurrentSlide() }));
