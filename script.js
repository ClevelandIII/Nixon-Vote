function nixon1(){
    alert("Your vote is very important! Please make sure you vote responsibly!")
}

function npage(){
    window.location.href = "nvote.html"
}

nixon.addEventListener("click", npage)

function hpage(){
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

function mpage(){
    window.location.href = "mvote.html"
}

mc.addEventListener("click", mpage)

function spage(){
    window.location.href = "svote.html"
}

schmitz.addEventListener("click", spage)

function mxpage(){
    window.location.href = "mxvote.html"
}

maddox.addEventListener("click", mxpage)

function wpage(){
    window.location.href = "wvote.html"
}

wallace.addEventListener("click", wpage)

function nhover(){
    nixon.style.backgroundColor = "rgb(143, 65, 65)"
}

nixon.addEventListener("mousemove", nhover)

function nhoverout(){
nixon.style.backgroundColor = "rgb(165, 74, 74)"
}

nixon.addEventListener("mouseout", nhoverout)

function mhover(){
    mc.style.backgroundColor = "rgb(65, 73, 143)"
}

mc.addEventListener("mousemove", mhover)

function mhoverout(){
mc.style.backgroundColor = "rgb(74, 83, 163)"
}

mc.addEventListener("mouseout", mhoverout)

function shover(){
    schmitz.style.backgroundColor = "rgb(108, 65, 143)"
}

schmitz.addEventListener("mousemove", shover)

function shoverout(){
    schmitz.style.backgroundColor = "rgb(127, 76, 168)"
}

schmitz.addEventListener("mouseout", shoverout)

function mxhover(){
    maddox.style.backgroundColor = "rgb(108, 65, 143)"
}

maddox.addEventListener("mousemove", mxhover)

function mxhoverout(){
    maddox.style.backgroundColor = "rgb(127, 76, 168)"
}

maddox.addEventListener("mouseout", mxhoverout)

function whover(){
    wallace.style.backgroundColor = "rgb(108, 65, 143)"
}

wallace.addEventListener("mousemove", whover)

function whoverout(){
    wallace.style.backgroundColor = "rgb(127, 76, 168)"
}

wallace.addEventListener("mouseout", whoverout)

function vote(){
    alert("Vote for Nixon")
} 

voting.addEventListener("contextmenu", vote)