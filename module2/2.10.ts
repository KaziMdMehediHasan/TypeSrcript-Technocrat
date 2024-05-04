{
    //mapped types
    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height']; //look up type
    type AreaString = {
        // [key in 'height' | 'width']: string;
        [key in keyof AreaNumber]: string;
    }

    // now we are going to make the mapped type dynamic with generic type

    type Volume<T> = {
        [key in keyof T]: T[key];
    }

    const volume: Volume<{ height: number; width: string; depth: boolean }> = {
        height: 50,
        width: '40feet',
        depth: true

    }
    //
}