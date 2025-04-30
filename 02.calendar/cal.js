#! /usr/bin/env node

let argumentYear;
let argumentMonth;

let index = process.argv.findIndex((arg) => arg === "-y");
if (index !== -1 && index + 1 < process.argv.length) {
  argumentYear = process.argv[index + 1];
}
index = process.argv.findIndex((arg) => arg === "-m");
if (index !== -1 && index + 1 < process.argv.length) {
  if (process.argv[index + 1] >= 0) {
    argumentMonth = process.argv[index + 1] - 1;
  }
}
let day = new Date();
let nowYaer = new Date().getFullYear();
let nowMonth = new Date().getMonth() + 1;

if (argumentYear >= 0 && argumentMonth >= 0) {
  day = new Date(argumentYear, argumentMonth);
} else if (argumentYear >= 0) {
  day = new Date(argumentYear, nowMonth);
} else if (argumentMonth >= 0) {
  day = new Date(nowYaer, argumentMonth);
}

const year = day.getFullYear();
const month = day.getMonth() + 1;
console.log(`      ${month}月 ${year}`);

let firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
let lastDayOfMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0);

const days = [`日 月 火 水 木 金 土`];
process.stdout.write(`${days}`);

console.log(``);
let space = `   `;
if (firstDayOfMonth.getDay() > 0) {
  process.stdout.write(`  ${space.repeat(firstDayOfMonth.getDay() - 1)}`);
}

for (
  let date = firstDayOfMonth.getDate();
  date <= lastDayOfMonth.getDate();
  date++
) {
  // 10以上（二桁）で日曜日のときはスペースを開けずに表示する
  if (date >= 10 && (firstDayOfMonth.getDay() + date) % 7 === 1) {
    process.stdout.write(`${date}`);
  }
  // 10以上（二桁）と、10未満（1桁）で日曜日のときは半角スペースを一つ開けて表示する
  else if (
    date >= 10 ||
    (date < 10 && (firstDayOfMonth.getDay() + date) % 7 === 1)
  ) {
    process.stdout.write(` ${date}`);
  }
  // 1桁の時は半角スペースを二つ開けて表示する（日曜日以外）
  else {
    process.stdout.write(`  ${date}`);
  }
  if ((firstDayOfMonth.getDay() + date) % 7 === 0) {
    console.log(``);
  }
}
console.log(``);
