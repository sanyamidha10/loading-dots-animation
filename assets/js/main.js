/*=============== ANIMATED DOTS JS ===============*/
const dots = document.querySelector('.loading__dots')

const addAnimate = () =>{
    // Add Animate class
    dots.classList.add('animate')

    setTimeout(() =>{
        // Remove animate class
        dots.classList.remove('animate')

        setTimeout(() =>{
            addAnimate()
        }, 100)

    },2600)
}

addAnimate()