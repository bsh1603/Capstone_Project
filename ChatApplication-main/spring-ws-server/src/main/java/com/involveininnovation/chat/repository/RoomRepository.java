package com.involveininnovation.chat.repository;

import com.involveininnovation.chat.entity.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
public interface RoomRepository extends JpaRepository<RoomEntity,Integer> {
    RoomEntity findByTeamnumber(Integer number);
}
