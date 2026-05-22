const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
    <body style="
    background:#1f4ba5;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Arial;
    ">

    <div style="
    background:white;
    padding:40px;
    border-radius:15px;
    text-align:center;
    width:300px;
    box-shadow:0 0 15px gray;
    ">

    <h1 style="color:green;">Welcome 👋</h1>

    <h2>Sameer Choudhary</h2>

    <p>Computer Engineering</p>

    <a href="/skills">
        <button style="
        padding:10px 20px;
        border:none;
        border-radius:20px;
        background:#1f4ba5;
        color:white;
        cursor:pointer;
        ">
        View My Skills
        </button>
    </a>

    </div>

    </body>
    `);
});

app.get("/skills", (req, res) => {
    res.send(`
    <body style="
    background:#1f4ba5;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Arial;
    ">

    <div style="
    background:white;
    padding:40px;
    border-radius:15px;
    text-align:center;
    width:300px;
    box-shadow:0 0 15px gray;
    ">

    <h1 style="color:green;">My Skills 🚀</h1>

    <p>HTML</p>
    <p>CSS</p>
    <p>JavaScript</p>

    <a href="/">
        <button style="
        padding:10px 20px;
        border:none;
        border-radius:20px;
        background:#1f4ba5;
        color:white;
        cursor:pointer;
        ">
        Back To Home
        </button>
    </a>

    </div>

    </body>
    `);
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});