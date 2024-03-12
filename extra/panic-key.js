// Load saved panic configuration if available
var savedConfig = JSON.parse(localStorage.getItem('panicConfig')) || {};
var savedSequence = savedConfig.sequence || '';

document.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();
    var sequenceInput = document.getElementById('sequence').value.toLowerCase() || savedSequence;
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

// Save panic configuration locally
document.getElementById('save-config').addEventListener('click', function() {
    var sequenceInput = document.getElementById('sequence').value.toLowerCase();
    var safePageURLInput = document.getElementById('safe-page-url').value.trim();
    var config = {
        sequence: sequenceInput,
        safePageURL: safePageURLInput
    };
    localStorage.setItem('panicConfig', JSON.stringify(config));
});
