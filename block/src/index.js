const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType("custom/block", {
  title: "Custom Block",
  icon: "smiley",
  category: "common",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },
  edit({ attributes, setAttributes }) {
    const onChangeContent = (newContent) => {
      setAttributes({ content: newContent });
    };

    return (
      <>
        <RichText tagName="p" onChange={onChangeContent} value="1234566" />
        <RichText
          tagName="p"
          onChange={onChangeContent}
          value={attributes.content}
        />
      </>
    );
  },
  save({ attributes }) {
    return <RichText.Content tagName="p" value={attributes.content} />;
  },
});
