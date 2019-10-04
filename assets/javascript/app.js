console.log('buenos dias puta');
$(document).ready(function () {

    // Oof where to start lol

    // need to set up firebase asap
    // do that tonight u lazy fuck
    
    // ^-- need to look into user log in 
    // ^-- a leader board 
    // ^-- store the grand total of a users wins and losses (most wins is leader of board) and name of user

    // look up animations tomorrow? porbably dont have time - me @ me 12:37am
    // add a modal to let the user know if they won or lost the round 

    // compare user clicks if one player clicked x and one player pressed y what would be the results
    // display said results (after each round?)

    // might be better to store this information in a objust? idk
    // Globes
    var wins = 0;   
    var losses = 0;
    var ties = 0;


    // store the user variable 'r-p-s', match that to the opponent 

    $('#scissors').on('click', function () {
        
        console.log($('.scissorsClick').attr("value"));

    });

    $('#rock').on('click', function () {
        
        console.log($('.rockClick').attr("value"));

    });

    $('#paper').on('click', function () {
        
        console.log($('.paperClick').attr("value"));

    });


    // this is going to fucking suck.. will this get done by tuesday? and the portfolio by wed? doubt it lmao


})