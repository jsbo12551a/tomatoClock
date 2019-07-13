function add(txt) {
  let li = document.createElement('li');
  let textli = document.createTextNode('Water');

  // li.appendChild(textli);
  li.innerHTML =
    '<span class="list_start pointer list_OO"></span>' + txt + '<span></span>';
  let ul = document.querySelector('.tomato_datalist');
  ul.appendChild(li);
}
function addlist() {
  let addtxt = document.forms['addtxt'];
  let txt = addtxt.elements.txt.value;
  add(txt);
}
function addcancel() {
  let htmladdtxt = document.querySelector('.addtxt');
  htmladdtxt.style.display = 'none';
}
function addlisttxt() {
  let htmladdtxt = document.querySelector('.addtxt');
  htmladdtxt.style.display = 'block';
  let ok = document.querySelector('.submit');
  let cancel = document.querySelector('.cancel');
  ok.addEventListener('click', () => addlist());
  cancel.addEventListener('click', () => addcancel());
}
function Dateday() {
  let Today = new Date();
  let day = Today.getDay();
  let month = Today.getMonth();
  let Dateth = Today.getDate();
  let hours = Today.getHours();
  let minutes = Today.getMinutes();
  let ampm = hours > 12 ? 'PM' : 'AM';
  let daylist = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let monthlist = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return `${hours}:${minutes} ${ampm} ${daylist[day]}, ${Dateth}th ${
    monthlist[month]
  }`;
}
function tomatoStart() {
  console.log(1111);
  
  let date = document.querySelector('.c_green');
  let datetxt = date.innerText;
  let datelist = datetxt.split(':');
  let dateMinute = datelist[0] * 1;
  let dateSecond = datelist[1] * 1;
  let dateInteval = setInterval(tomatoStartInterval, 1000);
  setTimeout(() => {
    clearInterval(dateInteval);
    dateMinute = 25;
    dateSecond = 0;
    datelistsim = `0${dateSecond}`;
    date.innerHTML = `${dateMinute}:${datelistsim}`;
  }, 250*1000+1);
}
function tomatoStartInterval() {
  let date = document.querySelector('.c_green');
  let datetxt = date.innerText;
  let datelist = datetxt.split(':');
  let dateMinute = datelist[0] * 1;
  let dateSecond = datelist[1] * 1;
  console.log(123);
  if (dateMinute > 0 || dateSecond > 0) {
    if (dateSecond === 0) {
      dateMinute -= 1;
      dateSecond = 60;
      dateSecond -= 1;
      date.innerHTML = `${dateMinute}:${dateSecond}`;
      console.log(dateSecond);
    } else {
      dateSecond -= 1;
      datelistsim = `0${dateSecond}`;
      if (dateSecond < 10) {
        date.innerHTML = `${dateMinute}:${datelistsim}`;
      } else {
        date.innerHTML = `${dateMinute}:${dateSecond}`;
      }
    }
  } else {
  }
}
let date_new = document.querySelector('.date_now');
let a = document.querySelector('.add');
let icon = document.querySelector('.icon');
date_new.innerHTML = Dateday();
a.addEventListener('click', () => addlisttxt());
icon.addEventListener('click', () => tomatoStart());
