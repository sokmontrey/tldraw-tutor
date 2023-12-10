import { BaseBoxShapeTool, TLClickEvent } from "@tldraw/tldraw";

export class EditorShapeTool extends BaseBoxShapeTool {
  static override id = "text_editor";
  static override initial = "idle";
  override shapeType = "text_editor";
}
