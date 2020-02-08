import reducer from '../reducers';

describe('Reducer Testing',() => {
    it('Should Return intial State',() => {
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(
            JSON.stringify({
                articles:{},
                gallery:{}
            })
        )
    })

    it('render test for action GET_LATEST ', () => {
        let state={
            articles:[],
            gallery: []
        }

        state = reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual({
            articles:[],
            gallery: []
        })


    })
})
