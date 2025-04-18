#! /usr/bin/env node
/* global process*/

//コマンドライン引数を受け取る変数を初期化
let m = 0;
let y = 0;

//コマンドライン引数を格納する配列を用意
for (let i = 0; i < process.argv.length; ++i) {
  //引数を確認できる処理
  console.log(i + ': ' + process.argv[i]);
  if (process.argv[i] == '-y') {
    y = process.argv[i + 1];
  } else if (process.argv[i] == '-m') {
    m = process.argv[i + 1];
  }
}