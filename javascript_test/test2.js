let loginDto = {
    username : "ssar",
    password: "1234"
};

// fetch 안에는 이벤트루프
let r1 = fetch({
    url:"http//192.168.0.101/login",
    body: JSON.stringify(loginDto),
    Headers : {
        "Content-Type": "application/json; charset=utf-8"
    }
});

console.log(r1)