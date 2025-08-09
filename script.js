const con=document.querySelector(".container");
let size=16;
function makeGrid(size){
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const square=document.createElement("div");
            square.setAttribute("class","flex-item");
            con.appendChild(square);
            let ratio=500/size;
            square.setAttribute("style",`width: ${ratio}px;height: ${ratio}px;`);
        }
    }
    let items=document.querySelectorAll(".flex-item");
    items.forEach((item)=>{
        item.addEventListener("mouseenter",()=>{
        const first=Math.floor(Math.random()*256);
        const second=Math.floor(Math.random()*256);
        const third=Math.floor(Math.random()*256);
        item.style.backgroundColor=`rgb(${first}, ${second}, ${third})`;
        console.log("hi");
    })
    })
}
makeGrid(size);
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let grid=prompt("Enter no of grid");
    con.innerHTML="";
    if(grid>0 && grid<=100){
        makeGrid(grid);
    }
    else{
        alert("Please enter a valid grid number");
    }
})