// let d = new Date();

// console.log(d.toString());
// console.log(d.toUTCString());

let m = 11;

const days = [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土',
];
// m = m - 1;
let today = new Date(2019, m);

// console.log(today.getFullYear(),'年' +
//             today.getMonth(),'月' +
//             today.getDate(),'日' +
//             'は' +
//             days[today.getDay()] + '曜日' +
//             'です'
//             );

let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(),1);
console.log(firstDayOfMonth);
console.log(firstDayOfMonth.getFullYear(),'年' +
            firstDayOfMonth.getMonth(), '月' +
            firstDayOfMonth.getDate(), '日' +
            'は' +
            days[firstDayOfMonth.getDay()] + '曜日' +
            'です');

let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0);
console.log(lastDayOfMonth);
console.log(lastDayOfMonth.getFullYear(),'年' +
            (lastDayOfMonth.getMonth() + 1), '月' +
            lastDayOfMonth.getDate(), '日' +
            'は' +
            days[lastDayOfMonth.getDay()] + '曜日' +
            'です');

for()