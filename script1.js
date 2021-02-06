function npage(){
    window.location.href = "nvote.html"
}

nixon.addEventListener("click", npage)

function hpage(){
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

function mcpage(){
    window.location.href = "final.html"
}

mcok.addEventListener("click", mcpage)

function nhover(){
    nixon.style.backgroundColor = "rgb(143, 65, 65)"
}

nixon.addEventListener("mousemove", nhover)

function nhoverout(){
nixon.style.backgroundColor = "rgb(165, 74, 74)"
}

nixon.addEventListener("mouseout", nhoverout)

function mhover(){
    mcok.style.backgroundColor = "rgb(65, 73, 143)"
}

mcok.addEventListener("mousemove", mhover)

function mhoverout(){
mcok.style.backgroundColor = "rgb(74, 83, 163)"
}

mcok.addEventListener("mouseout", mhoverout)

function vote(){
    alert("Vote for Nixon")
}

voting.addEventListener("contextmenu", vote)