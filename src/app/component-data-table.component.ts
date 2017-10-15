import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component-data-table',
  templateUrl: './data.table.component.html',
  styleUrls: ['./data.table.component.css']
})
export class ComponentDataTableComponent implements OnInit {

  employeeData = [];
  idSortFlag = false ;
  nameSortFlag = false ;
  emailSortFlag = false ;
  mobileSortFlag = false ;
  constructor() { }
  tableSort(sortValue , sortFlag) {
    alert(sortFlag + ' sort under constraction!');
    return  sortValue ;
  }

  tableFilter(filterValue , filterFlag) {
    alert('filter under constraction!');
  }

  ngOnInit() {
    this.employeeData = [
      {id : 1, name: 'sandeep kolekar', email: 'sandeep@gmail.com', mobile: 9857585525},
      {id : 2, name: 'manisha kadam', email: 'manisha@gmail.com', mobile: 4525255555},
      {id : 3, name: 'kedar medhekar', email: 'kedar@gmail.com', mobile: 4525125255
      }
    ];
  }
}
