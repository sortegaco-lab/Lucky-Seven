function clearErrors()
{
	for(var loopCounter = 0; loopCounter < document.forms["luckySevensForm"].elements.length; loopCounter++)
	{
		if(document.forms["luckySevensForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["luckySevensForm"].elements[loopCounter].parentElement.className = "form-group"; 
		}
	}
}

function validateItems()
{
	
	clearErrors(); 
	var bet = Number(document.forms["luckySevensForm"]["bet"].value);
	var pot = bet; 
	var dice1 = 0; 
	var dice2 = 0; 
	var rolls = 0; 
	var playerMoney = 0; 
	var rollsPlayer = 0; 
	/*var formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}); */
	
	if(bet == "" || isNaN(bet) || Number(bet) <= 0)
	{
		alert("Bet must be more than zero."); 
		document.forms["luckySevensForm"]["bet"].parentElement.className = "form-group has-error";
		document.forms["luckySevensForm"]["bet"].focus(); 
		return false; 
	}
	
	playerMoney = 0;  
	
	do
	{
		dice1 = Math.floor(Math.random() * 6) + 1; 
		rolls++;
		dice2 = Math.floor(Math.random() * 6) + 1; 
		rolls++; 
		
		if((Number(dice1) + Number(dice2)) == 7)
		{
			pot = pot + 4;
			if(pot > playerMoney)
			{
				playerMoney = pot; 
				rollsPlayer = rolls; 
			}
		}
		else
		{
			pot--; 
		}
		
	}while(pot != 0); 
	
	
	document.getElementById("results").style.display = "block"; 
	document.getElementById("play").innerText = "Play again.";
	document.getElementById("startingBet").innerText = bet.toFixed(2); 
	document.getElementById("rolls").innerText = rolls; 
	document.getElementById("playerMoney").innerText = playerMoney.toFixed(2);
	document.getElementById("rollsPlayer").innerText = rollsPlayer; 
	
	return false; 
}