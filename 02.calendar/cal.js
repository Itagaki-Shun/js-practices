#! /usr/bin/env node

let argumentYear;
let argumentMonth = -1;

for (let i = 0; i < process.argv.length; ++i) {
  if (process.argv[i] === `-y`) {
    argumentYear = process.argv[i + 1];
  }
}
for (let i = 0; i < process.argv.length; ++i) {
  if (process.argv[i] === `-m`) {
    argumentMonth += Number(process.argv[i + 1]);
  }
}

let day = new Date();
let nowYaer = new Date().getFullYear();
let nowMonth = new Date().getMonth();

if (argumentYear > 0 && argumentMonth > 0) {
  day = new Date(argumentYear, argumentMonth);
} else if (argumentYear > 0) {
  day = new Date(argumentYear, nowMonth);
} else if (argumentMonth > 0) {
  day = new Date(nowYaer, argumentMonth);
}

const year = day.getFullYear();
const month = day.getMonth() + 1;

console.log(`      ${month}月 ${year}`);

let firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
let f_day_of_week = firstDayOfMonth.getDay();
let lastDayOfMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0);
let l_day = lastDayOfMonth.getDate();

const days = [`日`, ` 月`, ` 火`, ` 水`, ` 木`, ` 金`, ` 土`];
for (let count = 0; count < 7; count++) {
  process.stdout.write(`${days[count]}`);
}

console.log(``);
if (f_day_of_week > 0) {
  process.stdout.write(`  `);
}

let space = `   `;
for (let i = 1; i <= l_day; i++) {
  if (f_day_of_week > 0 && i === 1) {
    for (let i = 1; i < f_day_of_week; i++) {
      process.stdout.write(space);
    }
  }
  if (
    (i < 10 && f_day_of_week === 0) ||
    (i > 10 && f_day_of_week !== 0) ||
    (i === 10 && f_day_of_week !== 0)
  ) {
    process.stdout.write(` ${i}`);
  } else if (f_day_of_week === 0) {
    process.stdout.write(`${i}`);
  } else {
    process.stdout.write(`  ${i}`);
  }

  f_day_of_week++;
  if (f_day_of_week == 7) {
    f_day_of_week = 0;
    console.log(``);
  }
}

console.log(``);
