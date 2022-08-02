//Constructor de Objetos Elect
class Elect{
    constructor(clase, nombre, kwh){
        this.clase = clase;
        this.nombre = nombre;
        this.kwh = kwh;
        this.id = 0
    }
}
    
//Carga manual de objetos Elect al Array Electrodomesticos
const elec1 = new Elect ("Refrigeracion", "Freezer", 0.05); Electrodomestico.push (elec1);
const elec2 = new Elect ("Refrigeracion", "Heladera con freezer", 0.08); Electrodomestico.push (elec2);
const elec3 = new Elect ("Refrigeracion", "Heladera sin freezer", 0.03); Electrodomestico.push (elec3);
const elec4 = new Elect ("Linea Blanca", "Lavarropa Automático", 0.18); Electrodomestico.push (elec4);
const elec5 = new Elect ("Linea Blanca", "Aspiradora", 0.68); Electrodomestico.push (elec5);
const elec6 = new Elect ("Linea Blanca", "Plancha", 0.6); Electrodomestico.push (elec6);
const elec7 = new Elect ("Linea Blanca", "Estractor de Aire", 0.12); Electrodomestico.push (elec7);
const elec8 = new Elect ("Audio y Video", "TV 32' LED", 0.2); Electrodomestico.push (elec8);
const elec9 = new Elect ("Audio y Video", "Notebook", 0.1); Electrodomestico.push(elec9);

//Creacion de Array por Categoria a partir del Array General
//Crear el Array de Refri
const Refri = Electrodomestico.filter ((Elect)=>Elect.clase.includes ("Refrigeracion"));
//Crear el Array de Lblanca
const Lblanca = Electrodomestico.filter ((Elect)=>Elect.clase.includes ("Linea Blanca"));
//Crear el Array de Avideo
const Avideo = Electrodomestico.filter ((Elect)=>Elect.clase.includes ("Audio y Video"));