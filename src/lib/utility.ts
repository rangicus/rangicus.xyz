// Functions

export function hasOwnProperty<X extends object, Y extends PropertyKey> (object: X, property: Y): object is X & Record<Y, unknown> {
	return object.hasOwnProperty(property);
}
