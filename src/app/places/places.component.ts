import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [NgFor],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss'
})
export class PlacesComponent {
  places = [
    { name: 'Mumbai', img: '../../assets/img/Mumbai.jpg' },
    { name: 'Alibag', img: '../../assets/img/Alibag.jpg' },
    { name: 'Bhimashankar', img: '../../assets/img/bhimashankar.webp' },
    { name: 'Nashik', img: '../../assets/img/nashik.jpg' }, 
    { name: 'Trimbakeshwar', img: '../../assets/img/Trimbakeshwar.jpg' },
    { name: 'Vani', img: '../../assets/img/Vani.jpg' },
    { name: 'Shirdi', img: '../../assets/img/Shirdi.jpg' },
    { name: 'Shani Shingnapur', img: '../../assets/img/Shani Shingnapur.jpg' },
    { name: 'Devgad', img: '../../assets/img/Devgad.jpg' },
    { name: 'Aurangabad', img: '../../assets/img/Aurangabad.jpg' },
    { name: 'Grishneshwar', img: '../../assets/img/Grishneshwar.jpg' },
    { name: 'Bhadra Maruti', img: '../../assets/img/Bhadra Maruti.jpg' },
    { name: 'Ajanta Ellora', img: '../../assets/img/Ajanta Ellora.jpg' },
    { name: 'Karanja', img: '../../assets/img/Karanja.jpg' },
    { name: 'Vaijnath Parli', img: '../../assets/img/Vaijnath Parli.jpg' },
    { name: 'Tuljapur', img: '../../assets/img/Tuljapur.jpg' },
    { name: 'Yedai', img: '../../assets/img/Yedai.jpg' },
    { name: 'Akkalkot', img: '../../assets/img/Akkalkot.jpg' },
    { name: 'Pandharpur', img: '../../assets/img/Pandharpur.jpg' },
    { name: 'Satara', img: '../../assets/img/Satara.jpg' },
    { name: 'Sangli', img: '../../assets/img/Sangli.jpg' },
    { name: 'Kolhapur', img: '../../assets/img/Kolhapur.jpg' },
    { name: 'kas Pathar', img: '../../assets/img/kas Pathar.jpg' },
    { name: 'Konkan', img: '../../assets/img/konkan.jpg' }, { name: 'Sindhudurg', img: '../../assets/img/Sindhudurg.jpg' },
    { name: 'Malvan', img: '../../assets/img/Malvan.jpg' }, { name: 'Tarkarli', img: '../../assets/img/Tarkarli.jpg' },
    { name: 'Ganpatipule', img: '../../assets/img/Ganpatipule.jpg' }
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
}
