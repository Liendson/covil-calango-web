import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { MatButtonModule } from '@angular/material/button';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-card-pedidos',
  imports: [MaterialModule, TablerIconsModule, MatButtonModule, NgApexchartsModule],
  templateUrl: './card-pedidos.component.html',
})
export class CardPedidosComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  @Input() title: string;
  @Input() value: number;
  @Input() icon: string;
  @Input() variant: string;

  public productsalesChart!: Partial<any> | any;

  ngOnInit(): void {
    this.configurarChart();
  }

  getIconName() {
    return this.icon;
  }

  getClassName() {
    return `bg-${this.variant}`;
  }

  configurarChart() {
    this.productsalesChart = {
      series: [
        {
          name: '',
          color: '#4bd08b',
          data: [0, this.value],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: "inherit",
        foreColor: '#4bd08b',
        toolbar: {
          show: false,
        },
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        colors: ['#4bd08b'],
        type: 'solid',
        opacity: 0.05,
      },
      markers: {
        size: 1,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };
  }
}
