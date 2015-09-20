import { expect } from 'chai';
import { renderToString } from '../../../../web/utils/react';
import App from '../../../../web/ui/components/app';

describe('./web/ui/components/app', () => {

    it('should render h1 element', () => {
        var html = renderToString(App, {});
        expect(html).to.match(/^\<h1(.+)\<\/h1\>$/);
    });

});
