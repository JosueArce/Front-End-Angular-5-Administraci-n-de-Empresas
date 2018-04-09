import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentsRoutes } from './ComponentsProject.routing';

//components are imported here
import { ComponentsComponent } from './components/components.component';
import { DimensionsComponent } from './dimensions/dimensions.component';

@NgModule({
	imports : [
		CommonModule,
	    RouterModule.forChild(ComponentsRoutes),
	    DemoMaterialModule,
	    HttpModule,
	    FormsModule,
	    ReactiveFormsModule,
	    FlexLayoutModule,
	    CdkTableModule
	],
	providers :[],
	entryComponents :[],
	declarations :[
		ComponentsComponent,
		DimensionsComponent
	]
})

export class ComponentsProjectModule {}