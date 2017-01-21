/**
 * @file The element traversal interface
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IElementVisitor } from 'cory/traversal/element/IElementVisitor';

export interface IElementTraversal {

    /**
     * Traversals the root element.
     * @param {Element} rootElement
     * @param {IElementVisitor} visitor
     */
    traversal(rootElement: Element, visitor: IElementVisitor): void;
}