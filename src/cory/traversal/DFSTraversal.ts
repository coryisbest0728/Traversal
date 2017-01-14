/**
 * @file The dfs traversal.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { ITraversal } from 'cory/traversal/ITraversal';
import { ITraversable } from 'cory/traversal/ITraversable';
import { ITraversedVisitor } from 'cory/traversal/ITraversedVisitor';

export class DFSTraversal implements ITraversal {

    /**
     * The temp stack of the traversing.
     * @type {Array}
     */
    private stack: ITraversable[] = [];

    /**
     * The visited traversable map in the traversing.
     * @type {Map<ITraversable, boolean>}
     */
    private visitedMap: Map<ITraversable, boolean> = new Map<ITraversable, boolean>();

    /**
     * Traversals the root traversable.
     * @param {ITraversable} rootTraversable
     * @param {ITraversedVisitor?} visitor
     */
    public traversal(rootTraversable: ITraversable, visitor: ITraversedVisitor): void {
        this.stack.push(rootTraversable);
        this.visitedMap.set(rootTraversable, true);
        visitor.visit(rootTraversable);
        while (this.stack.length) { // Until the stack will be empty
            // Get the top traversable of the stack
            let currentTraversable: ITraversable = this.stack[this.stack.length - 1];
            let child: ITraversable = this.getUnvisitedChildTraversable(currentTraversable);
            if (child) {
                this.stack.push(child);
                this.visitedMap.set(child, true);
                visitor.visit(child);
            } else {
                this.stack.pop();
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