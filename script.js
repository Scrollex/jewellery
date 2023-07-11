let shopNav=document.querySelector(".nav-bar-item");
shopNav.style.maxHeight="0px"
function shopOver(){
    if (shopNav.style.maxHeight=="0px") {
        shopNav.style.maxHeight="200px"
    }
    else{
        shopNav.style.maxHeight="0px"
    }
}