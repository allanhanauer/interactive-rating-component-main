const btns = [...document.querySelectorAll(".button")];
console.log(btns);
btns.map((e)=>{
    e.addEventListener("click",()=>{
        e.classList.toggle("select");
    })
})
const btn = document.querySelector("#submit");

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let cont = 0;
    var t = 0;
    btns.map((e,i)=>{
        if((e.classList.contains("select")) == (true)){
            cont +=1;
            t = i;
        };
    })
    if(cont == 1){
        console.log(t);
        const a = document.querySelector(".rating-box");
        const b = document.querySelector(".state-box");
        const c = document.querySelector("#num");
        c.innerText = t+1;
        a.classList.add("none");
        b.classList.remove("none");
    }
})