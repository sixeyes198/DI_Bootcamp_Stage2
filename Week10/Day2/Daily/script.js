// Daily Challenge : Creating Objects

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} minuets of ${this.title}!`
    );
  }
}

const video1 = new Video("Tech Talk podcast", "Marques Brownlee", 60);
video1.watch();
console.log(video1);
const video2 = new Video("Genshin impact new region...", "Mtashed", 12);
video2.watch();
console.log(video2);

const videoArray = [
  { title: "Travel Vlog", uploader: "User3", time: 480 },
  { title: "Cooking Tutorial", uploader: "User4", time: 720 },
  { title: "Gaming Highlights", uploader: "User5", time: 420 },
  { title: "Tech Review", uploader: "User6", time: 540 },
  { title: "Fitness Workout", uploader: "User7", time: 900 },
];

const videoInstances = videoArray.map(
  (video) => new Video(video.title, video.uploader, video.time)
);
videoInstances.forEach((video) => video.watch());

console.log(videoInstances);
