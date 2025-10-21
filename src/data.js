/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

const daysEl = document.querySelector("[data-value='days']");

const hoursEl = document.querySelector('[data-value="hours"]');

const minsEl = document.querySelector('[data-value="mins"]');

const secsEl = document.querySelector('[data-value="secs"]');

const targetDate = new Date("Dec 31, 2025, 23:59:59:59")


const id = setInterval(() => {
    const nowDate = new Date()
    const time = targetDate - nowDate;
    if (time <= 0) {
        clearInterval(id)
        daysEl.textContent = "00"
        hoursEl.textContent = "00"
        minsEl.textContent = "00";
        secsEl.textContent = "00";
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minsEl.textContent = mins.toString().padStart(2, "0");
    secsEl.textContent = secs.toString().padStart(2, "0");
}, 1000)