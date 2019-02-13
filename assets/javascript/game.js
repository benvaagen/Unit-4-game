
var randomResult;
var loss = 0;
var win = 0;
var previous = 0;






var resetAndStart = function(){

    $(".crystals").empty();
    
    var images = [
        'https://www.cleanorigin.com/skin/frontend/cleanorigin-2.0/default/images/shapes/product/round.jpg', 
        'https://my-live-02.slatic.net/original/1221583bf174df8558a672e834b24ebe.jpg', 
        'https://i.pinimg.com/originals/f2/07/93/f207933b370313164d964f3503e23737.jpg', 
        'https://s.yimg.com/aah/yhst-71585368631737/rare-color-in-neon-magenta-tourmaline-round-german-cut-gem-mozambique-stone-14mm-9-88-carats-24.jpg'];

    randomResult = Math.floor(Math.random() * 30) + 21;  


    $("#result").html('Number To Guess: ' + randomResult);

    for (var i = 0; i < 4; i++) {
    
        var random = Math.floor(Math.random() * 11) + 1;
    
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size":"cover"
                
            });
        $(".crystals").append(crystal); 

    }
    
    $("#previous").html("Your Running Score: " + previous);
     

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal" , function () {
    
    var num = parseInt($(this).attr('data-random'));
   
    previous += num;

    
    $("#previous").html("Your Running Score: " + previous);
    
    console.log(previous);
    
    if(previous > randomResult){
        
        loss++;
        
        $("#loss").html("You Lost: " + loss);

        previous = 0;

        resetAndStart();
  
    }
    else if(previous === randomResult){
        
        win++;

        $("#win").html("You Win: " + win);

        previous = 0;

        resetAndStart();

    }
    
});




//Pseudocode
// a game with four crystals and a random total to be achieved.
// every crystal must have random number between 1 and 12
// a new random number must  be generated for each of the crystals every time we win or lose
// Clicking a crystal adds the value assigned to that crystal with the previous total
// until it equals the total.
// If it is greater than the goal number, we lost and increment the loss counter.
// If it is equal, then we increment a win counter









//    * There will be four crystals displayed as buttons on the page.
//    Step 1: Create 4 images which are equivalent to set, hidden numbers.

//    * The player will be shown a random number at the start of the game.
//    Step 2: Generate a random integer between 20 and 50. Math.floor
//    


//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//    Step 3: When the player clicks a crystal, it adds the number associated with that crystal to the total.
//            Create a counter which adds up the numbers from the crystals clicked. 

//      * Your game will hide this amount until the player clicks a crystal.

//      * When they do click one, update the player's score counter.
//      Update the counter each time the crystal is clicked.

//    * The player wins if their total score matches the random number from the beginning of the game.
//    Step 4: Players click crystals to get the total equal to the random number generated.
//    Decide if you want to use images in the html or variables in the javascript to make the crystal choices.

//    * The player loses if their score goes above the random number.
//    If the player's number is higher than the random number generated, they lose.

//    * The game restarts whenever the player wins or loses.
//    Increment wins or lossses on the wins/loss counter
//    Build a reset which takes place after a player wins or loses. This will mean that a new random number is generated, and that the player's score resets to zero.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

/*jQuery is a javaScript library.
Anything in jQuery you can do in plain javaScript.
w3schools is among the best resources.
When you use the $, you are importing a jQuery method.
The difference between a method and a function... a method is chained to an object, and a function exists on it's own.


*/