#! /usr/bin/env node

let argumentYear;
let argumentMonth;

let index = process.argv.findIndex(arg => arg === '-y');
if (index !== -1 && index + 1 < process.argv.length){
  argumentYear = process.argv[index + 1];
}
index = process.argv.findIndex(arg => arg === '-m');
if (index !== -1 && index + 1 < process.argv.length){
  if(process.argv[index + 1] >= 0){
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
let f_day_of_week = firstDayOfMonth.getDay();
let lastDayOfMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0);
let l_day = lastDayOfMonth.getDate();

const days = [`日 月 火 水 木 金 土`];
process.stdout.write(`${days}`);


console.log(``);
if (f_day_of_week > 0) {
  process.stdout.write(`  `);
}

let space = `   `;
if (f_day_of_week > 0) {
  for (let i = 1; i < f_day_of_week; i++) {
    process.stdout.write(space);
  }
}
for (let date = 1; date <= l_day; date++) {
  if (
    (date < 10 && f_day_of_week === 0) ||
    (date > 10 && f_day_of_week !== 0) ||
    (date === 10 && f_day_of_week !== 0)
  ) {
    process.stdout.write(` ${date}`);
  } else if (f_day_of_week === 0) {
    process.stdout.write(`${date}`);
  } else {
    process.stdout.write(`  ${date}`);
  }

  f_day_of_week++;
  if (f_day_of_week == 7) {
    f_day_of_week = 0;
    console.log(``);
  }
}

console.log(``);
