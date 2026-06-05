package com.example.sms.controller;

import com.example.sms.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @GetMapping
    public ArrayList<Student> getStudents() {

        ArrayList<Student> students = new ArrayList<>();
        
        students.add(
                new Student(1, "Tushar", "MCA")
        );

        students.add(
                new Student(2, "Rohit", "BCA")
        );

        return students;

    }

}