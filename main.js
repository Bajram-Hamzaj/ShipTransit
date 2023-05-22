// Slider 
const imgs = document.getElementById('imgs')
const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')
const img = document.querySelectorAll('#imgs img')

let index = 0

let interval = setInterval(run, 5000)

leftBtn.addEventListener('click', () => {
    index--

    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    index++

    changeImage()
    resetInterval()

})

function run() {
    index++
    changeImage()
}

function changeImage() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * 100}%)`
}

function resetInterval() {
    clearInterval(interval)

    interval = setInterval(run, 5000)
}



// CEO scroll

const CEO = document.querySelectorAll('.CEO__described')

window.addEventListener('scroll', checkCeo)

function checkCeo() {
    const triggerBottom = window.innerHeight / 5 * 4

    CEO.forEach(ceo => {
        const ceoTop = ceo.getBoundingClientRect().top

        if (ceoTop < triggerBottom) {
            ceo.classList.add('show')
        } else {
            ceo.classList.remove('show')
        }
    })
}

// img scroll
const shipImg = document.querySelectorAll('.transit__big-ship')

window.addEventListener('scroll', checkShip)

function checkShip() {
    const triggerBottom = window.innerHeight / 5 * 4

    shipImg.forEach(ship => {
        const shipTop = ship.getBoundingClientRect().top

        if (shipTop < triggerBottom) {
            ship.classList.add('active')
        } else {
            ship.classList.remove('active')
        }
    })
}