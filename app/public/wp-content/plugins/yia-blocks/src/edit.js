import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <RichText
                tagName="p" // The tag for editable content
                value={attributes.content} // The current content
                onChange={(content) => setAttributes({ content })} // Sets new content
                placeholder={__('Type your text here...', 'my-custom-block')}
            />
        </div>
    );
}
