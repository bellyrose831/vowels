#source: https://ttsmp3.com/

#python -m venv flaskvowels
#flaskvowels/Scripts/activate
#pip install flask
#run using "python main.py"

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

if __name__ == '__main__':
   app.run(port=5000)