"use strict";
// For Active Sidebar
const sideNavBar = document.getElementById("side-bar");
const sidenavBarLinks = sideNavBar.getElementsByClassName("sideBarLinks");

for (let i = 0; i < sidenavBarLinks.length; i++) {
  sidenavBarLinks[i].onclick = function () {
    // Remove Class From Sibling
    let el = sidenavBarLinks[0];
    while (el) {
      if (el.tagName === "LI") {
        el.classList.remove("active");
      }
      // Pass To The Next Sibling
      el = el.nextSibling;
    }
    this.classList.add("active");
  };
}

const hamburger = document.getElementById("hamburger-9");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

var nextBtn = document.querySelector(".gallery .buttons .next");
var prevBtn = document.querySelector(".gallery .buttons .prev");
var slide = document.querySelectorAll(".gallery .photos .block");
var i = 0;

prevBtn.onclick = function () {
  slide[i].classList.remove("active");
  i--;

  if (i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add("active");
};

nextBtn.onclick = function () {
  slide[i].classList.remove("active");
  i++;

  if (i >= slide.length) {
    i = 0;
  }

  slide[i].classList.add("active");
};

// For Active Main Nav

// For Active Page

// For Music Functionality
const song1 = new Audio("../audio/VogelImKäfig.mp3");
const song2 = new Audio("../audio/PopSmokexAot2.mp3");
const song3 = new Audio("../audio/PopSmokexAot3.mp3");
music.play();

document.addEventListener("DOMContentLoaded", function () {
  const trackList = [
    {
      audioSrc: song1,
      artist: "Hiroyuki Sawano",
      desc: "Hiroyuki Sawano - Vogel Im Kafig",
      id: 0,
    },
    {
      audioSrc: song2,
      artist: "Pop Smoke x Attack On Titan",
      desc: "She Got A Thing x Vogel Im Kafig",
      id: 1,
    },
    {
      audioSrc: song3,
      artist: "Pop Smoke x Attack On Titan",
      desc: "Showing Off x Shinzou Wo Sasageyo",
      id: 2,
    },
  ];

  const currentTrackName = document.querySelector("song_namebox-artist");
  const currentTrackDesc = document.querySelector("song_namebox-title");
  const currentTrackAudio = document.querySelector("audio");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("previousBtn");
  const progress = document.getElementById("bar2");
  const currentTrackTime = document.getElementById("currentStart");
  const finalTrackTime = document.getElementById("currentEnd");

  const playPause = document.querySelector(".play--pause");
  const playBtn = documenet.getElementById("playBtn");
  const pauseBtn = documenet.getElementById("pauseBtn");
  const muteUnmuteBtn = documenet.getElementById("volume");

  let trackId = 0;

  const loadTrack = (songId) => {
    const song = trackList.find((track) => track.id === songId);

    const { audioSrc, coverSrc, name, desc } = song;
    currentTrackName.innerText = name;
    currentTrackDesc.innerText = desc;
    currentTrackAudio.src = audioSrc;
    currentTrackCover.src = coverSrc;
  };

  const playSelectedTrack = (songId) => {
    trackId = songId;
    loadTrack(songId);
    playTrack();
  };

  loadTrack(trackId);

  const playTrack = () => {
    playBtn.classList.remove("active");
    pauseBtn.classList.add("active");

    currentTrackAudio.play();
  };

  const pauseTrack = () => {
    playBtn.classList.remove("active");
    pauseBtn.classList.add("active");

    currentTrackAudio.pause();
  };

  const playPrevTrack = () => {
    trackId--;

    if (trackId < 0) {
      trackId = trackList.length - 1;
    }
    loadTrack(trackId);
    playTrack();
  };

  const playNextTrack = () => {
    trackId++;
    if (trackId > trackList.length - 1) {
      trackId = 0;
    }
    loadTrack(trackId);
    playTrack();
  };

  const updateProgress = () => {
    const currentTime = currentTrackAudio.currentTime;
    const trackDuration = currentTrackAudio.duration;
    const percent = (currentTime / trackDuration) * 100;
    progress.style.width = percent + "%";
    let curMins = Math.floor(currentTime / 60);
    let curSecs = Math.floor(currentTime - curMins * 60);
    let durMins = Math.floor(trackDuration / 60) || "--";
    let durSecs = Math.floor(trackDuration - durMins * 60) || "--";

    if (curMins < 10) {
      curMins = `0${curMins}`;
    }
    if (curSecs < 10) {
      curSecs = `0${curSecs}`;
    }
    if (durMins < 10) {
      durMins = `0${durMins}`;
    }
    if (durSecs < 10) {
      durSecs = `0${durSecs}`;
    }

    currentTrackTime.innerText = `${curMins}:${curSecs}`;
    finalTrackTime.innerText = `${durMins}:${durSecs}`;
  };

  // const muteUnmuteTrack = () => {
  //   if (currentTrackAudio.muted) {
  //     currentTrackAudio.muted = false;
  //     muteUnmuteBtn.classList.remove("fa-volume-mute");
  //     muteUnmuteBtn.classList.add("fa-volume-up");
  //   } else {
  //     currentTrackAudio.muted = true;
  //     muteUnmuteBtn.classList.remove("fa-volume-up");
  //     muteUnmuteBtn.classList.add("fa-volume-mute");
  //   }
  // };

  pauseBtn.addEventListener("click", () => {
    const currentlyPlaying = pauseBtn.classList.contains("active");

    currentlyPlaying ? pauseTrack() : playTrack();
  });
  // muteUnmuteBtn.addEventList-ener("click", () => muteUnmuteTrack());

  prevBtn.addEventListener("click", () => prevTrack());
  nextBtn.addEventListener("click", () => nextTrack());

  currentTrackAudio.addEventListener("timeupdate", () => updateProgress());
});
