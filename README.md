# WhowatchPublish

ふわっち自動枠取りブックマークレット

## これは何？
ふわっちで配信する際、延長チケットを使わないと30分で配信が終わります。

このブックマークレットは、自動で次の配信を始めるためのツールです。

これを使えば「配信する」～「配信終了」「非公開で保存」～「配信する」～（以下同じ）が自動で行えます。

## 動作環境
- Google Chrome 72
- OBS Studio

## 使い方
1. 以下をブックマークに登録

```
javascript:(function(){let publishTime=toSecond(prompt("配信時間を入力","29:55"));let nextPublish=true;startPublish();var b=setInterval(checkTime,1000,publishTime);function startPublish(){document.getElementsByClassName('start')[0].click();document.getElementsByClassName('dialogOk')[0].click()}function checkTime(a){let time=toSecond(document.getElementsByClassName('time')[0].innerHTML);console.log("time="+time);if(time>=a){clearInterval(b);endPublish()}}function endPublish(){document.getElementsByClassName('end')[0].click();document.getElementsByClassName('dialogOk')[0].click();setTimeout(function(){document.getElementsByClassName('dialog-button')[1].click()},700);if(nextPublish){setTimeout(function(){startPublish();b=setInterval(checkTime,1000,publishTime)},1000)}}function toSecond(a){let[m,s]=a.split(':');return m*60+ +s}})();
```

2. ふわっちの[「配信する」ページ](https://whowatch.tv/publish)で起動
1. 配信時間を入力して
1. OBSで配信

## 注意事項
1. OBSの自動再接続機能が前提で作られています。
1. 貧弱な回線の場合は動作しないかもしれません。その時は最後の700と1000を増やすといいかもしれません。
1. ふわっち側の仕様変更があると動作しなくなります。
1. 使用は __自己責任__ でお願いします。
