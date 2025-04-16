#! /usr/bin/env node
/* global process*/

//文字の色を変更するための変数を用意
var red = '\u001b[31m';
var reset = '\u001b[0m';

//コマンドライン引数を受け取る変数を初期化
let m = 0;
let y = 0;
let d = 0;

//コマンドライン引数を格納する配列を用意
for (let i = 0; i < process.argv.length; ++i) {
  //引数を確認できる処理
  // console.log(i + ': ' + process.argv[i]);
  if (process.argv[i] == '-y') {
    y = process.argv[i + 1];
  } else if (process.argv[i] == '-m') {
    m = process.argv[i + 1];
  } else if (process.argv[i] == '-d') {
    d = process.argv[i + 1];
  }
}
//dを指定した場合、mがずれるため調整するための条件分岐
if (d > 0) {
  m = m - 1;
}
//年月日、曜日を求める
let today = new Date(y, m, d);
//何も指定しない場合は今月を求める
if (y == 0 && y == 0 && d == 0) {
  today = new Date();
}
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let day_of_week = today.getDay();

//曜日名を格納した配列daysを宣言
const days = ['日', '月', '火', '水', '木', '金', '土'];
//カレンダー上に指定した（引き渡された）年月日を表示するための条件分岐
if (y != 0 || m != 0 || d != 0) {
  if (d > 0) {
    console.log(
      '\n     ' +
        year +
        '年' +
        month +
        '月' +
        day +
        '日' +
        '[' +
        days[day_of_week] +
        ']\n'
    );
  }
  //dを指定した場合(0を除く)、日にちと曜日を表示
  else {
    console.log('\n          ' + year + '年' + month + '月\n');
  }
} else {
  console.log(
    '\n     ' +
      year +
      '年' +
      month +
      '月' +
      day +
      '日' +
      '[' +
      days[day_of_week] +
      ']\n'
  );
}

//引き渡された年月の初日とその曜日を求める。各メソッドを使用
//取得したが使用していない変数はESlintでエラーが出るため、コメント化
let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
// let f_year = firstDayOfMonth.getFullYear();
// let f_month = firstDayOfMonth.getMonth() + 1;
let f_day = firstDayOfMonth.getDate();
let f_day_of_week = firstDayOfMonth.getDay();

//引き渡された年月の最終日とその曜日を求める。各メソッドを使用
let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
// let l_year = lastDayOfMonth.getFullYear();
// let l_month = lastDayOfMonth.getMonth() + 1;
let l_day = lastDayOfMonth.getDate();
// let l_day_of_week = lastDayOfMonth.getDay();

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
  //dを指定した場合、指定した日にちの色を変更(年月日を何も指定しない場合は今日の色を変更、日にちを指定しない場合最終日の色を変更)
  if (f_day == d || f_day == day) {
    if (f_day < 10) {
      process.stdout.write('  ' + red + f_day + ' ');
    } else {
      process.stdout.write(' ' + red + f_day + ' ');
    }
  } else {
    if (f_day < 10) {
      process.stdout.write('  ' + reset + f_day + ' ');
    } else {
      process.stdout.write(' ' + reset + f_day + ' ');
    }
  }
  f_day++;
  f_day_of_week++;
  if (f_day_of_week == 7) {
    f_day_of_week = 0;
    console.log('\n');
  }
}
console.log('\n');
