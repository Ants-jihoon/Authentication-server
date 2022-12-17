const regiBtn = document.querySelector("#button"),
    id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmpsword = document.querySelector("#confirm-psword");

    regiBtn.addEventListener("click",register);

    function register() {
        if(!id.value) return alert("아이디를 입력하세요");
        if(!name.value) return alert("이름을 입력하세요");
        if(!psword.value) return alert("비밀번호를 입력하세요");
        if(psword.value !== confirmpsword.value) return alert("비밀번호를 확인해주세요");

        const req = {
            id : id.value,
            name : name.value,
            psword : psword.value,
        }

        fetch("/register",{
            method : "POST",
            header :{
                "Conent-Type" : "application/json",
            },
            body : JSON.stringify(req)
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/login";
            }
            else {
                alert(res.msg);
            }
        })

    }
