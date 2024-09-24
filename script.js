// cabeçalho mudando background ao usar scroll
let menu = document.getElementById('cabecalho');

function scrollAtivo() {
    menu.classList.toggle("ativo", scrollY > 100);
}
window.addEventListener("scroll", scrollAtivo);

// Carregar itens da lista

const itens = [
    {
        id: 1,
        img: 'media/imgs/foto2.jpg',
        nome: "camisa",
        preço: "R$ 10,00",
    },

    {
        id: 2,
        img: 'media/imgs/foto2.jpg',
        nome: "calça",
        preço: "R$ 10,00",
    },

    {
        id: 3,
        img: 'media/imgs/foto2.jpg',
        nome: "short",
        preço: "R$ 10,00",
    },
];

function iniciarLoja() {
    let containerProdutos = document.querySelector(".vitrine-grupo");
    containerProdutos.innerHTML = "";

    itens.map((val) => {
        let produto = `
            <div class="produto">
                  <img src="${val.img}" alt="">
                  <h2> ${val.nome} </h2>
                  <p> ${val.preço} </p>
            </div>`;
        containerProdutos.innerHTML += produto;
        console.log(val)
    })

    // for (i = 0; i < itens.length; i++) {
    //     let produto = `
    //         <div class="produto">
    //               <img src="${itens[i].img}" alt="">
    //               <h2> ${itens[i].nome} </h2>
    //               <p> ${itens[i].preço} </p>
    //         </div>`;
    //     containerProdutos.innerHTML += produto;
    // }
}

iniciarLoja();
