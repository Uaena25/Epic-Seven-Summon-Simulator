const summonBtn = document.querySelector('#summon');
const container5 = document.querySelector('#five');
const container4 = document.querySelector('#four');
const container3 = document.querySelector('#three');


const pool5 = ["ambitious-tywin", "apocalypse-ravi", "arbiter-vildred", "blood-moon-haste", "briar-witch-iseria", "dark-corvus", 
"desert-jewel-basar", "faithless-lidica", "fallen-cecilia", "maid-chloe", "martial-artist-ken", "operator-sigret", "remnant-violet",
"ruele-of-light", "sage-baal-sezan", "silver-blade-aramintha", "specter-tenebria", "top-model-luluca"];

const pool4 = ["assassin-cartuja", "assassin-cidd", "assassin-coli", "benevolent-romann", "blaze-dingo", "blood-blade-karin", "celestial-mercedes",
"challenger-dominiel", "champion-zerato", "crescent-moon-rin", "crimson-armin", "fighter-maya", "general-purrgis", "guider-aither", 
"kitty-clarissa", "roaming-warrior-leo", "shadow-rose", "shooting-star-achates", "sinful-angelica", "tempest-surin", "troublemaker-crozet",
"wanderer-silk", "watcher-schuri"];

const pool3 = ["ainos", "arowell", "batisse", "celeste", "church-of-ilryos-axe", "doris", "eaton", "elson", "gunther", "hurado", "lorina", "mirsa",
"gloomyrain", "otillie", "pyllis", "requiemroar", "rikoris", "sonia", "sven", "wanda"];

let addHero = (img, element, rarity) => {
    const newHero = document.createElement('div');
    const newImg = document.createElement('img');
    newImg.src = img;
    if (element == "light") {
        newHero.classList.toggle("light");
    }
    else {
        newHero.classList.toggle("dark");
    }
    newHero.append(newImg);
    switch(rarity) {
        case 5:
            container5.append(newHero);
            break;
        case 4:
            container4.append(newHero);
            break;
        default:
            container3.append(newHero);
    }
}

summonBtn.addEventListener('click', async function () {
    const randNum = Math.random();
    let hero = null;
    let rarity = null;

    if (randNum < 0.025) {
        hero = pool5[Math.floor(Math.random() * pool5.length)];
        rarity = 5;
    }
    else if (randNum >= 0.025 && randNum < 0.3) {
        hero = pool4[Math.floor(Math.random() * pool4.length)];
        rarity = 4;
    }
    else {
        hero = pool3[Math.floor(Math.random() * pool3.length)];
        rarity = 3;
    }

    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get(`https://api.epicsevendb.com/hero/${hero}`, config);
    const img = res.data.results[0].assets.icon;
    const element = res.data.results[0].attribute;

    addHero(img, element, rarity);


    //const res = await axios.get(`https://api.epicsevendb.com/hero/alencia`, config);
    //get hero pool
    //const heroPool = res.data.results
    //console.log(res.data.results);
    // for (let hero of heroPool) {
    //     console.log(hero._id, hero.name);
    // }
})