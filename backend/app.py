from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from faker import Faker
import random
import json
from datetime import datetime, timedelta

app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')
CORS(app)

fake = Faker('en_GB')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/generate', methods=['POST'])
def generate_json():
    try:
        config = request.get_json() or {}
        payload = generate_applicant_payload(config)
        return jsonify(payload)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def generate_applicant_payload(config):
    # Basic applicant data generation
    applicant = {
        "id": fake.uuid4(),
        "role": config.get('role', 'MAIN'),
        "title": fake.prefix(),
        "firstName": fake.first_name(),
        "lastName": fake.last_name(),
        "gender": config.get('gender', random.choice(['MALE', 'FEMALE'])),
        "maritalStatus": config.get('maritalStatus', random.choice(['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED'])),
        "dateOfBirth": fake.date_of_birth(minimum_age=18, maximum_age=70).isoformat(),
        "address": {
            "line1": fake.street_address(),
            "city": fake.city(),
            "postcode": fake.postcode(),
            "country": "GB"
        },
        "contact": {
            "email": fake.email(),
            "phone": fake.phone_number(),
            "mobile": fake.phone_number()
        },
        "employment": {
            "status": "EMPLOYED",
            "income": random.randint(20000, 60000),
            "employer": fake.company()
        },
        "bankDetails": {
            "accountNumber": fake.random_number(digits=8, fix_len=True),
            "sortCode": f"{fake.random_number(digits=2, fix_len=True)}-{fake.random_number(digits=2, fix_len=True)}-{fake.random_number(digits=2, fix_len=True)}"
        }
    }
    
    # Full Digital Sales API payload structure
    payload = {
        "applicants": [applicant],
        "companyApplicants": [],
        "asset": {
            "type": "VEHICLE",
            "make": "Toyota",
            "model": "Corolla",
            "year": 2020,
            "price": 15000
        },
        "dealer": {
            "name": "Test Dealer",
            "code": "TD001"
        },
        "financialCalculation": {
            "deposit": 3000,
            "loanAmount": 12000,
            "term": 36,
            "rate": 5.9
        },
        "status": "PENDING"
    }
    
    return payload

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)