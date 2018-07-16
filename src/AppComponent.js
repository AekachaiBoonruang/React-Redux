import React, {Component} from 'react';
import styled from 'styled-components';

const StyledView = styled.p.attrs({
    color: props => props.color,
})`
  color: ${props => props.color};
`;

class AppComponent extends Component {

    render() {
        const color = this.props.color;
        return (
            <div>
                <StyledView color={color}>
                    <input type="checkbox" onClick={this.props.handleChange}/> TestComponents
                </StyledView>
                {console.log(color)}
            </div>
        );
    }
}

export default AppComponent;
