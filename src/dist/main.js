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
      // Função para abrir o modal de feedback
document.getElementById("feedback-btn").addEventListener("click", function () {
  const feedbackModal = document.getElementById("feedback-modal");
  feedbackModal.style.display = "block";
});

// Função para fechar o modal de feedback
document.querySelector(".close-feedback").addEventListener("click", function () {
  const feedbackModal = document.getElementById("feedback-modal");
  feedbackModal.style.display = "none";
});

// Fechar o modal se o usuário clicar fora dele
window.addEventListener("click", function (event) {
  const feedbackModal = document.getElementById("feedback-modal");
  if (event.target === feedbackModal) {
    feedbackModal.style.display = "none";
  }
});

// Função para enviar o feedback (aqui você pode implementar o envio para um servidor, por exemplo)
document.getElementById("feedback-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  const feedbackText = document.getElementById("feedback-text").value;
  if (feedbackText.trim() !== "") {
    console.log("Feedback recebido:", feedbackText); // Aqui você pode fazer algo com o feedback, como enviar para um servidor
    alert("Obrigado pelo seu feedback!");
    document.getElementById("feedback-modal").style.display = "none"; // Fecha o modal após o envio
  } else {
    alert("Por favor, deixe seu feedback antes de enviar.");
  }
});

  // Função para filtrar os departamentos com base na data comemorativa
  function filtrarPorDataComemorativa(dataComemorativa) {
    const departamentos = document.querySelectorAll(".departamento");

    departamentos.forEach(departamento => {
      const titulo = departamento.querySelector("h2").textContent;

      // Exibe o departamento apenas se o título corresponder à data comemorativa
      if (titulo === dataComemorativa) {
        departamento.style.display = "block";
      } else {
        departamento.style.display = "none";
      }
    });

    modal.style.display = "none"; // Fecha o modal após o filtro
  }

  // Evento para filtrar os produtos ao clicar em uma data comemorativa
  const opcaoDiaDasMulheres = document.getElementById("filtrar-dia-das-mulheres");
  if (opcaoDiaDasMulheres) {
    opcaoDiaDasMulheres.addEventListener("click", function () {
      filtrarPorDataComemorativa("Dia das Mulheres");
    });
  }

  const opcaoPascoa = document.getElementById("filtrar-pascoa");
  if (opcaoPascoa) {
    opcaoPascoa.addEventListener("click", function () {
      filtrarPorDataComemorativa("Páscoa");
    });
  }

  const opcaoDiaDasMaes = document.getElementById("filtrar-dia-das-maes");
  if (opcaoDiaDasMaes) {
    opcaoDiaDasMaes.addEventListener("click", function () {
      filtrarPorDataComemorativa("Dia das Mães");
    });
  }

  const opcaoDiaDosNamorados = document.getElementById("filtrar-dia-dos-namorados");
  if (opcaoDiaDosNamorados) {
    opcaoDiaDosNamorados.addEventListener("click", function () {
      filtrarPorDataComemorativa("Dia dos Namorados");
    });
  }

  const opcaoDiaDosPais = document.getElementById("filtrar-dia-dos-pais");
  if (opcaoDiaDosPais) {
    opcaoDiaDosPais.addEventListener("click", function () {
      filtrarPorDataComemorativa("Dia dos Pais");
    });
  }

  const opcaoDiaDasCriancas = document.getElementById("filtrar-dia-das-criancas");
  if (opcaoDiaDasCriancas) {
    opcaoDiaDasCriancas.addEventListener("click", function () {
      filtrarPorDataComemorativa("Dia das Crianças");
    });
  }

  // Evento para remover o filtro ao clicar em "Tirar"
  const opcaoTirar = document.getElementById("tirar-filtro");
  if (opcaoTirar) {
    opcaoTirar.addEventListener("click", function () {
      const departamentos = document.querySelectorAll(".departamento");

      departamentos.forEach(departamento => {
        departamento.style.display = "block"; // Mostra todos os departamentos
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
      imagem: "/assents/img/musse-limao.jpeg",
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
    },
    {
      imagem: "/assents/img/barra trufada.jpeg",
      nome: "barra trufada",
      descricao: "",
      preco: "R$ 24,00"
    },
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

  const numero = '+5511945124322';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
  document.getElementById('modal-compra').style.display = 'none';
});

