const bar = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")

bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu");
})




function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

const currentDaySpan = document.getElementById("current-day");


const today = new Date();


const day = today.getDay();


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


currentDaySpan.textContent = daysOfWeek[day];
