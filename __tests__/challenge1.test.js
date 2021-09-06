const {suma}=require("../index")

test("debe pasar 8 si pasamos lor argumentos 6 y 2", ()=>{
    let a = 6
    let b = 2

    let result = suma(a,b)

    expect(result).toBe(8)
})
