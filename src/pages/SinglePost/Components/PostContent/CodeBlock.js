import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from '../../../node_modules/react-syntax-highlighter/dist/esm/styles/hljs';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: "java"
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={atomOneDark}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;