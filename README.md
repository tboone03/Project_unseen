# 🏃‍♂️ Running Event Tracker

A lightweight, standalone web application for tracking runners and laps during running events. Built with React/Next.js with a portable HTML version that requires no installation!

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
- **🎨 Custom Color Scheme**: Professional grey (#8e8e8e) and red (#f56b5e) theme
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

## 📱 Screenshots

### Main Interface

- Left panel: Add new runners and search previous participants
- Right panel: Queue management with current runner highlighted
- Statistics bar: Total laps and event progress

### Key Features

- **Arthur System**: Automatic alternating runner (configurable)
- **Lap Tracking**: Individual and cumulative lap counting
- **Search Function**: Type any part of a name to quickly find runners
- **Data Persistence**: All data saved locally in browser

## 💻 Technical Details

### Tech Stack

- **Frontend Framework**: React 18 + Next.js 14
- **Styling**: Custom CSS with responsive design
- **Data Storage**: Browser localStorage
- **Export**: Static HTML/CSS/JavaScript

### Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### File Structure

```
running-event-tracker/
├── app/
│   ├── page.tsx          # Main React component
│   ├── components/       # React components
│   └── types/           # TypeScript definitions
├── index.html           # Standalone version
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## 🎯 Perfect For

- **School Sports Days**: Track student performance in running events
- **Community Races**: Manage participants in local fun runs
- **Training Sessions**: Monitor multiple athletes during practice
- **Charity Events**: Keep track of laps for fundraising runs
- **Corporate Events**: Organize company fitness challenges

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

### Color Scheme

The app uses a custom color palette defined in CSS:

- Background: `#e5e8e4` (light grey)
- Queue panel: `#f56b5e` (red)
- Other panels: `#8e8e8e` (dark grey)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Thomas Boone** - _Creator and Developer_

- Created as a practical solution for running event management
- Focuses on simplicity and ease of use
- No technical knowledge required for end users

## 🙏 Acknowledgments

- Designed for educational and community use
- Built with accessibility and usability in mind
- Inspired by the need for simple, effective event tracking

---

**📦 Just download and run - it's that simple!**

For questions or support, please open an issue on GitHub.
