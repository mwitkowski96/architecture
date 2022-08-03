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