// AuroraBackground.jsx
const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] bg-gradient-to-tr from-purple-500 via-blue-400 to-green-300 opacity-30 rounded-full blur-3xl animate-aurora"></div>
    </div>
  );
};

export default AuroraBackground;
