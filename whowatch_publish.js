(function () {

  let publishTime = toSecond(prompt("配信時間を入力", "29:55"));

  // 0: 開始前
  // 1: 配信開始ダイアログが出てる
  // 2: 配信中(指定された時間までこのまま)
  // 3: 配信終了ダイアログが出てる
  // 4: 保存方法のダイアログが出てる
  let status = 0;

  setInterval(function(t) {
      let liveStartDialogs;
      let genericDialogs;
      switch (status) {
          case 0:
              for (let elem of document.getElementsByTagName('button')) {
                  if (elem.textContent === '配信する') {
                      elem.click();
                      status++;
                  }
              }
              break;
          case 1:
              liveStartDialogs = document.getElementsByTagName('live-start-dialog');
              for (let elem of liveStartDialogs[0].getElementsByTagName('button')) {
                  if (elem.textContent === '配信する') {
                      elem.click();
                      status++;
                  }
              }
              break;
          case 2:
              let time = toSecond(document.getElementsByClassName('time')[0].textContent);
              if (time > t) {
                  for (let elem of document.getElementsByTagName('button')) {
                      if (elem.textContent === '終了する') {
                          elem.click();
                          status++;
                      }
                  }
              }
              break;
          case 3:
              genericDialogs = document.getElementsByTagName('generic-dialog');
              for (let elem of genericDialogs[0].getElementsByTagName('button')) {
                  if (elem.textContent === '終了する') {
                      elem.click();
                      status++;
                  }
              }
              break;
          case 4:
              genericDialogs = document.getElementsByTagName('generic-dialog');
              for (let elem of genericDialogs[0].getElementsByTagName('button')) {
                  if (elem.textContent === '非公開で保存') {
                      elem.click();
                      status = 0;
                  }
              }
              break;
      }
  }, 1000, publishTime);

  // 時間(MM:SS)→秒に変換する関数
  function toSecond(time) {
      let [m, s] = time.split(':');
      return m * 60 + +s;
  }
})();
