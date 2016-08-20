/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.dao.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ustadho
 */
@Repository
public class ReportDao {
    @Autowired
    MapResultSet mr;
    
    public Object contohQuery(Integer id){
        return mr.mapList("select * from fn_rpt_pl_rekap_merk_per_kontainer("+id+") "
                + "as (no_kontainer varchar, emkl varchar, nama_kapal varchar, tgl_berangkat varchar, merk varchar, toko varchar, coli double precision)");
    }
    
    
}
