function ordenar_3_numeros(number1, number2, number3){
    const numero = [number1, number2, number3];
    function ordenar_descrecente(number1, number2){
        return number2 - number1;
    }
    return numero.sort(ordenar_descrecente);
}

console.log(ordenar_3_numeros(10, 5, 2))