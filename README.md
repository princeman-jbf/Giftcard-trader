# Giftcard Trader - Mobile App

A secure, modern mobile application for buying, selling, and trading gift cards. Built with React Native and Expo for seamless deployment to iOS, Android, and Samsung Galaxy Store.

## Features

✅ **User-Friendly Interface** - Intuitive navigation with bottom tab navigation
✅ **Complete Trading Guide** - Step-by-step instructions for all trading scenarios
✅ **Safety First** - Comprehensive safety tips and fraud prevention guidelines
✅ **Supported Gift Cards** - Browse 12+ popular retailers with transparent fees
✅ **FAQ Section** - Expandable Q&A covering all common questions
✅ **24/7 Support** - Contact information and support resources
✅ **Mobile Optimized** - Responsive design for all screen sizes
✅ **Cross-Platform** - Deploy to iOS, Android, and Samsung Galaxy Store

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Simplified React Native tooling and deployment
- **React Navigation** - Seamless navigation between screens
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/princeman-jbf/giftcard-trader.git
cd giftcard-trader
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on specific platform:
```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

## Building for App Stores

### iOS App Store

```bash
npm run build:ios
npm run submit:ios
```

### Google Play Store

```bash
npm run build:android
```

### Samsung Galaxy Store

```bash
npm run build:android
```

## Project Structure

```
giftcard-trader/
├── App.tsx                      # Main app with navigation
├── app.json                     # Expo configuration
├── package.json                 # Dependencies and scripts
├── screens/
│   ├── HomeScreen.tsx          # Welcome and overview
│   ├── HowToTradeScreen.tsx    # Step-by-step trading guide
│   ├── SafetyTipsScreen.tsx    # Safety guidelines
│   ├── SupportedCardsScreen.tsx# Gift cards and fees
│   ├── FAQScreen.tsx           # Frequently asked questions
│   └── SupportScreen.tsx       # Contact and support
├── assets/
│   ├── icon.png                # App icon (1024x1024)
│   ├── splash.png              # Splash screen (1242x2436)
│   └── adaptive-icon.png       # Android adaptive icon
├── .gitignore
└── README.md
```

## Customization

### Branding
- Primary: `#667eea`
- Secondary: `#764ba2`

### Content
- Edit text in each screen component
- Update FAQ data in `FAQScreen.tsx`
- Modify supported cards list in `SupportedCardsScreen.tsx`

## Support

For issues or questions:
- Email: support@giftcardtrader.com
- GitHub Issues: Create an issue

## License

MIT License

---

**Ready to publish?** Follow the Publishing Guide for app store submission!