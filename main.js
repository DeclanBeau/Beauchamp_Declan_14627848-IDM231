const date = document.querySelector('form');
const exit = document.getElementById('exit');
const sign = [
  document.getElementById('Capricorn'), 
  document.getElementById('Aquarius'),
  document.getElementById('Pisces'),
  document.getElementById('Aries'),
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
  Aries: 'sounds/brat.mp3',
  Taurus: 'sounds/mg.mp3',
  Gemini: 'sounds/fiat.mp3',
  Cancer: 'sounds/porsche.mp3',
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
  infoText.textContent = 'You selected the Subaru Impreza STI. The Impreza STI was originally created as a part of Subaru\'s motorsport division called Subaru Tecnica International to allow it to compete and develop for the FIA World Rally Championship. Pictured is the 2005 variant of the Impreza WRX STI, from the second generation, sometimes called the \"peanut eye,\" for it\'s peanut shaped headlights.';
  carHeading.textContent = 'Subaru Impreza STI';
  exit.style.display = 'flex';
  document.body.style.background = '#8D94A6';   
}

function selectAqua(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const label = document.getElementById('label');
  playSound('Aquarius');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'flex';
  carImage.src = 'images/ford.webp';
  infoText.textContent = 'You selected the Ford GT40. The GT40 was created in the 1960\'s for the sole purpose of beating Scuderia Ferrari in the 24 Hours of Le Mans. It\'s first race was in 1964, which they saw many concerns with reliability, leading to all three cars retiring from the race. However, in 1965, the Ford GT40, new and improved, claimed a 1-2-3 victory, leading to an era of sportscar racing dominance.';
  carHeading.textContent = 'Ford GT40';
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
  infoText.textContent = 'You selected the Mazda RX-7. The RX-7 was unique for it\'s rotary engine, which functions differently than a classic internal combustion engine. Instead of combustion being created by pistons, it is created by a spinning triangle, which allows for the size of the engine to be smaller, and with a smaller size, comes a lighter weight. These engines are known for their unique sound, and ability to be modified and tuned.';
  carHeading.textContent = 'Mazda RX-7';
  exit.style.display = 'flex';
  document.body.style.background = '#CA613A';     
}    

function selectAries(){
  const infoText = document.getElementById('infoText');
  const carHeading = document.getElementById('carHeading');
  const pageHeading = document.getElementById('pageHeading');
  const carImage = document.getElementById('carImage');
  const label = document.getElementById('label');
  playSound('Aries');
  infoText.style.color = '#050505';
  carHeading.style.color = '#050505';
  pageHeading.style.color = '#050505';
  label.style.color = '#050505';
  infoText.style.display = 'block';
  carImage.style.display = 'block';
  carImage.src = 'images/brat.webp';
  infoText.textContent = 'You selected the Subaru BRAT. The BRAT is a four wheel drive coupe sized truck. To be able to import the BRAT into the United States, Subaru had to add additional jump seats in the bed of the truck, to turn the car into a four seater. This was because of a tariff that the United States had placed on coupes, which were widely considered sportscars.';
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
  infoText.textContent = 'You selected the MGB. The MGB is one of the most famous roadsters ever made. Since they are not incredibly fast, roadsters rely on their light weight and handling. This makes these cars quick and fun cars to drive. They are known as a wealthy person\'s weekend car, since they are not practical to drive day to day, but they are fun as can be!';
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
  infoText.textContent = 'You selected the Fiat 124 Spider. The 124 Spider was by Pininfarina, one of the most famous automotive designers from Italy. Pininfarina also designed many of the older Ferrari models, which lead to people identifying the 124 Spider as a \"Baby Ferrari.\" These lighweight sports roadsters are well known as fun cars to drive, but, like most Italian cars, they do have reliability issues, making them quite rare today.';
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
  carImage.src = 'images/porsche.webp';
  infoText.textContent = 'You selected the Porsche 911. The 911 is known as Porsche\'s flagship model, and is one of the most recognizable sportscars. The 911 has a flat engine, which is atypical, however, it saves a lot of vertical space in the engine bay. Early models of the 911 were known as \"Widowmakers,\" since they were powerful and unstable, making them very difficult to drive, and very easy to crash.';
  carHeading.textContent = 'Porsche 911';
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
  infoText.textContent = 'You selected the Plymouth Roadrunner. The Roadrunner was a budget muscle car manufactured by the Chrysler motor company, under the Plymouth badge. To use the name Roadrunner, Plymouth paid Warner Brothers animation company \$50,000 for the rights to the likeness of their character, who is featured on some model\'s badges.';
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
  carImage.src = 'images/honda.webp'
  infoText.textContent = 'You selected the Honda Civic. The Civic is one on Honda\'s most famous cars. Known for their durability, reliability, and reasonable price, the Civic has become famous in the world of tuner cars. Because of this, their parts have become widely available, either aftermarket, or from the manufacturer.';
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
  infoText.textContent = 'You selected the Ford Mustang. The Mustang is one of the most famous muscle cars in the world. The pictured model is a third-generation Mustang, which are called the Fox body, due to them using Ford\'s Fox platform, which was a one-size-fits-all platform. The Fox platform was used on 15 other cars manufactured by Ford during this time.';
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
  infoText.textContent = 'You selected the BMW E30 M3. The E30 M3 was originally designed as homologation special for racing, much like the Subaru Impreza and the Ford GT. Because of this, the E30 M3 has a lot of modifications from the factory, like lighter glass, and less rubber to save weight. Additioanlly, they also came with splitters and spoilers and performance brakes for aerodynamic and handling purposes.';
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
  infoText.textContent = 'You selected the Nissan Skyline GT-R. The Skyline GT-R was the perfromance model of Nissan\'s pre-established Skyline sedans and coupes. Unlike other sports cars, the Skyline GT-R was all wheel drive, and featured four-wheel steering. The Skyline GT-R was a very advanced car for it\'s time, across all generations. These cars are highly sought after in the US, since they were not manufactured here.';
  carHeading.textContent = 'Nissan Skyline GT-R';
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
    const formClear = document.getElementById('birthday');
    formClear.value = '';
    if (element.id === 'Capricorn') {
      selectCapri();
    } else if (element.id === 'Aquarius'){
      selectAqua();
    } else if (element.id === 'Pisces'){
      selectPisces();
    } else if (element.id === 'Aries'){
      selectAries();
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

date.addEventListener('submit', function(event) {
  handleSubmit(event);
  let seperateDate = birthday.value.split('-');
  let month = Number(seperateDate[1]);
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
    selectAries();
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