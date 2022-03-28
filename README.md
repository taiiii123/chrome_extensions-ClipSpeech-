# chrome_extensions-ClipSpeech-

# 概要
音声認識APIを用いて、簡単にテキスト変換を行い、コピー＆ペーストできるchrome拡張機能。

### 機能
|  開始ボタン        |  停止ボタン         |  コピーボタン          |  削除ボタン                |
| ----------------  | ------------------ | --------------------- | ------------------------- |
| 音声認識APIの開始  |  音声認識APIの停止  |  クリップボードにコピー  |  textareaの内容を削除する  |

# 動作
<img alt="動作" src="https://user-images.githubusercontent.com/70006535/160376646-eda133a7-ad2e-475a-ad7a-0747d3871386.gif">
※ポップアップ表示でなく、ローカルのindex.htmlで表示しています。
※仕様変更のバグにより、chrome.tabs.sendMessageのresponseが使えないため、途中で断念しました。
