#! /usr/bin/env node
/* global process*/

//コマンドライン引数を受け取る変数を初期化
let m = 0;
let y = 0;

//コマンドライン引数を格納する配列を用意
for (let i = 0; i < process.argv.length; ++i) {
  //引数を確認できる処理
  //console.log(i + ': ' + process.argv[i]);
  if (process.argv[i] == '-y') {
    y = process.argv[i + 1];
  } else if (process.argv[i] == '-m') {
    m = process.argv[i + 1];
  }
}

//年月日、曜日を求める
let today = new Date(y, m);
//何も指定しない場合は今月を求める
if (y == 0 && y == 0) {
  today = new Date();
}
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let day_of_week = today.getDay();

//確認用
// console.log(today);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(day_of_week);

//曜日名を格納した配列daysを宣言
const days = ['日', '月', '火', '水', '木', '金', '土'];

//年月を表示
console.log('          ' + year + '年' + month + '月\n');