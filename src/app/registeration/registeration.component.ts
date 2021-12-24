import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  student :Student;
  message: any;
  constructor(
    private studentservice:StudentService,private router: Router
  ) {
    this.student=new Student;
   }

  ngOnInit(): void {
  }

  onsubmit() {
    this.studentservice.save(this.student).subscribe((data) => console.log(this.student));
    
    this.studentservice.listall().subscribe(data => {console.log(data)});
    setTimeout(() => {
      this.router.navigateByUrl('/list');
    }, 500);
    
  }
  popupalert(){
    alert("Enter value in all the fields.")
  }

  listall(){
    this.router.navigateByUrl('/list');
  }
    
}
