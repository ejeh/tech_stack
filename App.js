
//import liraries
import React from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './src/reducers';
import { Header } from "./src/components/common";
import LibraryList from "./src/components/LibraryList";


// create a component
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

//make this component available to the app
export default App;

