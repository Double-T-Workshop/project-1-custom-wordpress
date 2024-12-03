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
    },

    attributes: {
        formShortcode: { type: "string", default: "[contact-form-7 id='6bdd3b1' title='Contact form 1']" },
        formId: { type: "string", default: "6bdd3b1" }, // New attribute for form ID
        formTitle: { type: "string", default: "Contact form 1" }, // New attribute for form title
        imageUrl: { type: "string", default: "path/to/image.jpg" },
        heading: { type: "string", default: "Kontakta oss" },
        content: { type: "string", default: "Har du frågor eller vill du veta mer om våra tjänster? Tveka inte att höra av dig till oss! Vi finns här för att hjälpa dig att hitta rätt IT-lösning för ditt företag." },
        email: { type: "string", default: "info@novoit.com" },
        phone: { type: "string", default: "+46 (0)70–791 81 77" }
    },
    
    

    edit: ({ attributes, setAttributes }) => {
        const { formId, formTitle, imageUrl, heading, content, email, phone } = attributes;
    
        const onImageSelect = (media) => setAttributes({ imageUrl: media.url });
        const onChangeHeading = (value) => setAttributes({ heading: value });
        const onChangeContent = (value) => setAttributes({ content: value });
        const onChangeEmail = (value) => setAttributes({ email: value });
        const onChangePhone = (value) => setAttributes({ phone: value });
        const onChangeFormId = (value) => setAttributes({
            formId: value,
            formShortcode: `[contact-form-7 id='${value}' title='${formTitle}']`
        });
        const onChangeFormTitle = (value) => setAttributes({
            formTitle: value,
            formShortcode: `[contact-form-7 id='${formId}' title='${value}']`
        });
    
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
                        <label>Form ID</label>
                        <input
                            type="text"
                            value={formId}
                            onChange={(e) => onChangeFormId(e.target.value)}
                            placeholder="Enter form ID"
                        />
                        <label>Form Title</label>
                        <input
                            type="text"
                            value={formTitle}
                            onChange={(e) => onChangeFormTitle(e.target.value)}
                            placeholder="Enter form title"
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
                            <RichText
                                tagName="h2"
                                value={heading}
                                onChange={onChangeHeading}
                                placeholder="Enter heading..."
                            />
                            <RichText
                                tagName="p"
                                value={content}
                                onChange={onChangeContent}
                                placeholder="Enter description..."
                            />
                            <RichText
                                tagName="p"
                                value={email}
                                onChange={onChangeEmail}
                                placeholder="Enter email..."
                            />
                            <RichText
                                tagName="p"
                                value={phone}
                                onChange={onChangePhone}
                                placeholder="Enter phone number..."
                            />
                        </div>
                    </div>
                    <div className="contact-right">
                        <div dangerouslySetInnerHTML={{ __html: attributes.formShortcode }} />
                    </div>
                </div>
            </Fragment>
        );
    },
    
    
    save: ({ attributes }) => {
        const { formShortcode, imageUrl, heading, content, email, phone } = attributes;
    
        return (
            <div className="custom-contact-block">
                <div className="contact-left">
                    <div className="image-container">
                        {imageUrl && <img src={imageUrl} alt="Contact Illustration" />}
                    </div>
                    <div className="contact-info">
                        <RichText.Content tagName="h2" value={heading} />
                        <RichText.Content tagName="p" value={content} />
                        <RichText.Content tagName="p" value={email} />
                        <RichText.Content tagName="p" value={phone} />
                    </div>
                </div>
                <div className="contact-right">
                    <div dangerouslySetInnerHTML={{ __html: formShortcode }} />
                </div>
            </div>
        );
    },
    
});
