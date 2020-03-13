import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers : any = [
    {
      instanceType : 'medium',
      name : 'production server',
      status : 'stable',
      started : new Date(15,1,2017)
    },
    {
      instanceType : 'large',
      name : 'User database',
      status : 'critical',
      started : new Date(15,1,2017)
    },
    {
      instanceType : 'small',
      name : 'development server',
      status : 'offline',
      started : new Date(15,1,2017)
    },
    {
      instanceType : 'large',
      name : 'testing environment server',
      status : 'critical',
      started : new Date(15,1,2017)
    }
  ];

  getStatusClasses(server : {instnceType : string, name : string, status : string, started : Date}){
    return {
      'list-group-item list-group-item-action list-group-item-success': server.status === 'stable',
      'list-group-item list-group-item-action list-group-item-warning': server.status === 'offline',
      'list-group-item list-group-item-action list-group-item-danger' : server.status === 'critical'
    }
  }
}
