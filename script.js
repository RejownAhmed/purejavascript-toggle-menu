let hasSubmenu = document.querySelector(".hasSubmenu");
hasSubmenu.addEventListener("click", menuOpenClose);
function menuOpenClose(e){
    if (e.currentTarget.classList.contains("close")) {
        let ul = e.currentTarget.querySelector("ul");
        ul.style.height = `${ul.scrollHeight}px`;
        e.currentTarget.classList.remove("close");//Remove The Class "close"
        e.currentTarget.classList.add("open");// add the class "open"

        return //Must Return Without It Won't Work
    };
    if (e.currentTarget.classList.contains("open")) {
        e.currentTarget.querySelector("ul").style.height = "0px";
        e.currentTarget.classList.remove("open");
        e.currentTarget.classList.add("close");
        return //Must Return 
    };
}

//Another Way Of Doing This
// let subMenu = el.querySelector("ul");
// let getHeight = subMenu.style.height;
// console.dir(getHeight);
// if (getHeight == '0px' || !getHeight.length) {
//     subMenu.style.height = `${subMenu.scrollHeight}px`;
//     el.classList.remove("close");
//     el.classList.add("open");
// } else{
//     subMenu.style.height = `0px`;
//     el.classList.remove("open");
//     el.classList.add("close");
// }
// this.hasSubmenu.forEach( e => {
//     if (e != el) {
//         //console.log(e);
//         e.classList.remove("open");
//         e.classList.add("close");
//         let otherSubmenu = e.querySelector("ul");
//         otherSubmenu.style.height = `0px`;
//     }
    
// });