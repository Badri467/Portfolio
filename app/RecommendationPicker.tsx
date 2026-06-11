"use client";

import { useState } from "react";

type RecommendationPickerProps = {
  eyebrow: string;
  items: string[];
  prompt: string;
  title: string;
};

export default function RecommendationPicker({
  eyebrow,
  items,
  prompt,
  title,
}: RecommendationPickerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [spinCount, setSpinCount] = useState(0);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  const pickRandomItem = () => {
    setActiveIndex((currentIndex) => {
      if (items.length === 0) {
        return null;
      }

      if (items.length === 1) {
        return 0;
      }

      let nextIndex = Math.floor(Math.random() * items.length);

      while (currentIndex !== null && nextIndex === currentIndex) {
        nextIndex = Math.floor(Math.random() * items.length);
      }

      return nextIndex;
    });
    setSpinCount((currentCount) => currentCount + 1);
  };

  const closeRecommendation = () => {
    setActiveIndex(null);
  };

  return (
    <div className="recommender-compact">
      <button
        className="recommender-compact__trigger"
        type="button"
        onClick={pickRandomItem}
      >
        {prompt}
      </button>
      <div
        aria-live="polite"
        className="recommender-compact__result"
        key={`${activeItem ?? "empty"}-${spinCount}`}
      >
        {activeItem ? (
          <div>
            <p>
              <span>{eyebrow}</span>
              <strong>{activeItem}</strong>
            </p>
            <button
              aria-label={`Close ${title} recommendation`}
              type="button"
              onClick={closeRecommendation}
            >
              ×
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
