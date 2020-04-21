(function () {
  let publishTime = toSecond(prompt("配信時間を入力", "29:55"));

  startPublish();
  // 指定した時間になるまで経過時間を確認
  var interval = setInterval(checkTime, 1000, publishTime);

  // 配信開始する関数
  function startPublish() {
    // 「配信する」をクリック
    document.getElementsByClassName('primary')[0].click();
    // 500ms後ダイアログの「配信する」をクリック
    setTimeout(function () { document.getElementsByClassName('primary')[1].click() }, 500);
  }

  // 経過時間をチェックし終わらせる
  function checkTime(stopTime) {
    // 配信画面の時間(MM:SS)から配信秒数を取得する
    let time = toSecond(document.getElementsByClassName('time')[0].innerHTML);
    // 一応コンソールに取得した時間(秒)を表示
    console.log("time=" + time);

    // 指定時間を超えたら配信を終了させる
    if (time >= stopTime) {
      clearInterval(interval);
      endPublish();
    }
  }

  // 配信終了させる関数
  function endPublish() {
    // 「終了する」をクリック
    document.getElementsByClassName('warn')[0].click();
    // 500ms後ダイアログの「終了する」をクリック
    setTimeout(function () { document.getElementsByClassName('warn')[1].click() }, 500);
    // 1秒後「非公開で保存する」をクリック
    setTimeout(function () { document.getElementsByClassName('basic')[1].click() }, 1000);
    // 2秒後に配信開始
    setTimeout(function () {
      startPublish();
      interval = setInterval(checkTime, 1000, publishTime);
    }, 2000);
  }

  // 時間(MM:SS)→秒に変換する関数
  function toSecond(time) {
    let [m, s] = time.split(':');
    return m * 60 + +s;
  }
})();
