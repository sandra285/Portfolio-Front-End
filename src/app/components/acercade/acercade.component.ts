import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.miPortfolio = data;
    });
  }
}
