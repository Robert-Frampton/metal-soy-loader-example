'use strict';

import templates from './Example.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './Child';

class Example extends Component {
}
Soy.register(Example, templates);

export { Example };
export default Example;
