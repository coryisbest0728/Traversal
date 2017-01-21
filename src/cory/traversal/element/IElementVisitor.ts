/**
 * @file The traversed visitor for the element traversal.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

export interface IElementVisitor {

    /**
     * The visitor visit the element traversal.
     * @param {Element} element
     */
    visit(element: Element): void;
}