import project1image from '../../images/components/projects/1.jpg';
import project2image from '../../images/components/projects/2.jpg';
import project3image from '../../images/components/projects/3.jpg';
import project4image from '../../images/components/projects/4.jpg';
import project5image from '../../images/components/projects/5.jpg';
import project6image from '../../images/components/projects/6.jpg';

export interface ProjectType {
    id: string;
    image: string;
    description: any;
    title: string;
}

const ProjectList:ProjectType[] = [
    {
        id: 'project1',
        image: project1image,
        description:
            <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </>,
        title: 'Сеть кофеень “MUSCOFEE”'
    },
    {
        id: 'project2',
        image: project2image,
        description: 'Тут будет описание',
        title: 'Сеть кофеень “MUSCOFEE”'
    },
    {
        id: 'project3',
        image: project3image,
        description: 'Тут будет описание',
        title: 'Сеть кофеень “MUSCOFEE”'
    },
    {
        id: 'project4',
        image: project4image,
        description: 'Тут будет описание',
        title: 'Сеть кофеень “MUSCOFEE”'
    },
    {
        id: 'project5',
        image: project5image,
        description: 'Тут будет описание',
        title: 'Сеть кофеень “MUSCOFEE”'
    },
    {
        id: 'project6',
        image: project6image,
        description: 'Тут будет описание',
        title: 'Сеть кофеень “MUSCOFEE”'
    },
    {
        id: 'project7',
        image: project1image,
        description: 'Тут будет описание',
        title: 'Сеть кофеень “MUSCOFEE”'
    },
];

export default ProjectList;
