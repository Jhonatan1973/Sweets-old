"use strict";

// Função para carregar o cabeçalho dinamicamente
function carregarCabecalho() {
  fetch('assents/components/header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.getElementById('header-container');
      headerContainer.innerHTML = data;

      // Evento de clique para mostrar/ocultar o menu
      const showInputButton = document.querySelector('.show-input-button');
      const inputDiv = document.querySelector('.input');

      if (showInputButton && inputDiv) {
        showInputButton.addEventListener('click', function () {
          inputDiv.classList.toggle('active');
        });
      }

      // Evento de clique para abrir o modal
      const openModalButton = document.getElementById("open-modal");
      const modal = document.getElementById("modal");
      const closeModal = document.querySelector(".close");

      if (openModalButton && modal && closeModal) {
        openModalButton.addEventListener("click", function () {
          modal.style.display = "flex";
        });

        closeModal.addEventListener("click", function () {
          modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      }
// Evento para filtrar os produtos ao clicar em "Páscoa"
const opcaoPascoa = document.getElementById("filtrar-pascoa");
if (opcaoPascoa) {
  opcaoPascoa.addEventListener("click", function () {
    const departamentos = document.querySelectorAll(".departamento");

    departamentos.forEach(departamento => {
      const titulo = departamento.querySelector("h2").textContent;
      if (titulo === "Páscoa") {
        departamento.style.display = "block";
      } else {
        departamento.style.display = "none";
      }
    });

    modal.style.display = "none"; // Fecha o modal
  });
}

// Evento para remover o filtro ao clicar em "Tirar"
const opcaoTirar = document.getElementById("tirar-filtro");
if (opcaoTirar) {
  opcaoTirar.addEventListener("click", function () {
    const departamentos = document.querySelectorAll(".departamento");

    departamentos.forEach(departamento => {
      departamento.style.display = "block";
    });

    modal.style.display = "none"; // Fecha o modal
  });
}

    })
    .catch(error => console.error("Erro ao carregar o cabeçalho:", error));
}

// Chama a função para carregar o cabeçalho
carregarCabecalho();


// Dados dos produtos organizados por departamento
const produtosPorDepartamento = {
  "Páscoa": [
    {
      imagem: "/assents/img/Ceurinha chocolatudo.jpeg",
      nome: "Ceurinha chocolatudo",
      descricao: "",
      preco: "R$ 16,00"
    },
    {
      imagem: "/assents/img/cenourinha recheada.jpeg",
      nome: "Ceurinha recheada",
      descricao: "",
      preco: "R$ 17,00"
    },
    {
      imagem: "/assents/img/coelinho chocolatudo.jpeg",
      nome: "Coelinho chocolatudo",
      descricao: "",
      preco: "R$ 16,00"
    },
    {
      imagem: "/assents/img/ovo trufado.jpeg",
      nome: "Ovo trufado - 500g",
      descricao: "",
      preco: "R$ 80,00"
    },
    {
      imagem: "/assents/img/coelinho recheado.jpeg",
      nome: "Coelinho chocolatudo",
      descricao: "",
      preco: "R$ 16,00"
    },
    {
      imagem: "/assents/img/barra trufada.jpeg",
      nome: "barra trufada",
      descricao: "",
      preco: "R$ 24,00"
    },
    {
      imagem: "/assents/img/ovo-350g.jpeg",
      nome: "Ovo tradicional meio amargo ou ao leite - 350g",
      descricao: "",
      preco: "R$ 62,00"
    },
    {
      imagem: "/assents/img/ovo-250g.jpeg",
      nome: "Ovo tradicional meio amargo ou ao leite - 250g",
      descricao: "",
      preco: "R$ 48,00"
    },
    {
      imagem: "/assents/img/ovo-500g.jpeg",
      nome: "Ovo tradicional meio amargo ou ao leite - 500g",
      descricao: "",
      preco: "R$ 85,00"
    },
    {
      imagem: "/assents/img/ovo-colher-350g.jpeg",
      nome: "Ovo de colher: de 350g à 385g",
      descricao: "",
      preco: "R$ 83,00"
    },
    {
      imagem: "/assents/img/ovo-raso.jpeg",
      nome: "Ovo raso trufado ao leite ou meio amargo",
      descricao: "",
      preco: "R$ 22,00"
    },
  ],
  "Mousses": [
    {
      imagem: "/assents/img/WhatsApp Image 2025-03-12 at 17.33.19.jpeg",
      nome: "Mousse de Maracujá",
      descricao: "Um delicioso mousse de Maracujá com chocolate nobre por cima.",
      preco: "R$ 8,00"
    },
    {
      imagem: "/assents/img/shutterstock-1949230144-1-1-.jpg",
      nome: "Mousse de Limão",
      descricao: "Mousse de limão com raspas das frutas por cima.",
      preco: "R$ 8,00"
    }
  ],
  "Bombons": [
    {
      imagem: "/assents/img/bombom.jpg",
      nome: "Bombom Trufado",
      descricao: "Chocolate recheado com ganache especial.",
      preco: "R$ 3,00"
    }
  ],
  "Cones": [
    {
      imagem: "/assents/img/cone.jpg",
      nome: "Cone de Chocolate",
      descricao: "Cone crocante recheado com brigadeiro gourmet.",
      preco: "R$ 6,00"
    }
  ]
};

// Função para adicionar os produtos por departamento
function adicionarProdutos() {
  const produtosContainer = document.getElementById('produtos-container');

  for (const departamento in produtosPorDepartamento) {
    // Criando a seção do departamento
    const section = document.createElement('section');
    section.classList.add('departamento');

    // Criando o título do departamento
    const titulo = document.createElement('h2');
    titulo.textContent = departamento;
    section.appendChild(titulo);

    // Criando o container dos produtos
    const produtosDiv = document.createElement('div');
    produtosDiv.classList.add('produtos');

    produtosPorDepartamento[departamento].forEach(produto => {
      const divProduto = document.createElement('div');
      divProduto.classList.add('produto');

      divProduto.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="preco">${produto.preco}</span>
        <button class="comprar">Comprar</button>
      `;

      produtosDiv.appendChild(divProduto);
    });

    section.appendChild(produtosDiv);
    produtosContainer.appendChild(section);
  }
}

// Chama a função para adicionar os produtos organizados
adicionarProdutos();
document.querySelectorAll('.comprar').forEach(botao => {
  botao.addEventListener('click', function () {
    const produto = this.closest('.produto');
    const imagem = produto.querySelector('img').src;
    const nome = produto.querySelector('h3').textContent;
    const preco = produto.querySelector('.preco').textContent;

    document.getElementById('produto-imagem').src = imagem;
    document.getElementById('produto-nome').textContent = nome;
    document.getElementById('produto-preco').textContent = preco;

    document.getElementById('modal-compra').style.display = 'flex';
  });
});

// Botão para fechar o modal
document.getElementById('fechar-compra').addEventListener('click', function () {
  document.getElementById('modal-compra').style.display = 'none';
});

// Mostrar ou esconder o campo de endereço dependendo da escolha (Entrega ou Retirada)
document.getElementById('entrega-retirada').addEventListener('change', function () {
  const campoEndereco = document.getElementById('campo-endereco');
  if (this.value === 'entrega') {
    campoEndereco.style.display = 'block';
  } else {
    campoEndereco.style.display = 'none';
  }
});

// Botão salvar
document.getElementById('salvar-compra').addEventListener('click', function () {
  const nomeComprador = document.getElementById('nome-comprador').value;
  const nomeProduto = document.getElementById('produto-nome').textContent;
  const formaPagamento = document.getElementById('forma-pagamento').value;
  const tipoEntrega = document.getElementById('entrega-retirada').value;
  const dataEntrega = document.getElementById('data-entrega') ? document.getElementById('data-entrega').value : null;
  const enderecoEntrega = document.getElementById('endereco') ? document.getElementById('endereco').value : null;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!nomeComprador || !dataEntrega || (tipoEntrega === 'entrega' && !enderecoEntrega)) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Monta a mensagem que será enviada pelo WhatsApp
  let mensagem = `Olá, eu sou ${nomeComprador}, gostaria de encomendar o produto *${nomeProduto}*, a forma de pagamento será *${formaPagamento}* e a data de entrega seria *${dataEntrega}*.\n`;
  
  if (tipoEntrega === 'entrega') {
    mensagem += `Endereço de entrega: *${enderecoEntrega}*`;
  } else {
    mensagem += `Opção de retirada selecionada.`;
  }

  const mensagemEncoded = encodeURIComponent(mensagem);

  // Número do WhatsApp (com código do país)
  const numeroWhatsapp = '+5511945124322';
  const urlWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${mensagemEncoded}`;

  // Redireciona para o WhatsApp com a mensagem
  window.open(urlWhatsApp, '_blank');

  // Fecha o modal
  document.getElementById('modal-compra').style.display = 'none';
});
