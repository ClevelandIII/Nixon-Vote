function npage() {
    window.location.href = "nvote.html"
}

nixon.addEventListener("click", npage)

function hpage() {
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

function nhover() {
    nixon.style.backgroundColor = "rgb(143, 65, 65)"
}

nixon.addEventListener("mousemove", nhover)

function nhoverout() {
    nixon.style.backgroundColor = "rgb(165, 74, 74)"
}

nixon.addEventListener("mouseout", nhoverout)

function whover() {
    wallacew.style.backgroundColor = "rgb(108, 65, 143)"
}

wallacew.addEventListener("mousemove", whover)

function whoverout() {
    wallacew.style.backgroundColor = "rgb(127, 76, 168)"
}

wallacew.addEventListener("mouseout", whoverout)

function vote() {
    alert("Vote for Nixon")
}

voting.addEventListener("contextmenu", vote)

function wpage(){
    if(document.getElementById("wallacew").style.cursor = "pointer" && document.getElementById("wallacew").style.cursor != "not-allowed"){
        document.getElementById("wallacew").innerHTML = "<marquee scrollamount='20'> Vote For Nixon <marquee>"
    }
    if(document.getElementById("wallacew").style.cursor = "not-allowed"){
        wallacew.removeEventListener("click", wpage)
    }
}

wallacew.addEventListener("click", wpage)