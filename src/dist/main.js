"use strict";
function carregarCabecalho() {
  fetch('assents/components/header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.getElementById('header-container');
      headerContainer.innerHTML = data;
      const modal = document.getElementById("modal");
      const showInputButton = document.querySelector('.show-input-button');
      const inputDiv = document.querySelector('.input');
      if (showInputButton && inputDiv) {
        showInputButton.addEventListener('click', () => {
          inputDiv.classList.toggle('active');
        });
      }
      const openModalButton = document.getElementById("open-modal");
      const closeModal = document.querySelector(".close");
      if (openModalButton && modal && closeModal) {
        openModalButton.addEventListener("click", () => modal.style.display = "flex");
        closeModal.addEventListener("click", () => modal.style.display = "none");
        window.addEventListener("click", (event) => {
          if (event.target === modal) modal.style.display = "none";
        });
      }
      document.getElementById("feedback-btn")?.addEventListener("click", () => {
        document.getElementById("feedback-modal").style.display = "block";
      });

      document.querySelector("#close-feedback")?.addEventListener("click", () => {
        document.getElementById("feedback-modal").style.display = "none";
      });

      window.addEventListener("click", (event) => {
        const feedbackModal = document.getElementById("feedback-modal");
        if (event.target === feedbackModal) {
          feedbackModal.style.display = "none";
        }
      });

document.getElementById("open-contato")?.addEventListener("click", () => {
  document.getElementById("modal-contato").style.display = "block";
});

document.getElementById("close-contato")?.addEventListener("click", () => {
  document.getElementById("modal-contato").style.display = "none";
});

window.addEventListener("click", (event) => {
  const modalContato = document.getElementById("modal-contato");
  if (event.target === modalContato) {
    modalContato.style.display = "none";
  }
});

      document.getElementById("feedback-form")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const feedbackText = document.getElementById("feedback-text").value.trim();
        if (feedbackText) {
          console.log("Feedback recebido:", feedbackText);
          alert("Obrigado pelo seu feedback!");
          document.getElementById("feedback-modal").style.display = "none";
        } else {
          alert("Por favor, deixe seu feedback antes de enviar.");
        }
      });
      function filtrarPorDataComemorativa(dataComemorativa) {
        document.querySelectorAll(".departamento").forEach(departamento => {
          const titulo = departamento.querySelector("h2").textContent;
          departamento.style.display = titulo === dataComemorativa ? "block" : "none";
        });
        modal.style.display = "none";
      }

      function adicionarEventosDeFiltro() {
        const botoesFiltro = [
          { id: "filtrar-dia-das-mulheres", titulo: "Dia das Mulheres" },
          { id: "filtrar-pascoa", titulo: "Páscoa" },
          { id: "filtrar-dia-das-maes", titulo: "Dia das Mães" },
          { id: "filtrar-dia-dos-namorados", titulo: "Dia dos Namorados" },
          { id: "filtrar-dia-dos-pais", titulo: "Dia dos Pais" },
          { id: "filtrar-dia-das-criancas", titulo: "Dia das Crianças" }
        ];

        botoesFiltro.forEach(({ id, titulo }) => {
          document.getElementById(id)?.addEventListener("click", () => filtrarPorDataComemorativa(titulo));
        });

        document.getElementById("tirar-filtro")?.addEventListener("click", () => {
          document.querySelectorAll(".departamento").forEach(departamento => {
            departamento.style.display = "block";
          });
          modal.style.display = "none";
        });
      }

      adicionarEventosDeFiltro();
    })
    .catch(error => console.error("Erro ao carregar o cabeçalho:", error));
}

carregarCabecalho();


const produtosPorDepartamento = {
  "Doces": [
        {
      imagem: "/assents/img/Cento-de-Musses.jpeg",
      nome: "Cento de Mousses",
      descricao: "Sabores: Maracujá, Morango, Limão, ou à escolha do cliente.",
      preco: "R$ 140,00"
    },
    {
      imagem: "/assents/img/barra-trufada.jpeg",
      nome: "Barra Trufada",
      descricao: "Sabores: Maracujá, brigadeiro, prestígio, morango, paçoca, amendoim.",
      preco: "R$ 24,00"
    },
    {
      imagem: "/assents/img/brigadeiro-beijinho-cento.jpeg",
      nome: "Cento de brigadeiro ou beijinho.",
      descricao: "",
      preco: "R$ 95,00"
    },
    {
      imagem: "/assents/img/super-trufaa.jpeg",
      nome: "Super Trufa",
      descricao: "Sabores: Maracujá, brigadeiro, prestígio, morango, paçoca, amendoim.",
      preco: "R$ 5,00"
    },
    {
      imagem: "/assents/img/trufa-nutela.jpeg",
      nome: "Super Trufa de Nutella",
      descricao: "",
      preco: "R$ 8,00"
    },
    {
      imagem: "/assents/img/cone-trufado.jpeg",
      nome: "Cone trufado",
      descricao: "Sabores: Maracujá, brigadeiro, prestígio, morango, paçoca, amendoim, oreo.",
      preco: "R$ 9,00"
    },
    {
      imagem: "/assents/img/cone-trufado-nutella.jpeg",
      nome: "Cone trufado de Ninho com Nutella",
      descricao: "",
      preco: "R$ 10,00"
    },
        {
      imagem: "/assents/img/cone-nutella.jpeg",
      nome: "Cone trufado de Nutella pura.",
      descricao: "",
      preco: "R$ 12,00"
    },
    {
      imagem: "/assents/img/sacao-de-bombons.jpeg",
      nome: "Sacão de bombons recheados.",
      descricao: "",
      preco: "R$ 50,00"
    },
        {
      imagem: "/assents/img/saquinho-doces-pequeno.jpeg",
      nome: "Saquinho de bombons recheados.",
      descricao: "",
      preco: "R$ 8,00"
    }
  ],
  "Mousses": [
    {
      imagem: "/assents/img/musse-de-maracuja.jpeg",
      nome: "Mousse de Maracujá.",
      descricao: "",
      preco: "R$ 8,00"
    },
    {
      imagem: "/assents/img/musse-de-limao.jpeg",
      nome: "Mousse de Limão.",
      descricao: "",
      preco: "R$ 8,00"
    }
  ],
  "Páscoa": [
    {
      imagem: "/assents/img/Ceurinha chocolatudo.jpeg",
      nome: "Ceurinha chocolatudo.",
      descricao: "",
      preco: "R$ 17,00"
    },
    {
      imagem: "/assents/img/cenourinha-recheada.jpeg",
      nome: "Ceurinha recheada.",
      descricao: "",
      preco: "R$ 16,00"
    },
    {
      imagem: "/assents/img/coelinho-recheado.jpeg",
      nome: "Coelinho recheado.",
      descricao: "",
      preco: "R$ 15,00"
    },
    {
      imagem: "/assents/img/coelinho-chocolatudo.jpeg",
      nome: "Coelinho chocolatudo.",
      descricao: "",
      preco: "R$ 16,00"
    },
    {
      imagem: "/assents/img/ovo-trufado-500g.jpeg",
      nome: "Ovo trufado - 500g",
      descricao: "Sabores: Maracujá, brigadeiro, prestígio, morango, paçoca, amendoim.",
      preco: "R$ 80,00"
    },

    {
      imagem: "/assents/img/ovo-de-350g.jpeg",
      nome: "Ovo tradicional 350g.",
      descricao: "",
      preco: "R$ 62,00"
    },
    {
      imagem: "/assents/img/ovo-de-250g.jpeg",
      nome: "Ovo tradicional 250g.",
      descricao: "",
      preco: "R$ 48,00"
    },
    {
      imagem: "/assents/img/500g.jpeg",
      nome: "Ovo tradicional 500g.",
      descricao: "",
      preco: "R$ 85,00"
    },
    {
      imagem: "/assents/img/ovo-de-colher.jpeg",
      nome: "Ovo de colher: de 350g à 385g.",
      descricao: "",
      preco: "R$ 83,00"
    },
    {
      imagem: "/assents/img/ovo-raso-recheado.jpeg",
      nome: "Ovo raso trufado.",
      descricao: "",
      preco: "R$ 25,00"
    },
    {
      imagem: "/assents/img/barra-trufada.jpeg",
      nome: "Barra trufada",
      descricao: "Sabores: Maracujá, brigadeiro, prestígio, morango, paçoca, amendoim.",
      preco: "R$ 24,00"
    },
    {
      imagem: "/assents/img/sacao-de-bombons.jpeg",
      nome: "Sacão de bombons recheados.",
      descricao: "",
      preco: "R$ 50,00"
    },
    {
      imagem: "/assents/img/saquinhos-de-bombons.jpeg",
      nome: "Saquinho de bombons recheados.",
      descricao: "",
      preco: "R$ 8,00"
    }
  ],
  "Dia das Mães": [
    {
      imagem: "/assents/img/caneca-mae-branca.jpeg",
      nome: "Caneca de Vidro.",
      descricao: "Com bombons de chocolate nobre.",
      preco: "R$40,00"
    },
        {
      imagem: "/assents/img/caneca-mae-larnaja.jpeg",
      nome: "Caneca de Plástico.",
      descricao: "Com bombons de chocolate nobre.",
      preco: "R$35,00"
    }
  ]

};

function adicionarProdutos() {
  const produtosContainer = document.getElementById('produtos-container');

  for (const departamento in produtosPorDepartamento) {
  
    const section = document.createElement('section');
    section.classList.add('departamento');

    const titulo = document.createElement('h2');
    titulo.textContent = departamento;
    section.appendChild(titulo);

    const produtosDiv = document.createElement('div');
    produtosDiv.classList.add('produtos');

    produtosPorDepartamento[departamento].forEach(produto => {
      const divProduto = document.createElement('div');
      divProduto.classList.add('produto');

      divProduto.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p class="descricao-p">${produto.descricao}</p>
        <span class="preco">${produto.preco}</span>
        <button class="comprar">Comprar</button>
      `;

      produtosDiv.appendChild(divProduto);
    });

    section.appendChild(produtosDiv);
    produtosContainer.appendChild(section);
  }
}

adicionarProdutos();

let precoUnitario = 0;

document.querySelectorAll('.comprar').forEach(botao => {
  botao.addEventListener('click', function () {
    const produto = this.closest('.produto');
    const imagem = produto.querySelector('img').src;
    const nome = produto.querySelector('h3').textContent;
    const preco = produto.querySelector('.preco').textContent;

    document.getElementById('produto-imagem').src = imagem;
    document.getElementById('produto-nome').textContent = nome;
    document.getElementById('quantidade-produtos').value = 1;

    precoUnitario = parseFloat(preco.replace('R$', '').replace(',', '.'));
    atualizarPrecoTotal();

    document.getElementById('modal-compra').style.display = 'flex';
  });
});

document.getElementById('fechar-compra').addEventListener('click', function () {
  document.getElementById('modal-compra').style.display = 'none';
});

document.getElementById('entrega-retirada').addEventListener('change', function () {
  const campoEndereco = document.getElementById('campo-endereco');
  campoEndereco.style.display = this.value === 'entrega' ? 'flex' : 'none';
});

function atualizarPrecoTotal() {
  const quantidade = parseInt(document.getElementById('quantidade-produtos').value) || 1;
  const precoFinal = (precoUnitario * quantidade).toFixed(2).replace('.', ',');
  document.getElementById('produto-preco').textContent = `R$ ${precoFinal}`;
}

document.getElementById('aumentar').addEventListener('click', function () {
  const input = document.getElementById('quantidade-produtos');
  input.value = parseInt(input.value) + 1;
  atualizarPrecoTotal();
});

document.getElementById('diminuir').addEventListener('click', function () {
  const input = document.getElementById('quantidade-produtos');
  input.value = Math.max(1, parseInt(input.value) - 1);
  atualizarPrecoTotal();
});

document.getElementById('quantidade-produtos').addEventListener('input', atualizarPrecoTotal);

document.getElementById('salvar-compra').addEventListener('click', function () {
  const nomeComprador = document.getElementById('nome-comprador').value;
  const nomeProduto = document.getElementById('produto-nome').textContent;
  const formaPagamento = document.getElementById('forma-pagamento').value;
  const tipoEntrega = document.getElementById('entrega-retirada').value;
  const enderecoEntrega = document.getElementById('endereco')?.value || '';
  const numeroEndereco = document.getElementById('numero')?.value || '';
  const quantidade = parseInt(document.getElementById('quantidade-produtos').value);
  const descricao = document.getElementById('descricao-adicional').value;

  if (!nomeComprador || !formaPagamento || !quantidade || (tipoEntrega === 'entrega' && (!enderecoEntrega || !numeroEndereco))) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  const precoTotal = (precoUnitario * quantidade).toFixed(2).replace('.', ',');

  let mensagem = `Olá, eu sou ${nomeComprador}, gostaria de encomendar *${quantidade}* unidade(s) de *${nomeProduto}*.\n`;
  mensagem += `Forma de pagamento: *${formaPagamento}*.\n`;

  if (tipoEntrega === 'entrega') {
    mensagem += `Endereço de entrega: *${enderecoEntrega}, Nº ${numeroEndereco}*\n`;
  } else {
    mensagem += `Retirarei pessoalmente.\n`;
  }

  if (descricao) {
    mensagem += `Descrição adicional: *${descricao}*\n`;
  }

  mensagem += `\n *Seu pedido ficou no total de R$ ${precoTotal}*`;

  const numero = '+5511942918632';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
  document.getElementById('modal-compra').style.display = 'none';
});

