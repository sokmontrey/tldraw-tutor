import {
  menuItem,
  TLUiIconType,
  TLUiMenuGroup,
  TLUiOverrides,
  toolbarItem,
} from "@tldraw/tldraw";

// In order to see select our custom shape tool, we need to add it to the ui.

const uiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.text_editor = {
      id: "text_editor",
      icon: "code",
      label: "TextEditor",
      kbd: "c",
      readonlyOk: false,
      onSelect: () => {
        editor.setCurrentTool("text_editor");
      },
    };
    return tools;
  },
  toolbar(_app, toolbar, { tools }) {
    // Add the tool item from the context to the toolbar.
    toolbar.splice(4, 0, toolbarItem(tools.text_editor));
    return toolbar;
  },
  keyboardShortcutsMenu(_app, keyboardShortcutsMenu, { tools }) {
    // Add the tool item from the context to the keyboard shortcuts dialog.
    const toolsGroup = keyboardShortcutsMenu.find(
      (group) => group.id === "shortcuts-dialog.tools",
    ) as TLUiMenuGroup;
    toolsGroup.children.push(menuItem(tools.text_editor));
    return keyboardShortcutsMenu;
  },
};

export default uiOverrides;
