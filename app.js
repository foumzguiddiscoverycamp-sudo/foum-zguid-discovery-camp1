const { useState, useEffect } = React;

const translations = {
  en: {
    // ... (ضع هنا كل الترجمات الإنجليزية)
  },
  fr: {
    // ... (ضع هنا كل الترجمات الفرنسية)
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white">
      {/* ضع هنا كل كود الموقع */}
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Foum Zguid Discovery Camp</h1>
        <p className="text-xl">Welcome to the Sahara!</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));