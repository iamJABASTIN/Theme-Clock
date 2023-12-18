const hourEl = document.querySelector('.hours')
const secondEl = document.querySelector('.seconds')
const minitueEl = document.querySelector('.minutes')
const dateEl = document.querySelector('.date')
const timeEl = document.querySelector('.time')
const Btn_toggle = document.querySelector('.toggle')

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec" ]

Btn_toggle.addEventListener('click',(e) => {
    const html = document.querySelector('html')
    const text = Btn_toggle.innerText
    html.classList.toggle('dark')
    if(text === "Dark Mode"){
        Btn_toggle.innerText = "Light Mode"
    } else {
        Btn_toggle.innerText = "Dark Mode"
    }
} )

function setTime() {

    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg) `
    minitueEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg) `
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg) `

    timeEl.innerHTML = `${hoursForClock}:${minutes<10 ? `0${minutes}` : minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)