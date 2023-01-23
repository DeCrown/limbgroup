import instagram from '../images/icons/instagram.svg';
import alert from '../images/icons/alert.svg';
import menuMobile from '../images/icons/menumobile.svg';
import menuTablet from '../images/icons/menutablet.svg';
import arrowDown from '../images/icons/arrowdown.svg';
import close from '../images/icons/close.svg';
import blackClose from '../images/icons/blackclose.svg';
import send from '../images/icons/send.svg';
import gamepad from '../images/icons/gamepad.svg';

import logo from '../images/logotypes/logo.svg';
import logoMin from '../images/logotypes/logomin.svg';

import mainBG from '../images/backgrounds/main.png';
import mainMobileBG from '../images/backgrounds/mainMobile.png';
import mainMiniBG from '../images/backgrounds/mainMini.png';
import feedbackBG from '../images/backgrounds/feedback.png';
import countPriceBG from '../images/backgrounds/countPrice.png';
import countPriceTabletBG from '../images/backgrounds/countPriceTablet.png';
import formBG from '../images/backgrounds/form.png';

import sectionsScroller from '../images/components/sections_scroller.svg';
import computer from '../images/components/computer.png';
import aboutUs1 from '../images/components/aboutUs/aboutus1.svg';
import aboutUs2 from '../images/components/aboutUs/aboutus2.svg';
import aboutUs3 from '../images/components/aboutUs/aboutus3.svg';
import aboutUs4 from '../images/components/aboutUs/aboutus4.svg';
import feedbackLineBlack from '../images/components/feedbackLine/feedbacklineBlack.svg';
import feedbackLineGreen from '../images/components/feedbackLine/feedbacklineGreen.svg';
import feedbackLineButton from '../images/components/feedbackLine/feedbacklineButton.svg';
import feedback from '../images/components/feedback2.svg';
import feedbackMobile from '../images/components/feedbackMobile.svg';
import companyLogo from '../images/components/clients/companyLogo.png';
import equalSign from '../images/components/equalSign.svg';
import allProjects from '../images/components/allProjects.png';

export const Icons = {
    instagram: instagram,
    alert: alert,
    menu: {
        mobile: menuMobile,
        tablet: menuTablet
    },
    arrow: {
        down: arrowDown
    },
    close: close,
    blackClose: blackClose,
    send: send,
    gamepad: gamepad
}

export const Logo = {
    logo: logo,
    logoMin: logoMin
}

export const Backgrounds = {
    main: {
        desktop: mainBG,
        mobile: mainMobileBG,
        mini: mainMiniBG
    },
    feedback: feedbackBG,
    countPrice: {
        desktop: countPriceBG,
        tablet: countPriceTabletBG
    },
    form: formBG
}

export const Components = {
    sectionsScroller: sectionsScroller,
    computer: computer,
    aboutUs: [aboutUs1, aboutUs2, aboutUs3, aboutUs4],
    feedbackLine: [feedbackLineBlack, feedbackLineGreen],
    feedbackLineButton: feedbackLineButton,
    feedback: {
        desktop: feedback,
        mobile: feedbackMobile
    },
    companyLogo: companyLogo,
    equalSign: equalSign,
    allProjects: allProjects
}
