const signInButton = document.getElementById("signInButton");
        const signInSound = document.getElementById("signInSound");

        // Event listener to play the sound when the "Sign In" button is clicked
        signInButton.addEventListener("click", () => {
            signInSound.play(); // Play the audio
        });