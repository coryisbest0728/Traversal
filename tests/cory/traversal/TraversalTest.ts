/**
 * @file The test for traversing
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { BFSTraversal } from 'cory/traversal/BFSTraversal';
import { DFSTraversal } from 'cory/traversal/DFSTraversal';
import { ITraversable } from 'cory/traversal/ITraversable';
import { ITraversedVisitor } from 'cory/traversal/ITraversedVisitor';

describe('Traversal testing', (): void => {

    let rootElement: TElement;
    beforeAll((): void => {
        rootElement = new TElement('0');
        let aElement: TElement = new TElement('1');
        aElement.addChild(new TElement('11'));
        aElement.addChild(new TElement('12'));
        aElement.addChild(new TElement('13'));
        let bElement: TElement = new TElement('2');
        bElement.addChild(new TElement('21'));
        let bbElement = new TElement('22');
        bbElement.addChild(new TElement('221'));
        bElement.addChild(bbElement);
        let cElement: TElement = new TElement('3');
        cElement.addChild(new TElement('31'));
        cElement.addChild(new TElement('32'));
        rootElement.addChild(aElement);
        rootElement.addChild(bElement);
        rootElement.addChild(cElement);
    })

    it('dfs traversal', (): void => {
        console.log('dfs traversal');
        new DFSTraversal().traversal(rootElement, new TElementVisitor());
    });

    it('bfs traversal', (): void => {
        console.log('bfs traversal');
        new BFSTraversal().traversal(rootElement, new TElementVisitor());
    });
});

class TElement implements ITraversable {

    private children: ITraversable[] = [];

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    addChild(child: ITraversable): void {
        this.children.push(child);
    }

    getChildren(): ITraversable[] {
        return this.children;
    }
}

class TElementVisitor implements ITraversedVisitor {

    visit(traversable: ITraversable): void {
        let element: TElement = <TElement> traversable;
        console.log(element.getName());
    }
}