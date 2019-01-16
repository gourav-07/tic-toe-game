$(document).ready(function() {

	$('#comp').on('click',function() {

		let player={
				'pos1':['aa','ab','ac'],
				'pos2':['ba','bb','bc'],
				'pos3':['ca','cb','cc'],
				'pos4':['aa','ba','ca'],
				'pos5':['ab','bb','cb'],
				'pos6':['ac','bc','cc'],
				'pos7':['aa','bb','cc'],
				'pos8':['ca','bb','ac']
			};

		let computer={
				'pos1':['aa','ab','ac'],
				'pos2':['ba','bb','bc'],
				'pos3':['ca','cb','cc'],
				'pos4':['aa','ba','ca'],
				'pos5':['ab','bb','cb'],
				'pos6':['ac','bc','cc'],
				'pos7':['aa','bb','cc'],
				'pos8':['ca','bb','ac']
			};

			$('.symbol').css('display','initial');
			let symP; let symC; let once=true;

			$('#sym1').on('click',function() {
				symP=$(this).text();
				initial();
			});

			$('#sym2').on('click',function() {
				symP=$(this).text();
				initial();
				
			});

			$('.box').on('click',function() {

					$(this).children(".inside").css("display","initial").html(symP);
					let id=$(this).attr('id');
					$(this).off('click');
					playerMove(id,player);
					computerMove(id);
					
			});

			function playerMove(id,player) {
				Object.keys(player).map(function(key) {

					player[key].map(function(val,index) {
							if(id===val) {
								let arr=player[key];
								arr.splice(index,1);
								player[key]=arr;
							}
						});
				});

				console.log('player');
				console.log(player);
			}


			function computerMove(id) {
				
				Object.keys(computer).map(function(key) {

					computer[key].map(function(val,index) {
							if(id===val) {
								let arr=computer[key];
								arr.splice(index,1);
								computer[key]=arr;
							}
						});
				});

				if(id!=='bb' && once) {
					once=false;
					Object.keys(computer).map(function(key) {

						computer[key].map(function(val,index) {

								if('bb'===val) {
									let arr=computer[key];
									arr.splice(index,1);
									computer[key]=arr;
								}
							});
					});

					$('#bb').off('click');
					$('#bb').html(symC);
				} else {
					 
					Object.keys(player).map(function(key) {

						if(player[key].length===1) {

							Object.keys(computer).map(function(key) {

								computer[key].map(function(val,index) {
										if(player[key][0]===val) {
											let cid='#'+player[key][0];

											$(cid).off('click');
											$(cid).html(symC);

												let arr=computer[key];
												arr.splice(index,1);
												computer[key]=arr;
										}
									});
							});

						} 

					});
				}

				console.log('computer');
				console.log(computer);
			}


			function initial() {
				$('.symbol').css('display','none');
					if(symP==='X') {
						symC='O';
					} else {
						symC='X';
					}
			}



	});
















	$('#person').on('click',function() {

	let player1={
		'pos1':['aa','ab','ac'],
		'pos2':['ba','bb','bc'],
		'pos3':['ca','cb','cc'],
		'pos4':['aa','ba','ca'],
		'pos5':['ab','bb','cb'],
		'pos6':['ac','bc','cc'],
		'pos7':['aa','bb','cc'],
		'pos8':['ca','bb','ac']
	};

	let player2={
		'pos1':['aa','ab','ac'],
		'pos2':['ba','bb','bc'],
		'pos3':['ca','cb','cc'],
		'pos4':['aa','ba','ca'],
		'pos5':['ab','bb','cb'],
		'pos6':['ac','bc','cc'],
		'pos7':['aa','bb','cc'],
		'pos8':['ca','bb','ac']
	};

	let turn='player1';
	let playerSym='X';
	let draw=0;
	let dontgo=true;

	$(".message").html(turn+'-turn');

			$('.box').on('click',function() {

				if(playerSym==='X'){
					
					$(this).children(".inside").css("display","initial").html(playerSym);
					let id=$(this).attr('id');
					
					removeId(id,player1,turn);
					$(this).off('click');
					playerSym='O';
					turn='player2';	
					$(".message").html(turn+'-turn');
				} else{
					
					$(this).children(".inside").css("display","initial").html(playerSym);
					let id=$(this).attr('id');
					$(this).off('click');
					removeId(id,player2,turn);
					playerSym='X';
					turn='player1';	
					$(".message").html(turn+'-turn');
				}
				 
			});

			function gameOver(player) {
				 
					alert(player+'won');
				  
				location.reload();
			}

			function removeId(id,player,turn) {
				draw++;
				Object.keys(player).map(function(key) {

					player[key].map(function(val,index) {
							if(id===val) {
								let arr=player[key];
								arr.splice(index,1);
								player[key]=arr;
							}
						})
						 
						if(player[key].length===0) {
							dontgo=false;
							gameOver(turn);
						}   
				});

				if(draw===9 && dontgo) {
					gameOver('no one ');
				}
				
		 		console.log(draw);
			}

		});

});
