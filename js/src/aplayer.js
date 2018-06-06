$(document).ready(function () {
  window.aplayer = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: false,
    autoplay: localStorage.getItem('autoplay') === "true",
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.5,
    mutex: true,
    listFolded: false,
    listMaxHeight: '90px',
    lrcType: 3,
    audio: [
      {
        name: '潛別離',
        artist: '銀臨',
        url: '/player/n-i770aRaTo.m4a',
        cover: '/player/n-i770aRaTo.jpg',
        lrc: '/player/n-i770aRaTo.lrc',
        theme: '#ebd0c2'
      }
    ]
  });
});
