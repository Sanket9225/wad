import webapp2
from google.appengine.ext.webapp import template


class Mainpage(webapp2.RequestHandler):
    def get(self):
        context = {}
        self.response.out.write(template.render("index.html",context))

app = webapp2.WSGIApplication([("/",Mainpage)],debug = True )