let button = document.createElement("button");
let buttonContainer = document.createElement("div");
const skipButton = document.querySelector(".skip-button")

buttonContainer.className = "skip-button-container";
button.className = "skip-button";
button.textContent = "Skip Ad";

document.addEventListener('yt-navigate-start', function () {
    setTimeout(() => {
        const targetDiv = document.querySelector("#owner");
        if (targetDiv) {
            targetDiv.appendChild(buttonContainer);
            buttonContainer.appendChild(button);
        } else {
            console.warn("DIV DOES NOT EXIST");
        }
    }, 1500);
})

skipButton.addEventListener('click', () => {
    document.querySelector("video").currentTime = document.querySelector("video").duration;
})