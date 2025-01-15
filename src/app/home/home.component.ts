import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'hindavi';

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

  teams = [
    { img: '../../assets/img/Team 1.jpeg' },
    { img: '../../assets/img/Team 2.jpeg' },
    { img: '../../assets/img/Team 3.jpeg' },
    { img: '../../assets/img/Team 4.jpeg' },
    { img: '../../assets/img/Team 5.jpeg' },
    { img: '../../assets/img/Team 6.jpeg' },
    { img: '../../assets/img/Team 7.jpeg' },
    { img: '../../assets/img/Team 8.jpeg' },
    { img: '../../assets/img/Team 9.jpeg' },
  ]


  constructor(private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  openPleaces() {
    this.router.navigate(['places']);
  }

  openCars() {
    this.router.navigate(['vehicles']);
  }

}
