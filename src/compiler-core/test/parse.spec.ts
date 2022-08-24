import { baseParse } from '../src/parse';
import { NodeTypes } from '../src/ast';
describe('Parse', () => {
  it('interpolation', () => {
    const ast = baseParse('{{message}}');
    //root
    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.INTERPOLATION,
      content: {
        type: NodeTypes.SIMPLE_EXPRESSION,
        content: 'message',
      },
    });
  });

  it('element parse', () => {
    const ast = baseParse('<div></div>');
    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.ELEMENT,
      tag: 'div',
    });
  });
});