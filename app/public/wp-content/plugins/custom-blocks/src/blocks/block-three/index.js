import { useBlockProps } from "@wordpress/block-editor";

wp.blocks.registerBlockType("custom/block-three", {
  edit() {
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
        <p>Custom Block 3 - Editable content here.</p>
      </div>
    );
  },
  save() {
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <p>Custom Block 3 - Saved content here.</p>
      </div>
    );
  },
});
