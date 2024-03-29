//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules
 } from 'react-native';
import { CardSection } from "./common";
import { connect } from "react-redux";
import * as actions from "../actions";

// create a component
class ListItem extends Component {
    componentDidUpdate(){
       const { UIManager } = NativeModules
       UIManager.setLayoutAnimationEnabledExperimental &&
       UIManager.setLayoutAnimationEnabledExperimental(true)
       LayoutAnimation.spring()
    }
    renderDescription(){
        const { library, expanded } = this.props
        if(expanded){
            return (
                <CardSection>
                    <Text style={{ flex: 1}}>{library.description}</Text>
                </CardSection>
            )
        }
    }
    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

//make this component available to the app
export default connect(mapStateToProps, actions )(ListItem);
 