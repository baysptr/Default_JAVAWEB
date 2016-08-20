/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.dao.jdbc;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.springframework.ui.ModelMap;

/**
 *
 * @author ustadho
 */
@Repository
public class SystemDao {
    @Autowired
    MapResultSet mr;

    public Object listUserDetail() {
        return mr.mapList("select user_id, user_name from user_detail where can_login order by user_name");
    }
    
    public Map<String, Object> infoPerusahaan() {
        return mr.mapSingle("select coalesce(telp1,'') as telp1, coalesce(telp2,'') as telp2, " +
                    "coalesce(fax,'') as fax, coalesce(email,'') as email, coalesce(alamat,'') as alamat, " +
                    "current_date as tanggal, current_time as jam " +
                    "from head_note");
    }
    
    public Map<String, Object> setting() {
        return mr.mapSingle("select * from setting");
    }
    
    public String getNoBast(String merk, String kapal, String tglBerangkat){
        String sql="select fn_bast_cek_nomor('"+merk+"', '"+kapal+"', '"+tglBerangkat+"', '"+getCurrentUsername()+"') as nomor";
        Map<String, Object> r=mr.mapSingle(sql);
        return r.get("nomor").toString();
    }
    
    public String getCurrentUsername() {
        String username = "";

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            Object principal = auth.getPrincipal();
            if (principal != null && org.springframework.security.core.userdetails.User.class.isAssignableFrom(principal.getClass())) {
                org.springframework.security.core.userdetails.User u = (org.springframework.security.core.userdetails.User) principal;
                username = u.getUsername();
            }
        }
        return username;
    }
}
