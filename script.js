let page = document.qurySelector('.page');
let themeButton = document.querSelector('.theme-button');
themeButton.onclock= function() {
    page.classList.toggle('dark-theme');
};
