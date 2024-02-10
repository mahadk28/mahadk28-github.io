document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('loveParagraph').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Maybe you clicked by mistake? Feel free to try again!');
});
