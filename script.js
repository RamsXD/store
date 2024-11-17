//menu hamburguer
let colun = document.querySelector("#coluna");

function menuClicado() {
     if (colun.style.opacity == "0") {
        colun.style.opacity = "1";
    }else {
        colun.style.opacity = "0";
    }
}

// Carregar itens da lista

const itens = [
    {
        id: 1,
        img: "media/imgs/foto1.jpg",
        nome: "camisa",
        preço: "R$ 10,00",
    },

    {
        id: 2,
        img: "media/imgs/foto1.jpg",
        nome: "calça",
        preço: "R$ 10,00",
    },

    {
        id: 3,
        img: "media/imgs/foto1.jpg",
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
        console.log(val);
    });

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
