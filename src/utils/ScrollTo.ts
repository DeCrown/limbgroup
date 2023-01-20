const ScrollTo = (chapter: string) => {
    const chapterElement = document.getElementById(chapter);
    if (chapterElement) {
        chapterElement.scrollIntoView({behavior: 'smooth'});
    }
};

export default ScrollTo;