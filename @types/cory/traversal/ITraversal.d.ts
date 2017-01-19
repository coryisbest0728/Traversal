import { ITraversable } from 'cory/traversal/ITraversable';
import { ITraversedVisitor } from 'cory/traversal/ITraversedVisitor';
export interface ITraversal {
    traversal(rootTraversable: ITraversable, visitor: ITraversedVisitor): void;
}
