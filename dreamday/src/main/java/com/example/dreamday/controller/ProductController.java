package com.example.dreamday.controller;

import com.example.dreamday.dto.AuthRequest;
import com.example.dreamday.dto.Product;
import com.example.dreamday.entity.Event;
import com.example.dreamday.entity.Profile;
import com.example.dreamday.entity.UserInfo;
import com.example.dreamday.repository.EventRepo;
import com.example.dreamday.repository.ProfileRepo;
import com.example.dreamday.repository.UserInfoRepository;
import com.example.dreamday.service.JwtService;
import com.example.dreamday.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private EventRepo rep;
    @Autowired
    private UserInfoRepository urep;
    @Autowired
    private ProfileRepo prep;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        return service.addUser(userInfo);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('admin')")
    public List<Event> getAllTheProducts() {
        return rep.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('user')")
    public Product getProductById(@PathVariable int id) {
        return service.getProduct(id);
    }
    @GetMapping("/findrole/{name}")
    public Optional<UserInfo> getRole(@RequestParam String name) {
        return urep.findByName(name);
    }
    @GetMapping("/findprof/{name}")
    public Optional<Profile> getprof(@RequestParam String name) {
        return prep.findByName(name);
    }
    
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}
