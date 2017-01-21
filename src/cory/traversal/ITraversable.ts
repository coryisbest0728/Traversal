/**
 * @file The traversable interface
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

export interface ITraversable {

    /**
     * @return {ITraversable[]} The children of the traversable.
     */
    getChildren(): ITraversable[];
}