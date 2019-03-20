(function(){
  let publishTime = toSecond(prompt("配信時間を入力","29:55"));
  let nextPublish = true;

  startPublish();
  // 指定した時間になるまで経過時間を確認
  var interval = setInterval(checkTime,1000,publishTime);

  // 配信開始
  function startPublish(){
    document.getElementsByClassName('start')[0].click();
    document.getElementsByClassName('dialogOk')[0].click();
  }

  // 経過時間をチェックし終わらせる
  function checkTime(stopTime){
    let time = toSecond(document.getElementsByClassName('time')[0].innerHTML);
    console.log("time="+time);
    if(time >= stopTime){
      clearInterval(interval);
      endPublish();
    }
  }

  // 配信終了
  function endPublish(){
    document.getElementsByClassName('end')[0].click();
    document.getElementsByClassName('dialogOk')[0].click();
    setTimeout(function(){document.getElementsByClassName('dialog-button')[1].click()},700);
    if(nextPublish){ // 次の配信が設定されていれば1秒後に配信開始
      setTimeout(function(){
        startPublish();
        interval = setInterval(checkTime,1000,publishTime);
      },1000);
    }
  }

  // 時間→秒
  function toSecond(time){
    let [m,s] = time.split(':');
    return m*60 + +s;
  }
})();
