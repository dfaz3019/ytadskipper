let button = document.createElement("button");

setTimeout(function () {
    const targetDiv = document.querySelector("#top-level-buttons-computed");
    button.textContent = "Skip Ad";
    targetDiv.appendChild(button);
}, 3000)

button.addEventListener("click", function() {
    document.querySelector("video").currentTime = document.querySelector("video").duration;
})