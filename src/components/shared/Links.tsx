import React from 'react';
import SvgIcons from "../../utils/SvgIcons";
import {StyledComponent} from "styled-components";
import {ContactsConstants} from "../../utils/constants/Contacts";

export const FacebookLink = (props: {button: StyledComponent<any, any>}) => {
    return (
        <props.button onClick={() => window.open(ContactsConstants.facebook)}>
            {SvgIcons.facebook}
        </props.button>
    );
};

export const InstagramLink = (props: {button: StyledComponent<any, any>}) => {
    return (
        <props.button onClick={() => window.open(ContactsConstants.instagram)}>
            {SvgIcons.instagram}
        </props.button>
    );
};
