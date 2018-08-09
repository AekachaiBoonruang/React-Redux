import React, {Component} from 'react';
import GridContainer from './GridContainer'
import FlexContainer from './FlexContainer'
import Meterail from './Material'
import MeterailContainer from './MaterialContainer'

class Alaphabettest extends Component {

    state = {
        alphabet : ["Aa","Ää","Bb","ẞ","Cc","Dd","Ee","Ff","Gg","Hh","Ii","Jj","Kk","Li","Mm","Nn",
            "Oo","Öö","Pp","Qq","Rr","Ss","Tt","Uu","Üü","Vv","Ww","Xx","Yy","Zz"]
    }

    render() {
        const {alphabet} = this.state
        return (
            <div>
                <GridContainer alphabet={alphabet} />
                <FlexContainer alphabet={alphabet} />
                <Meterail />
                <MeterailContainer alphabet={alphabet} />
            </div>
        );
    }
}

export default Alaphabettest;
