import { expect } from 'chai';
import { $ } from '../../../web/utils/dom';

describe('./web/utils/dom', () => {

    describe('#$', () => {

        it('should return IO DOM', () => {
            var node = $('.test-selector');
            expect(node.runIO).to.be.a('function');
        });

    });

});
