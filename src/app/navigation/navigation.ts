import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id   : 'analytics',
        title: 'Analytics',
        type : 'item',
        icon : 'timeline',
        url  : '/apps/dashboards/analytics'
    },

    {
        id   : 'project',
        title: 'Project',
        type : 'item',
        icon : 'send',
        url  : '/apps/dashboards/project'
    },

    {
        id   : 'form',
        title: 'Form',
        type : 'item',
        icon : 'description',
        url  : '/apps/dashboards/form'
    },

    {
        id       : 'calendar',
        title    : 'Calendar',
        translate: 'NAV.CALENDAR',
        type     : 'item',
        icon     : 'today',
        url      : '/apps/calendar'
    }
    
    {
        id   : 'coming-soon',
        title: 'Coming Soon',
        type : 'item',
        icon : 'alarm',
        url  : '/pages/coming-soon'
    },
    
    {
        id   : 'faq',
        title: 'Faq',
        type : 'item',
        icon : 'help',
        url  : '/pages/faq'
    },

    {
        id   : 'knowledge-base',
        title: 'Knowledge-base',
        type : 'item',
        icon : 'import_contacts',
        url  : '/pages/knowledge-base'
    },

    {
        id   : 'change-log',
        title: 'Change-log',
        type : 'item',
        icon : 'update',
        url  : '/documentation/change-log'
    }

];
