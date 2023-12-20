const newButton = document.createElement("button");
const newButtonContainer = document.createElement("div");
const buttonContainer = document.querySelector(".skip-button-container");
newButtonContainer.className = "skip-button-container";
newButton.className = "skip-button";
newButton.textContent = "Skip Ad";

document.addEventListener("yt-navigate-finish", () => {
    if (buttonContainer) {
        buttonContainer.remove();
    }
    const targetDiv = document.querySelector("#owner");
    if (targetDiv) {
        targetDiv.appendChild(newButtonContainer);
        newButtonContainer.appendChild(newButton);
        const skipButton = document.querySelector(".skip-button");
        skipButton.addEventListener("click", skipAd);
    } else {
        console.warn("DIV DOES NOT EXIST");
    }
})

const skipAd = () => {
    document.querySelector("video").currentTime = document.querySelector("video").duration;
    console.log("Event Listener Initialised!")
}