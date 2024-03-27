//genetation of random color

const randomColor = function(){
    const hex = "1234567890ABCDEF"
    let color = '#'
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intID;

const startChangeColor = ()=>{
    changebg = () => {
        document.body.style.backgroundColor = randomColor();
    };
    if(!intID){
        intID = setInterval(changebg,1000)
    }
};

const stopChangeColor = ()=>{
    clearInterval(intID)
    intID = null
}

document.querySelector("#start").addEventListener('click',startChangeColor)
document.querySelector("#stop").addEventListener('click',stopChangeColor)

