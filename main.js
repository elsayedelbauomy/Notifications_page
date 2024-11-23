let box = document.querySelectorAll(".box");
let counter = document.getElementById("coutner");
let h3 = document.querySelectorAll("h3")
let count =0; 
box.forEach((e) => {
    if(e.classList.contains("unread")) {
        count++
        let bullet = document.createElement("span");
        bullet.classList.add("bullet");
        let h3 = e.children[1].children[0];
        h3.append(bullet)
        console.log(h3)
    }
})
counter.innerHTML = count

function markAll() {
    box.forEach((e) => {
        if(e.classList.contains("unread")) {
            e.classList.remove("unread");
            counter.innerHTML = 0;
        }
    })
}