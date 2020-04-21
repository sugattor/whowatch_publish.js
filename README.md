# [WhowatchPublish](https://sugattor.github.io/whowatch_publish.js/)

ふわっち自動枠取りブックマークレット

## これは何？
ふわっちで配信する際、延長チケットを使わないと30分で配信が終わります。

このブックマークレットは、自動で次の配信を始めるためのツールです。

これを使えば「配信する」～「配信終了」「非公開で保存」～「配信する」～（以下同じ）が自動で行えます。

## 動作環境(2020/4/22時点)
- Google Chrome 81
- OBS Studio 25.0.4

## 使い方
1. 以下をブックマークに登録
```
javascript:(function(){let s=document.createElement('script');s.src='https://sugattor.github.io/whowatch_publish.js/whowatch_publish.js';document.body.appendChild(s)})()
```
2. ふわっちの[「配信する」ページ](https://whowatch.tv/publish)で「外部エンコーダーを使う」にする
1. 登録したブックマークレットを実行
1. 配信時間を入力して
1. OBSで配信開始

## 注意事項
1. OBSの自動再接続機能が前提で作られています。
1. 使用は __自己責任__ でお願いします。
1. 「配信ガイドラインに同意する」にチェックが入っていないと動作しません。
1. ふわっち側の仕様変更があると動作しなくなります。
1. 動作しない場合は[@sugattor](https://twitter.com/sugattor)までお知らせください。
