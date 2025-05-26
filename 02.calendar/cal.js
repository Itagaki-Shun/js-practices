#! /usr/bin/env node

const designatedDate = new Date();
let designatedYear = designatedDate.getFullYear();
let designatedMonth = designatedDate.getMonth();

let index = process.argv.findIndex((arg) => arg === "-y");
if (index !== -1 && index + 1 < process.argv.length) {
  designatedYear = process.argv[index + 1];
}
index = process.argv.findIndex((arg) => arg === "-m");
if (index !== -1 && index + 1 < process.argv.length) {
  designatedMonth = process.argv[index + 1] - 1;
}

console.log(`      ${designatedMonth + 1}月 ${designatedYear}`);

const firstDayOfMonth = new Date(designatedYear, designatedMonth, 1);
const lastDayOfMonth = new Date(designatedYear, designatedMonth + 1, 0);

console.log("日 月 火 水 木 金 土");

process.stdout.write("   ".repeat(firstDayOfMonth.getDay()));

for (
  let date = firstDayOfMonth.getDate();
  date <= lastDayOfMonth.getDate();
  date++
) {
  // 土曜日の判定を行う
  let isSaturday = (firstDayOfMonth.getDay() + date) % 7 === 0;

  const lastDay = date === lastDayOfMonth.getDate();

  let dateStr = date < 10 ? ` ${date}` : `${date}`;

  lastDay || isSaturday
    ? console.log(dateStr)
    : process.stdout.write(`${dateStr} `);
}
