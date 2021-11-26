import { Component, OnInit } from '@angular/core';
import { RocketsService } from '../services/rockets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _rocketService: RocketsService,
              private router: Router) { }

  data!: Array<any>

  ngOnInit(): void {
    this._rocketService.getRockets()
    .subscribe((data:any) => this.data = data);
  }

  logout() {
    this.router.navigate(['login']);
  }

}
