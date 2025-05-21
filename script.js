// Handle lyrics highlight as example (Optional animation / interaction)
const lyrics = document.querySelectorAll('.lyric');
let currentIndex = 0;

// Simulate lyric highlight
setInterval(() => {
  lyrics.forEach((lyric, i) => {
    lyric.classList.remove('active');
    if (i === currentIndex) {
      lyric.classList.add('active');
    }
  });

  currentIndex = (currentIndex + 1) % lyrics.length;
}, 5000); // Change line every 3 seconds


const cameraBtn = document.getElementById('cameraBtn');
const collage = document.getElementById('collage');
const messageBox = document.getElementById('messageBox');

cameraBtn.addEventListener('click', () => {
  const isHidden = collage.style.display === 'none';

  if (isHidden) {
    collage.style.display = 'flex';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    // Show the message overlay after 5 seconds
    setTimeout(() => {
      messageBox.style.display = 'flex';
    }, 4000);
  } else {
    collage.style.display = 'none';
    messageBox.style.display = 'none';
  }
});



function closeFirstMessage() {
  const messageBox = document.getElementById('messageBox');
  const finalMessage = document.getElementById('finalMessage');

  // Hide the first overlay
  messageBox.style.display = 'none';

  // Show the final message overlay
  setTimeout(() => {
    finalMessage.style.display = 'flex';
  }, 300); // slight delay to feel smoother
}



const closeBtn = document.getElementById('closeCollage');

closeBtn.addEventListener('click', () => {
  collage.style.display = 'none';
});


function showFinalMessage() {
    const messageBox = document.getElementById('messageBox');
    const finalMessage = document.getElementById('finalMessage');
  
    messageBox.style.display = 'none';
  
    setTimeout(() => {
      finalMessage.style.display = 'flex';
    }, 500); // slight delay to smooth the transition
  }
  


  function startSpotify() {
    const finalMessage = document.getElementById('finalMessage');
    const spotifyPlayer = document.getElementById('spotifyPlayer');
  
    // Hide the final overlay
    finalMessage.style.display = 'none';
  
    // Show the Spotify player
    spotifyPlayer.style.display = 'block';
  
    // Scroll to Spotify player (optional)
    setTimeout(() => {
      spotifyPlayer.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  
    // Start lyrics sync
    startLyricsSync();
  }

  
  function startSpotify() {
    const finalMessage = document.getElementById('finalMessage');
    const spotifyPlayer = document.getElementById('spotifyPlayer');
    const lyricsWrapper = document.getElementById('lyrics');
    const heartWrapper = document.getElementById('heartWrapper');
  
    finalMessage.style.display = 'none';
    spotifyPlayer.style.display = 'block';
    if (lyricsWrapper) lyricsWrapper.style.display = 'block';
  
    setTimeout(() => {
      if (lyricsWrapper) lyricsWrapper.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  
    // Show heart after 10 seconds
    setTimeout(() => {
      heartWrapper.style.display = 'block';
    }, 10000);
  
    startLyricsSync();
  }
  
  // When heart is clicked, show love message
  document.getElementById('heartIcon').addEventListener('click', () => {
    document.getElementById('loveMessage').style.display = 'flex';
  });
  
  function closeLoveMessage() {
    document.getElementById('loveMessage').style.display = 'none';
  }
  

  function startLyricsSync() {
    const lyrics = document.querySelectorAll('.lyric');
    let startTime = Date.now();
  
    function updateLyrics() {
      const currentTime = (Date.now() - startTime) / 1000; // seconds
      lyrics.forEach(lyric => {
        const lineTime = parseFloat(lyric.getAttribute('data-time'));
        if (currentTime >= lineTime) {
          lyric.classList.add('active');
          lyric.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
  
      if (currentTime < 300) { // stop after ~5 mins
        requestAnimationFrame(updateLyrics);
      }
    }
  
    updateLyrics();
  }



  
