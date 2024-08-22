
// cabeçalho mudando background ao usar scroll
let header = document.querySelector.header;

function scrollAtivo() {
    menu.classList.toggle('ativo', scrollY > 600)
}

window.addEventListener('scroll', scrollAtivo)