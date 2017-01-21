/**
 * @file The traversed visitor for the traversal.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { ITraversable } from 'cory/traversal/ITraversable';

export interface ITraversedVisitor {

    /**
     * The visitor visit the traversable.
     * @param {ITraversable} traversable
     */
    visit(traversable: ITraversable): void;
}