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