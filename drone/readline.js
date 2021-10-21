const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

r1.question('Qual a melhor marca de Drones?', (answer)=>{
    console.log(`A melhor marca de Drone é: ${answer}`)
        switch(answer){
            case "comando" :
                console.log('Ligando o Drone')
                break;  
            case "takeoff":
                console.log('Decolando drone')    
                break;
            default:
                console.log('Ligue o drone')    
        }
        r1.close()
})