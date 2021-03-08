import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor() {};

  title = 'El Tour De Heroes';
  learner = 'SJGuzman';
}


/*
	The RouterOutlet is one of the router directives that became available to the AppComponent
	because AppModule imports AppRoutingModule which exported RouterModule. 
	The ng generate command you ran at the start of this tutorial added this import because of 
	the --module=app flag. If you manually created app-routing.module.ts or used a tool other than 
	the CLI to do so, you'll need to import AppRoutingModule into app.module.ts and add it to the 
	imports array of the NgModule.
 */