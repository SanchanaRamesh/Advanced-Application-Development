package com.example.dreamday.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dreamday.entity.Profile;

import com.example.dreamday.repository.ProfileRepo;



@RestController
@RequestMapping("/products")
public class ProfileController {
     @Autowired
    private ProfileRepo prep;
   
    @GetMapping("/gprofile")
    
    public List<Profile> getAllProfile() {
        return prep.findAll();
    }
    
  
  
    @DeleteMapping("/delprofile/{id}")

    public void delProfile(@PathVariable int id) {
        prep.deleteById(id);;
    }
    @PutMapping("/updateProfile")
    
    public void updprof(@RequestBody Profile t) {
        prep.saveAndFlush(t);
    }
    
    
}
