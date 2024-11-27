import { MarkSpec, NodeSpec, Schema } from "prosemirror-model";

const nodes: { [key: string]: NodeSpec } = {
  text: {
    group: "inline",
  },
  star: {
    inline: true,
    group: "inline",
    toDOM() { return ["star", "🔥"] },
    parseDOM: [{ tag: "star" }]
  },
  litsi_element: {
    inline: true,
    group: 'inline',
    toDOM() { return ["litsi-element"] },
    parseDOM: [{ tag: "litsi-element" }]
  },
  paragraph: {
    group: "block",
    content: "inline*",
    toDOM() { return ["p", 0] },
    parseDOM: [{ tag: "p" }]
  },
  heading: {
    attrs: { level: { default: 1 } },
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [
      { tag: "h1", attrs: { level: 1 } },
      { tag: "h2", attrs: { level: 2 } },
      { tag: "h3", attrs: { level: 3 } },
      { tag: "h4", attrs: { level: 4 } },
      { tag: "h5", attrs: { level: 5 } },
      { tag: "h6", attrs: { level: 6 } },
    ],
    toDOM(node) {
      return ["h" + <string>node.attrs.level, 0];
    },
  },
  boring_paragraph: {
    group: "block",
    content: "text*",
    marks: "",
    toDOM() { return ["p", { class: "boring" }, 0] },
    parseDOM: [{ tag: "p.boring", priority: 60 }]
  },
  doc: {
    content: "block+"
  }
}

const marks: { [key: string]: MarkSpec } = {
  strong: {
    parseDOM: [
      { tag: "b" },
      { tag: "strong" },
    ],
    toDOM() {
      return ["strong"];
    },
  },
}

export const litsiSchema = new Schema({
  nodes,
  marks
});
