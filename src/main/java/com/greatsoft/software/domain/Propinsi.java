/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 *
 * @author cak-ust
 */
@Entity
@Table(name = "m_propinsi")
public class Propinsi extends BaseEntity{
    
    @Column(length = 10, nullable = false, unique = true)
    private String kode;
    
    @Column(length = 50, nullable = false, unique = true)
    private String nama;

    public String getKode() {
        return kode;
    }

    public void setKode(String kode) {
        this.kode = kode;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }
    
    
}
