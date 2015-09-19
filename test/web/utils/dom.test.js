import { expect } from 'chai';
import { $ } from '../../../web/utils/dom';
import { IO } from 'ramda';

describe('./web/utils/dom', () => {

    describe('#$', () => {

        it('should return IO DOM', () => {
            var node = $('.test-selector');
            expect(node.runIO).to.be.a('function');
        });

    });

});
