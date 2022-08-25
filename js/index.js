import mysticcardsBlue from './mysticcardsBlue.js';
import mysticcardsGreen from './mysticcardsGreen.js';
import mysticcardsBrown from './mysticcardsBrown.js';

//фон
function setBg(){
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/home.png`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByTagName('body')[0].style.backgroundImage = url;}
}
setBg()

//размещение четырех карт
function cards(){
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    img1.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/Ancients/Azathoth.png`
    img2.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/Ancients/Cthulthu.png`
    img3.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/Ancients/IogSothoth.png`
    img4.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/Ancients/ShubNiggurath.png`
    let url1 = `url(${img1.src})`
    let url2 = `url(${img2.src})`
    let url3 = `url(${img3.src})`
    let url4 = `url(${img4.src})`
    img1.onload = () => {document.getElementsByClassName('ancients')[0].style.backgroundImage = url1}
    img2.onload = () => {document.getElementsByClassName('ancients')[1].style.backgroundImage = url2}
    img3.onload = () => {document.getElementsByClassName('ancients')[2].style.backgroundImage = url3}
    img4.onload = () => {document.getElementsByClassName('ancients')[3].style.backgroundImage = url4}
}
cards()

//размещение обложки колоды для игры
function pack(){
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();
    img1.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/mythicCardBackground.png`
    img2.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/mythicCardBackground.png`
    img3.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/mythicCardBackground.png`
    img4.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/mythicCardBackground.png`
    img5.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/mythicCardBackground.png`
    let url1 = `url(${img1.src})`
    let url2 = `url(${img2.src})`
    let url3 = `url(${img3.src})`
    let url4 = `url(${img4.src})`
    let url5 = `url(${img5.src})`
    img1.onload = () => {document.getElementsByClassName('pack')[0].style.backgroundImage = url1}
    img1.onload = () => {document.getElementsByClassName('pack')[1].style.backgroundImage = url1}
    img2.onload = () => {document.getElementsByClassName('pack1')[0].style.backgroundImage = url2}
    img2.onload = () => {document.getElementsByClassName('pack1')[1].style.backgroundImage = url2}
    img3.onload = () => {document.getElementsByClassName('pack-hard')[0].style.backgroundImage = url3}
    img3.onload = () => {document.getElementsByClassName('pack-hard')[1].style.backgroundImage = url3}
    img4.onload = () => {document.getElementsByClassName('pack-easy-hard')[0].style.backgroundImage = url4}
    img4.onload = () => {document.getElementsByClassName('pack-easy-hard')[1].style.backgroundImage = url4}
    img5.onload = () => {document.getElementsByClassName('pack-medium-easy')[0].style.backgroundImage = url5}
    img5.onload = () => {document.getElementsByClassName('pack-medium-easy')[1].style.backgroundImage = url5}
}
pack()
const stage = document.querySelector('.stage')
const packCard = document.querySelectorAll('.pack')
const packCard1 = document.querySelectorAll('.pack1')
const packCardHard = document.querySelectorAll('.pack-hard')
const packCardEasyHard = document.querySelectorAll('.pack-easy-hard')
const packCardMediumEasy = document.querySelectorAll('.pack-medium-easy')
const button = document.querySelectorAll('.button')
const buttonRandom = document.querySelector('.button-random')
const easyButton = document.querySelector('.easy')
const mediumButton = document.querySelector('.medium')
const hardButton = document.querySelector('.hard')
const easyHardButton = document.querySelector('.easy-hard')
const mediumEasyButton = document.querySelector('.medium-easy')
const firstCard = document.getElementsByClassName('ancients')[0]
const secondCard = document.getElementsByClassName('ancients')[1]
const thirdCard = document.getElementsByClassName('ancients')[2]
const fourCard = document.getElementsByClassName('ancients')[3]
secondCard.style.display = 'block'

//тусуем все синие
function randomBlue (){
    var currentIndexBlue = mysticcardsBlue.length, temporaryValue, randomIndex;
           while (0 !== currentIndexBlue) {
                let w=mysticcardsBlue
                randomIndex = Math.floor(Math.random() * currentIndexBlue);
                currentIndexBlue -= 1;
                temporaryValue = w[currentIndexBlue];
                w[currentIndexBlue] = w[randomIndex];
                w[randomIndex] = temporaryValue;}
    return mysticcardsBlue}

//тусуем все зеленые
function randomGreen (){
    var currentIndexGreen = mysticcardsGreen.length, temporaryValue, randomIndex;
    while (0 !== currentIndexGreen) {
         let w=mysticcardsGreen
         randomIndex = Math.floor(Math.random() * currentIndexGreen);
         currentIndexGreen -= 1;
         temporaryValue = w[currentIndexGreen];
         w[currentIndexGreen] = w[randomIndex];
         w[randomIndex] = temporaryValue;}     
    return mysticcardsGreen}  
    
//тусуем все коричневые
function randomBrown (){
    var currentIndexBrown = mysticcardsBrown.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBrown) {
         let w=mysticcardsBrown
         randomIndex = Math.floor(Math.random() * currentIndexBrown);
         currentIndexBrown -= 1;
         temporaryValue = w[currentIndexBrown];
         w[currentIndexBrown] = w[randomIndex];
         w[randomIndex] = temporaryValue;}     
    return mysticcardsBrown}    

//включаем первого старца
firstCard.addEventListener("click", () => {
    document.querySelector('.one-card').style.display = 'block';
    document.querySelector('.two-card').style.display = 'none';
    buttonRandom.classList.add('display-none')
    buttonRandom.classList.remove('check')
    easyButton.classList.remove('check')
    hardButton.classList.remove('check')
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    mediumButton.classList.remove('check')
    buttonRandom.disabled = false;
    easyButton.disabled=false
    hardButton.disabled=false
    easyHardButton.disabled=false
    mediumEasyButton.disabled=false
    mediumButton.disabled=false
    buttonRandom.disabled = false; 
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    firstCard.classList.add('check')
    secondCard.classList.remove('check')
    secondCard.style.display = 'block'
    thirdCard.classList.remove('check')
    fourCard.classList.remove('check')

    document.getElementsByClassName('green1')[0].innerHTML=1
    let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=2
    let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=2
    let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2
    let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=3
    let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4
    let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=1
    let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=1
    let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0
    let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

//тусуем все синие
    randomBlue()          
//тусуем все зеленые
    randomGreen()
//тусуем все коричневые
    randomBrown()

//подсчет необходимого количества карт
    function q(){
        return {
            sumBlue: Number(document.getElementsByClassName('blue1')[0].innerHTML)+Number(document.getElementsByClassName('blue2')[0].innerHTML)+Number(document.getElementsByClassName('blue3')[0].innerHTML),
            sumBrown: Number(document.getElementsByClassName('brown1')[0].innerHTML)+Number(document.getElementsByClassName('brown2')[0].innerHTML)+Number(document.getElementsByClassName('brown3')[0].innerHTML),
            sumGreen: Number(document.getElementsByClassName('green1')[0].innerHTML)+Number(document.getElementsByClassName('green2')[0].innerHTML)+Number(document.getElementsByClassName('green3')[0].innerHTML)}
}    

//показываем кнопки с уровнем игры
    stage.classList.remove('display-none')
        button.forEach(button => {
        button.classList.remove('display-none');})    

//уровни игры        
function levelGame(){        

//включаем очень легкую игру
    easyButton.addEventListener("click", ()=>{ //нажав на кнопку  - легкие
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'easy');//фильтруем легке
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'easy');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'easy');
    document.getElementsByClassName('face')[0].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[0].style.display = 'block';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[0].style.display = 'none';//прячем "кнопку" для переключения карт
    document.getElementsByClassName('pack-hard')[0].style.display = 'none';
    document.getElementsByClassName('pack-easy-hard')[0].style.display = 'none';
    document.getElementsByClassName('pack-medium-easy')[0].style.display = 'none';
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.add('check')//добавляем стиль кнопке легкого уровня игры
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    hardButton.classList.remove('check')
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
    easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
    mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
    hardButton.disabled = false//
    easyHardButton.disabled = false
    mediumEasyButton.disabled = false
            
//проверяем хватает ли карт
    if(easyBlue.length<=sumBlue){//проверяем хватает ли синих карт
    const add = sumBlue-easyBlue.length
    const mediumBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'medium')
//добавляем в массив недостающие карты    
    for(let i=0; i<add;i++){
    easyBlue.push(mediumBlue[i])}
    }else{
    const del= easyBlue.length - sumBlue
    easyBlue.splice(0,Number(del))}            
    if(easyGreen.length<=sumGreen){//проверяем хватает ли зеленых карт
    const add = sumGreen-easyGreen.length
    const mediumGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'medium')
//добавляем в массив недостающие карты    
    for(let i=0; i<add;i++){
    easyGreen.push(mediumGreen[i])}       
    }else{
    const del= easyGreen.length - sumGreen
    easyGreen.splice(0,Number(del))}
    if(easyBrown.length<=sumBrown){//проверяем хватает ли коричневых карт
    const add = sumBrown-easyBrown.length
    const mediumBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'medium')
 //добавляем в массив недостающие карты    
    for(let i=0; i<add;i++){
    easyBrown.push(mediumBrown[i])}        
    }else{
    const del= easyBrown.length - sumBrown
    easyBrown.splice(0,Number(del))}
            
//нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", mix)
                    
function mix () { 
    packCard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    mediumButton.disabled = false  
    hardButton.disabled = false
    easyHardButton.disabled = false
    mediumEasyButton.disabled = false   
    easyButton.disabled = true       
//тусуем отобранные синие
    var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBl) {
    let q=easyBlue
    randomIndex = Math.floor(Math.random() * currentIndexBl);
    currentIndexBl -= 1;
    temporaryValue = q[currentIndexBl];
    q[currentIndexBl] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
//тусуем отобранные зеленые
    var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
    while (0 !== currentIndexGr) {
    let q=easyGreen
    randomIndex = Math.floor(Math.random() * currentIndexGr);
    currentIndexGr -= 1;
    temporaryValue = q[currentIndexGr];
    q[currentIndexGr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
//тусуем отобранные коричневые
    var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBr) {
    let q=easyBrown
    randomIndex = Math.floor(Math.random() * currentIndexBr);
    currentIndexBr -= 1;
    temporaryValue = q[currentIndexBr];
    q[currentIndexBr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}         
                
let arr =[]
                
//да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
    if(blue1===0){arr.push()}else{
    for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
    if(brown1===0){arr.push()}else{
    for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
    if(green1===0){arr.push()}else{
    for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
    if(blue2===0){arr.push()}else{
    for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
    if(brown2===0){arr.push()}else{
    for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
    if(green2===0){arr.push()}else{
    for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
    if(blue3===0){arr.push()}else{
    for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
    if(brown3===0){arr.push()}else{
    for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
    if(green3===0){arr.push()}else{
    for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                    
//выводим карты в колоду
    let random = arr;
    var i=-1
//открываем карты
    document.getElementsByClassName('pack')[0].addEventListener("click", () => {
    document.getElementsByClassName('face')[0].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
    })
    console.log(arr)
}
}) 
            
//включаем просто легкую игру
    mediumEasyButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'hard');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'hard');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'hard');
    document.getElementsByClassName('face')[0].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[0].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[0].style.display = 'none';//прячем "кнопку" для переключения карт
    document.getElementsByClassName('pack-hard')[0].style.display = 'none';
    document.getElementsByClassName('pack-easy-hard')[0].style.display = 'none';
    document.getElementsByClassName('pack-medium-easy')[0].style.display = 'block';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.remove('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.add('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
    easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
    mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
    hardButton.disabled = false
    easyHardButton.disabled = false
    mediumEasyButton.disabled = false
            
//нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", mix)
    function mix () { 
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.remove('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    mediumButton.disabled = false  
    easyButton.disabled = false   
    hardButton.disabled = false 
    mediumEasyButton.disabled = true   
    easyHardButton.disabled = false   
//тусуем отобранные синие
    var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBl) {
    let q=easyBlue
    randomIndex = Math.floor(Math.random() * currentIndexBl);
    currentIndexBl -= 1;
    temporaryValue = q[currentIndexBl];
    q[currentIndexBl] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
//тусуем отобранные зеленые
    var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
    while (0 !== currentIndexGr) {
    let q=easyGreen
    randomIndex = Math.floor(Math.random() * currentIndexGr);
    currentIndexGr -= 1;
    temporaryValue = q[currentIndexGr];
    q[currentIndexGr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
//тусуем отобранные коричневые
    var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBr) {
    let q=easyBrown
    randomIndex = Math.floor(Math.random() * currentIndexBr);
    currentIndexBr -= 1;
    temporaryValue = q[currentIndexBr];
    q[currentIndexBr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}         
                
    let arr =[]
                
//да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
     if(blue1===0){arr.push()}else{
    for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
    if(brown1===0){arr.push()}else{
    for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
    if(green1===0){arr.push()}else{
    for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
    if(blue2===0){arr.push()}else{
    for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
    if(brown2===0){arr.push()}else{
    for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
    if(green2===0){arr.push()}else{
     for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
    if(blue3===0){arr.push()}else{
    for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
    if(brown3===0){arr.push()}else{
    for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
    if(green3===0){arr.push()}else{
    for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                    
//выводим карты в колоду
    let random = arr;
    var i=-1
//открываем карты
     packCardMediumEasy.addEventListener("click", () => {
    document.getElementsByClassName('face')[0].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
    })
    console.log(arr)
    }
}) 
            
//включаем среднюю игру
mediumButton.addEventListener("click", ()=>{ //нажав на кнопку  - средние
document.getElementsByClassName('face')[0].classList.add('display-none')
document.getElementsByClassName('pack')[0].style.display = 'none'
document.getElementsByClassName('pack1')[0].style.display = 'block'
document.getElementsByClassName('pack-hard')[0].style.display = 'none'
document.getElementsByClassName('pack-easy-hard')[0].style.display = 'none'
document.getElementsByClassName('pack-medium-easy')[0].style.display = 'none'
let easyBlue = mysticcardsBlue
let easyGreen = mysticcardsGreen
let easyBrown = mysticcardsBrown
buttonRandom.classList.remove('display-none')
easyButton.classList.remove('check')
buttonRandom.classList.remove('check')
mediumButton.classList.add('check')
hardButton.classList.remove('check')
easyHardButton.classList.remove('check')
mediumEasyButton.classList.remove('check')
buttonRandom.disabled = false;
easyButton.disabled = false
mediumButton.disabled = false
hardButton.disabled = false
easyHardButton.disabled = false
mediumEasyButton.disabled = false
                
//нажимаем на кнопку замешать
buttonRandom.addEventListener("click", mix)
function mix (){ 
buttonRandom.classList.add('check')    
packCard.forEach(packCard => {packCard.classList.add('display-none');})
packCard1.forEach(packCard => {packCard.classList.remove('display-none');})
packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
mediumButton.disabled = true; 
buttonRandom.disabled = true;  
easyButton.disabled = false 
hardButton.disabled = false 
easyHardButton.disabled = false  
mediumEasyButton.disabled = false 
            
//тусуем отобранные синие
var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
while (0 !== currentIndexBl) {
let q=easyBlue
randomIndex = Math.floor(Math.random() * currentIndexBl);
currentIndexBl -= 1;
temporaryValue = q[currentIndexBl];
q[currentIndexBl] = q[randomIndex];
q[randomIndex] = temporaryValue;}
//тусуем отобранные зеленые
var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
while (0 !== currentIndexGr) {
let q=easyGreen
randomIndex = Math.floor(Math.random() * currentIndexGr);
currentIndexGr -= 1;
temporaryValue = q[currentIndexGr];
q[currentIndexGr] = q[randomIndex];
q[randomIndex] = temporaryValue;}
//тусуем отобранные коричневые
var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
while (0 !== currentIndexBr) {
let q=easyBrown
randomIndex = Math.floor(Math.random() * currentIndexBr);
currentIndexBr -= 1;
temporaryValue = q[currentIndexBr];
q[currentIndexBr] = q[randomIndex];
q[randomIndex] = temporaryValue;}         
                
let arr =[]
                
//да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
if(blue1===0){arr.push()}else{
for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
if(brown1===0){arr.push()}else{
for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
if(green1===0){arr.push()}else{
for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
if(blue2===0){arr.push()}else{
for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
if(brown2===0){arr.push()}else{
for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
if(green2===0){arr.push()}else{
for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
if(blue3===0){arr.push()}else{
for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
if(brown3===0){arr.push()}else{
for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
if(green3===0){arr.push()}else{
for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 

//выводим карты в колоду
let random = arr;
var i=-1
//открываем карты
packCard1.addEventListener("click", () => {
document.getElementsByClassName('face')[0].classList.remove('display-none')  
const img = new Image();
if(i == random.length-1){i=random.length-1
}else{i++}
img.src = `${random[i].src}`
let url = `url(${img.src})`
img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
})
console.log(arr)      
}
})  
            
//включаем просто сложную игру
easyHardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'easy');//фильтруем сложные
const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'easy');
const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'easy');
document.getElementsByClassName('face')[0].classList.add('display-none')//пряячем открытую карту
document.getElementsByClassName('pack')[0].style.display = 'none';//открываем "кнопку" для переключения карт
document.getElementsByClassName('pack1')[0].style.display = 'none';//прячем "кнопку" для переключения карт
document.getElementsByClassName('pack-hard')[0].style.display = 'none';
document.getElementsByClassName('pack-easy-hard')[0].style.display = 'block';
document.getElementsByClassName('pack-medium-easy')[0].style.display = 'none';//прячем "кнопку" для переключения карт
buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
hardButton.classList.remove('check')
mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
easyHardButton.classList.add('check')
mediumEasyButton.classList.remove('check')
buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
hardButton.disabled = false
easyHardButton.disabled = false
mediumEasyButton.disabled = false
            
 //нажимаем на кнопку замешать
buttonRandom.addEventListener("click", mix)
function mix (){ 
packCard.forEach(packCard => {packCard.classList.add('display-none');})
packCard1.forEach(packCard => {packCard.classList.add('display-none');})
packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
packCardEasyHard.forEach(packCard => {packCard.classList.remove('display-none');})
packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
buttonRandom.classList.add('check'); 
buttonRandom.disabled = true;
mediumButton.disabled = false  
easyButton.disabled = false   
hardButton.disabled = false 
mediumEasyButton.disabled = false   
easyHardButton.disabled = true   
//тусуем отобранные синие
var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
while (0 !== currentIndexBl) {
let q=easyBlue
randomIndex = Math.floor(Math.random() * currentIndexBl);
currentIndexBl -= 1;
temporaryValue = q[currentIndexBl];
q[currentIndexBl] = q[randomIndex];
q[randomIndex] = temporaryValue;}
//тусуем отобранные зеленые
var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
while (0 !== currentIndexGr) {
let q=easyGreen
randomIndex = Math.floor(Math.random() * currentIndexGr);
currentIndexGr -= 1;
temporaryValue = q[currentIndexGr];
q[currentIndexGr] = q[randomIndex];
q[randomIndex] = temporaryValue;}
//тусуем отобранные коричневые
var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
while (0 !== currentIndexBr) {
let q=easyBrown
randomIndex = Math.floor(Math.random() * currentIndexBr);
currentIndexBr -= 1;
temporaryValue = q[currentIndexBr];
q[currentIndexBr] = q[randomIndex];
q[randomIndex] = temporaryValue;}         
                
let arr =[]
                
//да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
if(blue1===0){arr.push()}else{
for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
if(brown1===0){arr.push()}else{
for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
if(green1===0){arr.push()}else{
for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
if(blue2===0){arr.push()}else{
for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
if(brown2===0){arr.push()}else{
for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
if(green2===0){arr.push()}else{
for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
if(blue3===0){arr.push()}else{
for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
if(brown3===0){arr.push()}else{
for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
if(green3===0){arr.push()}else{
for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                    
//выводим карты в колоду
let random = arr;
var i=-1
//открываем карты
packCardEasyHard.addEventListener("click", () => {
document.getElementsByClassName('face')[0].classList.remove('display-none')
const img = new Image();
if(i == random.length-1){i=random.length-1
}else{i++}
img.src = `${random[i].src}`
let url = `url(${img.src})`
img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
})
console.log(arr)
}
}) 
            
//включаем очень сложную игру
hardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'hard');//фильтруем сложные
const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'hard');
const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'hard');
document.getElementsByClassName('face')[0].classList.add('display-none')//пряячем открытую карту
document.getElementsByClassName('pack')[0].style.display = 'none';//открываем "кнопку" для переключения карт
document.getElementsByClassName('pack1')[0].style.display = 'none';//прячем "кнопку" для переключения картdocument.querySelector('.pack-hard').style.display = 'block';
document.getElementsByClassName('pack-easy-hard')[0].style.display = 'none';
document.getElementsByClassName('pack-medium-easy')[0].style.display = 'none';//прячем "кнопку" для переключения карт
document.getElementsByClassName('hard')[0].style.display = 'block';
buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
hardButton.classList.add('check')
mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
easyHardButton.classList.remove('check')
mediumEasyButton.classList.remove('check')
buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
hardButton.disabled = false
easyHardButton.disabled = false
mediumEasyButton.disabled = false
            
//проверяем хватает ли карт
if(easyBlue.length<=sumBlue){//проверяем хватает ли синих карт
const add = sumBlue-easyBlue.length
const mediumBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'medium')
//добавляем в массив недостающие карты    
    for(let i=0; i<add;i++){
    easyBlue.push(mediumBlue[i])}
    }else{
    const del= easyBlue.length - sumBlue
    easyBlue.splice(0,Number(del))}            
    if(easyGreen.length<=sumGreen){//проверяем хватает ли зеленых карт
    const add = sumGreen-easyGreen.length
    const mediumGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'medium')
//добавляем в массив недостающие карты    
    for(let i=0; i<add;i++){
    easyGreen.push(mediumGreen[i])}       
    }else{
    const del= easyGreen.length - sumGreen
    easyGreen.splice(0,Number(del))}
    if(easyBrown.length<=sumBrown){//проверяем хватает ли коричневых карт
    const add = sumBrown-easyBrown.length
    const mediumBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'medium')
//добавляем в массив недостающие карты    
    for(let i=0; i<add;i++){
    easyBrown.push(mediumBrown[i])}        
    }else{
    const del= easyBrown.length - sumBrown
    easyBrown.splice(0,Number(del))}
            
//нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", mix)
function mix () { 
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    mediumButton.disabled = false  
    easyButton.disabled = false   
    hardButton.disabled = true 
    mediumEasyButton.disabled = false   
    easyHardButton.disabled = false    
 //тусуем отобранные синие
    var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBl) {
    let q=easyBlue
    randomIndex = Math.floor(Math.random() * currentIndexBl);
    currentIndexBl -= 1;
     temporaryValue = q[currentIndexBl];
    q[currentIndexBl] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
//тусуем отобранные зеленые
    var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
    while (0 !== currentIndexGr) {
    let q=easyGreen
    randomIndex = Math.floor(Math.random() * currentIndexGr);
    currentIndexGr -= 1;
    temporaryValue = q[currentIndexGr];
    q[currentIndexGr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
//тусуем отобранные коричневые
    var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBr) {
    let q=easyBrown
    randomIndex = Math.floor(Math.random() * currentIndexBr);
    currentIndexBr -= 1;
    temporaryValue = q[currentIndexBr];
    q[currentIndexBr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}         

    let arr =[]
                
//да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
    if(blue1===0){arr.push()}else{
    for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
    if(brown1===0){arr.push()}else{
    for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
    if(green1===0){arr.push()}else{
    for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
    if(blue2===0){arr.push()}else{
    for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
    if(brown2===0){arr.push()}else{
    for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
    if(green2===0){arr.push()}else{
    for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
    if(blue3===0){arr.push()}else{
    for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
    if(brown3===0){arr.push()}else{
    for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
    if(green3===0){arr.push()}else{
    for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                    
//выводим карты в колоду
    let random = arr;
    var i=-1
//открываем карты
    packCardHard.addEventListener("click", () => {
    document.getElementsByClassName('face')[0].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
    })
    console.log(arr)
}
}) 
}
levelGame()            

//подсчет необходимого количества карт
    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen
})


//вкючаем второго старца
secondCard.addEventListener("click", ()=> {
    document.querySelector('.one-card').style.display = 'none';
    document.querySelector('.two-card').style.display = 'block';
    buttonRandom.classList.add('display-none')
    buttonRandom.classList.remove('check')
    easyButton.classList.remove('check')
    hardButton.classList.remove('check')
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    mediumButton.classList.remove('check')
    buttonRandom.disabled = false;
    easyButton.disabled=false
    hardButton.disabled=false
    easyHardButton.disabled=false
    mediumEasyButton.disabled=false
    mediumButton.disabled=false    
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    firstCard.classList.remove('check')
    secondCard.classList.add('check')
    thirdCard.classList.remove('check')
    fourCard.classList.remove('check')
    
    document.getElementsByClassName('green1')[0].innerHTML=0
    let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=1
    let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=3
    let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2
    let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=3
    let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4
    let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=2
    let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=0
    let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0
    let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

//тусуем все синие
    randomBlue()          
//тусуем все зеленые
    randomGreen()
//тусуем все коричневые
    randomBrown()

//подсчет необходимого количества карт
function q(){
    return {
        sumBlue: Number(document.getElementsByClassName('blue1')[0].innerHTML)+Number(document.getElementsByClassName('blue2')[0].innerHTML)+Number(document.getElementsByClassName('blue3')[0].innerHTML),
        sumBrown: Number(document.getElementsByClassName('brown1')[0].innerHTML)+Number(document.getElementsByClassName('brown2')[0].innerHTML)+Number(document.getElementsByClassName('brown3')[0].innerHTML),
        sumGreen: Number(document.getElementsByClassName('green1')[0].innerHTML)+Number(document.getElementsByClassName('green2')[0].innerHTML)+Number(document.getElementsByClassName('green3')[0].innerHTML)}
}    

//показываем кнопки с уровнем игры
    stage.classList.remove('display-none')
    button.forEach(button => {
    button.classList.remove('display-none');})

//уровни игры        
function levelGame(){        

    //включаем очень легкую игру
        easyButton.addEventListener("click", ()=>{ //нажав на кнопку  - легкие
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'easy');//фильтруем легке
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'easy');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'easy');
        document.getElementsByClassName('face')[1].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[1].style.display = 'block';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[1].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[1].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[1].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[1].style.display = 'none';
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.add('check')//добавляем стиль кнопке легкого уровня игры
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        hardButton.classList.remove('check')
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.remove('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
        easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
        mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
        hardButton.disabled = false//
        easyHardButton.disabled = false
        mediumEasyButton.disabled = false
                
    //проверяем хватает ли карт
        if(easyBlue.length<=sumBlue){//проверяем хватает ли синих карт
        const add = sumBlue-easyBlue.length
        const mediumBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'medium')
    //добавляем в массив недостающие карты    
        for(let i=0; i<add;i++){
        easyBlue.push(mediumBlue[i])}
        }else{
        const del= easyBlue.length - sumBlue
        easyBlue.splice(0,Number(del))}            
        if(easyGreen.length<=sumGreen){//проверяем хватает ли зеленых карт
        const add = sumGreen-easyGreen.length
        const mediumGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'medium')
    //добавляем в массив недостающие карты    
        for(let i=0; i<add;i++){
        easyGreen.push(mediumGreen[i])}       
        }else{
        const del= easyGreen.length - sumGreen
        easyGreen.splice(0,Number(del))}
        if(easyBrown.length<=sumBrown){//проверяем хватает ли коричневых карт
        const add = sumBrown-easyBrown.length
        const mediumBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'medium')
     //добавляем в массив недостающие карты    
        for(let i=0; i<add;i++){
        easyBrown.push(mediumBrown[i])}        
        }else{
        const del= easyBrown.length - sumBrown
        easyBrown.splice(0,Number(del))}
                
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", mix)
                        
    function mix () { 
        packCard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumButton.disabled = false  
        hardButton.disabled = false
        easyHardButton.disabled = false
        mediumEasyButton.disabled = false   
        easyButton.disabled = true       
    //тусуем отобранные синие
        var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
        while (0 !== currentIndexBl) {
        let q=easyBlue
        randomIndex = Math.floor(Math.random() * currentIndexBl);
        currentIndexBl -= 1;
        temporaryValue = q[currentIndexBl];
        q[currentIndexBl] = q[randomIndex];
        q[randomIndex] = temporaryValue;}
    //тусуем отобранные зеленые
        var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
        while (0 !== currentIndexGr) {
        let q=easyGreen
        randomIndex = Math.floor(Math.random() * currentIndexGr);
        currentIndexGr -= 1;
        temporaryValue = q[currentIndexGr];
        q[currentIndexGr] = q[randomIndex];
        q[randomIndex] = temporaryValue;}
    //тусуем отобранные коричневые
        var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
        while (0 !== currentIndexBr) {
        let q=easyBrown
        randomIndex = Math.floor(Math.random() * currentIndexBr);
        currentIndexBr -= 1;
        temporaryValue = q[currentIndexBr];
        q[currentIndexBr] = q[randomIndex];
        q[randomIndex] = temporaryValue;}         
                    
    let arr =[]
                    
    //да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
        if(blue1===0){arr.push()}else{
        for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
        if(brown1===0){arr.push()}else{
        for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
        if(green1===0){arr.push()}else{
        for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
        if(blue2===0){arr.push()}else{
        for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
        if(brown2===0){arr.push()}else{
        for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
        if(green2===0){arr.push()}else{
        for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
        if(blue3===0){arr.push()}else{
        for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
        if(brown3===0){arr.push()}else{
        for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
        if(green3===0){arr.push()}else{
        for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                        
    //выводим карты в колоду
        let random = arr;
        var i=-1
    //открываем карты
        document.getElementsByClassName('pack')[1].addEventListener("click", () => {
        document.getElementsByClassName('face')[1].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
        })
        console.log(arr)
    }
    }) 
                
    //включаем просто легкую игру
        mediumEasyButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'hard');//фильтруем сложные
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'hard');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'hard');
        document.getElementsByClassName('face')[1].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[1].style.display = 'none';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[1].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[1].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[1].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[1].style.display = 'block';//прячем "кнопку" для переключения карт
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
        hardButton.classList.remove('check')
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.add('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
        easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
        mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
        hardButton.disabled = false
        easyHardButton.disabled = false
        mediumEasyButton.disabled = false
                
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", mix)
        function mix () { 
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.remove('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumButton.disabled = false  
        easyButton.disabled = false   
        hardButton.disabled = false 
        mediumEasyButton.disabled = true   
        easyHardButton.disabled = false   
    //тусуем отобранные синие
        var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
        while (0 !== currentIndexBl) {
        let q=easyBlue
        randomIndex = Math.floor(Math.random() * currentIndexBl);
        currentIndexBl -= 1;
        temporaryValue = q[currentIndexBl];
        q[currentIndexBl] = q[randomIndex];
        q[randomIndex] = temporaryValue;}
    //тусуем отобранные зеленые
        var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
        while (0 !== currentIndexGr) {
        let q=easyGreen
        randomIndex = Math.floor(Math.random() * currentIndexGr);
        currentIndexGr -= 1;
        temporaryValue = q[currentIndexGr];
        q[currentIndexGr] = q[randomIndex];
        q[randomIndex] = temporaryValue;}
    //тусуем отобранные коричневые
        var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
        while (0 !== currentIndexBr) {
        let q=easyBrown
        randomIndex = Math.floor(Math.random() * currentIndexBr);
        currentIndexBr -= 1;
        temporaryValue = q[currentIndexBr];
        q[currentIndexBr] = q[randomIndex];
        q[randomIndex] = temporaryValue;}         
                    
        let arr =[]
                    
    //да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
         if(blue1===0){arr.push()}else{
        for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
        if(brown1===0){arr.push()}else{
        for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
        if(green1===0){arr.push()}else{
        for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
        if(blue2===0){arr.push()}else{
        for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
        if(brown2===0){arr.push()}else{
        for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
        if(green2===0){arr.push()}else{
         for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
        if(blue3===0){arr.push()}else{
        for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
        if(brown3===0){arr.push()}else{
        for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
        if(green3===0){arr.push()}else{
        for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                        
    //выводим карты в колоду
        let random = arr;
        var i=-1
    //открываем карты
         packCardMediumEasy.addEventListener("click", () => {
        document.getElementsByClassName('face')[1].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
        })
        console.log(arr)
        }
    }) 
                
    //включаем среднюю игру
    mediumButton.addEventListener("click", ()=>{ //нажав на кнопку  - средние
    document.getElementsByClassName('face')[1].classList.add('display-none')
    document.getElementsByClassName('pack')[1].style.display = 'none'
    document.getElementsByClassName('pack1')[1].style.display = 'block'
    document.getElementsByClassName('pack-hard')[1].style.display = 'none'
    document.getElementsByClassName('pack-easy-hard')[1].style.display = 'none'
    document.getElementsByClassName('pack-medium-easy')[1].style.display = 'none'
    let easyBlue = mysticcardsBlue
    let easyGreen = mysticcardsGreen
    let easyBrown = mysticcardsBrown
    buttonRandom.classList.remove('display-none')
    easyButton.classList.remove('check')
    buttonRandom.classList.remove('check')
    mediumButton.classList.add('check')
    hardButton.classList.remove('check')
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;
    easyButton.disabled = false
    mediumButton.disabled = false
    hardButton.disabled = false
    easyHardButton.disabled = false
    mediumEasyButton.disabled = false
                    
    //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", mix)
    function mix (){ 
    buttonRandom.classList.add('check')    
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    mediumButton.disabled = true; 
    buttonRandom.disabled = true;  
    easyButton.disabled = false 
    hardButton.disabled = false 
    easyHardButton.disabled = false  
    mediumEasyButton.disabled = false 
                
    //тусуем отобранные синие
    var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBl) {
    let q=easyBlue
    randomIndex = Math.floor(Math.random() * currentIndexBl);
    currentIndexBl -= 1;
    temporaryValue = q[currentIndexBl];
    q[currentIndexBl] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
    //тусуем отобранные зеленые
    var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
    while (0 !== currentIndexGr) {
    let q=easyGreen
    randomIndex = Math.floor(Math.random() * currentIndexGr);
    currentIndexGr -= 1;
    temporaryValue = q[currentIndexGr];
    q[currentIndexGr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
    //тусуем отобранные коричневые
    var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBr) {
    let q=easyBrown
    randomIndex = Math.floor(Math.random() * currentIndexBr);
    currentIndexBr -= 1;
    temporaryValue = q[currentIndexBr];
    q[currentIndexBr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}         
                    
    let arr =[]
                    
    //да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
    if(blue1===0){arr.push()}else{
    for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
    if(brown1===0){arr.push()}else{
    for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
    if(green1===0){arr.push()}else{
    for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
    if(blue2===0){arr.push()}else{
    for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
    if(brown2===0){arr.push()}else{
    for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
    if(green2===0){arr.push()}else{
    for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
    if(blue3===0){arr.push()}else{
    for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
    if(brown3===0){arr.push()}else{
    for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
    if(green3===0){arr.push()}else{
    for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
    
    //выводим карты в колоду
    let random = arr;
    var i=-1
    //открываем карты
    packCard1.addEventListener("click", () => {
    document.getElementsByClassName('face')[1].classList.remove('display-none')  
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
    })
    console.log(arr)      
    }
    })  
                
    //включаем просто сложную игру
    easyHardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'easy');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'easy');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'easy');
    document.getElementsByClassName('face')[1].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[1].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[1].style.display = 'none';//прячем "кнопку" для переключения карт
    document.getElementsByClassName('pack-hard')[1].style.display = 'none';
    document.getElementsByClassName('pack-easy-hard')[1].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[1].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.remove('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.add('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
    easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
    mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
    hardButton.disabled = false
    easyHardButton.disabled = false
    mediumEasyButton.disabled = false
                
     //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", mix)
    function mix (){ 
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    mediumButton.disabled = false  
    easyButton.disabled = false   
    hardButton.disabled = false 
    mediumEasyButton.disabled = false   
    easyHardButton.disabled = true   
    //тусуем отобранные синие
    var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBl) {
    let q=easyBlue
    randomIndex = Math.floor(Math.random() * currentIndexBl);
    currentIndexBl -= 1;
    temporaryValue = q[currentIndexBl];
    q[currentIndexBl] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
    //тусуем отобранные зеленые
    var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
    while (0 !== currentIndexGr) {
    let q=easyGreen
    randomIndex = Math.floor(Math.random() * currentIndexGr);
    currentIndexGr -= 1;
    temporaryValue = q[currentIndexGr];
    q[currentIndexGr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}
    //тусуем отобранные коричневые
    var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
    while (0 !== currentIndexBr) {
    let q=easyBrown
    randomIndex = Math.floor(Math.random() * currentIndexBr);
    currentIndexBr -= 1;
    temporaryValue = q[currentIndexBr];
    q[currentIndexBr] = q[randomIndex];
    q[randomIndex] = temporaryValue;}         
                    
    let arr =[]
                    
    //да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
    if(blue1===0){arr.push()}else{
    for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
    if(brown1===0){arr.push()}else{
    for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
    if(green1===0){arr.push()}else{
    for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
    if(blue2===0){arr.push()}else{
    for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
    if(brown2===0){arr.push()}else{
    for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
    if(green2===0){arr.push()}else{
    for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
    if(blue3===0){arr.push()}else{
    for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
    if(brown3===0){arr.push()}else{
    for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
    if(green3===0){arr.push()}else{
    for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                        
    //выводим карты в колоду
    let random = arr;
    var i=-1
    //открываем карты
    packCardEasyHard.addEventListener("click", () => {
    document.getElementsByClassName('face')[1].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
    })
    console.log(arr)
    }
    }) 
                
    //включаем очень сложную игру
    hardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'hard');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'hard');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'hard');
    document.getElementsByClassName('face')[1].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[1].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[1].style.display = 'none';//прячем "кнопку" для переключения картdocument.querySelector('.pack-hard').style.display = 'block';
    document.getElementsByClassName('pack-easy-hard')[1].style.display = 'none';
    document.getElementsByClassName('pack-medium-easy')[1].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.add('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
    easyButton.disabled = false//делаем кликабельной кнопку легкого уровня игры
    mediumButton.disabled = false// делаем кликабельной кнопку среднего уровня игры
    hardButton.disabled = false
    easyHardButton.disabled = false
    mediumEasyButton.disabled = false
                
    //проверяем хватает ли карт
    if(easyBlue.length<=sumBlue){//проверяем хватает ли синих карт
    const add = sumBlue-easyBlue.length
    const mediumBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'medium')
    //добавляем в массив недостающие карты    
        for(let i=0; i<add;i++){
        easyBlue.push(mediumBlue[i])}
        }else{
        const del= easyBlue.length - sumBlue
        easyBlue.splice(0,Number(del))}            
        if(easyGreen.length<=sumGreen){//проверяем хватает ли зеленых карт
        const add = sumGreen-easyGreen.length
        const mediumGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'medium')
    //добавляем в массив недостающие карты    
        for(let i=0; i<add;i++){
        easyGreen.push(mediumGreen[i])}       
        }else{
        const del= easyGreen.length - sumGreen
        easyGreen.splice(0,Number(del))}
        if(easyBrown.length<=sumBrown){//проверяем хватает ли коричневых карт
        const add = sumBrown-easyBrown.length
        const mediumBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'medium')
    //добавляем в массив недостающие карты    
        for(let i=0; i<add;i++){
        easyBrown.push(mediumBrown[i])}        
        }else{
        const del= easyBrown.length - sumBrown
        easyBrown.splice(0,Number(del))}
                
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", mix)
    function mix () { 
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumButton.disabled = false  
        easyButton.disabled = false   
        hardButton.disabled = true 
        mediumEasyButton.disabled = false   
        easyHardButton.disabled = false    
     //тусуем отобранные синие
        var currentIndexBl = easyBlue.length, temporaryValue, randomIndex;
        while (0 !== currentIndexBl) {
        let q=easyBlue
        randomIndex = Math.floor(Math.random() * currentIndexBl);
        currentIndexBl -= 1;
         temporaryValue = q[currentIndexBl];
        q[currentIndexBl] = q[randomIndex];
        q[randomIndex] = temporaryValue;}
    //тусуем отобранные зеленые
        var currentIndexGr = easyGreen.length, temporaryValue, randomIndex;
        while (0 !== currentIndexGr) {
        let q=easyGreen
        randomIndex = Math.floor(Math.random() * currentIndexGr);
        currentIndexGr -= 1;
        temporaryValue = q[currentIndexGr];
        q[currentIndexGr] = q[randomIndex];
        q[randomIndex] = temporaryValue;}
    //тусуем отобранные коричневые
        var currentIndexBr = easyBrown.length, temporaryValue, randomIndex;
        while (0 !== currentIndexBr) {
        let q=easyBrown
        randomIndex = Math.floor(Math.random() * currentIndexBr);
        currentIndexBr -= 1;
        temporaryValue = q[currentIndexBr];
        q[currentIndexBr] = q[randomIndex];
        q[randomIndex] = temporaryValue;}         
    
        let arr =[]
                    
    //да, калечно(как умею уж), но складываем в нужном порядке карты в один массив
        if(blue1===0){arr.push()}else{
        for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}}
        if(brown1===0){arr.push()}else{
        for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}}
        if(green1===0){arr.push()}else{
        for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}}
        if(blue2===0){arr.push()}else{
        for(let e=Number(blue1);e<(Number(blue1)+Number(blue2));e++){arr.push(easyBlue[e])}}
        if(brown2===0){arr.push()}else{
        for(let p=Number(brown1);p<(Number(brown2)+Number(brown1));p++){arr.push(easyBrown[p])}}
        if(green2===0){arr.push()}else{
        for(let r=Number(green1);r<(Number(green2)+Number(green1));r++){arr.push(easyGreen[r])}}
        if(blue3===0){arr.push()}else{
        for(let t=(Number(blue2)+Number(blue1));t<(Number(blue3)+Number(blue2)+Number(blue1));t++){arr.push(easyBlue[t])}}
        if(brown3===0){arr.push()}else{
        for(let y=(Number(brown2)+Number(brown1));y<(Number(brown3)+Number(brown2)+Number(brown1));y++){arr.push(easyBrown[y])}}
        if(green3===0){arr.push()}else{
        for(let a=(Number(green2)+Number(green1));a<(Number(green3)+Number(green2)+Number(green1));a++){arr.push(easyGreen[a])}} 
                        
    //выводим карты в колоду
        let random = arr;
        var i=-1
    //открываем карты
        packCardHard.addEventListener("click", () => {
        document.getElementsByClassName('face')[1].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
        })
        console.log(arr)
    }
    }) 
}
levelGame()

//подсчет необходимого количества карт
    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen
})

thirdCard.addEventListener("click", () => {
    buttonRandom.classList.add('display-none')
    buttonRandom.classList.remove('check')
    easyButton.classList.remove('check')
    buttonRandom.disabled = false; 
    packCard.classList.add('display-none')


    firstCard.classList.remove('check')
    secondCard.classList.remove('check')
    thirdCard.classList.add('check')
    fourCard.classList.remove('check')
    stage.classList.remove('display-none')
    document.getElementsByClassName('green1')[0].innerHTML=0
    let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=2
    let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=3
    let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2
    let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=3
    let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4
    let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=1
    let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=1
    let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0
    let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

//тусуем все синие
    randomBlue()          
//тусуем все зеленые
    randomGreen()
//тусуем все коричневые
    randomBrown()
})

fourCard.addEventListener("click", () => {
    firstCard.classList.remove('check')
    secondCard.classList.remove('check')
    thirdCard.classList.remove('check')
    fourCard.classList.add('check')
    document.getElementsByClassName('green1')[0].innerHTML=1
    document.getElementsByClassName('green2')[0].innerHTML=3
    document.getElementsByClassName('green3')[0].innerHTML=2
    document.getElementsByClassName('brown1')[0].innerHTML=2
    document.getElementsByClassName('brown2')[0].innerHTML=2
    document.getElementsByClassName('brown3')[0].innerHTML=4
    document.getElementsByClassName('blue1')[0].innerHTML=1
    document.getElementsByClassName('blue2')[0].innerHTML=1
    document.getElementsByClassName('blue3')[0].innerHTML=0
    stage.classList.remove('display-none')
})








