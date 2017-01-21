/**
 * @file The test for the traversing of the element.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { BFSElementTraversal } from 'cory/traversal/element/BFSElementTraversal';
import { DFSElementTraversal } from 'cory/traversal/element/DFSElementTraversal';
import { IElementVisitor } from 'cory/traversal/element/IElementVisitor';

import { IXMLParser } from 'cory/xml/IXMLParser';
import { NormalXMLParser } from 'cory/xml/NormalXMLParser';

describe('Traversal testing', (): void => {

    let xmlDoc: Document = null;

    beforeAll((done: DoneFn): void => {
        let parser: IXMLParser = new NormalXMLParser();
        parser.parse(`
            <Form xmlns="cory/components/form"
                xmlns:m="cory/components/mobile"
                xmlns:l="cory/components/layout"
                xmlns:card="xxx/bank/card">
                <TextBox></TextBox>
                <Button></Button>
                <m:List>
                    <m:UISwitch></m:UISwitch>
                </m:List>
                <l:Panel>
                    <l:VGroup>
                        <TextBox></TextBox>
                        <RadioButton></RadioButton>
                        <SubmitButton></SubmitButton>
                    </l:VGroup>
                    <l:ScrollPanel>
                        <l:HGroup>
                            <card:CreditCard></card:CreditCard>
                            <card:CreditCard></card:CreditCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                        </l:HGroup>
                    </l:ScrollPanel>
                </l:Panel>
            </Form>
        `).then((xml: Document): void => {
            xmlDoc = xml;
            done();
        });
    })

    it('dfs traversal', (): void => {
        console.log('dfs element traversal');
        expect(xmlDoc).not.toBeNull('The document parsed should have value.');
        new DFSElementTraversal().traversal(<Element>xmlDoc.firstChild, new ElementVisitor());
    });

    it('bfs traversal', (): void => {
        console.log('bfs element traversal');
        expect(xmlDoc).not.toBeNull('The document parsed should have value.');
        new BFSElementTraversal().traversal(<Element>xmlDoc.firstChild, new ElementVisitor());
    });
});

class ElementVisitor implements IElementVisitor {

    visit(element: Element): void {
        expect(element.namespaceURI).not.toBeNull('The namespace of the element should be existed.');
        console.log(`${element.namespaceURI}/${element.localName}`);
    }
}