package com.example.dreamday.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.dreamday.entity.Theme;


public interface ThemeRepo extends JpaRepository<Theme, Integer> {
   

}
