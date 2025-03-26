/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat span");
    stats.forEach(stat => {
        stat.style.transform = "scale(0.8)";
        stat.style.opacity = "0";
    });
    setTimeout(() => {
        stats.forEach(stat => {
            stat.style.transition = "all 0.5s ease-in-out";
            stat.style.transform = "scale(1)";
            stat.style.opacity = "1";
        });
    }, 500);

    const counters = [0, 190, 0];
    stats.forEach((stat, index) => {
        let count = 0;
        let max = counters[index];
        let speed = Math.floor(max / 100);
        let interval = setInterval(() => {
            count += speed;
            if (count >= max) {
                count = max;
                clearInterval(interval);
            }
            stat.textContent = (count >= 1000 ? Math.floor(count / 1000) + "k" + "+" : count + "+");
        }, 20);
    });
});