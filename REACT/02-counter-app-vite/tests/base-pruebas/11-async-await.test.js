import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas eb 11-async-await', () => {
    test('getImagen debe de retornar un URL de la imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    })
})