function npage(){
    window.location.href = "nvote.html"
}

nixon.addEventListener("click", npage)

function hpage(){
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

function mpage(){
    window.location.href = "finalmx.html"
}

maddoxx.addEventListener("click", mpage)

function nhover(){
    nixon.style.backgroundColor = "rgb(143, 65, 65)"
}

nixon.addEventListener("mousemove", nhover)

function nhoverout(){
nixon.style.backgroundColor = "rgb(165, 74, 74)"
}

nixon.addEventListener("mouseout", nhoverout)

function mxhover(){
    maddoxx.style.backgroundColor = "rgb(108, 65, 143)"
}

maddoxx.addEventListener("mousemove", mxhover)

function mxhoverout(){
    maddoxx.style.backgroundColor = "rgb(127, 76, 168)"
}

maddoxx.addEventListener("mouseout", mxhoverout)

function vote(){
    alert("Vote for Nixon")
}

voting.addEventListener("contextmenu", vote)