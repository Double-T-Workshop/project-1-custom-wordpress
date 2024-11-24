// import { registerBlockType } from "@wordpress/blocks";
// import { RichText, MediaUpload, InspectorControls } from "@wordpress/block-editor";
// import { PanelBody, Button } from "@wordpress/components";
// import "./style.css"; // Include the CSS

// registerBlockType("custom/news-slider", {
//   title: "News Slider",
//   category: "design",
//   icon: "images-alt2",
//   attributes: {
//     slides: {
//       type: "array",
//       default: [
//         {
//           title: "Title 1",
//           date: "15:13 June 5 - Malmö",
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           imageUrl: "",
//         },
//       ],
//     },
//   },

//   edit({ attributes, setAttributes }) {
//     const { slides } = attributes;

//     const updateSlide = (index, updatedSlide) => {
//       const updatedSlides = [...slides];
//       updatedSlides[index] = { ...updatedSlides[index], ...updatedSlide };
//       setAttributes({ slides: updatedSlides });
//     };

//     const addSlide = () => {
//       setAttributes({
//         slides: [
//           ...slides,
//           {
//             title: "New Title",
//             date: "New Date",
//             description: "New Description",
//             imageUrl: "",
//           },
//         ],
//       });
//     };

//     const removeSlide = (index) => {
//       const updatedSlides = slides.filter((_, i) => i !== index);
//       setAttributes({ slides: updatedSlides });
//     };

//     return (
//       <div className="news-slider-editor">
//         {slides.map((slide, index) => (
//           <div className="news-slide" key={index}>
//             <InspectorControls>
//               <PanelBody title={`Slide ${index + 1}`} initialOpen={true}>
//                 <MediaUpload
//                   onSelect={(media) =>
//                     updateSlide(index, { imageUrl: media.url })
//                   }
//                   allowedTypes={["image"]}
//                   render={({ open }) => (
//                     <Button variant="secondary" onClick={open}>
//                       {slide.imageUrl ? "Change Image" : "Upload Image"}
//                     </Button>
//                   )}
//                 />
//                 {slide.imageUrl && (
//                   <img src={slide.imageUrl} alt="Slide Image" className="preview-image" />
//                 )}
//               </PanelBody>
//             </InspectorControls>

//             <RichText
//               tagName="h3"
//               value={slide.title}
//               onChange={(value) => updateSlide(index, { title: value })}
//               placeholder="Enter title..."
//               className="slide-title"
//             />
//             <RichText
//               tagName="p"
//               value={slide.date}
//               onChange={(value) => updateSlide(index, { date: value })}
//               placeholder="Enter date..."
//               className="slide-date"
//             />
//             <RichText
//               tagName="p"
//               value={slide.description}
//               onChange={(value) => updateSlide(index, { description: value })}
//               placeholder="Enter description..."
//               className="slide-description"
//             />
//             <Button variant="secondary" onClick={() => removeSlide(index)}>
//               Remove Slide
//             </Button>
//           </div>
//         ))}
//         <Button variant="primary" onClick={addSlide}>
//           Add Slide
//         </Button>
//       </div>
//     );
//   },

//   save({ attributes }) {
//     const { slides } = attributes;

//     return (
//       <div className="news-slider">
//         {slides.map((slide, index) => (
//           <div className="news-slide" key={index}>
//             {slide.imageUrl && (
//               <img src={slide.imageUrl} alt="Slide Image" className="slide-image" />
//             )}
//             <div className="slide-content">
//               <h3 className="slide-title">{slide.title}</h3>
//               <p className="slide-date">{slide.date}</p>
//               <p className="slide-description">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   },
// });

import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";
import "./style.css"; 

registerBlockType("custom/news-slider", {
  title: "News Slider",
  category: "design",
  icon: "megaphone",
  attributes: {
    slides: {
      type: "array",
      default: [
        {
          title: "Title 1",
          date: "15:13 June 5 - Malmö",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imageUrl: "",
        },
      ],
    },
  },

  edit({ attributes, setAttributes }) {
    const { slides } = attributes;

    const updateSlide = (index, updatedSlide) => {
      const updatedSlides = [...slides];
      updatedSlides[index] = { ...updatedSlides[index], ...updatedSlide };
      setAttributes({ slides: updatedSlides });
    };

    const addSlide = () => {
      setAttributes({
        slides: [
          ...slides,
          {
            title: "New Title",
            date: "New Date",
            description: "New Description",
            imageUrl: "",
          },
        ],
      });
    };

    const removeSlide = (index) => {
      const updatedSlides = slides.filter((_, i) => i !== index);
      setAttributes({ slides: updatedSlides });
    };

    return (
      <div className="news-slider-editor">
        {slides.map((slide, index) => (
          <div className="news-slide" key={index}>
            <InspectorControls>
              <PanelBody title={`Slide ${index + 1}`} initialOpen={true}>
                <MediaUpload
                  onSelect={(media) =>
                    updateSlide(index, { imageUrl: media.url })
                  }
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button variant="secondary" onClick={open}>
                      {slide.imageUrl ? "Change Image" : "Upload Image"}
                    </Button>
                  )}
                />
                {slide.imageUrl && (
                  <img
                    src={slide.imageUrl}
                    alt="Slide Image"
                    className="preview-image"
                  />
                )}
              </PanelBody>
            </InspectorControls>

            <RichText
              tagName="h3"
              value={slide.title}
              onChange={(value) => updateSlide(index, { title: value })}
              placeholder="Enter title..."
              className="slide-title"
            />
            <RichText
              tagName="p"
              value={slide.date}
              onChange={(value) => updateSlide(index, { date: value })}
              placeholder="Enter date..."
              className="slide-date"
            />
            <RichText
              tagName="p"
              value={slide.description}
              onChange={(value) => updateSlide(index, { description: value })}
              placeholder="Enter description..."
              className="slide-description"
            />
            <Button variant="secondary" onClick={() => removeSlide(index)}>
              Remove Slide
            </Button>
          </div>
        ))}
        <Button variant="primary" onClick={addSlide}>
          Add Slide
        </Button>
      </div>
    );
  },

  save({ attributes }) {
    const { slides } = attributes;

    return (
      <div className="news-slider swiper-container">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide news-slide" key={index}>
              {slide.imageUrl && (
                <img
                  src={slide.imageUrl}
                  alt="Slide Image"
                  className="slide-image"
                />
              )}
              <div className="slide-content">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-date">{slide.date}</p>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Swiper navigation */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    );
  },
});
