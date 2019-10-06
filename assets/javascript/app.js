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
    var totalPlayers = [];
    var wins = 0;   
    var losses = 0;
    var ties = 0;
    var playerOne;
    var playerTwo;

    // Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyBJQRyWQIreKvpRXBtEu60k3JIYyCvUicU",
        authDomain: "rps-game-86734.firebaseapp.com",
        databaseURL: "https://rps-game-86734.firebaseio.com",
        projectId: "rps-game-86734",
        storageBucket: "rps-game-86734.appspot.com",
        messagingSenderId: "204022287789",
        appId: "1:204022287789:web:f20d87b8747f6b3d7ba524",
        measurementId: "G-84WG0VZ41T"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();


    // store the user variable 'r-p-s', match that to the opponent 

    $('#scissors').on('click', function () {
        
        console.log($('.scissors').attr("value"));

    });

    $('#rock').on('click', function () {
        
        console.log($('.rock').attr("value"));

    });

    $('#paper').on('click', function () {
        
        console.log($('.paper').attr("value"));

    });


    // this is going to fucking suck.. will this get done by tuesday? and the portfolio by wed? doubt it lmao


})