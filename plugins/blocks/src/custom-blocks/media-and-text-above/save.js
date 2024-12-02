// save.js
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

const Save = ({ attributes }) => {
  const {
    mediaUrl,
    textContent,
    titleColor,
    textColor,
    titleContent,
    titleFontSize,
    textFontSize,
  } = attributes;
  const blockProps = useBlockProps.save({
    className: "custom-media-text-block",
  });

  return (
    <div {...blockProps}>
      {mediaUrl && (
        <>
          <div className="content">
            <RichText.Content
              tagName="p"
              value={titleContent}
              className="text-position"
              style={{
                color: titleColor,
                fontSize: titleFontSize,
              }}
            />
            <RichText.Content
              tagName="p"
              value={textContent}
              className="text-position"
              style={{
                color: textColor,
                fontSize: textFontSize,
              }}
            />
            <button className="btn-read-more">Read More</button>
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
        <p>No media selected</p>
      )}
    </div>
  );
};

export default Save;
