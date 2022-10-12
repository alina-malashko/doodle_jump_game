const pages = {
    mainPage: {
        id: "main",
        title: "Main",
        render: (className) => {
            return `
            <section class="${className}">
                <h1 class="header">Doodle Jump</h1>
                <div class="platform"></div>
                <div class="doodle"></div>
                <div class="first-pic"></div>
                <div class="second-pic"></div>
                <div class="third-pic"></div>
                <div class="fourth-pic"></div>
                <div class="fifth-pic"></div>
                <a href="#login" class="button login-button">Log in</a>
            </section>
            `;
        }
    },
    loginPage: {
        id: "login",
        title: "Login",
        render: (className) => {
            return `
            <form class="form login-form" id="login-form">
                <h1 class="heading">Log in to save your score:</h1>
                <input id="name" type="text" placeholder="Name">
                <input id="password" type="password" placeholder="Password">
                <p id="warning" class="warning">Inputs can't be empty!</p>
                <p id="reminder" class="warning">You're already signed!</p>
                <p id="reject" class="warning">Name is already taken!</p>
                <p id="signed" class="warning">Congratulations, you're signed!</p>
                <p id="password-warning" class="warning">Password should be not less than 6 symbols!</p>
                <p id="space-warning" class="warning">Forbidden to use space symbol in name or password!</p>
                <a class="button" id="login">Log in</a>
            </form>
            `;
        }
    },
    aboutPage: {
        id: "about",
        title: "About",
        render: (className) => {
            return `
            <section class="${className}">
                <h1 class="heading">About project</h1>
                <p>Hello, my name is Alina Malashko. Welcome to the Doodle jump game. This is my first complete web application and I really want to improve it, so let's make this game better together. Below on that page I have left link to my e-mail, you can write me your impressions and suggestions of any improvements.</p>
                <p>P.S. Try to beat my score :)</p>
                <a href="mailto:alinaa.mal03@gmail.com" title="e-mail" class="email"><img src="img/546394.png"></a>
            </section>
            `;
        }
    },
    scoresPage: {
        id: "scores",
        title: "Scores",
        render: (className) => {
            return `
            <section class="${className}">
                <h1 class="heading">Top 10 players</h1>
                <div class="load"></div>
                <table id="scores" class="scores-table">
                    <thead>
                        <th>Name</th>
                        <th>Score</th>
                    </thead>
                    <tbody id="table"></tbody>
                </table>
            </section>
            `;
        }
    },
    rulesPage: {
        id: "rules",
        title: "Rules",
        render: (className) => {
            return `
            <section class="${className}">
            <h1 class="heading">How to play?</h1>
                <p>Use <img class="arrow-btn" src="img/left-arrow-button-icon.png"> & <img class="arrow-btn" src="img/right-arrow-button-icon.png"> buttons to move left and right.</p>
                <p>Press <img class="spacebar" src="img/space-button-icon.png"> to shoot.</p>
                <p>Swipe to move and double tap the screen to shoot on your smart phone.</p>
                <p>Jump on this: <img src="img/block.png"><img src="img/blue-block.png"></p>
                <p>Avoid: <img src="img/small-monster.png"></p>
            </section>
            `;
        }
    },
    gamePage: {
        id: "game",
        title: "Game",
        render: (className) => {
            return `
            <section class="${className}">
            <h1 class="heading">Tap to start the game!</h1>
            <img src="img/tap.png" class="tap-pic" title="tap to start" id="start">
                <div class="blue-bg">
                    <div id="container" class="container">
                        <div id="score" class="score"></div>
                        <div id="game-over-block" class="game-over-block">
                            <p>Game over!</p>
                            <p>You scored <span id="score-span"></span> points!</p>
                            <a class="button" id="add-score">Add your score</a>
                            <a class="button" id="close" href="#main">Back to menu</a>
                        </div>
                    <form class="form" id="form">
                        <h2>Your name and password:</h2>
                        <input id="name" type="text" placeholder="Name">
                        <input id="password" type="password" placeholder="Password">
                        <p class="note">*Only registered users can add score<p>
                        <p id="warning" class="warning">Inputs can't be empty!</p>
                        <p id="reject" class="warning">Not correct name or password!</p>
                        <a class="button" id="send-data">Send</a>
                        <a class="button" id="close" href="#main">Back to menu</a>
                    </form>
                        <canvas id="canvas"></canvas>
                    </div>
                </div>
            </section>
            `;
        }
    },
    errorPage: {
    id: "error",
    title: "Error",
        render: (className) => {
            return `
            <section class="${className}">
                <h1>Error 404</h1>
                <p>Page not found.</p>
            </section>
            `;
        }
    }
}
