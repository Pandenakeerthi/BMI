## 📱 BMI Calculator App

A clean and simple Body Mass Index (BMI) Calculator where users enter **height in meters (m)** and **weight in kilograms (kg)**.
The app instantly calculates BMI and shows the correct health category.

---

## ⭐ Features

* ✔️ Enter height (meters)
* ✔️ Enter weight (kilograms)
* ✔️ Instant BMI calculation
* ✔️ Shows category: Underweight, Normal, Overweight, Obesity
* ✔️ Responsive and beginner-friendly
* ✔️ Works in all browsers

---

## 🧮 BMI Formula

```
BMI = Weight (kg) / (Height (m) × Height (m))
```

---

## 📂 Project Structure

```
/BMI-Calculator
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 🚀 How to Run the App

1. Clone or download the project
2. Open **index.html**
3. Use the calculator in your browser — no setup needed

---

## 📊 BMI Categories

| BMI Range      | Category      |
| -------------- | ------------- |
| Less than 18.5 | Underweight   |
| 18.5 – 24.9    | Normal Weight |
| 25 – 29.9      | Overweight    |
| 30 and above   | Obese         |

---

## 🧠 JavaScript Logic (Height in Meters)

```javascript
const calculateBMI = () => {
    let height = document.getElementById("height").value; // meters
    let weight = document.getElementById("weight").value; // kg

    if (height === "" || weight === "") {
        alert("Please enter both height and weight!");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("result").innerText = "Your BMI is: " + bmi;
};
```

---

## 🌐 Deployment

### GitHub Pages

* Push the project → Settings → Pages → Deploy
* Live within seconds

* GitHub link(https://pandenakeerthi.github.io/BMI/)

---

## 📧 Contact

Feel free to reach out if you need help with UI, code, or deployment!
