/**
 * @file The bfs traversal.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { ITraversal } from 'cory/traversal/ITraversal';
import { ITraversable } from 'cory/traversal/ITraversable';
import { ITraversedVisitor } from 'cory/traversal/ITraversedVisitor';

export class BFSTraversal implements ITraversal {

    /**
     * The temp queue of the traversing.
     * @type {Array}
     */
    private queue: ITraversable[] = [];

    /**
     * The visited traversable map in the traversing.
     * @type {Map<ITraversable, boolean>}
     */
    private visitedMap: Map<ITraversable, boolean> = new Map<ITraversable, boolean>();

    /**
     * Traversals the root traversable.
     * @param {ITraversable} rootTraversable
     * @param {ITraversedVisitor} visitor
     */
    public traversal(rootTraversable: ITraversable, visitor: ITraversedVisitor): void {
        this.queue.push(rootTraversable);
        this.visitedMap.set(rootTraversable, true);
        visitor.visit(rootTraversable);
        while (this.queue.length) { // Until the queue will be empty
            // Get the first traversable of the stack
            let currentTraversable: ITraversable = this.queue.shift();
            let child: ITraversable = null;
            while (child = this.getUnvisitedChildTraversable(currentTraversable)) {
                this.queue.push(child);
                this.visitedMap.set(child, true);
                visitor.visit(child);
            }
        }
        this.visitedMap.clear(); // clean all of the visited elements.
    }

    /**
     * Get the unvisited traversable child.
     * @param {ITraversable} traversable
     * @return {ITraversable}
     */
    private getUnvisitedChildTraversable(traversable: ITraversable): ITraversable {
        let children: ITraversable[] = traversable.getChildren();
        for (let i = 0, j = children.length; i < j; ++i) {
            let child: ITraversable = children[i];
            if (!this.visitedMap.has(child)) {
                return child;
            }
        }
        return null;
    }
}