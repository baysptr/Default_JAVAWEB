/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author cak-ust
 */
@MappedSuperclass
//@EntityListeners(BaseEntityListener.class)
public class BaseEntity implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "time_ins")
    private Date timeins;
    
    @Column(length = 30, name = "user_ins")
    private String userins;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTimeins() {
        return timeins;
    }

    public void setTimeins(Date timeins) {
        this.timeins = timeins;
    }

    public String getUserins() {
        return userins;
    }

    public void setUserins(String userins) {
        this.userins = userins;
    }
    
    
}
