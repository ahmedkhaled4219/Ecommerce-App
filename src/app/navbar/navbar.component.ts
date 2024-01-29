import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterServiceService } from '../services/counter-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  counter=0
constructor(private counterService:CounterServiceService){
  this.counterService.getCounter().subscribe((res)=>this.counter=res)
}
}
