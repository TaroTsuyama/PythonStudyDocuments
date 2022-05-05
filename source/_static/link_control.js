window.addEventListener("load", func=()=>{
    const external_links = document.querySelectorAll("a.external");
    for(let i=0; i<external_links.length; i++){
        external_links[i].setAttribute("target", "_blank");
        external_links[i].setAttribute("rel", "noopener noreferrer");
    }
});