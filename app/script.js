var display = document.getElementById('controle_resultado')

function inserir() {

    var adultos = JSON.parse(document.getElementById('adultos').value)
    var crianca = JSON.parse(document.getElementById('criancas').value)
    var horas = JSON.parse(document.getElementById('horas').value)

    var carne = document.getElementById('carne')
    var cerveja = document.getElementById('cerveja')
    var refri = document.getElementById('refri')

    function contar(qtdAd, qtdC) {

        return (adultos * qtdAd) + (crianca * (qtdC * 0.5))

    }

    if ( horas < 6 ) {

        let qtdCarne = (contar(400, 400) / 1000).toFixed(2)

        let qtdCerveja = Math.ceil(contar(1200, 0) / 350)

        let qtdRefri = (contar(1000, 1000) / 1000)

        carne.innerHTML = `${qtdCarne}kg de carne`
        cerveja.innerHTML = `${qtdCerveja} latas de cerveja`
        refri.innerHTML = `${qtdRefri} litros de bebidas`

    } else {

        let qtdCarne = (contar(650, 650) / 1000).toFixed(1)

        let qtdCerveja = Math.ceil(contar(2000, 0) / 350)

        let qtdRefri = (contar(1500, 1500) / 1000)

        carne.innerHTML = `${qtdCarne}kg de carne`
        cerveja.innerHTML = `${qtdCerveja} latas de cerveja`
        refri.innerHTML = `${qtdRefri} litros de bebidas`

    }

    display.style.display = "block"

}

function zerar() {

    display.style.display = "none"
    location.reload()

}