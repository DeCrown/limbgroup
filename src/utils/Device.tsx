
export let DEVICE = 'desktop';

export const initDevice = () => {
    if (document.body.clientWidth >= 1480) {
        return DEVICE = 'desktop';
    }
    if (document.body.clientWidth >= 980) {
        return DEVICE = 'tablet';
    }
    return DEVICE = 'mobile';
}