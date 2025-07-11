# 📝 Product Requirements Document (PRD)

## Project Title: Digital Sales API Test Data Generator

## 1. 🎯 Purpose
To streamline and accelerate manual testing of the Digital Sales API by providing a web-based tool that generates valid, varied JSON payloads—especially focused on applicant configurations. The tool will assist QA engineers in daily testing workflows by eliminating the need to manually craft and validate test data.

## 2. 👥 Target Users
- **Primary**: QA Engineers
- **Secondary**: Developers (optional future use)

## 3. 📌 Scope (MVP)

### ✅ Core Features

| Feature | Description |
|---------|-------------|
| Form-based configuration | UI to configure applicant-related fields (e.g., role, name, gender, marital status, DOB, etc.) |
| UK-valid randomization | Auto-generate values that adhere to UK formats (e.g., DOB, postal codes) within constraints |
| Static defaults | Asset, dealer, and other sections use pre-defined static data templates |
| Preview pane | Show the complete JSON payload in real-time as users configure inputs |
| Export to JSON | Allow export/copy of individual payloads for direct use in Postman |
| History | Save a list of previously generated payloads in the browser session |
| Export to CSV | Export multiple test records (e.g., 5–20) into a downloadable CSV file |

## 4. 🧪 Non-Goals (for MVP)
- No API submission or authentication
- No validation of API responses
- No environment switching or login

## 5. ⚙️ Configuration Details

### User-Configurable via Form:
- Number of applicants
- Applicant roles (MAIN, GUARANTOR, PAYEE, etc.)
- Name and title
- Gender
- Marital status
- Date of birth
- Housing situation
- Income level (within valid UK ranges)
- Contact types and dummy values
- Address (UK-valid city, postcode, etc.)
- Bank details (synthetic, UK-valid format)
- Affordability entries
- Declarations

### Static Pre-filled Sections:
- CompanyApplicants
- Asset (with dummy vehicle)
- Dealer
- FinancialCalculation
- Status block

## 6. 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| Backend | Python (Flask/FastAPI) |
| Frontend | Plain HTML/JS (minimal libraries) |
| Libraries | Faker, random, json, csv, optional: UKPostalCodes, moment.js |
| Hosting | Local or internal server deployment |

## 7. 🖥 UI Design (MVP)

### Page Layout
- **Left panel**: Form for input
- **Right panel**: JSON preview
- **Top nav**: "New Payload", "Export CSV", "History"
- **Bottom bar**: "Generate JSON" button

## 8. 📤 Output

### JSON
- Valid POST payload ready for /proposals endpoint
- Supports multiple roles and nested structures

### CSV (Post-MVP enhancement)
- Exports multiple proposal records
- Flattens JSON intelligently or stores the payload as stringified JSON per row

## 9. 📈 Future Enhancements (Post-MVP)
- Configuration for product types and asset details
- Batch generation of test records (e.g., 10 proposals)
- CSV import/export of config templates
- API interaction (optional)
- UI improvements (filter, duplicate, edit payloads)

## 10. 🧪 Validation Rules (MVP)
Ensure all generated values pass API validation

Match UK format standards for:
- Date of birth
- Postcode
- Phone number
- Bank account details

## 11. 📦 Deliverables
- Python backend script to generate JSON payloads
- HTML/JS frontend interface
- JSON preview with copy functionality
- CSV export of payload list
- README with setup instructions

---

## Implementation Notes
This project is structured as GitHub issues for systematic development. See the Issues tab for detailed user stories and implementation tasks.
