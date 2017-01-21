/**
 * @file The traversed visitor for the element traversal.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

export interface IElementVisitor {

    /**
     * The visitor visit the element traversal.
     * @param {Element} element
     */
    visit(element: Element): void;
}