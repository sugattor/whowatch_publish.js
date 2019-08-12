# WhowatchPublish

ふわっち自動枠取りブックマークレット

## これは何？
ふわっちで配信する際、延長チケットを使わないと30分で配信が終わります。

このブックマークレットは、自動で次の配信を始めるためのツールです。

これを使えば「配信する」～「配信終了」「非公開で保存」～「配信する」～（以下同じ）が自動で行えます。

## 動作環境
- Google Chrome 76
- OBS Studio

## 使い方
1. [こちら](javascript:(function()%7Blet%20publishTime%3DtoSecond(prompt(%22%E9%85%8D%E4%BF%A1%E6%99%82%E9%96%93%E3%82%92%E5%85%A5%E5%8A%9B%22%2C%2229%3A55%22))%3Blet%20nextPublish%3Dtrue%3BstartPublish()%3Bvar%20interval%3DsetInterval(checkTime%2C1000%2CpublishTime)%3Bfunction%20startPublish()%7Bdocument.getElementsByClassName('start')%5B0%5D.click()%3BsetTimeout(function()%7Bdocument.getElementsByClassName('primary')%5B0%5D.click()%7D%2C200)%7Dfunction%20checkTime(stopTime)%7Blet%20time%3DtoSecond(document.getElementsByClassName('time')%5B0%5D.innerHTML)%3Bconsole.log(%22time%3D%22%2Btime)%3Bif(time%3E%3DstopTime)%7BclearInterval(interval)%3BendPublish()%7D%7Dfunction%20endPublish()%7Bdocument.getElementsByClassName('end')%5B0%5D.click()%3Bdocument.getElementsByClassName('dialogOk')%5B0%5D.click()%3BsetTimeout(function()%7Bdocument.getElementsByClassName('dialog-button')%5B1%5D.click()%7D%2C700)%3Bif(nextPublish)%7BsetTimeout(function()%7BstartPublish()%3Binterval%3DsetInterval(checkTime%2C1000%2CpublishTime)%7D%2C1000)%7D%7Dfunction%20toSecond(time)%7Blet%5Bm%2Cs%5D%3Dtime.split('%3A')%3Breturn%20m*60%2B%20%2Bs%7D%7D)()%3Bvoid(0);)をブックマークに登録
1. ふわっちの[「配信する」ページ](https://whowatch.tv/publish)で「外部エンコーダーを使う」にする
1. 登録したブックマークレットを実行
1. 配信時間を入力して
1. OBSで配信開始

## 注意事項
1. OBSの自動再接続機能が前提で作られています。
1. 貧弱な回線の場合は動作しないかもしれません。その時は最後の700と1000を増やすといいかもしれません。
1. ふわっち側の仕様変更があると動作しなくなります。
1. 使用は __自己責任__ でお願いします。
