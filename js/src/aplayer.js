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
      }, {
        name: '杏花弦外雨',
        artist: '司夏',
        url: '/player/io6iWBmE9hs.m4a',
        cover: '/player/io6iWBmE9hs.jpg',
        lrc: '/player/io6iWBmE9hs.lrc',
        theme: '#b6eb86'
      }, {
        name: '生きていたんだよな',
        artist: 'あいみょん',
        url: '/player/180xCt99Lec.m4a',
        lrc: '/player/180xCt99Lec.lrc',
        theme: '#384e65'
      }, {
        name: '春待ちクローバー',
        artist: 'M.A.O',
        cover: '/player/7Oxy8FWONh8.jpg',
        url: '/player/7Oxy8FWONh8.m4a',
        lrc: '/player/7Oxy8FWONh8.lrc',
        theme: '#384e65'
      }, {
        name: '塵劫',
        artist: '倫桑Cover',
        // cover: '/player/xT4UuaONjk.jpg',
        url: '/player/xT4UuaONjk.m4a',
        lrc: '/player/xT4UuaONjk.lrc',
        theme: '#384e65'
      }, {
        name: 'Nevereverland',
        artist: 'ナノ',
        cover: '/player/2eGazzxcp3I.jpg',
        url: '/player/2eGazzxcp3I.m4a',
        lrc: '/player/2eGazzxcp3I.lrc',
        theme: '#1a3e67'
      }
    ]
  });
});
