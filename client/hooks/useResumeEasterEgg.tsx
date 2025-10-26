import { useEffect, useRef, useState } from "react";

export default function useResumeEasterEgg() {
  const [visible, setVisible] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const resetTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTap = () => {
      setTapCount((prev) => prev + 1);

      // reset timer every click
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
      resetTimeout.current = setTimeout(() => setTapCount(0), 1500);
    };

    document.addEventListener("click", handleTap);

    if (tapCount >= 5) {
      // Easter egg: trigger resume download
      const link = document.createElement("a");
      link.href = "/SahilNaik_Resume.pdf";
     // link.download = "SahilNaik_Resume.pdf";
      link.click();

      // optional: show hidden input for future gimmicks
      // setVisible(true);
      setTapCount(0);
    }

    return () => {
      document.removeEventListener("click", handleTap);
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, [tapCount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();

    if (value.includes("resume")) {
      const link = document.createElement("a");
      link.href = "/SahilNaik_Resume.pdf";
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
      className="fixed bottom-6 right-6 bg-white/90 text-black p-3 rounded-xl shadow-lg border border-gray-300 focus:outline-none z-[9999] transition-all duration-300 backdrop-blur-md"
    />
  );
}
