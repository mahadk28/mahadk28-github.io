<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Kitty Valentine's Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="startScreen" class="screen">
        <h1>Do you want to be my girlfriend, Zoya?</h1>
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
    </div>

    <div id="gameContainer" class="screen" style="display:none;">
        <h2>Help Hello Kitty find her friends!</h2>
        <div id="memoryGameContainer"></div>
        <button id="completeGames">Complete Games</button>
    </div>

    <div id="loveExpressionContainer" class="screen" style="display:none;">
        <h2>Express your love!</h2>
        <textarea id="loveMessage" rows="4" cols="50"></textarea>
        <button id="submitLove">Submit Love</button>
    </div>
</body>
<script src="script.js"></script>
</html>
