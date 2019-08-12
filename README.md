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
javascript:var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
(function(){function a(){document.getElementsByClassName("start")[0].click();setTimeout(function(){document.getElementsByClassName("primary")[0].click()},200)}function b(a){var b=c(document.getElementsByClassName("time")[0].innerHTML);console.log("time="+b);b>=a&&(clearInterval(d),f())}function f(){document.getElementsByClassName("end")[0].click();document.getElementsByClassName("dialogOk")[0].click();setTimeout(function(){document.getElementsByClassName("dialog-button")[1].click()},700);setTimeout(function(){a();
d=setInterval(b,1E3,e)},1E3)}function c(a){var b=$jscomp.makeIterator(a.split(":"));a=b.next().value;b=b.next().value;return 60*a+ +b}var e=c(prompt("\u914d\u4fe1\u6642\u9593\u3092\u5165\u529b","29:55"));a();var d=setInterval(b,1E3,e)})();
```

2. ふわっちの[「配信する」ページ](https://whowatch.tv/publish)で起動
1. 配信時間を入力して
1. OBSで配信

## 注意事項
1. OBSの自動再接続機能が前提で作られています。
1. 貧弱な回線の場合は動作しないかもしれません。その時は最後の700と1000を増やすといいかもしれません。
1. ふわっち側の仕様変更があると動作しなくなります。
1. 使用は __自己責任__ でお願いします。
