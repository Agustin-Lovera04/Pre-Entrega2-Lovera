//CONTROLADOR STOCK

//LISTA ARTICULOS
let articulos = [
    {nombre: "botines", id: 1, categoria: "calzado",  origen: "EE.UU",stock: 20},
    {nombre: "vendas", id: 2, categoria: "accesorios", origen: "argentina",stock: 0},
    {nombre: "medias", id: 3, categoria: "indumentaria", origen: "argentina",stock: 6,},
    {nombre: "cintas", id: 4, categoria: "accesorios", origen: "argentina",stock: 2},
    {nombre: "calsas", id: 5, categoria: "indumentaria", origen: "argentina",stock: 0},
    {nombre: "shorts", id: 6, categoria:"indumentaria", origen: "argentina",stock: 105},
    {nombre: "camiseta", id: 7, categoria: "indumentaria",  origen: "argentina",stock: 17},
    {nombre: "protector bucal", id: 8, categoria: "accesorios", origen: "argentina",stock: 200,},
    {nombre: "botines-kaizen", id: 9, categoria: "calzado", origen: "EE.UU",stock: 5},
    {nombre: "botines-kakari", id: 10, categoria: "calzado", origen: "EE.UU",stock: 0},
    {nombre: "botines-borussia", id: 11, categoria: "calzado", origen: "EE.UU",stock: 10},
    {nombre: "botines-tempo", id: 12, categoria: "calzado", origen: "EE.UU",stock: 25},
    {nombre: "botines-cr7", id: 13, categoria: "calzado", origen: "EE.UU",stock: 0},
    {nombre: "botines-m10", id: 14, categoria: "calzado", origen: "EE.UU",stock: 2},
    {nombre: "casco", id: 15, categoria: "accesorios", origen: "argentina",stock: 30},
    {nombre: "tapones acero", id: 16, categoria: "accesorios", origen: "argentina",stock: 250},
    {nombre: "bolsos", id: 17, categoria: "accesorios", origen: "argentina",stock: 0},
    {nombre: "termica", id: 18, categoria: "indumentaria", origen: "argentina",stock: 1},
    {nombre: "cubre-oreja", id: 19, categoria: "accesorios", origen: "argentina",stock: 32},
]

//FUNCIONES GRALES
function listar(arrayL) {
    let lista = "NOMBRE - CATEGORIA - ID - ORIGEN\n"
    arrayL.forEach(articulo => {
      lista = lista + articulo.nombre + " - " +  articulo.categoria + " - "  + articulo.id + " - " + articulo.origen + "\n"
    })
    return lista
  }

function avisoStock(articulo){
    if((articulo.stock === 0)) {
        return ("- NO TENES MAS STOCK. COMPRAR!")
} else if (articulo.stock > 0 && articulo.stock <= 15) {
    return ("- QUEDAN POCAS UNIDADES COMPRAR!")
} else if (articulo.stock > 16 && articulo.stock < 50) {
    return ("- BUENA CANTIDAD DE STOCK!")
} else {
    return ("- QUEDAN MUCHAS UNIDADES, VENDER!")
}

}

function controlStock(arrCont) {
    let control = "NOMBRE - STOCK - ADVERTENCIA\n"
    arrCont.forEach((articulo) => {
        control = control + articulo.nombre + " - " + articulo.stock + avisoStock(articulo) + "\n"
    }
    )
    return control
}

function op3(){
    let categoria
    let articulosFiltrados
    do {
    categoria = prompt("Seleccione Categoria:\nCalzado\nAccesorios\nIndumentaria")
    articulosFiltrados = articulos.filter(articulo => articulo.categoria == categoria.toLowerCase());if(articulosFiltrados.length > 0){alert(controlStock(articulosFiltrados))}
    else{alert("CATEGORIA INVALIDA")}
    } while (categoria === "")  
}

function op4(){
    let busqId
    let articulosBuscados
    do {
    busqId = Number(prompt("Escriba ID del articulo"))
    if (articulosBuscados = articulos.find(articulo => articulo.id === busqId)) {alert  (articulosBuscados.nombre)}
    else{alert("ID INVALIDA")}
    
    } while (busqId === "")
}

//MENSAJE BIENVENIDA
let msj = "-------LA CASA DEL RUGBY---------\nBienvenido/a, es un gusto tenerte aqui!\n1 - Ver Articulos\n2 - Control Stock\n3 - Filtrar por Categoria\n4 - Seleccionar con nombre\n0 - SALIR"


let opcion
function vistaUS(){
do {
    opcion = Number(prompt(msj))
    if(opcion === 1){
        alert( listar(articulos))
    }else if(opcion === 2){
        alert( controlStock(articulos))
    }else if(opcion === 3){
        op3()
    }else if(opcion === 4) {
        op4()
    }
} while (opcion !== 0)
}
vistaUS()