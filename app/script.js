var dados = JSON.parse(localStorage.getItem('dados')) || []

function inserir() {

    let adultos = document.getElementById('adultos').value
    let crianca = document.getElementById('criancas').value
    let hora = document.getElementById('horas').value

    let dadosInput = {

        qtdAdultos: adultos,

        qtdCrianca: crianca,

        qtdHora: hora

    }

    dados.push(dadosInput)
    localStorage.setItem('dados', JSON.stringify(dados))
    location.reload()

}

function zerar() {

    localStorage.removeItem('dados')
    location.reload()

}
console.log(dados)
console.log(dados.length)