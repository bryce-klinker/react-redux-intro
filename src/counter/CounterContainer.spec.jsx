import { Actions } from '../actions';
import { mountWithStore, createMockStore } from '../../testing';
import { CounterContainer } from './CounterContainer';

describe('CounterContainer', () => {
    it('should show current count', () => {
        const store = createMockStore({
            counter: {
                current: 5
            }
        });
        const counter = mountWithStore(CounterContainer, store);
        expect(counter.text()).toContain('5');
    });

    it('should increment count', () => {
        const store = createMockStore();

        const counter = mountWithStore(CounterContainer, store);
        counter.find('.increment-button').simulate('click');
        expect(store.getActions()).toContainEqual(Actions.increment());
    })

    it('should decrement count', () => {
        const store = createMockStore();

        const counter = mountWithStore(CounterContainer, store);
        counter.find('.decrement-button').simulate('click');
        expect(store.getActions()).toContainEqual(Actions.decrement());
    })
})