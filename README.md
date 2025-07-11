# Digital Sales API Test Data Generator

A web-based tool for generating valid JSON test data for Digital Sales API testing.

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run the Application**
   ```bash
   cd backend
   python app.py
   ```

3. **Access the Tool**
   Open your browser to `http://localhost:5000`

## Features

- **Form-based Configuration**: Easy interface for configuring applicant details
- **Real-time JSON Preview**: See generated JSON as you configure settings
- **UK-Valid Data**: Generates realistic UK-compliant data (postcodes, phone numbers, etc.)
- **Export Options**: Copy JSON or export to file
- **Session History**: Track previously generated payloads
- **CSV Export**: Export multiple test records

## Usage

1. Configure applicant settings in the left panel
2. Click "Generate JSON" to create test data
3. Use the preview panel to review the generated JSON
4. Copy or export the JSON for use in your API tests

## Project Structure

```
digital-sales-api-test-generator/
├── backend/
│   ├── app.py              # Flask application
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── templates/
│   │   └── index.html      # Main HTML template
│   └── static/
│       ├── css/
│       │   └── style.css   # Styling
│       └── js/
│           └── app.js      # Frontend logic
└── README.md
```

## Development

This project uses Flask for the backend and vanilla HTML/CSS/JavaScript for the frontend. The data generation is powered by the Faker library for realistic UK-based test data.