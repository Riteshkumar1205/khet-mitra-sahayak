## 🌾 Khet Mitra Sahayak

Khet Mitra Sahayak is an agricultural decision-support platform designed to provide **practical, data-driven, and accessible** guidance to farmers and agricultural field workers. The platform combines crop suitability insights, plant disease detection, and weather-aware advisory recommendations to support informed cultivation planning and improved farm outcomes.

---

## 🎯 Purpose
The platform is developed to **assist farmers of all digital literacy levels**, enabling them to:

- Identify the most suitable crops for their land and regional conditions.
- Detect plant diseases using leaf images.
- Receive timely farming recommendations aligned with local weather patterns.
- Make informed decisions that reduce risk, cost, and avoidable crop losses.

The platform is **intentionally simple, direct, and accessible**, ensuring usability without requiring technical expertise.

---

## ✨ Core Features

| Capability                                            |                           Description |                                       
|-------------------------------------------------------|----------------------------------------------------------------|
| **Crop Recommendation Engine**                        | Provides crop suggestions based on soil, climate, region, and environmental indicators. |
| **Plant Disease Detection**                           | Uses image-based analysis to identify diseases and deliver step-by-step preventive and corrective guidance. |
| **Localized Weather Guidance**                        | Helps determine optimal timings for sowing, irrigation, fertilization, and pest control. |
| **Farmer-Friendly Interface**                         | Designed for clarity, readability, and use on low-bandwidth and mobile devices. |
| **Modular System Design**                             | Easily extendable to additional crops, regional languages, or advisory modules. |

---

## 🏗️ System Architecture Overview

| Layer          | Technology    |
|----------------|---------------|
| Frontend       | React, TypeScript, Vite, Tailwind CSS, shadcn-ui |
| Model Runtime  | TensorFlow / PyTorch |
| Backend (optional)| Flask / Node.js |
| External Integrations | Weather and soil dataset APIs (configurable) |

---

## 🧑‍💻 Installation & Development Setup

### Clone the Repository
~~~
git clone https://github.com/Riteshkumar1205/khet-mitra-sahayak.git
cd khet-mitra-sahayak
~~~
Install Frontend Dependencies
~~~
npm install
npm run dev
~~~
If using backend services, start the API server separately:
~~~
python app.py     # Flask example
~~~
## 🧠 Model Integration (Optional Configuration)
If using custom disease detection or advisory models:

Place trained models in the models/ directory.

Update the model load path in backend configuration.

Test inference to verify compatibility and output formatting.

## ⚙️ Configuration Options
You may customize:

Crop & disease knowledge base

Weather API and location settings

Language/localization text

Offline caching strategy for low-connectivity agricultural environments

All configurable variables are documented in the project configuration files.

## 🚀 Deployment
Build for Production
~~~
npm run build
~~~
**Deployment Options**
Platform	Suitability	Notes
Vercel / Netlify	Frontend-only	Recommended for fast public demos
GitHub Pages	Static hosting	Good for community distribution
AWS / Render / Railway	Full-stack	Recommended for live production environments

## 🧾 Use & Content Policy
This platform is provided for open agricultural support and community development.
Farmers, researchers, and institutions may use and adapt the system freely as long as proper attribution is maintained.

Permitted Use
Personal farming applications

Training, awareness programs, and academic research

Public demonstration and community agriculture initiatives

**Restricted Use**
Republishing, rebranding, or commercializing the project without attribution

Copying system content, crop advisory texts, UI language, or datasets as-is and claiming original authorship

Attribution may be included as:
Based on the Khet Mitra Sahayak project by Ritesh Kumar

## 🤝 Contribution & Collaboration
Contributions are welcome, particularly for:

Regional language support

Crop/disease knowledge expansion

Agricultural advisory expert input

Offline-first optimization

To contribute:
~~~
git checkout -b enhancement/name
git commit -m "Describe your enhancement"
git push
~~~
Then open a Pull Request.

## 📄 License
This project is licensed under the MIT License.
Users are permitted to use, modify, and distribute the software with proper attribution.

🔎 Acknowledgment (Minimal & Professional)
Initial interface scaffolding was partially assisted using Lovable AI, followed by full customization, logic integration, and domain-specific content development
