// edit.js
import {
  InspectorControls,
  MediaUpload,
  MediaPlaceholder,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  ColorPicker,
  RangeControl,
} from "@wordpress/components";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

const Edit = ({ attributes, setAttributes }) => {
  const {
    mediaUrl,
    textContent,
    titleColor,
    textColor,
    titleContent,
    titleFontSize,
    textFontSize,
  } = attributes;
  const blockProps = useBlockProps({
    className: "custom-media-text-block",
  });

  const onSelectMedia = (media) => setAttributes({ mediaUrl: media.url });
  const onChangeText = (newText) => setAttributes({ textContent: newText });
  const onChangeTitle = (newTitle) => setAttributes({ titleContent: newTitle });
  const onChangeTitleColor = (newColor) =>
    setAttributes({ titleColor: newColor });
  const onChangeTextColor = (newColor) =>
    setAttributes({ textColor: newColor });

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Media Settings" initialOpen={true}>
          <MediaUpload
            onSelect={onSelectMedia}
            allowedTypes={["video"]}
            render={({ open }) => (
              <Button onClick={open}>
                {mediaUrl ? "Reselect Video" : "Upload Video"}
              </Button>
            )}
          />
          <Button
            disabled={!mediaUrl}
            isDestructive
            onClick={() => setAttributes({ mediaUrl: "" })}
            style={{ marginTop: "10px" }}
          >
            Remove Video
          </Button>
        </PanelBody>
        {mediaUrl && (
          <div>
            <PanelBody title="Font Size" initialOpen={true}>
              <RangeControl
                __next40pxDefaultSize={true}
                label="Title Font Size"
                value={parseInt(titleFontSize, 10)}
                onChange={(size) =>
                  setAttributes({ titleFontSize: `${size}px` })
                }
                min={12}
                max={50}
              />
              <RangeControl
                __next40pxDefaultSize={true}
                label="Text Font Size"
                value={parseInt(textFontSize, 10)}
                onChange={(size) =>
                  setAttributes({ textFontSize: `${size}px` })
                }
                min={12}
                max={50}
              />
            </PanelBody>
            <PanelBody title="Color" initialOpen={true}>
              <p>Select a title color:</p>
              <ColorPicker
                color={titleColor}
                onChangeComplete={(color) => onChangeTitleColor(color.hex)}
              />
              <p>Select a text color:</p>
              <ColorPicker
                color={textColor}
                onChangeComplete={(color) => onChangeTextColor(color.hex)}
              />
            </PanelBody>
          </div>
        )}
      </InspectorControls>

      {/* Editable Text Content */}
      {mediaUrl && (
        <>
          <div className="content">
            <RichText
              tagName="p"
              value={titleContent}
              allowedFormats={["core/bold", "core/italic"]}
              onChange={onChangeTitle}
              placeholder="Enter title here..."
              className="text-position"
              style={{
                color: titleColor,
                fontSize: titleFontSize,
              }}
            />
            <RichText
              tagName="p"
              value={textContent}
              allowedFormats={["core/bold", "core/italic"]}
              onChange={onChangeText}
              placeholder="Enter text here..."
              className="text-position"
              style={{
                color: textColor,
                fontSize: textFontSize,
              }}
            />

            <button class="btn-read-more">Read More</button>
          </div>
          <button className="btn-arrow-down">
            <IoIosArrowDown size={50} color="white" />
          </button>
        </>
      )}
      {/* Media Content */}
      {mediaUrl ? (
        <video
          src={mediaUrl}
          autoplay
          muted
          loop
          playsInline
          disablePictureInPicture
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <MediaPlaceholder
          icon="format-image"
          labels={{
            title: "Media area",
            instructions: "Upload a video or select from media library.",
          }}
          onSelect={onSelectMedia}
          accept="video/*"
          allowedTypes={["video"]}
        />
      )}
    </div>
  );
};

export default Edit;
