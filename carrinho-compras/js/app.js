var total = 0;
limpar();

function adicionar(){
    var produto = document.getElementById('produto').value;
    var nomeProduto = produto.split('-')[0];
    var valorProduto = produto.split('R$')[1];

    var quantidadeProduto = document.getElementById('quantidade').value;
    
    var subtotal = quantidadeProduto * valorProduto;

    var carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`

    total += subtotal;

    var valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'RS 0';
}
