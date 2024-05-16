const InputBill = document.getElementById("input__bill")
const InputNumberPeople = document.getElementById("input__number__people")
const ButtomPorcentagem = document.querySelectorAll(".Btn__porcentagem")
const spanGorjeta = document.getElementById("gorgeta__span")
const spanTotal = document.getElementById("total__span")
const ButtonReset = document.getElementById("Button__reset")

let tip = null;
let ValorConta = null;

function gerarConta() {
    ValorConta = parseFloat(InputBill.value);
    console.log(ValorConta)
    ButtomPorcentagem.forEach(Porcento => {
        Porcento.addEventListener('click', (e) => {
            tip = e.target;
            console.log(tip)
        })
    })

    const Total = (ValorConta + tip)
    console.log(Total)
}

gerarConta();

ButtonReset.addEventListener('click', () => {
    gerarConta();
})

/* Span Total */
spanTotal.addEventListener('input', () => {
    spanTotal.textContent = ValorConta;
})