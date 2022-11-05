// clase que representa a una persona y su informacion

class person{
    name = "";
    email = "";
    age = 15;
    resume = "";
    id = 0;
    static total = 0;   //propiedad estatita, no se repite solo se puede usar como unica variable, es para contar el numero de personas que tengo
    

    constructor (name, email, age, resume){ //metodo especial de una clase para inicializar o crear un objeto
        //el constructor sirve para inicializar los valores o autenticarlos
        this.name = name.toUpperCase();
        this.email = email.toLowerCase();
        this.age = (age<18)?18:age;
        this.resume = resume;
        person.total++; //la propiedad estatica son datos almacenados en una clase, solo existen mediante la calse
        this.id = person.total;
    }//constructor

    printInfo(div){    
        //console.log(this.name, this.email, this.age, this.resume);  //metodo para imprimir la informacion de la persona
        div.innerHTML +=`<div id="card_${this.id}" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.id}.-${this.name}</div>
        <div class="card-body">
          <h5 class="card-title">${this.email}</h5>
          <p class="card-text">${this.resume}</p>
          <p class="card-text"><em>${this.age}</em></p>
        </div>
      </div>
      `
    }

    static printTotal = function(div){//metodo printTotal para imprimir alerta con el numero de personas
        div.innerHTML += `<div class="alert alert-success" role="alert">
        Son ${person.total} personas
      </div>`
    }

}//class person

class employee extends person{  //a la clase employee se le extienden las propiedades y metodos de la clase person
    department ="";
    salary = 0.0;
    constructor(name, email, age, resume, department, salary){
      super(name,email,age, resume);  //se manda a llamar el constructor de laparte  de arriba de la clase person
      this.department = department; // se manda a llamar esta propiedad
      this.salary = salary;
    }

    printInfo(div){
      super.printInfo(div);
      let cardBody = document.getElementById(`card_${this.id}`).getElementsByClassName("card-body")[0]
      cardBody.insertAdjacentHTML("beforeend", `<p class="card-text">Department: ${this.department}</p>`)
      cardBody.insertAdjacentHTML("beforeend", `<p class="card-text">Salary: <strong>$ ${this.calculaSalary()}</strong></p>`);  //para tarer en la pantalla el departamento
    }//funcion imprimir

    calculaSalary(){
            return((this.salary * 21)*1.16).toFixed(2);
    }//calcular salario
}//class employee

class manager extends employee{
    numberOfEmployee = 0;
    bonus = 0.0;
    constructor(name, email, age, resume, department, salary, numberOfEmployee, bonus){
        super(name, email, age, resume,department, salary);
        this.numberOfEmployee = numberOfEmployee;
        this.bonus = bonus;
    }//contructor

    printInfo(div){
      super.printInfo(div);
      let cardBody = document.getElementById(`card_${this.id}`).getElementsByClassName("card-body")[0]
      cardBody.insertAdjacentHTML("beforeend", `<p class="card-text">Number of employee: ${this.numberOfEmployee}</p>`)
      cardBody.insertAdjacentHTML("beforeend", `<p class="card-text">Bonus: <strong>$ ${this.bonus}</strong></p>`);  //para tarer en la pantalla el departamento
    }//funcion imprimir

    calcularSalary(){
        return (parseFloat(super.calculaSalary()) + (this.numberOfEmployee*this.bonus)).toFixed(2);
    }
}//class manager

console.log(person.total);  //saber cuantas personas tengo al inicio
let divCard = document.getElementById("divCard");
let divAlert = document.getElementById("divAlert");
let divTotal = document.getElementById("divTotal");
let payroll = [];

payroll.push(new employee("Alam", "alam@hotmail.com", 23, "Alam Undefined", "Soporte", 350.78));
payroll.push(new person("Mafer", "mafer@yahoo.com", 21, "Mafer Developer"));
payroll.push(new person("Nohemi", "nohemi@yahoo.com", 21, "Nohemi Java full stack"));
payroll.push(new manager("Rubi", "hola@gmail.com", 25, "CEO", "ALL", 2500, 25, 1500));

payroll.forEach(e =>{
  e.printInfo(divCard);
})

/* let alam = new employee("Alam", "alam@hotmail.com", 23, "Alam Undefined", "Soporte", 350.78);    //se mandan a llamar el constructor con el nombre de la clase
let mafer = new person("Mafer", "mafer@yahoo.com", 21, "Mafer Developer");    //es una forma mas facil de crear los objetos y mandarlos a llamar
                                                                    //se crea el objeto alam, se manda a llamar el consturctor con new, y con el nombre de la clase
let nohemi = new person("Nohemi", "nohemi@yahoo.com", 21, "Nohemi Java full stack");
let byan = new manager("Rubi", "hola@gmail.com", 25, "CEO", "ALL", 2500, 25, 1500);
 */
/* alam.printInfo(divCard);   //se automatiza el proceso de imprimir los datos, sin tener que llamar uno por uno
mafer.printInfo(divCard);
nohemi.printInfo(divCard);
byan.printInfo(divCard);
console.log(person.total); */ //cuantas personas tengo al final
person.printTotal(divAlert); //se manda a llamar la funcion

//se creo la clase
//se creo el constructor
// se crearon los objetos
//se crea la funcion imprimir y se coloca el innerHTML con la pantilla de bootstrap
// se le pone el parametro div en la funcion para que sea a el que se le guarde la informacion de innerHTML
//el parametro div de la funcion es el que se manda a traer con getElementById de HTML, para que se coloque la informacion en pantalla 
//en la plantilla de bootstrap se colocan las propiedades de la clase
//se crea el div con el id = "divCard" para acomdarlos en linea por la clase row
//se manda a trael el divCard con un getElement 
//se manda a llamar la funcion imprimir el objeto, con el parametro de divCard 
//se crea la propiedad estatica total y se colocal en el constructor con un incrementador para saber cuantas personas se crean
//se agrega un console.log para saber cuantas personas se agregan al comienzo y al final
//se creal el metodo estatico , printTotal para crear una alerta con el numero de personas
// se crea la herencia employee
// se crea un constructor dentro de la clase employee , con los parametros iguales a los de las clase person y agregando las nuevas propiedades de la clase employee
// se manda a llamar el constructor de la clase person con la palabra super()
//solo se deben agregar los valorees de departamento y salario en cada uno delos objetos
//se crea la funcon print dentro del constuctor de employee, y con la palabra super se manda a llamar la funcion print de la clase person, solo se le pone de parametro div
//para agregar un nuevo elemento al html, como en este caso que se agrego el id, desde innerHTML, primero se agrega la variable al principio, despues se le agrefa el valor dentro del constructor
// se agrego id="card_${this.id}" para que cada vez que se cree una nueva persona se agrege el numero de card que es
//en la funcioin imprimir de la calse employee, se manda a traer el elemento de departamento y salario para ,mostrarse en pantalla, a alam se le cambia el ombre de clase person por employee
//al traer el elemento se guarda en la varuable cardBody para que se pueda utilizar en los lementos que se agregaron, departament y salary
// se crea la clase manager heredando las propiedades de la clse employee
// se crea el contructor y se agregan dos nuevas propiedades igual que en los pasos anteriores
// se crea la funcion calcular salario
// se crea una funcion salario en la clase manager y se manda a llamar la funcion de la clase employe, pero se le agregan calculos para modificar el salario del manager
// se crea un arreglo y un forEach para automatizar el proceso de imprimir cada objeto, nombre