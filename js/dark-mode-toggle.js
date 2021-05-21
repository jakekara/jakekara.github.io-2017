window.onload = function () {
  const toggleContainer = document.getElementById("dark-mode-toggle-container");
  toggleButton = document.createElement("button");
  toggleButton.setAttribute("id", "dark-mode-toggle");
  toggleContainer.appendChild(toggleButton);

  function systemIsInDarkMode() {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (matched) {
      return true;
    }
    return false;
  }

  function toggleDarkMode() {
    const mode = document.documentElement.getAttribute("data-darkmode");

    // console.log("toggleDarkMode: " + mode);

    if (mode === "true") {
      setDarkMode(false);
    } else if (mode === "false") {
      setDarkMode("true");
    }
  }

  function setDarkMode(val) {
    if (val) {
      toggleButton.innerHTML = "💡"; //"🌕";
      //   toggleButton.style.color = "#fafafa";
      toggleButton.setAttribute("title", "enable light mode");
      document.documentElement.setAttribute("data-darkmode", "true");
    } else {
      toggleButton.innerHTML = "💡"; //"🌑";
      //   toggleButton.style.color = "#222";
      toggleButton.setAttribute("title", "enable dark mode");
      document.documentElement.setAttribute("data-darkmode", "false");
    }
  }

  function unsetDarkMode() {
    document.documentElement.removeAttribute("data-darkmode");
  }

  setDarkMode(systemIsInDarkMode());
  toggleButton.onclick = toggleDarkMode;
};
