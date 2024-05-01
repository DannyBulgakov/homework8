//1

function NewDiv(name){
    let div = document.createElement("div");

    let FirstName = document.createElement("p");
    FirstName.id = "FirstName";
    let Border = document.createElement("p");
    Border.id = "Border";

    div.appendChild(FirstName)
    div.appendChild(Border)

    document.body.appendChild(div);

    for(let i =0; i<name.length; i++){
        if(name[i]==" "){
            let var1 = name.substring(0,i);
            FirstName.textContent = var1;
        }
    }
    
}

//2

function Sales(){
    let NumInput = document.getElementById('NumInput');
    let products = [
        ['Pizza','dough with sause and toppings', 38],
        ['Steak','Meat cooked well done', 74],
        ['Burger','beef patty with toppings', 56],
        ['Fries','fried potato sticks', 24],
        ['Sweet potato fries','fried sweet potato sticks', 24],
        ['Ice cream', 'sweet cold dessert', 15],
        ['water', 'drink', 5]
    ]

    for (let i = 0; i < products.length; i++) {
        if(products[i][2] <= Number(NumInput.value)){
            let divElement = document.createElement('div');
            divElement.textContent = products[i];
            document.body.appendChild(divElement);
        }
    }

}

//3

class Drive {
    constructor(name, date, kmDriven) {
        this.name = name;
        this.date = date;
        this.kmDriven = kmDriven;
    }
}

class AllCompanyCars {
    constructor(companyName) {
        this.companyName = companyName;
        this.cars = [];
    }

    createCar(company, model, km, kmDriven, free, name, date) {
        let car = new Car(company, model, km, kmDriven, free, name, date);
        this.cars.push(car);
        return car;
    }
    largestKm(){
            let km1 = myCar1.getTrueKm();
            let km2 = myCar2.getTrueKm();
            if(km1 > km2){
                console.log(myCar1)
            }
            else if(km2 > km1){
                console.log(myCar2)
            }
            else{
                console.log('they are the same')
            }
        }

        available(){
            for(let car of this.cars){
                if(car.free === true){
                    console.log(`Car ${car.name} is available for rent.`)
                }
                else {
                    console.log(`Car ${car.name} is not available for rent.`);
                }
            }
            
        } 

        addNewDrive(carName, kmDriven){
            for(let car of this.cars){
                if(car.name === carName){
                car.kmDriven.push(kmDriven);
                console.log(`Added ${kmDriven} km for car ${carName}.`);
                return;
                }
                
            }

        }


    }


class Car extends Drive {
    constructor(company, model, km, kmDriven, free, name, date) {
        super(name, date, kmDriven);

        this.company = company;
        this.model = model;
        this.free = free;
        this.km = km;
    }

    getTrueKm() {
        return this.km + this.kmDriven.reduce((a, b) => a + b, 0);
    }

    addNewDrive(num) {
        this.kmDriven.push(num);
    
    }
    
    
}

let allCompanyCars = new AllCompanyCars("myCarRental");
let myCar1 = allCompanyCars.createCar('Toyota', 'Camry', 10000, [500, 190, 78], true, 'Ben', '2024-04-29');
let myCar2 = allCompanyCars.createCar('Toyota', 'Yaris', 50000, [500, 190, 78], true, 'Danny', '2024-01-26');
console.log(myCar1);
console.log(myCar2);
console.log(allCompanyCars.createCar('Audi', 'A5', 10000, [500, 190, 78], true, 'gil', '2024-04-29'))
console.log(allCompanyCars.cars)
// console.log(allCompanyCars.available())

// console.log(myCar1.getTrueKm())
// console.log(allCompanyCars.addNewDrive('Ben', 200))
// console.log(myCar1.getTrueKm())
// console.log(myCar2.getTrueKm())
// console.log(allCompanyCars.addNewDrive('Danny', 300))
// console.log(myCar2.getTrueKm())




