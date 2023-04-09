let count1 = 0;
let count2 = 0;

function sum() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6 gacha random tanlandi

    let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png --dice6.png

    let randomImageSource = "images/" + randomDiceImage; //images/dice1.png --images/dice6.png

    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);




    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage2 = "dice" + randomNumber2 + ".png";

    let randomImageSource2 = "images/" + randomDiceImage2;

    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);

    // if (randomNumber1 > randomNumber2) {
    //     document.querySelector("h1").innerHTML = ""
    // } else if (randomNumber1 < randomNumber2) {
    //     document.querySelector("h1").innerHTML = ""
    // } else {
    //     document.querySelector("h1").innerHTML = ""
    // }


    if (randomNumber1 > randomNumber2) {
        count1++
        document.getElementById('inn1').value = count1;
    }
    else if (randomNumber1 < randomNumber2) {
        count2++
        document.getElementById('inn2').value = count2;
    }
}

function end() {
    document.getElementById('inn1').value = 0;
    document.getElementById('inn2').value = 0;
}