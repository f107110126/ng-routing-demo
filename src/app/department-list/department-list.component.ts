import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: 'department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [];
  errorMsg = '';
  constructor(private _departmentService: DepartmentService) { }

  ngOnInit() {
    this._departmentService.getDepartments()
      .subscribe(
        data => this.departments = data,
        error => this.errorMsg = error
      );
  }

}
