package com.involveininnovation.chat.service;


import com.involveininnovation.chat.DataNotFoundException;
import com.involveininnovation.chat.entity.RoomEntity;
import com.involveininnovation.chat.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RoomService {

    @Autowired
    private final RoomRepository roomRepository;

    public void create(Integer roomId){
        Optional<RoomEntity> roomEntity = this.roomRepository.findByRoomname(roomId);
        if(roomEntity.isPresent()){
            return;
        }else{

        }


        RoomEntity r1 = new RoomEntity();
        r1.setRoomname(roomId);
        this.roomRepository.save(r1);

    }

    public RoomEntity getRoom(Integer id){
        Optional<RoomEntity> roomEntity = this.roomRepository.findByRoomname(id);
        if(roomEntity.isPresent()){
            return roomEntity.get();
        }else{
            throw new DataNotFoundException("Room not found");
        }


    }
}
