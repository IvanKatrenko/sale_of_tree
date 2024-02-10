const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const timer = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');

    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');

    timerText.textContent = 'Until the end of the sale:';


    timerText.append(timerCount);
    timer.append(timerText);
    document.body.prepend(timer);

    const startTimer = () => {
        const deadline = new Date(2024, 11, 25, 0, 0, 0);
        const now = new Date();
        const timeRemaining = (deadline - now) / 1000;

        const seconds = Math.floor(timeRemaining % 60);

        const minutes = Math.floor(timeRemaining / 60 % 60);

        const hours = Math.floor(timeRemaining / 60 / 60 % 24);

        const days = Math.floor(timeRemaining / 60 / 60 / 24 % 30);

        const s = declOfNum(seconds, ['second', 'seconds', 'seconds'])
        const m = declOfNum(minutes, ['minute', 'minutes', 'minutes'])
        const h = declOfNum(hours, ['hour', 'hours', 'hours'])
        const d = declOfNum(days, ['day', 'days', 'days'])

        timerCount.textContent = ` ${d} ${h} ${m} ${s}`;

        console.log(new Date())
        if (timeRemaining > 0) {
            setTimeout(startTimer, 1000);
        } else {
            timer.remove();
        }
    }
    startTimer();
}

timer();