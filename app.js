// VARIABLES //
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numericChars = "0123456789";
const button =  document.querySelector('#main #btn');
const showUp = document.querySelector('#main #header2');

// MAKING ARRAYS //
const UpArray = Array.from(uppercaseChars);
const LowArray =  Array.from(lowercaseChars);
const Num =  Array.from(numericChars);

console.log(UpArray)

// IT WORKS AND LOGS THE ARRAY //


// CHECKING... ///

if(button.id === 'btn' && showUp.id === 'header2'){
    console.log('yes')
} else {
    console.log('no')
}

// THE WORK // 


// GENERATING THE FIRST 3 //
button.addEventListener('click', function(e){
    const RandomAlpha = UpArray[Math.floor(Math.random()*UpArray.length)]
    const RandomLowAlpha = LowArray[Math.floor(Math.random()*LowArray.length)]
    const Numbers =  Num[Math.floor(Math.random()*Num.length)]

    // GENERATE 5 REMANING CHRACTERS //
    const allChars =  uppercaseChars + lowercaseChars + numericChars

    const remainingChars = [];
while (remainingChars.length < 5) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    remainingChars.push(randomChar);

};
const RandomPassword = RandomAlpha + RandomLowAlpha + Numbers + remainingChars.join('');

    showUp.innerHTML = RandomPassword;
});



    









