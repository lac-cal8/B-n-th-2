// Function to handle the typewriter effect
function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            // Once finished, wait a bit and start the second paragraph if it exists
            setTimeout(callback, 500);
        }
    }
    typing();
}

// This function runs automatically when the page is loaded
window.onload = function() {
    // Check which page we are currently on based on the page title or a specific element
    const pageTitle = document.title;

    if (pageTitle === "First Path") {
        const msg1 = "You chose the first path. It's a journey of peace and discovery.";
        const msg2 = "Take a deep breath and enjoy the tranquility of the blue ocean.";
        
        typeWriter("text-paragraph-1", msg1, 50, function() {
            typeWriter("text-paragraph-2", msg2, 50);
        });

    } else if (pageTitle === "Second Path") {
        const msg1 = "The second path brings you warmth and inspiration. Keep moving forward!";
        const msg2 = "Let the soft pink hues remind you to be kind to yourself today.";
        
        typeWriter("text-paragraph-1", msg1, 50, function() {
            typeWriter("text-paragraph-2", msg2, 50);
        });
    }
};
