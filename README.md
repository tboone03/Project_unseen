# 🏃‍♂️ Running Event Tracker

Lightweight lap tracker — React/Next.js plus a standalone HTML version (no install).

Built for a friend who attempted and succeeded the 24‑hour run on. he used this app to log his own laps and others

![Running Event Tracker](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

## ✨ Features

- **📝 Runner Management**: Add runners to queue with automatic alternating system
- **🔄 Smart Queue System**: Visual queue showing upcoming runners with individual lap counts
- **🏆 Live Leaderboard**: Real-time ranking based on completed laps
- **📊 Statistics Dashboard**: Track total laps completed across all runners
- **🔍 Smart Search**: Quickly find and re-add previous runners by name
- **💾 Auto-Save**: Data persists automatically in browser localStorage
- **🗑️ Data Management**: Clear all data with confirmation dialog
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **⚡ Offline-First**: Works completely offline once loaded

## 🚀 Quick Start

### Option 1: Standalone HTML Version (Recommended)

1. **Download** the `index.html` file
2. **Double-click** to open in any web browser
3. **Start tracking** - no installation needed!

### Option 2: Development Version

```bash
# Clone the repository
git clone https://github.com/yourusername/running-event-tracker.git
cd running-event-tracker

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 💻 Technical Details

### Tech Stack

- **Frontend Framework**: React + Next.js
- **Styling**: Tailwind CSS with responsive design
- **Data Storage**: Browser localStorage
- **Export**: Static HTML/CSS/JavaScript

## 📖 How to Use

### Adding Runners

1. Enter first name and last name in the left panel
2. Click "Toevoegen aan queue" to add to the running order
3. Arthur (alternating runner) is automatically added between participants

### Managing the Queue

1. Current runner is highlighted in the red panel
2. Click "Next" when a runner completes their lap
3. Use the ❌ button to remove runners from queue
4. Search previous runners to quickly re-add them

### Viewing Results

- **Live Leaderboard**: Shows all participants ranked by lap count
- **Statistics Bar**: Displays total laps and active runner count
- **Queue Position**: Shows current progress through the queue

### Data Management

- Data automatically saves in your browser
- Use "🗑️ Wis Alles" to clear all data (with confirmation)
- Export data by copying from the leaderboard table

## 🛠️ Configuration

### Customizing the Alternating Runner

Edit the `ARTHUR` constant in the JavaScript section:

```javascript
const ARTHUR = {
  firstName: "Your",
  lastName: "Name",
  laps: 0,
};
```

    ---

**📦 Just download and run - it's that simple!**

For questions or support, please open an issue on GitHub.
