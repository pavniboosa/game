
var scores,roundscore,activeplayer;

scores=[0,0];
 roundscore=0;
 activeplayer=0;// tells who the active player is
 
document.querySelector('.dice').style.display='none';
 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';

 document.querySelector('.btn-roll').addEventListener('click',function(){
  		
var dice=Math.floor(Math.random()*6)+1;// here random numbers are created 
console.log(dice);
  
    var dicedom=document.querySelector('.dice');//display the result
dicedom.style.display='block';
dicedom.src='dice-'+dice+'.png';
// this statment is used to update when the rolled dice is not 1
// the condition if gets satisfied then the score of the player gets increased 
    if(dice!=1){
      roundscore+=dice;
      document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }
    else{
    	nextplayer();
         }
        
     });

//the above statment is for creating a roll button and the event listener is added to it 
document.querySelector('.btn-hold').addEventListener('click',function(){

scores[activeplayer]+=roundscore;
document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
// check if the player has won the game 
// a player wins the game if he gets more than 20
if(scores[activeplayer]>=20){
	document.querySelector('#name-'+ activeplayer).textContent='winner!';
	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-'+ activeplayer +'-panel').classList.add('winner');
   document.querySelector('.player-'+ activeplayer +'-panel').classList.remove('active');
   
}else{

	nextplayer();
}

});
          
 
function nextplayer(){
	activeplayer === 0? activeplayer = 1:activeplayer = 0;
	//the above sttament is written so that the scores of two players do not merge
    	roundscore=0;
    	//so that after every itteration the score goes to zero
    	document.getElementById('current-0').textContent='0';
    	//so that afetr every itteration the score goes back to zero
    	document.getElementById('current-1').textContent='0';
    	document.querySelector('.player-0-panel').classList.toggle('active');
    	document.querySelector('.player-1-panel').classList.toggle('active');
    	document.querySelector('.dice').style.display='none';

}

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
	scores=[0,0];
 roundscore=0;
 activeplayer=0;

 document.querySelector('.dice').style.display='none';
 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';
 document.getElementById('name-0').textContent='player-1';
 document.getElementById('name-1').textContent='player-2';
 document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}

 