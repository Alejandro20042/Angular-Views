import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

declare var google: any;

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrl: './home-inicio.component.css'
})
export class HomeInicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Language', 'Speakers (in millions)'],
      ['German', 5.85],
      ['French', 1.66],
      ['Italian', 0.316],
      ['Romansh', 0.0791]
    ]);

    const options = {
      legend: 'none',
      pieSliceText: 'label',
      title: 'Swiss Language Use (100 degree rotation)',
      pieStartAngle: 100,
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
}