// import { useBlockProps } from "@wordpress/block-editor";

// wp.blocks.registerBlockType("custom/block-one", {
//   edit() {
//     const blockProps = useBlockProps();

//     return (
//       <div {...blockProps}>
//         <p>Custom Block 1 - Editable content here.</p>
//       </div>
//     );
//   },
//   save() {
//     const blockProps = useBlockProps.save();

//     return (
//       <div {...blockProps}>
//         <p>Custom Block 1 - Saved content here.</p>
//       </div>
//     );
//   },
// });

 

wp.blocks.registerBlockType("custom/block-one", {
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
    imageAlt: {
      type: "string",
      default: "",
    },
    content: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },

  edit({ attributes, setAttributes }) {
    const { imageUrl, imageAlt, content } = attributes;
    const blockProps = wp.blockEditor.useBlockProps();

    const onImageSelect = (media) => {
      setAttributes({
        imageUrl: media.url,
        imageAlt: media.alt,
      });
    };

    return (
      <div {...blockProps}>
        <wp.blockEditor.InspectorControls>
          <wp.components.PanelBody title="Image Settings">
            <wp.blockEditor.MediaUploadCheck>
              <wp.blockEditor.MediaUpload
                onSelect={onImageSelect}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <wp.components.Button
                    onClick={open}
                    variant="secondary"
                  >
                    {imageUrl ? "Change Image" : "Select Image"}
                  </wp.components.Button>
                )}
              />
            </wp.blockEditor.MediaUploadCheck>
          </wp.components.PanelBody>
        </wp.blockEditor.InspectorControls>
        <div className="image-text-block">
          {imageUrl && <img src={imageUrl} alt={imageAlt} />}
          <wp.blockEditor.RichText
            tagName="p"
            value={content}
            onChange={(newContent) =>
              setAttributes({ content: newContent })
            }
            placeholder="Enter text here..."
          />
        </div>
      </div>
    );
  },

  save({ attributes }) {
    const { imageUrl, imageAlt, content } = attributes;
    const blockProps = wp.blockEditor.useBlockProps.save();

    return (
      <div {...blockProps}>
        {imageUrl && <img src={imageUrl} alt={imageAlt} />}
        <wp.blockEditor.RichText.Content tagName="p" value={content} />
      </div>
    );
  },
});
