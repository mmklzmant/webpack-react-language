import React, {Component} from 'react'
import { FormattedMessage } from 'react-intl';

const LanguageComponent = props => {
    const {name} = props;
    return (
        <div>
            <FormattedMessage
                id="intl.name"
                description='say hello to LM.'
                defaultMessage='Hello, {name}'
                values={{name : name}}
            />
        </div>
    )
}
export default LanguageComponent;