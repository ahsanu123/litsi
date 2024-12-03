import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LitsiEditor } from './src/editor'
import './index.scss';
import './src/index';

@customElement('main-app')
export class MainApp extends LitElement {
  render() {
    return html`
    <div
      class='litsi-main-container'
    >
    </div>
    `
  }
}

window.editorView = new LitsiEditor(
  document.querySelector('main-app')!
  , `<h2>Litsi - Extended Markdown Editor</h2></br>
     <p>Get all text between positions from and to. When blockSeparator is given, it will be inserted to separate text from different block nodes. If leafText is given, it'll be inserted for every non-text leaf node encountered, otherwise leafText will be used. Replace the part of the document between the given positions with the given slice. The slice must 'fit', meaning its open sides must be able to connect to the surrounding content, and its content nodes must be valid children for the node they are placed into. If any of this is violated, an error of type ReplaceError is thrown.</p>
     <p><strong>Test whether replacing the range between from and to</strong> (by child index) with the given replacement fragment (which defaults to the empty fragment) would leave the node's content valid. You can optionally pass start and end indices into the replacement fragment.</p>
     <p><strong><em>Returns a range based on the place</em></strong> where this position and the given position diverge around block content. <em>If both point into the same textblock, for example, a range around that textblock</em> will be returned. If they point into different blocks, the range around those blocks in their shared ancestor is returned. You can pass in an optional predicate that will be called with a parent node to see if a range into that parent is acceptable.Defines the default way a node of this type should be serialized to DOM/HTML (as used by DOMSerializer.fromSchema). Should return a DOM node or an array structure that describes one, with an optional number zero (“hole”) in it to indicate where the node's content should be inserted.For text nodes, the default is to create a text DOM node. Though it is possible to create a serializer where text is rendered differently, this is not supported inside the editor, so you shouldn't override that in your text node spec.</p>
    `)

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
  interface Window {
    editorView: LitsiEditor
  }
}
