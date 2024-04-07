// let butAlle = document.querySelector(".butalle");
// let butTijger = document.querySelector(".buttijger");
// let butLeeuw = document.querySelector(".butleeuw");
// let butLuipaard = document.querySelector(".butluipaard");

// function filterList(event) {
//     let deLijst = document.querySelector(".alle")
//   let nieuwFilter = event.target.value;
//   deLijst.className = "";
//   deLijst.classList.add(nieuwFilter)
// }

// butAlle.addEventListener("click",filterList)
// butTijger.addEventListener("click",filterList)
// butLeeuw.addEventListener("click",filterList)
// butLuipaard.addEventListener("click",filterList)

// const buttons = document.querySelectorAll('.filter button');

// // Voeg een klikgebeurtenis toe aan elk knop
// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const filterClass = this.classList[0].substring(3); // Krijg de classnaam zonder 'but'

//         // Verberg alle items
//         document.querySelectorAll('.alle li').forEach(item => {
//             item.style.display = 'none';
//         });

//         // Toon alleen items met de overeenkomende klasse
//         if (filterClass === 'alle') {
//             document.querySelectorAll('.alle li').forEach(item => {
//                 item.style.display = 'block';
//             });
//         } else {
//             document.querySelectorAll('.alle .' + filterClass).forEach(item => {
//                 item.style.display = 'block';
//             });
//         }
//     });
// });

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Voeg een veranderingsevenement toe aan elk selectievakje
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        filterList();
    });
});

// Filter de lijst op basis van de geselecteerde selectievakjes
function filterList() {
    const diersoorten = document.querySelectorAll('input[name="diersoort"]:checked');
    const geslachten = document.querySelectorAll('input[name="geslacht"]:checked');

    const items = document.querySelectorAll('.alle li');

    items.forEach(item => {
        const diersoort = item.classList.contains('tijger') ? 'tijger' :
                          item.classList.contains('leeuw') ? 'leeuw' :
                          item.classList.contains('luipaard') ? 'luipaard' :
                          item.classList.contains('spanther') ? 'spanther' : 'alle';

        const geslacht = item.classList.contains('man') ? 'man' :
                         item.classList.contains('vrouw') ? 'vrouw' : 'alle';

        const diersoortMatch = diersoorten.length === 0 || Array.from(diersoorten).some(checkbox => checkbox.value === diersoort);
        const geslachtMatch = geslachten.length === 0 || Array.from(geslachten).some(checkbox => checkbox.value === geslacht);

        if (diersoortMatch && geslachtMatch) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// function sorteerOpLeeftijd() {
//     const items = document.querySelectorAll('.alle li');

//     const gesorteerdeItems = Array.from(items).sort((a, b) => {
//         const leeftijdA = parseInt(a.dataset.leeftijd);
//         const leeftijdB = parseInt(b.dataset.leeftijd);

//         return leeftijdA - leeftijdB;
//     });

//     const lijst = document.querySelector('.alle');

//     gesorteerdeItems.forEach(item => {
//         lijst.appendChild(item);
//     });
// }

// const sorteerBtn = document.getElementById('sorteerOpLeeftijdBtn');
// sorteerBtn.addEventListener('click', sorteerOpLeeftijd);

// Algemene sorteerfunctie op leeftijd
// function sorteerOpLeeftijd(startPositie) {
//     const items = document.querySelectorAll('.alle li');

//     const gesorteerdeItems = Array.from(items).sort((a, b) => {
//         const leeftijdA = parseInt(a.dataset.leeftijd);
//         const leeftijdB = parseInt(b.dataset.leeftijd);

//         if (startPositie === 'jongNaarOud') {
//             return leeftijdA - leeftijdB;
//         } else if (startPositie === 'oudNaarJong') {
//             return leeftijdB - leeftijdA;
//         } else {
//             // Sorteer op relevantie (plaats hier je logica voor relevante sortering)
//             // Bijvoorbeeld: sorteer op basis van de leeftijdsverschil met een referentieleeftijd
//             const referentieLeeftijd = 30; // Voorbeeldreferentieleeftijd
//             const verschilA = Math.abs(leeftijdA - referentieLeeftijd);
//             const verschilB = Math.abs(leeftijdB - referentieLeeftijd);
//             return verschilA - verschilB;
//         }
//     });

//     const lijst = document.querySelector('.alle');

//     // Verwijder bestaande lijstitems
//     lijst.innerHTML = '';

//     // Voeg gesorteerde lijstitems toe aan de lijst
//     gesorteerdeItems.forEach(item => {
//         lijst.appendChild(item);
//     });

//     if (startPositie === "relevant") {
//         shuffleListItems(gesorteerdeItems);
//     }
// }

// // Voeg event listener toe aan het selectievakje
// const startPositieSelect = document.getElementById('startPositieSelect');
// startPositieSelect.addEventListener('change', function() {
//     const selectedOption = startPositieSelect.value;
//     sorteerOpLeeftijd(selectedOption);
// });

// // Sorteer de lijst initieel op basis van de geselecteerde startpositie
// sorteerOpLeeftijd(startPositieSelect.value);

// function shuffleListItems(items) {
//     items.forEach(item => {
//         item.style.order = Math.floor(Math.random() * items.length);
//     });
// }
// Functie om lijstitems te sorteren op leeftijd
function sorteerOpLeeftijd(startPositie) {
    const lijst = document.querySelector('.alle');
    const items = Array.from(document.querySelectorAll('.alle li'));

    // Sorteer de items op basis van de geselecteerde optie
    const gesorteerdeItems = items.sort((a, b) => {
        const leeftijdA = parseInt(a.dataset.leeftijd);
        const leeftijdB = parseInt(b.dataset.leeftijd);

        if (startPositie === 'jongNaarOud') {
            return leeftijdA - leeftijdB;
        } else if (startPositie === 'oudNaarJong') {
            return leeftijdB - leeftijdA;
        } else {
            // Sorteer op relevantie (bijvoorbeeld op basis van leeftijdsverschil met referentieleeftijd)
            const referentieLeeftijd = 30;
            const verschilA = Math.abs(leeftijdA - referentieLeeftijd);
            const verschilB = Math.abs(leeftijdB - referentieLeeftijd);
            return verschilA - verschilB;
        }
    });

    // Leeg de lijst en voeg de gesorteerde items toe
    lijst.innerHTML = '';
    gesorteerdeItems.forEach(item => lijst.appendChild(item));

    // Als de geselecteerde optie 'relevant' is, schud de lijstitems
    if (startPositie === "relevant") {
        shuffleListItems(items);
    }
}

// Functie om lijstitems te schudden
function shuffleListItems(items) {
    const lijst = document.querySelector('.alle');
    lijst.innerHTML = '';
    
    // Maak een willekeurige volgorde van de lijstitems
    const shuffledItems = items.sort(() => Math.random() - 0.5);
    
    // Voeg de geschudde lijstitems toe aan de lijst
    shuffledItems.forEach(item => lijst.appendChild(item));
}

// Eventlistener voor verandering in de selectie van sorteer opties
const startPositieSelect = document.getElementById('startPositieSelect');
startPositieSelect.addEventListener('change', function() {
    const selectedOption = startPositieSelect.value;
    sorteerOpLeeftijd(selectedOption);
});

// Sorteer de lijst initieel op basis van de geselecteerde startpositie
sorteerOpLeeftijd(startPositieSelect.value);

let hamButton = document.querySelector("button")
let hamSection = document.querySelector(".filterensorteren")

let toggle = true;

function TMenu () {
    hamSection.classList.toggle("MenuOpen");
}

hamButton.addEventListener("click", TMenu);

hamSection.addEventListener('keydown', (evt) => {
    if (evt.key == "Tab") {
        if (hamSection.classList.contains("MenuOpen")) {
            setTimeout(function(){ 
                if (hamSection.querySelectorAll(":focus").length == 0) {
                    hamSection.classList.remove("MenuOpen");
                }
            }, 30);
        }
    }
});