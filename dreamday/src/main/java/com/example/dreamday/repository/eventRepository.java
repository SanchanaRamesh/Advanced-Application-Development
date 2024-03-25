package com.example.dreamday.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dreamday.entity.Event;
import com.example.dreamday.entity.EventEntity;

@Repository
public interface eventRepository extends JpaRepository<EventEntity, Integer> {
   
    @Query(value = "SELECT count(*) FROM evententity p where p.status='upcoming' ", nativeQuery = true)
	Integer findAllup();
    @Query(value = "SELECT count(*) FROM evententity p where p.status='cancelled' ", nativeQuery = true)
	Integer findAllcan();
    @Query(value = "SELECT count(*) FROM evententity p where p.status='active' ", nativeQuery = true)
	Integer findAllact();


}