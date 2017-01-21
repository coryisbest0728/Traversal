/**
 * @file The dfs element traversal.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IElementTraversal } from 'cory/traversal/element/IElementTraversal';
import { IElementVisitor } from 'cory/traversal/element/IElementVisitor';

export class DFSElementTraversal implements IElementTraversal {

    /**
     * The temp stack of the traversing.
     * @type {Array}
     */
    private stack: Element[] = [];

    /**
     * The visited element map in the traversing.
     * @type {Map<Element, boolean>}
     */
    private visitedMap: Map<Element, boolean> = new Map<Element, boolean>();

    /**
     * Traversals the root element.
     * @param {Element} rootElement
     * @param {IElementVisitor} visitor
     */
    public traversal(rootElement: Element, visitor: IElementVisitor): void {
        this.stack.push(rootElement);
        this.visitedMap.set(rootElement, true);
        visitor.visit(rootElement);
        while (this.stack.length) { // Until the stack will be empty
            // Get the top traversable of the stack
            let currentElement: Element = this.stack[this.stack.length - 1];
            let child: Element = this.getUnvisitedChildElement(currentElement);
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
     * Get the unvisited element's child.
     * @param {Element} element
     * @return {Element}
     */
    private getUnvisitedChildElement(element: Element): Element {
        let childList: NodeList = element.childNodes;
        for (let i = 0, j = childList.length; i < j; ++i) {
            let child: Element = <Element>childList[i];
            if (!this.visitedMap.has(child)) {
                return child;
            }
        }
        return null;
    }
}