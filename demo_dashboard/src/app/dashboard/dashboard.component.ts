import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public barChartData: Array<any> = [
    { data: [65, 59], label: 'Download Sales' },
    { data: [12, 20], label: 'In-Store Sales' },
    { data: [1, 25], label: 'Mail Sales' },
  ];
  public barChartLabels: string[] = ['2006', '2007'];
  public barChartOptions: any = {
    responsive: false,
    legend: {
      position: 'right' // place legend on the right side of chart
    },
    scales: {
      xAxes: [{
        stacked: true // this should be set to make the bars stacked
      }],
      yAxes: [{
        stacked: true // this also..
      }]
    }
  };
  public barChartType = 'horizontalBar';

  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';
  firstTableData = [
    {
      name: 'Download Sales', count: 3, domain: 'Domain 1', wishes: 5,
      data: [
        { name: 'Satish', count: 2, domain: 'Domain 1', wishes: 1 },
        { name: 'Manish', count: 1, domain: 'Domain 1', wishes: 2 },
        { name: 'Ratna', count: 1, domain: 'Domain 1', wishes: 1 },
      ]
    },
    {
      name: 'In-Store Sales', count: 4, domain: 'Domain 1', wishes: 6,
      data: [
        { name: 'Sam', count: 2, domain: 'Domain 1', wishes: 3 },
        { name: 'Man', count: 1, domain: 'Domain 1', wishes: 2 },
        { name: 'Rat', count: 1, domain: 'Domain 1', wishes: 1 },
      ]
    },
    {
      name: 'Mail Sales', count: 4, domain: 'Domain 1', wishes: 6,
      data: [
        { name: 'Danish', count: 2, domain: 'Domain 1', wishes: 3 },
        { name: 'John', count: 1, domain: 'Domain 1', wishes: 2 },
        { name: 'Cena', count: 1, domain: 'Domain 1', wishes: 1 },
      ]
    }
  ];
  public piechartOptions = {
    title: {
      display: true,
      text: 'Neighours'
    }
  };
  secondTableData = [];
  dayData = [{
    "date": "2013-07-01",
    "cost": "900000",
    "sales": "1100000",
    "revenue": "200000",
    "employees": "12",
    "employeesHoursSum": "39"
}, {
    "date": "2013-07-02",
    "cost": "900000",
    "sales": "1100000",
    "revenue": "200000",
    "employees": "10",
    "employeesHoursSum": "39"
}];
  domain = '';
  secondTableShow = false;
  constructor() { }

  ngOnInit() {
  }
  // To get data for table
  getDetails(name: string) {
    this.secondTableData = this.firstTableData.filter(x => x.name === name)[0].data;
    this.secondTableShow = true;
  }
//To open navigation toggle bar
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
}
