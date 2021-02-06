let nixonVote = 0

function hpage(){
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

field.onclick = function(event){
    //find the window relative field coordinates
    let fieldCoords = this.getBoundingClientRect();
    console.log(field.clientTop)
    //clientTop means border
    let ballCoords = {
        top: Math.random()*700,
        left: Math.random()*1100
    }
    console.log(ballCoords)

    ball.style.left = ballCoords.left+'px'
    ball.style.top = ballCoords.top+'px'

    nixonVote++
    console.log(nixonVote)

    if(nixonVote >= 10)
    window.location.href = "nvote.html"
}

function vote(){
    alert("Vote for Nixon")
}

voting.addEventListener("contextmenu", vote)