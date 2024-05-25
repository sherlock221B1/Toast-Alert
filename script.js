const buttonTag = document.querySelector(".button");
const parentTag = document.querySelector(".parent");

const openTheAlert = ()=>{
    const alertTag = document.createElement("div");
    alertTag.append("Your file was successfully uploaded");
    alertTag.classList.add("alert");
    parentTag.append(alertTag);

}
buttonTag.addEventListener("click", openTheAlert)