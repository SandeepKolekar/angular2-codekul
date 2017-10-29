import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-component-data-table',
  templateUrl: './data.table.component.html',
  styleUrls: ['./data.table.component.css']
})
export class ComponentDataTableComponent implements OnInit {

  employeeData = [];
  employeeTempData = [];
  idSortFlag = false ;
  nameSortFlag = false ;
  emailSortFlag = false ;
  mobileSortFlag = false ;
  constructor() { }
  // Table coulmn sort
  tableSort(sortValue , sortFlag) {

    this.employeeData.sort((a, b) => {
      let aPz = a[sortFlag];
      let bPz = b[sortFlag];

      if (sortValue) {
        return bPz - aPz;
       } else {
        return aPz - bPz;
       }
    });
/*
    this.employeeData.sort( function(employeeDataA, employeeDataB) {
	    if ( employeeDataA[sortFlag] < employeeDataB[sortFlag] ){
	    	return -1;
	    }else if( employeeDataA[sortFlag] > employeeDataB[] ){
	        return 1;
	    }else{
	    	return 0;
	    }
	});

*/
    return  sortValue ;
  }

  // Table filter
  tableFilter( id , name , email , mobile) {
    this.employeeData = this.employeeTempData ;

    if (id) {
      this.employeeData = this.employeeData.filter( data =>  (data.id).includes(id));
    }
    if (name) {
      this.employeeData = this.employeeData.filter( data =>  (data.name).includes(name));
    }
    if (email) {
      this.employeeData = this.employeeData.filter( data =>  (data.email).includes(email)); 
    }
    if (mobile) {
      this.employeeData = this.employeeData.filter( data =>  (data.mobile).includes(mobile));
    }
  }

  ngOnInit() {
    this.employeeData = [
      {id : '1', name: 'sandeep kolekar', email: 'sandeep@gmail.com', mobile: '9857585525'},
      {id : '3', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '4', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '1455555555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '1455555555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '11', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '2', name: 'manisha kadam', email: 'manisha@gmail.com', mobile: '4525255555'},
      {id : '3', name: 'kedar medhekar', email: 'kedar@gmail.com', mobile: '4525125255'
      }
    ];
    this.employeeTempData = this.employeeData  ;
  }
}
