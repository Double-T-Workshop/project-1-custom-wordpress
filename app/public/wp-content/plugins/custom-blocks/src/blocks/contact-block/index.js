import { MediaUpload, InspectorControls, RichText } from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const { registerBlockType } = wp.blocks;

registerBlockType("custom/contact-block", {
    title: "Contact Block",
    icon: "email",
    category: "common",
    supports: {
        html: false,
        removable: true,
    },

    attributes: {
        formShortcode: { type: "string", default: "[contact-form-7 id='6bdd3b1' title='Contact form 1']" },
        imageUrl: { type: "string", default: "path/to/image.jpg" },
        heading: { type: "string", default: "Kontakta oss" },
        content: { type: "string", default: "Har du frågor eller vill du veta mer om våra tjänster? Tveka inte att höra av dig till oss! Vi finns här för att hjälpa dig att hitta rätt IT-lösning för ditt företag." },
    },

    edit: ({ attributes, setAttributes }) => {
        const { formShortcode, imageUrl, heading, content } = attributes;

        const onImageSelect = (media) => {
            setAttributes({ imageUrl: media.url });
        };

        const onChangeHeading = (value) => {
            setAttributes({ heading: value });
        };

        const onChangeContent = (value) => {
            setAttributes({ content: value });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Image Settings">
                        <MediaUpload
                            onSelect={onImageSelect}
                            allowedTypes={["image"]}
                            value={imageUrl}
                            render={({ open }) => (
                                <Button onClick={open} variant="secondary" isSecondary>
                                    {imageUrl ? "Change Image" : "Upload Image"}
                                </Button>
                            )}
                        />
                    </PanelBody>
                    <PanelBody title="Form Settings">
                        <textarea
                            value={formShortcode}
                            onChange={(e) => setAttributes({ formShortcode: e.target.value })}
                            placeholder="Enter form shortcode"
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="custom-contact-block">
                    <div className="contact-left">
                        <div className="image-container">
                            {imageUrl ? (
                                <img src={imageUrl} alt="Contact Illustration" />
                            ) : (
                                <p>No image selected</p>
                            )}
                        </div>
                        <div className="contact-info">
                            {/* Editable heading */}
                            <RichText
                                tagName="h2"
                                value={heading}
                                onChange={onChangeHeading}
                                placeholder="Enter heading..."
                            />

                            {/* Editable content */}
                            <RichText
                                tagName="p"
                                value={content}
                                onChange={onChangeContent}
                                placeholder="Enter description..."
                            />
                            <p>📧 info@novoit.com</p>
                            <p>📞 +46 (0)70–791 81 77</p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div dangerouslySetInnerHTML={{ __html: formShortcode }} />
                    </div>
                </div>
            </Fragment>
        );
    },

    save: ({ attributes }) => {
        const { formShortcode, imageUrl, heading, content } = attributes;

        return (
            <div className="custom-contact-block">
                <div className="contact-left">
                    <div className="image-container">
                        {imageUrl && <img src={imageUrl} alt="Contact Illustration" />}
                    </div>
                    <div className="contact-info">
                        {/* Render editable content on the frontend */}
                        <RichText.Content tagName="h2" value={heading} />
                        <RichText.Content tagName="p" value={content} />
                        <p>📧 info@novoit.com</p>
                        <p>📞 +46 (0)70–791 81 77</p>
                    </div>
                </div>
                <div className="contact-right">
                    <div dangerouslySetInnerHTML={{ __html: formShortcode }} />
                </div>
            </div>
        );
    },
});
