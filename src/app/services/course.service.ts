import { Injectable } from '@angular/core';
import {course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 private courselist:course[];

  constructor() { 
    this.courselist=[
      {
        name: "Angular",
        description: "Google's component based framework",
        price: 20000,
        image: "Angular.png"
      },
      {
        name: "AWS",
        description: "Cloud Platform by amazon",
        price: 11000,
        image: "AWS.png"
      },
      {
        name: "CSS3",
        description: "New specification of css",
        price: 40000,
        image: "CSS3.png"
      },
      {
        name: "Hadoop",
        description: "Apache platform, an ecosystem for big-data",
        price: 50000,
        image: "Hadoop.png"
      },
      {
        name: "HTML5",
        description: "New specification of HTML",
        price: 33000,
        image: "Html5.png"
      },
      {
        name: "Java",
        description: "A object oriented programming language",
        price: 88000,
        image: "Java.png"
      },
      {
        name: "Python",
        description: "Dropbox uses python",
        price: 66000,
        image: "Python.png"
      },
      {
        name: "React",
        description: "A frontend framework",
        price: 44000,
        image: "React.png"
      },
      {
        name: "Node",
        description: "Javascript runtime environment",
        price: 77000,
        image: "Node.png"
      },
      {
        name: "Microsoft",
        description: "Mainly famous for windows operating system",
        price: 100000,
        image: "Microsoft.png"
      }
    ];
  }

  getCourses():course[]{
    return this.courselist;
  }
}
