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
import com.example.dreamday.entity.EventEntity;
import com.example.dreamday.repository.EventRepo;
import com.example.dreamday.repository.eventRepository;

@RestController
@RequestMapping("/products")
public class eveController {
     @Autowired
    private eventRepository rep;
    @GetMapping("/gevent")
    
    public List<EventEntity> getAllTheProducts() {
        return rep.findAll();
    }
    @GetMapping("/findactive")
    public Integer findactiveproj(){
    	return rep.findAllact();
    }
    @GetMapping("/findupcoming")
    public Integer findupc(){
    	return rep.findAllup();
    }
    @GetMapping("/findcanc")
    public Integer findcanc(){
    	return rep.findAllcan();
    }
   
   
    @PostMapping("/aevent")
    @PreAuthorize("hasAuthority('admin')")
    public void postAllTheProducts(@RequestBody EventEntity e) {
        rep.save(e);
    }
    
}
