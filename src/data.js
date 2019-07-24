

export function Navabar(){
    
const newDiv = document.createElement("div");
newDiv.textContent = "i created this div in javascript suing DOM";
newDiv.style.color = "red"; 
newDiv.style.width = "100px"; 
newDiv.style.height = "100px"; 
document.body.appendChild(newDiv)
}