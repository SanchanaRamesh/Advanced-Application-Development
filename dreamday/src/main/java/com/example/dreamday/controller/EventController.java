package com.example.dreamday.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dreamday.entity.Event;
import com.example.dreamday.repository.EventRepo;

@RestController
@RequestMapping("/products")
public class EventController {
     @Autowired
    private EventRepo rep;
    @GetMapping("/gall")
    
    public List<Event> getAllTheProducts() {
        return rep.findAll();
    }
   
    @PostMapping("/addevent")
    @PreAuthorize("hasAuthority('admin')")
    public void postAllTheProducts(@RequestBody Event e) {
        rep.save(e);
    }
    
}
