const fs = require('fs')
class Libreria {
    constructor(filename = "files.json"){
        this.id = 0
        this.array = []
        this.filename = filename
        this.init()
    }
    init(){
        let data = fs.readFileSync(this.filename)
        const lista = JSON.parse(data)
        for(const cadaObj of lista){
            this.insert(cadaObj)
        }
    }
    insert(objeto){
        objeto.id = ++this.id
        this.array.push(objeto)

    }
    find(number){
        return this.array.find(e=>e.id == number)
    }
    update(id, objeto){
        const index = this.array.findIndex(e=>e.id == id)
        objeto.id = this.array[index].id
        this.array[index]=objeto
        return objeto
    }
    deleteById(id){
        const newArray = this.array.filter(e=>e.id != id)
        this.array = newArray
    }
}

module.exports = Libreria