document.addEventListener("DOMContentLoaded", function() {
    let photos = [
        'assets/sun_photo.jpg',
        'assets/sky_photo.jpg',
        'assets/mom_photo.jpg',
        'assets/me_photo.jpg']
    
    let texts = [
        'Пусть всегда будет солнце!',
        'Пусть всегда будет небо!',
        'Пусть всегда будет мама!',
        'Пусть всегда буду Я!'
    ]
    let sliderContainer = document.querySelector('.slider-container')
    let sliderPhoto = document.querySelector('.slider__photo')
    let text = document.querySelector('.text')
    let buttons = document.querySelectorAll('.control-button')
    let currentIndex = 0
    

    function changeSlide(index) {
        sliderPhoto.classList.add('hidden')
        text.classList.add('hidden')
        setTimeout(() => {
            sliderContainer.innerHTML = `
        <img src="${photos[index]}" alt=photo__${index} class='slider__photo'>
        `
        text.innerHTML = texts[index]
        sliderPhoto.classList.remove('hidden')
        text.classList.remove('hidden')

        buttons.forEach((button, btnindex) => {
            if(btnindex === index) {
                button.classList.add('active')
            } else {
                button.classList.remove('active')
            }
        }, 1000)
        })
        
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentIndex = index
            changeSlide(currentIndex)
        })
    })
    changeSlide(0)
})