package com.project.ems.service.impl;

import com.project.ems.dto.DepartmentDto;
import com.project.ems.entity.Department;
import com.project.ems.exception.ResourceNotFoundException;
import com.project.ems.mapper.DepartmentMapper;
import com.project.ems.repository.DepartmentRepo;
import com.project.ems.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepo.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exists with the given id: "+departmentId)
                );
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepo.findAll();

        return departments.stream().map((department) -> DepartmentMapper.mapToDepartmentDto(department)).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {

        Department department = departmentRepo.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exist with given id: "+ departmentId)
        );
        department.setDepartmentName(updatedDepartment.getDepartmentName());
        department.setDepartmentDescription(updatedDepartment.getDepartmentDescription());

        Department savedDepartment = departmentRepo.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepo.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exist with the give id: "+ departmentId)
        );
        departmentRepo.deleteById(departmentId);
    }
}
