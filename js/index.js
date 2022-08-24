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

//размещение обложки колоды
function pack(){
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/mythicCardBackground.png`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('pack')[0].style.backgroundImage = url}
}
pack()

const stage = document.querySelector('.stage')
const packCard = document.querySelector('.pack')
const button = document.querySelectorAll('.button')
const buttonRandom = document.querySelector('.button-random')
const easyButton = document.querySelector('.easy')
const firstCard = document.getElementsByClassName('ancients')[0]
const secondCard = document.getElementsByClassName('ancients')[1]
const thirdCard = document.getElementsByClassName('ancients')[2]
const fourCard = document.getElementsByClassName('ancients')[3]

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

firstCard.addEventListener("click", () => {
    firstCard.classList.add('check')
    secondCard.classList.remove('check')
    thirdCard.classList.remove('check')
    fourCard.classList.remove('check')
    document.getElementsByClassName('green1')[0].innerHTML=1
    document.getElementsByClassName('green2')[0].innerHTML=2
    document.getElementsByClassName('green3')[0].innerHTML=1
    document.getElementsByClassName('brown1')[0].innerHTML=2
    document.getElementsByClassName('brown2')[0].innerHTML=3
    document.getElementsByClassName('brown3')[0].innerHTML=1
    document.getElementsByClassName('blue1')[0].innerHTML=1
    document.getElementsByClassName('blue2')[0].innerHTML=4
    document.getElementsByClassName('blue3')[0].innerHTML=0
    stage.classList.remove('display-none')
})

secondCard.addEventListener("click", ()=> {
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
    
//включаем легкую игру
easyButton.addEventListener("click", ()=>{ //нажав на кнопку  - легкие
    const easyBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'easy');//фильтруем легке
    const easyGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'easy');
    const easyBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'easy');
    buttonRandom.classList.remove('display-none')
    buttonRandom.classList.add('check')
    easyButton.classList.add('check')
    
    //проверяем хватает ли карт
        if(easyBlue.length<=sumBlue){//проверяем хватает ли коричневых карт
            const add = sumBlue-easyBlue.length
            const mediumBlue = mysticcardsBlue.filter(mysticcardsBlue => mysticcardsBlue.difficult === 'medium')
            //добавляем в массив недостающие карты    
            for(let i=0; i<add;i++){
                    easyBlue.push(mediumBlue[i])}
        }else{
            const del= easyBlue.length - sumBlue
            easyBlue.splice(0,Number(del))
        }            
        if(easyGreen.length<=sumGreen){//проверяем хватает ли зеленых карт
            const add = sumGreen-easyGreen.length
            const mediumGreen = mysticcardsGreen.filter(mysticcardsGreen => mysticcardsGreen.difficult === 'medium')
            //добавляем в массив недостающие карты    
            for(let i=0; i<add;i++){
                    easyGreen.push(mediumGreen[i])}       
        }else{
            const del= easyGreen.length - sumGreen
            easyGreen.splice(0,Number(del))
        }
        if(easyBrown.length<=sumBrown){//проверяем хватает ли коричневых карт
            const add = sumBrown-easyBrown.length
            const mediumBrown = mysticcardsBrown.filter(mysticcardsBrown => mysticcardsBrown.difficult === 'medium')
            //добавляем в массив недостающие карты    
            for(let i=0; i<add;i++){
                    easyBrown.push(mediumBrown[i])}        
        }else{
            const del= easyBrown.length - sumBrown
            easyBrown.splice(0,Number(del))
        }
    console.log(easyBlue)
    //нажимаем на кнопку замешать
        buttonRandom.addEventListener("click", ()=>{ 
        packCard.classList.remove('display-none')
        
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
        for(let q=0;q<Number(blue1);q++){arr.push(easyBlue[q])}
            easyBlue.splice(0, Number(blue1))}
        if(brown1===0){arr.push()}else{
        for(let u=0;u<Number(brown1);u++){arr.push(easyBrown[u])}
            easyBrown.splice(0, Number(brown1))}
        if(green1===0){arr.push()}else{
        for(let w=0;w<Number(green1);w++){arr.push(easyGreen[w])}
            easyGreen.splice(0, Number(green1))}
        if(blue2===0){arr.push()}else{
        for(let e=0;e<Number(blue2);e++){arr.push(easyBlue[e])}
            easyBlue.splice(0, Number(blue2))}
        if(brown2===0){arr.push()}else{
        for(let p=0;p<Number(brown2);p++){arr.push(easyBrown[p])}
            easyBrown.splice(0, Number(brown2))}
        if(green2===0){arr.push()}else{
        for(let r=0;r<Number(green2);r++){arr.push(easyGreen[r])}
            easyGreen.splice(0, Number(green2))}
        if(blue3===0){arr.push()}else{
        for(let t=0;t<Number(blue3);t++){arr.push(easyBlue[t])}
            easyBlue.splice(0, Number(blue3))}
        if(brown3===0){arr.push()}else{
        for(let y=0;y<Number(brown3);y++){arr.push(easyBrown[y])}
           easyBrown.splice(0, Number(brown3))}
        if(green3===0){arr.push()}else{
        for(let a=0;a<Number(green3);a++){arr.push(easyGreen[a])}
            easyGreen.splice(0, Number(green3))}
   
        console.log(arr) 
        
//выводим карты в колоду
    let random = arr;
    var i=-1
    //открываем карты
    packCard.addEventListener("click", () => {
    const img = new Image();
    if(i == random.length-1){i=random.length-1
    }else{i++}
    img.src = `${random[i].src}`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByClassName('face')[0].style.backgroundImage = url}
    })         
  })
})  

    const sumBlue = q().sumBlue
    const sumBrown = q().sumBrown
    const sumGreen = q().sumGreen

})

thirdCard.addEventListener("click", () => {
    firstCard.classList.remove('check')
    secondCard.classList.remove('check')
    thirdCard.classList.add('check')
    fourCard.classList.remove('check')
    document.getElementsByClassName('green1')[0].innerHTML=0
    document.getElementsByClassName('green2')[0].innerHTML=2
    document.getElementsByClassName('green3')[0].innerHTML=3
    document.getElementsByClassName('brown1')[0].innerHTML=2
    document.getElementsByClassName('brown2')[0].innerHTML=3
    document.getElementsByClassName('brown3')[0].innerHTML=4
    document.getElementsByClassName('blue1')[0].innerHTML=1
    document.getElementsByClassName('blue2')[0].innerHTML=1
    document.getElementsByClassName('blue3')[0].innerHTML=0
    stage.classList.remove('display-none')
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








