const inputs = [...document.querySelectorAll('input')];
const btn = document.querySelector('.button');
const NameOfPlayer1 = document.querySelector('.NameOfPlayer1');
const NameOfPlayer2 = document.querySelector('.NameOfPlayer2');
const NameOfPlayer3 = document.querySelector('.NameOfPlayer3');
const NameOfPlayer4 = document.querySelector('.NameOfPlayer4');
const error = document.querySelector('.error');

const swishSound = new Audio('sounds/swish.mp3');


const checkForm = (inputs)=>{
    let errors = 0;
    inputs.forEach(el => {
        if(el.value ===""){
            errors++;
        }
    })
    if(errors > 0){
        error.style.visibility = "visible";
    }else{
        document.querySelector('.container1').classList.add("hidden");
        setTimeout(() => changeIndex(3), 2000)

        setTimeout(() => losuj(NameOfPlayer1), 1000)
        setTimeout(() => losuj(NameOfPlayer2), 2000)
        setTimeout(() => losuj(NameOfPlayer3), 3000)
        setTimeout(() => losuj(NameOfPlayer4), 4000)


        error.textContent = "";
    }

}

const changeIndex = (numberOfIndex)=>{
    document.querySelector('.container2').style.zIndex = numberOfIndex;
}
const losuj = (NameOfPlayer)=>{
    const index = getIndex(inputs);
    const player = randomPlayer(inputs, index);
    przypiszGracza(player, NameOfPlayer);
    swishSound.play();
    //console.log(index);
    inputs.splice(index,1);

}
const getIndex = ()=>{
    return inputIndex = Math.floor(Math.random()* inputs.length);
}

const przypiszGracza = (player, div)=>{
    div.textContent = player;
    div.style.visibility = "visible";
}
const randomPlayer = (inputs, index)=>{
    const getRandomPlayer = inputs[index];
    return getRandomPlayer.value;

}

btn.addEventListener('click', e=>{
    e.preventDefault();
    checkForm(inputs);
   

})



    


