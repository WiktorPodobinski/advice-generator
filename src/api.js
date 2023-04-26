import React from "react";
import ReactDOM from "react-dom";

export const fetchAdvice = async (numEntries) => {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/search/${numEntries}`
    );
    const data = await response.json();
    const allSlips = data.slips;
    const selectedSlips = [];

    while (selectedSlips.length < numEntries) {
      const randomIndex = Math.floor(Math.random() * allSlips.length);
      const randomSlip = allSlips[randomIndex];
      if (!selectedSlips.some((slip) => slip.id === randomSlip.id)) {
        selectedSlips.push(randomSlip);
      }
    }

    return selectedSlips.map((slip) => ({
      id: slip.slip_id,
      advice: slip.advice,
    }));
  } catch (error) {
    console.error(error);
    return null;
  }
};
