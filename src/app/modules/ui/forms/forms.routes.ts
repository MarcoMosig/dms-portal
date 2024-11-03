import { Routes } from '@angular/router';
import { FormsFieldsComponent } from 'app/modules/ui/forms/fields/fields.component';
import { FormsLayoutsComponent } from 'app/modules/ui/forms/layouts/layouts.component';
import { FormsWizardsComponent } from 'app/modules/ui/forms/wizards/wizards.component';

export default [
    {
        path     : 'fields',
        component: FormsFieldsComponent,
    },
    {
        path     : 'layouts',
        component: FormsLayoutsComponent,
    },
    {
        path     : 'wizards',
        component: FormsWizardsComponent,
    },
] as Routes;
