package com.example.dreamday.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dreamday.entity.Theme;
import com.example.dreamday.repository.ThemeRepo;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/products")
public class ThemeController {
     @Autowired
    private ThemeRepo rep;
    @GetMapping("/gtheme")
    // @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Theme> getAllTheProducts() {
        return rep.findAll();
    }
    @PostMapping("/addtheme")
    
    public void postAllTheProducts(@RequestBody Theme e) {
        rep.save(e);
    }
    @DeleteMapping("/del/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void delTheme(@PathVariable int id) {
        rep.deleteById(id);;
    }
    @PutMapping("/updateTheme")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void updTheme(@RequestBody Theme t) {
        rep.saveAndFlush(t);;
    }
    
    
}



