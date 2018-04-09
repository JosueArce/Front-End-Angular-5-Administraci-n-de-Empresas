import { Routes } from '@angular/router';


//components
import { ComponentsComponent } from './components/components.component';
import { DimensionsComponent } from './dimensions/dimensions.component';

//routes
export const ComponentsRoutes : Routes = [
	{
		path : 'components',
		component : ComponentsComponent
	},
	{
		path : 'dimensions',
		component : DimensionsComponent
	}
];