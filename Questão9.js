function media_ponderada(n1, n2){
    const media_semestre = ((n1 * 4) + (n2 * 6)) / 10;

    if(media_semestre >= 90){
        return "A";
    }
    else if(media_semestre < 90 && media_semestre >= 75){
        return "B";
    }
    else if(media_semestre < 75 && media_semestre >= 60){
        return "C";
    }
    else if(media_semestre < 60 && media_semestre >= 40){
        return "D";
    }
    else{
        return "E"
    }
}

console.log(media_ponderada(95, 98));
