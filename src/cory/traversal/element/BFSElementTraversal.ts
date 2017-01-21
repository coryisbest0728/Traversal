/**
 * @file The bfs element traversal.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IElementTraversal } from 'cory/traversal/element/IElementTraversal';
import { IElementVisitor } from 'cory/traversal/element/IElementVisitor';

export class BFSElementTraversal implements IElementTraversal {

    /**
     * The temp queue of the traversing.
     * @type {Array}
     */
    private queue: Element[] = [];

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
        this.queue.push(rootElement);
        this.visitedMap.set(rootElement, true);
        visitor.visit(rootElement);
        while (this.queue.length) { // Until the queue will be empty
            // Get the first traversable of the stack
            let currentElement: Element = this.queue.shift();
            let child: Element = null;
            while (child = this.getUnvisitedChildElement(currentElement)) {
                this.queue.push(child);
                this.visitedMap.set(child, true);
                visitor.visit(child);
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