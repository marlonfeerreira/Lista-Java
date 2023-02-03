function  peso_ideal(a, s){
    const altura = a;
    const sexo = s;
    if (sexo === "m"){
        const peso = (72.7 * altura) - 58; 
        return peso;
    }
    else if (sexo === "f"){
        const peso = (62.1 * altura) -44.7;
        return peso;
    }
    else{
        return "erro";
    }

}

console.log(peso_ideal(1.85, "m"));
console.log(peso_ideal(1.52, "f"));