const loginBtn = document.querySelector("#button");
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");

loginBtn.addEventListener("click",login);


function login() {
    if(!id.value) return alert("아이디를 입력하세요");
    if(!psword.value) return alert("비밀번호를 입력하세요");

    const req = {
        id : id.value,
        psword : psword.value,
    };


    fetch("/login",{
        method: "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(req)
    })
    .then((res)=>res.json())
    .then((res) => {
        if(res.success){
            location.href="/";
        }
        else {
                alert(res.msg);
            }
        });
    
};