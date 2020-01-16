// import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "../../../node_modules/react-syntax-highlighter/dist/styles/prism";

// class CodeBlock extends PureComponent {
//   static propTypes = {
//     value: PropTypes.string.isRequired,
//     language: PropTypes.string
//   };

//   static defaultProps = {
//     language: "java"
//   };

//   render() {
//     const { language, value } = this.props;
//     return (
//       <SyntaxHighlighter language={language} style={coy}>
//         {value}
//       </SyntaxHighlighter>
//     );
//   }
// }

// export default CodeBlock;


import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from '../assets/dist/esm/styles/hljs';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: "java"
  };

  render() {
    const {language, value} = this.props;
    return (
        <SyntaxHighlighter language={language} style={atomOneDark}>
          {value}
        </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;