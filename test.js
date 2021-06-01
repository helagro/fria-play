class ObjA{
    variable = 1

    getVariable(){
        return this.variable
    }
}

class ObjB{
    variable = 2

    getObjAVariable(){
        return new ObjA().getVariable()
    }
}

async function getObjAVariable(callback){
    let variable = new ObjB().getObjAVariable()
    callback(variable)
}


console.log(new ObjA().variable)
getObjAVariable((variable) => console.log(variable))
console.log(new ObjB().getObjAVariable())
console.log("Nevermind...")