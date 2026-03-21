#source: https://ttsmp3.com/, 
#source: https://render.com/docs/deploy-flask
#source: https://dashboard.render.com/web/srv-d6uu461aae7s73f7qmog/deploys/dep-d6uu46haae7s73f7qn10

#python -m venv flaskvowels
#flaskvowels/Scripts/activate
#pip install flask
#run using "python app.py"

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

if __name__ == '__main__':
   app.run(port=5000)
