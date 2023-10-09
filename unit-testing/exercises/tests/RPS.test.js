const whoWon = require('../RPS.js');
describe('who won', function(){
    test("should return 'TIE'", function(){
        let output = whoWon('paper','paper');
        expect(output).toEqual("TIE!");
    });

    test("should return 'Player 2 wins!' if player1 =rock and player2 = paper", function(){
        let output=whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!');
    });
    test("should return 'Player 2 wins!' if player1 = paper and player2 = scissors", function(){
        let output=whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });
    test("should return 'Player 2 wins!' if player 1 = scissors and player2 =rock", function(){
        let output=whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!');
    });
    
})