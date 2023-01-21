
let setFeedback = (value: boolean) => {};

export const setFunc = (func: (value: boolean) => void) => {
    setFeedback = func;
}

export const showFeedback = () => setFeedback(true);
export const closeFeedback = () => setFeedback(false);