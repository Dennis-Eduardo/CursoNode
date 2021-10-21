function sum(x){
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject("Ta maluco, coloca um numero direito viado")
        }
        setTimeout(() => {
            resolve(x + 5000)
        }, 3000);
    })
}







async function main(){
    try{
        const resultado = await sum('*');       //utiliza AWAIT toda vez que uma função é uma PROMISE
        console.log(`Resultado com Async/Await: ${resultado}`)
    }
    catch(error){
        console.log(`Deu erro: ${error}`)

    }

    
}

main();