console.log("hello")



let bar=document.querySelector(".bar1");
let flood=document.querySelector(".flood")

bar.addEventListener("click", () => {
    if (flood.style.display === "none" || flood.style.display === "") {
        flood.style.display = "block";
    } else {
        flood.style.display = "none";
    }
});