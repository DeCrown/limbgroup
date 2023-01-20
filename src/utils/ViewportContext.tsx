import React, {useEffect, useState} from 'react';

interface ViewportContextType {viewport: {height: number; width: number}; currentChapter: string|null; device: 'mobile'|'tablet'|'desktop'};
export const ViewportContext = React.createContext<ViewportContextType>({
    viewport: {
        height: document.body.clientHeight,
        width: document.body.clientWidth
    },
    currentChapter: null,
    device: 'desktop'
});

export const useViewport = () => React.useContext(ViewportContext);

const Chapters = [
    'header',
    'about',
    'price',
    'clients',
    'projects',
    'relax',
    'footer'
];

export const ViewportProvider = (props: {children?: any}) => {
    const [width, setWidth] = useState(document.body.clientWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [scroll, setScroll] = useState(document.body.scrollTop);
    const [currentChapter, setCurrentChapter] = useState<string|null>(null);
    const [device, setDevice] = useState<'mobile'|'tablet'|'desktop'>('desktop');

    const getCurrentChapter = (height_: number) => {
        let minDif: number | null = null;
        let current = currentChapter;
        Chapters.map(chapter => {
            let ch_ = document.getElementById(chapter);
            if (!ch_) {
                return;
            }
            let rect = ch_.getBoundingClientRect();
            let dif = Math.abs(rect.y + rect.height / 2 - height_ / 2);
            if (minDif === null || minDif > dif) {
                minDif = dif;
                current = chapter;
            }
        });
        return current;
    }

    const getDevice = (width_: number) => {
        if (width_ >= 1480) {
            return 'desktop';
        }
        if (width_ >= 980) {
            return 'tablet';
        }
        return 'mobile';
    }

    useEffect(() => {
        window.addEventListener('load', function(event) {
            setWidth(document.body.clientWidth);
            setHeight(window.innerHeight);
            setScroll(window.scrollY);
        });

        window.addEventListener('resize', function(event) {
            setWidth(document.body.clientWidth);
            setHeight(window.innerHeight);
        });

        window.addEventListener('scroll', function() {
            setScroll(window.scrollY);
        });
    }, []);

    useEffect(() => setCurrentChapter(getCurrentChapter(height)), [width, height, scroll]);
    useEffect(() => setDevice(getDevice(width)), [width, height]);

    return (
        <ViewportContext.Provider value={{viewport: {height, width}, currentChapter, device}}>
            {props.children}
        </ViewportContext.Provider>
    );
}