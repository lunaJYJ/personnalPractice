
var sideTogFlag = true;
var menu = document.getElementById("menu")
var search = document.getElementById("search")
var enter = document.getElementById("enter")
var desc = document.getElementsByClassName("sideDesc");
var icons = document.getElementsByClassName("sideIcons")

enter.addEventListener("click" , function() {
    alert("your click a botton!");
})

menu.addEventListener("click", () =>{ //사이드바 사라짐
    let side = document.getElementsByClassName("sideBar")
    let mainView = document.getElementsByClassName("mainView")
    if(sideTogFlag) {
        side[0].style.display = 'none'
        mainView[0].style.width = '100%';
        sideTogFlag = !sideTogFlag
    }
    else {
        side[0].style.display = 'flex'
        mainView[0].style.width="96.2%"
        sideTogFlag = !sideTogFlag
    }
});


for(let i=0; i<icons.length; i++) { //사이드바 아이콘 클릭시 나타나는 효과
    icons[i].addEventListener("mouseover", function() {
        icons[i].style.backgroundColor= "#404040";
    })
    icons[i].addEventListener("mouseout", function() {
        icons[i].style.backgroundColor= "#202020";
    })
}

for(let i=0; i<icons.length; i++) { //사이드바 아이콘 클릭시 나타나는 효과
    if(i!=0) {
        icons[i].addEventListener("click", function() {
            document.getElementById("homeWrapper").style.visibility="hidden";
        })
    } else if(i===0) {
        icons[i].addEventListener("click", function() {
            document.getElementById("homeWrapper").style.visibility="visible";   
        })
    }
}

for(let i=0; i<desc.length; i++) {
    desc[i].style.fontSize= "8px";
}


