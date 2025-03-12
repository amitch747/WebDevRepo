document.getElementById("warningButton").addEventListener("click", function() {
    let warningText = document.getElementById("warningText");

    // Toggle warning display
    if (warningText.classList.contains("flash")) {
        warningText.classList.remove("flash");
        setTimeout(() => {
            warningText.style.visibility = "hidden";
            warningText.style.opacity = "0";
        }, 300); // Small delay before hiding completely
    } else {
        warningText.style.visibility = "visible";
        warningText.style.opacity = "1";
        warningText.classList.add("flash");

        // Automatically stop flashing after 5 seconds
        setTimeout(() => {
            warningText.classList.remove("flash");
            setTimeout(() => {
                warningText.style.visibility = "hidden";
                warningText.style.opacity = "0";
            }, 300);
        }, 5000);
    }
});
