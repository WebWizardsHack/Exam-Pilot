from dotenv import load_dotenv
import os
from PIL import Image
import pytesseract
import google.generativeai as genai
from IPython.display import Markdown 
import textwrap

dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path)

apiKey=os.getenv("GEMINI_API_KEY")

genai.configure(api_key=apiKey)

pytesseract.pytesseract.tesseract_cmd = r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

def generate_questions_using_gemini(prompt):
    model = genai.GenerativeModel('gemini-pro')

    try:
        response = model.generate_content(prompt)
        print("API Request Successful")
        print("Response Text:", response.text)
        return to_markdown(response.text)
    except Exception as e:
        print("API Request Failed")
        print("Error:", e)
        return "Error generating questions"

   

if __name__ == '__main__':
    syllabus_image_path = "./syll.png"
    question_paper_image_path = "./sample.png"

    syllabus_text = extract_text_from_image(syllabus_image_path)
    question_paper_text = extract_text_from_image(question_paper_image_path)

    prompt = f"Generate a random question paper based on the given syllabus:\n\n{syllabus_text}\n\nAdditional information from the sample paper:\n{question_paper_text}"
    
    generated_questions = generate_questions_using_gemini(prompt)

    print(generated_questions)