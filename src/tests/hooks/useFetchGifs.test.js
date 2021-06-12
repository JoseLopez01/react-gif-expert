import { renderHook } from '@testing-library/react-hooks';
import { useFecthGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en hook useFetchGif', () => {

  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('One Punch'));
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toHaveLength(0);
    expect(loading).toBeTruthy();
  });

  test('Debe retornar un arreglo de imagenes y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('One Punch'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data).toHaveLength(10);
    expect(loading).toBeFalsy();
  });

});