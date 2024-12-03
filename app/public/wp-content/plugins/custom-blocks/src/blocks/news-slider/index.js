import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, MediaUpload, RichText, InspectorControls } from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";
import { Fragment, useState, useEffect, useRef } from "@wordpress/element";

registerBlockType("custom/news-slider-block", {
  attributes: {
    slides: {
      type: "array",
      default: []
    }
  },

  edit: ({ attributes, setAttributes }) => {
    const { slides } = attributes;

    const addSlide = () => {
      const newSlide = {
        date: "Datum och tid",
        title: "Lorem ipsum dolor sit amet",
        description: "Short description of the news item.",
        image: ""
      };
      setAttributes({ slides: [...slides, newSlide] });
    };

    const updateSlide = (index, key, value) => {
      const updatedSlides = [...slides];
      updatedSlides[index][key] = value;
      setAttributes({ slides: updatedSlides });
    };

    const removeSlide = (index) => {
      const updatedSlides = slides.filter((_, i) => i !== index);
      setAttributes({ slides: updatedSlides });
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Settings">
            <Button isSecondary onClick={addSlide}>
              Add Slide
            </Button>
          </PanelBody>
        </InspectorControls>
        <div {...useBlockProps({ className: "news-slider-block" })}>
          {slides.map((slide, index) => (
            <div key={index} className="news-slide">
              <MediaUpload
                onSelect={(media) => updateSlide(index, "image", media.url)}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button onClick={open} isSecondary>
                    {slide.image ? "Change Image" : "Upload Image"}
                  </Button>
                )}
              />
              {slide.image && <img src={slide.image} alt={slide.title} />}
              <RichText
                tagName="h4"
                value={slide.date}
                onChange={(value) => updateSlide(index, "date", value)}
                placeholder="Enter date"
              />
              <RichText
                tagName="h3"
                value={slide.title}
                onChange={(value) => updateSlide(index, "title", value)}
                placeholder="Enter title"
              />
              <RichText
                tagName="p"
                value={slide.description}
                onChange={(value) => updateSlide(index, "description", value)}
                placeholder="Enter description"
              />
              <Button isDestructive onClick={() => removeSlide(index)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
      </Fragment>
    );
  },

  save: ({ attributes }) => {
    const { slides } = attributes;

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      if (slides.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }, [slides]);

    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: currentSlide * sliderRef.current.offsetWidth,
          behavior: "smooth"
        });
      }
    }, [currentSlide]);

    return (
        <div className="news-slider-block">
          <div className="news-slider-track">
            {slides.map((slide, index) => (
              <div key={index} className="news-slide">
                {slide.image && <img src={slide.image} alt={slide.title} />}
                <h4>{slide.date}</h4>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
  }
});
