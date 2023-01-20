import project1image from '../../images/components/projects/1.jpg';
import project2image from '../../images/components/projects/2.jpg';
import project3image from '../../images/components/projects/3.jpg';
import project4image from '../../images/components/projects/4.jpg';
import project5image from '../../images/components/projects/5.jpg';
import project6image from '../../images/components/projects/6.jpg';

interface ProjectType {
    image: string;
    description: any
}

const ProjectList:ProjectType[] = [
    {
        image: project1image,
        description: 'Тут будет описание'
    },
    {
        image: project2image,
        description: 'Тут будет описание'
    },
    {
        image: project3image,
        description: 'Тут будет описание'
    },
    {
        image: project4image,
        description: 'Тут будет описание'
    },
    {
        image: project5image,
        description: 'Тут будет описание'
    },
    {
        image: project6image,
        description: 'Тут будет описание'
    },
    {
        image: project1image,
        description: 'Тут будет описание'
    },
];

const ProjectsMap = {
    desktop: [
        [[]],
        [[]]
    ],
}

export default ProjectList;