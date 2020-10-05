class Cars {
    constructor(brand, model, color, year, price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
    }
}

class Formulary {
    addCar(car) {
        const carlist = document.getElementById('car-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-3">
                <div class="card-body">
                    <strong>Marca</strong>: ${car.brand}
                    <strong>Modelo</strong>: ${car.model}
                    <strong>Color</strong>: ${car.color}
                    <strong>Año</strong>: ${car.year}
                    <strong>precio</strong>: ${car.price}
                    <a class="btn btn-danger" href="#" name="delete">Borrar</a>
                </div>
            </div>
        `;
        carlist.appendChild(element);

        //resetear el formulario

        this.resetForm();
    }

    

    resetForm() {
        document.getElementById('cars-form').reset();
    }

    deleteCar(element) {
        if(element.name === 'delete') {
            //subir 3 veces de nivel, por que "card" tiene 3 padres
            element.parentElement.parentElement.parentElement.remove();
        }
    }

}

//obtener los datos

document.getElementById('cars-form')
    .addEventListener('submit', function(event) {
        const brand = document.getElementById('brand').value;
        const model = document.getElementById('model').value;
        const color = document.getElementById('color').value;
        const year = document.getElementById('year').value;
        const price = document.getElementById('price').value;
        

        const car = new Cars(brand, model, color, year, price);
        
        const ui = new Formulary();
        ui.addCar(car);
        //cancelar el refresh
        event.preventDefault();
});

//llamar a la lista de carros cuando se le haga click para empezar el evento de borrar
document.getElementById('car-list').addEventListener('click', function(event){
    const ui = new Formulary();
    ui.deleteCar(event.target)
});