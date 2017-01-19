import { ITraversable } from 'cory/traversal/ITraversable';
export interface ITraversedVisitor {
    visit(traversable: ITraversable): void;
}
