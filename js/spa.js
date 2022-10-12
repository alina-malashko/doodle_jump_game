const SPA = (function() {
    class ModuleView {
        constructor(pages) {//передается объект с версткой страниц из файла pages.js
            this.menu = document.getElementById("menu");
            this.container = document.getElementById("content");
            this.mainPage = pages.mainPage;
            this.loginPage = pages.loginPage;
            this.aboutPage = pages.aboutPage;
            this.scoresPage = pages.scoresPage;
            this.rulesPage = pages.rulesPage;
            this.gamePage = pages.gamePage;
            this.errorPage = pages.errorPage;
            this.router = {
                main: this.mainPage,
                about: this.aboutPage,
                scores: this.scoresPage,
                rules: this.rulesPage,
                game: this.gamePage,
                login: this.loginPage,
                error: this.errorPage
            };
        }
        updateButtons(currentPage) {//изменение внешнего вида нажатой кнопки меню
            const menuLinks = menu.querySelectorAll(".menu-button");
            const state = `#${currentPage}`;
            for (let link of menuLinks) {
                state === link.getAttribute("href") ? link.classList.add("active") : link.classList.remove("active");
            }
        }
        changePage(hashPageName) {//изменение контента страницы
            let routeName = "main";//по умолчанию главная страница
            if (hashPageName.length > 0) {
                routeName = hashPageName in this.router ? hashPageName : "error";
            }
            window.document.title = this.router[routeName].title;
            this.container.innerHTML = this.router[routeName].render(`${routeName}`);
            this.updateButtons(this.router[routeName].id);
        }
    }

    class ModuleModel {
        constructor(view) {
            this.view = view;
        }
        update(hashPageName) {
            this.view.changePage(hashPageName);
        }
    }

    class ModuleController {
        constructor(model) {
            this.model = model;
            window.addEventListener("hashchange", this.update.bind(this));
            this.update();
        }
        update() {
            const hashPageName = location.hash.slice(1).toLowerCase();
            this.model.update(hashPageName);
        }
    }

    return {
        init: function(pages) {
            const view = new ModuleView(pages);
            const model = new ModuleModel(view);
            const controller = new ModuleController(model);
        }
    }
}());

document.addEventListener("DOMContentLoaded", SPA.init(pages));