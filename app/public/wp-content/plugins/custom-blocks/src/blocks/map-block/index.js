import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("custom/map-block", {
  attributes: {
    leftImage: {
      type: "string",
      default: "",
    },
    rightImage: {
      type: "string",
      default: "",
    },
    headline: {
      type: "string",
      source: "html",
      selector: "h2",
      default: "Vi levererar globalt",
    },
    description: {
      type: "string",
      source: "html",
      selector: "p",
      default: "Oavsett var ditt företag är baserat, kan vi leverera skräddarsydda IT-lösningar som möter dina behov.",
    },
  },

  edit({ attributes, setAttributes }) {
    const { leftImage, rightImage, headline, description } = attributes;
    const blockProps = useBlockProps();

    const onSelectLeftImage = (media) => {
      setAttributes({ leftImage: media.url });
    };

    const onSelectRightImage = (media) => {
      setAttributes({ rightImage: media.url });
    };

    return (
      <div {...blockProps} className="three-columns-block">
        <InspectorControls>
          <PanelBody title="Images">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectLeftImage}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button variant="secondary" onClick={open}>
                    {leftImage ? "Change Left Image" : "Select Left Image"}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectRightImage}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button variant="secondary" onClick={open}>
                    {rightImage ? "Change Right Image" : "Select Right Image"}
                  </Button>
                )}
              />
            </MediaUploadCheck>
          </PanelBody>
        </InspectorControls>
        <div className="content-wrapper">
          <div className="column">
            {leftImage && <img src={leftImage} alt="Left side" className="left-image" />}
          </div>
          <div className="column text-block">
            <RichText
              tagName="h2"
              value={headline}
              onChange={(value) => setAttributes({ headline: value })}
              placeholder="Enter headline..."
            />
            <RichText
              tagName="p"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Enter description..."
            />
          </div>
          <div className="column">
            {rightImage && <img src={rightImage} alt="Right side" className="right-image" />}
          </div>
        </div>
      </div>
    );
  },

  save({ attributes }) {
    const { leftImage, rightImage, headline, description } = attributes;
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps} className="three-columns-block">
        <div className="content-wrapper">
          <div className="column">
            {leftImage && <img src={leftImage} alt="Left side" className="left-image" />}
          </div>
          <div className="column text-block">
            <RichText.Content tagName="h2" value={headline} />
            <RichText.Content tagName="p" value={description} />
          </div>
          <div className="column">
            {rightImage && <img src={rightImage} alt="Right side" className="right-image" />}
          </div>
        </div>
      </div>
    );
  },
});
