import { useEffect, useRef, useState } from "react";

export default function useResumeEasterEgg() {
  const [visible, setVisible] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleTap = () => setTapCount((prev) => prev + 1);
    document.addEventListener("click", handleTap);

    // reset taps every 1.5 s
    const reset = setInterval(() => setTapCount(0), 1500);

    if (tapCount >= 5) {
      setVisible(true);
      setTapCount(0);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("click", handleTap);
      clearInterval(reset);
    };
  }, [tapCount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();

    if (value.includes("resume")) {
      const link = document.createElement("a");
      link.href = "/SahilNaik_Resume.pdf";
      //link.download = "SahilNaik_Resume.pdf";
      link.click();

      e.target.value = "";
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <input
      ref={inputRef}
      onChange={handleChange}
      placeholder="Type something..."
      className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-lg shadow-lg border border-gray-300 focus:outline-none z-[9999] transition-opacity duration-300"
    />
  );
}
