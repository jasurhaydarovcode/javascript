let API = [
    {
        id: 1,
        name: 'A',
        price: 100
    },
    {
        id: 2,
        name: 'B',
        price: 200
    },
    {
        id: 3,
        name: 'C',
        price: 100
    },
    {
        id: 4,
        name: 'D',
        price: 100
    },
]

// Dot Notation
console.log(API[0].name);
console.log(API[1].name);

// Bracet Notation
console.log(API[2]["name"]);
console.log(API[3]["name"]);

let result = API.map((item) => {
    return (
        document.write(item.id)
    )
})