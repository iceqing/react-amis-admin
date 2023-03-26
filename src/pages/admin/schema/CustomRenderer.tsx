import * as React from 'react';
import JsonConsole from './JsonConsole';
import {
  createObject,
  IScopedContext,
  Renderer,
  RendererProps,
  resolveEventData,
  ScopedContext
} from 'amis-core';


interface MyProps  extends RendererProps {

}

@Renderer({
  type: 'my-editor'
})
class CustomRenderer extends React.Component<MyProps> {

  static contextType = ScopedContext;

  constructor(props, context) {
    super(props);
    const scoped = context;
    console.log("context", scoped);
    scoped.registerComponent(this);
  }

  render() {
    return (<div>
      <JsonConsole code={""} onCodeChange={this.props.onChange} context={this.props}></JsonConsole>
  </div>);
  }
}