function setBg(){
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/VeranikaM85/eldritch-codejam/main/assets/home.png`
    let url = `url(${img.src})`
    img.onload = () => {document.getElementsByTagName('body')[0].style.backgroundImage = url;}
}
setBg()