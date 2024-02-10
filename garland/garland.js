const garlandInit = () => {

    const link = document.createElement('link');
    link.rel = "stylesheet"
    link.href = "/garland/garland.css"

    const elka = document.createElement('div');
    elka.classList.add('garland-elka');

    const elkaRight = document.createElement('div');
    elkaRight.classList.add('garland-elka', 'garland-elka_right');

    const garland = document.createElement('div');
    garland.className = 'garland garland_1';

    document.head.append(link);
    document.body.append(elka, elkaRight, garland);


    const garlandClasses = ['garland_1', 'garland_2', 'garland_3', 'garland_4'];
    let currentIndex = 0;

    setInterval(() => {
        const prevIndex = currentIndex;
        while (prevIndex === currentIndex) {
            currentIndex = Math.round(Math.random() * (garlandClasses.length - 1))
        }
        garland.className = `garland ${garlandClasses[currentIndex]}`;
    }, 500)
};

garlandInit();