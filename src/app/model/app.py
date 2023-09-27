from flask import Flask, request, render_template
from transformers import pipeline
from IPython.display import Audio, display
from transformers import pipeline
from transformers import AutoModelForSequenceClassification
from transformers import TFAutoModelForSequenceClassification
from transformers import AutoTokenizer
import numpy as np
from scipy.special import softmax
import csv
import urllib.request
import speech_recognition as sr
# import speechToText


app = Flask(__name__)


# whisper = pipeline('automatic-speech-recognition', model = 'openai/whisper-medium', device = 0)

sentiment_pipeline = pipeline("sentiment-analysis")


@app.route("/")


def hello():

    return render_template('index.html')

@app.route('/predict',methods=["GET","POST"])


def predict():
    if request.method == "POST":

        audio_file = request.files["audio"]


        if audio_file:

            recognizer = sr.Recognizer()
            audio_data = sr.AudioFile(audio_file)

            with audio_data as source:
                audio = recognizer.record(source)

            
            text_t = recognizer.recognize_google(audio,key=None)
            
        
            # text_t = whisper(audio_file)
            output = sentiment_pipeline(text_t)

            return render_template("index.html",prediction_text="Your Sentiment is {}".format(output))
    # return output

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)


# import speech_recognition as sr

# @app.route('/transcribe', methods=['POST'])
# def transcribe():
#     recognizer = sr.Recognizer()

#     audio_file = request.files['audio_file']
#     if audio_file:
#         audio_data = audio_file.read()

#         with sr.AudioFile(audio_data) as source:
#             audio = recognizer.record(source)

#         try:
#             transcription = recognizer.recognize_google(audio)
#             return f'Transcription: {transcription}'
#         except sr.UnknownValueError:
#             return 'Unable to transcribe audio'
#     else:
#         return 'No audio file provided.'

