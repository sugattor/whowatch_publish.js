(function () {
  // 配信時間を入力
  let publishTime = toSecond(prompt("配信時間を入力", "29:55"));

  let status = 0;
  // 0: 開始前
  // 1: 配信開始ダイアログが出てる
  // 2: 配信中(指定された時間までこのまま)
  // 3: 配信終了ダイアログが出てる
  // 4: 保存方法のダイアログが出てる

  setInterval(function (t) {
    let liveStartDialogs;
    let genericDialogs;

    switch (status) {
      case 0:
        for (let elem of document.getElementsByTagName('button')) {
          if (elem.textContent === '配信する') {
            elem.click();
            status++;
            break;
          }
        }
        break;

      case 1:
        liveStartDialogs = document.getElementsByTagName('live-start-dialog');
        loop_status1:
        for (let dialog of liveStartDialogs) {
          for (let elem of dialog.getElementsByTagName('button')) {
            if (elem.textContent === '配信する') {
              elem.click();
              status++;
              break loop_status1;
            }
          }
        }
        break;

      case 2:
        let time = toSecond(document.getElementsByClassName('time-count')[0].textContent);
        if (time >= t) {
          for (let elem of document.getElementsByTagName('button')) {
            if (elem.textContent === '終了する') {
              elem.click();
              status++;
              break;
            }
          }
        }
        break;

      case 3:
        genericDialogs = document.getElementsByTagName('generic-dialog');
        loop_status3:
        for (let dialog of genericDialogs) {
          for (let elem of dialog.getElementsByTagName('button')) {
            if (elem.textContent === '終了する') {
              elem.click();
              status++;
              break loop_status3;
            }
          }
        }
        break;

      case 4:
        genericDialogs = document.getElementsByTagName('generic-dialog');
        loop_status4:
        for (let dialog of genericDialogs) {
          for (let elem of dialog.getElementsByTagName('button')) {
            if (elem.textContent === '閉じる') {
              elem.click();
              status = 0;
              break loop_status4;
            }
          }
        }
        break;
    }
  }, 1500, publishTime);

  // 時間(MM:SS)→秒に変換する関数
  function toSecond(time) {
    let [m, s] = time.split(':');
    return m * 60 + +s;
  }
})();
