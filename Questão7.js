function imc(p, a){
    peso = p;
    altura = a;
    calculo_imc = peso / Math.pow(altura, 2)

    if(calculo_imc < 18.5){
        return "Baixo peso";
    }
    else if(calculo_imc >= 18.5 && calculo_imc < 25){
        return "Peso normal";
    }
    else if (calculo_imc >= 25 && calculo_imc < 30){
        return "Excesso de peso";
    }
    else if (calculo_imc > 30 && calculo_imc < 35){
        return "Obesidade"
    }
    else{
        return "Obesidade extrema";
    }
}

console.log(imc(1.85,  110.2));
console.log(imc(1.80, 82.6));