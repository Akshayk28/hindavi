import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {
  cars = [
    { id: '1', name: 'Toyota Innova Crysta', img: '../../assets/img/Toyota Innova Crysta.jpg', seats: '6' },
    { id: '2', name: 'Toyota Innova', img: '../../assets/img/Toyota Innova.jpg', seats: '6' },
    { id: '3', name: 'Etios', img: '../../assets/img/Etios.jpg', seats: '5' },
    { id: '4', name: 'Dzire', img: '../../assets/img/Dzire.jpg', seats: '5' },
    { id: '5', name: 'Baleno', img: '../../assets/img/Baleno.jpg', seats: '5' },
    { id: '6', name: 'Ertiga', img: '../../assets/img/Ertiga.jpg', seats: '5' },
    { id: '7', name: 'Tempo Travelar', img: '../../assets/img/Tempo Travelar.jpg', seats: '17' },
    { id: '8', name: 'Exetra', img: '../../assets/img/Exetra.jpg', seats: '5' },
    // { name: 'Shirdi', img: '../../assets/img/Shirdi.jpg' },
  ];
}
