//import liraries
import React, { Component } from 'react';
import { ListView, FlatList } from 'react-native';
import { connect } from "react-redux";
import ListItem from "./ListItem";


// create a component
class LibraryList extends Component {
    renderRow = ({item}) => {
        return <ListItem library={item}/>
    }
    render() {
        return(
            <FlatList
            data={this.props.libraries}
            renderItem={this.renderRow}
            keyExtractor = { (item, index) => index.toString() }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    }
}

//make this component available to the app
export default connect(mapStateToProps)(LibraryList);
