const { registerBlockType } = wp.blocks;
const { InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;
const { useState } = wp.element;

registerBlockType("your-plugin/your-custom-block", {
  title: "Custom Block",
  icon: "smiley",
  category: "common",
  attributes: {
    backgroundColor: {
      type: "string",
      default: "#ffffff",
    },
    textColor: {
      type: "string",
      default: "#000000",
    },
    width: {
      type: "number",
      default: 100,
    },
    padding: {
      type: "number",
      default: 10,
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { backgroundColor, textColor, width, padding } = attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title="Custom Styles">
            <h2>Background Color</h2>
            <ColorPalette
              value={backgroundColor}
              onChange={(color) => setAttributes({ backgroundColor: color })}
            />
            <h2>Text Color</h2>
            <ColorPalette
              value={textColor}
              onChange={(color) => setAttributes({ textColor: color })}
            />
            <RangeControl
              label="Width (%)"
              value={width}
              onChange={(newWidth) => setAttributes({ width: newWidth })}
              min={0}
              max={100}
            />
            <RangeControl
              label="Padding (px)"
              value={padding}
              onChange={(newPadding) => setAttributes({ padding: newPadding })}
              min={0}
              max={50}
            />
          </PanelBody>
        </InspectorControls>

        <div
          style={{
            backgroundColor,
            color: textColor,
            width: `${width}%`,
            padding: `${padding}px`,
          }}
        >
          <p>Your custom block content</p>
        </div>
      </>
    );
  },
  save: ({ attributes }) => {
    const { backgroundColor, textColor, width, padding } = attributes;

    return (
      <div
        style={{
          backgroundColor,
          color: textColor,
          width: `${width}%`,
          padding: `${padding}px`,
        }}
      >
        <p>Your custom block content</p>
      </div>
    );
  },
});
