let obj = {
    id: "1",
    name: "Home"
}

obj.name = "Homie" //object item name change

delete obj.id // id delete
// delete obj.name

Object.freeze(obj) //Object Freeze is no change Homes
obj.name = "Homes"

console.log(obj);