import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Campera SST original',
      descripcion: 'Una campera sin precedentes. Puede que se vea solo como una prenda icónica clásica de adidas, pero esta campera Primeblue SST simboliza el cambio.',
      precio: 35000,
      imagen: '/sst.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Conjunto Team Balanza',
      descripcion: 'Conjunto bastante comodo de usar y muy lindo, actualmente el mas comprado.',
      precio: 15000,
      imagen: '/balanza.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Campera PH',
      descripcion: 'Una campera sin precedentes. Puede que se vea solo como una prenda icónica clásica de adidas.',
      precio: 35000,
      imagen: '/Phcampera.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Chaleco Nike Original',
      descripcion: 'Comodo,veranero y inviernadero muy lidno en todos los sentidos',
      precio: 89.99,
      imagen: '/nike.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Zapatillas Furyosas Nike',
      descripcion: 'Zapatillas con mucha calidad y importadas,una de las pedidas.',
      precio: 135000,
      imagen: '/furiosas.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Campera La Jeremi Scoot',
      descripcion: 'Una de las mas pedidas y bastante comoda.',
      precio: 35000,
      imagen: '/jeremycampera.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
