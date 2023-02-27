console.log('funguju!');


const clocks = [
    {
        hours: 10,
        minutes: 34,
    },
    {
        hours: 12,
        minutes: 45,
    },
    {
        hours: 19,
        minutes: 8,
    },
    {
        hours: 10,
        minutes: 0,
    },
    {
        hours: 12,
        minutes: 34,
    },
]

const Clock = (props)  => {
    const {hours, minutes} = props
    const paddedHours = String(hours).padStart(2,'0');
    const paddedMinutes = String(minutes).padStart(2,'0')

    return `
    <div class="clock">
        <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
    </div>
    `
}

const renderClock = (clocks) => {
    const timeApp = document.querySelector('#app');

    timeApp.innerHTML = clocks.map((clock) => Clock({hours: clock.hours, minutes: clock.minutes})).join('');
}

renderClock(clocks)



