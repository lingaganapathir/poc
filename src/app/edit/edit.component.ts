import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student :Student;
  std:Student[];
  constructor(private studentservice:StudentService, private router: Router) {
    this.student=studentservice.stdData;
  }

  ngOnInit(): void {
  }

  update(){
    this.studentservice.edit(this.student).subscribe((data) => console.log(this.student));
    this.router.navigateByUrl('/list');
    this.studentservice.listall().subscribe(data => {
      this.std = data;
    });
  }
  popupalert(){
    alert("Enter value for all fields.");
  }

}
