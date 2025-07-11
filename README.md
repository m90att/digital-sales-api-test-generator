# Digital Sales API Test Data Generator

A web-based tool for generating valid JSON test data for Digital Sales API testing, specifically focused on streamlining QA workflows for applicant configurations.

## 🎯 Project Overview

This tool helps QA engineers generate realistic, UK-compliant JSON payloads for the Digital Sales API without manually crafting test data. It features a form-based interface for configuring applicant details, real-time JSON preview, and export capabilities.

## 🚀 Quick Start

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

## 📋 Project Status

This project is currently in development. See the [Issues](https://github.com/m90att/digital-sales-api-test-generator/issues) for current tasks and progress.

### MVP Features
- ✅ [Generate Valid Applicant JSON](https://github.com/m90att/digital-sales-api-test-generator/issues/1)
- ✅ [UK-Valid Randomization](https://github.com/m90att/digital-sales-api-test-generator/issues/2)
- ✅ [JSON Preview Panel](https://github.com/m90att/digital-sales-api-test-generator/issues/3)
- ✅ [Static Defaults for Non-Applicant Data](https://github.com/m90att/digital-sales-api-test-generator/issues/4)
- ✅ [History of Generated Payloads](https://github.com/m90att/digital-sales-api-test-generator/issues/5)
- ✅ [Export JSON to CSV](https://github.com/m90att/digital-sales-api-test-generator/issues/6)

### Technical Implementation
- ✅ [Basic Web UI (HTML + JS)](https://github.com/m90att/digital-sales-api-test-generator/issues/7)
- ✅ [Backend Generator (Python)](https://github.com/m90att/digital-sales-api-test-generator/issues/8)
- ✅ [Generate JSON Button](https://github.com/m90att/digital-sales-api-test-generator/issues/9)
- ✅ [Project Boilerplate](https://github.com/m90att/digital-sales-api-test-generator/issues/10)
- ✅ [README with Instructions](https://github.com/m90att/digital-sales-api-test-generator/issues/11)

## 📚 Documentation

- [Product Requirements Document](./PRD.md) - Detailed project requirements and specifications
- [Issues](https://github.com/m90att/digital-sales-api-test-generator/issues) - Implementation tasks and user stories

## 🛠 Tech Stack

- **Backend**: Python (Flask)
- **Frontend**: Plain HTML/JS (minimal dependencies)
- **Libraries**: Faker, random, json, csv
- **Data Generation**: UK-focused synthetic data

## 📋 Features

### Core Functionality
- **Form-based Configuration**: Easy-to-use interface for applicant setup
- **UK Data Validation**: Realistic postcodes, phone numbers, bank details
- **Real-time Preview**: Live JSON updates as you type
- **Export Options**: Copy individual payloads or download CSV batches
- **Session History**: Keep track of previously generated test data

### Target Users
- **Primary**: QA Engineers performing manual API testing
- **Secondary**: Developers needing test data for Digital Sales API

## 💻 Usage

1. Configure applicant settings in the left panel
2. Click "Generate JSON" to create test data
3. Use the preview panel to review the generated JSON
4. Copy or export the JSON for use in your API tests

## 📁 Project Structure

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

## 📝 Contributing

This project follows a GitHub Issues workflow. Each feature is tracked as a user story with clear acceptance criteria. Check the [Issues](https://github.com/m90att/digital-sales-api-test-generator/issues) tab to see current work and contribute.

### Issue Labels
- `mvp` - Core MVP features
- `post-mvp` - Future enhancements
- `frontend` - UI-related tasks
- `backend` - Server-side tasks
- `setup` - Project infrastructure
- `documentation` - Docs and guides

---

*This project is designed to streamline manual testing workflows and eliminate the tedious process of crafting valid test data for API endpoints.*
