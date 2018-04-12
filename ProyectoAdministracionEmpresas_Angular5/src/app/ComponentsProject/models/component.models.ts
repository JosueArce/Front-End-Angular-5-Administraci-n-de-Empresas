/*
	Creation date: 08/04/2018
	Author: Josue David Arce Gonzalez
	Description: Component model - use to manage "component" records
*/

export class ComponentModel  {
	constructor(
		public ID_Component : Number,
		public Component : String,
		public ID_Dimension : Number,
		public Dimension : String
	) {
	}
}