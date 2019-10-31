import React, { lazy, Suspense } from "react";

import { withRouter, Switch, Route } from "react-router-dom";

const ListItems = lazy(() => import("./ListItems/ListItems"));
const SingleVideo = lazy(() => import("./SingleVideo/SingleVideo"));
const NotFound = lazy(() => import("./404"));

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<>loading..</>}>
        <Switch>
          <Route
            path="/results"
            render={() => <ListItems key={this.props.location.key} />}
          />
          <Route path="/watch/:item" exact component={SingleVideo} />
          <Route path="/404" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
