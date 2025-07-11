# Claude Development Guidelines

## Project Overview
Digital Sales API Test Data Generator - A web-based tool for generating valid JSON test data for API testing workflows.

## Tech Stack
- **Backend**: Python (Flask/FastAPI)
- **Frontend**: Plain HTML/JS (no frameworks)
- **Libraries**: Faker, random, json, csv

## Project Structure
```
/
├── app.py              # Main Flask/FastAPI application
├── static/             # CSS, JS files
├── templates/          # HTML templates
├── generators/         # Data generation modules
├── requirements.txt    # Python dependencies
└── README.md          # Setup instructions
```

## Development Notes
- Focus on UK-valid data formats (postcodes, phone numbers, bank details)
- Keep UI simple and lightweight - no frontend frameworks
- Prioritize MVP features over advanced functionality
- Follow GitHub Issues for implementation order

## Key Requirements
- Generate realistic applicant JSON for Digital Sales API
- Real-time JSON preview as users fill forms
- Export capabilities (individual JSON, bulk CSV)
- Session-based history without persistent storage

## Getting Started
1. Start with Issue #10 (Project Boilerplate)
2. Follow MVP issues (#1-6) in sequence
3. Each issue has clear acceptance criteria and tasks
4. Test with realistic UK data scenarios

## API Endpoint Structure
- `POST /generate` - Generate JSON payload from form data
- Static file serving for HTML/CSS/JS

Refer to PRD.md for detailed requirements and GitHub Issues for specific tasks.
