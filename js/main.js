const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item')
const addText = document.querySelector('.section-text-more')
const moreBtn = document.querySelector('.btn-section')

let moreText = true;


moreBtn.innerHTML = `<span style="color: white">Czytaj więcej<span>`;

moreBtn.addEventListener('click', () => {
    if(!moreText) {
        addText.classList.add('hide')
        moreText = true;
        moreBtn.innerHTML = `<span style="color: white">Czytaj więcej<span>`;

    } else {
        addText.classList.remove('hide')

        moreText = false;
        moreBtn.innerHTML = `<span style="color: white">Czytaj mniej<span>`;

    }
})


// const handleNav = () => {
//     nav.classList.toggle('nav-mobile--active')
//     navBtn.classList.toggle('open')


//     allNavItems.forEach(item => {
//         item.addEventListener('click', () => {
//             nav.classList.remove('nav-mobile--active')
//             navBtn.classList.remove('open')

//         })
//     })

//     handleNavItemsAnimation();
// }

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav)
