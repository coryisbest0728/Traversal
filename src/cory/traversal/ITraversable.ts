/**
 * @file The traversable interface
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

export interface ITraversable {

    /**
     * @return {ITraversable[]} The children of the traversable.
     */
    getChildren(): ITraversable[];
}