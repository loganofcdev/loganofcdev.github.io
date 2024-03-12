document.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();
    var sequenceInput = document.getElementById('sequence').value.toLowerCase();
    var safePageURLInput = document.getElementById('safe-page-url').value.trim(); // Trim whitespace
    // Check if the URL starts with "http://" or "https://"
    if (!safePageURLInput.startsWith("http://") && !safePageURLInput.startsWith("https://")) {
        // If it doesn't, prepend "https://"
        safePageURLInput = "https://" + safePageURLInput;
    }

    var currentIndex = sequenceInput.indexOf(key);
    
    if (currentIndex !== -1) {
        var nextIndex = currentIndex + 1;
        if (nextIndex === sequenceInput.length) {
            // Panic sequence detected
            // Perform your panic action here
            window.location.href = safePageURLInput; // Redirect to the user's specified safe page URL
        }
    } else {
        // Reset sequence if the key pressed is not part of the sequence
        currentIndex = 0;
    }
});
