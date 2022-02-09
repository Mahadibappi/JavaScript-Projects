const months = [
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
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// const futureDate = new Date(2022, 0, 18, 10, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()]
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();


giveaway.textContent = `Giveaway Ends On ${day}, ${date}  ${month} ${year} At ${hour}:${minute} pm`

const futureTime = futureDate.getTime()


function remainTime(){
  const today = new Date();
  const t = futureTime - today;
  
  let oneDay = 24*60*60*1000;
  let oneHour = 60*60*1000;
  let oneMinute = 60*1000;
  
  const day = Math.floor(t/oneDay);
  const hour = Math.floor((t%oneDay)/oneHour);
  const minute = Math.floor((t%oneHour)/oneMinute);
  const second = Math.floor((t%oneMinute)/1000);

  function format(item){
    if(item<10){
      return (item = `0${item}`);
    }else{
      return item
    }
  }

  const value = [day,hour,minute,second];
  
  items.forEach(function(item,index){
    item.innerHTML = format(value[index]);
  });

 
  if (t < 0) {
    clearInterval(interval);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }

};

const interval = setInterval(remainTime, 1000)
remainTime()

























































