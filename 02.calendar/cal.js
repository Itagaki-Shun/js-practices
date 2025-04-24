#! /usr/bin/env node

let Argument_Year;
let Argument_Month = -1;

for (let i = 0; i < process.argv.length; ++i) {
  if (process.argv[i] === `-y`) {
    Argument_Year = process.argv[i + 1];
  }
}
for (let i = 0; i < process.argv.length; ++i) {
  if (process.argv[i] === `-m`) {
    Argument_Month += Number(process.argv[i + 1]);
  }
}

let today = new Date();

//今年と今月を求め、それぞれの変数に格納
let nowYaer = new Date().getFullYear();
let nowMonth = new Date().getMonth();

if (Argument_Year > 0 && Argument_Month > 0) {
  today = new Date(Argument_Year, Argument_Month);
} else if (Argument_Year > 0) {
  today = new Date(Argument_Year, nowMonth);
} else if (Argument_Month > 0) {
  today = new Date(nowYaer, Argument_Month);
}

let year = today.getFullYear();
let month = today.getMonth() + 1;

console.log(`      ${month}月 ${year}`);

let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let f_day_of_week = firstDayOfMonth.getDay();
let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
let l_day = lastDayOfMonth.getDate();

const days = [`日`, `月`, `火`, `水`, `木`, `金`, `土`];
for (let count = 0; count < 7; count++) {
  process.stdout.write(`${days[count]} `);
}

console.log(``);
if (f_day_of_week > 0) {
  process.stdout.write(`  `);
}

//初日が日曜日ではなかった時に表示のずれを修正するために条件分岐で空白を設ける
if (f_day_of_week === 1) {
  process.stdout.write(`  `);
} else if (f_day_of_week === 2) {
  process.stdout.write(`    `);
} else if (f_day_of_week === 3) {
  process.stdout.write(`       `);
} else if (f_day_of_week === 4) {
  process.stdout.write(`          `);
} else if (f_day_of_week === 5) {
  process.stdout.write(`             `);
} else if (f_day_of_week === 6) {
  process.stdout.write('                ');
}

//カレンダーの表示
for (let day = 1; day <= l_day; day++) {
  if (day < 10) {
    process.stdout.write(`  ${day}`);
  } else {
    process.stdout.write(` ${day}`);
  }
  f_day_of_week++;
  if (f_day_of_week == 7) {
    f_day_of_week = 0;
    console.log(``);
  }
}

console.log(``);
