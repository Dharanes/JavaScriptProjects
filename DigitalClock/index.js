function updateClock() {
    const now = new Date();
    let hours = now.getHours();

    const meridem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    hours = hours.toString().padStart(2, 0);

    const mins = now.getMinutes().toString().padStart(2, 0);
    const secs = now.getSeconds().toString().padStart(2, 0);
    const time = `${hours}:${mins}:${secs} ${meridem}`;
    document.getElementById("clock").textContent = time;
}


setInterval(updateClock, 1000);