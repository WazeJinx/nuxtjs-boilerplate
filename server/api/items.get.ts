import { defineEventHandler } from "h3";

/**
 * Put proper API calls here
 * When deployed, the calls wont appear in network tab, unlike in development
 */
export default defineEventHandler(() => {
  return [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" },
  ];
});
