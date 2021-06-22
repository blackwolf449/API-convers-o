var apibit = "https://economia.awesomeapi.com.br/json/last/BTC-BRL,USD-BRL,BRL-USD,EUR-BRL,BRL-EUR,DOGE-BRL,ETH-BRL"
var request = new XMLHttpRequest()
var in_BRL = document.querySelector('.inbr')
var in_BTC = document.querySelector('.inbtc')
var status = "bitcoin"
var valor_doge
var valor_brl
var valor_brlusd
var valor_brleur
var valor_usd
var valor_eur
var valor_eth

request.open('GET', apibit, true)
request.send()
request.onload = function(){
    if(request.readyState == 4 && request.status == 200){
        var response = JSON.parse(request.responseText)
        valor_brl = response.BTCBRL.ask
        valor_usd = response.USDBRL.ask
        valor_brlusd = response.BRLUSD.ask
        valor_eur = response.EURBRL.ask
        valor_brleur = response.BRLEUR.ask
        valor_doge = response.DOGEBRL.ask
        valor_eth = response.ETHBRL.ask
        in_BTC.value = 1
        in_BRL.value = valor_brl
    }
    else{
        document.getElementById('erro').innerHTML = "Algo deu Errado, <br>tente atualizar a pagina"
    }
}

/*funções para o tipo*/
function bitcoin(){
    status = "bitcoin"
    document.querySelector('#bitt').innerHTML = "Bitcoin:"
    in_BTC.value = 1
    in_BRL.value = valor_brl
}
function dolar(){
    status = "dolar"
    document.querySelector('#bitt').innerHTML = "Dolar:"
    in_BTC.value = 1
    in_BRL.value = valor_usd
} 
function euro(){
    status = "euro"
    document.querySelector('#bitt').innerHTML = "Euro:"
    in_BTC.value = 1
    in_BRL.value = valor_eur
}
function dogecoin(){
    status = "dogecoin"
    document.querySelector('#bitt').innerHTML = "Dogecoin:"
    in_BTC.value = 1
    in_BRL.value = valor_doge
}
function ethereum(){
    status = "ethereum"
    document.querySelector('#bitt').innerHTML = "Ethereum:"
    in_BTC.value = 1
    in_BRL.value = valor_eth
}



/*verificação para tipo da moeda*/
    in_BTC.addEventListener('input', function(){
        if(status == "bitcoin"){
            var tt = valor_brl * parseFloat(in_BTC.value)
            in_BRL.value = String(tt.toFixed(2)).replace('NaN', valor_brl)
        }
        else if(status == "dolar"){
            var tt = parseFloat(in_BTC.value) * valor_usd
            in_BRL.value = String(tt.toFixed(2)).replace('NaN', valor_usd)
        }
        else if(status == "euro"){
            var tt = parseFloat(in_BTC.value) * valor_eur
            in_BRL.value = String(tt.toFixed(2)).replace('NaN', valor_eur)
        }
        else if(status == "dogecoin"){
            var tt = parseFloat(in_BTC.value) * valor_doge
            in_BRL.value = String(tt.toFixed(2)).replace('NaN', valor_doge)
        }
        else if(status == "ethereum"){
            var tt = parseFloat(in_BTC.value) * valor_eth
            in_BRL.value = String(tt.toFixed(2)).replace('NaN', valor_eth)
        }
    })

    in_BRL.addEventListener('input', function(){
        if(status == "dolar"){
            var tt = parseFloat(in_BRL.value) * valor_brlusd
            in_BTC.value = String(tt.toFixed(2)).replace('NaN', valor_brlusd)
        }
        else if(status == "euro"){
            var tt = parseFloat(in_BRL.value) * valor_brleur
            in_BTC.value = String(tt.toFixed(2)).replace('NaN', valor_brleur)
        } 
        else{
        }
    })




