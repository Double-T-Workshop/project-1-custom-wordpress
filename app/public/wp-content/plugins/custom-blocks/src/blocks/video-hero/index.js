import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";

registerBlockType("custom/video-background-block", {
  edit: ({ attributes, setAttributes }) => {
    const { videoUrl, title, subtitle, buttonText, buttonUrl } = attributes;

    const blockProps = useBlockProps({
      className: "video-background-block",
    });

    const onSelectVideo = (media) => setAttributes({ videoUrl: media.url });
    const onChangeTitle = (value) => setAttributes({ title: value });
    const onChangeSubtitle = (value) => setAttributes({ subtitle: value });
    const onChangeButtonText = (value) =>
      setAttributes({ buttonText: value });
    const onChangeButtonUrl = (value) =>
      setAttributes({ buttonUrl: value });

    return (
      <div {...blockProps}>
        <InspectorControls>
          <PanelBody title="Video Settings" initialOpen={true}>
            <MediaUpload
              onSelect={onSelectVideo}
              allowedTypes={["video"]}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {videoUrl ? "Change Video" : "Upload Video"}
                </Button>
              )}
            />
          </PanelBody>
        </InspectorControls>

        <div className="video-container">
          {videoUrl && (
            <video autoPlay muted loop playsInline>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="overlay-content">
          <RichText
            tagName="h1"
            value={title}
            onChange={onChangeTitle}
            placeholder="Enter title..."
            className="block-title"
          />
          <RichText
            tagName="p"
            value={subtitle}
            onChange={onChangeSubtitle}
            placeholder="Enter subtitle..."
            className="block-subtitle"
          />
          <div className="cta">
            <RichText
              tagName="a"
              href={buttonUrl}
              value={buttonText}
              onChange={onChangeButtonText}
              placeholder="Enter button text..."
              className="cta-button"
            />
          </div>
          <button
            className="arrow-button"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt="Arrow Icon"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { videoUrl, title, subtitle, buttonText, buttonUrl } = attributes;

    const blockProps = useBlockProps.save({
      className: "video-background-block",
    });

    return (
      <div {...blockProps}>
        <div className="video-container">
          {videoUrl && (
            <video autoPlay muted loop playsInline>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="overlay-content">
          <RichText.Content
            tagName="h1"
            value={title}
            className="block-title"
          />
          <RichText.Content
            tagName="p"
            value={subtitle}
            className="block-subtitle"
          />
          <div className="cta">
            <a href={buttonUrl} className="cta-button">
              {buttonText}
            </a>
          </div>
          <button
            className="arrow-button"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              alt="Arrow Icon"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    );
  },
});
