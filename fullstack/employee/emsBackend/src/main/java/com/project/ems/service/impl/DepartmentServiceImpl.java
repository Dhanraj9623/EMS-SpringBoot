package com.project.ems.service.impl;

import com.project.ems.dto.DepartmentDto;
import com.project.ems.entity.Department;
import com.project.ems.mapper.DepartmentMapper;
import com.project.ems.repository.DepartmentRepo;
import com.project.ems.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepo departmentRepo;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {

        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepo.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }
}
