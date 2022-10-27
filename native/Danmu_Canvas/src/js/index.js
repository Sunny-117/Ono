import VideoDanmu from './danmu';

const danmuData = [
  {
    content: '我真的好喜欢这首钢琴曲',
    runTime: 10,
    speed: 2,
    color: 'red'
  },
  {
    content: '这首钢琴曲是红猪里的一去不复返的时光',
    runTime: 0,
    speed: 4,
    color: 'orange'
  },
  {
    content: '久石让是我最崇拜的音乐家之一',
    runTime: 15,
    speed: 4,
    color: 'green'
  }
]

;((doc) => {

  const oDanmuVideo = doc.getElementById('J_danmuVideo'),
        oDanmuCanvas = doc.getElementById('J_danmuCanvas'),
        oDanmuBtn = doc.getElementsByClassName('danmu-btn')[0],
        oDanmuInput = doc.getElementsByClassName('danmu-input')[0],
        oColorInput = doc.getElementsByClassName('color-input')[0];
  
  const init = () => {
    window.videoDanmu = new VideoDanmu(
      oDanmuVideo,
      oDanmuCanvas,
      {
        danmuData
      }
    )
    bindEvent();
  }

  function bindEvent () {
    oDanmuVideo.addEventListener('play', handleVideoPlay, false);
    oDanmuVideo.addEventListener('pause', handleVideoPause, false);
    oDanmuVideo.addEventListener('seeked', handleVideoSeek, false);
    oDanmuBtn.addEventListener('click', handleToolClick, false);
  }

  function handleVideoPlay () {
    videoDanmu.danmuPaused = false;
    videoDanmu.render();
  }

  function handleVideoPause () {
    videoDanmu.danmuPaused = true;
  }

  function handleVideoSeek () {
    videoDanmu.reset();
  }

  function handleToolClick () {
    if (videoDanmu.danmuPaused) return;

    const inputValue = oDanmuInput.value.trim();

    if (!inputValue.length) return;

    const colorValue = oColorInput.value,
          runTime = oDanmuVideo.currentTime;
    
    const _data = {
      content: inputValue,
      color: colorValue,
      runTime
    }

    videoDanmu.add(_data);
    oDanmuInput.value = '';
  }


  init();

})(document);
