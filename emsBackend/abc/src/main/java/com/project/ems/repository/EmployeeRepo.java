package com.project.ems.repository;

import com.project.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
}
