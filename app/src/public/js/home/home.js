"use strict"

const refreshBtn = document.querySelector("#refresh"),
    idInfo = document.querySelector("input"),
    logoutBtn = document.querySelector("#logout");

    refreshBtn.addEventListener("click",refresh);
    logoutBtn.addEventListener("click",logout);

function refresh() {
    
    const req = {
        idInfo:idInfo.value
    };

    fetch("/refreshToken",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/";
            }
        })

}

function logout() {
    const req = {
        idInfo:idInfo.value
    };

    fetch("/logout",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.logoutSuccess){
                location.href="/login";
            }
        })
}