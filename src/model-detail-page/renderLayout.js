import React, { useState } from "react";
import { css, cx } from "emotion";
import { TabList, Tab } from "../tabs";
import Record from "./Record";
import HasMany from "./HasMany";

const layoutComponents = {
  Row: props => {
    return (
      <div key={props.key} className={cx("row")}>
        {renderLayout(props)(props.children)}
      </div>
    );
  },
  Div: props => {
    return (
      <div key={props.key} className={cx(props.className)}>
        {renderLayout(props)(props.children)}
      </div>
    );
  },
  Col: props => {
    return (
      <div
        key={props.key}
        className={props.className ? props.className : "col"}
      >
        {renderLayout(props)(props.children)}
      </div>
    );
  },
  Tabs: props => {
    return (
      <div
        className={css`
          margin-bottom: 32px;
        `}
      >
        <Tabs {...props} />
      </div>
    );
  },
  RecordDetailTable: props => {
    return (
      <div
        className={css`
          margin-bottom: 32px;
        `}
      >
        <Record {...props} />
      </div>
    );
  },
  HasMany
};

const defaultComponentRenderer = props => (
  <div>
    <h2>{props.type}</h2>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

const renderComponent = ({ key, ctx, type }) => {
  const ComponentDatas = ctx.schema.ComponentDatas || {}
  const component = ComponentDatas[type];

  let Component = defaultComponentRenderer;

  if (component) {
    Component = ctx.components[component.type] || layoutComponents[component.type];
  }

  return (
    <div
      className={css`
        margin-bottom: 32px;
      `}
    >
      <Component type={type} {...ctx} {...component} />
    </div>
  );
};

const Tabs = props => {
  const { style, ctx, children } = props;
  const [activeChild, setActiveChild] = useState(0);

  const child = children[activeChild];

  return (
    <div style={style}>
      <TabList>
        {children.map((child, index) => (
          <Tab
            active={index === activeChild}
            onClick={() => setActiveChild(index)}
          >
            {child.title ? child.title : "Naamloos"}
          </Tab>
        ))}
      </TabList>
      <div
        className={css`
          margin-top: 32px;
        `}
      >
        {renderLayoutChild(props)(child, child.type)}
      </div>
    </div>
  );
};

const renderLayoutChild = ctx => (child, key) => {
  const type = child.type;
  const Component = ctx.components[type] || layoutComponents[type];

  if (!Component) {
    return renderComponent({ key, ctx, type });
  }

  return <Component key={key} type={type} {...ctx} {...child} />;
};

const renderLayout = ctx => children =>
  children ? children.map(renderLayoutChild(ctx)) : null;

export default renderLayout;
