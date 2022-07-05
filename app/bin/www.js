"use strict";

const app = require("../app");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {//8080 포트로 서버 오픈
    console.log('server start on 8080');
});