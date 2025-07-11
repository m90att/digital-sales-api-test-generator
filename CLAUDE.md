# Digital Sales API Test Data Generator - AI Context Template (claude-master)

## 1. Project Overview
- **Vision:** Streamline QA testing workflows by providing a web-based tool that generates valid, realistic JSON payloads for the Digital Sales API, eliminating manual test data creation
- **Current Phase:** MVP Development - Setting up core infrastructure and basic features
- **Key Architecture:** Simple client-server architecture with Python backend (Flask/FastAPI) serving static HTML/JS frontend
- **Development Strategy:** Start with project boilerplate (Issue #10), implement MVP features sequentially (#1-6), then enhance with UI/UX improvements

## 2. Project Structure

**⚠️ CRITICAL: AI agents MUST understand the project follows a minimal, framework-free approach focused on simplicity and UK data compliance.**

Digital Sales API Test Data Generator follows a simple client-server pattern with:
- **Backend**: Python (Flask/FastAPI) for JSON generation and data validation
- **Frontend**: Plain HTML/CSS/JS (NO frameworks) for maximum simplicity
- **Data Focus**: UK-compliant formats (postcodes, phone numbers, bank details, dates)
- **Storage**: Browser session/localStorage only (no persistent database)

Expected structure:
```
/
├── app.py                    # Main Flask/FastAPI application
├── static/                   # CSS, JS files
│   ├── style.css
│   └── script.js
├── templates/                # HTML templates
│   └── index.html
├── generators/               # Data generation modules
│   ├── __init__.py
│   ├── applicant_generator.py
│   ├── uk_data_utils.py
│   └── static_defaults.py
├── requirements.txt          # Python dependencies
├── PRD.md                   # Product Requirements Document
├── CLAUDE.md                # This file
└── README.md                # Setup instructions
```

## 3. Coding Standards & AI Instructions

### General Instructions
- Your most important job is to manage your own context. Always read any relevant files BEFORE planning changes.
- When updating documentation, keep updates concise and on point to prevent bloat.
- Write code following KISS, YAGNI, and DRY principles.
- When in doubt follow proven best practices for implementation.
- Do not commit to git without user approval.
- Do not run any servers, rather tell the user to run servers for testing.
- Always consider industry standard libraries/frameworks first over custom implementations.
- Never mock anything. Never use placeholders. Never omit code.
- Apply SOLID principles where relevant. Use modern framework features rather than reinventing solutions.
- Be brutally honest about whether an idea is good or bad.
- Make side effects explicit and minimal.
- **NO FRONTEND FRAMEWORKS** - Use vanilla HTML/CSS/JS only for maximum simplicity and deployment ease.
- **UK DATA COMPLIANCE** - All generated data must follow UK formats and standards.

### File Organization & Modularity
- Default to creating multiple small, focused files rather than large monolithic ones
- Each file should have a single responsibility and clear purpose
- Keep files under 350 lines when possible - split larger files by extracting utilities, constants, types, or logical components into separate modules
- Separate concerns: utilities, constants, types, components, and business logic into different files
- Prefer composition over inheritance - use inheritance only for true 'is-a' relationships, favor composition for 'has-a' or behavior mixing
- Follow existing project structure and conventions - place files in appropriate directories. Create new directories and move files if deemed appropriate.
- Use well defined sub-directories to keep things organized and scalable
- Structure projects with clear folder hierarchies and consistent naming conventions
- Import/export properly - design for reusability and maintainability

### Type Hints (REQUIRED)
- **Always** use type hints for function parameters and return values
- Use `from typing import` for complex types
- Prefer `Optional[T]` over `Union[T, None]`
- Use Pydantic models for data structures when using FastAPI

```python
# Good
from typing import Optional, List, Dict, Tuple

def generate_applicant_data(
    role: str,
    include_address: bool = True,
    randomize: Optional[bool] = None
) -> Dict[str, Any]:
    """Generate UK-compliant applicant data."""
    pass
```

### Naming Conventions
- **Classes**: PascalCase (e.g., `ApplicantGenerator`)
- **Functions/Methods**: snake_case (e.g., `generate_uk_postcode`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `UK_POSTCODE_PATTERN`)
- **Private methods**: Leading underscore (e.g., `_validate_sort_code`)
- **Pydantic Models**: PascalCase with `Schema` suffix (e.g., `ApplicantRequestSchema`)

### Documentation Requirements
- Every module needs a docstring
- Every public function needs a docstring
- Use Google-style docstrings
- Include type information in docstrings

```python
def generate_uk_postcode() -> str:
    """Generate a valid UK postcode.

    Returns:
        A realistic UK postcode in the format 'AB12 3CD'

    Example:
        >>> postcode = generate_uk_postcode()
        >>> print(postcode)  # 'SW1A 1AA'
    """
    pass
```

### Security First
- Never trust external inputs - validate everything at the boundaries
- Keep secrets in environment variables, never in code
- Validate all form inputs before processing
- Sanitize all user inputs before generating JSON
- Use CORS properly for local development

### Error Handling
- Use specific exceptions over generic ones
- Always log errors with context
- Provide helpful error messages to users
- Fail gracefully - show user-friendly error messages in the UI

### API Design Principles
- RESTful design with consistent URL patterns
- Use HTTP status codes correctly
- Consistent JSON response format:
  - Success: `{ "data": {...}, "error": null }`
  - Error: `{ "data": null, "error": {"message": "...", "code": "..."} }`
- Keep API simple - primary endpoint is `POST /generate`

### UK Data Standards
- **Postcodes**: Valid UK format (e.g., 'SW1A 1AA', 'M1 1AA')
- **Phone Numbers**: UK mobile/landline formats (e.g., '+44 7700 900123', '020 7946 0958')
- **Bank Details**: Valid UK sort codes (6 digits, hyphen-separated) and account numbers (8 digits)
- **Dates**: DD/MM/YYYY format, realistic birth dates (18+ years ago)
- **Names**: Use UK-appropriate names from Faker UK locale

## 4. GitHub Issues Workflow

### Implementation Order
1. **Issue #10**: Project Boilerplate - Set up basic Flask/FastAPI + static serving
2. **Issue #8**: Backend Generator - Core JSON generation logic
3. **Issue #7**: Basic Web UI - HTML form + preview panel
4. **Issue #1**: Generate Valid Applicant JSON - Core form functionality
5. **Issue #2**: UK-Valid Randomization - Realistic data generation
6. **Issue #3**: JSON Preview Panel - Real-time updates
7. **Issue #4**: Static Defaults - Asset/dealer/status blocks
8. **Issue #9**: Generate JSON Button - Tie frontend to backend
9. **Issue #5**: History - Session storage functionality
10. **Issue #6**: Export to CSV - Bulk export capability
11. **Issue #11**: README - Documentation and setup guide

### Issue Reference
Each GitHub issue contains detailed acceptance criteria and implementation tasks. Always reference the specific issue when working on features.

## 5. Key Libraries & Dependencies

### Python Backend
- **Flask** or **FastAPI** - Web framework
- **Faker** - Realistic data generation (UK locale)
- **CORS** - Cross-origin requests for local development
- **Pydantic** - Data validation (if using FastAPI)

### Frontend (Vanilla JS)
- **No frameworks** - Pure HTML/CSS/JS
- **localStorage/sessionStorage** - Client-side data persistence
- **Fetch API** - HTTP requests to backend
- **JSON** - Data format for API communication

## 6. Testing Strategy
- Focus on UK data validation (postcodes, phone numbers, bank details)
- Test form validation and error handling
- Verify JSON output matches Digital Sales API schema
- Test CSV export functionality
- Validate session storage/history features

## 7. Post-Task Completion Protocol
After completing any coding task, follow this checklist:

### 1. Type Safety & Quality Checks
- **Python**: Run `mypy` for type checking
- **Code Quality**: Check for UK data compliance
- **API Testing**: Test endpoints with realistic data

### 2. Verification
- Ensure all type checks pass before considering the task complete
- Test generated data follows UK formats
- Verify JSON output structure matches API requirements
- Check UI responsiveness and usability
- If type errors are found, fix them before marking the task as done

### 3. Documentation Updates
- Update README.md if setup instructions change
- Add any new dependencies to requirements.txt
- Document any new UK data validation rules or formats
