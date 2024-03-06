from dotenv import load_dotenv
import os
from PIL import Image
import pytesseract
import google.generativeai as genai
from IPython.display import Markdown
import textwrap

dotenv_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), '.env')
load_dotenv(dotenv_path)

apiKey = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=apiKey)

pytesseract.pytesseract.tesseract_cmd = r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def extract_text_from_image(image_path):
    try:
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        print(f"Error extracting text from image: {e}")
        return None  # Return None on error

def generate_questions_using_gemini(prompt):
    model = genai.GenerativeModel('gemini-pro')

    try:
        response = model.generate_content(prompt)
        # print("API Request Successful")
        return to_markdown(response.text)
    except Exception as e:
        print("API Request Failed")
        print(f"Error: {e}")
        print(f"Prompt: {prompt}")  # Log the prompt for debugging
        return "Error generating question"

if __name__ == '__main__':
    # syllabus_image = sys.argv[1]

    # numberOfQuestions = sys.argv[2]

    syllabus_image = "./syll.png"
    numberOfQuestions = 15

    syllabus_text = extract_text_from_image(syllabus_image)

    prompt = f"Generate a random Multiple Choice Question paper of {numberOfQuestions} questions with 4 options A,B,C,D each based on the given syllabus:\n\n{syllabus_text} \n\n The format of the MCQs should be like this \n Each Question should start with letter 'Q.' and each option A,B,C,D should be in separate lines"

    # print(prompt)

    generated_questions = generate_questions_using_gemini(prompt)

    print(generated_questions)

