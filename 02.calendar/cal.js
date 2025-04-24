#! /usr/bin/env node

let y = 0;
let m = 0;

for (let i = 0; i < process.argv.length; ++i) {
  if (process.argv[i] === "-y") {
    y = process.argv[i + 1];
  } else if (process.argv[i] === "-m") {
    m = process.argv[i + 1];
  }
}

m = m - 1;


let today = new Date();

//今年と今月を求め、それぞれの変数に格納
let nowYaer = new Date().getFullYear();
let nowMonth = new Date().getMonth();

if (y === 0 && m === -1) {
  today = new Date();
}
else if (y > 0 && m >= 0) {
  today = new Date(y, m);
}
else if (y > 0) {
  today = new Date(y, nowMonth);
}
else if (m > 0) {
  today = new Date(nowYaer, m);
}

let year = today.getFullYear();
let month = today.getMonth() + 1;

console.log("       " + month + "月 " + year);

let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let f_day = firstDayOfMonth.getDate();
let f_day_of_week = firstDayOfMonth.getDay();
let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
let l_day = lastDayOfMonth.getDate();

const days = ["日", "月", "火", "水", "木", "金", "土"];
for (let cnt = 0; cnt < 7; cnt++) {
  process.stdout.write(" " + days[cnt]);
}

console.log("");
if (f_day_of_week > 0) {
  process.stdout.write("  ");
}

//初日が日曜日ではなかった時に表示のずれを修正するために条件分岐で空白を設ける
if (f_day_of_week === 1) {
  process.stdout.write("  ");
} else if (f_day_of_week === 2) {
  process.stdout.write("    ");
} else if (f_day_of_week === 3) {
  process.stdout.write("       ");
} else if (f_day_of_week === 4) {
  process.stdout.write("          ");
} else if (f_day_of_week === 5) {
  process.stdout.write("             ");
} else if (f_day_of_week === 6) {
  process.stdout.write("                ");
}

//カレンダーの表示
while (f_day <= l_day) {
  if (f_day < 10) {
    process.stdout.write("  " + f_day);
  } else {
    process.stdout.write(" " + f_day);
  }
  f_day++;
  f_day_of_week++;
  if (f_day_of_week == 7) {
    f_day_of_week = 0;
    console.log(" ");
  }
}

console.log("");
