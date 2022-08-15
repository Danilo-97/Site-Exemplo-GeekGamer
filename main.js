/* abre e fecha o menu quando clicar no icone hamburger e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item no menu esconder menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der o  scroll*/
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //Scroll maior a altura do header+
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*News carrosel slider swiper*/
const swiper = new Swiper('.swiper', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView:2,
      setWrapperSize:true
    }
  }
})

/*Scrollreaveal: Montra elementos na pagina de acordo com o scroll */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 400,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #News header, #News .News,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*============back-to-top=============*/
function backToTop(){
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Menu ativo conforme a seção na pagina*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
   const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections ){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']' )
      .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']' )
      .classList.remove('active')
    }
  }
}


/*When Scroll*/
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
}) 

