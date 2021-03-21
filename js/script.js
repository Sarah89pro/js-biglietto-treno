/*  ask to user 
    -how many kilometers does he wants to travel
    -age (<18 >65)
    
    and then
    -calculate price
    -calculate price with discount (using "if" "else if" "else")
*/

//kilometers
var kilometers = parseInt ( prompt ("How many kilometers do you have to travel to get to Hogwarts castle?") );
console.log(kilometers);

if ( isNaN (kilometers) ) {
    alert("Revelio! We aren't muggles! You should answer properly! Press the F5 key");
}

//age
var age = parseInt ( prompt ("How old are you?") );
console.log(age);

if ( isNaN (age) ) {
    alert("Revelio! We aren't muggles! You should answer properly! Press the F5 key");
}

//discounts
var cost = kilometers * 0.21;
console.log(cost);

if (age < 18) {
    var discountYoung = cost * (20 / 100); //20% discount young
    var cost = cost - discountYoung;
    console.log("It will cost you ", cost.toFixed(2), " €"  );

} else if (age > 65) {
    var discountOld = cost * (40 / 100); //40% discount old
    var cost = cost - discountOld;
    console.log("It will cost you ", cost.toFixed(2), " €" );

} else {
    console.log("It will cost you ", cost.toFixed(2), " €" );
}

//final output
document.getElementById("magic").innerHTML = ("Your ticket will cost you ") + cost.toFixed(2) + " €";
document.getElementById("harry-potter").innerHTML;