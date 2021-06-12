import { shallow } from 'enzyme';
import { GifExpertApp } from '../../GifExpertApp';

describe('Probando GifExpertApp', () => {
  
  test('Debe crear bien el componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid')).toHaveLength(categories.length);
  })
});