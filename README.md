# 📌 JobPulse - AI-Powered Job Data Extractor

Welcome to **JobPulse** 🚀, an AI-powered tool that scrapes job listings from websites and extracts structured job data in JSON format. This FastAPI-based backend leverages **LangChain** and **Groq API** to provide accurate and real-time job details, including role, experience, skills, and description.

---

## ✨ Features

### 🔍 **AI-Powered Job Extraction**
- Automatically extracts job roles, experience, skills, and descriptions.
- Utilizes **LangChain** and **Groq API** for efficient parsing.

### 🌐 **Web Scraping Capabilities**
- Scrapes job postings directly from career pages.
- Fast and accurate job data retrieval.

### 📦 **JSON Output for Easy Integration**
- Structured JSON format ensures seamless API integration.
- Can be used in HR analytics, job portals, and recruitment tools.

### 🔧 **FastAPI Backend**
- Provides a REST API endpoint to fetch job data from a given URL.
- Efficient, scalable, and easy to deploy.

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```bash
 git clone https://github.com/your-repository/jobpulse.git
```

### 2️⃣ **Navigate to Project Directory**
```bash
 cd jobpulse
```

### 3️⃣ **Set Up Virtual Environment**
```bash
 python -m venv venv
 source venv/bin/activate   # On macOS/Linux
 venv\Scripts\activate     # On Windows
```

### 4️⃣ **Install Dependencies**
```bash
 pip install -r requirements.txt
```

### 5️⃣ **Run the FastAPI Server**
```bash
 uvicorn main:app --reload
```

### 6️⃣ **Test the API Endpoint**
Use the following sample URL to test the job extraction API:
```bash
 curl -X GET "http://127.0.0.1:8000/fetch-job/?url=https://careers.nike.com/principal-software-engineer/job/R-46010"
```
Example Response:
```json
{
  "status": "success",
  "data": {
    "role": "Principal Software Engineer",
    "experience": "Minimum 12+ years of experience in software engineering...",
    "skills": ["Cloud platforms", "Technical leadership", "Problem-solving"],
    "description": "We are seeking a Principal Engineer at Nike..."
  }
}
```

---

## 📸 Screenshots

### 🔹 **Job Extraction API in Action**
![Job Extraction API](screenshots/api_response.png)

### 🔹 **Frontend Interface (if applicable)**
![Frontend UI](screenshots/frontend_ui.png)

---

## 📂 Project Structure
```
jobpulse/
│── main.py          # FastAPI backend
│── frontend/        # Frontend files (HTML, CSS, JS)
│── requirements.txt # Dependencies
│── screenshots/     # Screenshots for documentation
└── README.md        # Project documentation
```

---

## 🚧 **Future Enhancements**
🔜 Upcoming features:
- **Real-time Job Alerts** 🔔
- **Company Insights & Salary Trends** 📊
- **Multi-language Job Parsing** 🌍

---

## 🤝 **Contributing**
We welcome contributions! To contribute:
1. Fork the repository 🍴
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push the branch: `git push origin feature-branch`
5. Open a Pull Request 🔥

---

## 📞 Contact
📧 **Email**: support@jobpulse.com  
🌐 **Website**: [JobPulse.com](https://jobpulse.com)

---

Thank you for using **JobPulse**! 🚀 Happy Coding! 🎉

