/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.greatsoft.software.service;

import com.greatsoft.software.domain.User;

/**
 *
 * @author faheem
 */
public interface AppService {
    public User getCurrentUser();
    public String getSessionId();
    public String getCurrentUsername();
}
