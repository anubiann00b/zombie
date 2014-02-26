<!DOCTYPE html>
	<head>
		<title>Zombie Map</title>
		<link rel="stylesheet" href="css/zombie.css" />
	</head>
	<body>
		<h1>ZombieScript</h1>
		<h3 id="location"></h3>
		<div id="wrap">
			<div id="stats">
				<div>
					HP: <span id="hp"></span>/<span id="maxHP"></span>
					<div class="health">
						<span id="hp_percent"></span>
					</div>
				</div>
				<div>
					Gold: <span id="gold">0</span>
				</div>
			</div>
			<div id="container"></div>
			<div id="log"></div>
		</div>
		<div id="overlay">
			<div class="modal"></div>
		</div>
		<div id="footer">Follow me on <a href="https://github.com/RUJodan/zombie">GitHub!</a></div>
		<script src="js/battle.js"></script>
		<script src="js/enemy.js"></script>
		<script src="js/elements.js"></script>
		<script src="js/player.js"></script>
		<script src="js/map.js"></script>
	</body>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-48445753-1', 'fooscript.com');
	  ga('send', 'pageview');
	</script>
</html>