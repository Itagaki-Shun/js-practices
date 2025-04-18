#! /usr/bin/env node
/* global process*/

//コマンドライン引数を受け取る変数を初期化
let y = 0;
let m = 0;


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

//引き渡された年月の初日とその曜日を求める。各メソッドを使用
let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let f_year = firstDayOfMonth.getFullYear();
let f_month = firstDayOfMonth.getMonth() + 1;
let f_day = firstDayOfMonth.getDate();
let f_day_of_week = firstDayOfMonth.getDay();

//引き渡された年月の最終日とその曜日を求める。各メソッドを使用
let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
let l_year = lastDayOfMonth.getFullYear();
let l_month = lastDayOfMonth.getMonth() + 1;
let l_day = lastDayOfMonth.getDate();
let l_day_of_week = lastDayOfMonth.getDay();

//確認用（初日）
// console.log(firstDayOfMonth);
// console.log(f_year);
// console.log(f_month);
// console.log(f_day);
// console.log(f_day_of_week);
//確認用（最終日）
// console.log(lastDayOfMonth);
// console.log(l_year);
// console.log(l_month);
// console.log(l_day);
// console.log(l_day_of_week);

//カレンダーの曜日を表示
for (let cnt = 0; cnt < 7; cnt++) {
    process.stdout.write(' ' + days[cnt] + ' ');
  }

//見栄えを整理
console.log('\n');
process.stdout.write('  ');

//初日が日曜日ではなかった時に表示のずれを修正するために条件分岐で空白を設ける
if (f_day_of_week != 0) {
    if (f_day_of_week == 1) {
      process.stdout.write('  ');
    } else if (f_day_of_week == 2) {
      process.stdout.write('      ');
    } else if (f_day_of_week == 3) {
      process.stdout.write('          ');
    } else if (f_day_of_week == 4) {
      process.stdout.write('              ');
    } else if (f_day_of_week == 5) {
      process.stdout.write('                  ');
    } else if (f_day_of_week == 6) {
      process.stdout.write('                      ');
    }
}

//日にちの表示
while (f_day <= l_day) {
    if (f_day < 10) {
    process.stdout.write('  ' + f_day + ' ');
    } else {
    process.stdout.write(' ' + f_day + ' ');
    }
    f_day++;
    f_day_of_week++;
    if (f_day_of_week == 7) {
        f_day_of_week = 0;
        console.log('\n');
    }
}

//見栄えを整理
console.log('\n');