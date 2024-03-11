// Listen for input event on the search input field
document.getElementById('gameSearch').addEventListener('input', function() {
    var searchQuery = this.value.trim().toLowerCase(); // Get search query and convert to lowercase
    var gameBoxes = document.querySelectorAll('.game-box'); // Get all game boxes

    // Iterate through each game box
    gameBoxes.forEach(function(box) {
        var gameName = box.querySelector('.game-text').textContent.toLowerCase(); // Get game name associated with the box and convert to lowercase
        // If the game name includes the search query, show the box; otherwise, hide it
        if (gameName.includes(searchQuery)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});
