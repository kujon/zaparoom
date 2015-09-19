import { expect } from 'chai';
import React from 'react';
import { render } from '../../../web/utils/react';

describe('./web/utils/react', () => {

    describe('#render', () => {

        it('should return IO ReactElement', () => {
            var elem = render(React.createElement('div'), '.test-target');
            expect(elem.runIO).to.be.a('function');
        });

    });

});
