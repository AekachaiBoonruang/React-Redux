import React, {Component} from 'react';
import styled from 'styled-components';

const StyledView = styled.p`
  color: ${props => props.color};
`;

class AppComponent extends Component {

    render() {
        const {color, handleChange} = this.props;
        return (
            <div>
                <StyledView color={color}>
                    <input type="checkbox" onClick={handleChange}/> TestComponents
                </StyledView>
            </div>
        );
    }
}

export default AppComponent;
