let tablinks= document.getElementsByClassName('tabLinks')
let tabcontents= document.getElementsByClassName('tabContents')

function opentab(tabname){
    for(let tablink of tablinks){
     tablink.classList.remove('tabActiveLink')
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('activeTab')
       }
       event.currentTarget.classList.add("tabActiveLink")
       document.getElementById(tabname).classList.add("activeTab")
}


let sideMenu= document.getElementById("sideMenu")
//let closeMenu= document.getElementById("close")

function openMenu(){
    sideMenu.style.right='0'
}

function closeMenu(){
    sideMenu.style.right='-200px'
}



