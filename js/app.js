const app = (function() {

    class AppView {
        constructor(container) {
            this.container = document.getElementById(container);
        }
        warning() {//предупреждение о пустых инпутах
            const warning = document.getElementById("warning");
            warning.style.display = "block";
            const reject = document.getElementById("reject");//может быть видимо только одно предупреждение за раз, поэтому остальные скрываем
            reject.style.display = "none";
            const passwordWarning = document.getElementById("password-warning");//напоминание есть на странице с регистрацией и нет в форме после окончания игры
            if (passwordWarning) {//проверка на наличие напоминания на странице и скрытие его
                passwordWarning.style.display = "none";
            }
            const spaceWarning = document.getElementById("space-warning");//напоминание есть на странице с регистрацией и нет в форме после окончания игры
            if (spaceWarning) {//проверка на наличие напоминания на странице и скрытие его
                spaceWarning.style.display = "none";
            }
            const reminder = document.getElementById("reminder");//напоминание есть на странице с регистрацией и нет в форме после окончания игры
            if (reminder) {//проверка на наличие напоминания на странице и скрытие его
                reminder.style.display = "none";
            }
        }
        reminder() {//напоминание о том, что пользователь зарегистрирован
            const reminder = document.getElementById("reminder");
            reminder.style.display = "block";
            const warning = document.getElementById("warning");//может быть только одно предупреждение за раз, остальные прячем
            warning.style.display = "none";
            const reject = document.getElementById("reject");
            reject.style.display = "none";
            const passwordWarning = document.getElementById("password-warning");
            passwordWarning.style.display = "none";
            const spaceWarning = document.getElementById("space-warning");
            spaceWarning.style.display = "none";
        }
        rejectName() {//предупреждение о том, что имя уже занято
            const reject = document.getElementById("reject");
            reject.style.display = "block";
            const warning = document.getElementById("warning");//может быть только одно предупреждение за раз, остальные прячем
            warning.style.display = "none";
            const reminder = document.getElementById("reminder");
            reminder.style.display = "none";
            const passwordWarning = document.getElementById("password-warning");
            passwordWarning.style.display = "none";
            const spaceWarning = document.getElementById("space-warning");
            spaceWarning.style.display = "none";
        }
        shortPasswordWarning() {//предупреждение о длине пароля
            const passwordWarning = document.getElementById("password-warning");
            passwordWarning.style.display = "block";
            const reminder = document.getElementById("reminder");//может быть только одно предупреждение за раз, остальные прячем
            reminder.style.display = "none";
            const warning = document.getElementById("warning");
            warning.style.display = "none";
            const reject = document.getElementById("reject");
            reject.style.display = "none";
            const spaceWarning = document.getElementById("space-warning");
            spaceWarning.style.display = "none";
        }
        spaceWarning() {//предупреждение о недопустимости пробелов
            const spaceWarning = document.getElementById("space-warning");
            spaceWarning.style.display = "block";
            const reminder = document.getElementById("reminder");//может быть только одно предупреждение за раз, остальные прячем
            reminder.style.display = "none";
            const warning = document.getElementById("warning");
            warning.style.display = "none";
            const reject = document.getElementById("reject");
            reject.style.display = "none";
            const passwordWarning = document.getElementById("password-warning");
            passwordWarning.style.display = "none";
        }
        signed() {//уведомление об успешной регистрации
            const signed = document.getElementById("signed");
            signed.style.display = "block";
            const reject = document.getElementById("reject");//может быть только одно предупреждение за раз, остальные прячем
            reject.style.display = "none";
            const warning = document.getElementById("warning");
            warning.style.display = "none";
            const reminder = document.getElementById("reminder");
            reminder.style.display = "none";
            const passwordWarning = document.getElementById("password-warning");
            passwordWarning.style.display = "none";
            const spaceWarning = document.getElementById("space-warning");
            spaceWarning.style.display = "none";
        }
        buildTable(obj) {// строим tbody и заполняем данными об игроке
            const table = document.getElementById("table");
            if (table) {
                const tr = document.createElement("tr");
                table.append(tr);
                const tdName = document.createElement("td");
                tr.append(tdName);
                tdName.textContent = obj["login"];
                const tdScore = document.createElement("td");
                tr.append(tdScore);
                tdScore.textContent = obj["score"];
            }
        }
        init() {//подготовка к инициализации игры: прячем меню и добавляем фон
            const background = document.querySelector(".blue-bg");
            const menu = document.getElementById("menu");
            menu.style.display = "none";
            background.style.display = "block";
        }
        showForm() {//форма для обновления счета
            const form = document.getElementById("form");
            form.style.display = "block";
            const gameOverDiv = document.getElementById("game-over-block");
            gameOverDiv.style.display = "none";
        }
        toMenu() {//возврат на главную, меню снова видно
            const menu = document.getElementById("menu");
            menu.style.display = "block";
        }
        reject() {//предупреждение о неверном логине или пароле
            const reject = document.getElementById("reject");
            reject.style.display = "block";
            const warning = document.getElementById("warning");//может быть только одно предупреждение за раз, остальные прячем
            warning.style.display = "none";
        }
        load() {//анимация загрузки данных с сервера
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            const container = document.querySelector(".load");
            svg.setAttributeNS(null, "width", "90");
            svg.setAttributeNS(null, "height", "50");
            container.append(svg);
            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttributeNS(null, "cx", "12");
            circle.setAttributeNS(null, "cy", "30");
            circle.setAttributeNS(null, "r", "12");
            circle.setAttributeNS(null, "fill", "#82BF56");
            svg.append(circle);
            let animate = document.createElementNS(svgNS, "animate");
            animate.setAttributeNS(null, "attributeName", "opacity");
            animate.setAttributeNS(null, "attributeType", "XML");
            animate.setAttributeNS(null, "dur", "1s");
            animate.setAttributeNS(null, "values", "0;1;0");
            animate.setAttributeNS(null, "repeatCount", "indefinite");
            animate.setAttributeNS(null, "begin", "0.1");
            circle.append(animate);
            const secondCircle = document.createElementNS(svgNS, "circle");
            secondCircle.setAttributeNS(null, "cx", "44");
            secondCircle.setAttributeNS(null, "cy", "30");
            secondCircle.setAttributeNS(null, "r", "12");
            secondCircle.setAttributeNS(null, "fill", "#82BF56");
            svg.append(secondCircle);
            let secondAnimate = document.createElementNS(svgNS, "animate");
            secondAnimate.setAttributeNS(null, "attributeName", "opacity");
            secondAnimate.setAttributeNS(null, "attributeType", "XML");
            secondAnimate.setAttributeNS(null, "dur", "1s");
            secondAnimate.setAttributeNS(null, "values", "0;1;0");
            secondAnimate.setAttributeNS(null, "repeatCount", "indefinite");
            secondAnimate.setAttributeNS(null, "begin", "0.2");
            secondCircle.append(secondAnimate);
            const thirdCircle = document.createElementNS(svgNS, "circle");
            thirdCircle.setAttributeNS(null, "cx", "76");
            thirdCircle.setAttributeNS(null, "cy", "30");
            thirdCircle.setAttributeNS(null, "r", "12");
            thirdCircle.setAttributeNS(null, "fill", "#82BF56");
            svg.append(thirdCircle);
            let thirdAnimate = document.createElementNS(svgNS, "animate");
            thirdAnimate.setAttributeNS(null, "attributeName", "opacity");
            thirdAnimate.setAttributeNS(null, "attributeType", "XML");
            thirdAnimate.setAttributeNS(null, "dur", "1s");
            thirdAnimate.setAttributeNS(null, "values", "0;1;0");
            thirdAnimate.setAttributeNS(null, "repeatCount", "indefinite");
            thirdAnimate.setAttributeNS(null, "begin", "0.3");
            thirdCircle.append(thirdAnimate);
            setTimeout(() => {
                container.removeChild(svg);
                const table = document.getElementById("scores");
                if (table) {
                    table.style.display = "table";//показываем таблицу рекордов через 600 мс
                }
            }, 600);
        }
        showMenu() {
            const menu = document.getElementById("menu");//произойдет возврат на главную, меню должно снова стать видимо
            menu.style.display = "block";
            const background = document.querySelector(".blue-bg");
            background.style.display = "none";
        }
    }

    class AppModel {
        constructor(view) {
            this.view = view;
            this.newInfoFromServer;
            this.updatePassword;
            this.ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
            this.stringName = "MALASHKO_ALINA_DOODLE_JUMP_SCORES";
            this.array = [];
        }
        insertNewData() {//метод добавления новой строки, используется один раз и был оставлен в классе для демонстрации
            let sp = new URLSearchParams();
            sp.append("f", "INSERT");
            sp.append("n", this.stringName);
            sp.append("v", JSON.stringify(this.array));//можно сразу передать на сервер массив данных
            fetch(this.ajaxHandlerScript, {method: "post", body: sp})
            .then(response => response.json())
            .then(data => {
                data.result === "OK"?alert("Данные ушли на сервер"):alert("Строка на сервере может быть только одна");
            })
            .catch(error => console.error(error));
        }
        read() {//чтение данных, которые хранятся на сервере
            let sp = new URLSearchParams();
            sp.append("f", "READ");
            sp.append("n", this.stringName);
            fetch(this.ajaxHandlerScript, {method: "post", body: sp})
            .then(response => response.json())
            .then(data => {
                const dataItems = JSON.parse(data.result);
                this.newInfoFromServer = dataItems;//сохраняем полученные данные
            })
            .catch(error => console.error(error));
        }
        logIn(name, userPassword) {
            if (name === "" || userPassword === "") {
                this.view.warning();//предупреждение о пустых инпутах
                return;
            }
            if (userPassword.length < 6) {
                this.view.shortPasswordWarning();//предупреждение о длине пароля
                return;
            } else if (userPassword.includes(" ") || name.includes(" ")) {
                this.view.spaceWarning();//предупреждение о пробелах
                return;
            } else {
                for (let i = 0; i < this.newInfoFromServer.length; i++) {//сравнение значений инпутов с данными с сервера
                    let obj = this.newInfoFromServer[i];
                    if (obj.login == name && obj.password == userPassword) {//введенный логин и пароль уже существуют
                        this.view.reminder();//напоминание о том, что пользователь уже зарегистрирован
                        return;
                    }
                    if (obj.login == name && obj.password !== userPassword) {//попытка использовать занятое имя
                        this.view.rejectName();//предупреждение о том, что имя уже используется (все пользователи должны иметь уникальное имя)
                        return;
                    }
                }
                this.sendToServer(name, userPassword, 0);//новый пользователь еще не имеет рекорда, по умолчанию количество очков будет 0
                this.view.signed();//уведомление об успешной регистрации
            }
        }
        sendToServer(name, userPassword, userScore) {
            let infoObj = {login: name, password: userPassword, score: userScore};//создаем объект с данными игрока
            this.newInfoFromServer.push(infoObj);//добавляем в массив
            this.storeInfo();//обновляем данные сервера
        }
        storeInfo() {//планирование изменения данных сервера
            this.updatePassword = Math.random();//генерация пароля
            let sp = new URLSearchParams();
            sp.append("f","LOCKGET");//блокировка изменения строки  для последующего изменения
            sp.append("n", this.stringName);
            sp.append("p", this.updatePassword);
            fetch(this.ajaxHandlerScript, {method: "post", body: sp})
            .then(response => response.json())
            .then(data => {
                if (data) {
                    this.lockGetReady();//изменение заблокированной строки
                }
            })
            .catch(error => console.error(error));
        }
        lockGetReady() {
            let newInfoToServer = this.newInfoFromServer;
            let sp = new URLSearchParams();
            sp.append("f","UPDATE");
            sp.append("n", this.stringName);
            sp.append("p", this.updatePassword);//пароль, указанный при команде lockget
            sp.append("v", JSON.stringify(newInfoToServer));//обновленный массив с игроками
            fetch(this.ajaxHandlerScript, {method: "post", body: sp})
            .then(response => response.json());
        }
        load() {//загрузка перед построением таблицы
            this.view.load();
        }
        buildTable() {
            this.newInfoFromServer.sort((a, b) => (b["score"] - a["score"]));//сортируем игроков начиная от лучшего
            for (let i = 0; i < this.newInfoFromServer.length; i++) {
                if (i >= 10) {//в таблице будет 10 лучших
                    return;
                } else if (this.newInfoFromServer[i]["score"] == 0) {//игроки, которые еще не играли не должны попасть в таблицу
                    return;
                } else {
                    this.view.buildTable(this.newInfoFromServer[i]);
                }
            }
        }
        start(container) {//блокировка изменения ориентации экрана и инициализация игры
            const orientation = screen.orientation.type.startsWith("landscape") ? "portrait" : "portrait";
            this.lock("portrait");
            this.view.init();
            game.init(container);
        }
        lock(orientation) {//включение полноэкранного режима и блокировка изменения ориентации экрана
            let de = document.documentElement;
            if (de.requestFullscreen) {
                de.requestFullscreen();
            } else if (de.mozRequestFullscreen) {
                de.mozRequestFullscreen();
            } else if (de.webkitRequestFullscreen) {
                de.webkitRequestFullscreen();
            } else if (de.msRequestFullscreen) {
                de.msRequestFullscreen();
            }
            //код для мобильных устройств, потому что на компьютере будет ошибка в консоли при попытке заблокировать экран
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                screen.orientation.lock(orientation);
            }
        }
        showForm() {//форма добавление рекорда после игры
            this.view.showForm();
        }
        toMenu() {//уход на главную
            this.unlock("portrait");
            this.view.toMenu();
        }
        unlock(orientation) {//при уходе на главную нужно разблокировать экран и выйти из полноэкранного режима
            screen.orientation.unlock(orientation);
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullscreen) {
                document.mozCancelFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        sendScoreToServer(userName, userPassword, userScore) {//обновление счета после игры
            if (userName === "" || userPassword === "") {
                this.view.warning();//предупреждение о пустых инпутах
            } else {
                this.newInfoFromServer.forEach(obj => {//сравнение логина и пароля с данными сервера
                    if (obj.login == userName && obj.password == userPassword) {//если такой пользователь найден, то обновляем его рекорд
                        obj.score = userScore;
                        this.storeInfo();
                        this.view.showMenu();//произойдет возврат на главную, меню должно снова стать видимо
                        this.unlock("portrait");//выход из полноэкранного режима
                    }
                    if (obj.login == userName && obj.password !== userPassword || obj.login !== userName && obj.password !== userPassword || obj.login !== userName && obj.password == userPassword) {
                        this.view.reject();//неверно введен логин или пароль
                    }
                });
            }
        }
    }

    class AppController {
        constructor(container, model) {
            this.container = document.getElementById(container);
            this.model = model;
            this.addEventListeners();
        }
        addEventListeners() {
            this.container.addEventListener("click", (event) => {
                if (event.target && event.target.id === "login") {
                    const nameInput = document.getElementById("name");
                    const passwordInput = document.getElementById("password");
                    const name = nameInput.value;
                    const password = passwordInput.value;
                    this.model.logIn(name, password);//передача значений инпутов в модель
                }
            });
            if (window.location.hash == "#scores") {//если пользователь на странице с таблицей рекордов
                this.model.read();
                this.model.load();//загрузка пока читаются данные 
                setTimeout(() => {
                    this.model.buildTable();
                },500);
            }
            window.addEventListener("hashchange", (event) => {
                const menu = document.getElementById("menu");//меню снова должно появиться на экране при уходе из игровой страницы
                menu.style.display = "block";
                const table = document.getElementById("table");
                if (table) {//если пользователь перешел на страницу с рекордами
                    this.model.read();
                    this.model.load();
                    setTimeout(() => {
                        this.model.buildTable();
                    },500);
                }
            });
            this.container.addEventListener("click", (event) => {
                if (event.target && event.target.id === "start") {
                    this.model.start(container);//старт игры
                }
            });
            this.container.addEventListener("click", (event) => {
                if (event.target && event.target.id === "close") {
                    this.model.toMenu();//уход на главную
                }
            });
            this.container.addEventListener("click", (event) => {
                if (event.target && event.target.id === "add-score") {
                    this.model.showForm();//показать форму добавления рекорда
                }
            });
            this.container.addEventListener("click", (event) => {
                if (event.target && event.target.id === "send-data") {
                    const nameInput = document.getElementById("name");
                    const passwordInput = document.getElementById("password");
                    let scoreDiv = document.getElementById("score-span");
                    let score = scoreDiv.textContent;
                    let userScore = score;
                    let userName = nameInput.value;
                    let userPassword = passwordInput.value;
                    this.model.sendScoreToServer(userName, userPassword, userScore);//передать значение инпутов и рекорд в модель
                }
            });
        }
    }
    return {
        init: function(container) {
            const myView = new AppView(container);
            const myModel = new AppModel(myView);
            const myController = new AppController(container, myModel);
            //при добавлении новой строки нужно раскомментировать
            //myModel.insertNewData();
            myModel.read();//чтение данных с сервера при загрузке приложения
        }
    }
}());

document.addEventListener("DOMContentLoaded", app.init("content"));