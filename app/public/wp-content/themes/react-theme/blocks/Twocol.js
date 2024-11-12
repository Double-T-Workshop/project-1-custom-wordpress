import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType('react-theme/blocks', {
    title: __('Twocol', 'react-theme'),
    icon: 'heart',
    category: 'text',
    attributes: {
        leftContent: {
            type: 'string',
            source: 'html',
            selector: '.left',
        },
        rightContent: {
            type: 'string',
            source: 'html',
            selector: '.right',
        },
        leftColor: {
            type: 'string',
            default: '#000000',
        },
        rightColor: {
            type: 'string',
            default: '#000000',
        },
    },

    edit({ attributes, setAttributes }) {
        const { leftContent, rightContent, leftColor, rightColor } = attributes;

        const blockProps = useBlockProps({ className: 'my-two-column-block' });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Column Colors', 'react-theme')} initialOpen={true}>
                        <PanelRow>
                            <label>{__('Left Column Color', 'react-theme')}</label>
                            <ColorPalette
                                value={leftColor}
                                onChange={(newColor) => setAttributes({ leftColor: newColor })}
                            />
                        </PanelRow>
                        <PanelRow>
                            <label>{__('Right Column Color', 'react-theme')}</label>
                            <ColorPalette
                                value={rightColor}
                                onChange={(newColor) => setAttributes({ rightColor: newColor })}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <div className="column left" style={{ color: leftColor }}>
                        <RichText
                            tagName="p"
                            value={leftContent}
                            onChange={(newContent) => setAttributes({ leftContent: newContent })}
                            placeholder={__('Left column content...', 'react-theme')}
                        />
                    </div>
                    <div className="column right" style={{ color: rightColor }}>
                        <RichText
                            tagName="p"
                            value={rightContent}
                            onChange={(newContent) => setAttributes({ rightContent: newContent })}
                            placeholder={__('Right column content...', 'react-theme')}
                        />
                    </div>
                </div>
            </>
        );
    },

    save({ attributes }) {
        const { leftContent, rightContent, leftColor, rightColor } = attributes;

        const blockProps = useBlockProps.save({ className: 'my-two-column-block' });

        return (
            <div {...blockProps}>
                <div className="column left" style={{ color: leftColor }}>
                    <RichText.Content tagName="p" value={leftContent} />
                </div>
                <div className="column right" style={{ color: rightColor }}>
                    <RichText.Content tagName="p" value={rightContent} />
                </div>
            </div>
        );
    }
});
