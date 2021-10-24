import flask
from sawo import createTemplate, getContext, verifyToken
from models import Config
from sawo import getContext

app = flask.Flask(__name__)


createTemplate("./templates/partials",flask=True)


class Config(models.Models):
  api_key = models.CharField(max_length=200)
  identifier = models.CharField(max_length=200)
  choices = [("email", "Email"), ("phone_number_sms", "Phone")]

def index(request):
  config = Config.objects.order_by('-api_key')[:1]
  context = { "sawo" = getContext(config, "login")

  }




  "sawo": {
    "auth_key": "7a4f6dd5-0b24-48ab-981e-6630350ad051",
    "identifier": "email | phone_number_sms"
                  "to": login
  }



@app.route("/")
def main():
  return flask.render_template("index.html")



# app.run(host="0.0.0.0", port=5000, debug=True)
app.run(debug=True)