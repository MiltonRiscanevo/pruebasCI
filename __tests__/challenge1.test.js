const {suma, resta}=require("../index")

test("debe pasar 8 si pasamos lor argumentos 6 y 2", ()=>{
    let a = 6
    let b = 2

    let result = suma(a,b)

    expect(result).toBe(8)
})

test("debe pasar 4 si pasamos lor argumentos 8 y 4", ()=>{
    let a = 8
    let b = 4

    let result = resta(a,b)

    expect(result).toBe(4)
})
