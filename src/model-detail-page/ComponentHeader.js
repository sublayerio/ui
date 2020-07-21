import React from "react";
import { css } from "emotion";
const getComponent = () => null

export default class ComponentHeader extends React.Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        `}
      >
        <div
          className={css`
            flex-grow: 1;
          `}
        >
          <div
            className={css`
              font-size: 21px;
              font-weight: bold;
            `}
          >
            {this.props.name}
          </div>
        </div>
        <div>
          {this.props.actions
            ? this.props.actions.map((component, index) => {
                const Component = getComponent(component);

                return (
                  <Component
                    {...this.props}
                    key={index}
                    component={component}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
