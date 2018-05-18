import React, { Component } from 'react'
import './index.css'
import {Editor, EditorState} from 'draft-js';

class EditorComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
        return <Editor editorState={this.state.editorState} onChange={this.onChange} />
    }
}

export default EditorComponent
