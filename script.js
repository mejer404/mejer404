let page = document.qurySelector('.page');
page.classList.add('dark-theme');
let themeButton = document.querSelector('.theme-button');
themeButton.onclock= function() {
    page.classList.toggle('dark-theme');
};
