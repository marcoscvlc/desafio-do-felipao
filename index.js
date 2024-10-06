let nome = "Andorinha da Meia-Noite"
let xp = 0 

for(let xp=0; xp<14000; xp+=2000){
    switch(true){
        case xp <= 1000:
            nivel = "Ferro";
            break;
        case xp >= 1001 && xp <= 2000:
            nivel = "Bronze";
            break;
        case xp >= 2001 && xp <= 5000:
            nivel = "prata";
            break;
        case xp >= 5001 && xp <= 7000:
            nivel = "ouro";
            break;
        case xp >= 7001 && xp <= 8000:
            nivel = "platina";
            break;
        case xp >= 8001 && xp <= 9000:
            nivel = "ascendente";
            break;
        case xp >= 9001 && xp <= 10000:
            nivel = "imortal";
            break;    
        default:
            nivel = "Radiante";
    }
console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
console.log('nivel do personagem: ' + xp)
}