#! /usr/bin/env node

let argumentYear;
let argumentMonth;

let index = process.argv.findIndex((arg) => arg === "-y");
if (index !== -1 && index + 1 < process.argv.length) {
  argumentYear = process.argv[index + 1];
}
index = process.argv.findIndex((arg) => arg === "-m");
if (index !== -1 && index + 1 < process.argv.length) {
  argumentMonth = process.argv[index + 1] - 1;
}

let designatedYear = new Date().getFullYear();
let designatedMonth = new Date().getMonth();

if (argumentYear != undefined) {
  designatedYear = argumentYear;
}
if (argumentMonth != undefined) {
  designatedMonth = argumentMonth;
}

console.log(`      ${designatedMonth + 1}月 ${designatedYear}`);

let firstDayOfMonth = new Date(designatedYear, designatedMonth, 1);
let lastDayOfMonth = new Date(designatedYear, designatedMonth + 1, 0);

process.stdout.write("日 月 火 水 木 金 土\n");

let space = "   ";
process.stdout.write(`${space.repeat(firstDayOfMonth.getDay())}`);

for (
  let date = firstDayOfMonth.getDate();
  date <= lastDayOfMonth.getDate();
  date++
) {
  //土曜日の判定を行う
  let isSaturday = (firstDayOfMonth.getDay() + date) % 7 === 0;
  //1桁と2桁で表示を分ける（1桁：半角スペースを1つ設ける 2桁：そのまま表示）
  let dateStr = date < 10 ? ` ${date}` : `${date}`;
  //カレンダーの日付表示（土曜日の場合改行、そのほかは半角スペースを1つ設ける）
  process.stdout.write(dateStr + (isSaturday ? "\n" : " "));
}
console.log(``);
