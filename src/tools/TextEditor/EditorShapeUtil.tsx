import {
  getDefaultColorTheme,
  HTMLContainer,
  Rectangle2d,
  resizeBox,
  ShapeUtil,
  TLOnResizeHandler,
} from "@tldraw/tldraw";
import { useState } from "react";
import { cardShapeMigrations } from "../card-shape/card-shape-migrations";
import { cardShapeProps } from "../card-shape/card-shape-props";
import { ICardShape } from "../card-shape/card-shape-types";
import Editor from "./Editor";

export class EditorShapeUtil extends ShapeUtil<ICardShape> {
  static override type = "text_editor" as const;
  static override props = cardShapeProps;
  static override migrations = cardShapeMigrations;

  // Flags
  override isAspectRatioLocked = (_shape: ICardShape) => false;
  override canResize = (_shape: ICardShape) => true;
  override canBind = (_shape: ICardShape) => true;

  getDefaultProps(): ICardShape["props"] {
    return {
      w: 300,
      h: 300,
      color: "black",
      weight: "regular",
    };
  }

  getGeometry(shape: ICardShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  // Render method — the React component that will be rendered for the shape
  component(shape: ICardShape) {
    const theme = getDefaultColorTheme({ isDarkMode: true });

    return (
      <HTMLContainer
        id={shape.id}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "all",
          fontWeight: shape.props.weight,
          color: theme[shape.props.color].solid,
        }}
      >
        <Editor />
      </HTMLContainer>
    );
  }

  // Indicator — used when hovering over a shape or when it's selected; must return only SVG elements here
  indicator(shape: ICardShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }

  // Events
  override onResize: TLOnResizeHandler<ICardShape> = (shape, info) => {
    return resizeBox(shape, info);
  };
}
