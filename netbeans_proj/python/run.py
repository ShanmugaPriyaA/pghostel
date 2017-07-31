import cherrypy
import os
import json
import requests
#from mongodb import mongo
from genshi.template import TemplateLoader
#website=mongo('Komodo','website')    #getting the data table
cherrypy.engine.stop()
cherrypy.server.httpserver = None
cherrypy.config.update({'server.socket_port': 8003})
cherrypy.engine.start()
loader = TemplateLoader(
    os.path.join(os.path.dirname(__file__), 'html'),
    auto_reload=True
)


         
class StringGenerator(object):
    @cherrypy.expose
    def index(self):
        table=loader.load('main.html')
        return table.generate().render('html', doctype='html')
   
        
        
    
    
if __name__=='__main__':
    conf = {
        '/': {
            'tools.sessions.on': 0,
            'tools.staticdir.root': os.path.abspath(os.getcwd()),
            'engine.autoreload_on': 0,
        },
        '/generator': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
        },
        '/public': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './public'
        },
        'global': {
                'engine.autoreload.on' : True
        }
       
    }
    
    webapp = StringGenerator()
    cherrypy.quickstart(webapp, '/', conf)


