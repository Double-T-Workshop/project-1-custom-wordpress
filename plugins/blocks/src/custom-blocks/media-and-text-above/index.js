// index.js
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";

registerBlockType("custom/media-and-text-above", {
  attributes: {
    mediaUrl: { type: "string", default: "" },
    titleColor: { type: "string", default: "#ffffff" },
    textColor: { type: "string", default: "#ffffff" },
    titleContent: { type: "string", source: "html", selector: "p" },
    textContent: { type: "string", source: "html", selector: "p" },
    titleFontSize: { type: "string", default: "24px" },
    textFontSize: { type: "string", default: "14px" },
  },
  example: {
    attributes: {
      mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
      textContent: "This is a preview of the block!",
      titleContent: "This is a preview of the block!",
    },
  },
  edit: Edit,
  save: Save,
});
