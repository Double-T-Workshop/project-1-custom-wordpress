import { useBlockProps } from "@wordpress/block-editor";

wp.blocks.registerBlockType("custom/custom-css-block-wordpress-style", {
  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
        <p>Content</p>
      </div>
    );
  },
  save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <p>Content</p>
      </div>
    );
  },
});
