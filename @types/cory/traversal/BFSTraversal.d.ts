import { ITraversal } from 'cory/traversal/ITraversal';
import { ITraversable } from 'cory/traversal/ITraversable';
import { ITraversedVisitor } from 'cory/traversal/ITraversedVisitor';
export declare class BFSTraversal implements ITraversal {
    private queue;
    private visitedMap;
    traversal(rootTraversable: ITraversable, visitor: ITraversedVisitor): void;
    private getUnvisitedChildTraversable(traversable);
}
