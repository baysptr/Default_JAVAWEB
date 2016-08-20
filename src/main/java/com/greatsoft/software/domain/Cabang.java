/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author cak-ust
 */
@Entity
@Table(name = "m_cabang")
public class Cabang extends  BaseEntity{
    @Column(length = 5, nullable = false, unique = true)
    private String kode;
    
    @Column(length = 50, nullable = false, unique = true)
    private String nama;
    
    @Column(length = 50, nullable = false)
    private String alamat;
    
    @Column(name = "alamat2", length = 50)
    private String alamat2;
    
    @Column(length = 50)
    private String telepon;
    
    @Column(length = 50)
    private String fax;
    
    @Column(name = "kode_pos", length = 50)
    private String kodepos;
    
    @ManyToOne
    @JoinColumn(name = "id_kota")
    private Kota kota;
    
    @Column(length = 50)
    private String kontak;
    
    @Column(length = 70)
    private String email;
    
    @Column(name = "akun_piutang")
    private String akunPiutang;

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

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getAlamat2() {
        return alamat2;
    }

    public void setAlamat2(String alamat2) {
        this.alamat2 = alamat2;
    }

    public String getTelepon() {
        return telepon;
    }

    public void setTelepon(String telepon) {
        this.telepon = telepon;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getKodepos() {
        return kodepos;
    }

    public void setKodepos(String kodepos) {
        this.kodepos = kodepos;
    }

    public Kota getKota() {
        return kota;
    }

    public void setKota(Kota kota) {
        this.kota = kota;
    }

    public String getKontak() {
        return kontak;
    }

    public void setKontak(String kontak) {
        this.kontak = kontak;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAkunPiutang() {
        return akunPiutang;
    }

    public void setAkunPiutang(String akunPiutang) {
        this.akunPiutang = akunPiutang;
    }

    
}
