import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <RichText.Content
            {...useBlockProps.save()}
            tagName="p" // Tag to wrap the saved content
            value={attributes.content} // Content to save
        />
    );
}
