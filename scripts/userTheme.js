let localStorageTheme = localStorage.getItem("theme");
themeToSet = localStorageTheme;

if (!localStorageTheme) {
    themeToSet = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}
document.documentElement.setAttribute("data-theme", themeToSet);
