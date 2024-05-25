const buttonTag = document.querySelector(".button");
const parentTag = document.querySelector(".parent");

const openTheAlert = ()=>{
    parentTag.innerHTML="";
    const alertTag = document.createElement("div");
    alertTag.append("Your file was successfully uploaded");
    alertTag.classList.add("alert");
    parentTag.append(alertTag);
    
    alertTag.style.bottom = `-${alertTag.offsetHeight}px`
    setTimeout(
        ()=>{
            alertTag.style.bottom = "0px"
        },200
    )
    setTimeout(
        ()=>{
            alertTag.style.bottom = `-${alertTag.offsetHeight}px` 
        },2000
    )
}
buttonTag.addEventListener("click", openTheAlert)