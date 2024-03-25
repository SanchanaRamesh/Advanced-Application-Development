package com.example.dreamday.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dreamday.entity.Profile;
import com.example.dreamday.entity.UserInfo;



@Repository
public interface ProfileRepo extends JpaRepository<Profile,Integer> {
   Optional<Profile> findByName(String username);
   

}
