/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.greatsoft.software.service.impl;

import com.greatsoft.software.dao.UserDao;
import com.greatsoft.software.dao.jdbc.MapResultSet;
import com.greatsoft.software.dao.jdbc.ReportDao;
import com.greatsoft.software.domain.User;
import com.greatsoft.software.service.AppService;
import javax.sql.DataSource;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;

/**
 *
 * @author faheem
 */
@Service("appService")
@Transactional
public class AppServiceImpl implements AppService {

    @Autowired
    UserDao userDao;


    @Autowired
    DataSource dataSource;

    @Autowired
    MapResultSet mapResultSet;

    @Autowired
    ReportDao reportDao;

    private final org.slf4j.Logger logger = LoggerFactory.getLogger(AppServiceImpl.class);

    public User getCurrentUser() {
        User hasil = null;

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            Object principal = auth.getPrincipal();
            if (principal != null && org.springframework.security.core.userdetails.User.class.isAssignableFrom(principal.getClass())) {
                org.springframework.security.core.userdetails.User u = (org.springframework.security.core.userdetails.User) principal;

                com.greatsoft.software.domain.User ux = userDao.findByUsername(u.getUsername());
                if (ux != null || ux.getRole() != null || ux.getRole().getName() != null) {
                    hasil = ux;
                } else {
                    hasil = null;
                }
            }
        }
        return hasil;
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


    @Override
    public String getSessionId() {
        return RequestContextHolder.currentRequestAttributes().getSessionId();
    }


}
