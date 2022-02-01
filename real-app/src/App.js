import FavoritePage from "./pages/Favorite";
import NewMeetuPage from "./pages/NewMeetup";
import MeetupPage from "./pages/AllMeetup";
import { Route, Switch } from "react-router-dom";
import Layout from "./component/layout/Layout";
import React from 'react';

function App() {
  return (
    <Layout>
      
        <Switch>

          <Route path="/" exact>
            <MeetupPage />
          </Route>

          <Route path="/favorite">
            <FavoritePage />
          </Route>

          <Route path="/new-meetup">
            <NewMeetuPage />
          </Route>

        </Switch>
     </Layout>

  );
}

export default App;
