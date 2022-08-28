import mysticcardsBlue from './mysticcardsBlue.js';
import mysticcardsGreen from './mysticcardsGreen.js';
import mysticcardsBrown from './mysticcardsBrown.js';

console.log('Выполнено: километр кода, четыре старца, у каждого старца по 5 разных игр, трекер; Выполнено частично: перемешивание пока есть только на начальном этапе, при выкладывании карт пока рандом не сделан(((((')


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
let text = document.querySelector('.text') //для удобства проверки
document.querySelector('.one-card').style.display = 'none';
document.querySelector('.two-card').style.display = 'none';
document.querySelector('.three-card').style.display = 'none';
document.querySelector('.four-card').style.display = 'none';

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
secondCard.style.display='block'


const again=document.querySelector('.play-again')
again.addEventListener("click", () => {
    location.reload ();})

packCard.forEach(packCard => {
    packCard.style.display='none';}) 
packCard1.forEach(packCard => {
    packCard.style.display='none';})   
packCardHard.forEach(packCard => {
    packCard.style.display='none';}) 
packCardEasyHard.forEach(packCard => {
    packCard.style.display='none';})  
packCardMediumEasy.forEach(packCard => {
    packCard.style.display='none';})  

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
function tracker(){
    if(document.querySelector('.blue1').textContent!=='0'){document.querySelector('.blue1').textContent=document.querySelector('.blue1').textContent-1;}
    else if(document.querySelector('.blue1').textContent==='0' && document.querySelector('.brown1').textContent!=='0'){document.querySelector('.brown1').textContent=document.querySelector('.brown1').textContent-1;}
    else if(document.querySelector('.blue1').textContent==='0' && document.querySelector('.brown1').textContent==='0' && document.querySelector('.green1').textContent!=='0'){document.querySelector('.green1').textContent=document.querySelector('.green1').textContent-1;}
    else if(document.querySelector('.green1').textContent==='0' && document.querySelector('.brown1').textContent==='0' && document.querySelector('.blue2').textContent!=='0'){document.querySelector('.blue2').textContent=document.querySelector('.blue2').textContent-1;}
    else if(document.querySelector('.green1').textContent==='0' && document.querySelector('.blue2').textContent==='0' && document.querySelector('.brown2').textContent!=='0'){document.querySelector('.brown2').textContent=document.querySelector('.brown2').textContent-1;}
    else if(document.querySelector('.brown2').textContent==='0' && document.querySelector('.blue2').textContent==='0' && document.querySelector('.green2').textContent!=='0'){document.querySelector('.green2').textContent=document.querySelector('.green2').textContent-1;}
    else if(document.querySelector('.brown2').textContent==='0' && document.querySelector('.green2').textContent==='0' && document.querySelector('.blue3').textContent!=='0'){document.querySelector('.blue3').textContent=document.querySelector('.blue3').textContent-1;}
    else if(document.querySelector('.blue3').textContent==='0' && document.querySelector('.green2').textContent==='0' && document.querySelector('.brown3').textContent!=='0'){document.querySelector('.brown3').textContent=document.querySelector('.brown3').textContent-1;}
    else if(document.querySelector('.blue3').textContent==='0' && document.querySelector('.brown3').textContent==='0' && document.querySelector('.green3').textContent!=='0'){document.querySelector('.green3').textContent=document.querySelector('.green3').textContent-1;}
}

//включаем первого старца(!!!!готово)
firstCard.addEventListener("click", () => {
    if(firstCard .classList.contains('clicked')){firstElder()}
    document.querySelector('.one-card').style.display = 'block';
    document.querySelector('.two-card').style.display = 'none';
    document.querySelector('.three-card').style.display = 'none';
    document.querySelector('.four-card').style.display = 'none';
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

    document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

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
            firstCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'easy');//фильтруем легке
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'easy');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'easy');
        document.getElementsByClassName('face')[0].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[0].style.display = 'block';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[0].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[0].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[0].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[0].style.display = 'none';
        text.classList.add('display-none')
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.add('check')//добавляем стиль кнопке легкого уровня игры
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        hardButton.classList.remove('check')
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.remove('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания

                
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
        buttonRandom.addEventListener("click", ()=>{
        text.classList.remove('display-none')     
        packCard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        easyButton.disabled = true       
                        
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
        tracker()
             
        document.getElementsByClassName('face')[0].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(',')
    })
    }) 
    
                
    //включаем просто легкую игру
        mediumEasyButton.addEventListener("click", ()=>{ //нажав на кнопку 
            firstCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML
        text.classList.add('display-none')
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
                  
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", ()=>{
        text.classList.remove('display-none')    
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.remove('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumEasyButton.disabled = true   
                        
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
        document.getElementsByClassName('pack-medium-easy')[0].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[0].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
        })
    }) 
                
    //включаем среднюю игру
    mediumButton.addEventListener("click", ()=>{ //нажав на кнопку  - средние
        firstCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    text.classList.add('display-none')
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
                    
    //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click",()=>{
    text.classList.remove('display-none')     
    buttonRandom.classList.add('check')    
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    mediumButton.disabled = true; 
    buttonRandom.disabled = true;  
                
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
    document.getElementsByClassName('pack1')[0].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[0].classList.remove('display-none')  
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    })  
                
    //включаем просто сложную игру
    easyHardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        firstCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    text.classList.add('display-none')
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
                
     //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", ()=>{
    text.classList.remove('display-none')
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    easyHardButton.disabled = true   
                  
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
    document.getElementsByClassName('pack-easy-hard')[0].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[0].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
                
    //включаем очень сложную игру
    hardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        firstCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    text.classList.add('display-none')
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'hard');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'hard');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'hard');
    document.getElementsByClassName('face')[0].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[0].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[0].style.display = 'none';//прячем "кнопку" для переключения картdocument.querySelector('.pack-hard').style.display = 'block';
    document.getElementsByClassName('pack-easy-hard')[0].style.display = 'none';
    document.getElementsByClassName('pack-hard')[0].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[0].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.add('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
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
        buttonRandom.addEventListener("click",()=>{
        text.classList.remove('display-none')
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        hardButton.disabled = true 
       
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
        document.getElementsByClassName('pack-hard')[0].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[0].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
}
levelGame()            

//подсчет необходимого количества карт
    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen
})


//вкючаем второго старца (!!!готово)
secondCard.addEventListener("click", ()=> {
    if(secondCard .classList.contains('clicked')){secondElder()}
    document.querySelector('.one-card').style.display = 'none';
    document.querySelector('.two-card').style.display = 'block';
    document.querySelector('.three-card').style.display = 'none';
    document.querySelector('.four-card').style.display = 'none';
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
    
    document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=1;let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=2;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=0;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

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
            secondCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=1;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=2;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=0;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML            
        text.classList.add('display-none')
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
        buttonRandom.addEventListener("click", ()=>{
        text.classList.remove('display-none')
        packCard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        easyButton.disabled = true       
                        
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
            tracker()
        document.getElementsByClassName('face')[1].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
                
    //включаем просто легкую игру
        mediumEasyButton.addEventListener("click", ()=>{ //нажав на кнопку 
            secondCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=1;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=2;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=0;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML            
        text.classList.add('display-none')
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
                
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", ()=>{
        text.classList.remove('display-none')
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.remove('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumEasyButton.disabled = true   
                        
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
        document.getElementsByClassName('pack-medium-easy')[1].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[1].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
        })
    }) 
                
    //включаем среднюю игру
    mediumButton.addEventListener("click", ()=>{ //нажав на кнопку  - средние
        secondCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=1;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=2;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=0;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    text.classList.add('display-none')
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
                    
    //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click",()=>{
    text.classList.remove('display-none')
    buttonRandom.classList.add('check')    
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    mediumButton.disabled = true; 
    buttonRandom.disabled = true;  
                
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
    document.getElementsByClassName('pack1')[1].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[1].classList.remove('display-none')  
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    })  
                
    //включаем просто сложную игру
    easyHardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        secondCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=1;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=2;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=0;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    text.classList.add('display-none')
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
                
     //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", ()=>{
    text.classList.remove('display-none')
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    easyHardButton.disabled = true   
                  
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
    document.getElementsByClassName('pack-easy-hard')[1].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[1].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
                
    //включаем очень сложную игру
    hardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        secondCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=1;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=2;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=0;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    text.classList.add('display-none')
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'hard');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'hard');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'hard');
    document.getElementsByClassName('face')[1].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[1].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[1].style.display = 'none';//прячем "кнопку" для переключения картdocument.querySelector('.pack-hard').style.display = 'block';
    document.getElementsByClassName('pack-easy-hard')[1].style.display = 'none';
    document.getElementsByClassName('pack-hard')[1].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[1].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.add('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
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
        buttonRandom.addEventListener("click",()=>{
        text.classList.remove('display-none')
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        hardButton.disabled = true 
       
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
        document.getElementsByClassName('pack-hard')[1].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[1].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[1].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
}
levelGame()

//подсчет необходимого количества карт
    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen
})


//включаем третьего старца(!!!готово)
thirdCard.addEventListener("click", () => {
    if(thirdCard .classList.contains('clicked')){thirdElder()}
    document.querySelector('.one-card').style.display = 'none';
    document.querySelector('.two-card').style.display = 'none';
    document.querySelector('.three-card').style.display = 'block';
    document.querySelector('.four-card').style.display = 'none';
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
    secondCard.classList.remove('check')
    thirdCard.classList.add('check')
    fourCard.classList.remove('check')
    
    document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

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
            thirdCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML            
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'easy');//фильтруем легке
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'easy');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'easy');
        document.getElementsByClassName('face')[2].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[2].style.display = 'block';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[2].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[2].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[2].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[2].style.display = 'none';
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.add('check')//добавляем стиль кнопке легкого уровня игры
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        hardButton.classList.remove('check')
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.remove('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
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
        buttonRandom.addEventListener("click", ()=>{
        packCard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        easyButton.disabled = true       
                        
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
        document.getElementsByClassName('pack')[2].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[2].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[2].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
                
    //включаем просто легкую игру
        mediumEasyButton.addEventListener("click", ()=>{ //нажав на кнопку 
            thirdCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML            
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'hard');//фильтруем сложные
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'hard');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'hard');
        document.getElementsByClassName('face')[2].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[2].style.display = 'none';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[2].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[2].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[2].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[2].style.display = 'block';//прячем "кнопку" для переключения карт
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
        hardButton.classList.remove('check')
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.add('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", ()=>{
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.remove('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumEasyButton.disabled = true   
                        
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
        document.getElementsByClassName('pack-medium-easy')[2].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[2].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[2].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
        })
    }) 
                
    //включаем среднюю игру
    mediumButton.addEventListener("click", ()=>{ //нажав на кнопку  - средние
        thirdCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    document.getElementsByClassName('face')[2].classList.add('display-none')
    document.getElementsByClassName('pack')[2].style.display = 'none'
    document.getElementsByClassName('pack1')[2].style.display = 'block'
    document.getElementsByClassName('pack-hard')[2].style.display = 'none'
    document.getElementsByClassName('pack-easy-hard')[2].style.display = 'none'
    document.getElementsByClassName('pack-medium-easy')[2].style.display = 'none'
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
                    
    //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click",()=>{
    buttonRandom.classList.add('check')    
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    mediumButton.disabled = true; 
    buttonRandom.disabled = true;  
                
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
    document.getElementsByClassName('pack1')[2].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[2].classList.remove('display-none')  
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[2].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    })  
                
    //включаем просто сложную игру
    easyHardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        thirdCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'easy');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'easy');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'easy');
    document.getElementsByClassName('face')[2].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[2].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[2].style.display = 'none';//прячем "кнопку" для переключения карт
    document.getElementsByClassName('pack-hard')[2].style.display = 'none';
    document.getElementsByClassName('pack-easy-hard')[2].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[2].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.remove('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.add('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
     //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", ()=>{
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    easyHardButton.disabled = true   
                  
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
    document.getElementsByClassName('pack-easy-hard')[2].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[2].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[2].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
                
    //включаем очень сложную игру
    hardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        thirdCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=0;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=2;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=3;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=3;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'hard');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'hard');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'hard');
    document.getElementsByClassName('face')[2].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[2].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[2].style.display = 'none';//прячем "кнопку" для переключения картdocument.querySelector('.pack-hard').style.display = 'block';
    document.getElementsByClassName('pack-easy-hard')[2].style.display = 'none';
    document.getElementsByClassName('pack-hard')[2].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[2].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.add('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
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
        buttonRandom.addEventListener("click",()=>{
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        hardButton.disabled = true 
       
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
        document.getElementsByClassName('pack-hard')[2].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[2].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[2].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
    })
    }) 
}
levelGame()

//подсчет необходимого количества карт
    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen
})

function firstElder() {
    if (confirm('Хотите снова вернуться к первому старцу?') == true) {
        location.reload ();
    }
}
function secondElder() {
    if (confirm('Хотите снова вернуться ко второму старцу?') == true) {
        location.reload ();
    }
}
function thirdElder() {
    if (confirm('Хотите снова вернуться к третьему старцу?') == true) {
        location.reload ();
    }
}
function fourElder() {
    if (confirm('Хотите снова вернуться к четвертому старцу?') == true) {
        location.reload ();
    }
}



//включаем четвертого старца(!!!готово)
fourCard.addEventListener("click", () => {
    if(fourCard.classList.contains('clicked')){fourElder()}
    else{document.querySelector('.one-card').style.display = 'none';
    document.querySelector('.two-card').style.display = 'none';
    document.querySelector('.three-card').style.display = 'none';
    document.querySelector('.four-card').style.display = 'block';
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
    secondCard.classList.remove('check')
    thirdCard.classList.remove('check')
    fourCard.classList.add('check')
    
    document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
    document.getElementsByClassName('green2')[0].innerHTML=3;let green2 = document.getElementsByClassName('green2')[0].innerHTML
    document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
    document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
    document.getElementsByClassName('brown2')[0].innerHTML=2;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
    document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
    document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
    document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
    document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML

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
    //включаем очень легкую игру
        easyButton.addEventListener("click", ()=>{ //нажав на кнопку  - легкие
            fourCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=3;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=2;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML            
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'easy');//фильтруем легке
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'easy');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'easy');
        document.getElementsByClassName('face')[3].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[3].style.display = 'block';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[3].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[3].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[3].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[3].style.display = 'none';
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.add('check')//добавляем стиль кнопке легкого уровня игры
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        hardButton.classList.remove('check')
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.remove('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
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
        buttonRandom.addEventListener("click", ()=>{
        packCard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        easyButton.disabled = true       
                        
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
        document.getElementsByClassName('pack')[3].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[3].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[3].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
        })
    }) 
                
    //включаем просто легкую игру
        mediumEasyButton.addEventListener("click", ()=>{ //нажав на кнопку 
            fourCard.classList.add('clicked')
            document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
            document.getElementsByClassName('green2')[0].innerHTML=3;let green2 = document.getElementsByClassName('green2')[0].innerHTML
            document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
            document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
            document.getElementsByClassName('brown2')[0].innerHTML=2;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
            document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
            document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
            document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
            document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML            
        const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'hard');//фильтруем сложные
        const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'hard');
        const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'hard');
        document.getElementsByClassName('face')[3].classList.add('display-none')//пряячем открытую карту
        document.getElementsByClassName('pack')[3].style.display = 'none';//открываем "кнопку" для переключения карт
        document.getElementsByClassName('pack1')[3].style.display = 'none';//прячем "кнопку" для переключения карт
        document.getElementsByClassName('pack-hard')[3].style.display = 'none';
        document.getElementsByClassName('pack-easy-hard')[3].style.display = 'none';
        document.getElementsByClassName('pack-medium-easy')[3].style.display = 'block';//прячем "кнопку" для переключения карт
        buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
        buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
        easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
        hardButton.classList.remove('check')
        mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
        easyHardButton.classList.remove('check')
        mediumEasyButton.classList.add('check')
        buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", ()=>{
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.remove('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        mediumEasyButton.disabled = true   
                        
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
        document.getElementsByClassName('pack-medium-easy')[3].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[3].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[3].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
      })
    }) 
                
    //включаем среднюю игру
    mediumButton.addEventListener("click", ()=>{ //нажав на кнопку  - средние
        fourCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=3;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=2;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    document.getElementsByClassName('face')[3].classList.add('display-none')
    document.getElementsByClassName('pack')[3].style.display = 'none'
    document.getElementsByClassName('pack1')[3].style.display = 'block'
    document.getElementsByClassName('pack-hard')[3].style.display = 'none'
    document.getElementsByClassName('pack-easy-hard')[3].style.display = 'none'
    document.getElementsByClassName('pack-medium-easy')[3].style.display = 'none'
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
                    
    //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click",()=>{
    buttonRandom.classList.add('check')    
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    mediumButton.disabled = true; 
    buttonRandom.disabled = true;  
                
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
    document.getElementsByClassName('pack1')[3].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[3].classList.remove('display-none')  
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[3].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
    })
    })  
                
    //включаем просто сложную игру
    easyHardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        fourCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=3;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=2;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult !== 'easy');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult !== 'easy');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult !== 'easy');
    document.getElementsByClassName('face')[3].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[3].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[3].style.display = 'none';//прячем "кнопку" для переключения карт
    document.getElementsByClassName('pack-hard')[3].style.display = 'none';
    document.getElementsByClassName('pack-easy-hard')[3].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[3].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.remove('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.add('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
     //нажимаем на кнопку замешать
    buttonRandom.addEventListener("click", ()=>{
    packCard.forEach(packCard => {packCard.classList.add('display-none');})
    packCard1.forEach(packCard => {packCard.classList.add('display-none');})
    packCardHard.forEach(packCard => {packCard.classList.add('display-none');})
    packCardEasyHard.forEach(packCard => {packCard.classList.remove('display-none');})
    packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
    buttonRandom.classList.add('check'); 
    buttonRandom.disabled = true;
    easyHardButton.disabled = true   
                  
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
    document.getElementsByClassName('pack-easy-hard')[3].addEventListener("click", () => {
        tracker()
    document.getElementsByClassName('face')[3].classList.remove('display-none')
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[3].style.backgroundImage = url}
    })
    text.textContent=random.map(u => u.colour).join(', ')
      })
    }) 
                
    //включаем очень сложную игру
    hardButton.addEventListener("click", ()=>{ //нажав на кнопку  - очень сложно
        fourCard.classList.add('clicked')
        document.getElementsByClassName('green1')[0].innerHTML=1;let green1 = document.getElementsByClassName('green1')[0].innerHTML
        document.getElementsByClassName('green2')[0].innerHTML=3;let green2 = document.getElementsByClassName('green2')[0].innerHTML
        document.getElementsByClassName('green3')[0].innerHTML=2;let green3 = document.getElementsByClassName('green3')[0].innerHTML
        document.getElementsByClassName('brown1')[0].innerHTML=2;let brown1 = document.getElementsByClassName('brown1')[0].innerHTML
        document.getElementsByClassName('brown2')[0].innerHTML=2;let brown2 = document.getElementsByClassName('brown2')[0].innerHTML
        document.getElementsByClassName('brown3')[0].innerHTML=4;let brown3 = document.getElementsByClassName('brown3')[0].innerHTML
        document.getElementsByClassName('blue1')[0].innerHTML=1;let blue1 = document.getElementsByClassName('blue1')[0].innerHTML
        document.getElementsByClassName('blue2')[0].innerHTML=1;let blue2 = document.getElementsByClassName('blue2')[0].innerHTML
        document.getElementsByClassName('blue3')[0].innerHTML=0;let blue3 = document.getElementsByClassName('blue3')[0].innerHTML        
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'hard');//фильтруем сложные
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'hard');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'hard');
    document.getElementsByClassName('face')[3].classList.add('display-none')//пряячем открытую карту
    document.getElementsByClassName('pack')[3].style.display = 'none';//открываем "кнопку" для переключения карт
    document.getElementsByClassName('pack1')[3].style.display = 'none';//прячем "кнопку" для переключения картdocument.querySelector('.pack-hard').style.display = 'block';
    document.getElementsByClassName('pack-easy-hard')[3].style.display = 'none';
    document.getElementsByClassName('pack-hard')[3].style.display = 'block';
    document.getElementsByClassName('pack-medium-easy')[3].style.display = 'none';//прячем "кнопку" для переключения карт
    buttonRandom.classList.remove('display-none')//прячем кнопку для замешивания
    buttonRandom.classList.remove('check')//убираем стиль с кнопки для замешивания
    easyButton.classList.remove('check')//добавляем стиль кнопке легкого уровня игры
    hardButton.classList.add('check')
    mediumButton.classList.remove('check')//убираем стиль с кнопки среднего уровня игры
    easyHardButton.classList.remove('check')
    mediumEasyButton.classList.remove('check')
    buttonRandom.disabled = false;//делаем кликабельной кнопку для замешивания
                
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
        buttonRandom.addEventListener("click",()=>{
        packCard.forEach(packCard => {packCard.classList.add('display-none');})
        packCard1.forEach(packCard => {packCard.classList.add('display-none');})
        packCardHard.forEach(packCard => {packCard.classList.remove('display-none');})
        packCardEasyHard.forEach(packCard => {packCard.classList.add('display-none');})
        packCardMediumEasy.forEach(packCard => {packCard.classList.add('display-none');})
        buttonRandom.classList.add('check'); 
        buttonRandom.disabled = true;
        hardButton.disabled = true 
       
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
        document.getElementsByClassName('pack-hard')[3].addEventListener("click", () => {
            tracker()
        document.getElementsByClassName('face')[3].classList.remove('display-none')
        const img = new Image();
        if(i == random.length-1){i=random.length-1
        }else{i++}
        img.src = `${random[i].src}`
        let url = `url(${img.src})`
        img.onload = () => {document.getElementsByClassName('face')[3].style.backgroundImage = url}
        })
        text.textContent=random.map(u => u.colour).join(', ')
        })
    }) 

//подсчет необходимого количества карт
    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen
}})








