
if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
        myInitCode();
    });
}

function myInitCode() {
	
	console.log("got here");
	const squares = document.querySelectorAll('.grid div');
	const result = document.querySelector('#result');
	const displayCurrentPlayer = document.querySelector('#current-player');
	let currentPlayer = 1;
	
	for (var i = 0,len = squares.length; i < len; i++) {
		
	(function (index) {
		//add an onclick to each square in your grid
		squares[i].onclick = function(){
			//if the square below your current square is taken, you can go on top of italics
			if (squares[index + 7].classList.contains('taken')){
				squares[index].classList.add('taken');
				squares[index].classList.add('player-'+currentPlayer);
				currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
				displayCurrentPlayer.innerHTML = currentPlayer;
				checkBoard();
			}else{
			//if the square below your current player is not taken an alert will pop up
				alert('you cannot go here')
			}
		}
	})(i);
	}
	
	
	//check the board for a win or lose
	function checkBoard() {
			console.log("checkBoard")
	// Winning vertically
	let wins = [
	[0,1,2,3],
[7,8,9,10],
[14,15,16,17],
[21,22,23,24],
[28,29,30,31],
[35,36,37,38],
[1,2,3,4],
[8,9,10,11],
[15,16,17,18],
[22,23,24,25],
[29,30,31,32],
[36,37,38,39],
[2,3,4,5],
[9,10,11,12],
[16,17,18,19],
[23,24,25,26],
[30,31,32,33],
[37,38,39,40],
[3,4,5,6],
[10,11,12,13],
[17,18,19,20],
[24,25,26,27],
[31,32,33,34],
[38,39,40,41],
[0,7,14,21],
[1,8,15,22],
[2,9,16,23],
[3,10,17,24],
[4,11,18,25],
[5,12,19,26],
[6,13,20,27],
[7,14,21,28],
[8,15,22,29],
[9,16,23,30],
[10,17,24,31],
[11,18,25,32],
[12,19,26,33],
[13,20,27,34],
[14,21,28,35],
[15,22,29,36],
[16,23,30,37],
[17,24,31,38],
[18,25,32,39],
[19,26,33,40],
[20,27,34,41],
[3,11,19,27],
[10,18,26,34],
[17,25,33,41],
[2,10,18,26],
[9,17,25,33],
[16,24,32,40],
[1,9,17,25],
[8,16,24,32],
[15,23,31,39],
[0,8,16,24],
[7,15,23,31],
[14,22,30,38],
[21,15,9,3],
[28,22,16,10],
[35,29,23,17],
[22,16,10,4],
[29,23,17,11],
[36,30,24,18],
[23,17,11,5],
[30,24,18,12],
[37,31,25,19],
[24,18,12,6],
[31,25,19,13],
[38,32,26,20]
];
	
//0  1  2  3  4  5  6
//7  8  9  10 11 12 13
//14 15 16 17 18 19 20
//21 22 23 24 25 26 27
//28 29 30 31 32 33 34
//35 36 37 38 39 40 41

	for (let y=0; y < wins.length; y++){
	const square1 = squares[wins[y][0]];
	const square2 = squares[wins[y][1]];
	const square3 = squares[wins[y][2]];
	const square4 = squares[wins[y][3]];
	//now check those arrays to see if they have the class of player-1
	if(square1.classList.contains('player-1') &&
		square2.classList.contains('player-1') &&
		square3.classList.contains('player-1') &&
		square4.classList.contains('player-1') ){
		
		result.innerHTML = ("Player One has won")
		
		}else if(square1.classList.contains('player-2') &&
		square2.classList.contains('player-2') &&
		square3.classList.contains('player-2') &&
		square4.classList.contains('player-2') ){
			
		result.innerHTML = ("Player Two has won")
		}
	}

}
}