wp.blocks.registerBlockType("custom/block-four", {
    attributes: {
      videoUrl: {
        type: "string",
        default: "",
      },
      videoAlt: {
        type: "string",
        default: "",
      },
      overlayText: {
        type: "string",
        source: "html",
        selector: "h2",
      },
    },
  
    edit({ attributes, setAttributes }) {
      const { videoUrl, videoAlt, overlayText } = attributes;
      const blockProps = wp.blockEditor.useBlockProps();
  
      const onVideoSelect = (media) => {
        setAttributes({
          videoUrl: media.url,
          videoAlt: media.alt || "Background video",
        });
      };
  
      return (
        <div {...blockProps} className="video-background-block">
          <wp.blockEditor.InspectorControls>
            <wp.components.PanelBody title="Video Settings">
              <wp.blockEditor.MediaUploadCheck>
                <wp.blockEditor.MediaUpload
                  onSelect={onVideoSelect}
                  allowedTypes={["video"]}
                  render={({ open }) => (
                    <wp.components.Button
                      onClick={open}
                      variant="secondary"
                    >
                      {videoUrl ? "Change Video" : "Select Video"}
                    </wp.components.Button>
                  )}
                />
              </wp.blockEditor.MediaUploadCheck>
            </wp.components.PanelBody>
          </wp.blockEditor.InspectorControls>
  
          <div className="video-container">
            {videoUrl && (
              <video
                src={videoUrl}
                alt={videoAlt}
                autoPlay
                muted
                loop
                className="background-video"
              />
            )}
            <div className="overlay-text">
              <wp.blockEditor.RichText
                tagName="h2"
                value={overlayText}
                onChange={(newText) => setAttributes({ overlayText: newText })}
                placeholder="Enter overlay text..."
              />
            </div>
          </div>
        </div>
      );
    },
  
    save({ attributes }) {
      const { videoUrl, videoAlt, overlayText } = attributes;
      const blockProps = wp.blockEditor.useBlockProps.save();
  
      return (
        <div {...blockProps} className="video-background-block">
          {videoUrl && (
            <video
              src={videoUrl}
              alt={videoAlt}
              autoPlay
              muted
              loop
              className="background-video"
            />
          )}
          <div className="overlay-text">
            <wp.blockEditor.RichText.Content tagName="h2" value={overlayText} />
          </div>
        </div>
      );
    },
  });
  