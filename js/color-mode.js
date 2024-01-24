// Define Dom elements
const toggleButton = document.querySelector("#toggle-button")

const root = document.querySelector(":root")

const storageKey = "color-mode"

const defaultMode = "light-mode"

function loadColorMode() {
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
updateToggleButton()
}

loadColorMode();

toggleButton.addEventListener("click", () => {
const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode"
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(currentMode)
    localStorage.setItem(storageKey, currentMode)
    updateToggleButton();
    
}) 



function updateToggleButton() {
 toggleButton.style.backgroundImage = root.classList.contains('dark-mode') ? "var(--moon)" : "var(--sun)"
}

