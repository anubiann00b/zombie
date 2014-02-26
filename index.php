<?php 
include("../includes/class.mysql.php");
$db = new MySQL();
$dupe = $db->query("SELECT * FROM zombie_views WHERE ip='".$db->escape($_SERVER['REMOTE_ADDR'])."'");
if (!mysql_fetch_assoc($dupe)) {
	$proxy = $_SERVER['HTTP_X_FORWARDED_FOR'];
	if (!$proxy) $proxy = null;
	$db->query("INSERT INTO zombie_views (ip,ip_proxy) 
		VALUES (
			'".$db->escape($_SERVER['REMOTE_ADDR'])."',
			'".$db->escape($proxy)."'
		)
	");
}
?>
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
</html>