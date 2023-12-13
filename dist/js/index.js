//Dessa är alla variabler du behöver använda. 
//De ska dock ligga i olika funktioner och inte nedanför.
//mina funktioner
function calculateTip(sum, tip) {
    return sum * tip;
}
function divideTotal(total, numberOfFriends) {
    return total / numberOfFriends;
}
function showDividedSum(sum) {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}
//allt ska hända när man fyllt formerna och klickar på knappen
document.getElementById('calculateButton').addEventListener('click', function () {
    //måste göra detta extra i typescript?
    const tipInput = document.getElementById('tip');
    const sumInput = document.getElementById('sum');
    const numberOfFriendsInput = document.getElementById('numberOfFriends');
    //orignala
    const tip = parseFloat(tipInput.value);
    const sum = parseFloat(sumInput.value);
    const numberOfFriends = parseInt(numberOfFriendsInput.value);
    //använd funktionerna med datan från formen
    const calculatedTip = calculateTip(sum, tip);
    const total = sum + calculatedTip;
    const sumDivided = divideTotal(total, numberOfFriends);
    const friendSum = sumDivided;
    showDividedSum(friendSum);
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
});
//okej jag måste göra om dom till string för det blir 250250 istället för 500 med driks
