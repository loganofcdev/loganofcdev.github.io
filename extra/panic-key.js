        document.addEventListener('keydown', function(event) {
            var key = event.key.toLowerCase();
            var sequence = '`';
            var currentIndex = sequence.indexOf(key);
            
            if (currentIndex !== -1) {
                var nextIndex = currentIndex + 1;
                if (nextIndex === sequence.length) {
                    // Panic sequence detected
                    // Perform your panic action here
                    window.location.href = 'https://classroom.google.com/'; // Change 'safe-page.html' to your safe page URL
                }
            } else {
                // Reset sequence if the key pressed is not part of the sequence
                currentIndex = 0;
            }
        });
