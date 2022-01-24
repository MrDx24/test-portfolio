const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 200,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu-items a[href*=' + sectionId + ']').classList.add('active-item')
        }else{
            document.querySelector('.menu-items a[href*=' + sectionId + ']').classList.remove('active-item')
        }
    })
}
window.addEventListener('scroll', scrollActive)