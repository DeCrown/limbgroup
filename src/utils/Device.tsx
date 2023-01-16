
export let DEVICE = 'desktop';

export const initDevice = () => {
    if (window.innerWidth > 1184) {
        return DEVICE = 'desktop';
    }
    if (window.innerWidth > 375) {
        return DEVICE = 'tablet';
    }
    return DEVICE = 'mobile';
}