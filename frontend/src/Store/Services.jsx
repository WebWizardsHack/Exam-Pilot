import axios from "axios"


/*
Use this to generate new questions in teacher dashboard , after the teacher clicks on generate button

Response codes for all routes -> 200 for success & 500 for failure

The things it expects:
name -> subject name
syllabusImage -> image of a syllabus
timeAllotted -> duration in hours
scheduledTime -> Expects a date (Sample : 2024-03-04T15:23:00.000Z)
requestId -> new request id generated from nano id function
numQuestions -> number of questions wanted

NOTE: Everything is case sensitive and be careful while checking the spellings

It will not return anything just saves data in the backend database 
AI isnt 100% working so 5% cases me error aa skta (rarely) so do try twice while using this api
*/
export async function createquestionApi(data) {
    try {
        console.log(data,"darta")
        const response = await axios.post('http://localhost:3001/generate-questions',data ,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

        if (response.status === 200) {
            // console.log(response.data)
                return response.data
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error in question generation:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}


/*
Use this route in upcoming exam component
Just think of it like  this
As the user clicks on the upcoming exam component , this api should be used

The things it expects:
It will not take anything from frontend

The response it will generate 
So basically it will give you the following things:
Its gonna generate an array like this:
    "formattedExams": [
        {
            "requestId": "12345",
            "numQuestions": 15,
            "scheduledTime": "2024-03-04T15:23:00.000Z",
            "timeAllotted": 3,
            "Name": "Mathematics"
        },
        {
            "requestId": "1234567",
            "numQuestions": 15,
            "scheduledTime": "2024-03-04T15:23:00.000Z",
            "timeAllotted": 3,
            "Name": "Mathematics"
        }
    ]
    So you have to access things of formattedExams (case sensitive) and use it to beautify the list of upcoming exams
    just store the request id somewhere it will be used later to generate those specific question
*/
export async function getUpcomingExamsApi(){
    try {
        const response = await axios.get("http://localhost:3001/upcoming-exams");
        if (response.status === 200) {
            return response.data
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error in upcoming exams generation:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}



/*
This is a route which will be used in the upcoming exams component
Every list item will have a request Id with it and that request id will be sent along with this route
And it will generate questions 

What it expects:
a simple requestId (case sensitive) which you gonna store for every list item in upcoming exams component

How it portrays result: 
    "questions": {
        "_id": "65eb3cb8882962ebe90d0f4c",
        "Name": "Mathematics",
        "requestId": "1234567",
        "timeAllotted": 3,
        "scheduledTime": "2024-03-04T15:23:00.000Z",
        "numQuestions": 15,
        "questions": [
            {
                "question": " Which of the following is not a real number?",
                "optA": " 3",
                "optB": " -4",
                "optC": " √-1",
                "optD": " 0",
                "ans": "C",
                "_id": "65eb3cb8882962ebe90d0f4d"
            },
            {
                "question": " Simplify (3x^2 - 2x + 1) - (x^2 - 3x)",
                "optA": " 2x^2 - x + 1",
                "optB": " 2x^2 + x + 1",
                "optC": " x^2 - x + 1",
                "optD": " x^2 + x + 1",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f4e"
            },
            {
                "question": " The solution set of the equation |x - 2| = 5 is",
                "optA": " {7, -3}",
                "optB": " {3, -7}",
                "optC": " {-7, -3}",
                "optD": " {-3, 7}",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f4f"
            },
            {
                "question": " The slope of the line passing through the points (2, 3) and (4, 5) is",
                "optA": " 1/2",
                "optB": " 2/1",
                "optC": " 1",
                "optD": " 2",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f50"
            },
            {
                "question": " The area of a circle with radius 5 cm is",
                "optA": " 25π cm²",
                "optB": " 100π cm²",
                "optC": " 125π cm²",
                "optD": " 50π cm²",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f51"
            },
            {
                "question": " The perimeter of a regular octagon with each side measuring 5 cm is",
                "optA": " 20 cm",
                "optB": " 40 cm",
                "optC": " 10 cm",
                "optD": " 80 cm",
                "ans": "B",
                "_id": "65eb3cb8882962ebe90d0f52"
            },
            {
                "question": " The probability of getting a red ball from a bag containing 5 red balls, 3 blue balls, and 2 green balls is",
                "optA": " 1/2",
                "optB": " 1/3",
                "optC": " 1/5",
                "optD": " 1/10",
                "ans": "C",
                "_id": "65eb3cb8882962ebe90d0f53"
            },
            {
                "question": " The mean of the first 40 positive integers is",
                "optA": " 21",
                "optB": " 20.5",
                "optC": " 21.5",
                "optD": " 22",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f54"
            },
            {
                "question": " The standard deviation of the data set {3, 4, 5, 6, 7} is",
                "optA": " 1.58",
                "optB": " 1.25",
                "optC": " 2",
                "optD": " 0",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f55"
            },
            {
                "question": " The equation of the parabola with vertex (2, 3) and focus (8, 3) is",
                "optA": " (x - 2)² = 36",
                "optB": " (x - 2)² = 12",
                "optC": " (x - 8)² = 36",
                "optD": " (x - 8)² = 12",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f56"
            },
            {
                "question": " The sine of the angle opposite to the side of length 3 cm in a right triangle with hypotenuse of length 5 cm is",
                "optA": " 3/5",
                "optB": " 4/5",
                "optC": " 5/3",
                "optD": " 5/4",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f57"
            },
            {
                "question": " The volume of a cone with radius 5 cm and height 6 cm is",
                "optA": " 50π cm³",
                "optB": " 25π cm³",
                "optC": " 75π cm³",
                "optD": " 100π cm³",
                "ans": "B",
                "_id": "65eb3cb8882962ebe90d0f58"
            },
            {
                "question": " The distance between the points (-3, 5) and (7, -1) is",
                "optA": " √50",
                "optB": " 5√2",
                "optC": " 10",
                "optD": " 10√2",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f59"
            },
            {
                "question": " The number of permutations of the letters in the word \"APPLE\" is",
                "optA": " 24",
                "optB": " 120",
                "optC": " 360",
                "optD": " 720",
                "ans": "B",
                "_id": "65eb3cb8882962ebe90d0f5a"
            },
            {
                "question": " The probability distribution of a discrete random variable X is given by P(X = 0) = 0.2, P(X = 1) = 0.4, and P(X = 2) = 0.4. The variance of X is",
                "optA": " 0.8",
                "optB": " 1",
                "optC": " 1.2",
                "optD": " 1.4",
                "ans": "A",
                "_id": "65eb3cb8882962ebe90d0f5b"
            }
        ],
So as you can see its gonna generate an array of questions which will have 6 keys each (question , optA, optB , optC , optD,ans)
Render them in a new component in a basic style as you might have seen how it is done for mcqs

NOTE:AAGEY KA LOGIC BAADME KRTE HAIN ABHI ITNA HANDLE KRO
*/
export async function getquestionApi(data) {
    console.log("service",data)
    try {
          const response = await axios.get('http://localhost:3001/generate-questions', {
            params: data, // Pass data as query parameters if necessary
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            return response.data
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error in question genration:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}

// user api

export async function createuserApi(data) {
    try {
        const response = await axios.post('http://localhost:3001/signup', data);

        if (response.status === 200) {
            alert(response.data.message);
            
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error signing up:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}

export async function getuserApi(data) {
    try {
        const response = await axios.post('http://localhost:3001/login', data);

        if (response.status === 200) {
            alert('Login successful!');
            console.log(response.data.data);
            return response.data
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}


