/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.web;

import com.greatsoft.software.dao.jdbc.ReportDao;
import com.greatsoft.software.dao.jdbc.SystemDao;
import java.util.Map;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author ustadho
 */
@Controller
public class ReportController {
    @Autowired
    ReportDao reportDao;
    
    @Autowired
    SystemDao systemDao;
    
    @Autowired
    ServletContext context;
    
    private final Logger logger = LoggerFactory.getLogger(ReportController.class);
    
    @RequestMapping(value = "/report/testing/export*", method = RequestMethod.GET)
    private ModelMap kontainerRekapMerk(HttpServletRequest request) {
        Map<String, Object> setting=systemDao.setting();
        String uri = request.getRequestURI();
        String format = uri.substring(uri.lastIndexOf(".") + 1);
        
        logger.warn("id : [{}]", request.getParameter("id"));
        Integer id = Integer.valueOf(request.getParameter("id"));
        return new ModelMap()
                .addAttribute("id", id)
                .addAttribute("format", format)
                .addAttribute("ketFoot", setting.get("ket_footer_rekap_coli"))
                .addAttribute("dataSource", reportDao.contohQuery(id));
    }
}
