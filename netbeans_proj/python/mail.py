# -*- coding: utf-8 -*-
"""
Created on Thu Jul 27 13:23:25 2017

@author: S.P Sanjay
"""
import smtplib
class mail:
    def __init__(self):
        self.toaddrs  = ['sanjay.poongs@gmail.com','mounicraju@gmail.com','mounic2012@gmail.com']
        self.server = smtplib.SMTP('smtp.gmail.com:587')
        self.server.starttls()
        self.server.login('robotmail000@gmail.com','testmail')
    def send(self,sub,msg):
        try:
            self.server.sendmail('robotmail000@gmail.com', self.toaddrs,"Subject:"+sub+"\r\n\n"+ msg)
            return 1
        except:
            return 0
    def close(self):
        self.server.quit()
        
        

if __name__=='__main__':
    """ Main file"""


    m=mail()