	var stats ={
		wins: 0 ,
		loses: 0 ,
		gemPile: 0 ,
		score: 0 ,
		play: true ,
	}
		var	gem1 ={
		value: 0,
		counter: 0,
	}
		var	gem2 ={
		value: 0,
		counter: 0,
	}
		var	gem3 ={
		value: 0,
		counter: 0,
	}
		var	gem4 ={
		value: 0,
		counter: 0,
	}

$(document).ready(function(){

$(".gems").hide();



	function gamestart(){
		stats.gemPile = Math.floor(Math.random() * 120) +19 ;
		gem1.value =  Math.floor(Math.random() * 12) +1 ;
		gem2.value =  Math.floor(Math.random() * 12) +1 ;	
		gem3.value =  Math.floor(Math.random() * 12) +1 ;
		gem4.value =  Math.floor(Math.random() * 12) +1 ;
		stats.score = 0 ;
		gem1.counter = 0 ;
		gem2.counter = 0 ;
		gem3.counter = 0 ;
		gem4.counter = 0 ;
		$("#start").hide();
		$(".gems").show();

	}
	function gamelose(){
		stats.gemPile = 0 ;
		$("#start").show();
		$("#counter1").empty();
		$("#counter2").empty();
		$("#counter3").empty();
		$("#counter4").empty();
		$("#score").empty();
		$(".gems").hide();
	}
	function gameplay(){
		if(stats.gemPile < stats.score){
				stats.loses ++
				$("#loses").empty().append(stats.loses);
				gamelose();
				
			
			}
			if (stats.gemPile === stats.score) {
				stats.wins ++
				
				$("#wins").empty().append(stats.wins);
				gamelose();
				
			}
	}


	$("#start").click(function(){
		gamestart();
		$("#gemValue").empty().append(stats.gemPile);
		console.log(stats.gemPile);
	});

		$("#gem1").click(function(){
			stats.score = stats.score + gem1.value;
			gem1.counter ++ ;
			$("#counter1").empty();
			$("#counter1").append(gem1.counter);
			$("#score").empty().append(stats.score);
			gameplay();
			
		});
		$("#gem2").click(function(){
			stats.score = stats.score + gem2.value;
			gem2.counter ++ ;
			$("#counter2").empty();
			$("#counter2").append(gem2.counter);
			$("#score").empty().append(stats.score);
			gameplay();

			
		});

		$("#gem3").click(function(){
			stats.score = stats.score + gem3.value;
			gem3.counter ++ ;
			$("#counter3").empty();
			$("#counter3").append(gem3.counter);
			$("#score").empty().append(stats.score);
			gameplay();
			
		});
		$("#gem4").click(function(){
			stats.score = stats.score + gem3.value;
			gem4.counter ++ ;
			$("#counter4").empty();
			$("#counter4").append(gem4.counter);
			$("#score").empty().append(stats.score);
			gameplay();
			
		});












});