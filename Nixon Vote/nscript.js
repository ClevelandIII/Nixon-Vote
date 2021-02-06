let votes = 1
console.log(`You voted for Nixon ${votes} time`)

function nixon1(){
    alert("Your vote is very important! Please make sure you vote responsibly!")
}

function npage(){
    for(i = 0; i < 100; i++){
        votes++
    }
    console.log(`You voted for Nixon ${votes} times`)
}

nixon.addEventListener("click", npage)

function hpage(){
    window.location.href = "index.html"
}

title.addEventListener("click", hpage)

function nhover(){
    nixon.style.backgroundColor = "rgb(143, 65, 65)"
}

nixon.addEventListener("mousemove", nhover)

function nhoverout(){
nixon.style.backgroundColor = "rgb(165, 74, 74)"
}

nixon.addEventListener("mouseout", nhoverout)

function vote(){
    alert("Vote for Nixon")
}

voting.addEventListener("contextmenu", vote)