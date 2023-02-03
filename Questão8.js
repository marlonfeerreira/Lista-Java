function preco_final(pr, pa){
    if(pa == 1){
        let total = pr (pr * 0.15);
        return total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
    else if(pa == 2){
        let total = pr - (pr * 0.10);
        return total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
    else if(pa == 3){
        let total = pr - (pr * 0.05);
        return total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
    else if(pa == 4){
        let total = pr;
        return total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
}

console.log(preco_final(100, 1));
console.log(preco_final(100, 2));