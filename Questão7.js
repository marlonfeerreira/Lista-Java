function imc(a, b){
    let x;
    x = b/(a*a);
    console.log(x);
    if(x<18.5){
        return "Baixo peso";
    }else if(x>=18.5 && x<25){
        return "Peso normal";
    }else if(x>=25 && x<30){
        return "Excesso de peso";
    }else if(x>=30 && x<35){
        return "Obesidade";
    }else if(x>=35){
        return "Obesidade extrema";
    }
}
console.log(imc(1.85, 110.2))
console.log(imc(1.80, 82.6))