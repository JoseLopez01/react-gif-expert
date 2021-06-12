import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFecthGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en Gif Grid', () => {
  
  test('Debe crear bien el componente', () => {
    useFecthGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={'One Puch'} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se cargan imagenes', () => {
    const data = [{
      id: 'ABC',
      url: 'https://cosa.jpg',
      title: 'title'
    }];
    useFecthGifs.mockReturnValue({ data, loading: false });
    const wrapper = shallow(<GifGrid category={'One Puch'} />);

    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem')).toHaveLength(data.length);
  });
});