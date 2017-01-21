/**
 * @file The traversal interface
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { ITraversable } from 'cory/traversal/ITraversable';
import { ITraversedVisitor } from 'cory/traversal/ITraversedVisitor';

export interface ITraversal {

    /**
     * Traversals the root traversable.
     * @param {ITraversable} rootTraversable
     * @param {ITraversedVisitor} visitor
     */
    traversal(rootTraversable: ITraversable, visitor: ITraversedVisitor): void;
}