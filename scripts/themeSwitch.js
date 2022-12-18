const switchTheme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-theme"),
        newTheme;
    newTheme = dataTheme === "dark" ? "light" : "dark";

    rootElem.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
};

document.querySelector(".themeSwitcher").addEventListener("click", switchTheme);
