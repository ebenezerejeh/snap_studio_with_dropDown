 
import todoIcon from '../assets/images/icon-todo.svg'
import calenderIcon from '../assets/images/icon-calendar.svg'
import remindersIcon from '../assets/images/icon-reminders.svg'
import planningIcon from '../assets/images/icon-planning.svg'
import companyIcon from '../assets/images/link_img.png'

const sublinks = [
    {
        page: 'Features',
        links: [
            {label: 'Todo List', icon: todoIcon},
            {label: 'Calendar', icon: calenderIcon},
            {label: 'Reminders', icon: remindersIcon},
            {label: 'Planning', icon: planningIcon},
            
        ],
    },
    
    {
        page: 'Company',
        links: [
            {label: 'History', icon: companyIcon},
            {label: 'Our Team', icon: companyIcon},
            {label: 'Blog', icon: companyIcon},
            
        ],
    },
];

export default sublinks;

//         {label: 'Todo List', icon: {todoIcon} },
//         {label: 'Calendar', icon: {calenderIcon} },
//         {label: 'Reminders', icon: {remindersIcon} },
//         {label: 'Planning', icon: {planningIcon} },
// {label: 'History', icon: {planningIcon} },
// {label: 'Our Team', icon: {planningIcon} },
// {label: 'Blog', icon: {planningIcon} },