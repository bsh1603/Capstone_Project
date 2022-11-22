package com.involveininnovation.chat.repository;

import com.involveininnovation.chat.entity.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<RoomEntity,Integer> {


    Optional<RoomEntity> findByRoomname(Integer roomname);

    //RoomEntity findByRoomname(Integer Roomname);
}
