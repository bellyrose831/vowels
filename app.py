#source: https://ttsmp3.com/
#source: https://render.com/docs/deploy-flask
#source: https://dashboard.render.com/web/srv-d6uu461aae7s73f7qmog/deploys/dep-d6uu46haae7s73f7qn10
#deployment link: https://dashboard.render.com/

#pip install flask
#run using "python app.py"

from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
