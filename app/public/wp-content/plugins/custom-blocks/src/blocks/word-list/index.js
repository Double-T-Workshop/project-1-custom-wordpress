import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

const SWEDISH_ALPHABETS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Z",
  "Å",
  "Ä",
  "Ö",
];

registerBlockType("custom/word-list", {
  title: "Word List Block",
  icon: "editor-ul",
  category: "widgets",
  attributes: {
    words: {
      type: "array",
      default: [], 
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { words } = attributes;
    const [selectedLetter, setSelectedLetter] = useState("A");

    const addWord = () => {
      setAttributes({
        words: [
          ...words,
          { letter: selectedLetter, term: "", description: "" },
        ],
      });
    };

    const updateWord = (index, field, value) => {
      const updatedWords = [...words];
      updatedWords[index][field] = value;
      setAttributes({ words: updatedWords });
    };

    const removeWord = (index) => {
      const updatedWords = words.filter((_, i) => i !== index);
      setAttributes({ words: updatedWords });
    };

    const filteredWords = words.filter(
      (word) => word.letter === selectedLetter
    );

    return (
      <div className="word-list-block">
        <div className="alphabet-bar">
          {SWEDISH_ALPHABETS.map((letter) => (
            <button
              key={letter}
              className={`alphabet ${
                letter === selectedLetter ? "active" : ""
              }`}
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="word-list-editor">
          <h3>Words for {selectedLetter}</h3>
          {filteredWords.map((word, index) => (
            <div key={index} className="word-entry">
              <RichText
                placeholder="Word"
                value={word.term}
                onChange={(value) => updateWord(index, "term", value)}
              />
              <RichText
                placeholder="Description"
                value={word.description}
                onChange={(value) => updateWord(index, "description", value)}
              />
              <button className="remove-word" onClick={() => removeWord(index)}>
                Remove
              </button>
            </div>
          ))}
          <button className="add-word" onClick={addWord}>
            Add Word
          </button>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => {
    const { words } = attributes;

    return (
      <div className="word-list-block">
        <div className="alphabet-bar">
          {SWEDISH_ALPHABETS.map((letter) => (
            <button key={letter} className="alphabet" data-letter={letter}>
              {letter}
            </button>
          ))}
        </div>
        <div className="word-list-content">
          {SWEDISH_ALPHABETS.map((letter) => (
            <div
              key={letter}
              className="word-list-section"
              data-letter={letter}
            >
              <h3>{letter}</h3>
              <ul>
                {words
                  .filter((word) => word.letter === letter)
                  .map((word, index) => (
                    <li key={index} className="word-item">
                      <strong className="word-term">{word.term}</strong>
                      <p className="word-description">{word.description}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  },
});