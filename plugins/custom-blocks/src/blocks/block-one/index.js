import { useBlockProps } from "@wordpress/block-editor";

wp.blocks.registerBlockType("custom/block-one", {
  edit() {
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
        <p>Custom Block 1 - Editable content here.</p>
      </div>
    );
  },
  save() {
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <p>Custom Block 1 - Saved content here.</p>
      </div>
    );
  },
});
