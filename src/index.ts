//Dessa är alla variabler du behöver använda. 
//De ska dock ligga i olika funktioner och inte nedanför.

//mina funktioner
function calculateTip(sum :number, tip:number) {
    return sum * tip;
}
function divideTotal(total:number, numberOfFriends:number) { 
    return total / numberOfFriends;
}
function showDividedSum(sum:number) {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}

//allt ska hända när man fyllt formerna och klickar på knappen
document.getElementById('calculateButton').addEventListener('click', function () {

    //måste göra detta extra i typescript?
    const tipInput = document.getElementById('tip') as HTMLInputElement;
    const sumInput = document.getElementById('sum') as HTMLInputElement;
    const numberOfFriendsInput = document.getElementById('numberOfFriends') as HTMLInputElement;

    //orignala
    const tip: number = parseFloat(tipInput.value);
    const sum: number = parseFloat(sumInput.value);
    const numberOfFriends: number = parseInt(numberOfFriendsInput.value);

    //använd funktionerna med datan från formen
    const calculatedTip: number = calculateTip(sum, tip);

    const total: number = sum + calculatedTip;

    const sumDivided: number = divideTotal(total,numberOfFriends);

    const friendSum: number = sumDivided

    showDividedSum(friendSum)

    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');

});


//okej jag måste göra om dom till string för det blir 250250 istället för 500 med driks

