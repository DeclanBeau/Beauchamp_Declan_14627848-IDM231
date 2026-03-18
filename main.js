//for sounds: make sure the sound that is playing stops before the new sound starts
//rename repo Beauchamp_Declan_14627848-IDM231
//2 links: site link, gitHub repo link

const date = document.querySelector('form');
const exit = document.getElementById('exit');
const sign = [
  document.getElementById('Capricorn'), 
  document.getElementById('Aquarius'),
  document.getElementById('Pisces'),
  document.getElementById('Aires'),
  document.getElementById('Taurus'),
  document.getElementById('Gemini'),
  document.getElementById('Cancer'),
  document.getElementById('Leo'),
  document.getElementById('Virgo'),
  document.getElementById('Libra'),
  document.getElementById('Scorpio'),
  document.getElementById('Sagittarius')
];

let currentSound = null; 
const sounds = {
  Capricorn: 'sounds/subaru.mp3',
  Aquarius: 'sounds/ford.mp3',
  Pisces: 'sounds/mazda.mp3', 
  Aires: 'sounds/brat.mp3',
  Taurus: 'sounds/mg.mp3',
  Gemini: 'sounds/fiat.mp3',
  Cancer: 'sounds/porche.mp3',
  Leo: 'sounds/roadrunner.mp3',
  Virgo: 'sounds/honda.mp3',
  Libra: 'sounds/mustang.mp3',
  Scorpio: 'sounds/bmw.mp3',
  Sagittarius: 'sounds/skyline.mp3'
}
//Stops sound that's playing, starts new sound
function playSound(sign){
  if(currentSound){
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  currentSound = new Audio(sounds[sign]);
    currentSound.play();
}
//UI Updating Functions
function selectCapri(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const carImage = document.getElementById('carImage');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  playSound('Capricorn');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'flex';
  carImage.src = 'images/subaru.webp'
  infoText.textContent = 'You selected the Subaru Impreza';
  carHeading.textContent = 'Subaru Impreza';
  exit.style.display = 'flex';
  document.body.style.background = '#8D94A6';   
}

function selectAqua(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Aquarius');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'flex';
  carImage.src = 'images/ford.webp';
  infoText.textContent = 'You selected the Ford GT';
  carHeading.textContent = 'Ford GT';
  exit.style.display = 'flex';
  document.body.style.background = '#A8D5E6';         
}    

function selectPisces(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Pisces');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'flex';
  carImage.src = 'images/mazda.webp';
  infoText.textContent = 'You selected the Mazda RX-7';
  carHeading.textContent = 'Mazda RX-7';
  exit.style.display = 'flex';
  document.body.style.background = '#CA613A';     
}    

function selectAires(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Aires');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'block';
  carImage.src = 'images/brat.webp';
  infoText.textContent = 'You selected the Subaru BRAT';
  carHeading.textContent = 'Subaru BRAT';
  exit.style.display = 'flex';
  document.body.style.background = '#DB4646';
}    

function selectTaurus(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  const carImage = document.getElementById('carImage');
  playSound('Taurus');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display =  'flex';
  carImage.src = 'images/mg.webp';
  infoText.textContent = 'You selected the MGB';
  carHeading.textContent = 'MGB';
  exit.style.display = 'flex';
  document.body.style.background = '#008C47';
}    

function selectGemini(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Gemini');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'block';
  carImage.src = 'images/fiat.webp';
  infoText.textContent = 'You selected the Fiat 124 Spider You selected the Fiat 124 Spider You selected the Fiat 124 Spider You selected the Fiat 124 Spider';
  carHeading.textContent = 'Fiat 124 Spider';
  exit.style.display = 'flex';
  document.body.style.background = '#F6E684';
}    

function selectCancer(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Cancer');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'block';
  carImage.src = 'images/porche.webp';
  infoText.textContent = 'You selected the Porche 911';
  carHeading.textContent = 'Porche 911';
  exit.style.display = 'flex';
  document.body.style.background = '#FFFFF0';
}    

function selectLeo(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Leo');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'block';
  carImage.src = 'images/roadrunner.webp'
  infoText.textContent = 'You selected the Plymouth Roadrunner';
  carHeading.textContent = 'Plymouth Roadrunner';
  exit.style.display = 'flex';
  document.body.style.background = '#DAA157';
}    
 
function selectVirgo(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const carImage = document.getElementById('carImage');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  playSound('Virgo');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'flex';
  carImage.src = 'images/honda.webp '
  infoText.textContent = 'You selected the Honda Civic';
  carHeading.textContent = 'Honda Civic';
  exit.style.display = 'flex';
  document.body.style.background = '#CF8FA9';
}    

function selectLibra(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const carImage = document.getElementById('carImage');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  playSound('Libra');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'flex';
  carImage.src = 'images/mustang.webp';
  infoText.textContent = 'You selected the Ford Mustang';
  carHeading.textContent = 'Ford Mustang';
  exit.style.display = 'flex';
  document.body.style.background = '#30A5C2';            
}    

function selectScorpio(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const carImage = document.getElementById('carImage');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  playSound('Scorpio');
  infoText.style.display = 'block';
  infoText.style.color = '#EFEFEF';
  carHeading.style.color = '#EFEFEF';
  pageHeading.style.color = '#EFEFEF';
  label.style.color = '#EFEFEF';
  infoText.textContent = 'You selected the BMW E30 M3';
  carHeading.textContent = 'BMW E30 M3';
  exit.style.display = 'flex';
  carImage.style.display = 'flex';
  carImage.src = 'images/bmw.webp';
  document.body.style.background = '#242424';               
}    

function selectSagit(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const carImage = document.getElementById('carImage');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  playSound('Sagittarius');
  infoText.style.display = 'block';
  infoText.style.color = '#EFEFEF';
  carHeading.style.color = '#EFEFEF';
  pageHeading.style.color = '#EFEFEF';
  label.style.color = '#EFEFEF';
  infoText.textContent = 'You selected the Nissan Skyline';
  carHeading.textContent = 'Nissan Skyline';
  exit.style.display = 'flex';
  carImage.style.display = 'flex';
  carImage.src = 'images/skyline.webp';
  document.body.style.background = '#501D87';           
}    

function exitButton(){
  exit.addEventListener('click', function()  {
   const infoText = document.getElementById('infoText');
   const carHeading = document.getElementById('carHeading');
   const carImage = document.getElementById('carImage');
   if(currentSound){
    currentSound.pause();
    currentSound.currentTime = 0;
   }
   infoText.style.display = 'none';
   carImage.style.display = 'none';
   infoText.textContent = ' ';
   carHeading.textContent = 'Select a car for more information.'
   exit.style.display = 'none';
   infoText.style.color = '#050505';
   carHeading.style.color = '#050505';
   pageHeading.style.color = '#050505';
   label.style.color = '#050505';
   document.body.style.background = '#EFEFEF';
  }), false;
}
//Zodiac Function
function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'Capricorn';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Sagittarius';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 'Scorpio';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 'Libra';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Leo';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 'Cancer';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 'Gemini';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Taurus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Aries';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Pisces';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Aquarius';
  } else return null;
}
//Loops through array sign, and updates UI based on the button the user clicks
sign.forEach(element => {
  element.addEventListener('click', function () {
    const date = document.getElementById('birthday');
    date.value = '';
    if (element.id === 'Capricorn') {
      selectCapri();
    } else if (element.id === 'Aquarius'){
      selectAqua();
    } else if (element.id === 'Pisces'){
      selectPisces();
    } else if (element.id === 'Aires'){
      selectAires();
    } else if (element.id === 'Taurus'){
      selectTaurus();
    } else if (element.id === 'Gemini'){
      selectGemini();
    } else if (element.id === 'Cancer'){
      selectCancer();
    }else if (element.id === 'Leo'){
      selectLeo();
    }else if (element.id === 'Virgo'){
      selectVirgo();
    }else if (element.id === 'Libra'){
      selectLibra();
    }else if (element.id === 'Scorpio'){
      selectScorpio();
    }else if (element.id === 'Sagittarius'){
      selectSagit();
    }
  }), false;
})

function handleSubmit (event){
  event.preventDefault();
}

function seperateMonth (month){
  return month;
}

function seperateDay (day){
  return day;
}

date.addEventListener('submit', function() {
  handleSubmit(event);
  let seperateDate = birthday.value.split('-');
  let month = seperateMonth(Number(seperateDate[1]));
  let day = Number(seperateDate[2]);
  getZodiac(month, day);

//Changes the UI based off selection in date input
 if (getZodiac(month, day) === 'Capricorn'){
    selectCapri();
  } else if (getZodiac(month, day) === 'Aquarius'){
    selectAqua();
  } else if (getZodiac(month,day) === 'Pisces'){
    selectPisces();
  }else if (getZodiac(month,day) === 'Aries'){
    selectAires();
  }else if (getZodiac(month,day) === 'Taurus'){
    selectTaurus();
  }else if (getZodiac(month,day) === 'Gemini'){
    selectGemini();
  }else if (getZodiac(month, day) === 'Cancer'){
    selectCancer();
  }else if (getZodiac(month, day) === 'Leo'){
    selectLeo();
  }else if (getZodiac(month,day) === 'Virgo'){
    selectVirgo();
  }else if (getZodiac(month, day) === 'Libra'){
    selectLibra();
  }else if (getZodiac(month, day) === 'Scorpio'){
    selectScorpio();
  }else if (getZodiac(month, day) === 'Sagittarius'){
    selectSagit();
  }

}), false;




exitButton();