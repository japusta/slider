const UpBtn = document.querySelector('.up-button')
const DownBtn = document.querySelector('.down-button')

let ActiveSlideInd = 0

const container = document.querySelector('.container')
 
const sidebar = document.querySelector('.sidebar')

const mainslide = document.querySelector('.main-slide')

const SlidesCount = mainslide.querySelectorAll('div').length

sidebar.style.top =`-${(SlidesCount-1)*100}vh`

UpBtn.addEventListener('click', () => {
    ChangeSlide('up')
})

DownBtn.addEventListener('click', () => {
    ChangeSlide('down')
})

function ChangeSlide(dir){
    const height = container.clientHeight

    if(dir === 'up'){
        ActiveSlideInd++
        if(ActiveSlideInd === SlidesCount){
            ActiveSlideInd = 0
        }
    }
    else if(dir === 'down'){
        ActiveSlideInd--
        if(ActiveSlideInd < 0 ){
            ActiveSlideInd = SlidesCount - 1
        }
    }

    mainslide.style.transform = `translateY(-${ActiveSlideInd*height}px)`
    sidebar.style.transform = `translateY(${ActiveSlideInd*height}px)`
}