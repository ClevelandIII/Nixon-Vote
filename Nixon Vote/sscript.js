function npage(){
    window.location.href = "nvote.html"
}

nixon.addEventListener("click", npage)

function hpage(){
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

function spage(){
    window.location.href = "nvote.html"
}

schmitzz.addEventListener("click", spage)

function nhover(){
    nixon.style.backgroundColor = "rgb(143, 65, 65)"
}

nixon.addEventListener("mousemove", nhover)

function nhoverout(){
nixon.style.backgroundColor = "rgb(165, 74, 74)"
}

nixon.addEventListener("mouseout", nhoverout)

function shover(){
    schmitzz.style.backgroundColor = "rgb(108, 65, 143)"
}

schmitzz.addEventListener("mousemove", shover)

function shoverout(){
    schmitzz.style.backgroundColor = "rgb(127, 76, 168)"
}

schmitzz.addEventListener("mouseout", shoverout)

function vote(){
    alert("Vote for Nixon")
}

voting.addEventListener("contextmenu", vote)