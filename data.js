const aboutCard = [
    {
      img: "./assets/check icon.png",
      h4: "Creative design",
      paragraph: "Through a blend of aesthetics and functionality, CollegeOnly flaunts a sleek and new design with every element attentively crafted to improve the college experience and user engagement.",
    },
    {
      img: "./assets/check icon.png",
      h4: "Easy to use",
      paragraph: "CollegeOnly's intuitive interface makes it easier to manage. Whether you are sending friend requests or checking any event updates, everything is just a click away.",
    },
    {
      img: "./assets/check icon.png",
      h4: "Best user experience",
      paragraph: "Relish all-in-one interactions with the CollegeOnly app that optimize performance, ensuring fast load times, minimal glitches, and an overall smooth user experience.",
    },
  ];
  function togglePlayPause() {
    const video = document.getElementById('videoElement');
    const playIcon = document.getElementById('playIcon');
    const videoContainer = document.querySelector('.video-container');
    
    if (video.paused) {
      video.play();
      videoContainer.classList.add('playing');
    } else {
      video.pause();
      videoContainer.classList.remove('playing');
    }
  }