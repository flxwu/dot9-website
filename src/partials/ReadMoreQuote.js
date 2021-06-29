import React from "react";
export default class ReadMoreQuote extends React.Component {
  constructor(props) {
    super(props);

    let args = [
      this.props.text,
      this.props.min,
      this.props.ideal,
      this.props.max,
    ];

    let primaryText, secondaryText;
    if (this.props.secondaryText) {
      primaryText = this.props.text;
      secondaryText = this.props.secondaryText;
    } else {
      [primaryText, secondaryText] = trimText(...args);
    }

    this.state = {
      displaySecondary: false,
      primaryText,
      secondaryText,
      readMoreText: this.props.readMoreText,
    };
  }

  setStatus() {
    let display = !this.state.displaySecondary;
    this.setState({ displaySecondary: display });
  }

  render() {
    let displayText;
    if (!this.state.secondaryText) {
      displayText = (
        <blockquote className="text-xl font-medium mb-4">
          {`${this.state.primaryText} ${this.state.secondaryText}`}
        </blockquote>
      );
    } else if (this.state.displaySecondary) {
      displayText = (
        <blockquote
          className="text-xl font-medium mb-4"
          onClick={this.setStatus.bind(this)}
        >
          {`${this.state.primaryText} ${this.state.secondaryText}`}
        </blockquote>
      );
    } else {
      displayText = (
        <blockquote className="text-xl font-medium mb-4">
          {this.state.primaryText}
          <span style={{ display: "none" }}>{this.state.secondaryText}</span>
          <div
            className="inline-block ml-2 cursor-pointer text-d9Blue-900"
            onClick={this.setStatus.bind(this)}
          >
            {this.state.readMoreText}
          </div>
        </blockquote>
      );
    }

    return displayText;
  }
}

const PUNCTUATION_LIST = [
  ".",
  ",",
  "!",
  "?",
  "'",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "/",
];

const trimText = (text, min = 80, ideal = 100, max = 200) => {
  //This main function uses two pointers to move out from the ideal, to find the first instance of a punctuation mark followed by a space. If one cannot be found, it will go with the first space closest to the ideal.

  if (max < min || ideal > max || ideal < min) {
    throw new Error(
      "The minimum length must be less than the maximum, and the ideal must be between the minimum and maximum."
    );
  }

  if (text.length < ideal) {
    return [text, ""];
  }

  let pointerOne = ideal;
  let pointerTwo = ideal;
  let firstSpace, resultIdx;

  const setSpace = (idx) => {
    if (spaceMatch(text[idx])) {
      firstSpace = firstSpace || idx;
    }
  };

  while (pointerOne < max || pointerTwo > min) {
    if (checkMatch(pointerOne, text, max, min)) {
      resultIdx = pointerOne + 1;
      break;
    } else if (checkMatch(pointerTwo, text, max, min)) {
      resultIdx = pointerTwo + 1;
      break;
    } else {
      setSpace(pointerOne);
      setSpace(pointerTwo);
    }

    pointerOne++;
    pointerTwo--;
  }

  if (resultIdx === undefined) {
    if (firstSpace && firstSpace >= min && firstSpace <= max) {
      resultIdx = firstSpace;
    } else if (ideal - min < max - ideal) {
      resultIdx = min;
    } else {
      resultIdx = max;
    }
  }

  return [text.slice(0, resultIdx), text.slice(resultIdx).trim()];
};

const spaceMatch = (character) => {
  if (character === " ") {
    return true;
  }
};

const punctuationMatch = (idx, text) => {
  let punctuationIdx = PUNCTUATION_LIST.indexOf(text[idx]);
  if (punctuationIdx >= 0 && spaceMatch(text[idx + 1])) {
    return true;
  }
};

const checkMatch = (idx, text, max, min) => {
  if (idx < max && idx > min && punctuationMatch(idx, text)) {
    return true;
  }
};
